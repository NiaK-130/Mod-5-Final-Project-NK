import React, {useState} from 'react'
import styles from './AddFavourites.module.css';
import Heart from "react-heart";


function addToDashboard(setActive,active,url,addImage){
    setActive(!active)
    addImage("",url,"","","","",)
}

const AddFavourites = ({url,addImage}) => {
    
    const [active, setActive] = useState(false)
    return (
        <>
            <div className={`icon is-small ${styles['search-icon']}`}>
            <div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => addToDashboard(setActive,active,url,addImage)}/>
		</div>
                    
                    
       
                    </div>
               
        </>
    );
};

export default AddFavourites


