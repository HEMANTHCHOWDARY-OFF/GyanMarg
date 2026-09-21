import { useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router";
import { C, FONT } from "@/tokens";
import LanguageSelector from "@/components/LanguageSelector";
import { useAuth } from "@/context/AuthContext";
import SEO from "@/components/SEO";

const nav = [
  { to: "/student/dashboard",     icon: "⊞",  label: "Dashboard"            },
  { to: "/student/profile",       icon: "◎",  label: "Skill Profile"        },
  { to: "/student/assessment",    icon: "✎",  label: "Assessment"           },
  { to: "/student/gap-analysis",  icon: "⬡",  label: "Gap Analysis"         },
  { to: "/student/learning-path", icon: "⤑",  label: "Learning Path"        },
  { to: "/student/courses",       icon: "⊟",  label: "Course Discovery"     },
  { to: "/student/progress",      icon: "↗",  label: "Progress & Analytics" },
  { to: "/student/achievements",  icon: "◈",  label: "Achievements"         },
];

const bottom = [
  { to: "/student/settings", icon: "⚙", label: "Settings" },
];

export default function StudentLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { profile, signOut, isDemo } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

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
            <div style={{ fontSize: 9.5, color: "rgba(255,255,255,0.35)" }}>Learner Portal</div>
          </div>
        </div>
        {/* Mobile close button */}
        <button
          onClick={closeDrawer}
          className="md:hidden"
          aria-label="Close navigation drawer"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "none",
            color: "rgba(255,255,255,0.7)",
            width: 32,
            height: 32,
            borderRadius: 6,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          ✕
        </button>
      </div>

      {/* Student info */}
      <div style={{ padding: "14px 16px", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 32, height: 32, borderRadius: "50%", background: C.s1,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 700, color: "#fff", flexShrink: 0,
          overflow: "hidden",
        }}>
          {profile?.avatarUrl ? (
            <img src={profile.avatarUrl} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            profile?.initials || "PS"
          )}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {profile?.fullName || "Civil Service Learner"}
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.40)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {profile?.track || "Statistical Officer / Learner"} {isDemo && <span style={{ color: C.accent, fontSize: 9 }}>(Demo)</span>}
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: "auto", padding: "10px 10px" }}>
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
              fontWeight: isActive ? 600 : 400,
              fontSize: 13.5,
              minHeight: 40,
              transition: "all 0.15s",
              borderLeft: isActive ? `3px solid ${C.accent}` : "3px solid transparent",
            })}
          >
            <span style={{ fontSize: 16, width: 20, textAlign: "center", flexShrink: 0 }}>{item.icon}</span>
            <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom */}
      <div style={{ padding: "10px 10px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        {bottom.map(item => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={closeDrawer}
            style={({ isActive }) => ({
              display: "flex", alignItems: "center", gap: 10,
              padding: "10px 12px", borderRadius: 8, marginBottom: 4,
              textDecoration: "none",
              background: isActive ? `${C.accent}22` : "transparent",
              color: isActive ? C.accent : "rgba(255,255,255,0.55)",
              fontSize: 13.5,
              minHeight: 40,
            })}
          >
            <span style={{ fontSize: 16, width: 20, textAlign: "center" }}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "10px 12px", borderRadius: 8, width: "100%",
            background: "transparent", border: "none", cursor: "pointer",
            color: "rgba(255,255,255,0.45)", fontSize: 13.5, textAlign: "left",
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
      <SEO title="Learner Portal | GyanMarg AI" robots="noindex, nofollow" />

      {/* ── Desktop Sidebar ──────────────────────────────────────────── */}
      <aside
        className="hidden md:flex"
        style={{
          width: 240,
          flexShrink: 0,
          background: C.sidebarBg,
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
            background: "rgba(18, 43, 29, 0.65)",
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
              background: C.sidebarBg,
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
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", minWidth: 0 }}>
        {/* Topbar */}
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
              <span className="hidden sm:inline" style={{ fontSize: 12, color: C.faint }}>Learner Portal</span>
              <span className="hidden sm:inline" style={{ color: C.border }}>›</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.dark, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                GyanMarg AI
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <LanguageSelector variant="compact" />
            <div
              onClick={() => navigate("/student/settings")}
              title={profile?.fullName || "Profile"}
              style={{
                width: 34, height: 34, borderRadius: "50%", background: C.s1,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 12, fontWeight: 700, color: "#fff", cursor: "pointer",
                overflow: "hidden", flexShrink: 0,
                border: "1.5px solid rgba(198, 133, 27, 0.6)",
              }}
            >
              {profile?.avatarUrl ? (
                <img src={profile.avatarUrl} alt="Avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              ) : (
                profile?.initials || "PS"
              )}
            </div>
          </div>
        </header>

        {/* Page content with safe padding */}
        <main
          className="mobile-bottom-pad"
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

        {/* ── Mobile Bottom Navigation Bar (Thumb Reach & Safe Area) ── */}
        <nav
          className="flex md:hidden items-center justify-around"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "calc(58px + env(safe-area-inset-bottom, 0px))",
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
            background: C.surface,
            borderTop: `1px solid ${C.border}`,
            zIndex: 9000,
            boxShadow: "0 -2px 10px rgba(0,0,0,0.06)",
          }}
        >
          {[
            { to: "/student/dashboard", icon: "⊞", label: "Dashboard" },
            { to: "/student/learning-path", icon: "⤑", label: "Path" },
            { to: "/student/assessment", icon: "✎", label: "Exam" },
            { to: "/student/courses", icon: "⊟", label: "Courses" },
          ].map((item) => {
            const active = location.pathname.startsWith(item.to);
            return (
              <NavLink
                key={item.to}
                to={item.to}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  textDecoration: "none",
                  color: active ? C.accent : C.muted,
                  fontWeight: active ? 700 : 500,
                  fontSize: 10,
                  minWidth: 54,
                  minHeight: 44,
                }}
              >
                <span style={{ fontSize: 18, lineHeight: 1 }}>{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            );
          })}
          <button
            onClick={() => setMobileMenuOpen(true)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              background: "transparent",
              border: "none",
              color: C.muted,
              fontWeight: 500,
              fontSize: 10,
              minWidth: 54,
              minHeight: 44,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>☰</span>
            <span>More</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

