import useCurrentTime from '../hooks/useCurrentTime';

export default function CurrentTime() {
  const time = useCurrentTime();

  // Format jam, menit, detik
  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // 24 jam
  });

  // Format tanggal (opsional)
  const formattedDate = time.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      {/* <p className="text-xl font-semibold">{formattedDate}</p> */}
      <p className="text-2xl font-bold text-black">{formattedTime}</p>
    </div>
  );
}
