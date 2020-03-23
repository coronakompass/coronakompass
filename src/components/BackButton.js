import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  button: {
    marginBottom: theme.spacing(2),
  },
}));

export default function BackButton() {
  const router = useRouter();
  const classes = useStyles();

  return (
    <Button
      startIcon={<ArrowBackIosIcon />}
      color="primary"
      onClick={() => router.back()}
      className={classes.button}
    >
      Zurück
    </Button>
  );
}
