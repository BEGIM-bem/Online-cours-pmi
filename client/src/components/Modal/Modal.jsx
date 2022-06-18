import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react'
import styles from './Modal.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { appDate } from '../../Logica/api/Video';


// import { Add_Filials } from '../../../Logica/api/Filials';


function Modal({ active, setActive }) {

    const dispatch = useDispatch()

    const AddNewFilialsSchema = Yup.object().shape({
        tema: Yup.string()
            .required('Обязательно'),
        silka: Yup.string()
            .required('Обязательно'),

    })

    function Clear(values) {
        values.tema = '';
        values.silka = '';


    }


    return (
        <div className={active ? styles.active : styles.modal}  >

            <div className={styles.modal__content}   >
                <Formik
                    initialValues={{

                        tema: '',
                        silka: "",

                    }}
                    validationSchema={AddNewFilialsSchema}
                    onSubmit={(values) => {

                        dispatch(appDate(values, setActive))
                        Clear(values)



                    }}>

                    {({ errors, touched, values }) => (
                        <Form>

                            <div className={styles.modal__content_form}>

                                <div className={styles.modal__content_data}>
                                    <p className={styles.modal__content_Name}>Тема урока</p>

                                    <Field placeholder='Тема урока' name='tema' type='text'
                                        value={values.tema} className={styles.modal__content_form_input}
                                    />

                                    {errors.tema && touched.tema ? (
                                        <div className={styles.errors} >{errors.tema}</div>
                                    ) : null}
                                </div>

                                <div className={styles.modal__content_data}>
                                    <p className={styles.modal__content_Name}>Ссылка на видео</p>

                                    <Field placeholder='Ссылка на видео' name='silka' type='text'
                                        value={values.silka} className={styles.modal__content_form_input}
                                    />
                                    {errors.silka && touched.silka ? (
                                        <div className={styles.errors} >{errors.silka}</div>
                                    ) : null}

                                </div>


                                <div className={styles.modal__content_data}>

                                </div>


                            </div>
                            <div className={styles.actions}>
                                <button type='sumbit' className={styles.actions__save}>Сохранить</button><br />
                                <button className={styles.actions__operations} onClick={() => Clear(values)} >Очистить</button>

                            </div>
                        </Form>

                    )}


                </Formik>

                <button button='button' className={styles.actions__operations1} onClick={() => setActive(false)} >Отмена </button>
            </div>


        </div>
    )
}
export default Modal;