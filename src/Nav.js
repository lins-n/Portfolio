import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[68px] flex items-center justify-between px-6 lg:px-12 transition-all duration-300 ${
        scrolled
          ? "bg-main-background/95 backdrop-blur-md border-b border-accent-color/10"
          : "bg-transparent"
      }`}
    >
      <Link
        to="/"
        className="font-satoshi font-bold text-accent-color text-base tracking-tight"
        style={{ fontVariationSettings: '"wght" 700' }}
      >
        Collins.
      </Link>

      <div className="flex items-center gap-8">
        <a
          href="#services"
          className="font-satoshi text-sm text-accent-color/50 hover:text-accent-color transition-colors duration-200 uppercase tracking-widest"
        >
          Work
        </a>
        <Link
          to="/about"
          className="font-satoshi text-sm text-accent-color/50 hover:text-accent-color transition-colors duration-200 uppercase tracking-widest"
        >
          About
        </Link>
        <a
          href="#contact"
          className="font-satoshi text-sm text-accent-color/50 hover:text-accent-color transition-colors duration-200 uppercase tracking-widest border border-accent-color/30 hover:border-accent-color/70 px-4 py-2"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Nav;
