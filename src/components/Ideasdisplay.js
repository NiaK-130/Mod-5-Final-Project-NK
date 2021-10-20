
import React, {useState} from 'react'

function Ideasdisplay() {
    const [ideas, setIdeas] = useState("");

    const getIdeas = () => {

       

    return (
        <div>

        Hello ideas <button onClick={getIdeas}>Now </button>
        {ideas}
        </div>
    )
}



export default Ideasdisplay

