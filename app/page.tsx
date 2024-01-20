import Carousel from "@/components/Carousel";
import Header from "@/sections/Header";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <div className="generalContainer">
      <div className="leftDoor" />
      <div className="loader" />
      <div className="rightDoor" />
      <Header />
      <Carousel />
      <Projects />
      <Contact />
    </div>
  );
}
