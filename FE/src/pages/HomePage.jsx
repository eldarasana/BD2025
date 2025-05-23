import '../styles/HomePage.css';
import PrintStreamLogo from '../images/PrintStream.png'; // Corrected image name

export default function Home() {
  return (
    <div className="HomeHeader">
      <div className="home-content">
        {/* Add the imported image */}
        <img 
          src={PrintStreamLogo} 
          alt="PrintStream Logo" 
          className="printstream" 
        />
      </div>
      <h1>Welcome to PrintStream</h1>
      <p>Explore the world of games and catch the latest news in gaming industry!</p>

      <footer className="footer">
  <p>&copy; 2025 PrintStream. All rights reserved.</p>
  <ul>
    <li><a href="/privacy-policy">Privacy Policy</a></li>
    <li><a href="/terms-of-service">Terms of Service</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
</footer>
    </div>
  );
}