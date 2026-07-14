import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quips = [
  "Let's build something.",
  "Open to work!",
  "Check out my projects ↑",
  "Based in Ghana 🇬🇭",
  "Nice to meet you!",
];

/* Blinking eye */
const Eye = ({ cx, cy }) => (
  <g>
    {/* cream surround */}
    <circle cx={cx} cy={cy} r={22} fill="#fff3e0" />
    {/* pupil, blinks */}
    <motion.g
      style={{ originX: `${cx}px`, originY: `${cy + 3}px` }}
      animate={{ scaleY: [1, 1, 0.05, 1, 1] }}
      transition={{
        duration: 0.4,
        repeat: Infinity,
        repeatDelay: 3.2,
        ease: "easeInOut",
        times: [0, 0.3, 0.5, 0.7, 1],
      }}
    >
      <circle cx={cx} cy={cy + 3} r={13} fill="#18112e" />
      {/* shine */}
      <circle cx={cx - 4} cy={cy - 3} r={4} fill="white" />
      <circle cx={cx + 5} cy={cy + 4} r={2} fill="rgba(255,255,255,0.4)" />
    </motion.g>
  </g>
);

const MascotSVG = () => (
  <svg
    width="110"
    height="135"
    viewBox="0 0 200 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: "visible" }}
  >
    {/* ── STICKER OUTLINE STACK ── */}
    {/* Yellow outer border */}
    <rect x="12" y="17" width="176" height="145" rx="44" fill="#fbbf24" />
    {/* Orange inner border */}
    <rect x="17" y="22" width="166" height="135" rx="40" fill="#f97316" />
    {/* Purple body */}
    <rect x="21" y="26" width="158" height="128" rx="38" fill="#6b5dd3" />

    {/* Body shine / gloss */}
    <ellipse cx="100" cy="44" rx="56" ry="14" fill="rgba(255,255,255,0.13)" />

    {/* ── EYEBROWS ── */}
    <path d="M 56 56 Q 74 46 92 55" stroke="#3a2c96" strokeWidth="5" strokeLinecap="round" fill="none" />
    <path d="M 108 55 Q 126 46 144 56" stroke="#3a2c96" strokeWidth="5" strokeLinecap="round" fill="none" />

    {/* ── EYES ── */}
    <Eye cx={74} cy={80} />
    <Eye cx={126} cy={80} />

    {/* ── MOUTH ── */}
    {/* dark mouth cavity */}
    <path d="M 66 116 Q 100 144 134 116 Q 134 130 100 134 Q 66 130 66 116 Z" fill="#2d1f7a" />
    {/* white teeth strip */}
    <path d="M 66 116 Q 100 126 134 116 Q 134 122 100 124 Q 66 122 66 116 Z" fill="white" />
    {/* pink tongue */}
    <ellipse cx="100" cy="132" rx="16" ry="9" fill="#f87171" />

    {/* LEFT ARM: thumb up (waving) */}
    <motion.g
      animate={{ rotate: [-6, 6, -6] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      style={{ originX: "22px", originY: "108px" }}
    >
      {/* upper arm */}
      <path d="M 22 108 Q 2 114 -4 100" stroke="#6b5dd3" strokeWidth="14" strokeLinecap="round" fill="none" />
      {/* fist */}
      <circle cx="-7" cy="94" r="13" fill="#6b5dd3" />
      {/* thumb pointing up */}
      <rect x="-14" y="74" width="11" height="22" rx="5.5" fill="#6b5dd3" />
      <ellipse cx="-8.5" cy="73" rx="5.5" ry="5" fill="#6b5dd3" />
    </motion.g>

    {/* RIGHT ARM: open palm */}
    <motion.g
      animate={{ rotate: [5, -5, 5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      style={{ originX: "178px", originY: "108px" }}
    >
      {/* upper arm */}
      <path d="M 178 108 Q 198 112 205 98" stroke="#6b5dd3" strokeWidth="14" strokeLinecap="round" fill="none" />
      {/* open hand */}
      <circle cx="207" cy="92" r="12" fill="#6b5dd3" />
      {/* fingers (3 small ovals fanning out) */}
      <ellipse cx="207" cy="79" rx="4" ry="8" fill="#6b5dd3" transform="rotate(-10 207 79)" />
      <ellipse cx="216" cy="82" rx="4" ry="7.5" fill="#6b5dd3" transform="rotate(10 216 82)" />
      <ellipse cx="198" cy="82" rx="4" ry="7.5" fill="#6b5dd3" transform="rotate(-25 198 82)" />
    </motion.g>

    {/* ── LEGS ── */}
    <rect x="62" y="150" width="30" height="46" rx="12" fill="#5648bb" />
    <rect x="108" y="150" width="30" height="46" rx="12" fill="#5648bb" />

    {/* ── FEET ── */}
    <ellipse cx="77" cy="198" rx="23" ry="11" fill="#463aaa" />
    <ellipse cx="123" cy="198" rx="23" ry="11" fill="#463aaa" />
  </svg>
);

const V2Mascot = () => {
  const [quipIndex, setQuipIndex] = useState(0);
  const [showBubble, setShowBubble] = useState(false);

  const handleClick = () => {
    setQuipIndex((i) => (i + 1) % quips.length);
    setShowBubble(true);
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center"
      style={{ userSelect: "none" }}
    >
      {/* Speech bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.94 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-3 px-4 py-2 font-mono text-[11px] tracking-wide whitespace-nowrap"
            style={{
              background: "#111",
              border: "1px solid rgba(103,87,212,0.45)",
              color: "#ebebeb",
            }}
          >
            {quips[quipIndex]}
            <span
              style={{
                position: "absolute",
                bottom: -6,
                left: "50%",
                transform: "translateX(-50%)",
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "6px solid rgba(103,87,212,0.45)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating wrapper */}
      <motion.button
        onClick={handleClick}
        onMouseLeave={() => setShowBubble(false)}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.94 }}
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        aria-label="Mascot"
      >
        <MascotSVG />
      </motion.button>

      {/* Ground shadow synced to float */}
      <motion.div
        animate={{ scaleX: [1, 0.65, 1], opacity: [0.3, 0.12, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 54,
          height: 7,
          borderRadius: "50%",
          background: "rgba(103,87,212,0.55)",
          filter: "blur(5px)",
          marginTop: 2,
        }}
      />
    </div>
  );
};

export default V2Mascot;
