import React from "react";
import { motion } from "framer-motion";
import astron from "./images/astron.png";
import img10 from "./images/img10.png";
import img13 from "./images/img13.png";
import img14 from "./images/img14.png";

const testimonials = [
  {
    logo: astron,
    logoAlt: "Astron logo",
    quote:
      "The design is not only visually stunning but also communicates the essence of my business effortlessly. Thank you for your outstanding work.",
    name: "Astron",
    role: "CEO",
    featured: true,
  },
  {
    logo: img10,
    logoAlt: "Siscode logo",
    quote:
      "He made the process seamless and delivered a logo that exceeded our expectations. I highly recommend Collins for all your design needs.",
    name: "Carl",
    role: "CEO, Siscode",
    featured: false,
  },
  {
    logo: img13,
    logoAlt: "Elizabeth Cooks logo",
    quote:
      "From the initial concepts to the final product, you exceeded my expectations at every step. Thank you for creating a logo I'm proud to display everywhere.",
    name: "Elizabeth",
    role: "CEO",
    featured: false,
  },
  {
    logo: img14,
    logoAlt: "Studio 37 logo",
    quote:
      "The design perfectly captures the essence of my brand. It's simple yet impactful, exactly what I was looking for.",
    name: "Studio 37",
    role: "CEO",
    featured: false,
  },
];

const Reviews = () => {
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section className="max-w-screen-xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p
          className="font-satoshi text-accent-color/40 text-xs uppercase tracking-[0.2em] mb-3"
          style={{ fontVariationSettings: '"wght" 400' }}
        >
          Reviews
        </p>
        <h2
          className="font-gambetta text-accent-color"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontVariationSettings: '"wght" 300',
          }}
        >
          What clients say
        </h2>
      </motion.div>

      {/* Featured quote */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="border border-accent-color/15 p-8 lg:p-14 mb-4 lg:grid lg:grid-cols-12 gap-12 items-start"
      >
        <div className="lg:col-span-2 mb-6 lg:mb-0">
          <img src={featured.logo} alt={featured.logoAlt} className="w-16 h-16 object-contain" />
        </div>
        <div className="lg:col-span-10">
          <p
            className="font-gambetta text-accent-color mb-8 leading-[1.4]"
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              fontVariationSettings: '"wght" 300',
            }}
          >
            "{featured.quote}"
          </p>
          <div>
            <p
              className="font-satoshi text-accent-color text-sm"
              style={{ fontVariationSettings: '"wght" 600' }}
            >
              {featured.name}
            </p>
            <p
              className="font-satoshi text-accent-color/40 text-xs uppercase tracking-widest mt-1"
              style={{ fontVariationSettings: '"wght" 300' }}
            >
              {featured.role}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Remaining quotes: col-7 + col-5 asymmetric */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <motion.div
          className="lg:col-span-7 border border-accent-color/15 p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <img src={rest[0].logo} alt={rest[0].logoAlt} className="w-12 h-12 object-contain mb-6" />
          <p
            className="font-satoshi text-accent-color/70 text-base leading-relaxed mb-8"
            style={{ fontVariationSettings: '"wght" 300' }}
          >
            "{rest[0].quote}"
          </p>
          <div>
            <p
              className="font-satoshi text-accent-color text-sm"
              style={{ fontVariationSettings: '"wght" 600' }}
            >
              {rest[0].name}
            </p>
            <p
              className="font-satoshi text-accent-color/40 text-xs uppercase tracking-widest mt-1"
              style={{ fontVariationSettings: '"wght" 300' }}
            >
              {rest[0].role}
            </p>
          </div>
        </motion.div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          {rest.slice(1).map((t, i) => (
            <motion.div
              key={t.name}
              className="border border-accent-color/15 p-8 flex-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <img src={t.logo} alt={t.logoAlt} className="w-10 h-10 object-contain mb-5" />
              <p
                className="font-satoshi text-accent-color/70 text-sm leading-relaxed mb-6"
                style={{ fontVariationSettings: '"wght" 300' }}
              >
                "{t.quote}"
              </p>
              <div>
                <p
                  className="font-satoshi text-accent-color text-sm"
                  style={{ fontVariationSettings: '"wght" 600' }}
                >
                  {t.name}
                </p>
                <p
                  className="font-satoshi text-accent-color/40 text-xs uppercase tracking-widest mt-1"
                  style={{ fontVariationSettings: '"wght" 300' }}
                >
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
