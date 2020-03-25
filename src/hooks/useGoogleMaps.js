import React from 'react';

function loadScript(src, position, id, onLoad) {
  if (!position) {
    return;
  }

  window.initMap = onLoad;

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

export default function useGoogleMaps() {
  const [ready, setReady] = React.useState(false);
  const [map, setMap] = React.useState(false);
  const loaded = React.useRef(false);

  if (typeof window !== 'undefined' && !loaded.current) {
    if (!document.querySelector('#google-maps')) {
      loadScript(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyBPCJ-2CAlOsWYr5BXrqD6QRFgmgmIx89Y&libraries=places&callback=initMap',
        document.querySelector('head'),
        'google-maps',
        () => setReady(true),
      );
    }

    loaded.current = true;
  }

  React.useEffect(() => {
    if (!window.google) {
      return;
    }

    let mapElement = document.getElementById('google-map');
    if (!mapElement) {
      mapElement = document.createElement('div');
      mapElement.setAttribute('id', 'google-map');
      document.body.appendChild(mapElement);
    }

    if (!window.mapObject) {
      window.mapObject = new window.google.maps.Map(document.getElementById('google-map'), {
        center: {
          lat: 51.133481,
          lng: 10.018343,
        },
        zoom: 17,
      });
    }

    setMap(window.mapObject);
  }, [ready]);

  return { ready, map };
}
