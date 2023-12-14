import { useState, useEffect } from 'react'
import Spinner from '../layouts/Spinner'
function UserResults() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

   useEffect(()=> {
    // fetch("https://api.github.com/users")
    // .then((response)=> response.json())
    // .then((data) => console.log(data))
    fetchUsers()
    
   }, [])

   const fetchUsers = async () => {
    const response = await fetch("https://api.github.com/users")
    const data = await response.json()
    setUsers(data)
    setLoading(false)
   }


    return (
       loading ? <Spinner /> : ( <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
       {users.map((user) => (
           <h3 key={user.id}>{user.login}</h3>
       ))}
   </div>)
    )
}
export default UserResults