import Image from "next/image";
import HeroHome from "@/components/sections/HeroHome";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
    <HeroHome />
    <AboutUs />
    <Services />
    </>
  );
}
