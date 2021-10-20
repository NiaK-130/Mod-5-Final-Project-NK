
import React, {useState} from 'react'

function Ideasdisplay() {
    const [ideas, setIdeas] = useState("");

    const getIdeas = () => {

        fetch("https://instagram85.p.rapidapi.com/account/interiordesignideas/feed?by=username", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "instagram85.p.rapidapi.com",
                "x-rapidapi-key": "dcde792280msh12c8e08eeaf1703p1c9f7fjsn709c49649107"
            }
})
.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(response)
})
.catch(err => {
	console.error(err);
});

    }

    return (
        <div>

        Hello ideas <button onClick={getIdeas}>Now </button>
        {ideas}
        </div>
    )
}



export default Ideasdisplay

// fetch("https://instagram85.p.rapidapi.com/account/interiordesignideas/feed?by=username", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "instagram85.p.rapidapi.com",
// 		"x-rapidapi-key": "8d9de17f0cmsh849f8ec916c4c5ap11ba96jsn81163dcf1da3"
// 	}
// })
// .then(response => response.json())
// .then(response => {
// 	console.log(response);
//     console.log(response.content)
// })
// .catch(err => {
// 	console.error(err);
// });



// })
// .then(response => response.json())
// .then(data => {
//     console.log(data.post_url);
//     
// })
// .catch(err => {
//     console.error(err);
// });