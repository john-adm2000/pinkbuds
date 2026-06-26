
import Navbar from "@/components/layout/Navbar";
import PremiumProducts from "@/components/home/PremiumProducts";
import Hero from "@/components/home/Hero";
import FeatureBar from "@/components/home/FeatureBar";
import Occasions from "@/components/home/Occasions";
import FeaturedProducts from "@/components/home/FeaturedProducts";

import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Navbar />
      <Hero />
      <FeatureBar />
      <Occasions />
      <PremiumProducts />
      <Footer />
    </main>
  );
}