import type Art from "../types/art";

export default function drawing({title, artist, drawing, setDrawings, admin, id, url} : {title: string, artist: string, drawing: string, setDrawings: Function, admin: boolean, id: string, url: string}) {
    
    async function deleteDrawing(){
        const response = await fetch(`${url}drawing/${id}`, {
            method: 'DELETE',
    });
        if(response.ok){
            setDrawings((prevDrawings: Art[]) => prevDrawings.filter(art => art._id !== id));
        }
    }

    return(
        <>
            <hr />
            <h1 id = {id}>{title}</h1>
            <img src={`${url}${drawing}`} alt={title} />
            <p>By {artist}</p>
            {admin && <button onClick={deleteDrawing}>delete</button>}
        </>
    )
}