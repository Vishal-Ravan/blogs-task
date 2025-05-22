import dynamic from "next/dynamic";
import Image from "next/image";

export default function BlogleftContent() {
    const BlogAuthor = dynamic(() => import('./BlogAuthor'));
    const BlogNavigation = dynamic(() => import('./BlogNavigation'));
    const Comments = dynamic(() => import('./Comments'));
    const CommentForm = dynamic(() => import('./CommentForm'));
    
    return (
        <>
            <aside>
                <div className="blog-left-side">
                    <div className="header-profile"> <Image src="/banner.png" alt="" width={40} height={40} /> Alex Carter</div>
                    <p>23 January 2025</p>
                    
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <BlogAuthor/>
                <BlogNavigation/>
                <Comments/>
                <CommentForm/>

            </aside>
        </>
    )
}
