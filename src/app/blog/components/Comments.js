import Image from "next/image";

const comments = [
  {
    name: "Kang Haerin",
    rating: 5.0,
    avatar: "/haerin.jpg",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus`,
    date: "22 Jul 2022",
  },
  {
    name: "Kang Haerin",
    rating: 5.0,
    avatar: "/haerin.jpg",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus`,
    date: "22 Jul 2022",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  return (
    <span className="stars">
      {"★".repeat(fullStars)}
      {"☆".repeat(emptyStars)}
    </span>
  );
};

export default function Comments() {
  return (
    <div className="comments-container">
      <h3 className="comments-title">Comments</h3>
      {comments.map((comment, index) => (
        <div
          className={`comment ${
            index !== comments.length - 1 ? "bordered" : ""
          }`}
          key={index}
        >
          <div className="comment-left">
            <Image
              src="/banner.png"
              alt={comment.name}
              width={50}
              height={50}
              className="avatar"
            />
          </div>
          <div className="comment-right">
            <div className="comment-header">
              <span className="comment-name">{comment.name}</span>
              <StarRating rating={comment.rating} />
              <span className="comment-score">
                ({comment.rating.toFixed(1)})
              </span>
              <span className="comment-date">{comment.date}</span>
            </div>
            <p className="comment-text">{comment.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
