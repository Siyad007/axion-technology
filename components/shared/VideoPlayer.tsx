"use client";
import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
  showControls?: boolean;
}

export function VideoPlayer({ src, poster, className, autoplay = true, showControls = true }: VideoPlayerProps) {
  const ref   = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted,   setMuted]   = useState(true);

  useEffect(() => {
    if (!ref.current || !autoplay) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { ref.current?.play().then(() => setPlaying(true)).catch(() => {}); }
        else                  { ref.current?.pause(); setPlaying(false); }
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [autoplay]);

  const toggle = () => {
    if (!ref.current) return;
    playing ? ref.current.pause() : ref.current.play();
    setPlaying(p => !p);
  };

  if (!src) {
    return (
      <div className={cn("relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-900 to-accent-800 flex items-center justify-center", className)}>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,0.05) 40px,rgba(255,255,255,0.05) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,0.05) 40px,rgba(255,255,255,0.05) 41px)"
        }} />
        <div className="relative text-center text-white/60 p-8">
          <Play size={40} className="mx-auto mb-3 opacity-40" />
          <p className="text-sm font-medium">Product reel coming soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative rounded-3xl overflow-hidden group video-glow", className)}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted={muted}
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      {showControls && (
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={toggle}
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button onClick={() => setMuted(m => !m)}
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors">
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      )}
      <AnimatePresence>
        {!playing && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
            onClick={toggle}
          >
            <motion.div
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl"
            >
              <Play size={22} className="text-primary-700 ml-1" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
