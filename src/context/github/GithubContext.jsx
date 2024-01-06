import { createContext, useReducer } from "react";
import PropTypes from "prop-types"
import githubReducer from "./GithubReducer";

const GithubContext = createContext()

const GITHUB_URL = 'https://api.github.com'

export const GithubProvider = ({children}) => {
    const initialState = {
        users : [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    const getUser = async (login) => {

        setLoading()

        const response = await fetch(`${GITHUB_URL}/users/${login}`)

        if(response.status === 404){
            window.location = '/notfound'
        } else {
            const data = await response.json()
        dispatch({
            type: 'GET_USER',
            payload: data
        })
        }
        
        
    }

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
    
    const clearUsers = () => dispatch({
        type: 'CLEAR_USERS'
    })


    // SET LOADING
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider value={{
        users: state.users, 
        user: state.user,
        loading: state.loading, 
        searchUsers,
        getUser,
        clearUsers}}>
        {children}
    </GithubContext.Provider> 
}

GithubProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default GithubContext