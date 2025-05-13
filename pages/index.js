import AccommodationSection from "@/Components/Accomodation";
import FamilyFacilities from "@/Components/FamilyFacilities";
import HeroSection from "@/Components/HeroSection";
import BeachIntro from "@/Components/IntroSection";
import NearbyAttractions from "@/Components/NearBy";
import PropertyHighlights from "@/Components/PropertyHighlights";
import ResortInfo from "@/Components/RestoInfo";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <BeachIntro/>
      <AccommodationSection/>
      <PropertyHighlights/>
      <FamilyFacilities/>
      <NearbyAttractions/>
      <ResortInfo/>
    </>
  );
}
