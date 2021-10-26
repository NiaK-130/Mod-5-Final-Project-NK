import React, {useState,useEffect} from 'react'
import styles from './NewImageForm.module.css';


export default function NewImageForm({}) {
    
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [imageDesc, setImageDesc] = useState('')
    const [by, setBy] = useState('')
    const [tags, setTags] = useState('')
    const [tagstwo, setTagsTwo] = useState('')
    const [tagsthree, setTagsThree] = useState('')
    const [imagesmain, setImagesMain] = useState([]);
    useEffect(()=>{
        console.log("state:",this)
        console.log(imagesmain)
        })
    function addImage(title, image, imageDesc, by, tags, tagstwo, tagsthree){
        const production = "https://latest-modular-backend.herokuapp.com/"
        const development = "http://localhost:3000/"
        const url = (process.env.NODE_ENV  === "production" ? production : development)

        fetch(`${url}api/v1/images`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${localStorage.getItem("jwt")}`
          },
          body: JSON.stringify({
            title: `${title}`,
            image: `${image}`,
            image_desc: `${imageDesc}`,
            by: `${by}`,
            tags: `${tags}`,
            tagstwo: `${tagstwo}`,
            tagsthree: `${tagsthree}`,
            user_id: 1,
          }),
    
        })
        .then((r) => r.json())
        .then(imagepassed => {
          console.log("this is the images from app",imagesmain)
          setImagesMain([...imagesmain, imagepassed])
        });
      }
    function handleSubmit(e) {
        e.preventDefault()
        addImage(title, image, imageDesc, by, tags, tagstwo, tagsthree)
    }


    return (

        <form onSubmit={handleSubmit}>

            <p className="title">
            <input className={`input ${styles[`input-control`]}`}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            value={title}
            placeholder="Add a title"
            />
            </p>

            <p className="image">
            <input className={`input ${styles[`input-control`]}`}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            value={image}
            placeholder="Add an image"
            />
            </p>

            <p className="imagedesc">
            <input className={`input ${styles[`input-control`]}`}
            onChange={(e) => setImageDesc(e.target.value)}
            type="text"
            value={imageDesc}
            placeholder="Add a description"
            />
            </p>

            <p className="by">
            <input className={`input ${styles[`input-control`]}`}
            onChange={(e) => setBy(e.target.value)}
            type="text"
            value={by}
            placeholder="Author"
            />
            </p>


            <p className="tags">
            <input className={`input ${styles[`input-control`]}`}
            onChange={(e) => setTags(e.target.value)}
            type="text"
            value={tags}
            placeholder="Add a tag"
            />
            </p>

            <p className="tags">
            <input className={`input ${styles[`input-control`]}`}
            onChange={(e) => setTagsTwo(e.target.value)}
            type="text"
            value={tagstwo}
            placeholder="Add a tag"
            />
            </p>

            <p className="tags">
            <input className={`input ${styles[`input-control`]}`}
            onChange={(e) => setTagsThree(e.target.value)}
            type="text"
            value={tagsthree}
            placeholder="Add a tag"
            />
            </p>


            <button type="submit" name="submit" > Submit </button>


        </form>



    )


}


