import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import WorkIcon from '@material-ui/icons/Work';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Link from '../components/Link';
import Search from '../components/Search';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginBottom: theme.spacing(2),
  },
  favoriteContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
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
  const [destination, setDestination] = React.useState(null);

  function handleChange(event, value /* , reason */) {
    setDestination(value);
  }

  return (
    <Container maxWidth="sm">
      {!destination && (
        <>
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Wohin soll’s gehen?
            </Typography>
            <div className={classes.margin}>
              <Search onChange={handleChange} />
            </div>
            <Typography variant="h6" component="h1" gutterBottom>
              Häufige Ziele
            </Typography>
            <div className={clsx(classes.margin, classes.favoriteContainer)}>
              <ButtonGroup
                variant="contained"
                color="primary"
                size="large"
                aria-label="contained primary button group"
              >
                <Button startIcon={<WorkIcon />}>Arbeit</Button>
                <Button startIcon={<ShoppingCartIcon />}>Einkauf</Button>
                <Button startIcon={<LocalHospitalIcon />}>Arzt</Button>
              </ButtonGroup>
            </div>
            <Typography variant="body1" gutterBottom>
              Bitte beachte, dass jeder gesparte Gang potentiell Leben retten kann. Kannst du bis
              morgen warten und dann zwei Erledigungen auf einmal durchführen?
            </Typography>
          </Box>
          <Box>
            <Button variant="outlined" color="primary" component={Link} href="/wohin">
              Mehr infos
            </Button>
          </Box>
        </>
      )}
      {destination && (
        <Box my={4}>
          <Button
            color="primary"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => setDestination(null)}
          >
            Zurück
          </Button>
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

          <Button variant="contained" color="primary" component={Link} naked href="/go">
            Jetzt losgehen
          </Button>
        </Box>
      )}
    </Container>
  );
}
