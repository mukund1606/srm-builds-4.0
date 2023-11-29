import AboutComponent from "@/components/AboutComponent";
import FAQsComponent from "@/components/FAQsComponent";
import HeroComponent from "@/components/HeroComponent";
import PrizesComponent from "@/components/PrizesComponent";
import ReferComponent from "@/components/ReferComponent";
import TracksComponent from "@/components/TracksComponent";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <AboutComponent />
      <TracksComponent />
      <PrizesComponent />
      <ReferComponent />
      <FAQsComponent />
    </div>
  );
}
