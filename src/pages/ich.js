import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import GooglePlaces from '../components/GooglePlaces';
import Header from '../components/Header';

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
  currentAddress: {
    marginTop: -1 * theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function Wohin() {
  const classes = useStyles();
  const [user, setUser] = useState({});
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
        setUser(parsed);
        setFormUser(parsed);
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
    router.back();
  }

  return (
    <Container maxWidth="sm">
      <Box my={2}>
        <Header />
        <BackButton />

        <Typography variant="h4" component="h1" gutterBottom>
          Deine persönlichen Daten
        </Typography>
        <Typography variant="body1" gutterBottom>
          Für eine „Ausgangssperrenbescheinigung“ benötigen wir noch ein paar Informationen von dir.
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
                value={formUser.name}
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
                value={formUser.birthday}
              />
            </Grid>
            <Grid item>
              {user.address && (
                <Box className={classes.currentAddress}>
                  <Typography variant="body1">Aktuelle Adresse:</Typography>
                  <Typography variant="body1">
                    <strong>{user.address.structured_formatting.main_text}</strong>,{' '}
                    {user.address.structured_formatting.secondary_text}
                  </Typography>
                </Box>
              )}
              <GooglePlaces
                label={user.address ? 'Neue Adresse eingeben' : 'Adresse eingeben'}
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
