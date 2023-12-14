function About() {
  return (
    <>
        <h1 className="text-6xl mb-4">GitHub Finder</h1>
        <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details. This app uses the Context API along with the useContext and useReducer hooks for state management
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-black'>1.0.0</span>
      </p>
      
    </>
  )
}
export default About