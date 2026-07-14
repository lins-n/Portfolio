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

const Terms = () => (
  <div style={{ background: "#0c0c0c", color: "#ebebeb", minHeight: "100vh" }}>
    <PolicyNav />

    <div className="max-w-[760px] mx-auto px-6 lg:px-8 pt-32 pb-24">
      {/* Header */}
      <div className="mb-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] mb-5" style={{ color: ACCENT }}>
          Piktr App
        </p>
        <h1 className="font-grotesk text-[#ebebeb] mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.1 }}>
          Terms of Service
        </h1>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#333]">
          Effective date: 10 July 2026
        </p>
      </div>

      <P>
        By downloading or using Piktr you agree to these Terms of Service.
        Please read them carefully. If you do not agree, do not use the app.
      </P>

      <Section title="1. About Piktr">
        <P>
          Piktr is a social photography app that lets users submit photos
          responding to daily colour prompts, document their day through
          Day-In-The-Life sequences, and participate in group Colour Hunt
          challenges. The app is developed and operated by Collins Nudekor
          ("we", "us").
        </P>
      </Section>

      <Section title="2. Eligibility">
        <P>
          You must be at least 13 years old to use Piktr. By creating an
          account, you confirm that you meet this age requirement. Users under
          18 must have parental or guardian consent.
        </P>
      </Section>

      <Section title="3. Your Account">
        <P>
          You are responsible for maintaining the confidentiality of your login
          credentials and for all activity that occurs under your account. Notify
          us immediately at{" "}
          <a href="mailto:collinsnudekor@gmail.com" style={{ color: ACCENT }}>
            collinsnudekor@gmail.com
          </a>{" "}
          if you believe your account has been compromised.
        </P>
        <P>
          You may not create an account on behalf of someone else, impersonate
          another person, or use a name that is offensive or violates any
          third-party rights.
        </P>
      </Section>

      <Section title="4. User Content">
        <P>
          You retain ownership of all photos and content you submit to Piktr.
          By submitting content, you grant us a limited, non-exclusive,
          royalty-free licence to store, display, and distribute that content
          to other users within the app as part of the feature you used.
        </P>
        <P>
          You represent and warrant that your content does not infringe any
          third-party rights and that you have the right to submit it.
        </P>
      </Section>

      <Section title="5. Prohibited Conduct">
        <P>You agree not to use Piktr to:</P>
        <ul className="space-y-2 pl-4" style={{ listStyle: "disc", color: "#666" }}>
          {[
            "Upload content that is illegal, harmful, threatening, abusive, defamatory, or obscene",
            "Harass, bully, or intimidate other users",
            "Upload photos containing nudity, graphic violence, or hate speech",
            "Infringe the intellectual property rights of others",
            "Attempt to access or interfere with our systems or other users' accounts",
            "Use automated scripts or bots to interact with the app",
            "Submit false, misleading, or deceptive content",
          ].map((item) => (
            <li key={item} className="font-grotesk text-[#666] leading-relaxed" style={{ fontWeight: 300, fontSize: "0.95rem" }}>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="6. Content Moderation">
        <P>
          We reserve the right to remove any content that violates these Terms
          or that we determine, at our sole discretion, is harmful to the
          community. Repeated violations may result in account suspension or
          permanent termination.
        </P>
      </Section>

      <Section title="7. Intellectual Property">
        <P>
          The Piktr app, including its design, code, branding, and features
          (excluding user-submitted content), is owned by Collins Nudekor and
          protected by applicable intellectual property laws. You may not copy,
          modify, distribute, or reverse-engineer any part of the app without
          our written permission.
        </P>
      </Section>

      <Section title="8. Disclaimers">
        <P>
          Piktr is provided "as is" without warranties of any kind, express or
          implied. We do not guarantee that the app will be uninterrupted,
          error-free, or free of viruses. Your use of the app is at your own
          risk.
        </P>
        <P>
          We are not responsible for the content other users submit to the app.
          User-generated content does not reflect our views or values.
        </P>
      </Section>

      <Section title="9. Limitation of Liability">
        <P>
          To the fullest extent permitted by law, Collins Nudekor will not be
          liable for any indirect, incidental, special, or consequential damages
          arising out of your use or inability to use Piktr, even if we have been
          advised of the possibility of such damages.
        </P>
      </Section>

      <Section title="10. Termination">
        <P>
          You may delete your account at any time from the app settings. We
          may suspend or terminate your account at any time if we believe you
          have violated these Terms. Upon termination, your right to use Piktr
          ceases immediately.
        </P>
      </Section>

      <Section title="11. Changes to These Terms">
        <P>
          We may update these Terms from time to time. When we do, we will
          update the effective date and notify you via the app if changes are
          material. Continued use of Piktr after changes are posted constitutes
          acceptance of the revised Terms.
        </P>
      </Section>

      <Section title="12. Governing Law">
        <P>
          These Terms are governed by the laws of England and Wales. Any disputes
          arising under these Terms will be subject to the exclusive jurisdiction
          of the courts of England and Wales.
        </P>
      </Section>

      <Section title="13. Contact">
        <P>
          For questions about these Terms, contact us at{" "}
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
        <Link to="/privacy-policy" className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#444] hover:text-[#ebebeb] transition-colors duration-200">
          Privacy Policy →
        </Link>
        <Link to="/" className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#444] hover:text-[#ebebeb] transition-colors duration-200">
          Back to Portfolio
        </Link>
      </div>
    </div>
  </div>
);

export default Terms;
