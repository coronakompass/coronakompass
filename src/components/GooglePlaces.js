/* eslint-disable react/jsx-props-no-spreading, react/no-array-index-key */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import parse from 'autosuggest-highlight/parse';
import throttle from 'lodash/throttle';
import useGoogleMaps from '../hooks/useGoogleMaps';

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  popupIndicatorOpen: {
    transform: 'rotate(0deg)',
  },
}));

export default function GooglePlaces({ onChange, label = 'Add a location', defaultOptions = [] }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const [bounds, setBounds] = React.useState();

  useGoogleMaps();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchPlaces = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    [],
  );

  const componentRestrictions = { country: 'de' };

  function currentLocationSuccess(pos) {
    console.log('geolocation.getCurrentPosition position', pos); // eslint-disable-line
    const lat = Number(pos.coords.latitude);
    const lon = Number(pos.coords.longitude);
    const shift = 0.05;
    setBounds(
      new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(lat - shift, lon - shift),
        new window.google.maps.LatLng(lat + shift, lon + shift),
      ),
    );
  }

  function currentLocationError(err) {
    console.error('geolocation.getCurrentPosition error', err); // eslint-disable-line
  }

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      const geoOptions = {
        enableHighAccuracy: false,
        timeout: 2000,
        maximumAge: 60 * 60 * 1000, // 1h
      };
      navigator.geolocation.getCurrentPosition(
        currentLocationSuccess,
        currentLocationError,
        geoOptions,
      );
      autocompleteService.current = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions([]);
      return undefined;
    }

    const placesOptions = { input: inputValue, bounds, componentRestrictions };
    fetchPlaces(placesOptions, (results) => {
      if (active) {
        setOptions(results || []);
      }
    });

    return () => {
      active = false;
    };
  }, [inputValue, fetchPlaces, autocompleteService.current]);

  return (
    <Autocomplete
      id="google-map-demo"
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
      filterOptions={(x) => x}
      options={options.length ? options : defaultOptions}
      autoComplete
      noOptionsText="Keine passenden Orte gefunden"
      popupIcon={<SearchIcon color="primary" />}
      includeInputInList
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" fullWidth onChange={handleChange} />
      )}
      classes={{
        popupIndicatorOpen: classes.popupIndicatorOpen,
      }}
      onChange={onChange}
      renderOption={(option) => {
        const matches = option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match) => [match.offset, match.offset + match.length]),
        );

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              {parts.map((part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                  {part.text}
                </span>
              ))}

              <Typography variant="body2" color="textSecondary">
                {option.structured_formatting.secondary_text}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}
