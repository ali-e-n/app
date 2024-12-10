import { Content } from "./components/Content";
import { Navbar } from "./components/Navbar";
import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <div className=" min-h-screen flex flex-col items-center justif-center p-8 pb-20 gap-10 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <Navigation />
      <Content />

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}
