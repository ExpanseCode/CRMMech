import BenefitsSection from "../../components/Landing/BenefitsSection/BenefitsSection.jsx";
import CTASection from "../../components/Landing/CTASection/CTASection.jsx";
import FAQSection from "../../components/Landing/FAQSection/FAQSection.jsx";
import FeaturesSection from "../../components/Landing/FeaturesSection/FeaturesSection.jsx";
import Footer from "../../components/Landing/Footer/Footer.jsx";
import Header from "../../components/Landing/Header/Header.jsx";
import HeroSection from "../../components/Landing/HeroSection/HeroSection.jsx";
import HowItWorksSection from "../../components/Landing/HowItWorksSection/HowItWorksSection.jsx";
import MobAppSection from "../../components/Landing/MobAppSection/MobAppSection.jsx";
import PricingSection from "../../components/Landing/PricingSection/PricingSection.jsx";
import ProblemsSection from "../../components/Landing/ProblemsSection/ProblemsSection.jsx";
import TestimonialsSection from "../../components/Landing/TestimonialsSection/TestimonialsSection.jsx";
import WhoItsForSection from "../../components/Landing/WhoItsForSection/WhoItsForSection.jsx";

export default function LandingPage() {
    return (
      <div>
        <Header />
        {/* 1. Увага та інтерес */}
        <HeroSection />

        {/* 1.5. Ключові переваги */}
        <BenefitsSection />

        {/* 2. Проблема (болі клієнта) */}
        <ProblemsSection />

        {/* 3. Рішення від CRMmech */}
        <FeaturesSection />
        <MobAppSection />
        <HowItWorksSection />

        {/* 4. Переваги та цільова аудиторія */}
        <WhoItsForSection />

        {/* 5. Соціальний доказ (відгуки) */}
        <TestimonialsSection />

        {/* 6. Тарифи та пропозиція */}
        <PricingSection />

        {/* 7. Усунення заперечень */}
        <FAQSection />

        {/* 8. Заклик до дії */}
        <CTASection />

        <Footer />
        {/* <MobileCTA /> */}
      </div>
    );
};
