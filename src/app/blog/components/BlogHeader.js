import Image from "next/image";
export default function BlogHeader() {
  return (
    <>
      <div className="container-fluid">
        <div className="blog-header">
          <p>Home / Articles</p>
          <h2>The Ultimate Guide to Full-Body Workouts</h2>
          <Image
            src="/banner.png" 
            alt="My Image"
            width={1900} 
            height={660} 
            className="image-header"
          />
        </div>
      </div>
    </>
  );
}
