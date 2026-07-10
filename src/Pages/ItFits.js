import React from "react";
import { motion } from "framer-motion";
import CaseStudyShell from "../v2/CaseStudyShell";
import img13 from "../images/img13.jpg";
import img19 from "../images/img19.jpg";
import shoe1 from "../images/shoe-app2.jpg";
import shoe2 from "../images/shoe-app6.jpg";
import Video from "../images/itFitsPromo.mp4";

/* Layout: PRODUCT FRAME
   Sticky left info panel on desktop as screens scroll on the right,
   then a full-width video close-out. */

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const ItFits = () => (
  <CaseStudyShell
    prev={{ to: "/ui/rendells", label: "Rendells" }}
    next={{ to: "/design/sporty", label: "Sporty Reps" }}
  >
    {/* HERO - full bleed with title overlay */}
    <section className="pt-[64px] relative">
      <div className="v2-section pt-16 pb-12">
        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.22em] mb-6"
          style={{ color: "#6757d4" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
        >
          Mobile UI / UX / 2024
        </motion.p>
        <motion.h1
          className="font-grotesk leading-none tracking-tight"
          style={{ fontSize: "clamp(4.5rem, 13vw, 12rem)", fontWeight: 700, color: "#ebebeb" }}
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          It<span style={{ color: "#6757d4" }}>Fits.</span>
        </motion.h1>
      </div>
      <motion.img
        src={img13}
        alt="ItFits app hero"
        className="w-full object-cover"
        style={{ maxHeight: "75vh" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
      />
    </section>

    {/* BRIEF + SOLUTION side by side */}
    <section className="v2-section py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div {...fade}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>The Brief</p>
          <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "1rem" }}>
            Shoe shopping was inefficient - clunky retailer sites, no filtering, poor mobile experiences. The client wanted a focused app that makes finding and buying footwear actually enjoyable rather than frustrating.
          </p>
        </motion.div>
        <motion.div {...fade} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>The Solution</p>
          <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "1rem" }}>
            ItFits is an end-to-end UI design for a footwear commerce app. Onboarding, discovery, product detail, and checkout flows were all designed with speed and clarity in mind. A curated product presentation model keeps the browsing experience clean and decisive.
          </p>
        </motion.div>
      </div>
    </section>

    {/* SCREENS BENTO - 3-column varied grid */}
    <section className="v2-section pb-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <motion.div className="md:col-span-5 overflow-hidden" {...fade}>
          <img src={img19} alt="ItFits screen 1" className="w-full object-cover h-full" style={{ minHeight: 360 }} />
        </motion.div>
        <motion.div className="md:col-span-7 overflow-hidden" {...fade} transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
          <img src={shoe1} alt="ItFits screen 2" className="w-full object-cover h-full" style={{ minHeight: 360 }} />
        </motion.div>
        <motion.div className="md:col-span-12 overflow-hidden" {...fade} transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}>
          <img src={shoe2} alt="ItFits screen 3" className="w-full object-cover" style={{ maxHeight: 500 }} />
        </motion.div>
      </div>
    </section>

    {/* VIDEO DEMO */}
    <section className="v2-section pb-24">
      <motion.div {...fade}>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-6" style={{ color: "#6757d4" }}>App Demo</p>
        <div style={{ border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
          <video
            controls
            autoPlay
            muted
            loop
            src={Video}
            className="w-full"
            style={{ maxHeight: "80vh", display: "block", backgroundColor: "#111" }}
          />
        </div>
      </motion.div>
    </section>
  </CaseStudyShell>
);

export default ItFits;
