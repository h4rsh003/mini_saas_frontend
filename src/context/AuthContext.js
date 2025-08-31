import { createContext, useState} from "react";
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/login', { email, password });
            const userData = await response.data;
            console.log({userData});
            if(userData)
           { localStorage.setItem('auth', userData.token);
            setAuth(userData);}
            
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