import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import CtaBanner from '../components/common/CtaBanner';
import FeatureRow1 from '../components/home/FeatureRow1';
import FeatureRow2 from '../components/home/FeatureRow2';
import GalleryGrid from '../components/home/GalleryGrid';
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Hero />
      <ServicesSection />
      <CtaBanner />
      <FeatureRow1 />
      <FeatureRow2 />
      <GalleryGrid />
      <Footer />
    </div>
  );
}
