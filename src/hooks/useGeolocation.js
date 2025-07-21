import { useEffect, useState } from 'react';

export const useGeolocation = () => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        console.error('Error getting geolocation:', error);
      }
    );
  }, []);

  return coords;
};
