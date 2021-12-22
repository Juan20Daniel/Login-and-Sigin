import React,{ useState, useEffect, createContext } from "react";
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [ user, setUser ] = useState({user:null});

    useEffect(() => {
        verifiUser(setUser);
    }, [])

    return <AuthContext.Provider value={user}>{ children }</AuthContext.Provider>
}

function verifiUser(setUser) {
    const accessToken = localStorage.getItem('accessToken');
    if(!accessToken) {
        return false;
    } else {
        const { idUser, firstname, lastname, email, expire } = jwtDecode(accessToken);
        const data = {
            idUser:idUser,
            firstname:firstname,
            lastname:lastname,
            email:email
        }
        return expireToken(expire) ? false : setUser({user:data});
    }
}
function expireToken(expire) {
    const seconds = 60;
    const now = (Date.now() + seconds) / 1000;
    return now > expire;
}