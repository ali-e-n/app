import { Content } from "./components/Content";
import { Navbar } from "./components/Navbar";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className=" min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Navigation />
      {/* <Content /> */}

      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1>Footer</h1>
      </footer> */}
    </div>
  );
}
