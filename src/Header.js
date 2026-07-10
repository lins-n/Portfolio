import React from "react";
import { motion } from "framer-motion";
import mockups from "./images/mockups.png";

const Header = () => {
  return (
    <header className="min-h-[100dvh] flex items-center pt-[68px]">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 w-full py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left: text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="font-satoshi text-accent-color leading-[0.92] tracking-tight mb-6"
                style={{
                  fontSize: "clamp(3rem, 8vw, 6.5rem)",
                  fontVariationSettings: '"wght" 700',
                }}
              >
                Collins
                <br />
                Nudekor
              </h1>
              <p
                className="font-gambetta text-accent-color leading-[1.08] mb-10"
                style={{
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  fontVariationSettings: '"wght" 300',
                }}
              >
                Designer &amp; Developer
              </p>
              <p
                className="font-satoshi text-accent-color/60 text-base lg:text-lg leading-relaxed mb-12 max-w-[42ch]"
                style={{ fontVariationSettings: '"wght" 300' }}
              >
                I build brand identities and digital products for clients who
                want to be remembered.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="#services"
                  className="font-satoshi text-sm uppercase tracking-widest text-main-background bg-accent-color px-6 py-3 hover:bg-accent-color/80 transition-colors duration-200"
                  style={{ fontVariationSettings: '"wght" 500' }}
                >
                  View work
                </a>
                <a
                  href="#contact"
                  className="font-satoshi text-sm uppercase tracking-widest text-accent-color/60 hover:text-accent-color transition-colors duration-200"
                  style={{ fontVariationSettings: '"wght" 400' }}
                >
                  Get in touch
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={mockups}
              alt="Project mockups by Collins Nudekor"
              className="w-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </header>
  );
};

export default Header;
