import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, Plus, ArrowLeft, ArrowRight, X } from "lucide-react";

interface GalleryItem {
  id: string;
  url: string;
  titleEn: string;
  titleHi: string;
  category: "stage" | "pathway" | "mandap" | "welcome";
}

export default function WeddingGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  // Gallery Images List - ध्यान दें: public folder की इमेज के लिए सीधे "/" से शुरू करें
  const galleryItems: GalleryItem[] = [
    {
      id: "varmala-1",
      url: "/v2.jpeg", // <-- यहाँ आपकी फोटो का नाम बदल दिया है (अगर .jpg है तो /v2.jpg करें)
      titleEn: "Royal Varmala Stage Decor",
      titleHi: "शाही वरमाला स्टेज सजावट",
      category: "stage"
    },
    {
      id: "varmala-2",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      titleEn: "Romantic Walkway Pathway Arches",
      titleHi: "रोमांटिक प्रवेश मार्ग फूलों के द्वार",
      category: "pathway"
    },
    {
      id: "mandap-1",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
      titleEn: "Sanskrit Vedic Wedding Mandap",
      titleHi: "वैदिक विवाह मंडप",
      category: "mandap"
    },
    {
      id: "stage-2",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800",
      titleEn: "Luxury Jasmine Garland Backdrop",
      titleHi: "चमेली के फूलों का लग्जरी बैकड्रॉप",
      category: "stage"
    },
    {
      id: "welcome-1",
      url: "https://images.unsplash.com/photo-1545232979-8bf34eb9757b?auto=format&fit=crop&q=80&w=800",
      titleEn: "Traditional Golden Marigold Arch",
      titleHi: "पारंपरिक गेंदा फूल तोरण",
      category: "welcome"
    },
    {
      id: "mandap-2",
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      titleEn: "Classic White Lily Seating Mandap",
      titleHi: "सफेद लिली और गुलाब मंडप",
      category: "mandap"
    }
  ];

  // Auto sliding carousel items
  const spotlightSlides = [
    {
      url: "https://pixabay.com/photos/bird-blue-clouds-weather-pen-8788491/", // <-- ऊपर वाले बड़े स्लाइडर (Spotlight) में भी आपकी फोटो लगा दी है
      titleEn: "Premium Rose Custom Backdrop",
      titleHi: "प्रीमियम गुलाब स्टेज बैकड्रॉप",
      desc: "Royal seating framed by thousands of carefully curated natural roses."
    },
    {
      url: "https://images.unsplash.com/photo-1519225495846-b9dc68ecc166?auto=format&fit=crop&q=80&w=1200",
      titleEn: "Magical Pathway Arches",
      titleHi: "जादुई फूलों का प्रवेश मार्ग",
      desc: "Walk beneath cascading marigold and rose tunnels under twinkling lights."
    },
    {
      url: "https://images.unsplash.com/photo-1519225495846-b9dc68ecc166?auto=format&fit=crop&q=80&w=1200",
      titleEn: "Exquisite Destination Mandap",
      titleHi: "आलीशान डेस्टिनेशन मंडप",
      desc: "Lakeside or lawn set flower canopies tailored to absolute perfection."
    }
  ];

  // Auto-slide effect for spotlight
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % spotlightSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [spotlightSlides.length]);

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === activeFilter);

  const prevSlide = () => {
    setSlideIndex((prev) => (prev === 0 ? spotlightSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setSlideIndex((prev) => (prev + 1) % spotlightSlides.length);
  };

  const openLightbox = (imgUrl: string) => {
    const idx = galleryItems.findIndex((it) => it.url === imgUrl);
    if (idx !== -1) setLightboxIndex(idx);
  };

  return (
    <section id="wedding" className="py-24 bg-gradient-to-b from-[#fffafb] to-[#fff5f6] relative overflow-hidden">
      {/* Decorative floral backgrounds */}
      <div className="absolute top-20 left-[-50px] w-48 h-48 opacity-10 bg-no-repeat bg-contain pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=300')" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-pink-600 font-cursive text-3xl block mb-2"
          >
            Elegant Creations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-cinzel font-bold text-gray-900 tracking-wide mb-4"
          >
            Wedding Decoration Showcase
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-amber-500 mx-auto rounded-full mb-6 relative">
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-4.5 h-4.5 rounded-full bg-pink-100 border border-pink-500 flex items-center justify-center text-[8px] text-pink-600">✿</span>
          </div>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-xl mx-auto leading-relaxed">
            हमारे विशेष फूलों और शाही वरमाला व्यवस्थाओं के साथ अपनी शादी को यादगार बनाएं। 
            We design breathtaking luxury stage backgrounds, pathway galleries, and grand holy mandaps.
          </p>
        </div>

        {/* 1. Auto Sliding Spotlight Carousel */}
        <div className="relative h-[280px] sm:h-[420px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl mb-20 border border-pink-100/50">
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img
                src={spotlightSlides[slideIndex].url}
                alt={spotlightSlides[slideIndex].titleEn}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              
              {/* Slide text details */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 md:p-14 text-white">
                <span className="text-amber-400 text-xs sm:text-sm font-semibold tracking-widest uppercase block mb-1">
                  Spotlight Gallery • मुख्य सजावट
                </span>
                <h3 className="font-serif text-2xl sm:text-4xl font-semibold mb-2 text-pink-100">
                  {spotlightSlides[slideIndex].titleEn}
                </h3>
                <h4 className="font-serif text-lg sm:text-xl text-amber-100/90 mb-4 font-normal">
                  {spotlightSlides[slideIndex].titleHi}
                </h4>
                <p className="text-xs sm:text-sm text-gray-200/90 max-w-lg font-light leading-relaxed hidden sm:block">
                  {spotlightSlides[slideIndex].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Arrow Controllers */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/40 hover:bg-pink-600/70 text-white rounded-full transition-all hover:scale-110 z-20 cursor-pointer"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 bg-black/40 hover:bg-pink-600/70 text-white rounded-full transition-all hover:scale-110 z-20 cursor-pointer"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Indicator dots */}
          <div className="absolute bottom-4 right-10 flex space-x-2 z-20">
            {spotlightSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === slideIndex ? "bg-amber-400 w-6" : "bg-white/40"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* 2. Categorized Grid Gallery */}
        <div className="mb-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-12">
            {[
              { id: "all", label: "All Decor", labelHi: "सब कुछ" },
              { id: "stage", label: "Stage & Backdrop", labelHi: "स्टेज" },
              { id: "pathway", label: "Pathway & Arches", labelHi: "प्रवेश द्वार" },
              { id: "mandap", label: "Mandap Designs", labelHi: "मंडप" },
              { id: "welcome", label: "Welcome Themes", labelHi: "अतिथि स्वागत" }
            ].map((filt) => (
              <button
                key={filt.id}
                onClick={() => setActiveFilter(filt.id)}
                className={`px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden flex items-center space-x-1.5 cursor-pointer ${
                  activeFilter === filt.id
                    ? "bg-gradient-to-r from-pink-600 to-amber-500 text-white shadow-md scale-105"
                    : "bg-white hover:bg-pink-50 text-gray-700 border border-pink-100"
                }`}
              >
                <span>{filt.label}</span>
                <span className="opacity-60 text-[9px] font-normal normal-case font-serif tracking-normal">
                  ({filt.labelHi})
                </span>
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover-card-neon border border-pink-50"
                >
                  {/* Aspect ratio bounding box */}
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.titleEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
                    />
                    
                    {/* Dark gradient when hovering */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-950/90 via-pink-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Magnify lens action on hover */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <button
                        onClick={() => openLightbox(item.url)}
                        className="p-2.5 rounded-full bg-white/90 hover:bg-pink-600 hover:text-white text-pink-700 shadow-md translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                        title="Zoom Image"
                      >
                        <Maximize2 className="h-4.5 w-4.5" />
                      </button>
                    </div>

                    {/* Quick booking link inside card */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                      <a
                        href="#booking"
                        className="px-5 py-2 bg-gradient-to-r from-pink-600 to-amber-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:shadow-lg hover:scale-105 transition-all flex items-center space-x-1.5"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Book Similar</span>
                      </a>
                    </div>
                  </div>

                  {/* Card bottom text area */}
                  <div className="p-5 border-t border-pink-50">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-pink-500 block mb-1">
                      {item.category} Premium
                    </span>
                    <h4 className="font-serif text-lg font-bold text-gray-800 leading-tight group-hover:text-pink-700 transition-colors">
                      {item.titleEn}
                    </h4>
                    <p className="font-serif text-sm text-amber-700 font-medium mt-1">
                      {item.titleHi}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* 3. Lightbox popup component */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-pink-600 text-white transition-all cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev! === 0 ? galleryItems.length - 1 : prev! - 1))
              }
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-pink-600 text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-full max-h-[70vh] object-contain rounded-xl border border-white/10"
                src={galleryItems[lightboxIndex].url}
                alt={galleryItems[lightboxIndex].titleEn}
                referrerPolicy="no-referrer"
              />
              <div className="mt-4 text-center">
                <h4 className="text-xl font-serif text-pink-100 font-bold">
                  {galleryItems[lightboxIndex].titleEn}
                </h4>
                <p className="text-base font-serif text-amber-300">
                  {galleryItems[lightboxIndex].titleHi}
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                setLightboxIndex((prev) => (prev! + 1) % galleryItems.length)
              }
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-pink-600 text-white transition-all cursor-pointer"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
