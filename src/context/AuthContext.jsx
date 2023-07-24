import { createContext, useContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../firebase/config";

export const contextAuth = createContext();

export const useAuth = () =>{
    const context = useContext(contextAuth);
    if(!context) throw new Error('no hay un proveedor')
    return context
}

export function AuthProvider ({children}){
    const signup = (email, password)=>createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password)=>signInWithEmailAndPassword(auth,email,password)
    
    return <contextAuth.Provider value={{signup, login}}>{children}</contextAuth.Provider>
}

