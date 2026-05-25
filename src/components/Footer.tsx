import { MouseEvent } from "react";
import { Flower, Phone, MapPin, Heart, Star } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#1c0208] to-[#120105] text-white pt-16 pb-8 border-t border-pink-900/40 relative overflow-hidden">
      {/* Visual accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Flower className="h-7 w-7 text-pink-500 animate-spin-slow" />
              <span className="text-lg font-cinzel font-semibold tracking-wider text-pink-100">
                HAPPY FLOWER
              </span>
            </div>
            <p className="text-xs text-gray-400 font-light leading-relaxed">
              Premium fresh and synthetic flower decorators across Bihar. Specialized in crafting royal stages, Vedic mandaps, haldi swing arrangements, and customized welcoming arches.
            </p>
            <div className="flex items-center space-x-2 text-amber-400">
              <Star className="h-4 w-4 fill-amber-400" />
              <Star className="h-4 w-4 fill-amber-400" />
              <Star className="h-4 w-4 fill-amber-400" />
              <Star className="h-4 w-4 fill-amber-400" />
              <Star className="h-4 w-4 fill-amber-400" />
              <span className="text-xs font-semibold text-gray-300 ml-1">5.0 Star Rated (100+ Weddings)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-pink-400 mb-4 font-sans">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScrollTo(e, "#home")}
                  className="hover:text-pink-400 transition-colors"
                >
                  ✓ Main Banner • होम
                </a>
              </li>
              <li>
                <a
                  href="#wedding"
                  onClick={(e) => handleScrollTo(e, "#wedding")}
                  className="hover:text-pink-400 transition-colors"
                >
                  ✓ Wedding Gallery • शादी गैलरी
                </a>
              </li>
              <li>
                <a
                  href="#haldi"
                  onClick={(e) => handleScrollTo(e, "#haldi")}
                  className="hover:text-pink-400 transition-colors"
                >
                  ✓ Haldi & Mehendi • हल्दी मेहंदी
                </a>
              </li>
              <li>
                <a
                  href="#videos"
                  onClick={(e) => handleScrollTo(e, "#videos")}
                  className="hover:text-pink-400 transition-colors"
                >
                  ✓ Videos • लाइव वीडियो
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  onClick={(e) => handleScrollTo(e, "#booking")}
                  className="hover:text-pink-400 transition-colors"
                >
                  ✓ Price Calculator • बुकिंग फॉर्म
                </a>
              </li>
              <li>
                <a
                  href="#payment"
                  onClick={(e) => handleScrollTo(e, "#payment")}
                  className="hover:text-pink-400 transition-colors"
                >
                  ✓ UPI Scanner • पेमेंट
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-bold text-pink-400 mb-4 font-sans">
              Our Floral Services
            </h4>
            <ul className="space-y-2 text-xs text-gray-300 font-serif">
              <li>• शादी सजावट (Wedding Decoration)</li>
              <li>• वरमाला स्टेज (Varmala Stage Decor)</li>
              <li>• हल्दी मंडप (Haldi Yellow Themes)</li>
              <li>• मेहंदी समारोह (Mehendi Canopies)</li>
              <li>• जन्मदिन सजावट (Birthday Balloons & Flowers)</li>
              <li>• गृह प्रवेश द्वार (Griha Pravesh Arches)</li>
              <li>• कार एवं डोली (Floral Car & Doli)</li>
            </ul>
          </div>

          {/* Col 4: Reach Us */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-pink-400 mb-3 font-sans">
              Connect With Us
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="tel:6206456215" className="hover:text-emerald-400 transition-colors">
                  +91 6206456215
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-400 shrink-0" />
                <a href="tel:9546622334" className="hover:text-amber-400 transition-colors">
                  +91 9546622334
                </a>
              </div>
              <div className="flex items-center space-x-2 pt-1">
                <MapPin className="h-4 w-4 text-pink-500 shrink-0" />
                <span>Patna, Gaya, Muzaffarpur, Bihar</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://api.whatsapp.com/send?phone=916206456215"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider rounded-md transition-colors"
              >
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Sub bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 text-[11px] text-gray-500 font-light">
          <p>© {currentYear} Happy Flower Decoration. All rights reserved.</p>
          <p className="flex items-center space-x-1 mt-3 sm:mt-0">
            <span>Made with</span>
            <Heart className="h-3 w-3 text-red-500 fill-red-500" />
            <span>for your memorable events from Bihar, India.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
