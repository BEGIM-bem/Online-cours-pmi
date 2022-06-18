import React, { useState } from 'react'
import styles from '../Python/Python.module.css'
import { itemVidei } from './item.js'
import stylesTable from '../Python/stylesTable.module.css'
import Video from '../Video'

function Sql() {

    const [videoSrc, setVideoSrc] = useState({ video: null, isOpen: false })

    console.log(videoSrc)

    return (
        <div className={styles.Python} >
            <h1 className={styles.title}>SQL для анализа данных</h1>


            <p className={styles.text}>Курс для тех, кому нужно работать с базами данных. Вы освоите язык запросов SQL — и с его помощью сможете самостоятельно получать нужные данные, сопоставлять и анализировать их. </p>
            {/* <iframe src="https://vk.com/video_ext.php?oid=-66669811&id=456242349&hash=fe6e1dc24272a48e" width="640" height="360" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe> */}

            <div className={stylesTable.container} >
                <table className={stylesTable.table} >
                    <tbody className={stylesTable.tbody} >

                        {
                            itemVidei.map((item, index) => (

                                <tr key={index} onClick={() => setVideoSrc({ video: item.video, isOpen: true })}
                                    className={stylesTable.table__texst}  >
                                    <td className={stylesTable.d}>{item.id}.</td>
                                    <td className={stylesTable.d}>{item.title}</td>

                                </tr>

                            ))
                        }


                    </tbody >
                </table >
            </div>

            {
                videoSrc.isOpen == true ?

                    <Video video={videoSrc.video} isOpen={videoSrc.isOpen} setVideoSrc={setVideoSrc} />
                    : null
            }


        </div >
    )
}

export default Sql