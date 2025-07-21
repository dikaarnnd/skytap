import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './css/global.css'
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Analytics /> */}
      </Routes>
    </>
  )
}

export default App
