import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProductShowcase from '../components/ProductShowcase';
import BenefitsSection from '../components/BenefitsSection';
import NutritionScience from '../components/NutritionScience';
import Testimonials from '../components/Testimonials';
import Community from '../components/Community';
import BrandStory from '../components/BrandStory';
import ComparisonSection from '../components/ComparisonSection';
import StickyBuyBar from '../components/StickyBuyBar';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProductShowcase />
      <BenefitsSection />

      <ScrollReveal animation="reveal" delay={50}>
        <BrandStory />
      </ScrollReveal>

      <ScrollReveal animation="reveal" delay={100}>
        <ComparisonSection />
      </ScrollReveal>

      <ScrollReveal animation="reveal" delay={150}>
        <NutritionScience />
      </ScrollReveal>

      <ScrollReveal animation="reveal" delay={200}>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal animation="reveal" delay={300}>
        <Community />
      </ScrollReveal>

      <StickyBuyBar
        productName="SipStrong Protein Pouch"
        price="£34.99"
        image="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=400&auto=format&fit=crop"
      />
    </>
  );
}
