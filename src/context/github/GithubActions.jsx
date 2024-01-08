const GITHUB_URL = 'https://api.github.com'

export const searchUsers = async (text) => {
    

    const param = new URLSearchParams({
        q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${param}`)
    const {items} = await response.json()
   return items
    
}

export const getUser = async (login) => {

    const response = await fetch(`${GITHUB_URL}/users/${login}`)

    if(response.status === 404){
        window.location = '/notfound'
    } else {
        const data = await response.json()
   return data
    }
}

export const getUserRepos = async (login) => {

    const param = new URLSearchParams({
        sort: "created",
        per_page: 10
    })

    const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${param}`)
    const data = await response.json()
   return data
    
}