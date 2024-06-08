import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-7">
      <div className="col-span-1">
        <Hero />
      </div>
      <div className="col-span-2">
        <About />
      </div>
    </div>
  );
}
