import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Link from '../components/Link';
import GooglePlaces from '../components/GooglePlaces';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: theme.spacing(2),
  },
  placesContent: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  grid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

export default function Wohin() {
  const classes = useStyles();
  const [formUser, setFormUser] = useState({
    name: '',
    birthday: '',
    address: '',
  });
  const router = useRouter();

  useEffect(() => {
    try {
      const localStorageUser = localStorage.getItem('user');
      const parsed = JSON.parse(localStorageUser);
      if (parsed) {
        router.push('/pass');
      }
    } catch (err) {
      // pass
    }
  }, []);

  function handleUserInput(prop) {
    return function handleUserField(event) {
      setFormUser({ ...formUser, [prop]: event.target.value });
    };
  }

  function storeUser() {
    localStorage.setItem('user', JSON.stringify(formUser));
    router.push('/pass');
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Button startIcon={<ArrowBackIosIcon />} color="primary" component={Link} href="/ziel">
          Zurück
        </Button>
        <Typography variant="h4" component="h1" gutterBottom>
          Daten vervollständigen
        </Typography>
        <Typography variant="body1" gutterBottom>
          Für eine offizielle „Ausgangssperrenbescheinigung“ benötigen wir noch ein paar
          Informationen von dir.
        </Typography>

        <form noValidate>
          <Grid
            container
            spacing={4}
            direction="column"
            justify="flex-start"
            className={classes.grid}
          >
            <Grid item>
              <TextField
                label="Name"
                placeholder="Erika Musterfrau"
                variant="outlined"
                fullWidth
                onChange={handleUserInput('name')}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Geburtsdatum"
                type="date"
                fullWidth
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleUserInput('birthday')}
              />
            </Grid>
            <Grid item>
              <GooglePlaces
                onChange={(event, value /* , reason */) => {
                  handleUserInput('address')({ target: { value } });
                }}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" onClick={storeUser}>
                Auf diesem Gerät speichern
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Footer />
    </Container>
  );
}
