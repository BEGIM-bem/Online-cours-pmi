import React, { useState } from 'react'
import styles from '../Python/Python.module.css'
import { itemVidei } from './item.js'
import stylesTable from '../Python/stylesTable.module.css'
import Video from '../Video'

function Mat1() {

    const [videoSrc, setVideoSrc] = useState({ video: null, isOpen: false })

    console.log(videoSrc)

    return (
        <div className={styles.Python} >
            <h1 className={styles.title}>Математический анализ 1 </h1>


            <p className={styles.text}>Математи́ческий ана́лиз (классический математический анализ) — совокупность разделов математики, соответствующих историческому разделу под наименованием «анализ бесконечно малых», объединяет дифференциальное и интегральное исчисления.  </p>
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

export default Mat1