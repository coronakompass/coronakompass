import React from 'react';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  expansionPanelRoot: {
    backgroundColor: 'transparent',
    border: 'none',
    margintTop: 0,
    '&:before': {
      display: 'none',
    },
  },
  expansionPanelExpanded: {
    margin: '0 !important',
  },
  expansionPanelSummaryRoot: {
    padding: 0,
  },
  expansionPanelDetailsRoot: {
    padding: 0,
  },
  // The following expanded states cannot easily be overridden through the classes-API:
  '@global': {
    '.MuiExpansionPanelSummary-content.Mui-expanded': {
      margin: 0,
    },
    '.MuiExpansionPanelSummary-root.Mui-expanded': {
      minHeight: theme.spacing(6),
    },
  },
}));

export default function AllFacts({ className }) {
  const classes = useStyles();
  return (
    <ExpansionPanel
      elevation={0}
      className={className}
      classes={{
        root: classes.expansionPanelRoot,
        expanded: classes.expansionPanelExpanded,
      }}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        classes={{
          root: classes.expansionPanelSummaryRoot,
        }}
      >
        <Typography>Alle Bestimmungen im Überblick</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        classes={{
          root: classes.expansionPanelDetailsRoot,
        }}
      >
        <Box>
          <Typography variant="body1" gutterBottom>
            Folgende{' '}
            <Link
              href="https://www.bundesregierung.de/breg-de/themen/coronavirus/besprechung-der-bundeskanzlerin-mit-den-regierungschefinnen-und-regierungschefs-der-laender-1733248"
              target="_blank"
              rel="noopener noreferrer"
            >
              Regeln gelten ab 22. März 2020
            </Link>{' '}
            für ganz Deutschland:
          </Typography>
          <Typography component="ul" paragraph>
            <Typography component="li">
              Immer Mindestabstand von 1,5m zu anderen Personen beachten
            </Typography>
            <Typography component="li">
              Aufenthalt in der Öffentlichkeit:
              <Typography component="ul">
                <Typography component="li">Maximal zwei Personen</Typography>
                <Typography component="li">
                  Oder ausschließlich mit Personen des gleichen Haushalts
                </Typography>
              </Typography>
            </Typography>
            <Typography component="li">
              Erlaubte Gründe, die Wohnung zu verlassen:
              <Typography component="ul">
                <Typography component="li">Arbeit</Typography>
                <Typography component="li">Notbetreuung der Kinder</Typography>
                <Typography component="li">Arztbesuch</Typography>
                <Typography component="li">Einkauf</Typography>
                <Typography component="li">Teilnahme an Sitzungen</Typography>
                <Typography component="li">Erforderlichen Terminen und Prüfungen</Typography>
                <Typography component="li">
                  Individueller Sport und Bewegung an der frischen Luft
                </Typography>
                <Typography component="li">Hilfe für andere</Typography>
              </Typography>
            </Typography>
            <Typography component="li">
              Feiern mit mehreren Personen sind nicht erlaubt, weder öffentlich noch privat
            </Typography>
            <Typography component="li">
              Geschlossene Betriebe:
              <Typography component="ul">
                <Typography component="li">
                  Gastronomie, ausgenommen Lieferung oder Abholung
                </Typography>
                <Typography component="li">
                  Bereich der Körperpflege wie Friseure, Kosmetikstudios, Massagepraxen,
                  Tattoo-Studios und ähnliche
                </Typography>
              </Typography>
            </Typography>
          </Typography>
        </Box>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
