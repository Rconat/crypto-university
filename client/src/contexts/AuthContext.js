import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import Api from '../utils/API';
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password).then(res => {
            const email = res.user?.email;
            return Api.createUser({email}).then((response) => {
                localStorage.setItem('userId', response.data._id)
                return res;
            })
        })
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password).then(res => {
            const email = res.user?.email;
            return Api.getUserByEmail(email).then((response) => {
                localStorage.setItem('userId', response.data._id)
                return res;
            })
        })
    }
    
    function logout(){
        return auth.signOut().then(() => {
            localStorage.removeItem('userId')
        })
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}