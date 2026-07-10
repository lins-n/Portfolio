import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logoMain from "../images/modena/modena-main.jpg";
import cardEmboss from "../images/modena/modena-embossed.webp";
import cardStationery from "../images/modena/modena-stationery.webp";
import bagImg from "../images/modena/modena-bag.jpg";
import tagImg from "../images/modena/modena-tag.webp";
import boxImg from "../images/modena/modena-box.jpg";
import patternBlack from "../images/modena/modena-pattern-black.png";

const BG = "#F0F1F2";
const STONE = "#D9D3C7";
const SLATE = "#595959";
const GREEN = "#424C19";
const INK = "#262626";

const inView = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
};

/* ── Light nav ── */
const ModenaNav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center justify-between"
      style={{
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        background: scrolled ? "rgba(240,241,242,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? `1px solid ${STONE}` : "none",
      }}
    >
      <Link to="/" className="flex items-center gap-2.5">
        <span
          className="w-7 h-7 flex items-center justify-center font-grotesk text-[11px] shrink-0"
          style={{ fontWeight: 700, background: GREEN, color: "#fff" }}
        >
          CN
        </span>
        <span
          className="font-grotesk text-sm hidden lg:block"
          style={{ color: INK, fontWeight: 500 }}
        >
          Collins Nudekor
        </span>
      </Link>
      <Link
        to="/#projects"
        className="font-mono text-[11px] uppercase tracking-[0.2em]"
        style={{ color: SLATE, textDecoration: "none" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
        onMouseLeave={(e) => (e.currentTarget.style.color = SLATE)}
      >
        All Projects
      </Link>
    </nav>
  );
};

