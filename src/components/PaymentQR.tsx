import { motion } from "motion/react";
import { CreditCard, ShieldCheck, CheckCircle2, QrCode } from "lucide-react";

export default function PaymentQR() {
  const steps = [
    { en: "Scan the QR code from any UPI App (GPay, PhonePe, Paytm).", hi: "किसी भी यूपीआई ऐप (GPay, PhonePe, Paytm) से क्यूआर कोड स्कैन करें।" },
    { en: "Pay the token reservation amount (~₹5,000) to secure your date.", hi: "अपनी तारीख बुक करने के लिए टोकन एडवांस राशि (~₹5,000) का भुगतान करें।" },
    { en: "Send us a payment screenshot on WhatsApp with your Booking ID.", hi: "भुगतान का स्क्रीनशॉट अपने बुकिंग आईडी के साथ व्हाट्सएप पर भेजें।" }
  ];

  return (
    <section id="payment" className="py-24 bg-gradient-to-b from-[#fff5f6] to-white relative overflow-hidden">
      {/* Decorative floral backgrounds */}
      <div className="absolute top-1/3 left-[-50px] w-64 h-64 bg-amber-100/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-cursive text-3xl block mb-2">Secure Booking</span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-gray-900 tracking-wide mb-4">
            QR Payment Section
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-lg mx-auto">
            सुरक्षित भुगतान एवं बुकिंग अग्रिम राशि। 
            Scan to pay the advance token amount easily to verify and lock your wedding calendars.
          </p>
        </div>

        {/* QR payment content grid */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 lg:p-14 shadow-xl border border-pink-50 flex flex-col md:flex-row items-center gap-10 lg:gap-14">
          
          {/* Left Block: The QR Code Card Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full sm:w-[320px] shrink-0 bg-gradient-to-b from-amber-50 to-pink-50 p-6 rounded-2xl border-2 border-amber-300 shadow-md relative group hover-card-neon"
          >
            {/* Holographic glowing lines */}
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-pink-500 via-amber-400 to-pink-500"></div>
            
            {/* Header info inside scanner card */}
            <div className="text-center mb-4">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-amber-700 block">UPI Scan to Pay</span>
              <span className="text-[9px] text-gray-500 font-serif">हैप्पी फ्लावर डेकोरेशन</span>
            </div>

            {/* QR Image */}
            <div className="relative aspect-square bg-white rounded-xl p-4 border border-amber-100 flex items-center justify-center overflow-hidden">
              <img
                src="images/qr.jpeg"
                alt="Payment QR Code Scanner"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-lg group-hover:scale-102 transition-transform duration-500"
              />
              {/* Scan Overlay guides */}
              <div className="absolute inset-4 border-2 border-dashed border-pink-500/30 rounded-lg pointer-events-none group-hover:border-pink-500/60 transition-colors"></div>
            </div>

            {/* Merchant Info box */}
            <div className="mt-4 text-center">
              <span className="text-xs font-mono font-bold text-gray-700 block">MERCHANT: HAPPY FLOWER</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">UPI ID: 6206456215@paytm</span>
            </div>

            {/* Sparkles icon */}
            <div className="absolute -top-3 -right-3 p-2 bg-amber-400 text-white rounded-full shadow-md animate-bounce">
              <QrCode className="h-4.5 w-4.5 stroke-[2.5]" />
            </div>
          </motion.div>

          {/* Right Block: Instruction Details */}
          <div className="flex-1 space-y-6">
            <h3 className="text-xl font-serif font-bold text-gray-900 flex items-center space-x-2">
              <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0" />
              <span>भुगतान करने की विधि (How to Pay Securely)</span>
            </h3>
            
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              We offer instant dates reservation. Read the steps below to make payments securely. 
              Always call us once before sending booking advance transaction to confirm slots!
            </p>

            {/* Incremental Steps list */}
            <div className="space-y-4">
              {steps.map((st, idx) => (
                <div key={idx} className="flex">
                  <div className="mr-4 mt-0.5 w-6.5 h-6.5 rounded-full bg-pink-100 text-pink-700 font-bold text-xs flex items-center justify-center shrink-0 border border-pink-200">
                    {idx + 1}
                  </div>
                  <div>
                    <span className="text-xs sm:text-xs.5 text-gray-400 block font-bold uppercase tracking-wider">Step {idx + 1}</span>
                    <p className="text-sm font-semibold text-gray-800 leading-snug">{st.en}</p>
                    <p className="text-xs text-gray-500 font-serif leading-snug mt-1">{st.hi}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Help Alerts ribbon */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start space-x-3 text-emerald-900 text-xs leading-relaxed">
              <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Secure Payment Guaranteed:</strong> Your cash or UPI advance transfers is covered by immediate physical receipts issued at venue mappings. Screenshot verification takes under 10 minutes.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
