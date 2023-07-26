import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({children}){
    const {user, loading} = useAuth()

    

    if(!user) return <><h2>Please login to continue</h2></>

    return <>{children}</>
}