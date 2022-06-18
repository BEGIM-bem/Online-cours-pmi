import axios from 'axios'
import { GetDate } from '../reducers/useReducers'




export const getDate = () => {

    return async dispatch => {
        try {
            let response = await axios.get('http://localhost:3001/api/get')
            dispatch({ type: GetDate, date: response.data })
        }
        catch (e) {
            console.log("Error: ", e.message)

        }
    }
}

export const deleteDate = (id) => {
    console.log("Id: ", id)

    return async dispatch => {
        try {
            await axios.delete(`http://localhost:3001/api/delete/${id}`)

            dispatch(getDate())
        }
        catch (e) {
            console.log("Error: ", e.message)

        }
    }
}

export const appDate = (values, setActive) => {
    console.log("date: ", values)
    return async dispatch => {
        try {
            await axios.post('http://localhost:3001/api/insert', {
                tema: values.tema,
                silka: values.silka
            }

            )
            dispatch(getDate())
            setActive(false)

        }
        catch (e) {
            console.log("Error: ", e.message)

        }
    }
}
