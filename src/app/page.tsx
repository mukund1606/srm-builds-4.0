import AboutComponent from "@/components/AboutComponent";
import CarouselComponent from "@/components/CarouselComponent";
import FAQsComponent from "@/components/FAQsComponent";
import Footer from "@/components/Footer";
import HeroComponent from "@/components/HeroComponent";
import MapComponent from "@/components/MapComponent";
import PrizesComponent from "@/components/PrizesComponent";
// import ReferComponent from "@/components/ReferComponent";
import ScheduleComponent from "@/components/ScheduleComponent";
import TracksComponent from "@/components/TracksComponent";

export default function HomePage() {
  const images = [
    "/event/1.jpeg",
    "/event/2.jpeg",
    "/event/3.jpeg",
    "/event/4.jpeg",
    "/event/5.jpeg",
    "/event/6.jpeg",
    "/event/7.jpeg",
    "/event/8.jpeg",
    "/event/9.jpeg",
    "/event/10.jpeg",
  ];

  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <ScheduleComponent />
      <TracksComponent />
      <PrizesComponent />
      {/* <ReferComponent /> */}
      <FAQsComponent />
      <CarouselComponent images={images} />
      <MapComponent />
      <Footer />
    </>
  );
}
