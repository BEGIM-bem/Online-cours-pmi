import { useEffect, useState } from 'react'
import styles from './Headers.module.css'
import { MenuItems } from './MenuItem.js'
import { NavLink, useNavigate } from 'react-router-dom'
import ReorderIcon from '@material-ui/icons/Reorder';
import CloseIcon from '@material-ui/icons/Close';
import { MutatingDots } from 'react-loader-spinner'
import { useSelector, useDispatch } from 'react-redux';
import { ERROR, logout } from '../../Logica/reducers/useReducers.js';
import jwt_decode from "jwt-decode";
import BackArrow from './Frame 928.svg';

function Headers() {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [role, setRole] = useState('')

    const [clicked, setClicked] = useState(false)

    const isAuth = useSelector(state => state.user.isAuth)

    const handleClick = () => {
        setClicked(!clicked)
    }


    // let GetToken = localStorage.getItem('token')
    // let decoded
    // if (GetToken) {
    //     decoded = jwt_decode(GetToken);
    //     console.log(decoded)
    //     setRole(decoded.role)
    // }




    function goOut() {
        dispatch(logout())
        dispatch({ type: ERROR, error: '' })
        navigate('/*')
    }

    // let GetToken = localStorage.getItem('token')

    // const decoded = jwt_decode(GetToken);
    // console.log("decod: ", decoded)
    // console.log("user.isAuth: ", user.isAuth)
    return (
        <div className={styles.headers}>

            <nav className={styles.Navbar}>

                <MutatingDots ariaLabel="loading-indicator" />
                <h1 className={styles.Navbar__title} >onlinecourspmi</h1>

                <div className={styles.menuIcon} onClick={handleClick} >
                    {clicked ?
                        <CloseIcon style={{ color: '	#FFFFFF' }} />
                        :
                        <ReorderIcon style={{ color: '	#FFFFFF' }} />}

                </div>

                <ul className={clicked ? styles.Navbar__active : styles.Navbar__navMenu} >
                    {MenuItems.map((item, index) => {

                        return (

                            <li className={styles.Navbar__item} key={index}>
                                <NavLink className={(navData) => (navData.isActive ? styles.active :
                                    styles.Navbar__navLinks)} to={item.to}  >{item.title} </NavLink>
                            </li>

                        )
                    })}



                </ul>


                {
                    isAuth === false ?
                        <NavLink to='/login' className={styles.into} > Войти </NavLink> :
                        <p onClick={goOut} className={styles.into}  > Выход</p>
                }

            </nav >


        </div >
    )
}
export default Headers