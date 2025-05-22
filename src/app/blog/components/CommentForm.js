'use client';
import { useState } from 'react';

export default function CommentForm() {
  const [rating, setRating] = useState('Good');

  return (
    <div className="comment-form-container">
      <h3 className="form-title">Add A Comment</h3>
      <form className="comment-form">
        <div className="form-left">
          <label>
            Name
            <input type="text" placeholder="Your Name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Your Email" />
          </label>
        </div>
        <div className="form-right">
          <label>
            Comment
            <textarea placeholder="Search Anything..."></textarea>
          </label>
        </div>
      </form>
      <div className="form-footer-main">

      <div className="form-footer">
        <label className="rating-label">Rate The Usefulness Of The Article</label>
        <div className="rating-options">
          {['😠', '😐', '🙂', '😊', '😁'].map((emoji, index) => (
            <span
              key={index}
              className={`emoji ${rating === index ? 'selected' : ''}`}
              onClick={() => setRating(index)}
            >
              {emoji}
            </span>
          ))}
          <button type="button" className="good-button">😊 Good</button>
        </div>

      </div>
          <button type="submit" className="send-button">✉ Send</button>
</div>
    </div>
  );
}
