import React, {useState} from 'react'
import styles from './AddFavourites.module.css';
import Heart from "react-heart";




const AddFavourites = () => {

    const [active, setActive] = useState(false)
    return (
        <>
            <div className={`icon is-small ${styles['search-icon']}`}>
            <div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)}/>
		</div>
                    
                    
       
                    </div>
               
        </>
    );
};

export default AddFavourites


