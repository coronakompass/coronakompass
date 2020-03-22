import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginTop: theme.spacing(8),
    textAlign: 'center',
    '& > a > img': {
      width: '50%',
    },
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.logo}>
      <a href="https://wirvsvirushackathon.org/" target="_blank" rel="noopener noreferrer">
        <img src="/logo-wirvsvirus.svg" alt="#WirVsVirus" />
      </a>
    </div>
  );
}
