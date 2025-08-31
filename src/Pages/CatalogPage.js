import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL } from '../context/AuthContext';

const CatalogPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('auth');

  useEffect(() => {
    const fetchArticles = async () => {
      console.log({token});
      if (!token) {
        setLoading(false);
        setError('Please log in to view content.');
        return;
      }

      try {
        const config = {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        };
        const response = await axios.get(`${BASE_URL}/api/content`, config);
        setArticles(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch articles:', err);
        setError('Failed to fetch content. Please try again later.');
        setLoading(false);
      }
    };
    fetchArticles();
  }, [token]);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Content Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article._id} className={`p-6 border rounded-lg shadow-md ${article.type === 'premium' ? 'bg-yellow-100 border-yellow-400' : 'bg-white'}`}>
            <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.body}</p>
            <p className="font-bold text-sm">
              Status: <span className={`${article.type === 'premium' ? 'text-yellow-600' : 'text-green-600'}`}>{article.type.toUpperCase()}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;