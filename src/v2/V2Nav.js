import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Archive", href: "#archive" },
];

/* Text that rolls up on hover */
const RollLink = ({ href, label, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="relative overflow-hidden block group"
    style={{ height: "1.15em" }}
  >
    <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-[#444] transition-transform duration-300 ease-out group-hover:-translate-y-full">
      {label}
    </span>
    <span
      className="absolute top-full left-0 font-mono text-[11px] uppercase tracking-[0.2em] text-[#6757d4] transition-transform duration-300 ease-out group-hover:-translate-y-full"
      aria-hidden
    >
      {label}
    </span>
  </a>
);

/* Magnetic CV download button */
const CVButton = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.35);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href="/cv.pdf"
      download="Collins_Nudekor_CV.pdf"
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className="relative inline-flex items-center gap-2 px-5 py-2.5 group"
    >
      <span className="absolute inset-0 border transition-colors duration-300"
        style={{ borderColor: "rgba(103,87,212,0.4)" }} />
      <span className="absolute inset-0 border border-[#6757d4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
      <span className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-[#ebebeb]">
        CV
      </span>
      {/* download arrow */}
      <svg className="relative" width="11" height="11" viewBox="0 0 11 11" fill="none">
        <path d="M5.5 1v6M2.5 5l3 3 3-3M1 10h9" stroke="#6757d4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.a>
  );
};

/* Mobile full-screen menu */
const MobileMenu = ({ open, onClose }) => (
  <AnimatePresence>
    {open && (
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-40 flex flex-col"
        style={{ background: "rgba(12,12,12,0.98)", backdropFilter: "blur(20px)", paddingTop: "64px" }}
      >
        <nav className="flex flex-col items-start gap-0 px-8 pt-12">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              onClick={onClose}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full py-5 border-b font-grotesk text-[#ebebeb] text-3xl hover:text-[#6757d4] transition-colors duration-200"
              style={{ fontWeight: 500, borderColor: "rgba(255,255,255,0.06)" }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>

        <motion.div
          className="px-8 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.28, duration: 0.3 }}
        >
          <a
            href="/cv.pdf"
            download="Collins_Nudekor_CV.pdf"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#ebebeb]"
            style={{ border: "1px solid rgba(103,87,212,0.45)" }}
          >
            Download CV
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M5.5 1v6M2.5 5l3 3 3-3M1 10h9" stroke="#6757d4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const V2Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center justify-between transition-colors duration-300"
        style={{
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
          backgroundColor: scrolled || menuOpen ? "rgba(12,12,12,0.96)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Wordmark */}
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
          <span
            className="w-7 h-7 flex items-center justify-center font-grotesk text-[#ebebeb] text-[11px] shrink-0 transition-colors duration-200 group-hover:bg-[#7b6de0]"
            style={{ fontWeight: 700, backgroundColor: "#6757d4" }}
          >
            CN
          </span>
          <span className="font-grotesk text-[#ebebeb] text-sm hidden lg:block" style={{ fontWeight: 500 }}>
            Collins Nudekor
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <RollLink key={l.label} href={l.href} label={l.label} />
          ))}
        </div>

        {/* Desktop CV button */}
        <div className="hidden md:block">
          <CVButton />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
            transition={{ duration: 0.22 }}
            className="block w-5 h-[1.5px] bg-[#ebebeb]"
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.15 }}
            className="block w-5 h-[1.5px] bg-[#ebebeb]"
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
            transition={{ duration: 0.22 }}
            className="block w-5 h-[1.5px] bg-[#ebebeb]"
          />
        </button>
      </motion.nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default V2Nav;
