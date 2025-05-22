import dynamic from "next/dynamic";
import Image from "next/image";
const BlogAuthor = dynamic(() => import("./BlogAuthor"));
const BlogNavigation = dynamic(() => import("./BlogNavigation"));
const Comments = dynamic(() => import("./Comments"));
const CommentForm = dynamic(() => import("./CommentForm"));
export default function BlogleftContent({ blog }) {
  if (!blog) return null;
console.log(blog,'kok')
  return (
    <>
      <aside>
        <div className="blog-left-side">
          <div className="header-profile">
            {" "}
            <Image src={blog.user.profile_image_90 || "/banner.png"}  alt="" width={40} height={40} /> {blog.user.name}
          </div>
          <p>{new Date(blog.published_at).toLocaleDateString()}</p>
        </div>
        <p>
          {blog.description}
        </p>
        <BlogAuthor user={blog.user} />
        <BlogNavigation />
        <Comments />
        <CommentForm />
      </aside>
    </>
  );
}
