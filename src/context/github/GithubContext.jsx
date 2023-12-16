import { createContext, useState } from "react";
import PropTypes from "prop-types"

const GithubContext = createContext()

const GITHUB_URL = 'https://api.github.com/users'

export const GithubProvider = ({children}) => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}`)
        const data = await response.json()
        setUsers(data)
        setLoading(false)
       }
    return <GithubContext.Provider value={{users, loading, fetchUsers}}>
        {children}
    </GithubContext.Provider> 
}

GithubProvider.propTypes = {
    children: PropTypes.object.isRequired
}

export default GithubContext