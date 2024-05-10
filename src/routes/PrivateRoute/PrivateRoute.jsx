
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../components/hooks/useAuth'

const PrivateRoute = ({children}) => {
    const { user,loading } =useAuth()
    const location = useLocation()
    // const navigate=useNavigate()
    if(loading){
        return <span className="loading loading-spinner loading-lg flex justify-center mt-32 ml-72 md:ml-[500px]"></span>
    }
    if (!user) {
            return <Navigate to='/login' state={location?.pathname || "/"}></Navigate>
        }
  return (
    <div>
        {children}
    </div>
  )
}

PrivateRoute.propTypes = {
    children:PropTypes.object.isRequired
}

export default PrivateRoute