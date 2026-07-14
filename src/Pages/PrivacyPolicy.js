import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NAV_BG = "rgba(12,12,12,0.96)";
const ACCENT = "#6757d4";

const PolicyNav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[64px] flex items-center justify-between px-10"
      style={{
        background: scrolled ? NAV_BG : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <Link to="/" className="flex items-center gap-2.5">
        <span
          className="w-7 h-7 flex items-center justify-center font-grotesk text-[11px] shrink-0"
          style={{ fontWeight: 700, background: ACCENT, color: "#fff" }}
        >
          CN
        </span>
        <span className="font-grotesk text-sm hidden lg:block" style={{ color: "#ebebeb", fontWeight: 500 }}>
          Collins Nudekor
        </span>
      </Link>
      <Link
        to="/"
        className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#555] hover:text-[#ebebeb] transition-colors duration-200"
        style={{ textDecoration: "none" }}
      >
        ← Back
      </Link>
    </nav>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "2rem" }}>
    <h2 className="font-grotesk text-[#ebebeb] mb-4" style={{ fontSize: "1.05rem", fontWeight: 600 }}>
      {title}
    </h2>
    <div className="space-y-3">{children}</div>
  </div>
);

const P = ({ children }) => (
  <p className="font-grotesk text-[#666] leading-relaxed" style={{ fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.8 }}>
    {children}
  </p>
);

