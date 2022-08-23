import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({auth, children}) => {
    
    if(!auth) {
        return <Navigate to="/login" replace/>
    }    
    
    return (
        <Outlet/>
    );
}
 
export default ProtectedRoute;