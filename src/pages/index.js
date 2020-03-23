import React from 'react';
import Head from 'next/head';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Link from '../components/Link';
import Logo from '../components/Logo';

const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& > *': {
      flex: '0 0 auto',
    },
  },
}));

export default function Index() {
  const classes = useStyles();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  function currentLocationSuccess(pos) {
    console.log('geolocation.getCurrentPosition position', pos); // eslint-disable-line
    router.push('/wohin');
  }

  function currentLocationError(err) {
    console.error('geolocation.getCurrentPosition error', err); // eslint-disable-line
    if (err.code === 1 /* PERMISSION_DENIED */ || err.code === 2 /* POSITION_UNAVAILABLE */) {
      setError(
        'Leider konnten wir nicht auf deinen aktuelle Position zugreifen. Probier’s doch einfach ohne Standortfreigabe.',
      );
      setLoading(false);
    } else {
      router.push('/wohin');
    }
  }

  function requestLocationAccess() {
    setLoading(true);

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
  }

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <Container maxWidth="sm">
      <Head>
        <title>Corona Kompass</title>
      </Head>
      <Box my={2}>
        <Logo />
        <Typography variant="body1" paragraph>
          Rausfinden, wo du im Rahmen der Ausgangsbeschränkungen noch hin kannst und papierlos
          dokumentieren, wann und warum du deine Wohnung verlässt.*
        </Typography>
        <Typography variant="body1" paragraph>
          Der Service funktioniert besser, wenn du ihm erlaubst auf deinen Standort zuzugreifen.**
        </Typography>
        {error && (
          <Alert severity="error" className={classes.marginBottom}>
            {error}
          </Alert>
        )}
        <Box className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.marginBottom}
            onClick={requestLocationAccess}
          >
            Meinen Standort freigeben
          </Button>
          <Button
            color="primary"
            component={Link}
            naked
            href="/wohin"
            className={classes.marginBottom}
          >
            Weiter ohne Standortfreigabe
          </Button>
        </Box>
        <Typography variant="body2" color="textSecondary" paragraph>
          * Anders als z.B. in Frankreich ist eine Dokumentation der Gründe, warum man seine Wohnung
          verlässt, derzeit in Deutschland nicht vorgeschrieben.
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          ** Es werden dabei Standortdaten an Google Maps Server gesendet. Alle persönlichen Daten
          werden aber nur auf deinem Endgerät gespeichert, und niemals ohne dein Einverständnis an
          Dritte übermittelt.
        </Typography>
      </Box>
      <Footer />
    </Container>
  );
}
