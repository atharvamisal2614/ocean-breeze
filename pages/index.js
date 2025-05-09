import AccommodationSection from "@/Components/Accomodation";
import FamilyFacilities from "@/Components/FamilyFacilities";
import HeroSection from "@/Components/HeroSection";
import BeachIntro from "@/Components/IntroSection";
import PropertyHighlights from "@/Components/PropertyHighlights";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <BeachIntro/>
      <AccommodationSection/>
      <PropertyHighlights/>
      <FamilyFacilities/>
    </>
  );
}
