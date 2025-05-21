
import dynamic from 'next/dynamic';

const BlogHeader = dynamic(() => import('./components/BlogHeader'));
const BlogleftContent = dynamic(() => import('./components/BlogleftContent'));
const BlogRightAside = dynamic(() => import('./components/BlogRightAside'));

export default function Blog() {
    return (
        <div >
            <BlogHeader />
            <div className='container blog-detail-section'>
                <BlogleftContent />
                <BlogRightAside />
            </div>
        </div>
    );
}