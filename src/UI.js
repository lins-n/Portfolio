import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bits from "./images/bits.jpg";
import rendell from "./images/Rendell.jpg";
import itFitss from "./images/itFitss.gif";
import intro from "./images/intro.gif";

const UICard = ({ img, title, category, height, alt }) => (
  <div className={`relative overflow-hidden ${height} w-full group cursor-pointer`}>
    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      style={{ backgroundImage: `url(${img})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-main-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
      <p
        className="font-satoshi text-accent-color text-sm uppercase tracking-widest"
        style={{ fontVariationSettings: '"wght" 600' }}
      >
        {title}
      </p>
      <p
        className="font-satoshi text-accent-color/60 text-xs uppercase tracking-widest"
        style={{ fontVariationSettings: '"wght" 300' }}
      >
        {category}
      </p>
    </div>
  </div>
);

const CardLabel = ({ title, category }) => (
  <div className="flex justify-between items-center px-1 mt-3">
    <p
      className="font-satoshi text-accent-color/80 text-sm"
      style={{ fontVariationSettings: '"wght" 500' }}
    >
      {title}
    </p>
    <p
      className="font-satoshi text-accent-color/40 text-xs uppercase tracking-widest"
      style={{ fontVariationSettings: '"wght" 300' }}
    >
      {category}
    </p>
  </div>
);

const UI = () => {
  return (
    <section id="ui" className="max-w-screen-xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2
          className="font-gambetta text-accent-color"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontVariationSettings: '"wght" 300',
          }}
        >
          UI/UX Projects
        </h2>
      </motion.div>

      {/* Top: left large (6) + right stacked (6) */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        {/* Bitsy - large left */}
        <div className="lg:col-span-6">
          <Link to="/ui/bitsy">
            <UICard img={bits} title="Bitsy" category="UI Design" height="h-[490px]" />
            <CardLabel title="Bitsy App" category="UI Design" />
          </Link>
        </div>

        {/* Right: Rendells + ItFits stacked */}
        <div className="lg:col-span-6 flex flex-col gap-3">
          <Link to="/ui/rendells">
            <UICard img={rendell} title="Rendells" category="UI Design" height="h-[234px]" />
            <CardLabel title="Rendells Website" category="UI Design" />
          </Link>
          <Link to="/ui/itfits">
            <UICard img={itFitss} title="ItFits" category="UI Design" height="h-[234px]" />
            <CardLabel title="ItFits App" category="UI Design" />
          </Link>
        </div>
      </motion.div>

      {/* Bottom: Trackwise full width */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <Link to="/ui/trackwise">
          <UICard img={intro} title="Final Year Project" category="UI Design" height="h-[280px]" />
          <CardLabel title="Trackwise" category="UI Design" />
        </Link>
      </motion.div>
    </section>
  );
};

export default UI;
