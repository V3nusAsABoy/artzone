import { useState } from 'react'
import './App.css'
import Logos from './components/logos';
import Home from './components/home';
import About from './components/about';
import Artists from './components/artists';
import Navbar from './components/navbar';
import Drawings from './components/drawings';

function App() {

  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [artists, setArtists] = useState(false);
  const [drawings, setDrawings] = useState(false);

  return (
    <>
    <div className="body">
      <Logos />
      <Navbar setHome={setHome} setAbout = {setAbout} setArtists={setArtists} setDrawings={setDrawings}/>
      {home && <Home />}
      {about && <About />}
      {artists && <Artists />}
      {drawings && <Drawings />}
    </div>
    </>
  )
}

export default App
