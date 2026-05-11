import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { profile } from "./data/profile";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith("/blog");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="app">
      <ScrollToHash />
      <nav>
        <Link className="nav-name" to="/">
          {profile.name}
        </Link>
        <button
          className={`nav-toggle ${isMenuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
          <span className="nav-toggle-line" />
        </button>
        <ul
          id="primary-navigation"
          className={`nav-links ${isMenuOpen ? "is-open" : ""}`}
        >
          {profile.navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("/") ? (
                <Link to={link.href} onClick={handleNavClick}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      {!isBlogPage && (
        <footer>
          <span>{profile.name}</span>
          <span>
            <Link to="/blog">Writing -&gt;</Link>
          </span>
        </footer>
      )}
    </div>
  );
}

export default App;
