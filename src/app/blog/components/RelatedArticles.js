'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

export default function RelatedArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const res = await fetch('https://dev.to/api/articles');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setArticles(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) return <p>Loading articles...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!articles.length) return <p>No articles available.</p>;

  return (
    <section className="related-articles">
      <h2 className="section-title">Related articles</h2>
      <div className="articles-grid">
        {articles.slice(0, 4).map((blog) => (
          <div key={blog.id} className="article-card">
            {blog.social_image ? (
              <Image
                src={blog.social_image}
                alt={blog.title}
                width={400}
                height={200}
                className="article-image"
              />
            ) : (
              <div style={{ width: 400, height: 200, background: '#ccc' }}>No image</div>
            )}
            <h3 className="article-title">{blog.title}</h3>
            <p className="article-desc">{blog.description || blog.body_markdown?.slice(0, 100)}</p>
            <p className="article-author">
              By <strong>{blog.user.name}</strong>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
