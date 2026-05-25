import { useState, useEffect, MouseEvent } from "react";
import { Phone, Menu, X, Flower } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { nameEn: "Home", nameHi: "मुख्य", href: "#home" },
    { nameEn: "Wedding", nameHi: "शादी गैलरी", href: "#wedding" },
    { nameEn: "Haldi & Mehendi", nameHi: "हल्दी & मेहंदी", href: "#haldi" },
    { nameEn: "Videos", nameHi: "वीडियो", href: "#videos" },
    { nameEn: "Booking", nameHi: "बुकिंग", href: "#booking" },
    { nameEn: "Payment", nameHi: "पेमेंट", href: "#payment" },
    { nameEn: "Contact", nameHi: "संपर्क", href: "#contact" },
  ];

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-pink-100 py-3"
          : "bg-gradient-to-b from-black/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2"
            onClick={(e) => handleScrollTo(e, "#home")}
          >
            <div className="relative">
              <Flower className="h-8 w-8 text-pink-600 animate-spin-slow" />
              <div className="absolute inset-0 bg-gold-gradient rounded-full blur-sm opacity-30 animate-pulse"></div>
            </div>
            <div>
              <span className={`text-xl font-cinzel font-semibold tracking-wider block ${isScrolled ? 'text-pink-800' : 'text-white'}`}>
                HAPPY FLOWER
              </span>
              <span className="text-[10px] tracking-widest block uppercase text-amber-500 font-medium">
                Decoration Services
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-3 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex flex-col items-center ${
                  isScrolled
                    ? "text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                    : "text-white/90 hover:text-pink-300 hover:bg-white/10"
                }`}
              >
                <span>{link.nameEn}</span>
                <span className="text-[9px] -mt-0.5 opacity-60 font-normal normal-case font-serif tracking-normal">
                  {link.nameHi}
                </span>
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:6206456215"
              className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 to-amber-500 text-white font-medium text-xs tracking-wider uppercase px-4 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? "text-gray-800" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Options */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-pink-100 shadow-xl overflow-hidden py-4 px-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="py-2.5 px-4 text-sm font-semibold text-gray-800 hover:text-pink-600 hover:bg-pink-50 rounded-lg flex justify-between items-center transition-colors"
              >
                <span>{link.nameEn}</span>
                <span className="text-xs text-amber-600 font-serif font-normal">{link.nameHi}</span>
              </a>
            ))}
            <div className="pt-3 border-t border-pink-50 flex flex-col space-y-3">
              <span className="text-xs text-center text-gray-500">कॉल करने के लिए नीचे क्लिक करें</span>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:6206456215"
                  className="flex justify-center items-center space-x-1.5 py-2.5 bg-pink-50 text-pink-700 rounded-lg border border-pink-100 text-xs font-bold"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span>6206456215</span>
                </a>
                <a
                  href="tel:9546622334"
                  className="flex justify-center items-center space-x-1.5 py-2.5 bg-amber-50 text-amber-700 rounded-lg border border-amber-100 text-xs font-bold"
                >
                  <Phone className="h-4.5 w-4.5" />
                  <span>9546622334</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
