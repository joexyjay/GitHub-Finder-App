import { createContext, useReducer } from "react";
import PropTypes from "prop-types"
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = 'https://api.github.com'

export const GithubProvider = ({children}) => {
    const initialState = {
        users : [],
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)


    //GET INITIAL USERS(Testing Purpose)
    const searchUsers = async (text) => {
        setLoading()

        const param = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${param}`)
        const {items} = await response.json()
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
        
       }

    // SET LOADING
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value={{
        users: state.users, 
        loading: state.loading, 
        searchUsers}}>
        {children}
    </GithubContext.Provider> 
}

GithubProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default GithubContext