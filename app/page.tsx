import AI from "@/components/AI";
import Cards from "@/components/Cards";
import CreonPass from "@/components/CreonPass";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Profiting from "@/components/Profiting";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <main className="">
      <NavBar />
      <Hero />
      <CreonPass />
      <Profiting />
      <Vision />
      <Cards />
      <AI />
      <Footer />
    </main>
  );
}
