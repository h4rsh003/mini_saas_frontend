import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Header = () => {
  const token = localStorage.getItem('auth');
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Mini SaaS App</Link>
      <nav>
        {token ? (
          <>
            <Link to="/catalog" className="mx-2 hover:text-gray-400">Catalog</Link>
            <Link to="/profile" className="mx-2 hover:text-gray-400">Profile</Link>
            <button onClick={handleLogout} className="mx-2 hover:text-gray-400">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="mx-2 hover:text-gray-400">Login</Link>
            <Link to="/signup" className="mx-2 hover:text-gray-400">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;