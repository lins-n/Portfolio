import React from "react";
import { motion } from "framer-motion";

const stack = [
  {
    category: "Design",
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe XD", "Adobe InDesign"],
  },
  {
    category: "Development",
    tools: ["React", "React Native", "JavaScript", "HTML / CSS", "Tailwind CSS"],
  },
];

const V2Stack = () => {
  return (
    <section
      id="stack"
      className="py-24 lg:py-32"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="v2-section">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6757d4] mb-3">
            03
          </p>
          <h2
            className="font-grotesk text-[#ebebeb]"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          {stack.map((col, ci) => (
            <motion.div
              key={col.category}
              className="p-8 border-r border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6757d4] mb-6">
                {col.category}
              </p>
              <ul className="space-y-4">
                {col.tools.map((tool) => (
                  <li
                    key={tool}
                    className="font-grotesk text-[#888] text-base flex items-center gap-3 hover:text-[#ebebeb] transition-colors duration-150"
                    style={{ fontWeight: 400 }}
                  >
                    <span
                      className="inline-block w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#6757d4" }}
                    />
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* What I do - brief statement */}
        <motion.div
          className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <div className="lg:col-span-5">
            <p
              className="font-grotesk text-[#ebebeb]"
              style={{
                fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                fontWeight: 500,
                lineHeight: 1.3,
              }}
            >
              I design and build things that work as well as they look.
            </p>
          </div>
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center gap-6">
            {[
              {
                title: "Brand Identity",
                desc: "Logos, visual systems, and brand guidelines that give businesses a lasting presence.",
              },
              {
                title: "UI/UX Design",
                desc: "Interfaces for apps and websites that are intuitive, refined, and built to convert.",
              },
              {
                title: "Development",
                desc: "Clean, performant web builds from concept to code.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-5 pb-6 border-b"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <span
                  className="inline-block w-0.5 flex-shrink-0 mt-1"
                  style={{ backgroundColor: "#6757d4", minHeight: "1rem" }}
                />
                <div>
                  <p
                    className="font-grotesk text-[#ebebeb] text-sm mb-1"
                    style={{ fontWeight: 500 }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-grotesk text-[#555] text-sm leading-relaxed"
                    style={{ fontWeight: 300 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default V2Stack;
