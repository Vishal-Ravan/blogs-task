import dynamic from "next/dynamic";

export default function Home() {
  const Home = dynamic(() => import("./home/page"));
  return (
    <div>
      <Home />
    </div>
  );
}
