import React from "react";
import { motion } from "framer-motion";
import CaseStudyShell from "../v2/CaseStudyShell";
import rendells from "../images/rendells.jpg";
import rp1 from "../images/rp1.jpg";
import rp2 from "../images/rp2.jpg";

/* Layout: WIDE-MARGIN EDITORIAL
   Title sits deep right (8/12 col offset), single hero image,
   requirements as a numbered list, solution full-width,
   two sequential full-bleed images. */

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const Rendells = () => (
  <CaseStudyShell
    prev={{ to: "/ui/bitsy", label: "Bitsy App" }}
    next={{ to: "/ui/itfits", label: "ItFits App" }}
  >
    {/* HERO - right-offset editorial title */}
    <section className="pt-[64px]">
      <div className="v2-section pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-start-4 lg:col-span-9">
            <motion.p
              className="font-mono text-[11px] uppercase tracking-[0.22em] mb-6"
              style={{ color: "#6757d4" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            >
              Web UI Design / 2024
            </motion.p>
            <motion.h1
              className="font-grotesk leading-none tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", fontWeight: 700, color: "#ebebeb" }}
              initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Rendells<br />
              <span style={{ color: "#6757d4" }}>Events.</span>
            </motion.h1>
          </div>
        </div>
      </div>
      <motion.img
        src={rendells}
        alt="Rendells website"
        className="w-full object-cover"
        style={{ maxHeight: "70vh" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15 }}
      />
    </section>

    {/* CONTEXT */}
    <section className="v2-section py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <motion.div {...fade}>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>The Challenge</p>
            <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "0.95rem" }}>
              Rendells Events relied entirely on Instagram DMs and phone calls to field client enquiries. A single admin couldn't scale to respond to every message, and potential clients had no way to browse services or pricing independently.
            </p>
          </motion.div>
        </div>

        {/* Requirements as clean numbered list */}
        <div className="lg:col-span-7 lg:col-start-6">
          <motion.div {...fade} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-6" style={{ color: "#6757d4" }}>Requirements</p>
            <div className="space-y-0">
              {[
                "View contact information",
                "Browse all available services",
                "See variant pricing per service option",
                "Search for a specific service",
                "View the company's previous work",
              ].map((req, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 py-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <span className="font-mono text-[10px] tracking-widest shrink-0 mt-0.5" style={{ color: "#333" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-grotesk text-sm" style={{ color: "#ebebeb", fontWeight: 400 }}>{req}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* SOLUTION */}
    <section
      className="v2-section py-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <motion.div {...fade} className="max-w-[680px]">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>The Solution</p>
        <p
          className="font-grotesk leading-relaxed"
          style={{ color: "#ebebeb", fontWeight: 300, fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)", lineHeight: 1.6 }}
        >
          A clean, structured website that gives Rendells Events a professional presence and lets potential clients explore independently. Services, pricing, and past work are surfaced clearly, removing the bottleneck of one-on-one enquiry for every decision.
        </p>
      </motion.div>
    </section>

    {/* SEQUENTIAL IMAGES */}
    <section className="py-4">
      <motion.img src={rp1} alt="Rendells screen 1" className="w-full object-cover mb-4" style={{ maxHeight: "80vh" }} {...fade} />
      <motion.img src={rp2} alt="Rendells screen 2" className="w-full object-cover" style={{ maxHeight: "80vh" }} {...fade} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} />
    </section>
  </CaseStudyShell>
);

export default Rendells;
