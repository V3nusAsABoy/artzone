import type Art from "../types/art";

export default function sidebar({drawings} : {drawings: Art[]}){
    return(
        <div id={"gallery-sidebar"}>
                <h1 style={{textAlign: "center"}}>Art</h1>
                <div>
                    <a href="#logos">Back to top</a>
                </div>
                {drawings && drawings.map((artwork) => (
                    <div>
                        <a href={`#${artwork._id}`}>{artwork.title}</a>
                    </div>
                ))}
            </div>
    )
}