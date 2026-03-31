import { UrgencyBanner } from "@/components/landing/urgency-banner";
import { Hero } from "@/components/landing/hero";
import { LookInside } from "@/components/landing/look-inside";
import { CourseContent } from "@/components/landing/course-content";
import { Testimonios } from "@/components/landing/testimonios";
import { Bonus } from "@/components/landing/bonus";
import { Offer } from "@/components/landing/offer";
import { Faq } from "@/components/landing/faq";
import { StickyCta } from "@/components/landing/sticky-cta";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen pt-14">
      <UrgencyBanner />
      <Hero />
      <CourseContent />
      <LookInside />
      <Bonus />
      <Testimonios />
      <Offer />
      <Faq />
      <Footer />
      <StickyCta />
    </main>
  );
}
