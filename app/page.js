import { Navbar } from "./components/Navbar";
import HomePage from "./components/HomePage";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] 2xl:px-32">
      <Navbar />
      <HomePage />
    </div>
  );
}
