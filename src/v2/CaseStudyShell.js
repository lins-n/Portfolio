import React from "react";
import { Link } from "react-router-dom";

import V2Nav from "./V2Nav";
import "./v2.css";

const CaseStudyShell = ({ children, meta, prev, next }) => {
  return (
    <div className="v2">
      <V2Nav />
      <main>{children}</main>

      {/* Project navigation */}
      <div
        className="v2-section py-14"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center justify-between">
          {prev ? (
            <Link to={prev.to} className="group flex items-center gap-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:-translate-x-1" style={{ color: "#6757d4" }}>
                <path d="M11 3L3 11M3 11H9M3 11V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-0.5" style={{ color: "#444" }}>Previous</p>
                <p className="font-grotesk text-sm text-[#ebebeb]" style={{ fontWeight: 500 }}>{prev.label}</p>
              </div>
            </Link>
          ) : <span />}

          <Link
            to="/#projects"
            className="font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 hover:text-[#6757d4]"
            style={{ color: "#444" }}
          >
            All Projects
          </Link>

          {next ? (
            <Link to={next.to} className="group flex items-center gap-3 text-right">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] mb-0.5" style={{ color: "#444" }}>Next</p>
                <p className="font-grotesk text-sm text-[#ebebeb]" style={{ fontWeight: 500 }}>{next.label}</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1" style={{ color: "#6757d4" }}>
                <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ) : <span />}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyShell;
