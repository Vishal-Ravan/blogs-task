import dynamic from 'next/dynamic';

const BlogCard = dynamic(() => import('./BlogCard'));
const TourGuide = dynamic(() => import('./TourGuide'));

export default function BlogRightAside() {
    return (
        <>
            <div className="">
                <div className="blog-right-sidde">
                    <h3>Explore more</h3>
                    <BlogCard/>
                    <TourGuide/>
                </div>
            </div>
        </>
    )
}