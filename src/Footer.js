import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-accent-color/15">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Left: CTA + contact */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <h2
              className="font-gambetta text-accent-color leading-[1.1] mb-8"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                fontVariationSettings: '"wght" 300',
              }}
            >
              Got a project?
              <br />
              Let's work together.
            </h2>
            <a
              href="mailto:collinsnudekor@gmail.com"
              className="font-satoshi text-accent-color/60 hover:text-accent-color transition-colors duration-200 text-base underline underline-offset-4 decoration-accent-color/30 hover:decoration-accent-color"
              style={{ fontVariationSettings: '"wght" 300' }}
            >
              collinsnudekor@gmail.com
            </a>

            <div className="flex items-center gap-4 mt-10">
              <a
                href="https://wa.me/qr/VU6EPX7LP3YTF1"
                target="_blank"
                rel="noreferrer"
                className="font-satoshi text-sm uppercase tracking-widest text-accent-color/50 hover:text-accent-color transition-colors duration-200 border border-accent-color/20 hover:border-accent-color/50 px-5 py-2.5"
                style={{ fontVariationSettings: '"wght" 400' }}
              >
                WhatsApp
              </a>
              <a
                href="https://twitter.com/_lins_n"
                target="_blank"
                rel="noreferrer"
                className="font-satoshi text-sm uppercase tracking-widest text-accent-color/50 hover:text-accent-color transition-colors duration-200 border border-accent-color/20 hover:border-accent-color/50 px-5 py-2.5"
                style={{ fontVariationSettings: '"wght" 400' }}
              >
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Right: Links */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p
                  className="font-satoshi text-accent-color/30 text-xs uppercase tracking-[0.2em] mb-5"
                  style={{ fontVariationSettings: '"wght" 400' }}
                >
                  Navigate
                </p>
                <ul className="space-y-3">
                  {[
                    { label: "Home", href: "/", isLink: true },
                    { label: "About", href: "/about", isLink: true },
                    { label: "Work", href: "#services", isLink: false },
                    { label: "Contact", href: "#contact", isLink: false },
                  ].map((item) => (
                    <li key={item.label}>
                      {item.isLink ? (
                        <Link
                          to={item.href}
                          className="font-satoshi text-accent-color/60 hover:text-accent-color transition-colors duration-200 text-sm"
                          style={{ fontVariationSettings: '"wght" 300' }}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          href={item.href}
                          className="font-satoshi text-accent-color/60 hover:text-accent-color transition-colors duration-200 text-sm"
                          style={{ fontVariationSettings: '"wght" 300' }}
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p
                  className="font-satoshi text-accent-color/30 text-xs uppercase tracking-[0.2em] mb-5"
                  style={{ fontVariationSettings: '"wght" 400' }}
                >
                  Projects
                </p>
                <ul className="space-y-3">
                  {[
                    { label: "Siscode", to: "/design/siscode" },
                    { label: "Bitsy App", to: "/ui/bitsy" },
                    { label: "Baron", to: "/design/baron" },
                    { label: "Trackwise", to: "/ui/trackwise" },
                    { label: "Rendells", to: "/ui/rendells" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className="font-satoshi text-accent-color/60 hover:text-accent-color transition-colors duration-200 text-sm"
                        style={{ fontVariationSettings: '"wght" 300' }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-accent-color/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <p
            className="font-satoshi text-accent-color/30 text-xs"
            style={{ fontVariationSettings: '"wght" 300' }}
          >
            Collins Nudekor - 2025
          </p>
          <p
            className="font-gambetta text-accent-color/30 text-xs italic"
            style={{ fontVariationSettings: '"wght" 300' }}
          >
            Designed &amp; built by Collins
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
