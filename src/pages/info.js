import React from 'react';
import Head from 'next/head';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Footer from '../components/Footer';
import Logo from '../components/Logo';

export default function Info() {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>Info – Corona Kompass</title>
      </Head>
      <Box my={2}>
        <Logo />
        <Typography variant="body1" paragraph>
          Corona Kompass entstand im Rahmen des{' '}
          <a href="https://wirvsvirushackathon.org/" target="_blank" rel="noopener noreferrer">
            WirVsVirus Hackathons
          </a>
          .
        </Typography>
        <Typography variant="body1" paragraph>
          Mit der Einführung von{' '}
          <a
            href="https://www.spiegel.de/politik/deutschland/coronavirus-bund-und-laender-verstaendigen-sich-auf-umfangreiches-kontaktverbot-a-03be351e-b344-4aed-9eda-1779b869ca9b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ausgangssperren bzw. Kontaktverboten
          </a>{' '}
          steht die Frage im Raum wie deren Kontrolle umgesetzt werden soll. Eine papierlose Lösung
          ist nicht nur einfach und unbürokratisch, sondern auch kontaktlos und minimiert damit das
          Infektionsrisiko.
        </Typography>
        <Typography variant="body1" paragraph>
          Mit dem Corona-Kompass stellen wir eine App vor, die diese Anforderungen erfüllt und
          vielfältige Erweiterungsmöglichkeiten bietet.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Funktion
        </Typography>
        <Typography variant="body1" paragraph>
          Vor dem Verlassen der Wohnung startet die Nutzerin oder der Nutzer die App und wird nach
          ihrem bzw. seinem Ziel gefragt. Dabei wird nochmal für die Notwendigkeit sensibilisiert
          physische Kontakte zu minimieren.
        </Typography>
        <Typography variant="body1" paragraph>
          Ist der Zielort z.B. ein Supermarkt wird die Nutzerin oder der Nutzer darauf hingewiesen,
          wenn sich dort aktuell ungewöhnlich viele Menschen aufhalten. Ist der Zielort temporär
          geschlossen, z.B. ein Restaurants weist die App ebenfalls darauf hin um unnötige Wege zu
          vermeiden.
        </Typography>
        <Typography variant="body1" paragraph>
          Die persönlichen Daten des Nutzers werden zwar erfasst, dabei aber nur auf dem Endgerät
          gespeichert. Eine zentrale Datenbank existiert nicht.
        </Typography>
        <Typography variant="body1" paragraph>
          Der Code befindet sich auf{' '}
          <a
            href="https://github.com/coronakompass/coronakompass"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </Typography>
        <Typography variant="h6" gutterBottom>
          Team
        </Typography>
        <Typography variant="body1" paragraph>
          Der Corona-Kompass wird von einem{' '}
          <a
            href="https://github.com/orgs/coronakompass/people"
            target="_blank"
            rel="noopener noreferrer"
          >
            kleinen Berliner Team
          </a>{' '}
          mit Gründungserfahrung entwickelt, welches in der Vergangenheit bereits erfolgreich
          zusammengearbeitet hat. Datensparsamkeit und Datenschutz standen dabei immer im Fokus der
          Entwicklung. Wir denke zwar gerne weit in die Zukunft und arbeiten immer möglichst
          vorrausschauend, sind aber dank jahrelanger Startup-Tätigkeit auch routiniert darin die
          gerade benötigte Lösung schnell auf die Beine zu stellen. Unser weitläufiges Netzwerk
          hilft uns dabei.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ausblick
        </Typography>
        <Typography variant="body1" paragraph>
          Das Team steht für die Weiterentwicklung der Web-App und für die Entwicklung von nativen
          Apps und Erklärvideos zur Verfügung.
        </Typography>
        <Typography variant="body1" paragraph>
          Dazu gehören Anpassungen an die aktuell geltende Rechtslage des jeweiligen Bundeslandes
          sowie eine mögliche Integration von Tracing-Apps die gerade von verschiedenen Teams in
          Deutschland entwickelt werden.
          <br />
          Eine Anbindung von anderen #WirVsVirus-Projekten ist ebenso möglich wie die Nutzung der
          App für Push-Notifications von offizieller Stelle.
        </Typography>
        <Typography variant="body1" paragraph>
          Aus Pragmatismus ist der aktuelle Prototyp nicht nativ sondern als Web-App entwickelt und
          auf die Einhaltung von Accessibility Standards, Mehrsprachigkeit, leichte Sprache etc
          wurde verzichtet, und die Informationen zu Zielen wird von Google bezogen – all dies kann
          aber in kürzester Zeit geändert werden.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Kontakt
        </Typography>
        <Typography variant="body1" paragraph>
          <a href="mailto:coronakompass@gmail.com" target="_blank" rel="noopener noreferrer">
            coronakompass@gmail.com
          </a>
        </Typography>
        <Typography variant="h6" gutterBottom>
          Datenschutz
        </Typography>
        <Typography variant="body1" paragraph>
          Abgesehen von den technisch für die Auslieferung der Web-App absolut notwendigen Daten
          werden von uns keine weiteren personenebezogenen Daten verarbeitet. Die vom Nutzer
          angegebenen Daten wie Name und Anschrift werden nur auf dem Gerät des Nutzers gespeichert.
          Die Standortdaten der Nutzer werden von uns nicht aufgezeichnet. Zur Optimierung der Suche
          von Orten und Darstellung der Öffnungszeiten etc. wird auf Google Maps und Google Places
          zurückgegriffen, hierfür gilt{' '}
          <a
            href="https://policies.google.com/privacy?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            die Datenschutzerklärung von Google
          </a>
          .
        </Typography>
      </Box>
      <Footer />
    </Container>
  );
}
