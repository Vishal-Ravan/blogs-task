import dynamic from "next/dynamic";

export default function Home() {
  const Blog = dynamic(() => import("./blog/page"));
  return (
    <div >
      <Blog />
    </div>
  );
}
