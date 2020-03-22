import React from 'react';

export default function Map({ destination, origin = null, height = 300 }) {
  const src = origin
    ? `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBPCJ-2CAlOsWYr5BXrqD6QRFgmgmIx89Y&origin=place_id:${origin.place_id}&destination=place_id:${destination.place_id}`
    : `https://www.google.com/maps/embed/v1/place?key=AIzaSyBPCJ-2CAlOsWYr5BXrqD6QRFgmgmIx89Y&q=place_id:${destination.place_id}`;

  return (
    <iframe
      width="100%"
      height={height}
      title="Map"
      frameBorder="0"
      style={{ border: 0 }}
      src={src}
      allowFullScreen
    />
  );
}
