'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('https://dev.to/api/articles?per_page=10');
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Latest Blog Posts</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {blogs.map((blog) => (
          <div key={blog.id} style={{ border: '1px solid #ddd', padding: '1rem' }}>
            <img
              src={blog.social_image || '/images/default.jpg'}
              alt={blog.title}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </h3>
            <p>{blog.description}</p>
            <small>By <strong>{blog.user.name}</strong></small>
          </div>
        ))}
      </div>
    </main>
  );
}
