import { Link } from "react-router-dom";
import { profile } from "../data/profile";

function Blog() {
  return (
    <section className="blog">
      <Link className="blog-back" to="/" aria-label="Back to home">
        <span className="blog-back-arrow">←</span>
      </Link>
      <h2>Blog</h2>
      <p className="blog-intro">
        Notes, experiments, and write-ups on agentic systems and applied AI.
      </p>
      {profile.blogPosts.length === 0 ? (
        <p className="blog-empty">Posts coming soon.</p>
      ) : (
        <div className="blog-list">
          {profile.blogPosts.map((post) => (
            <article key={post.title} className="blog-item">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-meta">{post.date}</p>
              <p className="blog-summary">{post.summary}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Blog;
