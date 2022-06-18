import React, { useState } from 'react'
import styles from '../Python/Python.module.css'
import { itemVidei } from './item.js'
import stylesTable from '../Python/stylesTable.module.css'
import Video from '../Video'

function Access() {

    const [videoSrc, setVideoSrc] = useState({ video: null, isOpen: false })

    console.log(videoSrc)

    return (
        <div className={styles.Python} >
            <h1 className={styles.title}>Microsoft Access </h1>


            <p className={styles.text}>Если вы не знаете как сделать базу данных в программе Microsoft Access, то посмотрите этот урок. Вместе с вами мы разберем основные понятия любой базы данных Access: таблицы, формы, запросы, отчеты, макросы и т.д. Вы убедитесь, что программа Microsoft Access очень проста и не требует дополнительных знаний в освоении. </p>
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

export default Access