import React from "react";
import { motion } from "framer-motion";
import CaseStudyShell from "../v2/CaseStudyShell";
import reps1 from "../images/reps1.jpg";
import rep2 from "../images/rep2.jpg";
import rep4 from "../images/rep4.jpg";
import rep5 from "../images/rep5.jpg";

/* Layout: STADIUM ENERGY
   Split hero: massive number + title left, cover image fills right,
   wide editorial text sections, horizontal full-bleed image strip at end. */

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const Sporty = () => (
  <CaseStudyShell
    prev={{ to: "/ui/itfits", label: "ItFits App" }}
    next={{ to: "/design/baron", label: "Baron Property" }}
  >
    {/* HERO - split panel */}
    <section className="pt-[64px] min-h-[100dvh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100dvh-64px)]">
        {/* Left: text */}
        <div className="flex flex-col justify-end p-10 lg:p-16 pb-16">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.22em] mb-8"
            style={{ color: "#6757d4" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          >
            Brand + Print / 2023
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              className="font-grotesk leading-none tracking-tight"
              style={{ fontSize: "clamp(4rem, 8vw, 8rem)", fontWeight: 700, color: "#ebebeb" }}
            >
              Sporty<br />
              <span style={{ color: "#6757d4" }}>Reps.</span>
            </h1>
          </motion.div>
          <motion.div
            className="mt-12 grid grid-cols-2 gap-6 max-w-[380px]"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {[
              { label: "Role", value: "Graphic Designer" },
              { label: "Year", value: "2023" },
              { label: "Type", value: "Brand Identity" },
              { label: "Output", value: "Logo + Print" },
            ].map((item) => (
              <div key={item.label} className="pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] mb-1" style={{ color: "#444" }}>{item.label}</p>
                <p className="font-grotesk text-sm" style={{ color: "#ebebeb", fontWeight: 400 }}>{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: cover image fills panel */}
        <motion.div
          className="overflow-hidden"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{ minHeight: 500 }}
        >
          <img src={reps1} alt="Sporty Reps identity" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>

    {/* BRIEF + SOLUTION */}
    <section
      className="v2-section py-24 lg:py-32"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div {...fade}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>The Brief</p>
          <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "1rem" }}>
            Sporty Reps is a soccer recruitment agency connecting talented players with professional clubs worldwide. They needed a brand that communicated integrity and global reach, while projecting the energy and ambition of the sport itself.
          </p>
        </motion.div>
        <motion.div {...fade} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>The Solution</p>
          <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "1rem" }}>
            A dynamic identity built around a stylized soccer ball mark. Bold orange and yellow communicate growth, ambition, and energy without sacrificing professionalism. The clean typography keeps the mark feeling polished and globally credible rather than local or amateur.
          </p>
        </motion.div>
      </div>
    </section>

    {/* IMAGE ROW - two then full-bleed */}
    <section className="v2-section pb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <motion.img src={rep2} alt="Sporty Reps logo" className="w-full object-cover" style={{ maxHeight: 420 }} {...fade} />
        <motion.img src={rep4} alt="Sporty Reps application" className="w-full object-cover" style={{ maxHeight: 420 }} {...fade} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} />
      </div>
    </section>

    {/* FULL BLEED CLOSER */}
    <motion.section {...fade}>
      <img src={rep5} alt="Sporty Reps full brand" className="w-full" style={{ display: "block" }} />
    </motion.section>

    <div className="pb-24" />
  </CaseStudyShell>
);

export default Sporty;
