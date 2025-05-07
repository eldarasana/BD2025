import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ArticleDetails.css';

export default function ArticleDetails() {
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await fetch(`http://localhost:5000/api/news/${id}`);
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    }
    fetchArticle();
  },[id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="ArticleDetails">
      <h1>{article.title}</h1>
      <p><strong>Date:</strong> {article.date}</p>
      <p>{article.description}</p>
    </div>
  );
}