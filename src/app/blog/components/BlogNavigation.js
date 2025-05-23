import Image from "next/image";

export default function PostNavigation() {
  return (
    <div className="post-nav-container">
      <div className="nav-item left">
        <a className="nav-button">
          <span className="arrow"><Image src="/leftarrow.png" alt="" width={16} height={16} /></span> Previous
        </a>
        <p className="caption">5 Tips for Better Cardio Sessions</p>
      </div>

      <div className="nav-item right">
        <a className="nav-button">
          Next <span className="arrow"><Image src="/rightarrow.png" alt="" width={16} height={16} /></span>
        </a>
        <p className="caption">Meal Prep Basics for Gym Enthusiasts</p>
      </div>
    </div>
  );
}
