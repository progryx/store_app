import React from 'react';
import styles from './Preloader.module.css';


let Preloader = () => {

    return <div className={styles["fade-window"]}>
    <div className='spinner-border' role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>

};

export default Preloader;