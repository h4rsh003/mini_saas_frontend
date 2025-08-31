import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './Pages/loginPage';
import SignupPage from './Pages/SignupPage';
import CatalogPage from './Pages/CatalogPage';
import ProfilePage from './Pages/ProfilePage';

const token = localStorage.getItem('auth');

const PrivateRoute = ({ children }) => {
  return token ? children : <Navigate to="/login" />;

};

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/catalog" element={<PrivateRoute>
            <CatalogPage />
          </PrivateRoute>
          } />

          <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />

          <Route path="/" element={!token ? <Navigate to="/login" /> : <Navigate to="catalog"/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;