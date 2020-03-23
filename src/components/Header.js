import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import Profile from './Profile';

const useStyles = makeStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing(2),
  },
  profile: {
    textAlign: 'right',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" alignItems="center" className={classes.header}>
      <Grid item xs={6}>
        <Logo small />
      </Grid>
      <Grid item xs={3} className={classes.profile}>
        <Profile />
      </Grid>
    </Grid>
  );
}
