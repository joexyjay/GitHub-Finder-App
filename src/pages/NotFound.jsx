import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
function NotFound() {
  return (
    <div className="hero">
        <div className="text-center hero-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
                404 - Not Found
            </h1>
            <p className="mb-5">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
                <FaHome className=" mr-2" />
                Go Home
            </Link>
            </div>
        </div>
    </div>
  )
}
export default NotFound