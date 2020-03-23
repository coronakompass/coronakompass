import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    paddingBottom: theme.spacing(2),
    width: '100%',
  },
  link: {
    display: 'block',
  },
  small: {
    maxWidth: '50%',
  },
}));

export default function Logo({ small = false }) {
  const classes = useStyles();
  return (
    <Link href="/">
      <a className={clsx(classes.link, small ? classes.small : null)}>
        <img src="/logo-coronakompass.svg" alt="Corona Kompass Logo" className={classes.logo} />
      </a>
    </Link>
  );
}
