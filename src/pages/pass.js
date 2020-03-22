import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Link from '../components/Link';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
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

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Button startIcon={<ArrowBackIosIcon />} color="primary" component={Link} href="/ziel">
          Zurück
        </Button>

        <Grid container alignItems="center" className={classes.grid}>
          <Grid item>
            <PersonIcon className={classes.icon} />
          </Grid>
          <Grid item xs>
            <Typography variant="body1" color="textPrimary">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              * {user.birthday}
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body1" gutterBottom>
          Seit <strong>{format(start, 'dd.MM.yyyy HH:mm')}</strong> unterwegs von{' '}
          {user.address.structured_formatting.main_text},{' '}
          {user.address.structured_formatting.secondary_text} zu:
        </Typography>

        <Grid container alignItems="center" className={classes.grid}>
          <Grid item>
            <ShoppingCartIcon className={classes.icon} />
          </Grid>
          <Grid item xs>
            <Typography variant="body1" color="textPrimary">
              {destination.structured_formatting.main_text}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {destination.structured_formatting.secondary_text}
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="flex-end" className={classes.grid}>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={cancelRoute}>
              Route beenden
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
