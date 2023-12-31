import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail} from 'firebase/auth'
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

    const logOut = () => signOut(auth)

    const loginWithGoogle = () => {
        const  googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const resetPasword = (email) =>sendPasswordResetEmail(auth, email)
    
    
    useEffect(() => {
         onAuthStateChanged(auth, currentUser =>{
            if(currentUser){ 
            setUser(currentUser)
        }else{ 
            setUser(null)
        }
        })
    }, [])

    return <contextAuth.Provider value={{signup, login, user, logOut, loginWithGoogle, resetPasword}}>{children}</contextAuth.Provider>
}

