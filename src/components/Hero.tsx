import { motion } from "motion/react";
import { ArrowRight, Calendar, Heart, Star } from "lucide-react";

export default function Hero() {
  const categories = [
    "शादी (Wedding)",
    "वरमाला (Varmala)",
    "हल्दी (Haldi)",
    "मेहंदी (Mehendi)",
    "मंडप (Mandap)",
    "जन्मदिन (Birthday)",
    "गृह प्रवेश (Griha Pravesh)"
  ];

  const scrollId = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.45] contrast-105"
        >
          {/* First look for the local mp4 requested by the user */}
          <source src="videos/main-bg.mp4" type="video/mp4" />
          {/* High-quality CORS-enabled live streaming fallback if not uploaded yet */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-beautiful-blooming-pink-roses-4606-large.mp4"
            type="video/mp4"
          />
        </video>
        {/* Decorative Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#110105] via-transparent to-[#110105]/60"></div>
        <div className="absolute inset-0 bg-pink-900/10 mix-blend-overlay"></div>
      </div>

      {/* Floating flower elements for deep focus */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-[25%] left-[10%] w-72 h-72 rounded-full bg-pink-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 rounded-full bg-amber-500/10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white mt-16 sm:mt-24">
        {/* Elegant top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-pink-200/30 mb-6 text-pink-300"
        >
          <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400 animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase font-sans">
            Premium Floral Decorators
          </span>
          <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400 animate-pulse" />
        </motion.div>

        {/* Cursive Romantic Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="font-cursive text-pink-300 text-4xl sm:text-5xl md:text-6xl text-center mb-1 select-none"
        >
          Happy Flower Decoration
        </motion.h2>

        {/* Main Header in Cinzel/Serif */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-7xl font-cinzel font-bold tracking-wide mt-2 mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-amber-100 to-amber-300 leading-tight"
        >
          सजाएं अपने सपनों <br />
          <span className="text-pink-300 font-serif lowercase italic tracking-normal text-2xl sm:text-4.5xl md:text-6xl font-medium block mt-1 normal-case">का हर एक खूबसूरत पल</span>
        </motion.h1>

        {/* Indian Mixed Text Showcase Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="max-w-3xl mx-auto mb-8 py-3.5 px-6 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/5 inline-flex flex-wrap gap-2.5 justify-center items-center"
        >
          {categories.map((cat, idx) => (
            <div key={idx} className="flex items-center">
              <span className="text-xs sm:text-sm font-medium tracking-wide text-amber-200">
                {cat}
              </span>
              {idx < categories.length - 1 && (
                <Heart className="h-2.5 w-2.5 text-pink-400 fill-pink-500 ml-2.5" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Elegant Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-pink-50/80 font-light tracking-wide mb-10 leading-relaxed font-sans"
        >
          We provide high-class, luxurious natural and artificial flower decorations for weddings, stages, 
          haldi-mehendi setups, birthdays, and griha pravesh events. Let us turn your venue into a floral paradise!
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button
            onClick={() => scrollId("#booking")}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-pink-600 to-amber-500 rounded-full font-bold text-xs uppercase tracking-widest text-white hover:shadow-[0_0_30px_rgba(219,112,147,0.5)] transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2.5 group cursor-pointer"
          >
            <Calendar className="h-4 w-4" />
            <span>Book Your Date</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => scrollId("#wedding")}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-pink-300/40 rounded-full font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 backdrop-blur-md flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Explore Designs</span>
          </button>
        </motion.div>
      </div>

      {/* Bounce scroll down */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce cursor-pointer opacity-80" onClick={() => scrollId("#wedding")}>
        <div className="w-6 h-10 border-2 border-pink-300/60 rounded-full flex justify-center p-1.5">
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"></div>
        </div>
      </div>
    </section>
  );
}
