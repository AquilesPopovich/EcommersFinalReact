import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from "../firebase/config";

export const contextAuth = createContext();

export const useAuth = () =>{
    const context = useContext(contextAuth);
    if(!context) throw new Error('no hay un proveedor')
    return context
}

export function AuthProvider ({children}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signup = (email, password)=>createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password)=>signInWithEmailAndPassword(auth,email,password)

    const logOut = signOut(auth)
    
    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })

        return () => unsuscribe()
    }, [])

    return <contextAuth.Provider value={{signup, login, user, logOut, loading}}>{children}</contextAuth.Provider>
}

