import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Film, X, Star } from "lucide-react";

interface VideoItem {
  id: string;
  localPath: string;
  fallbackUrl: string;
  thumbnail: string;
  titleEn: string;
  titleHi: string;
  duration: string;
  tags: string[];
}

export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: "vid-1",
      localPath: http://localhost:5173/public/Videos/fourth%20video.mp4,
      fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-indian-wedding-ceremony-during-daytime-41584-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1510076891965-ee90e82f42a7?auto=format&fit=crop&q=80&w=600",
      titleEn: "Breathtaking Varmala Live Decor",
      titleHi: "वरमाला और स्टेज फूलों की लाइव सजावट",
      duration: "0:45",
      tags: ["Varmala", "Live Setup"]
    },
    {
      id: "vid-2",
      localPath: "videos/second-video.mp4",
      fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-an-indian-bride-with-henna-mehendi-41588-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
      titleEn: "Boho Shahi Mehendi Ceremony Elements",
      titleHi: "मेहंदी रस्म की शाही और रंगीन सजावट",
      duration: "1:05",
      tags: ["Mehendi", "Traditional"]
    },
    {
      id: "vid-3",
      localPath: "videos/third-video.mp4",
      fallbackUrl: "https://assets.mixkit.co/videos/preview/mixkit-flowers-decorating-a-wedding-car-41579-large.mp4",
      thumbnail: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=600",
      titleEn: "Doli & Floral Car Decor",
      titleHi: "डोली एवं शादी कार फ्लावर डेकोरेशन",
      duration: "0:30",
      tags: ["Car Decor", "Doli Setup"]
    }
  ];

  return (
    <section id="videos" className="py-24 bg-gradient-to-b from-[#fffcf4] to-[#fff5f6] relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-[-100px] w-96 h-96 bg-pink-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-pink-600 font-cursive text-3xl block mb-2">Cinematic Vows</span>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-gray-900 tracking-wide mb-4 animate-pulse">
            Video Showcase Section
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 font-light max-w-lg mx-auto">
            हमारी सजी हुई शादियों का वीडियो रूप देखें। 
            Watch our design structures come alive under real-time lighting and atmosphere. See the quality of our fresh flower arrangements.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((vid) => (
            <motion.div
              key={vid.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-pink-50 hover-card-neon flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedVideo(vid)}
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video overflow-hidden group">
                <img
                  src={vid.thumbnail}
                  alt={vid.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Floating Tags */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  {vid.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-black/55 text-white text-[9px] font-bold uppercase rounded-md backdrop-blur-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Video duration marker */}
                <span className="absolute bottom-4 right-4 px-2 py-0.5 bg-black/70 text-white text-[10px] font-mono rounded">
                  {vid.duration}
                </span>

                {/* Center Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-14 h-14 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-115">
                    <div className="absolute inset-0 rounded-full bg-pink-500 animate-ping opacity-45"></div>
                    <Play className="h-6 w-6 stroke-[3] fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="p-6">
                <div className="flex items-center space-x-1.5 text-amber-500 mb-2">
                  <Star className="h-3.5 w-3.5 fill-amber-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Happy Clip Showcase</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-gray-800 leading-snug hover:text-pink-600 transition-colors">
                  {vid.titleEn}
                </h4>
                <p className="font-serif text-sm text-gray-500 mt-1 font-medium italic">
                  {vid.titleHi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Lightbox Play Area Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-pink-600 text-white transition-all cursor-pointer z-51"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/15"
            >
              <video
                autoPlay
                controls
                playsInline
                className="w-full h-full object-cover"
              >
                {/* Try local URL first */}
                <source src={selectedVideo.localPath} type="video/mp4" />
                {/* Fallback to online CDN loop */}
                <source src={selectedVideo.fallbackUrl} type="video/mp4" />
              </video>
              
              <div className="absolute bottom-4 left-6 bg-black/60 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/10 text-white max-w-md hidden sm:block">
                <h4 className="text-base font-serif font-bold text-pink-100">
                  {selectedVideo.titleEn}
                </h4>
                <p className="text-xs text-amber-400 font-serif mt-0.5">
                  {selectedVideo.titleHi}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
