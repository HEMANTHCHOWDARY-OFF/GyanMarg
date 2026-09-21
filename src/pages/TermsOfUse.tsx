import React from "react";
import { Link } from "react-router";
import { C, FONT } from "@/tokens";
import SEO from "@/components/SEO";

export default function TermsOfUse() {
  const lastUpdated = "September 18, 2026";

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: C.bg,
        fontFamily: FONT.body,
        color: C.dark,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SEO
        title="Terms of Use | GyanMarg AI"
        description="Review the Terms of Use governing your access to GyanMarg AI, including platform usage, educational disclaimers, and AI-assisted learning tools."
        canonicalPath="/terms"
        ogType="article"
      />

      {/* Main Container */}
      <main
        style={{
          flex: 1,
          maxWidth: 900,
          width: "100%",
          margin: "0 auto",
          padding: "32px 16px 64px",
        }}
      >
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: 13,
            color: C.muted,
            marginBottom: 24,
          }}
        >
          <Link
            to="/"
            style={{
              color: C.dark,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Home
          </Link>
          <span>/</span>
          <span style={{ color: C.accent, fontWeight: 600 }}>Terms of Use</span>
        </nav>

        {/* Header Title Section */}
        <header
          style={{
            borderBottom: `1px solid ${C.border}`,
            paddingBottom: 28,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "4px 12px",
              background: "rgba(198, 133, 27, 0.12)",
              border: `1px solid ${C.accent}40`,
              borderRadius: 20,
              fontSize: 12,
              fontWeight: 700,
              color: C.accent,
              marginBottom: 16,
            }}
          >
            <span>Platform Agreement</span>
            <span>•</span>
            <span>Version 1.0</span>
          </div>
          <h1
            style={{
              fontFamily: FONT.display,
              fontSize: "clamp(28px, 4vw, 38px)",
              fontWeight: 800,
              color: C.dark,
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Terms of Use
          </h1>
          <p
            style={{
              fontSize: 14,
              color: C.muted,
              margin: 0,
            }}
          >
            Last Updated: <strong>{lastUpdated}</strong>
          </p>
        </header>

        {/* Content Body */}
        <article
          style={{
            lineHeight: 1.75,
            fontSize: 15,
            color: "#2C3E33",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {/* Section 1: Acceptance of Terms */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or registering for an account on <strong>GyanMarg AI</strong> (&ldquo;the
              Platform&rdquo;), you acknowledge that you have read, understood, and agreed to be bound by these Terms
              of Use (&ldquo;Terms&rdquo;) and our Privacy Policy. If you do not agree to these Terms, you must
              discontinue use of the Platform immediately.
            </p>
          </section>

          {/* Section 2: Description of Service */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              2. Description of Service
            </h2>
            <p>
              GyanMarg AI is an educational platform providing competency-gap diagnostics, personalized learning
              pathways, and curriculum discovery. The core services provided by the Platform include:
            </p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li>Adaptive diagnostic assessments evaluating baseline domain competencies</li>
              <li>Multi-axis skill gap quantification and radar benchmarking</li>
              <li>Dynamically sequenced learning roadmaps linking foundational courses to remediate skill gaps</li>
              <li>Curated course discovery aligned with recognized domain frameworks</li>
              <li>Interactive learning modules featuring syllabus-grounded knowledge checks and instant feedback</li>
              <li>AI-assisted study mentorship and contextual guidance</li>
              <li>Institutional administrative reporting and cohort analytics</li>
            </ul>
          </section>

          {/* Section 3: User Accounts */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              3. User Accounts & Responsibilities
            </h2>
            <p>
              When creating an account on GyanMarg AI, you agree to provide true, accurate, and current information. You
              are solely responsible for maintaining the confidentiality of your credentials and for all activities that
              occur under your account. Sharing account credentials or granting unauthorized third parties access to your
              learner profile is strictly prohibited.
            </p>
          </section>

          {/* Section 4: Educational & AI Disclaimer */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              4. Educational & Artificial Intelligence Disclaimer
            </h2>
            <div
              style={{
                background: "rgba(198, 133, 27, 0.08)",
                borderLeft: `4px solid ${C.accent}`,
                padding: "16px 20px",
                borderRadius: "0 8px 8px 0",
                marginBottom: 14,
              }}
            >
              <strong>Important Notice:</strong> GyanMarg AI employs artificial intelligence technologies to assist with
              curriculum sequencing, question synthesis, and learning advice. All AI-generated outputs are intended
              solely for educational enrichment and self-study.
            </div>
            <p>You explicitly acknowledge that:</p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li>
                <strong>Independent Verification:</strong> AI-generated explanations, roadmap milestones, and study
                answers can occasionally contain inaccuracies. You should independently verify important academic,
                legal, or statistical information against official textbooks and primary government sources.
              </li>
              <li>
                <strong>No Official Guarantees:</strong> The Platform does not guarantee academic passing grades,
                government appointments, competitive examination outcomes, institutional certifications, or employment
                offers.
              </li>
              <li>
                <strong>Diagnostic Nature:</strong> Diagnostic tests and score ratings indicate self-assessed baseline
                proficiency and are not formal civil services recruitment evaluations.
              </li>
            </ul>
          </section>

          {/* Section 5: Courses & Intellectual Property */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              5. Intellectual Property & Course Materials
            </h2>
            <p>
              The GyanMarg AI software, brand identity, user interface design, diagnostic algorithms, and proprietary
              code are the intellectual property of GyanMarg AI and its licensors. Course syllabi, reference manuals,
              and citations remain the property of their respective publishing bodies.
            </p>
            <p>
              You are granted a personal, non-exclusive, non-transferable license to access course materials strictly for
              individual educational purposes. You may not copy, redistribute, scrape, reverse-engineer, or sell any
              portion of the Platform or its curated content without prior written permission.
            </p>
          </section>

          {/* Section 6: Acceptable Use */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              6. Acceptable Use Policy
            </h2>
            <p>While using GyanMarg AI, you agree that you will not:</p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li>Attempt to bypass authentication, elevate role privileges, or access other users&rsquo; records</li>
              <li>Tamper with diagnostic scoring, automated quiz evaluations, or institutional reports</li>
              <li>Abuse, spam, or overwhelm platform APIs, AI endpoints, or database infrastructure</li>
              <li>Deploy automated bots, spiders, or scrapers against the platform without authorization</li>
              <li>Upload or inject malicious code, scripts, or vulnerabilities</li>
              <li>Impersonate any learner, civil servant, instructor, administrator, or institutional authority</li>
            </ul>
          </section>

          {/* Section 7: Third-Party Infrastructure */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              7. Third-Party Infrastructure
            </h2>
            <p>
              The Platform relies on external cloud providers, including Supabase (for database and authentication
              hosting) and Groq Cloud AI (for machine-learning inference). While we select reputable infrastructure
              partners, GyanMarg AI is not liable for intermittent service interruptions or disruptions originating from
              third-party systems.
            </p>
          </section>

          {/* Section 8: Availability & Service Modifications */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              8. Platform Availability & Modifications
            </h2>
            <p>
              We endeavor to maintain high platform availability; however, the service is provided on an &ldquo;as is&rdquo;
              and &ldquo;as available&rdquo; basis without warranties of any kind. We reserve the right to modify,
              upgrade, or temporarily suspend features for scheduled maintenance without prior notice.
            </p>
          </section>

          {/* Section 9: Limitation of Liability */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              9. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, GyanMarg AI, its contributors, and developers shall not be liable
              for any direct, indirect, incidental, special, or consequential damages resulting from your use of, or
              inability to use, the platform, including but not limited to loss of study data, academic evaluation
              discrepancies, or reliance on AI-generated suggestions.
            </p>
          </section>

          {/* Section 10: Termination */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              10. Account Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your account access at our discretion, without liability, if
              you breach these Terms, tamper with platform security, or engage in academic dishonesty.
            </p>
          </section>

          {/* Section 11: Governing Law & Jurisdiction */}
          <section>
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 20,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 12,
              }}
            >
              11. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India. Any legal dispute
              arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the
              competent courts situated in New Delhi, India.
            </p>
          </section>

          {/* Section 12: Contact */}
          <section
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: 12,
              padding: "24px 28px",
              marginTop: 12,
            }}
          >
            <h2
              style={{
                fontFamily: FONT.display,
                fontSize: 18,
                fontWeight: 700,
                color: C.dark,
                marginBottom: 8,
              }}
            >
              12. Questions or Concerns
            </h2>
            <p style={{ margin: 0, fontSize: 14.5 }}>
              For any questions regarding these Terms of Use, please reach out to us at:{" "}
              <a
                href="mailto:support@gyanmarg.ai"
                style={{
                  color: C.accent,
                  fontWeight: 600,
                  textDecoration: "underline",
                }}
              >
                support@gyanmarg.ai
              </a>
              .
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
