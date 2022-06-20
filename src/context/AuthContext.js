import { useState, useEffect, createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'

export const UserContext = createContext()

export const AuthContextProvider = ({ children}) => {
    const [user, setUser] = useState({})

    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        return setDoc(doc(db, 'users', email), {
            watchList: [],
        })
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    },[])

    return (
        <UserContext.Provider value={{ signUp, signIn, logout, user }}>
            {children}
        </UserContext.Provider>
    )
}