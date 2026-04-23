import Image from "next/image";
import HeroHome from "@/components/sections/HeroHome";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Preference from "@/components/sections/Preference";
import Plans from "@/components/sections/Plans";
import FinalCall from "@/components/sections/FinalCall";

export default function Home() {
  return (
    <>
    <HeroHome />
    <AboutUs />
    <Services />
    <Preference />
    <Plans />
    <FinalCall />
    </>
  );
}
