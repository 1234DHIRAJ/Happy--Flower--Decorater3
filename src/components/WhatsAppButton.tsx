import { motion } from "motion/react";

export default function WhatsAppButton() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=919939457103&text=%F0%9F%8C%BA%20Hello%20Happy%20Flower%20Decoration%21%20I%20visited%20your%20website%20and%20want%20to%20enquire%20about%20your%20wedding%20and%20event%20decoration%20services.%20Can%20you%20please%20help%20me%3F";

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-full text-white shadow-2xl hover:bg-emerald-600 hover:scale-110 transition-transform active:scale-95 group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Pulsing halo ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-45"></span>

        {/* Brand WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-white drop-shadow-md transform group-hover:rotate-12 transition-transform"
          viewBox="0 0 24 24"
        >
          <path d="M12.004 2C6.48 2 2 6.48 2 12c.001 1.97.574 3.888 1.658 5.538L2 22l4.582-1.2C8.163 21.493 9.943 22 12.004 22 17.52 22 22 17.52 22 12S17.522 2 12.004 2zm5.72 14.288c-.245.69-1.218 1.25-1.688 1.298-.47.05-1.01.07-1.606-.12-.35-.11-.8-.28-1.396-.54-2.52-1.08-4.14-3.66-4.26-3.82-.12-.16-.96-1.28-.96-2.44s.6-1.72.812-1.97c.212-.25.46-.31.61-.31.15 0 .3 0 .43.01.14 0 .32-.05.5.38.194.46.666 1.62.722 1.74a.455.455 0 0 1 .03.42s-.164.27-.294.42c-.13.15-.27.31-.384.44a.276.276 0 0 0-.05.35c.24.41.81 1.347 1.74 2.175.7.63 1.29 1.025 1.785 1.22.18.07.35.06.48-.09.16-.18.66-.77.84-.99.18-.21.36-.18.6-.09s1.53.72 1.79.85c.26.13.43.19.49.3.06.11.06.63-.19 1.32z" />
        </svg>

        {/* Hover label tooltip info */}
        <span className="absolute right-16 scale-0 bg-gray-900 text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 origin-right whitespace-nowrap shadow-md">
          Chat With Us (9939457103)
        </span>
      </motion.a>
    </div>
  );
}
