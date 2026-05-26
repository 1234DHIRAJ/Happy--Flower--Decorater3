import { useState } from "react";
import { motion } from "motion/react";
import { Phone, MapPin, Clock, Send, MessageSquare, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const copyToClipboard = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-[#fffafb] relative overflow-hidden">
      {/* Decorative leaf backgrounds */}
      <div className="absolute top-1/4 right-[-80px] w-64 h-64 bg-pink-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-cursive text-3xl block mb-2">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-gray-900 tracking-wide mb-4">
            Contact Decoration Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-lg mx-auto">
            हमसे संपर्क करें और अपना स्लॉट बुक करें। 
            Speak directly with our chief decorators to map venue dimensions and customize budgets.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Contact Hotline Cards (Lg: 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-gray-900 leading-tight">
              शादी, वरमाला, हल्दी, मेहंदी, मंडप, जन्मदिन, गृह प्रवेश आदि।
            </h3>
            <p className="text-sm text-gray-650 font-light leading-relaxed">
              We design premium floral environments for every auspicious ceremony. Call us anywhere, anytime!
            </p>

            <div className="grid grid-cols-1 gap-4">
              
              {/* Phone Card 1 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-5 bg-gradient-to-r from-[#fffbfd] to-pink-50/40 rounded-2xl border border-pink-100/70 shadow-xs flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-pink-100 text-pink-700 rounded-xl">
                    <Phone className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-pink-600 font-bold uppercase tracking-wider block">First Representative</span>
                    <a href="tel:6206456215" className="text-lg font-bold text-gray-850 hover:text-pink-600 transition-colors block mt-0.5">
                      6206456215
                    </a>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href="tel:6206456215"
                    className="p-2.5 rounded-full bg-pink-600 hover:bg-pink-700 text-white shadow-xs transition-transform hover:scale-110"
                    title="Call Now"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => copyToClipboard("6206456215")}
                    className="p-2.5 rounded-full bg-white hover:bg-pink-50 text-gray-700 border border-pink-100 shadow-xs transition-transform hover:scale-110 cursor-pointer"
                    title="Copy Number"
                  >
                    {copiedNumber === "6206456215" ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </motion.div>

              {/* Phone Card 2 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-5 bg-gradient-to-r from-[#fffdfa] to-amber-50/40 rounded-2xl border border-amber-100/75 shadow-xs flex items-center justify-between"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-amber-100 text-amber-700 rounded-xl">
                    <Phone className="h-6 w-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider block">Second Representative</span>
                    <a href="tel:9546622334" className="text-lg font-bold text-gray-850 hover:text-amber-600 transition-colors block mt-0.5">
                      9546622334
                    </a>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a
                    href="tel:9546622334"
                    className="p-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-xs transition-transform hover:scale-110"
                    title="Call Now"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => copyToClipboard("9546622334")}
                    className="p-2.5 rounded-full bg-white hover:bg-amber-50 text-gray-700 border border-amber-100 shadow-xs transition-transform hover:scale-110 cursor-pointer"
                    title="Copy Number"
                  >
                    {copiedNumber === "9546622334" ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
              </motion.div>

            </div>

            {/* Supplementary Details */}
            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-3xs space-y-4">
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-pink-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-800">Our Service Region</h4>
                  <p className="text-gray-500 mt-0.5 font-light">Patna, Muzaffarpur, Gaya, Darbhanga, Bihar & neighboring cities.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-sm">
                <Clock className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-800">Response / Operations Time</h4>
                  <p className="text-gray-500 mt-0.5 font-light">Available 24/7 during festive and vivah muhurats.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic Contact Feedback Form (Lg: 7 columns) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-pink-50 shadow-lg relative">
            <div className="absolute top-0 right-10 bg-pink-100 text-pink-800 rounded-b-xl px-4 py-1 text-[10px] font-mono font-bold tracking-wider uppercase">
              Quick Query • सवाल पूछे
            </div>

            <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-pink-600" />
              <span>Send Quick Message / संदेश भेजें</span>
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("हम आपके संदेश का उत्तर शीघ्र ही देंगे। Thank you!");
                (e.target as HTMLFormElement).reset();
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="अपना नाम लिखें"
                    className="w-full px-4 py-2.5 rounded-xl border border-pink-100 focus:outline-none focus:border-pink-500 bg-pink-50/10 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="फोन नंबर"
                    className="w-full px-4 py-2.5 rounded-xl border border-pink-100 focus:outline-none focus:border-pink-500 bg-pink-50/10 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-1.5">Ceremony Type</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-pink-100 focus:outline-none focus:border-pink-500 bg-pink-50/10 text-sm">
                  <option>शादी सजावट (Complete Wedding Setup)</option>
                  <option>वरमाला सजावट (Varmala Stage)</option>
                  <option>हल्दी मेहंदी उत्सव (Haldi Mehendi Decor)</option>
                  <option>जन्मदिन / बर्थडे पार्टी (Birthday Decor)</option>
                  <option>गृह प्रवेश सजावट (Griha Pravesh setup)</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase text-gray-500 tracking-wider mb-1.5">Message / प्रश्न</label>
                <textarea
                  rows={4}
                  required
                  placeholder="कृपया अपना सवाल और पता लिखें (e.g., We need red flower stage for 10th June)"
                  className="w-full px-4 py-2.5 rounded-xl border border-pink-100 focus:outline-none focus:border-pink-500 bg-pink-50/10 text-sm"
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-pink-600 to-amber-500 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:shadow-md hover:scale-103 transition-all inline-flex items-center space-x-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
