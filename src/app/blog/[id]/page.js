// app/blog/[id].js
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
const BlogHeader = dynamic(() => import("../components/BlogHeader"));
const BlogleftContent = dynamic(() => import("../components/BlogleftContent"));
const BlogRightAside = dynamic(() => import("../components/BlogRightAside"));
const RelatedArticles = dynamic(() => import("../components/RelatedArticles"));
const CommentForm = dynamic(() => import("../components/CommentForm"));
const Comments = dynamic(() => import("../components/Comments"));
const BlogAuthor = dynamic(() => import("../components/BlogAuthor"));
const BlogNavigation = dynamic(() => import("../components/BlogNavigation"));

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(`https://dev.to/api/articles/${id}`);
      const data = await res.json();
      setBlog(data);
    }
    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <main>
      <BlogHeader />
      <div className="container blog-detail-section">
        <BlogleftContent blog={blog} />
        <BlogRightAside blog={blog} />
      </div>

      <div className="container ">
        <div className="blog-auth">
          <BlogAuthor user={blog.user} />
          <BlogNavigation />
        </div>
        <Comments />
        <CommentForm />
      </div>
      <div className="container ">
        <RelatedArticles blog={blog} />
      </div>
    </main>
  );
}
