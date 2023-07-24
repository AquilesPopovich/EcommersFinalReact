import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { auth } from "../firebase/config";

export const contextAuth = createContext();

export const useAuth = () =>{
    const context = useContext(contextAuth);
    if(!context) throw new Error('no hay un proveedor')
    return context
}

export function AuthProvider ({children}){

    const [user, setUser] = useState(null)

    const signup = (email, password)=>createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password)=>signInWithEmailAndPassword(auth,email,password)
    
    useEffect(() => {
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })
    }, [])

    return <contextAuth.Provider value={{signup, login, user}}>{children}</contextAuth.Provider>
}

