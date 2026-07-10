import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const services = [
  {
    num: "01",
    title: "Graphic Design",
    desc: "Brand identities, logos, and visual systems that communicate with clarity and confidence.",
    href: "#design",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Interfaces for mobile apps and websites that are intuitive, refined, and built to convert.",
    href: "#ui",
  },
  {
    num: "03",
    title: "Development",
    desc: "Clean, performant web experiences - from concept to code, built to last.",
    href: null,
  },
];

const Services = () => {
  return (
    <section id="services" className="max-w-screen-xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <p
          className="font-satoshi text-accent-color/40 text-xs uppercase tracking-[0.2em] mb-12"
          style={{ fontVariationSettings: '"wght" 400' }}
        >
          What I do
        </p>
      </motion.div>

      <div className="border-t border-accent-color/15">
        {services.map((service, i) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {service.href ? (
              <a href={service.href} className="block group">
                <ServiceRow service={service} />
              </a>
            ) : (
              <div className="group">
                <ServiceRow service={service} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ServiceRow = ({ service }) => (
  <div className="grid grid-cols-12 gap-4 py-8 lg:py-10 border-b border-accent-color/15 items-center group-hover:border-accent-color/30 transition-colors duration-300">
    <span
      className="col-span-2 lg:col-span-1 font-satoshi text-accent-color/30 text-sm"
      style={{ fontVariationSettings: '"wght" 300' }}
    >
      {service.num}
    </span>
    <h3
      className="col-span-10 lg:col-span-4 font-satoshi text-accent-color text-xl lg:text-2xl group-hover:text-accent-color/80 transition-colors duration-200"
      style={{ fontVariationSettings: '"wght" 600' }}
    >
      {service.title}
    </h3>
    <p
      className="col-span-12 lg:col-span-6 font-satoshi text-accent-color/50 text-base leading-relaxed lg:pl-4"
      style={{ fontVariationSettings: '"wght" 300' }}
    >
      {service.desc}
    </p>
    <div className="hidden lg:flex col-span-1 justify-end">
      <GoArrowUpRight
        size={20}
        className="text-accent-color/20 group-hover:text-accent-color group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
      />
    </div>
  </div>
);

export default Services;
