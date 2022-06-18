import React, { useState, useEffect } from 'react';
import {
    TimeIcon, CheckIcon, LocationsIcon, EmailIcon, TelephonIcon,
    PhotoMain
} from './images/inedex.js'
import img from './images/fon4.jpg'
import styles from './Home.module.css'
import SliderContent from "../../components/Slider/sliderContent.js";
import sliderImage from "../../components/Slider/sliderImage.js";

// import { useSelector, useDispatch } from 'react-redux';

const len = sliderImage.length - 1;

function Home() {
    // const [activeIndex, setActiveIndex] = useState(0);

    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    //     }, 5000);
    //     return () => clearInterval(interval);


    // }, []);




    return (

        <div className={styles.HomePage}>
            <div className={styles.img2}>
                <img src={img} alt='' className={styles.img} />
                <div className={styles.homeLess}>
                    <h1 className={styles.f} >О платформе</h1>
                    <p className={styles.d}>Миссия Skillbox — дать возможность каждому быть актуальным и востребованным <br />специалистом прямо сейчас.
                        Вне зависимости от возраста и географии. </p>
                </div>

            </div>

            {/* <div >
                <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} prevSlide={() =>
                    setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                    nextSlide={() =>
                        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                    } />

            </div> */}



            <footer className={styles.footer} >

                <div className={styles.footer__address}>

                    <img src={LocationsIcon} alt='' className={styles.footer__locationsImages} />

                    <div className={styles.footer__allText} >
                        <h1 className={styles.footer__title}>Адрес Главного центра ФТУКР:</h1>
                        <p className={styles.footer__text} >ул. Абдумомунова, д. 197</p>
                        <p className={styles.footer__text} >Национальный Центр детей и юношества «Сейтек»</p>
                    </div>
                </div>



                <div className={styles.footer__contact} >

                    <div className={styles.footer__contact_phone}>
                        <img src={TelephonIcon} alt='' />


                        <div className={styles.footer__contact__number} >
                            <h1 className={styles.footer__contact_text} >Контактные телефоны:</h1>
                            <p className={styles.footer__phone}>(+996 312) 66 29 14</p>
                            <p className={styles.footer_phone}>(+996 554) 40 44 51</p>
                        </div>
                    </div>


                    <div className={styles.footer__contact_phone}>
                        <img src={EmailIcon} alt='' />


                        <div className={styles.footer__contact__number} >
                            <h1 className={styles.footer__contact_text} >E-mail:</h1>
                            <p className={styles.footer__phone}>wuseitek@mail.ru</p>

                        </div>
                    </div>


                </div>

            </footer>



        </div>

    )
}

export default Home;