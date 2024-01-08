const GITHUB_URL = 'https://api.github.com'

export const searchUsers = async (text) => {
    

    const param = new URLSearchParams({
        q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${param}`)
    const {items} = await response.json()
   return items
    
}