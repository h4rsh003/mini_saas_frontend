import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log({ profile });
  const token = localStorage.getItem('auth');

  const fetchProfile = async () => {
    setLoading(true);
    if (!token) {
      setLoading(false);
      setError('Not authenticated.');
      return;
    }
    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      const response = await axios.get('http://localhost:5000/api/profile', config);
      if (response) {
        setProfile(response.data);
      }

    } catch (err) {
      console.error('Failed to fetch profile:', err);
      setError('Could not load profile.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(fetchProfile)
    fetchProfile();
  }, [token]);

  const handleUpgrade = async () => {

    try {
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      };
      const response = await axios.post('http://localhost:5000/api/checkout', {}, config);
      setMessage(response.data.message);
      if (response) {
        fetchProfile();
      }

    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to upgrade subscription.');
      }
    }
  };

  if (loading) return <div className="text-center mt-8">Loading profile...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center">User Profile</h1>
        {profile && (
          <>
            <div className="mb-4">
              <p className="text-gray-700"><strong>Username:</strong> {profile.username}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-700"><strong>Email:</strong> {profile.email}</p>
            </div>
            <div className="mb-6">
              <p className="text-gray-700">
                <strong>Subscription Status:</strong>
                <span className={`font-bold ${profile.role === 'premium' ? 'text-yellow-600' : 'text-green-600'}`}>
                  {profile.role.toUpperCase()}
                </span>
              </p>
            </div>
            {profile.role === 'free' && (
              <button
                onClick={handleUpgrade}
                className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Upgrade to Premium
              </button>
            )}
            {message && <p className="text-green-500 text-center mt-4">{message}</p>}
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;