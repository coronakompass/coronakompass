import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import GoogleMap from '../components/GoogleMap';
import Header from '../components/Header';
import placeTypes from '../placeTypes';

const useStyles = makeStyles((theme) => ({
  person: {
    marginBottom: theme.spacing(4),
  },
  grid: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2),
  },
  buttons: {
    marginTop: theme.spacing(4),
  },
}));

export default function Pass() {
  const classes = useStyles();
  const [destination, setDestination] = useState(null);
  const [user, setUser] = React.useState(null);
  const [start, setStart] = React.useState(null);
  const router = useRouter();

  useEffect(() => {
    try {
      const localStorageUser = localStorage.getItem('user');
      const parsed = JSON.parse(localStorageUser);
      if (parsed) {
        setUser(parsed);
      } else {
        router.push('/ich');
      }
    } catch (err) {
      // pass
    }
  }, []);

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

  useEffect(() => {
    try {
      const localStorageDestination = localStorage.getItem('start');
      const parsed = JSON.parse(localStorageDestination);
      if (parsed) {
        setStart(new Date(parsed));
      }
    } catch (err) {
      // pass
    }
  }, []);

  function cancelRoute() {
    localStorage.removeItem('destination');
    localStorage.removeItem('start');
    router.push('/wohin');
  }

  if (!destination || !user || !start) {
    return <LinearProgress />;
  }

  const primaryType = destination.types[0];
  const status = placeTypes[primaryType];
  const DestinationIcon = status.Icon;
  console.log('destination', destination, status); // eslint-disable-line

  return (
    <Container maxWidth="sm">
      <Box my={2}>
        <Header />
        <BackButton />

        <Grid container alignItems="center" className={classes.person}>
          <Grid item>
            <PersonIcon className={classes.icon} fontSize="large" />
          </Grid>
          <Grid item xs>
            <Typography variant="h6">{user.name}</Typography>
            <Typography variant="body2">* {user.birthday}</Typography>
          </Grid>
        </Grid>

        <Typography variant="body1">Start:</Typography>
        <Grid container alignItems="flex-start" className={classes.grid}>
          <Grid item>
            <HomeIcon className={classes.icon} fontSize="small" />
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <strong>{user.address.structured_formatting.main_text}</strong>,{' '}
              {user.address.structured_formatting.secondary_text}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1">Ziel:</Typography>
        <Grid container alignItems="flex-start" className={classes.grid}>
          <Grid item>
            <DestinationIcon className={classes.icon} fontSize="small" />
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <strong>{destination.structured_formatting.main_text}</strong>,{' '}
              {destination.structured_formatting.secondary_text}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1">Unterwegs seit:</Typography>
        <Grid container alignItems="flex-start" className={classes.grid}>
          <Grid item>
            <AccessTimeIcon className={classes.icon} fontSize="small" />
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <strong> {format(start, 'dd.MM.yyyy HH:mm')}</strong>
            </Typography>
          </Grid>
        </Grid>

        <GoogleMap origin={user.address} destination={destination} />

        <Grid container justify="center" className={classes.buttons}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={cancelRoute}>
              Route beenden
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
}
