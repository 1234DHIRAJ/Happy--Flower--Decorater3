import Header from "./components/Header";
import Hero from "./components/Hero";
import WeddingGallery from "./components/WeddingGallery";
import HaldiMehendi from "./components/HaldiMehendi";
import VideoSection from "./components/VideoSection";
import BookingForm from "./components/BookingForm";
import PaymentQR from "./components/PaymentQR";
import Contact from "./components/Contact";
import FlowerRain from "./components/FlowerRain";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#fffbfe] text-gray-800 font-sans selection:bg-pink-150 selection:text-pink-850 overflow-x-hidden min-h-screen relative">
      {/* Floating dynamic flower petals layer */}
      <FlowerRain />

      {/* Navigation Top Header Option */}
      <Header />

      {/* Main Sections flow */}
      <main>
        {/* Hero Banner with background loops */}
        <Hero />

        {/* Breathtaking Wedding stage & doorway options slideshows & photo structures */}
        <WeddingGallery />

        {/* Pre-wedding Yellow marigolds and boho mehendi drapes details */}
        <HaldiMehendi />

        {/* Video showcase modal cards */}
        <VideoSection />

        {/* Interactive price calculations forms and customized booking receipts */}
        <BookingForm />

        {/* Payments QR and Bank instructions sheets */}
        <PaymentQR />

        {/* Representatives call dial numbers and Map support info */}
        <Contact />
      </main>

      {/* Floating Vibrating WhatsApp Action button */}
      <WhatsAppButton />

      {/* Custom company footer credits */}
      <Footer />
    </div>
  );
}
