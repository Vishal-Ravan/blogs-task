"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Comments from "./Comments";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/comments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  async function addComment(newComment) {
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      if (res.ok) {
        setComments((prev) => [newComment, ...prev]);
      } else {
        alert("Failed to save comment");
      }
    } catch {
      alert("Failed to save comment");
    }
  }

  return (
    <div>
      {loading ? <p>Loading comments...</p> : <Comments comments={comments} />}

      <CommentForm addComment={addComment} />
    </div>
  );
}

function CommentForm({ addComment }) {
  const [rating, setRating] = useState(3);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const ratings = [
    { value: 0, image: "/em.png", label: "Very Bad" },
    { value: 1, image: "/em1.png", label: "Bad" },
    { value: 2, image: "/em2.png", label: "Average" },
    { value: 3, image: "/em3.png", label: "Nice" },
    { value: 4, image: "/em4.png", label: "Good" },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.comment) {
      alert("Please fill all fields.");
      return;
    }

    const newComment = {
      id: Date.now(),
      ...formData,
      rating,
      date: new Date().toLocaleString(),
    };

    addComment(newComment);

    setFormData({ name: "", email: "", comment: "" });
    setRating(3);
  }

  return (
    <div className="comment-form-container">
      <h3 className="form-title">Add A Comment</h3>

      <form className="comment-form" onSubmit={handleSubmit}>
        <div className="form-left">
          <label>
            Name
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-right">
          <label>
            Comment
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="form-footer-main">
          <div className="form-footer container">
            <label className="rating-label">
              Rate The Usefulness Of The Article
            </label>

            <div className="rating-options">
              {ratings.map((rate) => (
                <div
                  key={rate.value}
                  className={`emoji-wrapper ${
                    rating === rate.value ? "selected" : ""
                  }`}
                  onClick={() => setRating(rate.value)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    gap: "6px",
                  }}
                >
                  <Image
                    src={rate.image}
                    width={28}
                    height={28}
                    alt={rate.label}
                    className="emoji"
                  />
                  {rating === rate.value && (
                    <span className="emoji-label">{rate.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="send-button">
            <Image src="/msg.png" alt="" width={16} height={16} /> Send
          </button>
        </div>
      </form>
    </div>
  );
}
