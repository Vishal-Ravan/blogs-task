export default function PostNavigation() {
  return (
    <div className="post-nav-container">
      <div className="nav-item left">
        <a className="nav-button">
          <span className="arrow">⟲</span> Previous
        </a>
        <p className="caption">5 Tips for Better Cardio Sessions</p>
      </div>

      <div className="nav-item right">
        <a className="nav-button">
          Next <span className="arrow">⟳</span>
        </a>
        <p className="caption">Meal Prep Basics for Gym Enthusiasts</p>
      </div>
    </div>
  );
}
