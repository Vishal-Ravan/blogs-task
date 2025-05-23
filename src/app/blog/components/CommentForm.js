'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function CommentForm() {
  const [rating, setRating] = useState(null);

  const ratings = [
    { value: 0, image: '/em.png', alt: 'Angry' },
    { value: 1, image: '/em1.png', alt: 'Neutral' },
    { value: 2, image: '/em2.png', alt: 'Smile' },
    { value: 3, image: '/em3.png', alt: 'Happy' },
  ];

  return (
    <div className="comment-form-container">
      <h3 className="form-title">Add A Comment</h3>
      <form className="comment-form">
        <div className="form-left">
          <label>
            Name
            <input type="text" placeholder="" />
          </label>
          <label>
            Email
            <input type="email" placeholder="" />
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
            {ratings.map((rate) => (
              <Image
                key={rate.value}
                src={rate.image}
                height={16}
                width={16}
                alt={rate.alt}
                className={`emoji ${rating === rate.value ? 'selected' : ''}`}
                onClick={() => setRating(rate.value)}
                
              />
            ))}
            <button type="button" className="good-button"><Image src="/em4.png" alt="" width={16} height={16}/> Good</button>
          </div>
        </div>
        <button type="submit" className="send-button"><Image src="/msg.png" alt="" width={16} height={16}/> Send</button>
      </div>
    </div>
  );
}
