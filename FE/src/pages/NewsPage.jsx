// import { useState, useEffect } from 'react';
// import '../styles/NewsPage.css';

// export default function NewsPage() {
//   const [news, setNews] = useState([]);
//   const [newArticle, setNewArticle] = useState({ title: '', date: '', description: '' });
//   const [editingArticle, setEditingArticle] = useState(null);

//   // Fetch news articles from the backend
//   useEffect(() => {
//     async function fetchNews() {
//       try {
//         const response = await fetch('http://localhost:5000/api/news');
//         const data = await response.json();
//         setNews(data);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     }
//     fetchNews();
//   }, []);

//   // Handle input changes for the form
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewArticle({ ...newArticle, [name]: value });
//   };

//   // Handle form submission for creating or updating an article
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = editingArticle
//         ? await fetch(`http://localhost:5000/api/news/${editingArticle._id}`, {
//             method: 'PUT',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(newArticle),
//           })
//         : await fetch('http://localhost:5000/api/news', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(newArticle),
//           });

//       if (response.ok) {
//         const updatedArticle = await response.json();
//         if (editingArticle) {
//           setNews(news.map((item) => (item._id === updatedArticle._id ? updatedArticle : item)));
//         } else {
//           setNews([...news, updatedArticle]);
//         }
//         setNewArticle({ title: '', date: '', description: '' });
//         setEditingArticle(null);
//       } else {
//         console.error('Failed to save article');
//       }
//     } catch (error) {
//       console.error('Error saving article:', error);
//     }
//   };

//   // Handle editing an article
//   const handleEdit = (article) => {
//     setEditingArticle(article);
//     setNewArticle({
//       title: article.title,
//       date: article.date,
//       description: article.description,
//     });
//   };

//   // Handle deleting an article
//   const handleDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/news/${id}`, {
//         method: 'DELETE',
//       });
//       if (response.ok) {
//         setNews(news.filter((item) => item._id !== id));
//       } else {
//         console.error('Failed to delete article');
//       }
//     } catch (error) {
//       console.error('Error deleting article:', error);
//     }
//   };

//   return (
//     <div className="NewsPage">
//       <h1>Latest News</h1>
//       <div className="news-list">
//         {news.map((item) => (
//           <div key={item._id} className="news-item">
//             <h2>{item.title}</h2>
//             <p><strong>Date:</strong> {item.date}</p>
//             <p>{item.description}</p>
//             <button onClick={() => handleEdit(item)}>Edit</button>
//             <button onClick={() => handleDelete(item._id)}>Delete</button>
//           </div>
//         ))}
//       </div>

//       <h2>{editingArticle ? 'Edit Article' : 'Create New Article'}</h2>
//       <form className="create-article-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={newArticle.title}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="date"
//           name="date"
//           value={newArticle.date}
//           onChange={handleInputChange}
//           required
//         />
//         <textarea
//           name="description"
//           placeholder="Description"
//           value={newArticle.description}
//           onChange={handleInputChange}
//           required
//         />
//         <button type="submit">{editingArticle ? 'Update' : 'Submit'}</button>
//       </form>
//     </div>
//   );
// }

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../styles/NewsPage.css';

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [newArticle, setNewArticle] = useState({ title: '', date: '', description: '' });
  const [editingArticle, setEditingArticle] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch news articles from the backend
  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch('http://localhost:5000/api/news');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }
    fetchNews();
  }, []);

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  // Handle form submission for creating or updating an article
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = editingArticle
        ? await fetch(`http://localhost:5000/api/news/${editingArticle._id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newArticle),
          })
        : await fetch('http://localhost:5000/api/news', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newArticle),
          });

      if (response.ok) {
        const updatedArticle = await response.json();
        if (editingArticle) {
          setNews(news.map((item) => (item._id === updatedArticle._id ? updatedArticle : item)));
        } else {
          setNews([...news, updatedArticle]);
        }
        setNewArticle({ title: '', date: '', description: '' });
        setEditingArticle(null);
      } else {
        console.error('Failed to save article');
      }
    } catch (error) {
      console.error('Error saving article:', error);
    }
  };

  // Handle editing an article
  const handleEdit = (article) => {
    setEditingArticle(article);
    setNewArticle({
      title: article.title,
      date: article.date,
      description: article.description,
    });
  };

  // Handle deleting an article
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/news/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setNews(news.filter((item) => item._id !== id));
      } else {
        console.error('Failed to delete article');
      }
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  return (
    <div className="NewsPage">
      <h1>Latest News</h1>
      <div className="news-list">
        {news.map((item) => (
          <div key={item._id} className="news-item">
            <h2>{item.title}</h2>
            <p><strong>Date:</strong> {item.date}</p>
            <p>{item.description.substring(0, 100)}...</p> {/* Show a short preview */}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
            <button onClick={() => navigate(`/news/${item._id}`)}>Read More</button> {/* Read More button */}
          </div>
        ))}
      </div>

      <h2>{editingArticle ? 'Edit Article' : 'Create New Article'}</h2>
      <form className="create-article-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newArticle.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newArticle.date}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newArticle.description}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{editingArticle ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
}