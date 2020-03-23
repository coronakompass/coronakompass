import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
}));

export default function Logo() {
  const classes = useStyles();
  return (
    <Link href="/">
      <a>
        <img src="/logo-coronakompass.svg" alt="Corona Kompass Logo" className={classes.logo} />
      </a>
    </Link>
  );
}
