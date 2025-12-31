import {useState} from 'react';
import type Artist from '../types/artist';
import ArtistDesc from './artistDesc';

export default function artists({admin, artists, setArtists, url} : {admin: Boolean, artists: Artist[], setArtists: Function, url: string}){
    const [formData, setFormData] = useState({
            name: "",
            description: "",
        });

     const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    async function newArtist(e:React.FormEvent<HTMLFormElement>){
            e.preventDefault();
            const response = await fetch(`${url}artist`, {
                method: 'POST',
                body: JSON.stringify({name: formData.name, description: formData.description}),
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
        });
        if(response.ok){
            response.json().then(data => {
                setArtists((prevArtists: Artist[]) => [...prevArtists, data]);
                setFormData({name: '', description: ''});
            });
        } else {
            response.json().then(error => {
                console.error('Error:', error);
            });
        }
    }

    return(
        <div id="artists">
            <h1>artists</h1>
            {artists && artists.map((artist, index) => (
                <ArtistDesc key={index} name={artist.name} description={artist.description}/>
            ))}
            {artists.length === 0 &&
                <>
                    <hr/>
                    <h2 style={{marginBottom: "7em"}}>No artists yet!</h2>
                </>
            }
            {admin && 
            <form onSubmit={newArtist} className="register-form">
                <h2>Add new artist</h2>
                <label htmlFor="name">Artist:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                <br/>
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange}/>
                <br />
                <button type="submit">Submit</button>
            </form>
            }
        </div>
    );
}