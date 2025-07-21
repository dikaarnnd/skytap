import CurrentTime from '../components/CurrentTime';
import BackgroundAnimation from '../components/BackgroundAnimation';

export default function Home({ weather }) {
  return (
    <div className='flex flex-col p-4 w-full overflow-x-hidden'>
      <div className='flex justify-between'>
        <h1>Vite + React</h1>
        <div className='flex items-center justify-center p-1 bg-[#DCD36B] rounded-md shadow-3xl'>
          <CurrentTime />
        </div>
      </div>
      <BackgroundAnimation weatherMain={weather?.main} />
      <div className="">
        {/* Konten lain: WeatherCard, SearchBar, dsb */}
      </div>
    </div>
  )
}
