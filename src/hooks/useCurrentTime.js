import { useEffect, useState } from 'react';

export default function useCurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval); // cleanup saat komponen unmount
  }, []);

  return time;
}
