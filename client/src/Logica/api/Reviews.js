import axios from 'axios'
import { GetDate, GetReviews } from '../reducers/useReducers'




export const getReviews = () => {

    return async dispatch => {
        try {
            let response = await axios.get('http://localhost:3001/api/reviewsGet')
            dispatch({ type: GetReviews, date: response.data })
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
            await axios.delete(`http://localhost:3001/api/reviewsDelete/${id}`)
            dispatch(getReviews())

        }
        catch (e) {
            console.log("Error: ", e.message)

        }
    }
}

export const PostReviews = (name, comment) => {

    return async dispatch => {
        try {
            await axios.post('http://localhost:3001/api/reviews', {
                name: name,
                reviews: comment,
                date: new Date()
            }

            )
            dispatch(getReviews())


        }
        catch (e) {
            console.log("Error: ", e.message)

        }
    }
}
