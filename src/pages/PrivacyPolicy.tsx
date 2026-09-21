import React from "react";
import { Link } from "react-router";
import { C, FONT } from "@/tokens";
import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
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
        title="Privacy Policy | GyanMarg AI"
        description="Learn how GyanMarg AI collects, handles, and protects your account information, competency assessments, and learning data."
        canonicalPath="/privacy"
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
          <span style={{ color: C.accent, fontWeight: 600 }}>Privacy Policy</span>
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
            <span>Legal & Trust</span>
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
            Privacy Policy
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
          {/* Section 1: Introduction */}
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
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>GyanMarg AI</strong>. GyanMarg AI is an AI-assisted competency development, diagnostic
              assessment, and adaptive learning platform designed to help learners evaluate domain proficiencies,
              quantify competency gaps, and follow personalized learning paths.
            </p>
            <p>
              We respect your privacy and are committed to safeguarding the personal and academic data entrusted to us.
              This Privacy Policy explains how information is collected, processed, and maintained when you access or use
              the GyanMarg AI platform.
            </p>
          </section>

          {/* Section 2: Information We Collect */}
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
              2. Information We Collect
            </h2>
            <p>
              We only collect data strictly necessary to deliver the platform’s diagnostic, personalization, and
              educational services. Specifically, this includes:
            </p>

            <h3 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginTop: 16, marginBottom: 8 }}>
              A. Account & Profile Information
            </h3>
            <p>When you register or update your learner profile, we may collect:</p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li>Full Name (<code>fullName</code>)</li>
              <li>Email address (<code>email</code>)</li>
              <li>Authentication identifiers and credentials managed securely via Supabase Auth</li>
              <li>Assigned role (<code>student</code> or <code>admin</code>)</li>
              <li>Selected learner stream/track (e.g., Higher Education, Civil Services, Technology)</li>
              <li>Academic institution or organization (<code>institution</code>)</li>
              <li>Academic year or stage (<code>year</code>)</li>
              <li>Profile avatar image URL and initials</li>
            </ul>

            <h3 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginTop: 16, marginBottom: 8 }}>
              B. Learning & Assessment Data
            </h3>
            <p>As you actively engage with the curriculum and diagnostic assessments, we record:</p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li>Responses to diagnostic assessment questions (e.g., MoSPI FrAC competency frameworks)</li>
              <li>Assessment scores and baseline competency ratings across domain benchmarks</li>
              <li>Quantified competency gap variance metrics</li>
              <li>Course preferences, enrollments, and syllabus completion statuses</li>
              <li>Auto-sequenced roadmap milestones and progress flags</li>
              <li>Interactive knowledge check quiz submissions and score deltas</li>
              <li>Composite Skill Health measurements and milestone achievements</li>
            </ul>

            <h3 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginTop: 16, marginBottom: 8 }}>
              C. Local & Session Storage Data
            </h3>
            <p>
              To enable seamless offline-resilient operation and preserve assessment progress, the application uses your
              browser’s Local Storage and Session Storage. These store:
            </p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li>Recent assessment results and submission payloads for instant feedback display</li>
              <li>Course preference selections (<code>gyanmarg_course_prefs_*</code>)</li>
              <li>Active learning roadmap progression (<code>gyanmarg_roadmap_progress_*</code>)</li>
              <li>Session onboarding completion status (<code>gyanmarg_onboarding_completed_*</code>)</li>
              <li>Demo authentication state when using the platform’s 1-click evaluator demo mode</li>
            </ul>

            <h3 style={{ fontSize: 16, fontWeight: 700, color: C.dark, marginTop: 16, marginBottom: 8 }}>
              D. AI Interaction Data
            </h3>
            <p>
              When requesting personalized study recommendations, syllabus explanations, or interactive quiz synthesis,
              relevant academic context (such as your target competency domain and demonstrated score) is processed by
              our AI inference engine. <strong>We do not use your private interactions or assessment answers to train public foundational AI models.</strong>
            </p>
          </section>

          {/* Section 3: How We Use Information */}
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
              3. How We Use Your Information
            </h2>
            <p>Information gathered by GyanMarg AI is used solely for legitimate educational and platform purposes:</p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li><strong>Authentication & Access Control:</strong> Verifying your identity and enforcing role-based permissions between student and administrator portals.</li>
              <li><strong>Diagnostic Assessment & Gap Analysis:</strong> Measuring baseline competencies against standard frameworks and calculating personalized skill deficits.</li>
              <li><strong>Adaptive Learning Path Generation:</strong> Recommending tailored course sequences and study modules to remediate identified learning gaps.</li>
              <li><strong>Instructional Delivery & Progress Tracking:</strong> Recording course module completion, quiz evaluations, and competency growth over time.</li>
              <li><strong>Institutional Reporting:</strong> Providing aggregated cohort analytics and competency distribution reports to authorized institutional administrators.</li>
              <li><strong>System Reliability:</strong> Maintaining security, troubleshooting technical errors, and optimizing platform performance.</li>
            </ul>
          </section>

          {/* Section 4: AI & Personalization */}
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
              4. AI & Personalization
            </h2>
            <p>
              GyanMarg AI incorporates artificial intelligence to support your learning journey. It is important to
              distinguish between different categories of platform information:
            </p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li><strong>User-Provided Data:</strong> Your profile details, responses to diagnostic questions, and course selections.</li>
              <li><strong>Curriculum & Knowledge Base:</strong> Official course manuals, syllabus standards, and domain benchmarks.</li>
              <li><strong>Generated Recommendations:</strong> AI-synthesized learning paths, quiz rationales, and study suggestions generated dynamically based on your score profile.</li>
            </ul>
            <div
              style={{
                background: "rgba(198, 133, 27, 0.08)",
                borderLeft: `4px solid ${C.accent}`,
                padding: "16px 20px",
                borderRadius: "0 8px 8px 0",
                marginTop: 12,
              }}
            >
              <strong>Educational Disclaimer:</strong> AI-generated recommendations, quizzes, and explanations are
              provided strictly for supplemental educational guidance. While grounded in syllabus materials, AI outputs
              may contain occasional inaccuracies and should not replace authoritative textbook references, official
              examinations, or certified instructors.
            </div>
          </section>

          {/* Section 5: Data Sharing & Third-Party Processors */}
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
              5. Data Sharing & Third-Party Processors
            </h2>
            <p>
              We do not sell, rent, or trade your personal data to advertisers or third-party brokers. We share data only
              with the following vetted infrastructure providers essential for platform operations:
            </p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li>
                <strong>Supabase:</strong> Provides managed user authentication, session security, and PostgreSQL database storage.
              </li>
              <li>
                <strong>Groq Cloud AI:</strong> Provides high-speed inference for our AI recommendation engine and cited question synthesizer.
              </li>
            </ul>
            <p>
              All external services are bound by strict confidentiality and data-protection requirements consistent with
              applicable laws.
            </p>
          </section>

          {/* Section 6: Data Retention */}
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
              6. Data Retention
            </h2>
            <p>
              We retain personal data and academic records only for as long as your account remains active or as
              reasonably needed to provide continuous educational services, satisfy administrative reporting requirements,
              and comply with applicable legal obligations. You may request account closure and deletion of your stored
              records at any time.
            </p>
          </section>

          {/* Section 7: Security Measures */}
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
              7. Data Security
            </h2>
            <p>
              We implement industry-standard safeguards to protect your personal information against unauthorized access,
              alteration, or loss:
            </p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li>Encrypted HTTPS (TLS) communication for all network requests</li>
              <li>Database-level Row Level Security (RLS) policies isolating user records</li>
              <li>Strict role-based authorization separating student and administrative functions</li>
              <li>Sanitization of client-side cache and session tokens</li>
            </ul>
            <p>
              While we strive to employ robust protective measures, no online service can guarantee absolute security.
              Users are responsible for safeguarding their login credentials.
            </p>
          </section>

          {/* Section 8: Your Rights */}
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
              8. User Rights & Data Choices
            </h2>
            <p>Depending on applicable regulations, you possess the right to:</p>
            <ul style={{ paddingLeft: 24, margin: "8px 0" }}>
              <li><strong>Access:</strong> Review your stored profile information and assessment history.</li>
              <li><strong>Correction:</strong> Update incorrect academic or profile attributes via the student settings portal.</li>
              <li><strong>Export:</strong> Download academic reports and competency progress in structured formats (e.g., CSV/Excel).</li>
              <li><strong>Deletion:</strong> Request permanent removal of your account and associated personal data by contacting our team.</li>
            </ul>
          </section>

          {/* Section 9: Children's Privacy */}
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
              9. Age Considerations
            </h2>
            <p>
              GyanMarg AI is designed for university students, competitive examination candidates, civil services
              aspirants, and adult professionals. It is not intended for use by children under the age of 16. We do not
              knowingly collect personal information from individuals under this age threshold.
            </p>
          </section>

          {/* Section 10: Policy Updates */}
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
              10. Changes to this Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect platform enhancements or changes in regulatory
              requirements. The latest revised date will always be prominently displayed at the top of this page.
            </p>
          </section>

          {/* Section 11: Contact */}
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
              11. Contact & Privacy Inquiries
            </h2>
            <p style={{ margin: 0, fontSize: 14.5 }}>
              For any questions, concerns, or requests regarding your personal data or this Privacy Policy, please contact
              our team at:{" "}
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
