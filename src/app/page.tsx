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
    "/event/1.jpg",
    "/event/2.jpg",
    "/event/3.jpg",
    "/event/4.jpg",
    "/event/5.jpg",
    "/event/6.jpg",
    "/event/7.jpg",
    "/event/8.jpg",
    "/event/9.jpg",
    "/event/10.jpg",
    "/event/11.jpg",
    "/event/12.jpg",
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
