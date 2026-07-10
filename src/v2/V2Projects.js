import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  { num: "01", title: "Piktr", category: "Mobile App", year: "2026", to: "/ui/piktr" },
  { num: "02", title: "Siscode Gh", category: "Brand Identity", year: "2024", to: "/design/siscode" },
  { num: "03", title: "Bitsy App", category: "UI Design", year: "2024", to: "/ui/bitsy" },
  { num: "04", title: "Sporty Reps", category: "Graphic Design", year: "2023", to: "/design/sporty" },
  { num: "05", title: "Baron Property", category: "Brand Identity", year: "2023", to: "/design/baron" },
  { num: "06", title: "Rendells Website", category: "UI Design", year: "2024", to: "/ui/rendells" },
  { num: "07", title: "Trackwise", category: "UI Design", year: "2024", to: "/ui/trackwise" },
];

const ProjectRow = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
  >
    <Link to={project.to} className="block">
      <div className="v2-project-row group">
        <span className="font-mono text-[10px] text-[#333] tracking-widest">
          {project.num}
        </span>
        <span
          className="font-grotesk text-[#ebebeb] text-lg md:text-xl group-hover:text-[#6757d4] transition-colors duration-200"
          style={{ fontWeight: 500 }}
        >
          {project.title}
        </span>
        <span className="hidden md:block font-mono text-[10px] uppercase tracking-[0.18em] text-[#444]">
          {project.category}
        </span>
        <span className="hidden md:block font-mono text-[10px] text-[#333] tracking-widest">
          {project.year}
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="text-[#333] group-hover:text-[#6757d4] transition-colors duration-200 justify-self-end"
        >
          <path
            d="M3 11L11 3M11 3H5M11 3V9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  </motion.div>
);

const V2Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 lg:py-32"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="v2-section">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6757d4] mb-3">
            02
          </p>
          <h2
            className="font-grotesk text-[#ebebeb]"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            All Projects
          </h2>
        </motion.div>

        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          {projects.map((p, i) => (
            <ProjectRow key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default V2Projects;
