import { motion } from "motion/react";
import { Check, Sparkles, AlertCircle } from "lucide-react";

export default function HaldiMehendi() {
  const haldiFeatures = [
    "गेंदा फूल और पत्तियों के आकर्षक तोरण (Traditional Marigold & Mango Leaves)",
    "सुंदर और सुसज्जित पुराना झूला (Custom decorated floral swings)",
    "पानी और गुलाब पंखुड़ी के लिए पीतल का बर्तन (Traditional Brass Urli setup)",
    "क्रिएटिव सेल्फी और हल्दी फोटो बूथ (Vibrant selfie backdrops)"
  ];

  const mehendiFeatures = [
    "रंग-बिरंगे राजस्थानी छतरियां और पर्दे (Bohemian Rajasthani umbrellas and drapes)",
    "अतिथियों के लिए आरामदायक रंगीन गद्दे (Cozy cushions and seating)",
    "विशेष नववधू मेहंदी चंदोबा (Exquisite bridal seating canopy)",
    "पारंपरिक राजस्थानी मटके और दीये (Authentic earthen pots and decor elements)"
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
    <section id="haldi" className="py-24 bg-gradient-to-b from-[#fff5f6] to-[#fffcf4] relative">
      {/* Absolute floating ambient backgrounds */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-orange-200/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-600 font-cursive text-3xl block mb-2">Vibrant Festivities</span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-gray-900 tracking-wide mb-4">
            Haldi & Mehendi Decoration
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-lg mx-auto">
            हल्दी और मेहंदी के त्यौहारों को बनाएं और भी हसीन। 
            We create sun-kissed, joyous marigold yellow and bohemian multi-color setups that capture the true soul of Indian pre-wedding rituals.
          </p>
        </div>

        {/* Core Haldi vs Mehendi Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Haldi Ceremony Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-yellow-100 hover-card-neon flex flex-col justify-between"
          >
            <div>
              {/* Haldi Image Frame */}
              <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden group">
                <img
                  src="images/haldi.jpeg"
                  alt="Vibrant Haldi Decoration"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center space-x-2 text-yellow-300">
                  <Sparkles className="h-5 w-5 fill-yellow-400" />
                  <span className="font-cinzel text-lg tracking-wider font-semibold uppercase">
                    The Marigold Glow Setup
                  </span>
                </div>
              </div>

              {/* Haldi Detail Content */}
              <div className="p-6 sm:p-10">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-yellow-900">हल्दी उत्सव (Haldi Decor)</h3>
                    <p className="text-xs text-amber-600 font-medium tracking-wider uppercase mt-1">Starting from ₹15,000 onwards</p>
                  </div>
                  <span className="px-3.5 py-1.5 bg-yellow-50 text-yellow-800 border border-yellow-200 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Saffron Theme
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-8 font-light leading-relaxed">
                  Deep saffron marigold ropes cascading elegantly over customized brass urlis, creating the absolute dream picture-perfect setting for beautiful turmeric splashes.
                </p>

                {/* Features List */}
                <ul className="space-y-4">
                  {haldiFeatures.map((feat, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 p-0.5 rounded-full bg-yellow-100 text-yellow-700 mr-3 shrink-0">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 leading-normal font-medium">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Book Trigger */}
            <div className="p-6 sm:px-10 sm:pb-10 pt-4 border-t border-yellow-50 flex items-center justify-between bg-yellow-50/20">
              <span className="text-xs text-yellow-700 font-semibold flex items-center space-x-1">
                <AlertCircle className="h-4 w-4" />
                <span>Custom options available</span>
              </span>
              <button
                onClick={() => scrollId("#booking")}
                className="px-6 py-2.5 bg-yellow-600 hover:bg-yellow-700 text-white font-bold text-xs uppercase tracking-wide rounded-full shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                Book Haldi Setup
              </button>
            </div>
          </motion.div>

          {/* Mehendi Ceremony Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-pink-100 hover-card-neon flex flex-col justify-between"
          >
            <div>
              {/* Mehendi Image Frame */}
              <div className="relative aspect-16/10 sm:aspect-16/9 overflow-hidden group">
                <img
                  src="images/mehendi.jpeg"
                  alt="Vibrant Mehendi Decoration"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-6 flex items-center space-x-2 text-pink-300">
                  <Sparkles className="h-5 w-5 fill-pink-400" />
                  <span className="font-cinzel text-lg tracking-wider font-semibold uppercase">
                    The Bohemian Raga Setup
                  </span>
                </div>
              </div>

              {/* Mehendi Detail Content */}
              <div className="p-6 sm:p-10">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-pink-900">मेहंदी उत्सव (Mehendi Decor)</h3>
                    <p className="text-xs text-pink-600 font-medium tracking-wider uppercase mt-1">Starting from ₹18,000 onwards</p>
                  </div>
                  <span className="px-3.5 py-1.5 bg-pink-50 text-pink-800 border border-pink-200 text-[10px] font-bold rounded-full uppercase tracking-wider">
                    Bohemian Theme
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-8 font-light leading-relaxed">
                  A rich blend of pink, turquoise, and saffron silks, hanging designer floral umbrellas, comfortable seating setups for multi-hour mehndi sketching sessions.
                </p>

                {/* Features List */}
                <ul className="space-y-4">
                  {mehendiFeatures.map((feat, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 p-0.5 rounded-full bg-pink-100 text-pink-700 mr-3 shrink-0">
                        <Check className="h-3.5 w-3.5 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-700 leading-normal font-medium">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Book Trigger */}
            <div className="p-6 sm:px-10 sm:pb-10 pt-4 border-t border-pink-50 flex items-center justify-between bg-pink-50/20">
              <span className="text-xs text-pink-700 font-semibold flex items-center space-x-1">
                <AlertCircle className="h-4 w-4" />
                <span>Tailored to your budget</span>
              </span>
              <button
                onClick={() => scrollId("#booking")}
                className="px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs uppercase tracking-wide rounded-full shadow-md transition-all hover:scale-105 cursor-pointer"
              >
                Book Mehendi Setup
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
