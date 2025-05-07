// src/pages/UsersPage.jsx
import { useEffect, useState } from 'react';
import { NavLink }         from 'react-router-dom';
import '../styles/UsersPage.css';
import '../styles/elements/line_button.css';

export default function UsersPage() {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('http://localhost:5000/api/users');
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error('Fetch users failed:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users…</p>;
  if (error)   return <p>Error: {error}</p>;
  if (users.length === 0) return <p>User list is empty</p>;

  return (
    <div className="users-page-container">
      <div className="h1-wrapper">
        <h1>Users</h1>
      </div>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            <button className="line-button">
              <NavLink to={`/users/${user._id}`} className="btn2">
                <span className="spn2">{user.name}</span>
              </NavLink>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}