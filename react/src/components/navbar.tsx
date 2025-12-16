export default function navbar({setHome, setAbout, setArtists, setDrawings}:{setHome:Function, setAbout:Function, setArtists:Function, setDrawings:Function}){
    function home(){
        setHome(true);
        setAbout(false);
        setDrawings(false);
        setArtists(false);
    }
    function about(){
        setHome(false);
        setAbout(true);
        setDrawings(false);
        setArtists(false);
    }
    function artists(){
        setHome(false);
        setAbout(false);
        setDrawings(false);
        setArtists(true);
    }
    function drawings(){
        setHome(false);
        setAbout(false);
        setArtists(false);
        setDrawings(true);
    }
    return(
    <nav className="navbar">
                <div><button id="homeButton" onClick={home}>Home</button></div>
                <div><button id="aboutButton" onClick={about}>About</button></div>
                <div><button id="gallleryButton" onClick={drawings}>Gallery</button></div>
                <div><button id="artistsButton" onClick={artists}>Artists</button></div>
            </nav>
    );
}