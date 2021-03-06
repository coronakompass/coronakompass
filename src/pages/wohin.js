import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { uniqBy } from 'lodash';
import { useRouter } from 'next/router';
import AllFacts from '../components/AllFacts';
import Footer from '../components/Footer';
import GooglePlaces from '../components/GooglePlaces';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: theme.spacing(2),
  },
  placesContent: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  grid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  allfacts: {
    marginBottom: theme.spacing(2),
  },
}));

export default function Wohin() {
  const classes = useStyles();
  const [recentDestinations, setRecentDestinations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    try {
      const localStorageDestinations = localStorage.getItem('recentDestinations');
      const history = (localStorageDestinations && JSON.parse(localStorageDestinations)) || [];
      setRecentDestinations(history);
    } catch (err) {
      // pass
    }
  }, []);

  function handleChange(event, value /* , reason */) {
    try {
      localStorage.setItem('destination', JSON.stringify(value));

      const localStorageDestinations = localStorage.getItem('recentDestinations');
      let history = (localStorageDestinations && JSON.parse(localStorageDestinations)) || [];
      history.unshift(value);
      history = uniqBy(history, 'id');
      localStorage.setItem('recentDestinations', JSON.stringify(history));
      setRecentDestinations(history);
    } catch (err) {
      // pass
    }
    router.push('/ziel');
  }

  return (
    <Container maxWidth="sm">
      <Head>
        <title>Wohin geht’s? – Corona Kompass</title>
      </Head>
      <Box my={2}>
        <Header />
        <Typography variant="h4" component="h1" gutterBottom>
          Wohin geht’s?
        </Typography>
        <Typography variant="body1" paragraph>
          Jeder gesparte Gang kann Leben retten!
        </Typography>
        <div className={classes.placesContent}>
          <GooglePlaces
            onChange={handleChange}
            defaultOptions={recentDestinations}
            label="Dein Ziel"
          />
        </div>
        <Typography variant="body1" gutterBottom>
          Es gibt folgende gute Gründe das Haus zu verlassen:
        </Typography>
        <Typography component="ul">
          <Typography component="li">Arbeit</Typography>
          <Typography component="li">Notbetreuung der Kinder</Typography>
          <Typography component="li">Arztbesuch</Typography>
          <Typography component="li">Einkauf</Typography>
          <Typography component="li">Teilnahme an Sitzungen</Typography>
          <Typography component="li">Erforderliche Termine und Prüfungen</Typography>
          <Typography component="li">
            Individueller Sport und Bewegung an der frischen Luft
          </Typography>
          <Typography component="li">Hilfe für andere</Typography>
        </Typography>
        <AllFacts className={classes.allfacts} />
      </Box>
      <Footer />
    </Container>
  );
}
