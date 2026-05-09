import { useEffect } from "react";
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

  return (
    <div className="app">
      <ScrollToHash />
      <nav>
        <Link className="nav-name" to="/">
          {profile.name}
        </Link>
        <ul className="nav-links">
          {profile.navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith("/") ? (
                <Link to={link.href}>{link.label}</Link>
              ) : (
                <a href={link.href}>{link.label}</a>
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
