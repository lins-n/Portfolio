import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import V2Nav from "../v2/V2Nav";

const ALL_PHOTOS = [
  "20260406_233654.jpg",
  "20260410_133809.jpg",
  "20260410_133811.jpg",
  "20260410_133811_1_.jpg",
  "20260410_133924.jpg",
  "20260410_134207.jpg",
  "20260410_134839.jpg",
  "20260410_142206.jpg",
  "20260410_145547.jpg",
  "20260410_145930_1_.jpg",
  "20260410_150941.jpg",
  "20260410_150944.jpg",
  "20260410_151439.jpg",
  "20260410_152346.jpg",
  "20260410_175403.jpg",
  "20260410_175418.jpg",
  "20260416_190104.jpg",
  "20260416_190205.jpg",
  "20260417_095235_1_.jpg",
  "20260421_164034.jpg",
  "20260421_171151.jpg",
  "20260425_233755.jpg",
  "20260509_143445.jpg",
  "20260509_143449.jpg",
  "20260512_092204.jpg",
  "20260517_085951.jpg",
  "20260529_055716.jpg",
  "20260529_180851.jpg",
  "20260607_202245.jpg",
  "20260610_182207.jpg",
  "20260620_095607_0_.jpg",
].map((f) => `/archives/${f}`);

const BATCH = 9;

/* ── Lightbox ── */
const Lightbox = ({ photos, index, onClose, onPrev, onNext, onJump }) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onPrev, onNext, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const touchStart = React.useRef(null);
  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const delta = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) delta > 0 ? onNext() : onPrev();
    touchStart.current = null;
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col"
      style={{ background: "rgba(8,8,8,0.97)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Bar */}
      <div className="flex items-center justify-between px-6 py-4 shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: "#444" }}>
          {index + 1} / {photos.length}
        </span>
        <button onClick={onClose} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: "#555" }}>
          Close
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center overflow-hidden px-4 py-4 relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={photos[index]}
            alt={`Photo ${index + 1}`}
            className="object-contain"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />
        </AnimatePresence>

        <button onClick={onPrev} className="absolute left-0 top-0 h-full flex items-center px-4 group" style={{ width: "15%", minWidth: 48 }} aria-label="Previous">
          <span className="flex items-center justify-center w-9 h-9 border opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ borderColor: "rgba(255,255,255,0.15)", color: "#ebebeb" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M8 1L3 6l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </button>
        <button onClick={onNext} className="absolute right-0 top-0 h-full flex items-center px-4 group" style={{ width: "15%", minWidth: 48 }} aria-label="Next">
          <span className="flex items-center justify-center w-9 h-9 border opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ borderColor: "rgba(255,255,255,0.15)", color: "#ebebeb" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="piktr-carousel shrink-0 flex gap-1.5 overflow-x-auto py-3 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", scrollbarWidth: "none" }}>
        {photos.map((src, i) => (
          <button key={i} onClick={() => onJump(i)} style={{ flexShrink: 0, width: 44, height: 44, opacity: i === index ? 1 : 0.3, outline: i === index ? "1px solid #6757d4" : "none", outlineOffset: 2, overflow: "hidden", transition: "opacity 0.2s" }}>
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

/* ── Page ── */
const Photography = () => {
  const [visible, setVisible] = useState(BATCH);
  const [lightbox, setLightbox] = useState(null);

  const goPrev = useCallback(() => setLightbox((i) => (i === 0 ? ALL_PHOTOS.length - 1 : i - 1)), []);
  const goNext = useCallback(() => setLightbox((i) => (i === ALL_PHOTOS.length - 1 ? 0 : i + 1)), []);

  const shown = ALL_PHOTOS.slice(0, visible);
  const hasMore = visible < ALL_PHOTOS.length;

  return (
    <>
      <div className="v2">
        <V2Nav />

        {/* Hero / caption */}
        <section className="pt-[64px]">
          <div className="v2-section pt-20 pb-20" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-6">
                <motion.p
                  className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5"
                  style={{ color: "#6757d4" }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Photography
                </motion.p>
                <motion.h1
                  className="font-grotesk leading-none tracking-tight"
                  style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 700, color: "#ebebeb" }}
                  initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  Shot on<br />
                  <span style={{ color: "#6757d4" }}>Samsung.</span>
                </motion.h1>
              </div>

              <motion.div
                className="lg:col-span-5 lg:col-start-8"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <p
                  className="font-grotesk leading-relaxed"
                  style={{ color: "#666", fontWeight: 300, fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)", lineHeight: 1.75 }}
                >
                  Photography is how I slow down. I don't go looking for the shot —
                  I just keep my eyes open and reach for my phone when something stops me.
                  Streets, light, texture, quiet moments. Everything here is straight from my Samsung,
                  unplanned and mostly unpretentious.
                </p>
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.2em] mt-6"
                  style={{ color: "#333" }}
                >
                  {ALL_PHOTOS.length} photos
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="v2-section py-16 pb-24">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-2.5">
            {shown.map((src, i) => (
              <motion.div
                key={src}
                className="break-inside-avoid mb-2.5 overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: (i % BATCH) * 0.035, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                onClick={() => setLightbox(i)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={src}
                    alt={`Archive ${i + 1}`}
                    className="w-full block transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: "rgba(12,12,12,0.35)" }}
                  >
                    <span className="flex items-center justify-center w-9 h-9 border" style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 1h10v10M1 11L11 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load more */}
          {hasMore && (
            <motion.div
              className="flex justify-center mt-14"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setVisible((v) => Math.min(v + BATCH, ALL_PHOTOS.length))}
                className="font-mono text-[11px] uppercase tracking-[0.22em] px-8 py-3.5 border"
                style={{ borderColor: "rgba(255,255,255,0.12)", color: "#888" }}
                whileHover={{ borderColor: "#6757d4", color: "#ebebeb" }}
                transition={{ duration: 0.15 }}
              >
                Load More — {ALL_PHOTOS.length - visible} remaining
              </motion.button>
            </motion.div>
          )}
        </section>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            photos={ALL_PHOTOS}
            index={lightbox}
            onClose={() => setLightbox(null)}
            onPrev={goPrev}
            onNext={goNext}
            onJump={setLightbox}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Photography;
