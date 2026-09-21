import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import LanguageSelector from "@/components/LanguageSelector";
import PublicFooter from "@/components/PublicFooter";
import { TutorialProvider, useTutorial } from "@/context/TutorialContext";
import { TutorialOverlay } from "@/components/tutorial";
import { useLanguage } from "@/context/LanguageContext";
import { C, FONT } from "@/tokens";

function PublicLayoutContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { startTutorial } = useTutorial();

  const isLanding = location.pathname === "/";

  // Check if URL query asks for tour (?tour=true)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("tour") === "true") {
      // Small timeout to allow landing elements to paint
      const timer = setTimeout(() => {
        startTutorial();
        // Clean query param from URL without reloading
        window.history.replaceState({}, "", location.pathname);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.search, startTutorial]);

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        fontFamily: FONT.body,
        background: C.bg,
        position: "relative",
      }}
    >
      {/* ── Top Header on Non-Landing Public Pages (Login, Register, Onboarding) ── */}
      {!isLanding && (
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 100,
            background: "#0E1813",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "0 14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: 64,
            backdropFilter: "blur(12px)",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Logo & Platform Name */}
          <div
            onClick={() => navigate("/")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
          >
            <img
              src="/gyanmarg_logo.jpg"
              alt="GyanMarg AI Logo"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                objectFit: "cover",
                border: "1.5px solid rgba(198, 133, 27, 0.75)",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: "clamp(16px, 3.5vw, 20px)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                GyanMarg
              </span>
              <span
                style={{
                  fontFamily: "'Unbounded', sans-serif",
                  fontSize: 11,
                  fontWeight: 800,
                  color: C.accent,
                  background: "rgba(198, 133, 27, 0.22)",
                  border: "1px solid rgba(198, 133, 27, 0.5)",
                  borderRadius: 6,
                  padding: "1px 5px",
                }}
              >
                AI
              </span>
            </div>
          </div>

          {/* Right Controls: Tour button, Language Selector, Back to Home */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <button
              type="button"
              onClick={() => navigate("/?tour=true")}
              className="hidden sm:flex"
              style={{
                background: "rgba(198, 133, 27, 0.16)",
                border: `1.5px solid ${C.accent}60`,
                borderRadius: 20,
                padding: "6px 14px",
                fontFamily: FONT.body,
                fontSize: 12.5,
                fontWeight: 700,
                color: C.accent,
                cursor: "pointer",
                alignItems: "center",
                gap: 6,
                minHeight: 38,
                transition: "all 0.18s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = C.accent;
                (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "rgba(198, 133, 27, 0.16)";
                (e.currentTarget as HTMLButtonElement).style.color = C.accent;
              }}
            >
              {t("take_tour")}
            </button>

            <LanguageSelector variant="compact" />

            <button
              type="button"
              onClick={() => navigate("/")}
              aria-label="Back to home"
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(255, 255, 255, 0.8)",
                fontFamily: FONT.body,
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                padding: "6px 8px",
                borderRadius: 8,
                minHeight: 38,
                display: "flex",
                alignItems: "center",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(255, 255, 255, 0.8)";
              }}
            >
              <span className="hidden sm:inline">{t("back_to_home")}</span>
              <span className="sm:hidden" style={{ fontSize: 16 }}>✕</span>
            </button>
          </div>
        </header>
      )}

      {/* Main Outlet */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Outlet />
      </div>

      {/* Footer on Legal Public Pages */}
      {(location.pathname === "/privacy" || location.pathname === "/terms") && <PublicFooter />}

      {/* Interactive Guided Tutorial Overlay (Works on all public pages) */}
      <TutorialOverlay />
    </div>
  );
}

export default function PublicLayout() {
  return (
    <TutorialProvider>
      <PublicLayoutContent />
    </TutorialProvider>
  );
}
