import React, {useState} from 'react'
import styles from './NewImageForm.module.css';


export default function NewImageForm({addImage}) {

    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [imageDesc, setImageDesc] = useState('')
    const [by, setBy] = useState('')
    const [tags, setTags] = useState('')
    const [tagstwo, setTagsTwo] = useState('')
    const [tagsthree, setTagsThree] = useState('')



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


