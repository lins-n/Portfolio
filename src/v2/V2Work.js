import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    id: "piktr",
    title: "Piktr",
    role: "Mobile Developer",
    category: "Product Development",
    year: "2026–Present",
    description:
      "Building a social photo app centered around daily color-themed submissions and a Day-In-The-Life activity feature. Handling end-to-end mobile development, including architecture, real-time Firestore sync, image upload pipelines via Cloudinary, and push notification flows.",
    tags: ["React Native", "Expo", "Firebase", "Cloudinary"],
  },
  {
    id: "sendva",
    title: "Sendva",
    role: "Mobile Engineer",
    category: "Mobile Development",
    year: "Mar 2025–Jan 2026",
    description:
      "Led development of a driver-facing mobile application built with React Native and Expo. Delivered reliable trip workflows, third-party API integrations, and a scalable mobile architecture that shipped to production.",
    tags: ["React Native", "Expo", "API Integration"],
  },
  {
    id: "reppblue",
    title: "Reppblue",
    role: "UI Designer / Developer",
    category: "Design + Development",
    year: "2023",
    description:
      "Developed user interfaces across multiple products, from initial wireframing through to high-fidelity prototypes. Collaborated closely with cross-functional teams to ensure design consistency, ran usability tests, and iterated on feedback to refine the overall product experience.",
    tags: ["Figma", "React", "Prototyping"],
  },
  {
    id: "construct-virtual",
    title: "Construct Virtual",
    role: "Freelance Designer",
    category: "Brand + Marketing",
    year: "2021–Present",
    description:
      "Ongoing engagement with a UK-based company specialising in marketing solutions for construction firms. Currently working in an IT capacity, having built and managed over 10+ client websites on WordPress, alongside producing logos, social media posts, brochures, and banners aligned to each client's brand.",
    tags: ["WordPress", "Illustrator", "Figma", "Branding", "Print"],
  },
  {
    id: "scynett",
    title: "Scynett",
    role: "UI Designer",
    category: "Product UI",
    year: "Jan 2023",
    description:
      "Designed a comprehensive dashboard interface from scratch and reworked the UI and interactivity of several existing mobile apps, improving visual consistency and usability across the product suite.",
    tags: ["Figma", "Dashboard UI", "Mobile UI"],
  },
  {
    id: "easygo",
    title: "easyGo",
    role: "UI Designer",
    category: "Web UI",
    year: "Dec 2022–Jan 2023",
    description:
      "Focused on designing a web app for creating and managing trips. Worked in close collaboration with the development team to ensure designs were implemented accurately, bridging the gap between concept and shipped product.",
    tags: ["Figma", "Web UI", "Design Systems"],
  },
];

const ExperienceRow = ({ item, index, isOpen, onToggle }) => (
  <div
    className="border-b"
    style={{ borderColor: "rgba(255,255,255,0.06)" }}
  >
    {/* Header row */}
    <button
      className="w-full text-left py-6 flex items-center justify-between gap-4 group"
      onClick={onToggle}
    >
      <div className="flex items-center gap-6 min-w-0">
        <span
          className="font-mono text-[10px] tracking-widest shrink-0"
          style={{ color: "#333" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="font-grotesk text-lg md:text-xl truncate transition-colors duration-200"
          style={{
            fontWeight: 500,
            color: isOpen ? "#6757d4" : "#ebebeb",
          }}
        >
          {item.title}
        </span>
        <span
          className="hidden md:block font-mono text-[10px] uppercase tracking-[0.18em] shrink-0"
          style={{ color: "#444" }}
        >
          {item.category}
        </span>
      </div>
      <div className="flex items-center gap-5 shrink-0">
        <span
          className="hidden md:block font-mono text-[10px] tracking-widest"
          style={{ color: "#333" }}
        >
          {item.year}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center justify-center w-7 h-7 border shrink-0"
          style={{
            borderColor: isOpen
              ? "rgba(103,87,212,0.6)"
              : "rgba(255,255,255,0.1)",
            color: isOpen ? "#6757d4" : "#555",
          }}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path
              d="M5 1V9M1 5H9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </div>
    </button>

    {/* Expandable content */}
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-10 pt-2 max-w-[760px]">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.2em] mb-4"
              style={{ color: "#6757d4" }}
            >
              {item.role}
            </p>
            <p
              className="font-grotesk leading-relaxed mb-7"
              style={{ fontWeight: 300, color: "#888", fontSize: "0.95rem" }}
            >
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-[0.16em] px-3 py-1.5 border"
                  style={{
                    borderColor: "rgba(103,87,212,0.3)",
                    color: "#6757d4",
                    backgroundColor: "rgba(103,87,212,0.06)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const V2Work = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section
      id="work"
      className="py-24 lg:py-32"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="v2-section">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p
            className="font-mono text-[10px] uppercase tracking-[0.22em] mb-3"
            style={{ color: "#6757d4" }}
          >
            01
          </p>
          <h2
            className="font-grotesk"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1,
              color: "#ebebeb",
            }}
          >
            Work Experience
          </h2>
        </motion.div>

        <motion.div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {experiences.map((item, i) => (
            <ExperienceRow
              key={item.id}
              item={item}
              index={i}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default V2Work;
