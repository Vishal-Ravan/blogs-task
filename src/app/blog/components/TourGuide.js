// components/TourGuides.js
import Image from 'next/image';

const guides = [
  {
    name: 'Miranda Rachel',
    location: 'Jombang, Jawa timur',
    rating: 4.0,
    image: '/banner.png', // Replace with real path
  },
  {
    name: 'Danielle Marsh',
    location: 'Wonosobo, Jawa tengah',
    rating: 4.0,
    image: '/banner.png', // Replace with real path
  },
  {
    name: 'Kang Haerin',
    location: 'Bandung, Jawa barat',
    rating: 5.0,
    image: '/banner.png', // Replace with real path
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  return (
    <div className="stars">
      {'★'.repeat(fullStars)}
      {'☆'.repeat(emptyStars)}
    </div>
  );
};

export default function TourGuides() {
  return (
    <div className="tour-guides">
      <h2>Tour Guides</h2>
      <ul>
        {guides.map((guide, index) => (
          <li key={index} className="guide">
            <div className="profile-pic">
              <Image
                src={guide.image}
                alt={guide.name}
                width={50}
                height={50}
                className="avatar"
              />
               <div className="rating">
                <StarRating rating={guide.rating} />
                <span className="score">({guide.rating.toFixed(1)})</span>
              </div>
            </div>
            <div className="guide-info">
              <p className="name">{guide.name}</p>
              <p className="location">📍 {guide.location}</p>
             
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
