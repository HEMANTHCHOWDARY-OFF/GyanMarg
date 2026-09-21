import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import { C, FONT } from "@/tokens";
import LanguageSelector from "@/components/LanguageSelector";
import { useAuth } from "@/context/AuthContext";
import { exportToExcel, exportToCSV } from "@/utils/exportUtils";
import SEO from "@/components/SEO";

const nav = [
  { to: "/admin/dashboard",   icon: "⊞", label: "Dashboard"              },
  { to: "/admin/students",    icon: "◎", label: "Civil Servant Management" },
  { to: "/admin/analytics",   icon: "↗", label: "Competency Analytics"   },
  { to: "/admin/courses",     icon: "⊟", label: "Course Management"      },
  { to: "/admin/assessments", icon: "✎", label: "Assessment Management"  },
  { to: "/admin/reports",     icon: "⬡", label: "Reports"                },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const { profile, signOut, isDemo } = useAuth();

  const [showExportModal, setShowExportModal] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3500);
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  const handleQuickExport = (format: "excel" | "csv" | "json") => {
    const timestamp = new Date().toISOString().split("T")[0];

    const kpiRows = [
      ["Category", "Metric", "Current Value", "Benchmark Target", "Learner Stream", "Evaluation"],
      ["Enrollment", "Total Enrolled Learners", 12840, 12000, "All Learner Streams", "Exceeded Target"],
      ["Engagement", "Active Weekly Learners", 8420, 8000, "All Learner Streams", "Healthy Participation"],
      ["Academics", "Average Completion Rate", "94%", "90%", "All Learner Streams", "Exceeded Benchmark"],
      ["Certifications", "Certificates Awarded", 3420, 3000, "All Learner Streams", "Exceeded Target"],
      ["Assessments", "Total Assessments Evaluated", 1240, 1000, "All Learner Streams", "On Schedule"],
    ];

    const cohortRows = [
      ["Cohort Track", "Enrolled Learners", "Percentage Share", "Avg Completion Rate", "Status"],
      ["Higher Education / University Scholars", 4880, "38%", "92%", "Active & Growing"],
      ["Civil Services & Policy Aspirants", 3340, "26%", "95%", "High Engagement"],
      ["In-Service Civil Servants", 2310, "18%", "96%", "Compliance Met"],
      ["Data Science & AI Scholars", 1540, "12%", "89%", "Fast Velocity"],
      ["Working Professionals & Upskillers", 770, "6%", "84%", "Steady Progress"],
    ];

    const competencyRows = [
      ["Domain", "Required Benchmark", "Demonstrated Score", "Gap / Deficit", "Target Cohort", "Evaluation"],
      ["Ethics & Integrity", 80, 84, "+4", "All Cohorts", "Benchmark Met"],
      ["Governance & Public Policy", 75, 78, "+3", "Civil Services & Aspirants", "Benchmark Met"],
      ["Data Science & Applied AI", 75, 82, "+7", "Tech & University Scholars", "Benchmark Met"],
      ["Applied Engineering & Systems", 75, 79, "+4", "Tech Scholars & Engineers", "Benchmark Met"],
      ["Constitutional & Administrative Law", 70, 68, "-2", "All Learner Streams", "Minor Gap"],
      ["Public Finance & GeM Procurement", 70, 65, "-5", "Civil Servants & Aspirants", "Remediation Suggested"],
    ];

    if (format === "excel") {
      exportToExcel(`GyanMarg_Universal_Learner_Executive_Brief_${timestamp}`, [
        {
          sheetName: "Executive Summary",
          headers: kpiRows[0] as string[],
          rows: kpiRows.slice(1),
        },
        {
          sheetName: "Cohort Distribution",
          headers: cohortRows[0] as string[],
          rows: cohortRows.slice(1),
        },
        {
          sheetName: "Competency Metrics",
          headers: competencyRows[0] as string[],
          rows: competencyRows.slice(1),
        },
      ]);
      triggerToast("Downloaded Executive Brief in Microsoft Excel (.xlsx) format.");
    } else if (format === "csv") {
      const allHeaders = ["Category", "Metric", "Value", "Benchmark", "Learner Cohort", "Status"];
      const allRows = [
        ["Learners", "Total Enrolled", 12840, 12000, "All Learner Streams", "Exceeded"],
        ["Learners", "Active Civil Servants", 8420, 8000, "All Learner Streams", "Healthy"],
        ["Academics", "Average Completion Rate", "94%", "90%", "All Learner Streams", "Exceeded"],
        ["Competency", "Ethics & Integrity", "84%", "80%", "Civil Services & University", "Met"],
        ["Competency", "Governance & Policy", "78%", "75%", "Civil Services & Policy Aspirants", "Met"],
        ["Competency", "Data Science & AI", "82%", "75%", "Tech & University Scholars", "Met"],
        ["Competency", "Constitutional & Legal", "68%", "70%", "All Learner Streams", "Minor Gap"],
        ["Competency", "Applied Engineering", "79%", "75%", "Tech Scholars", "Met"],
        ["Competency", "Public Finance & Management", "65%", "70%", "Civil Servants & Aspirants", "Minor Gap"],
        ["Certifications", "Certificates Issued", 3420, 3000, "All Learner Streams", "Exceeded"],
      ];

      exportToCSV(`GyanMarg_Universal_Learner_Executive_Brief_${timestamp}`, allHeaders, allRows);
      triggerToast("Downloaded Executive Brief in CSV (.csv) format.");
    } else {
      const jsonReport = {
        title: "GyanMarg AI — Comprehensive Institutional & Civil Servant Competency Brief",
        generatedAt: new Date().toISOString(),
        author: profile?.fullName || "Dr. Anand Kumar",
        institution: profile?.institution || "Director of Learning & Competency",
        kpis: {
          totalLearners: 12840,
          activeLearners: 8420,
          avgCompletionRate: "94%",
          certificatesIssued: 3420,
        },
        cohortDistribution: {
          universityScholars: "38%",
          civilServicesAspirants: "26%",
          inServiceCivilServants: "18%",
          techScholars: "12%",
          workingProfessionals: "6%",
        },
        competencies: [
          { domain: "Ethics & Integrity", average: 84, status: "Benchmark Met" },
          { domain: "Governance & Administration", average: 78, status: "Benchmark Met" },
          { domain: "Data Science & AI", average: 82, status: "Benchmark Met" },
          { domain: "Constitutional & Legal", average: 68, status: "Minor Gap" },
          { domain: "Applied Engineering", average: 79, status: "Benchmark Met" },
          { domain: "Public Finance & Management", average: 65, status: "Moderate Gap" },
        ],
      };
      const blob = new Blob([JSON.stringify(jsonReport, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `GyanMarg_Learner_Competency_Brief_${timestamp}.json`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      triggerToast("Downloaded Executive Summary in JSON (.json) format.");
    }
    setShowExportModal(false);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeDrawer = () => setMobileMenuOpen(false);

  const renderNavContent = () => (
    <>
      {/* Logo */}
      <div style={{ padding: "18px 20px 14px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: C.accent, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <svg viewBox="0 0 32 32" fill="none" width={18} height={18}>
              <path d="M16 3C16 3 8 9 8 17a8 8 0 0016 0C24 9 16 3 16 3z" fill="#fff"/>
              <circle cx="16" cy="17" r="3" fill={C.accent}/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily: FONT.display, fontSize: 13, fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
              GyanMarg <span style={{ color: C.accent }}>AI</span>
            </div>
            <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.35)" }}>Admin Portal</div>
          </div>
        </div>
        {/* Mobile close button */}
        <button
          onClick={closeDrawer}
          className="flex md:hidden items-center justify-center"
          aria-label="Close navigation drawer"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "none",
            color: "rgba(255,255,255,0.7)",
            width: 32,
            height: 32,
            borderRadius: 6,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          ✕
        </button>
      </div>

      {/* Admin info */}
      <div style={{ padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%", background: C.accent,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, fontWeight: 700, color: "#fff", flexShrink: 0,
          overflow: "hidden",
        }}>
          {profile?.avatarUrl ? (
            <img src={profile.avatarUrl} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            profile?.initials || "DA"
          )}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {profile?.fullName || "Dr. Anand Kumar"}
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.40)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {profile?.institution || "Training Director · DOPT"} {isDemo && <span style={{ color: C.accent, fontSize: 9 }}>(Demo)</span>}
          </div>
        </div>
      </div>

      <nav style={{ flex: 1, padding: "10px 10px", overflowY: "auto" }}>
        {nav.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={closeDrawer}
            style={({ isActive }) => ({
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 12px", borderRadius: 8, marginBottom: 3,
              textDecoration: "none",
              background: isActive ? `${C.accent}22` : "transparent",
              color: isActive ? C.accent : "rgba(255,255,255,0.65)",
              fontWeight: isActive ? 600 : 400, fontSize: 13.5,
              minHeight: 40,
              borderLeft: isActive ? `3px solid ${C.accent}` : "3px solid transparent",
            })}
          >
            <span style={{ fontSize: 16, width: 20, textAlign: "center", flexShrink: 0 }}>{item.icon}</span>
            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div style={{ padding: "10px 10px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <button
          onClick={handleLogout}
          style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 12px", borderRadius: 8, width: "100%",
            background: "transparent", border: "none", cursor: "pointer",
            color: "rgba(255,255,255,0.45)", fontSize: 13.5,
            minHeight: 40,
          }}
        >
          <span style={{ fontSize: 16, width: 20, textAlign: "center" }}>⏻</span>
          Log out
        </button>
      </div>
    </>
  );

  return (
    <div style={{ display: "flex", height: "100dvh", fontFamily: FONT.body, background: C.bg, overflow: "hidden" }}>
      <SEO title="Admin Console | GyanMarg AI" robots="noindex, nofollow" />

      {/* ── Desktop Sidebar ──────────────────────────────────────────── */}
      <aside
        className="hidden md:flex"
        style={{
          width: 240,
          flexShrink: 0,
          background: "#0F2318",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {renderNavContent()}
      </aside>

      {/* ── Mobile Slide-Over Drawer & Backdrop ──────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            background: "rgba(15, 35, 24, 0.65)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
          }}
          onClick={closeDrawer}
        >
          <aside
            style={{
              width: 280,
              maxWidth: "85vw",
              height: "100%",
              background: "#0F2318",
              display: "flex",
              flexDirection: "column",
              boxShadow: "4px 0 24px rgba(0,0,0,0.4)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {renderNavContent()}
          </aside>
        </div>
      )}

      {/* ── Main content ──────────────────────────────────────────────── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative", minWidth: 0 }}>
        <header style={{
          height: 56, flexShrink: 0,
          background: C.surface, borderBottom: `1px solid ${C.border}`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 14px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0, flex: 1 }}>
            {/* Hamburger Button (mobile only) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex md:hidden items-center justify-center"
              aria-label="Open navigation menu"
              style={{
                background: "transparent",
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                width: 38,
                height: 38,
                color: C.dark,
                cursor: "pointer",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              ☰
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0, overflow: "hidden" }}>
              <span className="hidden sm:inline" style={{ fontSize: 12, color: C.faint }}>Admin Portal</span>
              <span className="hidden sm:inline" style={{ color: C.border }}>›</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.dark, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                GyanMarg AI
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
            <LanguageSelector variant="compact" />
            <button
              onClick={() => setShowExportModal(true)}
              style={{
                background: C.bg,
                border: `1px solid ${C.border}`,
                borderRadius: 8,
                padding: "6px 12px",
                fontSize: 12,
                fontWeight: 600,
                color: C.dark,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 6,
                minHeight: 36,
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#EBE5D8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = C.bg)}
            >
              <span>⚡</span>
              <span className="hidden sm:inline">Generate Report</span>
            </button>
            <div
              title={profile?.fullName || "Admin Profile"}
              style={{
                width: 32, height: 32, borderRadius: "50%", background: C.accent,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, color: "#fff",
                overflow: "hidden", flexShrink: 0,
              }}
            >
              {profile?.avatarUrl ? (
                <img src={profile.avatarUrl} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                profile?.initials || "DA"
              )}
            </div>
          </div>
        </header>

        {/* Global Toast Alert */}
        {toast && (
          <div
            style={{
              position: "absolute",
              top: 68,
              right: 16,
              left: 16,
              maxWidth: 400,
              marginLeft: "auto",
              zIndex: 9999,
              background: C.dark,
              color: "#fff",
              padding: "10px 18px",
              borderRadius: 8,
              boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <span style={{ color: C.s1, fontSize: 16 }}>✓</span>
            <span style={{ flex: 1 }}>{toast}</span>
            <button
              onClick={() => setToast(null)}
              style={{ background: "transparent", border: "none", color: "#aaa", cursor: "pointer", marginLeft: 8, fontSize: 14 }}
            >
              ✕
            </button>
          </div>
        )}

        <main
          style={{
            flex: 1,
            overflowY: "auto",
            overflowX: "hidden",
            padding: "16px 14px",
            boxSizing: "border-box",
          }}
        >
          <Outlet />
        </main>
      </div>

      {/* Quick Export Executive Summary Modal */}
      {showExportModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15, 35, 24, 0.65)",
            backdropFilter: "blur(4px)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
          onClick={() => setShowExportModal(false)}
        >
          <div
            style={{
              background: C.surface,
              borderRadius: 14,
              width: "100%",
              maxWidth: 480,
              maxHeight: "calc(100dvh - 32px)",
              overflowY: "auto",
              boxShadow: "0 20px 48px rgba(0,0,0,0.25)",
              border: `1px solid ${C.border}`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "16px 20px", borderBottom: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <h2 style={{ fontFamily: FONT.display, fontSize: 17, fontWeight: 700, margin: 0, color: C.dark }}>
                  Generate Report
                </h2>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: C.muted }}>
                  Extract executive capacity & civil servant metrics
                </p>
              </div>
              <button
                onClick={() => setShowExportModal(false)}
                style={{ background: "transparent", border: "none", fontSize: 18, cursor: "pointer", color: C.muted, padding: 4 }}
              >
                ✕
              </button>
            </div>

            <div style={{ padding: "16px 20px" }}>
              <div style={{ fontSize: 13, color: C.muted, marginBottom: 14 }}>
                Select export format:
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 20 }}>
                {/* Excel Option */}
                <div
                  onClick={() => handleQuickExport("excel")}
                  style={{
                    border: `2px solid ${C.s1}`,
                    borderRadius: 12,
                    padding: "20px 16px",
                    cursor: "pointer",
                    background: "#F2FBF6",
                    textAlign: "center",
                    position: "relative",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(30,107,66,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      background: C.s1,
                      color: "#fff",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "2px 6px",
                      borderRadius: 10,
                    }}
                  >
                    Recommended
                  </span>
                  <div style={{ fontSize: 32, marginBottom: 6 }}>📗</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: C.dark }}>Excel</div>
                  <div style={{ fontSize: 11, color: C.muted, marginTop: 4, lineHeight: 1.3 }}>
                    Microsoft Excel (.xlsx) workbook
                  </div>
                </div>

                {/* CSV Option */}
                <div
                  onClick={() => handleQuickExport("csv")}
                  style={{
                    border: `1px solid ${C.border}`,
                    borderRadius: 12,
                    padding: "20px 16px",
                    cursor: "pointer",
                    background: C.bg,
                    textAlign: "center",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = C.accent;
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 6px 16px rgba(198,133,27,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = C.border;
                    e.currentTarget.style.background = C.bg;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div style={{ fontSize: 32, marginBottom: 6 }}>📊</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: C.dark }}>CSV</div>
                  <div style={{ fontSize: 11, color: C.muted, marginTop: 4, lineHeight: 1.3 }}>
                    Standard Comma Separated (.csv)
                  </div>
                </div>
              </div>

              <div style={{ background: "#F5F2EB", borderRadius: 8, padding: "10px 14px", fontSize: 12, color: C.muted, display: "flex", gap: 8, alignItems: "center" }}>
                <span>💡</span>
                <span>For customized department and month filter reports, visit the Reports page.</span>
              </div>
            </div>

            <div style={{ padding: "14px 24px", background: C.bg, borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "flex-end", gap: 10 }}>
              <button
                onClick={() => setShowExportModal(false)}
                style={{
                  background: "transparent",
                  border: `1px solid ${C.border}`,
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontSize: 13,
                  fontFamily: FONT.body,
                  color: C.muted,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
