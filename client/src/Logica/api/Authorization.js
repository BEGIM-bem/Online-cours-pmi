import axios from 'axios';
import jwt_decode from "jwt-decode";

import { ERROR, LOGOUT1 } from '../reducers/useReducers'

export const Login = (values, navigate) => {

    const { phoneNumber, password } = values
    return dispatch => {
        try {

            axios.post(`https://flowerchemistry.herokuapp.com/auth/login/user`, {
                phoneNumber,
                password
            })
                .then((response) => {

                    const decoded = jwt_decode(response.data.token);

                    if (decoded.role === 'Супер Админ' || decoded.role === 'Админ') {
                        localStorage.setItem("token", response.data.token);
                        dispatch({ type: LOGOUT1 })
                        navigate('/course')
                    }

                })
                .catch((error) => {

                    dispatch({ type: ERROR, error: error.response.data.message })
                })



        }
        catch (e) {
            console.log("Error: ", e.message)

        }
    }
}
