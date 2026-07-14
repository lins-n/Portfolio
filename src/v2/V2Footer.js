import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const V2Footer = () => {
  return (
    <footer id="contact">
      <div className="v2-section py-20 lg:py-28">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          {/* Left: CTA */}
          <div className="lg:col-span-7">
            <h2
              className="font-grotesk text-[#ebebeb] mb-8"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 600,
                lineHeight: 1.05,
              }}
            >
              Got a project?
              <br />
              <span style={{ color: "#6757d4" }}>Let's build it.</span>
            </h2>
            <a
              href="mailto:collinsnudekor@gmail.com"
              className="font-grotesk text-base text-[#888] hover:text-[#ebebeb] transition-colors duration-200 border-b pb-0.5"
              style={{
                fontWeight: 400,
                borderColor: "rgba(255,255,255,0.15)",
              }}
            >
              collinsnudekor@gmail.com
            </a>

            <div className="flex items-center gap-5 mt-8">
              <a
                href="https://wa.me/qr/VU6EPX7LP3YTF1"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#555] hover:text-[#ebebeb] transition-colors duration-200"
              >
                WhatsApp
              </a>
              <span className="text-[#333] text-xs">|</span>
              <a
                href="https://twitter.com/_lins_n"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#555] hover:text-[#ebebeb] transition-colors duration-200"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Right: quick links */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#333] mb-5">
                  Navigate
                </p>
                <ul className="space-y-3">
                  {[
                    { label: "Work", href: "#work" },
                    { label: "Projects", href: "#projects" },
                    { label: "Stack", href: "#stack" },
                    { label: "Archive", href: "#archive" },
                    { label: "Contact", href: "#contact" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="font-grotesk text-sm text-[#555] hover:text-[#ebebeb] transition-colors duration-200"
                        style={{ fontWeight: 300 }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#333] mb-5">
                  Projects
                </p>
                <ul className="space-y-3">
                  {[
                    { label: "Siscode Gh", href: "/design/siscode" },
                    { label: "Bitsy App", href: "/ui/bitsy" },
                    { label: "Baron", href: "/design/baron" },
                    { label: "Trackwise", href: "/ui/trackwise" },
                    { label: "Rendells", href: "/ui/rendells" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="font-grotesk text-sm text-[#555] hover:text-[#ebebeb] transition-colors duration-200"
                        style={{ fontWeight: 300 }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="v2-section py-5 flex flex-wrap justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-[#333] uppercase tracking-[0.18em]">
            Collins Nudekor 2026
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="font-mono text-[10px] text-[#333] uppercase tracking-[0.18em] hover:text-[#555] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-mono text-[10px] text-[#333] uppercase tracking-[0.18em] hover:text-[#555] transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default V2Footer;
