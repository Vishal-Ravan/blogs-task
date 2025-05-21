import Image from "next/image";
import "./index.css"
export default function BlogHeader() {
    return (
        <>
            <div className="container-fluid">
                <div className="blog-header">
                    <p>Home / Articles</p>
                    <h2>The Ultimate Guide to Full-Body Workouts</h2>
                    <Image
                        src="/banner.png"      // image path (public folder)
                        alt="My Image"
                        width={1900}              // required
                        height={600}             // required
                    />
                </div>
            </div>
        </>
    )
}
