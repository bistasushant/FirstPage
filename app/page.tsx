import About from "@/components/About";
import Details from "@/components/Detail";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Question from "@/components/Question";
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonial";
import { Contact } from "lucide-react";



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Feature />
      <Stats />
      <Details />
      <Testimonials />
      <Team />
      <Question />
      <Contact />
      <Footer />
    </>
  );
}
