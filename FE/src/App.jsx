// import React from 'react';
// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// import HomePage    from './pages/HomePage.jsx';
// import UsersPage   from './pages/UsersPage.jsx';
// import AddUserPage from './pages/AddUserPage.jsx';
// import UserPage    from './pages/UserPage.jsx';
// import EditUserPage from './pages/EditUserPage.jsx';

// import GamesPage    from './pages/GamesPage.jsx';
// import AddGamePage  from './pages/AddGamePage.jsx';
// import GamePage     from './pages/GamePage.jsx';
// import EditGamePage from './pages/EditGamePage.jsx';

// import NewsPage from './pages/NewsPage.jsx'; // Ensure this import is correct

// import './App.css';
// import './styles/elements/rgb_button.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <nav className="NavLinks">
//         <div className="rgb-container">
//           <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
//             Home
//           </NavLink>
//         </div>
//         <div className="rgb-container">
//           <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>
//             Users
//           </NavLink>
//         </div>
//         <div className="rgb-container">
//           <NavLink to="/add_user" className={({ isActive }) => isActive ? 'active' : ''}>
//             Add User
//           </NavLink>
//         </div>
//         <div className="rgb-container">
//           <NavLink to="/games" className={({ isActive }) => isActive ? 'active' : ''}>
//             Games
//           </NavLink>
//         </div>
//         <div className="rgb-container">
//           <NavLink to="/add_game" className={({ isActive }) => isActive ? 'active' : ''}>
//             Add Game
//           </NavLink>
//         </div>
//         <div className="rgb-container">
//           <NavLink to="/news" className={({ isActive }) => isActive ? 'active' : ''}>
//             News
//           </NavLink>
//         </div>
//       </nav>

//       <Routes>
//         <Route path="/"         element={<HomePage />} />
//         <Route path="/users"    element={<UsersPage />} />
//         <Route path="/add_user" element={<AddUserPage />} />
//         <Route path="/news"     element={<NewsPage />} />

//         <Route path="/games"     element={<GamesPage />} />
//         <Route path="/add_game"  element={<AddGamePage />} />

//         {/* dynamic routes */}
//         <Route path="/users/:id"     element={<UserPage />} />
//         <Route path="/edit_user/:id" element={<EditUserPage />} />

//         <Route path="/games/:id"      element={<GamePage />} />
//         <Route path="/edit_game/:id"  element={<EditGamePage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import UsersPage from './pages/UsersPage.jsx';
import AddUserPage from './pages/AddUserPage.jsx';
import UserPage from './pages/UserPage.jsx';
import EditUserPage from './pages/EditUserPage.jsx';

import GamesPage from './pages/GamesPage.jsx';
import AddGamePage from './pages/AddGamePage.jsx';
import GamePage from './pages/GamePage.jsx';
import EditGamePage from './pages/EditGamePage.jsx';

import NewsPage from './pages/NewsPage.jsx';
import ArticleDetails from './pages/ArticlesDetails.jsx'; // Import the new component

import './App.css';
import './styles/elements/rgb_button.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="NavLinks">
        <div className="rgb-container">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
        </div>
        <div className="rgb-container">
          <NavLink to="/users" className={({ isActive }) => (isActive ? 'active' : '')}>
            Users
          </NavLink>
        </div>
        <div className="rgb-container">
          <NavLink to="/add_user" className={({ isActive }) => (isActive ? 'active' : '')}>
            Add User
          </NavLink>
        </div>
        <div className="rgb-container">
          <NavLink to="/games" className={({ isActive }) => (isActive ? 'active' : '')}>
            Games
          </NavLink>
        </div>
        <div className="rgb-container">
          <NavLink to="/add_game" className={({ isActive }) => (isActive ? 'active' : '')}>
            Add Game
          </NavLink>
        </div>
        <div className="rgb-container">
          <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : '')}>
            News
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/add_user" element={<AddUserPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<ArticleDetails />} /> {/* Add this route */}
        <Route path="/games" element={<GamesPage />} />
        <Route path="/add_game" element={<AddGamePage />} />
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/edit_user/:id" element={<EditUserPage />} />
        <Route path="/games/:id" element={<GamePage />} />
        <Route path="/edit_game/:id" element={<EditGamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
