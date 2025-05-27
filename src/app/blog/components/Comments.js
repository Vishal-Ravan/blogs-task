import Image from "next/image";

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

export default function Comments({ comments }) {
  console.log(comments);

  // Optional: if comments prop is empty or undefined, render a fallback message or empty state
  if (!comments || comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <div className="comments-container">
      <h3 className="comments-title">Comments</h3>
      {comments.map((comment, index) => (
        <div
          className={`comment ${
            index !== comments.length - 1 ? "bordered" : ""
          }`}
          key={comment.id || index}
        >
          <div className="comment-left">
            <Image
              src={comment.avatar || "/girl2.png"} // fallback avatar
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
             <span className="comment-date">
  {(() => {
    const [datePart] = comment.date.split(","); // "27/05/2025"
    const [day, month, year] = datePart.split("/").map(Number); // [27, 5, 2025]
    const parsedDate = new Date(year, month - 1, day); // month is 0-based
    return parsedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }); // ➝ "27 May 2025"
  })()}
</span>

            </div>
            <p className="comment-text">{comment.text || comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
