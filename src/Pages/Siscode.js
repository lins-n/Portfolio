import React from "react";
import { motion } from "framer-motion";
import CaseStudyShell from "../v2/CaseStudyShell";
import siscode from "../images/siscode1.jpg";
import design from "../images/Design.jpg";
import mainD from "../images/Main - dark.jpg";
import mock3 from "../images/mock3.jpg";
import mock1 from "../images/mock1.jpg";

/* Layout: KINETIC TYPE HERO
   Giant title bleeds to the right edge, full-bleed cover image,
   split brief/solution columns, pulled testimonial quote, image grid. */

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const Siscode = () => (
  <CaseStudyShell
    prev={{ to: "/ui/piktr", label: "Piktr" }}
    next={{ to: "/ui/bitsy", label: "Bitsy App" }}
  >
    {/* HERO - oversized type */}
    <section className="pt-[64px] overflow-hidden">
      <div className="v2-section pt-16 pb-8">
        <motion.p
          className="font-mono text-[11px] uppercase tracking-[0.22em] mb-6"
          style={{ color: "#6757d4" }}
          {...fade}
        >
          Brand Identity / 2024
        </motion.p>
        <motion.h1
          className="font-grotesk leading-none tracking-tight"
          style={{
            fontSize: "clamp(5rem, 16vw, 14rem)",
            fontWeight: 700,
            color: "#ebebeb",
            marginLeft: "-0.04em",
          }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Siscode
          <br />
          <span style={{ color: "#6757d4" }}>Gh.</span>
        </motion.h1>
      </div>

      {/* Full-bleed cover */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <img src={siscode} alt="Siscode brand identity" className="w-full object-cover" style={{ maxHeight: "80vh" }} />
      </motion.div>
    </section>

    {/* BRIEF + SOLUTION - two columns */}
    <section className="v2-section py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div {...fade}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>The Brief</p>
          <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "1rem" }}>
            Siscode Gh needed a visual identity that communicated digital and coding literacy for young underprivileged girls in Africa. The brand had to feel modern and global while remaining youth-centric and fresh. It needed to project professional credibility on the international stage while staying accessible and energetic for its core audience.
          </p>
        </motion.div>
        <motion.div {...fade} transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>The Solution</p>
          <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "1rem" }}>
            The logo system centers on a modern stylized globe that speaks to global connectivity and ambition. Clean, contemporary typography reinforces readability and a professional tone. The full identity balances youthful energy with polish, positioning Siscode Gh as a credible tech education brand that empowers African females and youth to compete on the world stage.
          </p>
        </motion.div>
      </div>
    </section>

    {/* TESTIMONIAL - large pulled quote */}
    <section
      className="v2-section py-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <motion.blockquote {...fade} className="max-w-[800px]">
        <p
          className="font-grotesk leading-snug mb-8"
          style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)", fontWeight: 400, color: "#ebebeb", fontStyle: "italic" }}
        >
          "Collins made the process seamless and delivered a logo that exceeded our expectations. His expertise and professionalism were evident from the very first conversation."
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: "#555" }}>
          Siscode Gh - Client
        </p>
      </motion.blockquote>
    </section>

    {/* IMAGE GRID - asymmetric */}
    <section className="v2-section py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <motion.div className="lg:col-span-7 overflow-hidden" {...fade}>
          <img src={design} alt="Siscode design" className="w-full h-full object-cover" style={{ maxHeight: 520 }} />
        </motion.div>
        <motion.div className="lg:col-span-5 overflow-hidden" {...fade} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          <img src={mainD} alt="Siscode dark" className="w-full h-full object-cover" style={{ maxHeight: 520 }} />
        </motion.div>
        <motion.div className="lg:col-span-5 overflow-hidden" {...fade} transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
          <img src={mock3} alt="Siscode mockup" className="w-full h-full object-cover" style={{ maxHeight: 420 }} />
        </motion.div>
        <motion.div className="lg:col-span-7 overflow-hidden" {...fade} transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          <img src={mock1} alt="Siscode mockup 2" className="w-full h-full object-cover" style={{ maxHeight: 420 }} />
        </motion.div>
      </div>
    </section>
  </CaseStudyShell>
);

export default Siscode;
