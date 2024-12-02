import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../Firebase/Firebase.init';

export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
        user,
        loading,
        createUser,
        signinUser
    }
    return (
        <AuthContex.Provider value={userInfo} >
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;