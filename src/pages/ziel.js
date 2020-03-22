import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CheckIcon from '@material-ui/icons/Check';
import CallMadeIcon from '@material-ui/icons/CallMade';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import Footer from '../components/Footer';
import Link from '../components/Link';
import placeTypes from '../placeTypes';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(2),
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
    color: theme.palette.success.dark,
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
  nay: {
    backgroundColor: theme.palette.error.light,
  },
}));

export default function Ziel() {
  const classes = useStyles();
  const [destination, setDestination] = useState(null);
  const router = useRouter();

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
  console.log('destination', destination, status); // eslint-disable-line

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Button startIcon={<ArrowBackIosIcon />} color="primary" component={Link} href="/wohin">
          Zurück
        </Button>
        <Grid container alignItems="center" className={classes.grid}>
          <Grid item>
            <DestinationIcon className={classes.icon} fontSize="large" />
          </Grid>
          <Grid item xs>
            <Typography variant="h6">
              {destination.structured_formatting.main_text}
              {status.open && <CheckIcon className={classes.checkIcon} fontSize="inherit" />}
            </Typography>
            <Typography variant="body2">
              {destination.structured_formatting.secondary_text}
            </Typography>
          </Grid>
        </Grid>

        {status.open && (
          <>
            <Box className={clsx(classes.status, classes.yay)}>
              <Typography variant="body1">
                <strong>Aktuell 16 Uhr:</strong>
              </Typography>
              <Typography variant="body1">
                Weniger Besucher als gewöhnlich. Normalerweise bis zu 5 Min. Wartezeit.
              </Typography>
            </Box>
            <Grid container justify="flex-end" className={classes.buttonContainer}>
              <Grid item>
                <Button variant="contained" color="primary" onClick={startNow}>
                  Jetzt losgehen
                </Button>
              </Grid>
            </Grid>
          </>
        )}
        {!status.open && (
          <>
            <Box className={clsx(classes.status, classes.nay)}>
              <Typography variant="body1">
                <strong>Spar’ dir den Weg –</strong>
              </Typography>
              <Typography variant="body1">
                leider geschlossen: Bis auf weiteres darf dieses Ziel keinen Publikumsverkehr
                empfangen.
              </Typography>
            </Box>
            <Typography variant="body1">
              Die gute Nachricht? Es haben sich kürzlich tausende Menschen überlegt wie man die Zeit
              zu Hause besser verbringen kann. Da ist bestimmt auch was für dich dabei!
            </Typography>
            <Grid container justify="flex-end" className={classes.buttonContainer}>
              <Grid item>
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://wirvsvirushackathon.org/"
                  target="_blank"
                  endIcon={<CallMadeIcon />}
                >
                  Mehr Infos
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
