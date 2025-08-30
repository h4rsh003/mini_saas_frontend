import { createContext, useState, useEffect } from "react";
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            setAuth(JSON.parse(storedAuth));
        }
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            const userData = response.data;
            localStorage.setItem('auth', JSON.stringify(userData));
            setAuth(userData);
            return userData;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;

        }
    };
    const logout = () => {
        localStorage.removeItem('auth');
        setAuth(null);
    };
    const value = { auth, login, logout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };