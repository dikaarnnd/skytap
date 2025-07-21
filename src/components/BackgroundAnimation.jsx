import { useEffect, useState, useMemo, } from 'react';
import '../css/BackgroundAnimation.css';
import cloud1 from '../assets/images/cloud1.png';

const cloudImages = [cloud1, cloud1, cloud1, cloud1, cloud1, cloud1,];

export default function BackgroundAnimation({ weatherMain }) {
  const [skyClass, setSkyClass] = useState('bg-gradient-to-b from-blue-400 to-blue-200');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 11) setSkyClass('from-yellow-200 to-blue-300');
    else if (hour >= 11 && hour < 17) setSkyClass('from-blue-300 to-blue-500');
    else if (hour >= 17 && hour < 19) setSkyClass('from-orange-300 to-purple-400');
    else setSkyClass('from-gray-800 to-gray-900');
  }, []);

  const cloudCount = weatherMain === 'Clear' ? 2 : weatherMain === 'Rain' ? 6 : 4;

  const cloudPositions = useMemo(() => {
    return Array.from({ length: cloudCount }, () => ({
      top: `${Math.floor(Math.random() * 60)}%`,
      // leftOffset: Math.floor(Math.random() * 30), // delay awal (opsional)
    }));
  }, [cloudCount]);

  return (
    <div className={`absolute inset-0 -z-1 transition-all duration-1000 bg-gradient-to-b ${skyClass} overflow-x-hidden`}>
      {cloudPositions.map((pos, i) => (
        <img 
          key={i} 
          src={cloudImages[i % cloudImages.length]}
          alt="cloud"
          className={`cloud cloud-${i % 6}`} 
          style={{ 
            top: pos.top, 
            // animationDelay: `${pos.leftOffset}s`,
          }} 
        />
      ))}
    </div>
  );
}
