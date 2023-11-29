import AboutComponent from "@/components/AboutComponent";
import HeroComponent from "@/components/HeroComponent";
import TracksComponent from "@/components/TracksComponent";

export default function HomePage() {
  return (
    <div>
      <HeroComponent />
      <AboutComponent />
      <TracksComponent />
    </div>
  );
}
