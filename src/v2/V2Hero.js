import React from "react";
import { motion } from "framer-motion";

const V2Hero = () => {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center pt-[64px]"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="v2-hero-grid" />
      <div className="v2-section w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-16 lg:pb-24">

          {/* Left: main text */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-[#6757d4] text-[11px] uppercase tracking-[0.22em] mb-10">
                {'// Designer + Developer'}
              </p>

              <h1
                className="font-grotesk text-[#ebebeb] leading-[0.9] tracking-tight mb-10"
                style={{
                  fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
                  fontWeight: 700,
                }}
              >
                Collins
                <br />
                <span style={{ color: "#6757d4" }}>Nudekor</span>
                <span className="text-[#ebebeb]">.</span>
              </h1>

              <p
                className="font-grotesk text-[#888] leading-relaxed max-w-[52ch]"
                style={{
                  fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
                  fontWeight: 300,
                }}
              >
                Building visual identities and digital products
                for clients who want to be remembered.
              </p>
            </motion.div>
          </div>

          {/* Right: available status + CTA */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-start lg:items-end gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-1.5 h-1.5 rounded-full bg-[#6757d4]"
                style={{ boxShadow: "0 0 6px #6757d4" }}
              />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#555]">
                Available for work
              </span>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <a
                href="#work"
                className="font-grotesk text-[13px] text-[#ebebeb] bg-[#6757d4] px-6 py-3 hover:bg-[#7b6de0] transition-colors duration-200"
                style={{ fontWeight: 500, letterSpacing: "0.02em" }}
              >
                View work
              </a>
              <a
                href="#contact"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#555] hover:text-[#ebebeb] transition-colors duration-200"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom bar: stats/meta */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 border-t pt-8 pb-4 gap-6"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          {[
            { label: "Discipline", value: "Design + Dev" },
            { label: "Based in", value: "Ghana" },
            { label: "Experience", value: "3+ Years" },
            { label: "Status", value: "Open to work" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#333] mb-1">
                {item.label}
              </p>
              <p className="font-grotesk text-[#888] text-sm" style={{ fontWeight: 400 }}>
                {item.value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default V2Hero;
