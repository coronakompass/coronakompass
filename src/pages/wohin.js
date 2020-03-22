import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import WorkIcon from '@material-ui/icons/Work';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { uniqBy } from 'lodash';
import { useRouter } from 'next/router';
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
      <>
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Wohin soll’s gehen?
          </Typography>
          <Typography variant="body1" paragraph>
            Jeder gesparte Gang kann Leben retten!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Es gibt folgende gute Gründe das Haus zu verlassen:
          </Typography>
          <Typography component="ul" paragraph>
            <Typography component="li">Arbeit</Typography>
            <Typography component="li">Arztbesuch</Typography>
            <Typography component="li">Einkauf von Lebensmitteln</Typography>
            <Typography component="li">Geld abheben</Typography>
            <Typography component="li">Spazieren, Joggen oder Gassi gehen</Typography>
            <Typography component="li">Besuch von Familie oder LebensgefährtIn</Typography>
          </Typography>
          <Typography variant="body1" paragraph>
            Wohin soll’s gehen?
          </Typography>
          <div className={classes.placesContent}>
            <GooglePlaces
              onChange={handleChange}
              defaultOptions={recentDestinations}
              label="Dein Ziel"
            />
          </div>
          <Typography variant="h6" component="h1" gutterBottom>
            Häufige Ziele
          </Typography>
          <Grid container className={classes.grid} justify="space-between" spacing={1}>
            <Grid item>
              <Button variant="contained" color="primary" startIcon={<WorkIcon />} xs={6}>
                Arbeit
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon />} xs={6}>
                Einkauf
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" startIcon={<LocalHospitalIcon />} xs={6}>
                Arzt
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Grid container justify="flex-end" className={classes.grid}>
          <Grid item>
            <Button variant="outlined" color="primary" component={Link} href="/wohin">
              Mehr infos
            </Button>
          </Grid>
        </Grid>
      </>
    </Container>
  );
}
