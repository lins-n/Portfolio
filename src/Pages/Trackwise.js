import React from "react";
import { motion } from "framer-motion";
import CaseStudyShell from "../v2/CaseStudyShell";
import header from "../images/header.jpg";
import tr1 from "../images/tr1.jpg";
import tr2 from "../images/tr2.jpg";
import tr3 from "../images/tr3.jpg";
import tr4 from "../images/tr4.jpg";
import main from "../images/Main.mp4";

/* Layout: CASE STUDY NARRATIVE
   Split hero with image right, numbered vertical sections for each
   content block, image grid, video demo as full-width closer. */

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const Section = ({ number, title, children }) => (
  <motion.div
    className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16"
    style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    {...fade}
  >
    <div className="lg:col-span-4 flex gap-5 items-start">
      <span className="font-mono text-[10px] tracking-widest mt-1 shrink-0" style={{ color: "#333" }}>{number}</span>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "#6757d4" }}>{title}</p>
    </div>
    <div className="lg:col-span-7">{children}</div>
  </motion.div>
);

const Trackwise = () => (
  <CaseStudyShell
    prev={{ to: "/design/baron", label: "Baron Property" }}
    next={null}
  >
    {/* HERO - split */}
    <section className="pt-[64px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90dvh]">
        <div className="flex flex-col justify-end p-10 lg:p-16 pb-16">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.22em] mb-6"
            style={{ color: "#6757d4" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
          >
            Product Design / 2024
          </motion.p>
          <motion.h1
            className="font-grotesk leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 7vw, 8rem)", fontWeight: 700, color: "#ebebeb" }}
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Track<br />
            <span style={{ color: "#6757d4" }}>wise.</span>
          </motion.h1>
          <motion.p
            className="font-grotesk mt-8 leading-relaxed max-w-[42ch]"
            style={{ color: "#555", fontWeight: 300, fontSize: "0.95rem" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            NFC-based attendance tracking for tertiary institutions. Final year project, University of Ghana.
          </motion.p>
        </div>
        <motion.div
          className="relative overflow-hidden"
          style={{ minHeight: 480 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <img src={header} alt="Trackwise app" className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>

    {/* NARRATIVE SECTIONS */}
    <div className="v2-section">
      <Section number="01" title="Background">
        <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "0.95rem" }}>
          Students who attend class regularly are significantly more likely to achieve academically. Yet traditional paper attendance sheets are slow, error-prone, and give lecturers no real-time visibility into who's present. Sheets get lost, mixed with other papers, or manipulated entirely.
        </p>
        <p className="font-grotesk leading-relaxed mt-4" style={{ color: "#888", fontWeight: 300, fontSize: "0.95rem" }}>
          NFC technology offers a clean alternative: students tap their device on a reader to register attendance instantly. No paper, no delays, no room for proxy sign-ins.
        </p>
      </Section>

      <Section number="02" title="The Problem">
        <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "0.95rem" }}>
          Attendance lists frequently get mixed with other documents. In some cases, students sign in for absent colleagues, undermining the data entirely. Lecturers had no reliable way to identify attendance patterns early enough to intervene. The existing system failed both staff and students.
        </p>
      </Section>

      <Section number="03" title="Objectives">
        <div className="space-y-0">
          {[
            "NFC-based app that automates attendance recording",
            "90% accuracy in tracking, eliminating proxy sign-ins",
            "Works with students' existing NFC-enabled mobile devices",
            "Real-time data accessible to lecturers during class",
            "Integrated with the existing student ID system",
            "Tested and deployed within a single semester",
          ].map((obj, i) => (
            <div
              key={i}
              className="flex items-start gap-4 py-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span className="font-mono text-[9px] tracking-widest shrink-0 mt-0.5" style={{ color: "#333" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-grotesk text-sm" style={{ color: "#ebebeb", fontWeight: 300 }}>{obj}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section number="04" title="The Solution">
        <p className="font-grotesk leading-relaxed" style={{ color: "#888", fontWeight: 300, fontSize: "0.95rem" }}>
          Trackwise replaces paper records entirely with a clean mobile app. Students tap their device on an NFC reader at the classroom door. The system logs attendance instantly and surfaces it in a real-time dashboard for lecturers. No cards, no paper, no manual counting.
        </p>
        <p className="font-grotesk leading-relaxed mt-4" style={{ color: "#888", fontWeight: 300, fontSize: "0.95rem" }}>
          The interface is designed to work on the first tap without onboarding friction, using the student ID infrastructure already in place at the university.
        </p>
      </Section>
    </div>

    {/* SCREEN GRID */}
    <section className="v2-section py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[tr1, tr2, tr3, tr4].map((img, i) => (
          <motion.div key={i} className="overflow-hidden" {...fade} transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}>
            <img src={img} alt={`Trackwise screen ${i + 1}`} className="w-full object-cover" style={{ height: 380 }} />
          </motion.div>
        ))}
      </div>
    </section>

    {/* VIDEO DEMO */}
    <section className="v2-section pb-24">
      <motion.div {...fade}>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-6" style={{ color: "#6757d4" }}>Project Demo</p>
        <div style={{ border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
          <video
            controls
            autoPlay
            muted
            loop
            src={main}
            className="w-full"
            style={{ maxHeight: "85vh", display: "block", backgroundColor: "#111" }}
          />
        </div>
      </motion.div>
    </section>
  </CaseStudyShell>
);

export default Trackwise;
