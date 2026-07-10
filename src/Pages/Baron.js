import React from "react";
import { motion } from "framer-motion";
import CaseStudyShell from "../v2/CaseStudyShell";
import barron from "../images/barron.png";
import blogo from "../images/blogo.jpg";
import bpattern from "../images/bpattern.jpg";
import baron from "../images/baron.jpg";
import bicon from "../images/bicon.jpg";

/* Layout: SPARSE EDITORIAL
   Minimal centered hero with large whitespace, single wide cover image,
   brief + solution stacked with generous space, 4-cell bento closing grid. */

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const Baron = () => (
  <CaseStudyShell
    prev={{ to: "/design/sporty", label: "Sporty Reps" }}
    next={{ to: "/ui/trackwise", label: "Trackwise" }}
  >
    {/* HERO - centered editorial */}
    <section className="pt-[64px]">
      <div className="v2-section pt-24 pb-20 flex flex-col items-center text-center">
        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.22em] mb-8"
          style={{ color: "#6757d4" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
        >
          Brand Identity / 2023
        </motion.p>
        <motion.h1
          className="font-grotesk leading-none tracking-tight"
          style={{ fontSize: "clamp(4rem, 12vw, 11rem)", fontWeight: 700, color: "#ebebeb" }}
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Baron<br />
          <span style={{ color: "#6757d4" }}>Property.</span>
        </motion.h1>
        <motion.p
          className="font-grotesk mt-8 max-w-[44ch] leading-relaxed"
          style={{ color: "#555", fontWeight: 300, fontSize: "1rem" }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          A property care logo designed to communicate every service at a single glance.
        </motion.p>
      </div>
      <motion.img
        src={barron}
        alt="Baron Property brand"
        className="w-full object-cover"
        style={{ maxHeight: "70vh" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
      />
    </section>

    {/* BRIEF */}
    <section
      className="v2-section py-24 lg:py-32"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div className="lg:col-span-3" {...fade}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: "#6757d4" }}>The Brief</p>
        </motion.div>
        <motion.div className="lg:col-span-7" {...fade} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          <p
            className="font-grotesk leading-relaxed"
            style={{ color: "#888", fontWeight: 300, fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.7 }}
          >
            Baron Property Care wanted a bold, clean logo that visually communicated their services: window cleaning, gutter cleaning and repairs, roof cleaning, and driveway jet washing. The logo needed to stand alone as a communicator - showing what the business does without any supporting copy.
          </p>
        </motion.div>
      </div>
    </section>

    {/* SOLUTION */}
    <section className="v2-section py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div className="lg:col-span-3" {...fade}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: "#6757d4" }}>The Solution</p>
        </motion.div>
        <motion.div className="lg:col-span-7" {...fade} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          <p
            className="font-grotesk leading-relaxed"
            style={{ color: "#888", fontWeight: 300, fontSize: "clamp(1rem, 1.4vw, 1.15rem)", lineHeight: 1.7 }}
          >
            The mark uses a blue and green palette drawn directly from the services: blue for cleanliness, trust, and water; green for freshness, renewal, and eco-friendliness. The icon distills all four service areas into a single geometric form - clean, confident, and immediately readable at any size.
          </p>
          <p
            className="font-grotesk mt-6 italic"
            style={{ color: "#6757d4", fontWeight: 400, fontSize: "1rem", fontStyle: "italic" }}
          >
            "Hi Collins, really like this logo and the font. I'd like to go ahead with this one."
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] mt-3" style={{ color: "#444" }}>
            Baron Property Care - Client
          </p>
        </motion.div>
      </div>
    </section>

    {/* BENTO GRID - 4 cells */}
    <section className="v2-section pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div className="overflow-hidden" {...fade}>
          <img src={blogo} alt="Baron logo" className="w-full object-cover" style={{ height: 380 }} />
        </motion.div>
        <motion.div className="overflow-hidden" {...fade} transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}>
          <img src={baron} alt="Baron brand" className="w-full object-cover" style={{ height: 380 }} />
        </motion.div>
        <motion.div className="overflow-hidden" {...fade} transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}>
          <img src={bpattern} alt="Baron pattern" className="w-full object-cover" style={{ height: 380 }} />
        </motion.div>
        <motion.div className="overflow-hidden" {...fade} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          <img src={bicon} alt="Baron icon" className="w-full object-cover" style={{ height: 380 }} />
        </motion.div>
      </div>
    </section>
  </CaseStudyShell>
);

export default Baron;
