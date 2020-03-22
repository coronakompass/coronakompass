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

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

export default function GoogleMaps({ onChange, defaultOptions = [] }) {
  const classes = useStyles();
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);
  const [bounds, setBounds] = React.useState();
  const loaded = React.useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBPCJ-2CAlOsWYr5BXrqD6QRFgmgmIx89Y&libraries=places',
        document.querySelector('head'),
        'google-maps',
      );
    }

    loaded.current = true;
  }

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
    const lat = Number(pos.coords.latitude);
    const lon = Number(pos.coords.longitute);
    const shift = 0.1;
    setBounds(
      new window.google.maps.LatLngBounds(
        new window.google.maps.LatLng(lat - shift, lon - shift),
        new window.google.maps.LatLng(lat + shift, lon + shift),
      ),
    );
    autocompleteService.current = new window.google.maps.places.AutocompleteService();
  }

  function currentLocationError() {
    autocompleteService.current = new window.google.maps.places.AutocompleteService();
  }

  React.useEffect(() => {
    let active = true;

    if (!autocompleteService.current && window.google) {
      navigator.geolocation.getCurrentPosition(currentLocationSuccess, currentLocationError);
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === '') {
      setOptions([]);
      return undefined;
    }

    fetchPlaces({ input: inputValue, bounds, componentRestrictions }, (results) => {
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
      popupIcon={<SearchIcon />}
      includeInputInList
      renderInput={(params) => (
        <TextField
          {...params}
          label="Add a location"
          variant="outlined"
          fullWidth
          onChange={handleChange}
        />
      )}
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
