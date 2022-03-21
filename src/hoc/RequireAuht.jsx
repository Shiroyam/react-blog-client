import { useLocation, Navigate } from "react-router-dom"

const RequireAuht = ({children}) => {
    const location = useLocation( )
    if(localStorage.getItem('token')){
        return children
    }

    return <Navigate to="/" state={{from: location}} />
}

export default RequireAuht