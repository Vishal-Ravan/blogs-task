import dynamic from "next/dynamic";
import Image from "next/image";
const BlogAuthor = dynamic(() => import("./BlogAuthor"));
const BlogNavigation = dynamic(() => import("./BlogNavigation"));
const Comments = dynamic(() => import("./Comments"));
const CommentForm = dynamic(() => import("./CommentForm"));
export default function BlogleftContent({ blog }) {
  if (!blog) return null;
  // console.log(blog, 'kok')
  return (
    <>
      <aside>
        <div className="blog-left-side">
          <div className="header-profile">
            {" "}
            <Image src={blog.user.profile_image_90 || "/banner.png"} alt="" width={40} height={40} /> {blog.user.name}
          </div>
          <p>          23 January 2025</p>
        </div>
        <div className="blog-desc">
          <p>Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p className="parablog-center">With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
          <p>mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean</p>
        </div>
      <div className="blog-auth1">
          <BlogAuthor user={blog.user} />
        <BlogNavigation />
      </div>
      </aside>
    </>
  );
}
