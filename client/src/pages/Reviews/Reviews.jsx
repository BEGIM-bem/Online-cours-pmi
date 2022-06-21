import React, { useEffect, useState } from 'react'
import styles from './Reviews.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { deleteDate, getReviews, PostReviews } from '../../Logica/api/Reviews'

function Reviews() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [comment, setComment] = useState("")

    useEffect(() => {
        dispatch(getReviews())
    }, [])

    const state = useSelector(user => user.user)


    const SentValues = () => {
        console.log("Name: ", name, "Comment: ", comment)
        dispatch(PostReviews(name, comment))
        setName('')
        setComment('')
    }

    return (
        <div className={styles.reviews} >
            <h1 className={styles.title}>Отзывы о курсах  </h1>
            <div className={styles.content}>
                {
                    state.dateReviews.map(item =>

                        <div key={item.id} className={styles.elements} >
                            <p className={styles.elements__name}>Отзыв от {item.name || 'Неизвестный'}&#128521; </p>
                            <p className={styles.elements__date}>&#128198;  {[new Date(item.date).getDate(), new Date(item.date).getMonth() + 1,
                            new Date(item.date).getFullYear()].map(x => { return x < 10 ? "0" + x : x }).join(".")}</p>
                            <p className={styles.elements__comments}>{item.reviews}</p>
                            {
                                state.isAuth === true ? <button className={styles.btnDlete} onClick={() => dispatch(deleteDate(item.id))} >Удалить </button> : null
                            }
                        </div>


                    )}
            </div>

            <div className={styles.conteiner}>
                <h1 className={styles.conteiner__title}>Оставить отзыв</h1>
                <p >Имя</p>
                <input className={styles.NameInput} type='text' placeholder='Введите свое имя' value={name} onChange={e => setName(e.target.value)} />
                <p >Комментарий</p>

                <input className={styles.CommentInput} type='text' value={comment} onChange={e => setComment(e.target.value)} />
                <br />



                <button className={styles.conteiner__btn} onClick={SentValues} >Отправить </button>

            </div>


        </div>
    )
}


export default Reviews