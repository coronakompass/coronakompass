import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from './Link';

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
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" className={classes.grid}>
      <Grid item xs={7}>
        <Typography variant="body2" color="textSecondary">
          <Link href="/info">Info, Kontakt & Datenschutz</Link>
        </Typography>
      </Grid>
      <Grid item className={classes.logo} xs={5}>
        <a href="https://wirvsvirushackathon.org/" target="_blank" rel="noopener noreferrer">
          <img src="/logo-wirvsvirus.svg" alt="#WirVsVirus" />
        </a>
      </Grid>
    </Grid>
  );
}
