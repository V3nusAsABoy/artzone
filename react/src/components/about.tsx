import draw from '../img/draw.png';
import {useState} from 'react';

export default function about({about, admin} : {about: string, admin: Boolean}){
    const [changeAbout, setChangeAbout] = useState(false);

    return(<div id="about">
                <h1>about</h1>
                <hr/>
                {about && 
                <p>
                    {about}
                </p>
                }
                {!about && !changeAbout &&
                    <p style={{color: "gray"}}>No description provided.</p>
                }
                {!about && changeAbout &&
                <>
                    <textarea></textarea>
                    <br/>
                    <button onClick={() => setChangeAbout(false)}>cancel</button>
                    <button>submit</button>
                </>
                }
                {!about && admin && !changeAbout &&
                    <button onClick={() => setChangeAbout(true)}>Add description</button>
                }
                <div className="grid">
                    <img src={draw} alt="draw" style={{float:"right",width:"15em",gridColumn:"3"}}/>
                </div>
            </div>);
}