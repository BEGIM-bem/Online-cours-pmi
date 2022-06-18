import React, { useEffect, useState } from 'react'
import styles from './Course.module.css'
import { item, item2, item3 } from './item.js'
import jwt_decode from "jwt-decode";
import Modal from '../../components/Modal/Modal.jsx'
import Lesson from './images/lesson.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { deleteDate, getDate } from '../../Logica/api/Video';
import Video from '../../Course/Video';

function Course() {
    const [role, setRole] = useState('')

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDate())
    }, [dispatch])


    // if (localStorage.getItem('token') !== null) {
    //     let GetToken = localStorage.getItem('token')
    //     let decoded

    //     decoded = jwt_decode(GetToken);
    //     console.log("LL: ", decoded)
    //     setRole(decoded.role)

    // }






    const state = useSelector(state => state.user)


    const [active, setActive] = useState(false)
    // dateVidio

    const [videoSrc, setVideoSrc] = useState({ video: null, isOpen: false })


    return (
        <div>
            {
                state.isAuth === false ? null :
                    <div onClick={() => setActive(true)}>Добавить видео урок</div>

            }



            <h1 className={styles.Vid}>Все уроки</h1>
            <div className={styles.content}>
                {
                    state.dateVidio.map(item =>
                        // <a href={item.t}  >
                        <div key={item.id} >
                            <div className={styles.conteiner1}>

                                <div className={styles.tema}>
                                    <h2 className={styles.title1}>{item.tema}</h2>
                                    <p className={styles.kol} onClick={() => setVideoSrc({ video: item.silka, isOpen: true })} >Видео &#9200;</p>

                                </div>

                                <div className={styles.conteiner_item}>
                                    <img className={styles.img} src={Lesson} alt='' />
                                </div>
                                {
                                    state.isAuth !== false ? <button className={styles.delete} onClick={() => dispatch(deleteDate(item.id))} >Удалить </button> : null
                                }


                            </div>

                        </div>

                    )
                }
            </div>



            {/* // 225 28 */}
            <h1 className={styles.title}>
                Плейлисты
            </h1>
            <h1 className={styles.Vid}>Программирование</h1>
            <div className={styles.content}>
                {
                    item.map(item =>
                        <a href={item.t}  >
                            <div className={styles.conteiner}>

                                <div className={styles.tema}>
                                    <h2 className={styles.title1}>{item.title}</h2>
                                    <p className={styles.kol}>{item.kol}</p>
                                </div>

                                <div className={styles.conteiner_item}>
                                    <img className={styles.img} src={item.images} alt='' />
                                </div>

                            </div>
                        </a>

                    )
                }
            </div>



            <h1 className={styles.Vid}>База данных</h1>
            <div className={styles.content}>
                {
                    item2.map(item =>
                        <a href={item.t}  >
                            <div className={styles.conteiner}>

                                <div className={styles.tema}>
                                    <h2 className={styles.title1}>{item.title}</h2>
                                    <p className={styles.kol}>{item.kol}</p>
                                </div>

                                <div className={styles.conteiner_item}>
                                    <img className={styles.img} src={item.images} alt='' />
                                </div>

                            </div>
                        </a>

                    )
                }
            </div>



            <h1 className={styles.Vid}>Высшая математика</h1>
            <div className={styles.content}>
                {
                    item3.map(item =>
                        <a href={item.t}  >
                            <div className={styles.conteiner}>

                                <div className={styles.tema}>
                                    <h2 className={styles.title1}>{item.title}</h2>
                                    <p className={styles.kol}>{item.kol}</p>
                                </div>

                                <div className={styles.conteiner_item}>
                                    <img className={styles.img} src={item.images} alt='' />
                                </div>

                            </div>
                        </a>

                    )
                }
            </div>

            <Modal active={active} setActive={setActive} />


            {
                videoSrc.isOpen == true ?

                    <Video video={videoSrc.video} isOpen={videoSrc.isOpen} setVideoSrc={setVideoSrc} />
                    : null
            }


        </div >
    )
}


export default Course