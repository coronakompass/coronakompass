import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CallMadeIcon from '@material-ui/icons/CallMade';
import CheckIcon from '@material-ui/icons/Check';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import AllFacts from '../components/AllFacts';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMap';
import Header from '../components/Header';
import placeTypes from '../placeTypes';
import useGoogleMaps from '../hooks/useGoogleMaps';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
  },
  icon: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2),
  },
  checkIcon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.success.main,
  },
  status: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    width: `calc(100% + ${theme.spacing(4)}px)`,
    marginLeft: -1 * theme.spacing(2),
  },
  yay: {
    backgroundColor: theme.palette.success.light,
  },
  unknown: {
    backgroundColor: theme.palette.warning.light,
  },
  nay: {
    backgroundColor: theme.palette.error.light,
  },
}));

function getState(details) {
  if (!details || !details.address_components) {
    return null;
  }

  const state = details.address_components.find((component) =>
    component.types.includes('administrative_area_level_1'),
  );

  return state;
}

export default function Ziel() {
  const classes = useStyles();
  const [destination, setDestination] = useState(null);
  const [details, setDetails] = useState(null);
  const router = useRouter();

  const { map } = useGoogleMaps();

  React.useEffect(() => {
    if (!map) {
      return;
    }

    const request = {
      placeId: destination.place_id,
      fields: [
        'address_component',
        'formatted_address',
        'name',
        'permanently_closed',
        'formatted_phone_number',
        'international_phone_number',
        'opening_hours',
        'website',
      ],
    };

    const service = new window.google.maps.places.PlacesService(map);

    service.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setDetails(place);
      }
    });
  }, [map]);

  useEffect(() => {
    try {
      const localStorageDestination = localStorage.getItem('destination');
      const parsed = JSON.parse(localStorageDestination);
      if (parsed) {
        setDestination(parsed);
      }
    } catch (err) {
      // pass
    }
  }, []);

  function startNow() {
    localStorage.setItem('start', JSON.stringify(new Date()));
    router.push('/pass');
  }

  if (!destination) {
    return <LinearProgress />;
  }

  const primaryType = destination.types[0];
  const status = placeTypes[primaryType];
  const DestinationIcon = status.Icon;
  console.log('destination', destination, status, details); // eslint-disable-line

  const state = getState(details);
  console.log('state', state); // eslint-disable-line

  return (
    <Container maxWidth="sm">
      <Head>
        <title>Dein Ziel – Corona Kompass</title>
      </Head>
      <Box my={2}>
        <Header />
        <BackButton />
        <Grid container alignItems="center" className={classes.grid}>
          <Grid item>
            <DestinationIcon className={classes.icon} fontSize="large" />
          </Grid>
          <Grid item xs>
            <Typography variant="h6">
              {destination.structured_formatting.main_text}
              {status.open === true && (
                <CheckIcon className={classes.checkIcon} fontSize="inherit" />
              )}
            </Typography>
            <Typography variant="body2">
              {destination.structured_formatting.secondary_text}
            </Typography>
          </Grid>
        </Grid>

        {status.open === true && (
          <>
            <Box className={clsx(classes.status, classes.yay)}>
              <Typography variant="body1">
                {status.text
                  ? status.text
                  : 'Dieses Ziel kann unseren Informationen zufolge besucht werden. Beachte beim Besuch aber immer einen Mindestabstand von 1,5m von anderen Personen zu halten.'}
              </Typography>
              <AllFacts />
            </Box>
            <GoogleMap destination={destination} />
            <Grid container justify="flex-end" className={classes.buttonContainer}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={startNow}>
                  Jetzt losgehen
                </Button>
              </Grid>
            </Grid>
          </>
        )}
        {status.open === null && (
          <>
            <Box className={clsx(classes.status, classes.unknown)}>
              <Typography variant="body1">
                {status.text
                  ? status.text
                  : 'Leider haben wir derzeit keine Information, ob das gesuchte Ziel besucht werden kann. Bitte erkundige dich sicherheitshalber bevor du das Haus verlässt.'}
              </Typography>
              <AllFacts />
            </Box>
            <GoogleMap destination={destination} />
            <Grid
              container
              direction="column"
              justify="flex-end"
              alignItems="flex-end"
              className={classes.buttonContainer}
              spacing={2}
            >
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  href={`https://www.google.com/maps/place/?q=place_id:${destination.place_id}`}
                  target="_blank"
                  endIcon={<CallMadeIcon />}
                >
                  Jetzt erkundigen
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" onClick={startNow}>
                  Jetzt losgehen
                </Button>
              </Grid>
            </Grid>
          </>
        )}
        {status.open === false && (
          <>
            <Box className={clsx(classes.status, classes.nay)}>
              <Typography variant="body1">
                <strong>Spar’ dir den Weg</strong>
              </Typography>
              <Typography variant="body1">
                {status.text
                  ? status.text
                  : 'Bis auf weiteres darf dieses Ziel keinen Publikumsverkehr empfangen.'}
              </Typography>
              <AllFacts />
            </Box>
            <Typography variant="body1">
              Die gute Nachricht? Es haben sich kürzlich tausende Menschen überlegt wie man die Zeit
              zu Hause besser verbringen kann.{' '}
              <Link
                href="https://wirvsvirushackathon.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Da ist bestimmt auch was für dich dabei!
              </Link>
            </Typography>
            <Grid container justify="flex-end" className={classes.buttonContainer}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={startNow}>
                  Trotzdem losgehen
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
      <Footer />
    </Container>
  );
}
