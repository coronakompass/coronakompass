import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { format } from 'date-fns';
import { de } from 'date-fns/locale';
import Link from './Link';
import { LAST_UPDATE } from '../config';
import logo from '../../images/logo-wirvsvirus.svg';

const useStyles = makeStyles((theme) => ({
  grid: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  logo: {
    textAlign: 'center',
    '& > a > img': {
      width: '100%',
    },
  },
  lastUpdate: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.grid}>
      <Grid item xs={7}>
        <Typography variant="body2">
          <Link color="textSecondary" href="/info">
            Info, Kontakt & Datenschutz
          </Link>
        </Typography>
      </Grid>
      <Grid item className={classes.logo} xs={5}>
        <a href="https://wirvsvirushackathon.org/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="#WirVsVirus" />
        </a>
      </Grid>
      <Grid item className={classes.lastUpdate} xs={12}>
        <Typography variant="body2" color="textSecondary">
          Letzter Stand: {format(LAST_UPDATE, "dd. MMMM yyyy, HH:mm 'Uhr'", { locale: de })}
        </Typography>
      </Grid>
    </Grid>
  );
}
