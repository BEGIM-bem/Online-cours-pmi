import React from 'react'
import styles from './Video.module.css'

function Video({ video, isOpen, setVideoSrc }) {

    return (
        <div className={styles.content} >

            <div onClick={() => setVideoSrc({ video: null, isOpen: false })} className={styles.cross} > &#x2716;</div>
            <iframe src={video} className={styles.videoC} frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen;
             picture-in-picture"></iframe>

        </div >
    )
}


export default Video