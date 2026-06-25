import HeroSlider from "@/components/home/HeroSlider";
import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import CausesSection from "@/components/home/CausesSection";
import SuccessStoriesSlider from "@/components/home/SuccessStoriesSlider";
import ActivitiesGrid from "@/components/home/ActivitiesGrid";
import GalleryPreview from "@/components/home/GalleryPreview";
import EventsSection from "@/components/home/EventsSection";
import DonationCTA from "@/components/home/DonationCTA";
import TestimonialsSlider from "@/components/home/TestimonialsSlider";
import PartnersCarousel from "@/components/home/PartnersCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Blind Welfare Council of Vadodara",
  description:
    "Blind Welfare Council of Vadodara empowers visually impaired individuals through education, rehabilitation, sports, and livelihood programs across Gujarat.",
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <AboutSection />
      <CausesSection />
      <SuccessStoriesSlider />
      <ActivitiesGrid />
      <GalleryPreview />
      <EventsSection />
      <DonationCTA />
      <TestimonialsSlider />
      <PartnersCarousel />
    </>
  );
}

