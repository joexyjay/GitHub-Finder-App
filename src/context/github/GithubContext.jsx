import { createContext, useReducer } from "react";
import PropTypes from "prop-types"
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = 'https://api.github.com/users'

export const GithubProvider = ({children}) => {
    const initialState = {
        users : [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    //GET INITIAL USERS(Testing Purpose)
    const fetchUsers = async () => {
        setLoading()
        const response = await fetch(`${GITHUB_URL}`)
        const data = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: data
        })
        
       }

    // SET LOADING
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value={{
        users: state.users, 
        loading: state.loading, 
        fetchUsers}}>
        {children}
    </GithubContext.Provider> 
}

GithubProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default GithubContext