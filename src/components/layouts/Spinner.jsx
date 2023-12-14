import spinner from '../../assets/spinner.gif'
function Spinner() {
  return (
    <div className='w-100 nt-20'>
        <img width={180}  className='mx-auto text-center' src={spinner} alt="Loding" />
    </div>
  )
}
export default Spinner