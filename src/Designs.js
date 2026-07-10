import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import siscode2 from "./images/siscode1.jpg";
import bits from "./images/bits.jpg";
import reps1 from "./images/reps1.jpg";
import barron from "./images/barron.png";
import Button from "./Button";

const projects = [
  {
    to: "/design/siscode",
    img: siscode2,
    title: "Siscode Gh",
    category: "Graphic Design",
    span: "lg:col-span-7",
    height: "h-[480px]",
  },
  {
    to: "/ui/bitsy",
    img: bits,
    title: "Bitsy App",
    category: "UI Design",
    span: "lg:col-span-5",
    height: "h-[480px]",
  },
  {
    to: "/design/sporty",
    img: reps1,
    title: "Sporty Reps",
    category: "Graphic Design",
    span: "lg:col-span-5",
    height: "h-[380px]",
  },
  {
    to: "/design/baron",
    img: barron,
    title: "Baron Property",
    category: "Graphic Design",
    span: "lg:col-span-7",
    height: "h-[380px]",
  },
];

const ProjectCard = ({ img, title, category, height }) => (
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

const Designs = () => {
  return (
    <section id="design" className="max-w-screen-xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex justify-between items-end mb-10"
      >
        <h2
          className="font-gambetta text-accent-color"
          style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontVariationSettings: '"wght" 300',
          }}
        >
          Selected Work
        </h2>
        <Link to="/design">
          <Button>See all</Button>
        </Link>
      </motion.div>

      {/* Row 1: large (7) + small (5) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3">
        {projects.slice(0, 2).map((p, i) => (
          <motion.div
            key={p.title}
            className={p.span}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link to={p.to}>
              <div className="mb-3">
                <ProjectCard img={p.img} title={p.title} category={p.category} height={p.height} />
              </div>
              <div className="flex justify-between items-center px-1">
                <p
                  className="font-satoshi text-accent-color/80 text-sm"
                  style={{ fontVariationSettings: '"wght" 500' }}
                >
                  {p.title}
                </p>
                <p
                  className="font-satoshi text-accent-color/40 text-xs uppercase tracking-widest"
                  style={{ fontVariationSettings: '"wght" 300' }}
                >
                  {p.category}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Row 2: small (5) + large (7) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
        {projects.slice(2, 4).map((p, i) => (
          <motion.div
            key={p.title}
            className={p.span}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <Link to={p.to}>
              <div className="mb-3">
                <ProjectCard img={p.img} title={p.title} category={p.category} height={p.height} />
              </div>
              <div className="flex justify-between items-center px-1">
                <p
                  className="font-satoshi text-accent-color/80 text-sm"
                  style={{ fontVariationSettings: '"wght" 500' }}
                >
                  {p.title}
                </p>
                <p
                  className="font-satoshi text-accent-color/40 text-xs uppercase tracking-widest"
                  style={{ fontVariationSettings: '"wght" 300' }}
                >
                  {p.category}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Designs;