/* ── Page ── */
const Modena = () => (
  <div style={{ background: BG, color: INK, minHeight: "100vh" }}>
    <ModenaNav />

    {/* ── HERO ── split viewport, pattern textured on left */}
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[100dvh] pt-[64px]">
      {/* Left: text on chalk — pattern sits behind at low opacity */}
      <div className="relative flex flex-col justify-end px-10 lg:px-16 pb-16 lg:pb-24 pt-16 lg:pt-0 overflow-hidden">
        {/* Pattern texture */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <img
            src={patternBlack}
            alt=""
            className="w-full h-full object-cover"
            style={{ mixBlendMode: "multiply", opacity: 0.01 }}
          />
        </div>

        <div className="relative">
          <motion.p
            className="font-mono text-[10px] uppercase tracking-[0.28em] mb-8"
            style={{ color: GREEN }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Brand Identity / 2024
          </motion.p>

          <motion.h1
            className="font-grotesk leading-none"
            style={{
              fontSize: "clamp(4rem, 8.5vw, 9rem)",
              fontWeight: 700,
              color: INK,
              letterSpacing: "-0.025em",
            }}
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          >
            Modena.
          </motion.h1>

          <motion.p
            className="font-grotesk mt-8 max-w-[40ch] leading-relaxed"
            style={{
              color: SLATE,
              fontWeight: 300,
              fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
              lineHeight: 1.75,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Brand identity for a contemporary fashion label built around three
            words: modern, timeless, chic.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-x-10 gap-y-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { label: "Scope", value: "Brand Identity" },
              { label: "Year", value: "2024" },
              {
                label: "Deliverables",
                value: "Logo, Palette, Type, Collateral",
              },
            ].map((m) => (
              <div key={m.label}>
                <p
                  className="font-mono text-[9px] uppercase tracking-[0.18em] mb-1.5"
                  style={{ color: STONE }}
                >
                  {m.label}
                </p>
                <p
                  className="font-grotesk text-sm"
                  style={{ color: INK, fontWeight: 400 }}
                >
                  {m.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right: embossed card bleeds to edge */}
      <motion.div
        className="relative overflow-hidden"
        style={{ minHeight: 480 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.1 }}
      >
        <img
          src={cardEmboss}
          alt="Modena embossed business card on olive green"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </section>

    {/* ── OVERVIEW ── */}
    <section
      className="py-24 lg:py-32"
      style={{
        borderTop: `1px solid ${STONE}`,
        borderBottom: `1px solid ${STONE}`,
      }}
    >
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div className="lg:col-span-4 space-y-5" {...inView}>
            {[
              { label: "Role", value: "Brand Designer" },
              { label: "Category", value: "Fashion & Luxury" },
              { label: "Year", value: "2024" },
              { label: "Typeface", value: "Giflika Modern Display Serif" },
            ].map((item) => (
              <div
                key={item.label}
                className="pb-4"
                style={{ borderBottom: `1px solid ${STONE}` }}
              >
                <p
                  className="font-mono text-[9px] uppercase tracking-[0.18em] mb-1.5"
                  style={{ color: STONE }}
                >
                  {item.label}
                </p>
                <p
                  className="font-grotesk text-sm"
                  style={{ color: INK, fontWeight: 400 }}
                >
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="lg:col-span-7 lg:col-start-6"
            {...inView}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="font-grotesk leading-relaxed"
              style={{
                color: SLATE,
                fontWeight: 300,
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                lineHeight: 1.8,
              }}
            >
              Modena is a contemporary fashion label built on restraint. The
              brief called for an identity that could sit beside established
              luxury brands without imitating them — something with its own
              quiet authority.
            </p>
            <p
              className="font-grotesk leading-relaxed mt-5"
              style={{
                color: SLATE,
                fontWeight: 300,
                fontSize: "clamp(1rem, 1.4vw, 1.15rem)",
                lineHeight: 1.8,
              }}
            >
              The solution pairs a fluid calligraphic M with a high-contrast
              display serif, creating tension between the personal and the
              architectural. A deep olive green anchors the colour system,
              carrying across packaging, stationery, and garment tags as the
              brand's most recognisable mark.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ── PATTERN BAND ── full-bleed olive green divider */}
    <motion.div
      className="relative overflow-hidden"
      style={{ background: GREEN, height: "clamp(200px, 28vw, 340px)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <img
        src={patternBlack}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "invert(1)", opacity: 0.1 }}
      />
    </motion.div>

    {/* ── THE MARK ── */}
    <section className="py-28 lg:py-36">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        <motion.div className="flex justify-center" {...inView}>
          <img
            src={logoMain}
            alt="Modena logotype — Modern.Timeless.Chic"
            className="w-full object-contain"
            style={{ maxWidth: 620, mixBlendMode: "multiply" }}
          />
        </motion.div>
      </div>
    </section>

    {/* ── LABEL TAG ── featured split: tag left, olive panel right */}
    <section
      className="grid grid-cols-1 lg:grid-cols-12"
      style={{ borderTop: `1px solid ${STONE}` }}
    >
      {/* Tag image — large, bleeds */}
      <motion.div
        className="lg:col-span-7 overflow-hidden"
        style={{ minHeight: "clamp(400px, 52vw, 700px)" }}
        {...inView}
      >
        <img
          src={tagImg}
          alt="Modena square label tag on fabric"
          className="w-full h-full object-cover block"
        />
      </motion.div>

      {/* Right: olive panel with pattern + label copy */}
      <motion.div
        className="lg:col-span-5 relative flex flex-col justify-center px-10 lg:px-16 py-16 overflow-hidden"
        style={{ background: GREEN }}
        {...inView}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Pattern texture on olive */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <img
            src={patternBlack}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "invert(1)", opacity: 0.02 }}
          />
        </div>

        <div className="relative">
          <p
            className="font-mono text-[9px] uppercase tracking-[0.28em] mb-8"
            style={{ color: "rgba(255,255,255,0.38)" }}
          >
            Label Tag
          </p>
          <p
            className="font-grotesk leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.82)",
              fontWeight: 300,
              fontSize: "clamp(1rem, 1.3vw, 1.1rem)",
              lineHeight: 1.75,
            }}
          >
            The garment tag is the first tangible expression of the brand in a
            customer's hands — a square of embossed olive stock, the logotype
            centred in white, and nothing else. No noise. Just the mark.
          </p>
          <div
            className="mt-10 pt-10"
            style={{ borderTop: "1px solid rgba(255,255,255,0.14)" }}
          >
            <p
              className="font-mono text-[9px] uppercase tracking-[0.22em] mb-2"
              style={{ color: "rgba(255,255,255,0.28)" }}
            >
              Material
            </p>
            <p
              className="font-grotesk text-sm"
              style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}
            >
              Embossed card stock · Olive colourway
            </p>
          </div>
        </div>
      </motion.div>
    </section>

    {/* ── COLOUR LANGUAGE ── */}
    <section
      className="py-24 lg:py-28"
      style={{ borderTop: `1px solid ${STONE}` }}
    >
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12">
        <motion.h2
          className="font-grotesk mb-12"
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            fontWeight: 500,
            color: INK,
          }}
          {...inView}
        >
          Colour Language
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
          {...inView}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            {
              hex: "#F0F1F2",
              name: "Chalk",
              role: "Background",
              outline: true,
            },
            { hex: "#D9D3C7", name: "Stone", role: "Dividers", outline: false },
            {
              hex: "#595959",
              name: "Slate",
              role: "Body text",
              outline: false,
            },
            {
              hex: "#424C19",
              name: "Olive",
              role: "Brand mark",
              outline: false,
            },
            { hex: "#262626", name: "Ink", role: "Headline", outline: false },
          ].map((c) => (
            <div key={c.hex}>
              <div
                style={{
                  background: c.hex,
                  height: 96,
                  border: c.outline ? `1px solid ${STONE}` : "none",
                }}
                className="w-full mb-3"
              />
              <p
                className="font-grotesk text-sm font-medium mb-0.5"
                style={{ color: INK }}
              >
                {c.name}
              </p>
              <p
                className="font-mono text-[10px] tracking-[0.08em] mb-1"
                style={{ color: SLATE }}
              >
                {c.hex}
              </p>
              <p
                className="font-mono text-[9px] uppercase tracking-[0.16em]"
                style={{ color: STONE }}
              >
                {c.role}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ── TOUCHPOINTS ── stationery + bag */}
    <section style={{ borderTop: `1px solid ${STONE}` }}>
      <div className="max-w-[1380px] mx-auto px-6 lg:px-12 pt-14 pb-10">
        <motion.h2
          className="font-grotesk"
          style={{
            fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
            fontWeight: 500,
            color: INK,
          }}
          {...inView}
        >
          Touchpoints
        </motion.h2>
      </div>

      {/* 3-col grid: stationery · bag · box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {[
          {
            src: cardStationery,
            alt: "Modena stationery: embossed envelope and notecard",
          },
          { src: bagImg, alt: "Modena shopping bag on neutral grey" },
          { src: boxImg, alt: "Modena gift box with ribbon" },
        ].map((img, i) => (
          <motion.div
            key={img.alt}
            className="overflow-hidden"
            {...inView}
            transition={{
              duration: 0.8,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full block object-cover"
              style={{ height: "clamp(280px, 38vw, 540px)" }}
            />
          </motion.div>
        ))}
      </div>
    </section>

    {/* ── PROJECT NAV ── */}
    <div
      className="max-w-[1380px] mx-auto px-6 lg:px-12 py-14"
      style={{ borderTop: `1px solid ${STONE}` }}
    >
      <div className="flex items-center justify-between">
        <Link to="/ui/trackwise" className="group flex items-center gap-3">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-200 group-hover:-translate-x-1"
          >
            <path
              d="M11 3L3 11M3 11H9M3 11V5"
              stroke={GREEN}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p
              className="font-mono text-[10px] uppercase tracking-[0.18em] mb-0.5"
              style={{ color: STONE }}
            >
              Previous
            </p>
            <p
              className="font-grotesk text-sm"
              style={{ color: INK, fontWeight: 500 }}
            >
              Trackwise
            </p>
          </div>
        </Link>

        <Link
          to="/#projects"
          className="font-mono text-[11px] uppercase tracking-[0.2em]"
          style={{ color: SLATE, textDecoration: "none" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = GREEN)}
          onMouseLeave={(e) => (e.currentTarget.style.color = SLATE)}
        >
          All Projects
        </Link>

        <span />
      </div>
    </div>
  </div>
);

export default Modena;
