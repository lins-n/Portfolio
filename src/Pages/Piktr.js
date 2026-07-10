import React from "react";
import { motion } from "framer-motion";
import CaseStudyShell from "../v2/CaseStudyShell";
import piktrIcon from "../images/piktr-icon.png";
import screen1 from "../images/piktr-screen1.jpg";
import screen2 from "../images/piktr-screen2.jpg";
import screen3 from "../images/piktr-screen3.jpg";
import screen4 from "../images/piktr-screen4.jpg";
import screen5 from "../images/piktr-screen5.jpg";

/* Layout: EXPO LAUNCH
   Full-viewport purple hero (slide aesthetic), dark v2 body.
   App icon + giant centered wordmark, then features + screens. */

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
};

const features = [
  {
    index: "01",
    title: "Daily Colour",
    body: "Every day, a new colour prompt is issued to the community. Users submit one photo that matches the colour of the day — a format that drives both creativity and daily retention.",
  },
  {
    index: "02",
    title: "Day-In-The-Life",
    body: "DITL lets users document their day in a sequence of photos. It's a continuous story rather than a single moment — designed to build deeper social connection between friends.",
  },
  {
    index: "03",
    title: "Social Feed",
    body: "A curated feed surfaces the best submissions from people you follow. Reactions are minimal by design — the photo does the talking.",
  },
];

const Piktr = () => (
  <CaseStudyShell
    prev={null}
    next={{ to: "/design/siscode", label: "Siscode Gh" }}
  >
    {/* HERO - full viewport purple, expo slide aesthetic */}
    <section
      className="min-h-[100dvh] flex flex-col items-center justify-center relative pt-[64px]"
      style={{ background: "#6757d4" }}
    >
      {/* Top label */}
      <motion.p
        className="font-mono text-[10px] uppercase tracking-[0.28em] absolute top-[88px] left-1/2"
        style={{ color: "rgba(255,255,255,0.45)", transform: "translateX(-50%)", whiteSpace: "nowrap" }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Mobile App / 2026
      </motion.p>

      <div className="flex flex-col items-center text-center px-6">
        {/* App icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
          style={{ width: 88, height: 88 }}
        >
          <img
            src={piktrIcon}
            alt="Piktr icon"
            className="w-full h-full object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </motion.div>

        {/* Wordmark */}
        <motion.h1
          className="font-grotesk leading-none tracking-tight"
          style={{ fontSize: "clamp(5.5rem, 20vw, 18rem)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Piktr.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="font-grotesk mt-8 max-w-[38ch]"
          style={{ color: "rgba(255,255,255,0.55)", fontWeight: 300, fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.65 }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          A social photo app built around daily colour-themed submissions and
          shared moments between friends.
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.24em]" style={{ color: "rgba(255,255,255,0.3)" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ width: 1, height: 32, background: "rgba(255,255,255,0.2)" }}
        />
      </motion.div>
    </section>

    {/* OVERVIEW - dark, left/right */}
    <section
      className="v2-section py-24 lg:py-32"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div className="lg:col-span-4" {...fade}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: "#6757d4" }}>
            Overview
          </p>
          <div className="space-y-4">
            {[
              { label: "Role", value: "Mobile Developer" },
              { label: "Stack", value: "React Native · Expo" },
              { label: "Backend", value: "Firebase · Cloudinary" },
              { label: "Status", value: "In Development" },
            ].map((item) => (
              <div key={item.label} className="pb-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] mb-1" style={{ color: "#444" }}>
                  {item.label}
                </p>
                <p className="font-grotesk text-sm" style={{ color: "#ebebeb", fontWeight: 400 }}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7 lg:col-start-6"
          {...fade}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p
            className="font-grotesk leading-relaxed"
            style={{ color: "#888", fontWeight: 300, fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.7 }}
          >
            Piktr is a social photography app built around the idea that constraints
            drive creativity. Instead of an open-ended feed, the app gives every
            user a single daily prompt — a colour — and invites them to submit one
            photo that captures it. The result is a curated, aesthetically coherent
            community feed that rewards intentionality over volume.
          </p>
          <p
            className="font-grotesk leading-relaxed mt-5"
            style={{ color: "#888", fontWeight: 300, fontSize: "clamp(1rem, 1.5vw, 1.2rem)", lineHeight: 1.7 }}
          >
            The Day-In-The-Life feature extends this into a storytelling format,
            letting users string together a sequence of moments from their day.
            Both formats are designed to make the app feel meaningful to open, not
            compulsive.
          </p>
        </motion.div>
      </div>
    </section>

    {/* FEATURES - numbered list */}
    <section className="v2-section py-24">
      <motion.p
        className="font-mono text-[10px] uppercase tracking-[0.22em] mb-16"
        style={{ color: "#6757d4" }}
        {...fade}
      >
        Core Features
      </motion.p>
      <div className="space-y-0">
        {features.map((f, i) => (
          <motion.div
            key={f.index}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            {...fade}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="lg:col-span-1 flex items-start pt-0.5">
              <span className="font-mono text-[10px] tracking-widest" style={{ color: "#333" }}>
                {f.index}
              </span>
            </div>
            <div className="lg:col-span-4">
              <p className="font-grotesk font-semibold" style={{ color: "#ebebeb", fontSize: "1.1rem" }}>
                {f.title}
              </p>
            </div>
            <div className="lg:col-span-6">
              <p className="font-grotesk leading-relaxed" style={{ color: "#666", fontWeight: 300, fontSize: "0.95rem" }}>
                {f.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

    {/* SCREEN CAROUSEL */}
    <section className="pb-24">
      <motion.p
        className="font-mono text-[10px] uppercase tracking-[0.22em] mb-8 v2-section"
        style={{ color: "#6757d4" }}
        {...fade}
      >
        App Screens
      </motion.p>
      <div
        className="piktr-carousel flex gap-4 overflow-x-auto"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          paddingLeft: "max(1.25rem, calc((100vw - 1200px) / 2 + 1.25rem))",
          paddingRight: "max(1.25rem, calc((100vw - 1200px) / 2 + 1.25rem))",
          paddingBottom: "4px",
        }}
      >
        {[
          { src: screen1, alt: "Home — Your Colour for Today" },
          { src: screen2, alt: "Home — Friends' shots feed" },
          { src: screen3, alt: "Activities — Colour Hunt and DITL" },
          { src: screen4, alt: "Day in the Life — hourly timeline" },
          { src: screen5, alt: "Gallery — photo submissions by date" },
        ].map((s, i) => (
          <motion.div
            key={i}
            className="overflow-hidden shrink-0"
            style={{
              scrollSnapAlign: "start",
              width: "min(300px, 72vw)",
              borderRadius: 24,
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={s.src}
              alt={s.alt}
              className="w-full object-cover block"
            />
          </motion.div>
        ))}
      </div>
    </section>

    {/* CLOSING - tech strip */}
    <section
      className="v2-section py-20"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <motion.div
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        {...fade}
      >
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] mb-4" style={{ color: "#6757d4" }}>
            Built With
          </p>
          <div className="flex flex-wrap gap-3">
            {["React Native", "Expo", "Firebase", "Firestore", "Cloudinary", "TypeScript"].map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-1.5"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#666" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <p
          className="font-grotesk max-w-[38ch] leading-relaxed"
          style={{ color: "#444", fontWeight: 300, fontSize: "0.9rem" }}
        >
          Ongoing development — architecture, feature design, and engineering.
        </p>
      </motion.div>
    </section>
  </CaseStudyShell>
);

export default Piktr;