const PrivacyPolicy = () => (
  <div style={{ background: "#0c0c0c", color: "#ebebeb", minHeight: "100vh" }}>
    <PolicyNav />

    <div className="max-w-[760px] mx-auto px-6 lg:px-8 pt-32 pb-24">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] mb-5" style={{ color: ACCENT }}>
          Piktr App
        </p>
        <h1 className="font-grotesk text-[#ebebeb] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
          Privacy Policy
        </h1>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#333]">
          Effective date: 10 July 2026
        </p>
      </div>

      <P>
        Piktr ("we", "our", or "us") is committed to protecting your privacy.
        This policy explains what information we collect when you use the Piktr
        mobile app, how we use it, and the choices you have.
      </P>

      <Section title="1. Information We Collect">
        <P>
          <strong style={{ color: "#ebebeb", fontWeight: 500 }}>Account information.</strong>{" "}
          When you create an account we collect your username, email address, and
          a password (stored as a secure hash). You may optionally add a display
          name and profile photo.
        </P>
        <P>
          <strong style={{ color: "#ebebeb", fontWeight: 500 }}>Photos and content.</strong>{" "}
          Photos you submit for Daily Colour, Day-In-The-Life, or Colour Hunt
          challenges are uploaded to our servers. We do not access your device
          camera roll beyond the specific photo you choose to share.
        </P>
        <P>
          <strong style={{ color: "#ebebeb", fontWeight: 500 }}>Usage data.</strong>{" "}
          We collect basic interaction data (screens viewed, features used,
          session length) to improve the app. This data is not linked to your
          personal identity.
        </P>
        <P>
          <strong style={{ color: "#ebebeb", fontWeight: 500 }}>Device information.</strong>{" "}
          We collect your device type, operating system version, and app version
          for crash reporting and debugging purposes.
        </P>
      </Section>

      <Section title="2. How We Use Your Information">
        <P>We use the information we collect to:</P>
        <ul className="space-y-2 pl-4" style={{ listStyle: "disc", color: "#666" }}>
          {[
            "Operate and maintain your Piktr account",
            "Display your photos within the app to your friends and challenge groups",
            "Send you in-app notifications for new colour prompts and activity",
            "Improve features and fix bugs",
            "Comply with legal obligations",
          ].map((item) => (
            <li key={item} className="font-grotesk text-[#666] leading-relaxed" style={{ fontWeight: 300, fontSize: "0.95rem" }}>
              {item}
            </li>
          ))}
        </ul>
        <P>We do not sell your personal information to third parties.</P>
      </Section>

      <Section title="3. Third-Party Services">
        <P>
          Piktr uses the following third-party services to operate:
        </P>
        <ul className="space-y-2 pl-4" style={{ listStyle: "disc", color: "#666" }}>
          <li className="font-grotesk text-[#666] leading-relaxed" style={{ fontWeight: 300, fontSize: "0.95rem" }}>
            <strong style={{ color: "#ebebeb", fontWeight: 500 }}>Firebase (Google):</strong> authentication, real-time database, and push notifications. Governed by Google's Privacy Policy.
          </li>
          <li className="font-grotesk text-[#666] leading-relaxed" style={{ fontWeight: 300, fontSize: "0.95rem" }}>
            <strong style={{ color: "#ebebeb", fontWeight: 500 }}>Cloudinary:</strong> photo storage and delivery. Governed by Cloudinary's Privacy Policy.
          </li>
          <li className="font-grotesk text-[#666] leading-relaxed" style={{ fontWeight: 300, fontSize: "0.95rem" }}>
            <strong style={{ color: "#ebebeb", fontWeight: 500 }}>Expo (Expo Inc.):</strong> mobile app framework and over-the-air updates. Governed by Expo's Privacy Policy.
          </li>
        </ul>
      </Section>

      <Section title="4. Photos and User Content">
        <P>
          You retain full ownership of the photos you upload to Piktr. By
          submitting a photo, you grant Piktr a limited, non-exclusive licence to
          display that photo to other users within the app as part of the intended
          feature (Daily Colour feed, DITL story, Colour Hunt results).
        </P>
        <P>
          We do not use your photos to train machine learning models, share them
          with advertisers, or display them outside the app without your consent.
        </P>
      </Section>

      <Section title="5. Data Retention">
        <P>
          We retain your account data and photos for as long as your account is
          active. If you delete your account, your profile and all photos you
          submitted will be permanently deleted within 30 days.
        </P>
      </Section>

      <Section title="6. Children's Privacy">
        <P>
          Piktr is not directed at children under 13. We do not knowingly collect
          personal information from children under 13. If you believe a child has
          provided us with their information, contact us and we will delete it
          promptly.
        </P>
      </Section>

      <Section title="7. Your Rights">
        <P>You have the right to:</P>
        <ul className="space-y-2 pl-4" style={{ listStyle: "disc", color: "#666" }}>
          {[
            "Access the personal information we hold about you",
            "Request correction of inaccurate data",
            "Request deletion of your account and associated data",
            "Withdraw consent at any time by deleting your account",
          ].map((item) => (
            <li key={item} className="font-grotesk text-[#666] leading-relaxed" style={{ fontWeight: 300, fontSize: "0.95rem" }}>
              {item}
            </li>
          ))}
        </ul>
        <P>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:collinsnudekor@gmail.com" style={{ color: ACCENT }}>
            collinsnudekor@gmail.com
          </a>
          .
        </P>
      </Section>

      <Section title="8. Security">
        <P>
          We use industry-standard measures including encrypted connections (TLS)
          and Firebase's built-in security rules to protect your data. No method
          of transmission over the internet is 100% secure, and we cannot
          guarantee absolute security.
        </P>
      </Section>

      <Section title="9. Changes to This Policy">
        <P>
          We may update this Privacy Policy from time to time. When we do, we
          will update the effective date at the top and notify you via the app
          if the changes are material. Continued use of Piktr after changes
          constitutes your acceptance of the revised policy.
        </P>
      </Section>

      <Section title="10. Contact">
        <P>
          If you have any questions about this Privacy Policy, contact us at{" "}
          <a href="mailto:collinsnudekor@gmail.com" style={{ color: ACCENT }}>
            collinsnudekor@gmail.com
          </a>
          .
        </P>
      </Section>

      {/* Footer nav */}
      <div
        className="flex gap-6 mt-16 pt-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <Link to="/terms" className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#444] hover:text-[#ebebeb] transition-colors duration-200">
          Terms of Service →
        </Link>
        <Link to="/" className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#444] hover:text-[#ebebeb] transition-colors duration-200">
          Back to Portfolio
        </Link>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
