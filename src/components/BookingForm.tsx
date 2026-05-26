import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Calendar, CheckSquare, Sparkles, MapPin, ClipboardList, RefreshCw, SendToBack } from "lucide-react";

interface ServiceOption {
  id: string;
  nameEn: string;
  nameHi: string;
  basePrice: number;
}

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [flowerType, setFlowerType] = useState<"natural" | "artificial" | "mixed">("mixed");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customRequest, setCustomRequest] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [receiptNumber, setReceiptNumber] = useState("");

  const services: ServiceOption[] = [
    { id: "wedding", nameEn: "Complete Wedding Setup", nameHi: "संपूर्ण विवाह सजावट", basePrice: 45000 },
    { id: "varmala", nameEn: "Royal Varmala Stage", nameHi: "शाही वरमाला मंच", basePrice: 25000 },
    { id: "haldi", nameEn: "Vibrant Haldi Setup", nameHi: "हल्दी स्टेज सजावट", basePrice: 10000 },
    { id: "mehendi", nameEn: "Boho Mehendi Theme", nameHi: "मेहंदी थीम डेकॉर", basePrice: 10000 },
    { id: "mandap", nameEn: "Vedic Mandap Backdrop", nameHi: "वैदिक मंडप सजावट", basePrice: 25000 },
    { id: "birthday", nameEn: "Grand Birthday / Canopy", nameHi: "जन्मदिन बैलून-फ्लावर डेकॉर", basePrice: 8000 },
    { id: "grihapravesh", nameEn: "Griha Pravesh Entrances", nameHi: "गृह प्रवेश द्वार तोरण", basePrice: 10000 }
  ];

  const handleServiceToggle = (id: string) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter((s) => s !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const calculateEstimate = () => {
    let baseSum = services
      .filter((s) => selectedServices.includes(s.id))
      .reduce((sum, item) => sum + item.basePrice, 0);

    if (baseSum === 0) return 0;

    // Apply factor for flower selections
    if (flowerType === "natural") {
      baseSum *= 1.45; // Natural flowers are 45% costlier
    } else if (flowerType === "mixed") {
      baseSum *= 1.15; // Mixed premium setup
    }
    return Math.round(baseSum);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !eventDate || selectedServices.length === 0) {
      alert("कृपया आवश्यक फ़ील्ड भरें (Name, Phone, Date, and Select at least 1 Service)");
      return;
    }
    
    // Generate a beautiful mock booking reference receipt id
    const randomReceipt = "HFD-" + Math.floor(100000 + Math.random() * 900000);
    setReceiptNumber(randomReceipt);
    setIsSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const selectedLabels = services
      .filter((s) => selectedServices.includes(s.id))
      .map((s) => `• ${s.nameEn} (${s.nameHi})`)
      .join("\n");
    
    const flowerText = 
      flowerType === "natural" ? "Natural (ताज़े फूल)" :
      flowerType === "artificial" ? "Artificial (कृत्रिम फूल)" : "Mixed (मिश्रित)";

    const msg = `🌺 *NEW DECORATION BOOKING ENQUIRY* 🌺
------------------------------------------------
🧾 *Booking ID:* ${receiptNumber}
👤 *Client Name:* ${name}
📞 *Mobile:* ${phone}
📅 *Event Date:* ${eventDate}
📍 *Location:* ${location || "Not Specified"}
🌸 *Flower Preference:* ${flowerText}
💐 *Services Selected:*
${selectedLabels}

💰 *Tentative Cost:* ₹${calculateEstimate().toLocaleString("en-IN")}
✍️ *Custom Request:* ${customRequest || "None"}

------------------------------------------------
_Sent from Happy Flower Decoration Website_`;

    return `https://api.whatsapp.com/send?phone=919939457103&text=${encodeURIComponent(msg)}`;
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setEventDate("");
    setLocation("");
    setFlowerType("mixed");
    setSelectedServices([]);
    setCustomRequest("");
    setIsSubmitted(false);
  };

  return (
    <section id="booking" className="py-24 bg-white relative overflow-hidden">
      {/* Golden decorative ornaments background */}
      <div className="absolute top-10 right-[-80px] w-56 h-56 rounded-full border-4 border-dashed border-amber-200/40 pointer-events-none"></div>
      <div className="absolute bottom-10 left-[-80px] w-72 h-72 rounded-full border-4 border-dashed border-pink-200/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-cursive text-3xl block mb-2">Reserve Magic</span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-gray-900 tracking-wide mb-4">
            Easy Booking Information
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-lg mx-auto">
            झटपट कोटेशन और बुकिंग जानकारी। 
            Select your desired services, select flower type preferences, and calculate an instant estimated price receipt.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-gradient-to-b from-white to-pink-50/20 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-pink-100"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Step 1: Customer Details */}
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-pink-700 uppercase flex items-center mb-6">
                      <span className="mr-2 flex items-center justify-center w-5 h-5 bg-pink-100 rounded-full text-xs text-pink-700">1</span>
                      Client Details / ग्राहक का विवरण
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-700 tracking-wider mb-2">
                          Your Full Name <span className="text-pink-600">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="अपना नाम लिखें (e.g. Suresh Kumar)"
                          className="w-full px-4.5 py-3 rounded-xl border border-pink-100 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 bg-white shadow-xs transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-700 tracking-wider mb-2">
                          Your Mobile Phone <span className="text-pink-600">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="मोबाइल नंबर (e.g. 9939457103)"
                          className="w-full px-4.5 py-3 rounded-xl border border-pink-100 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 bg-white shadow-xs transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-700 tracking-wider mb-2">
                          Event Date <span className="text-pink-600">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            required
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            className="w-full px-4.5 py-3 rounded-xl border border-pink-100 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 bg-white shadow-xs transition-colors text-gray-800"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase text-gray-700 tracking-wider mb-2">
                          Event Location/Venue
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="सजावट का पता (e.g. Town Hall, Patna)"
                            className="w-full px-4.5 py-3 rounded-xl border border-pink-100 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 bg-white shadow-xs transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Decor Service Selection */}
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-pink-700 uppercase flex items-center mb-6">
                      <span className="mr-2 flex items-center justify-center w-5 h-5 bg-pink-100 rounded-full text-xs text-pink-700">2</span>
                      Select Sajiye Options / सजावट चुने <span className="text-pink-500 ml-1">(At least 1)</span>
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((item) => {
                        const isChecked = selectedServices.includes(item.id);
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleServiceToggle(item.id)}
                            className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between select-none ${
                              isChecked
                                ? "bg-pink-50/75 border-pink-400 shadow-sm"
                                : "bg-white border-gray-100 hover:border-pink-200"
                            }`}
                          >
                            <div className="flex items-center space-x-3.5">
                              <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-all ${
                                isChecked ? "bg-pink-600 border-pink-600 text-white" : "border-gray-300"
                              }`}>
                                {isChecked && <span className="text-[10px] font-bold">✓</span>}
                              </div>
                              <div>
                                <span className="font-semibold text-sm text-gray-800 block leading-tight">{item.nameEn}</span>
                                <span className="text-xs text-gray-500 font-serif block mt-0.5">{item.nameHi}</span>
                              </div>
                            </div>
                            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded">
                              Est. ₹{item.basePrice.toLocaleString()}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 3: Flower Type */}
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-pink-700 uppercase flex items-center mb-6">
                      <span className="mr-2 flex items-center justify-center w-5 h-5 bg-pink-100 rounded-full text-xs text-pink-700">3</span>
                      Flower Quality Preference / फूलों की गुणवत्ता
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        { id: "natural", label: "Pure Fresh/Natural Flowers", desc: "ताज़े असली फूल (+45% premium)", icon: "🌹" },
                        { id: "artificial", label: "Artificial Flowers Only", desc: "आर्टिफिशियल नकली फूल (Regular cost)", icon: "🌸" },
                        { id: "mixed", label: "Mixed Arrangement Setup", desc: "असली और नकली मिश्रित (+15% look)", icon: "💐" }
                      ].map((t) => (
                        <div
                          key={t.id}
                          onClick={() => setFlowerType(t.id as "natural" | "artificial" | "mixed")}
                          className={`p-4 rounded-xl border text-center cursor-pointer transition-all ${
                            flowerType === t.id
                              ? "bg-pink-50 border-pink-400 ring-2 ring-pink-100"
                              : "bg-white border-gray-100 hover:border-pink-200"
                          }`}
                        >
                          <span className="text-2xl block mb-2">{t.icon}</span>
                          <span className="font-bold text-sm text-gray-800 block leading-tight">{t.label}</span>
                          <span className="text-xs text-gray-500 block mt-1 leading-normal font-sans font-medium">{t.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Special Request */}
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 tracking-wider mb-2">
                      Custom Request & Address details / अतिरिक्त जानकारी एवं पता
                    </label>
                    <textarea
                      rows={3}
                      value={customRequest}
                      onChange={(e) => setCustomRequest(e.target.value)}
                      placeholder="वरमाला का रंग, मंडप का साइज, थीम कलर या कोई अन्य विशेष अनुरोध (e.g. Red Rose Varmala, Pink background canopy)"
                      className="w-full px-4.5 py-3 rounded-xl border border-pink-100 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100 bg-white shadow-xs transition-colors"
                    ></textarea>
                  </div>

                  {/* Estimation Price Ribbon */}
                  {selectedServices.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-5 sm:p-6 bg-gradient-to-r from-pink-50 to-amber-50/50 rounded-2xl border border-pink-100/70 shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left"
                    >
                      <div>
                        <span className="text-[10px] font-bold text-pink-600 uppercase tracking-widest block">Estimated Budget Receipt / अनुमानित लागत</span>
                        <span className="text-xs text-gray-500 font-light mt-0.5 block leading-tight">Tax included. Final quotation after venue measurements.</span>
                      </div>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-sm font-bold text-gray-500">₹</span>
                        <span className="text-3xl sm:text-4xl font-extrabold text-pink-700 leading-none">
                          {calculateEstimate().toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs text-pink-600 font-bold uppercase tracking-wider ml-1">Est.</span>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      className="px-10 py-4 bg-gradient-to-r from-pink-600 to-amber-500 hover:shadow-[0_0_20px_rgba(219,112,147,0.4)] text-white text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <ClipboardList className="h-4 w-4" />
                      <span>Request Estimated Receipt</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            ) : (
              // SUBMITTED RECEIPT COMPONENT
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-xl mx-auto bg-gradient-to-b from-[#fffbfc] to-[#fff5f6] border-4 border-double border-pink-200 rounded-3xl p-6 sm:p-10 shadow-2xl relative"
              >
                {/* Visual flower details inside card */}
                <div className="absolute top-4 left-4 text-pink-200">❀</div>
                <div className="absolute top-4 right-4 text-pink-200">❀</div>
                <div className="absolute bottom-4 left-4 text-pink-200">❀</div>
                <div className="absolute bottom-4 right-4 text-pink-200">❀</div>

                <div className="text-center border-b-2 border-dashed border-pink-100 pb-6 mb-6">
                  <div className="inline-flex p-3 rounded-full bg-pink-100 text-pink-600 mb-3 animate-pulse">
                    <Sparkles className="h-6 w-6 fill-pink-300" />
                  </div>
                  <h3 className="font-cinzel text-xl font-bold text-pink-900 tracking-wide">
                    HAPPY FLOWER DECORATION
                  </h3>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-medium mt-1">
                    Booking Quotation Receipt
                  </span>
                  <div className="mt-2.5 inline-block bg-pink-50 text-pink-700 px-3.5 py-1 rounded-md text-xs font-mono font-bold border border-pink-100">
                    ID: {receiptNumber}
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Client Details list */}
                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-2 text-xs sm:text-sm border-b border-pink-50 pb-5">
                    <div>
                      <span className="text-gray-400 block text-[10px] font-bold uppercase tracking-wider">Client Name</span>
                      <strong className="text-gray-800">{name}</strong>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] font-bold uppercase tracking-wider">Event Date</span>
                      <strong className="text-gray-800">{eventDate}</strong>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] font-bold uppercase tracking-wider">Contact Number</span>
                      <strong className="text-gray-800">{phone}</strong>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px] font-bold uppercase tracking-wider">Location / Venue</span>
                      <strong className="text-gray-800">{location || "Not Specified"}</strong>
                    </div>
                  </div>

                  {/* Flower Quality preference representation */}
                  <div className="py-2 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-gray-500">Flower Quality Selected:</span>
                    <span className="font-bold text-pink-700 bg-pink-50 px-3 py-1 rounded border border-pink-100">
                      {flowerType === "natural" && "🌹 Natural (100% Fresh)"}
                      {flowerType === "artificial" && "🌸 Artificial (Synthetic)"}
                      {flowerType === "mixed" && "💐 Mixed Floral Setup"}
                    </span>
                  </div>

                  {/* Chosen services summary */}
                  <div className="bg-white/80 rounded-xl p-4 border border-pink-50 shadow-2xs">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Services Selected</span>
                    <ul className="space-y-2">
                      {services
                        .filter((s) => selectedServices.includes(s.id))
                        .map((s) => (
                          <li key={s.id} className="flex justify-between items-center text-xs sm:text-sm">
                            <span className="text-gray-700">✓ {s.nameEn} <span className="text-gray-400 text-[10px] font-serif">({s.nameHi})</span></span>
                            <span className="font-semibold text-gray-600">₹{s.basePrice.toLocaleString()}</span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* Total calculation indicator */}
                  <div className="py-4 border-t-2 border-pink-100 border-dashed flex justify-between items-center">
                    <div>
                      <span className="text-xs text-gray-600 block">Total Estimated Cost</span>
                      <span className="text-[9px] text-pink-500 block">Negotiable based on customizations</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-extrabold text-pink-700">
                        ₹{calculateEstimate().toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>

                  {/* Special Requests disclaimer */}
                  {customRequest && (
                    <div className="bg-amber-50/40 rounded-xl p-4 border border-amber-100 text-xs text-amber-900 leading-normal">
                      <span className="block font-bold mb-1">📝 Your Custom Request:</span>
                      {customRequest}
                    </div>
                  )}

                  {/* Action row with Whatsapp button */}
                  <div className="pt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={resetForm}
                      className="flex-1 py-3 px-4 bg-white hover:bg-pink-50 text-pink-700 border border-pink-200 text-xs font-bold uppercase tracking-wide rounded-full transition-all flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <RefreshCw className="h-4 w-4" />
                      <span>Book Another</span>
                    </button>

                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-2 py-3.5 px-6 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:shadow-lg hover:scale-102 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <svg className="h-5 w-5 fill-white" viewBox="0 0 24 24">
                        <path d="M12.004 2C6.48 2 2 6.48 2 12c.001 1.97.574 3.888 1.658 5.538L2 22l4.582-1.2C8.163 21.493 9.943 22 12.004 22 17.52 22 22 17.52 22 12S17.522 2 12.004 2zm5.72 14.288c-.245.69-1.218 1.25-1.688 1.298-.47.05-1.01.07-1.606-.12-.35-.11-.8-.28-1.396-.54-2.52-1.08-4.14-3.66-4.26-3.82-.12-.16-.96-1.28-.96-2.44s.6-1.72.812-1.97c.212-.25.46-.31.61-.31.15 0 .3 0 .43.01.14 0 .32-.05.5.38.194.46.666 1.62.722 1.74a.455.455 0 0 1 .03.42s-.164.27-.294.42c-.13.15-.27.31-.384.44a.276.276 0 0 0-.05.35c.24.41.81 1.347 1.74 2.175.7.63 1.29 1.025 1.785 1.22.18.07.35.06.48-.09.16-.18.66-.77.84-.99.18-.21.36-.18.6-.09s1.53.72 1.79.85c.26.13.43.19.49.3.06.11.06.63-.19 1.32z" />
                      </svg>
                      <span>Send booking via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
