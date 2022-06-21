import React from 'react'
import styles from './About.module.css'
import img from './fp.jpg'

function About() {

    return (
        <div className={styles.About} >

            <div className={styles.About_item1}>
                <h1 className={styles.title} >О нас</h1>
                <p className={styles.text} >Onlinecourspmi – образовательная онлайн платформа для обучения во всех областях и направлениях IT и WEB – онлайн курсы по созданию сайтов, верстке и программированию, дизайну и веб-дизайну, продвижению и заработку и многому другому от лучших авторов-экспертов.

                    Наша команда — это профессионалы своего дела, следуя нашей миссии мы стремимся сделать проект лучше, чтобы обучение было для вас увлекательным и эффективным, а результаты превысили все ваши ожидания.</p>

                <p className={styles.text}>Миссия Onlinecourspmi – создать и развить современную высокотехнологичную обучающую онлайн платформу и предоставить эффективное професcиональное обучение высокого качества по всем направлениям в области  как минимум 1 000 000 человек.</p>
            </div>

            <div className={styles.About_item2}>
                <img className={styles.img} src={img} alt='' />
            </div>

        </div>
    )
}


export default About