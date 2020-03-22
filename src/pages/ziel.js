import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CheckIcon from '@material-ui/icons/Check';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Link from '../components/Link';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2),
  },
  checkIcon: {
    marginLeft: theme.spacing(1),
    color: theme.palette.success.main,
  },
  yay: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    backgroundColor: theme.palette.success.light,
    padding: theme.spacing(2),
    width: `calc(100% + ${theme.spacing(4)}px)`,
    marginLeft: -1 * theme.spacing(2),
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

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Button startIcon={<ArrowBackIosIcon />} color="primary" component={Link} href="/wohin">
          Zurück
        </Button>
        <Grid container alignItems="center" className={classes.grid}>
          <Grid item>
            <ShoppingCartIcon className={classes.icon} fontSize="large" />
          </Grid>
          <Grid item xs>
            <Typography variant="h6">
              {destination.structured_formatting.main_text}
              <CheckIcon className={classes.checkIcon} fontSize="inherit" />
            </Typography>
            <Typography variant="body2">
              {destination.structured_formatting.secondary_text}
            </Typography>
          </Grid>
        </Grid>

        <Box className={classes.yay}>
          Aktuell 16 Uhr: Weniger Besucher als gewöhnlich. Normalerweise bis zu 5 Min. Wartezeit.
        </Box>

        <Grid container justify="flex-end" className={classes.grid}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={startNow}>
              Jetzt losgehen
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
}
