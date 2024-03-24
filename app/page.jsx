import Hero from "@/components/hero";
import NavBar from "@/components/navbar";
import Join from "@/components/join";
import Feature from "@/components/feature";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero />
        <Feature />
      </main>
    </div>
  );
}
