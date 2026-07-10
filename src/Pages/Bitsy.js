import React from "react";
import { motion } from "framer-motion";
import CaseStudyShell from "../v2/CaseStudyShell";
import present from "../images/bits.jpg";

/* Layout: PROTOTYPE FIRST
   Minimal meta hero, brief description left / stats right,
   full-bleed cover, then Figma embed as the hero feature. */

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const Bitsy = () => (
  <CaseStudyShell
    prev={{ to: "/design/siscode", label: "Siscode Gh" }}
    next={{ to: "/ui/rendells", label: "Rendells" }}
  >
    {/* HERO - split meta layout */}
    <section className="pt-[64px]">
      <div className="v2-section pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <motion.p
              className="font-mono text-[11px] uppercase tracking-[0.22em] mb-6"
              style={{ color: "#6757d4" }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            >
              Mobile UI / UX / 2024
            </motion.p>
            <motion.h1
              className="font-grotesk leading-none tracking-tight mb-8"
              style={{ fontSize: "clamp(4rem, 11vw, 10rem)", fontWeight: 700, color: "#ebebeb" }}
              initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Bitsy<span style={{ color: "#6757d4" }}>.</span>
            </motion.h1>
            <motion.p
              className="font-grotesk leading-relaxed max-w-[52ch]"
              style={{ color: "#888", fontWeight: 300, fontSize: "1rem" }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              A student companion app that consolidates everything a university student needs in one place: classes, documents, portals, deadlines. Designed to reduce the cognitive load of juggling multiple platforms.
            </motion.p>
          </div>

          {/* Meta stats */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {[
              { label: "Role", value: "UI/UX Designer" },
              { label: "Year", value: "2024" },
              { label: "Platform", value: "Mobile" },
              { label: "Type", value: "Fintech / Edu" },
            ].map((item) => (
              <div key={item.label} className="pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-1" style={{ color: "#444" }}>{item.label}</p>
                <p className="font-grotesk text-sm" style={{ color: "#ebebeb", fontWeight: 400 }}>{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Full-bleed cover */}
      <motion.img
        src={present}
        alt="Bitsy app overview"
        className="w-full object-cover"
        style={{ maxHeight: "75vh" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.1 }}
      />
    </section>

    {/* BRIEF + SOLUTION */}
    <section className="v2-section py-24 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div {...fade}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>The Brief</p>
          <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "1rem" }}>
            Students were bouncing between too many apps, portals, and platforms just to manage their academic life. The brief was to design a single mobile experience that brought it all together - lectures, documents, institutional portals - without feeling overwhelming.
          </p>
        </motion.div>
        <motion.div {...fade} transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>The Solution</p>
          <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "1rem" }}>
            Bitsy is built around a clear hierarchy of student needs. The interface uses a strong typographic system and clear navigation to let students move quickly between their most-used tools. Flows were prototyped and tested to ensure the app felt intuitive on first use, not just on first glance.
          </p>
        </motion.div>
      </div>
    </section>

    {/* PROTOTYPE EMBED */}
    <section className="v2-section pb-16">
      <motion.div {...fade}>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-6" style={{ color: "#6757d4" }}>Live Prototype</p>
        <div style={{ border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
          <iframe
            title="Bitsy Prototype"
            className="w-full"
            style={{ height: "85vh" }}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkqQo3f53r5hycHrhhjNpkp%2Fbitsy-app%3Fpage-id%3D19%253A118%26type%3Ddesign%26node-id%3D19-546%26viewport%3D-112%252C369%252C0.16%26t%3DjwBv2JENL6ec5rud-1%26scaling%3Dscale-down%26starting-point-node-id%3D19%253A546%26mode%3Ddesign"
            allowFullScreen
          />
        </div>
      </motion.div>
    </section>

    {/* CASE STUDY PDF DOWNLOAD */}
    <section
      className="v2-section pb-24"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <motion.div
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-14"
        {...fade}
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-3" style={{ color: "#6757d4" }}>
            Case Study
          </p>
          <p className="font-grotesk" style={{ color: "#ebebeb", fontWeight: 600, fontSize: "1.05rem" }}>
            Bitsy — Full Case Study
          </p>
          <p className="font-grotesk mt-1" style={{ color: "#555", fontWeight: 300, fontSize: "0.88rem" }}>
            Process, decisions, and outcomes in detail.
          </p>
        </div>
        <motion.a
          href="/bitsy-case-study.pdf"
          download="Bitsy_Case_Study.pdf"
          className="inline-flex items-center gap-3 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em]"
          style={{
            border: "1px solid rgba(255,255,255,0.15)",
            color: "#ebebeb",
            textDecoration: "none",
          }}
          whileHover={{ backgroundColor: "#6757d4", borderColor: "#6757d4" }}
          transition={{ duration: 0.18 }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v8M3.5 5.5 7 9l3.5-3.5M2 11h10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Download PDF
        </motion.a>
      </motion.div>
    </section>
  </CaseStudyShell>
);

export default Bitsy;
