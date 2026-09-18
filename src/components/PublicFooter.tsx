import React from "react";
import { Link } from "react-router";
import { C, FONT } from "@/tokens";

export default function PublicFooter() {
  return (
    <footer
      style={{
        background: "#0E1813",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        color: "#9EBEA8",
        fontFamily: FONT.body,
        padding: "48px 6% 32px",
        marginTop: "auto",
      }}
      aria-label="Public Footer"
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 36,
          marginBottom: 40,
        }}
      >
        {/* Brand & Mission Column */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <img
              src="/gyanmarg_logo.jpg"
              alt="GyanMarg AI Emblem"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                objectFit: "cover",
                border: "1.5px solid rgba(198, 133, 27, 0.75)",
              }}
            />
            <span
              style={{
                fontFamily: "'Unbounded', sans-serif",
                fontSize: 18,
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
              }}
            >
              GyanMarg <span style={{ color: C.accent }}>AI</span>
            </span>
          </div>
          <p
            style={{
              fontSize: 13.5,
              lineHeight: 1.65,
              color: "#9EBEA8",
              maxWidth: 320,
              margin: 0,
            }}
          >
            An AI-assisted competency development and diagnostic learning platform empowering learners to quantify
            skill gaps and advance through source-grounded curriculum pathways.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3
            style={{
              fontFamily: FONT.display,
              fontSize: 14,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Platform Navigation
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>
              <Link
                to="/"
                style={{
                  color: "#9EBEA8",
                  textDecoration: "none",
                  fontSize: 13.5,
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EBEA8")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                style={{
                  color: "#9EBEA8",
                  textDecoration: "none",
                  fontSize: 13.5,
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EBEA8")}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                style={{
                  color: "#9EBEA8",
                  textDecoration: "none",
                  fontSize: 13.5,
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EBEA8")}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Trust Column */}
        <div>
          <h3
            style={{
              fontFamily: FONT.display,
              fontSize: 14,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Trust & Transparency
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>
              <Link
                to="/privacy"
                style={{
                  color: "#9EBEA8",
                  textDecoration: "none",
                  fontSize: 13.5,
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EBEA8")}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                style={{
                  color: "#9EBEA8",
                  textDecoration: "none",
                  fontSize: 13.5,
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EBEA8")}
              >
                Terms of Use
              </Link>
            </li>
            <li>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9EBEA8",
                  textDecoration: "none",
                  fontSize: 13.5,
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EBEA8")}
              >
                XML Sitemap
              </a>
            </li>
            <li>
              <a
                href="/llms.txt"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#9EBEA8",
                  textDecoration: "none",
                  fontSize: 13.5,
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9EBEA8")}
              >
                AI Documentation (llms.txt)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar with Copyright & Legal Disclaimer */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          fontSize: 12.5,
          color: "rgba(158, 190, 168, 0.75)",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} GyanMarg AI. All rights reserved. Designed for competency-based learning.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <Link
            to="/privacy"
            style={{ color: "rgba(158, 190, 168, 0.75)", textDecoration: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(158, 190, 168, 0.75)")}
          >
            Privacy
          </Link>
          <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>
          <Link
            to="/terms"
            style={{ color: "rgba(158, 190, 168, 0.75)", textDecoration: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(158, 190, 168, 0.75)")}
          >
            Terms
          </Link>
          <span style={{ color: "rgba(255, 255, 255, 0.2)" }}>•</span>
          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(158, 190, 168, 0.75)", textDecoration: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(158, 190, 168, 0.75)")}
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
