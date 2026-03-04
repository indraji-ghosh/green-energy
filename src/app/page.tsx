import Navbar from "@/components/home/Navbar";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import CommitmentSection from "@/components/home/CommitmentSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CommitmentSection />
      <ProjectsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
