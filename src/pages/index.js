import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Link from '../components/Link';

const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  buttonContainer: {
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
  const [error, setError] = React.useState();

  function currentLocationSuccess() {
    router.push('/wohin');
  }

  function currentLocationError() {
    setError(
      'Leider konnten wir nicht auf deinen aktuelle Position zugreifen. Probier’s doch einfach ohne Standortfreigabe.',
    );
  }

  function requestLocationAccess() {
    const geoOptions = {
      enableHighAccuracy: true,
      timeout: 2000,
      maximumAge: 60 * 60 * 1000, // 1h
    };
    navigator.geolocation.getCurrentPosition(
      currentLocationSuccess,
      currentLocationError,
      geoOptions,
    );
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          $NAME
        </Typography>
        <Typography variant="body1" paragraph>
          Papierlos dokumentieren, wann und warum du deine Wohnung verlässt.
        </Typography>
        <Typography variant="body1" paragraph>
          Der Service funktioniert besser, wenn du ihm erlaubst auf deinen Standort zuzugreifen.*
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
        <Typography variant="body2" paragraph>
          * Es werden dabei Standortdaten an Google Maps Server gesendet. Alle persönlichen Daten
          werden aber nur auf deinem Endgerät gespeichert, und niemals ohne dein Einverständnis an
          Dritte übermittelt.
        </Typography>
      </Box>
    </Container>
  );
}
