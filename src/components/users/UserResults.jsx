import { useContext, useEffect } from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import GithubContext from '../../context/github/GithubContext'
function UserResults() {

    const {users, loading, fetchUsers} = useContext(GithubContext)

   useEffect(()=> {
    // fetch("https://api.github.com/users")
    // .then((response)=> response.json())
    // .then((data) => console.log(data))
    fetchUsers()
    
   },[fetchUsers])


    return (
       loading ? <Spinner /> : ( <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
       {users.map((user) => (
           <UserItem key={user.id} user={user}/>
       ))}
   </div>)
    )
}
export default UserResults