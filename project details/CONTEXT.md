# GyanMarg — Current Project Context

## Current Status
- **Platform Version:** 1.0.2 (Production Polish & Mobile Optimization Pass Complete)
- **Active Environment:** Local Development server running on `http://localhost:8443`
- **Execution Mode:** Production-Ready & Verified against `project details/DESIGN.md`.
- **Current Phase:** Production-Quality UI/UX Polish and Comprehensive Mobile Optimization Pass completed across all 11 core MVP features and 16+ application screens with 0 TypeScript errors and clean Vite production builds.

## Current Objective
- Platform is fully polished, mobile-optimized (touch targets $\ge 44$px, slide-over navigation drawers, bottom mobile navbar, horizontal overflow prevention), and production-certified for Smart India Hackathon jury evaluation.
- All 11 Core MVP Features defined in [`MVP_FEATURES.md`](file:///e:/SIH_2026/igotkarmayogiclone/project%20details/MVP_FEATURES.md) are verified and operational across desktop, tablet, and mobile form factors.

## Completed Work
- **Phase 0–3:**
  - Vite + React 19 + TypeScript baseline with centralized tokens (`src/tokens.ts`).
  - Supabase Auth with Google OAuth 2.0 and 1-Click Role-Aware Demo switcher.
  - Route protection across `/student/*` and `/admin/*`.
- **Phase A (Core MVP Features 2 & 7a):**
  - MoSPI FrAC Diagnostic Assessment (`src/pages/student/Assessment.tsx`) with 10 questions and 20-minute timer.
  - Automatic Evaluation (`src/pages/student/AssessmentResults.tsx`) with domain scores and verifiable document citations.
  - Reactive competency store (`src/context/CompetencyContext.tsx`).
- **Phase B (Core MVP Feature 3):**
  - AI Competency Gap Analysis (`src/pages/student/GapAnalysis.tsx`) with dynamic dual-polygon RadarChart, Gap Variance BarChart, and Gap Matrix Table.
- **Phase C (Core MVP Features 8, 9 & 11):**
  - Canonical 22-course catalog (`src/data/igotCourses.ts`) with NSSTA TPAC badges.
  - Gap-prioritized Course Discovery (`src/pages/student/CourseDiscovery.tsx`) and dynamic details (`src/pages/student/CourseDetails.tsx`).
  - **roadmap.sh styled** visual learning path (`src/pages/student/LearningPath.tsx`) with connecting SVG spine, milestone hub nodes, subtopic chips, gap remediation badges (*"🎯 Bridges X% Gap"*), and slide-out inspector drawer.
- **Phase D (Core MVP Features 4 & 5):**
  - Admin Document Ingestion Workstation (`src/pages/admin/AssessmentManagement.tsx`) with pre-seeded MoSPI manuals (PDF/DOC), TOC viewer, and simulated parsing.
  - AI Question Generation Synthesizer with animated 3-step synthesis and verifiable citations.
  - Human-in-the-Loop (HITL) Review Dashboard with status filters, inline question editor, and published quiz bank.
- **Phase E (Core MVP Features 6, 7b & 10):**
  - **Feature 6: Interactive Learning Interface (`src/pages/student/LearningInterface.tsx`)**:
    - Route handling for all 22 courses (`/student/courses/:id/learn`).
    - Syllabus navigation with instructional lessons, lecture media simulation, and personal study notes.
    - Floating MoSPI AI Learning Mentor assistant panel.
    - Embedded **"🎯 Interactive Knowledge Check"** milestone with cited MCQs directly mapped to the course domain.
  - **Feature 7b: Automatic Evaluation & Instant Feedback**:
    - Post-submission instant evaluation showing percentage score, correct answers count, and a verified competency growth badge (e.g. `45% → 75% (+30 pts)`).
    - Clear impact callout showing the exact before-and-after change in Composite Skill Health.
    - Comprehensive per-question review with green/red status, selected vs correct options, technical rationales, and **Verifiable MoSPI Manual Citations** (`📄 Document Name • Chapter • Page`).
  - **Feature 10: Learner Progress Dashboard & Live Skill Health Score (`src/pages/student/Dashboard.tsx`)**:
    - Connected directly to `useCompetency()` displaying live **Composite Skill Health Score** (e.g., `58 / 100`).
    - Diagnostic assessment status card with completion date and baseline score.
    - Practice quiz counter tracking verified point improvements.
    - Recharts **Demonstrated Competency vs Target Benchmark** BarChart comparing all 5 MoSPI FrAC domains.
    - Dynamic **Priority Gap Remediation Banner** with direct 1-click CTA to start remediation.
    - **Verified Competency Growth Timeline** listing all completed quizzes with timestamps and score deltas.

## Completed Work (Production UI/UX Polish & Comprehensive Mobile Optimization Pass)
- **Design Tokens & Accessibility Standard (`src/index.css`):**
  - Full adherence to `project details/DESIGN.md`: Institutional Greens (`#123C2B`, `#1B3D29`), Saffron Gold (`#C6851B`), Warm Parchment & Ivory backgrounds (`#FAF7F0`, `#EDE8D8`), and semantic borders (`#D5CEBC`).
  - High-contrast `:focus-visible` accessibility rings, touch target minimum sizes ($\ge 44$px), mobile safe area paddings (`env(safe-area-inset-bottom)`), and responsive utility classes (`.table-responsive-container`, `.btn-touch`).
- **Responsive Layouts & Navigation:**
  - **`StudentLayout.tsx`**: Integrated mobile slide-over navigation drawer, topbar hamburger toggle, and sticky mobile bottom navbar (`Dashboard`, `Skill Path`, `Assessments`, `Courses`, `More`) for thumb-friendly one-hand navigation.
  - **`AdminLayout.tsx`**: Mobile slide-over navigation drawer with backdrop blur and responsive content padding (`p-4 sm:p-6 lg:p-7`).
  - **`PublicLayout.tsx`**: Clean wrapping header navigation with brand emblem stability on smaller screens.
- **Public & Authentication Screens:**
  - **`Landing.tsx`**: Slide-over mobile drawer, responsive hero grid (`grid-cols-1 lg:grid-cols-2`), and mobile-optimized feature cards.
  - **`Login.tsx` & `Register.tsx`**: Stacked responsive card layouts (`flex-col md:flex-row`) with full-width touch-friendly inputs.
  - **`Onboarding.tsx`**: Responsive option selection grids (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3`).
- **Assessment & Learning Experience:**
  - **`Assessment.tsx`**: Mobile question-first layout with collapsible palette drawer, 48px+ touch targets on options, and sticky bottom navigation bar.
  - **`AssessmentResults.tsx`**: Responsive score hero, auto-fitting KPI grid (`grid-cols-2 lg:grid-cols-4`), and stacked action buttons.
  - **`LearningInterface.tsx`**: Mobile slide-over syllabus drawer with backdrop and adaptive AI Mentor chat modal (`max-w-[360px]`).
- **Student Portal Core Screens:**
  - Responsive grids and horizontal scroll wrappers across `Dashboard.tsx`, `InterestedCourses.tsx`, `GapAnalysis.tsx`, `SkillProfile.tsx`, `LearningPath.tsx`, `CourseDiscovery.tsx`, `CourseDetails.tsx`, `Progress.tsx`, `Achievements.tsx`, and `Settings.tsx`.
- **Admin Portal Core Screens:**
  - Responsive charts (`grid-cols-1 lg:grid-cols-2`) and horizontal overflow protection on data tables across `AdminDashboard.tsx`, `StudentManagement.tsx`, `Reports.tsx`, `CourseManagement.tsx`, `AssessmentManagement.tsx`, and `CompetencyAnalytics.tsx`.

## Completed Work (Production Readiness, Legal & AI Discovery)
- **Legal & Trust Infrastructure:**
  - Authentically sourced Privacy Policy (`/privacy` via `src/pages/PrivacyPolicy.tsx`) detailing real profile attributes (`fullName`, `email`, `role`, `track`, `institution`, `year`), MoSPI FrAC competency assessments, local/session storage keys, Groq AI inference usage without public model training, and user data rights.
  - Comprehensive Terms of Use (`/terms` via `src/pages/TermsOfUse.tsx`) featuring educational and AI disclaimers, intellectual property terms, and jurisdiction in New Delhi, India.
  - Semantic, mobile-responsive Public Footer (`src/components/PublicFooter.tsx`) integrated across public layouts and Landing footer links.
- **Search Engine & Social Discovery:**
  - Lightweight dynamic `<SEO />` controller (`src/components/SEO.tsx`) managing titles, meta descriptions, canonical URLs, Open Graph tags, Twitter/X cards, and JSON-LD structured data.
  - Zero-leakage private indexing protection: automatically applies `robots="noindex, nofollow"` across all `/student/*` and `/admin/*` views.
  - Canonical base URL resolver (`getSiteBaseUrl()`) supporting `VITE_SITE_URL` with fallback to `https://gyanmarg.ai` preventing localhost emission.
- **Crawler & Machine-Readable AI Assets:**
  - `public/robots.txt`: Permits public indexable routes (`/`, `/privacy`, `/terms`, `/llms.txt`, `/sitemap.xml`) while explicitly disallowing private application areas (`/student/`, `/admin/`, `/login`, `/register`, `/onboarding`, `/api/`).
  - `public/sitemap.xml`: Valid XML sitemap covering indexable public pages.
  - `public/llms.txt`: Machine-readable overview for AI crawlers detailing capabilities, learner journeys, and AI transparency disclaimers.
  - `public/manifest.webmanifest`: PWA-compatible web manifest with brand emblems and palette.

## Important Files
| File Path | Role |
| :--- | :--- |
| `src/index.css` | Design tokens, responsive utilities, focus rings & mobile safe padding |
| `src/layouts/StudentLayout.tsx` | Student portal layout with mobile drawer & bottom navigation bar |
| `src/layouts/AdminLayout.tsx` | Admin portal layout with responsive mobile navigation drawer |
| `src/pages/student/Assessment.tsx` | Diagnostic assessment with mobile-first question palette drawer |
| `src/pages/student/LearningInterface.tsx` | Learning interface with mobile slide-over syllabus drawer & AI mentor |
| `src/pages/admin/StudentManagement.tsx` | Responsive student directory with horizontal table scroll & adaptive modals |
| `src/pages/admin/Reports.tsx` | Single-action Generate Report interface with Excel and CSV downloads |
| `src/pages/admin/CourseManagement.tsx` | Course catalog manager with responsive table & modal form grids |
| `src/pages/admin/AssessmentManagement.tsx` | Curriculum repository, AI question synthesizer & HITL review |
| `src/pages/admin/CompetencyAnalytics.tsx` | Cadre competency analytics, gap matrix table & deep dive modals |
| `src/components/SEO.tsx` | Dynamic metadata, canonical link, Open Graph, Twitter cards, and indexing controller |
| `src/components/PublicFooter.tsx` | Semantic public footer with trust, platform, and legal links |
| `src/pages/PrivacyPolicy.tsx` | Platform privacy policy reflecting authentic data schema and AI usage |
| `src/pages/TermsOfUse.tsx` | Terms of use with educational & AI disclaimers |
| `public/robots.txt` | Production crawler boundary rules and sitemap pointer |
| `public/sitemap.xml` | Standard XML sitemap for public indexable pages |
| `public/llms.txt` | Machine-readable AI discovery specification |
| `public/manifest.webmanifest` | Web application manifest |
| `src/utils/exportUtils.ts` | Client-side Excel (.xlsx) and CSV (.csv) export utilities |
| `src/context/CompetencyContext.tsx` | Reactive competency store |

## Environment / Configuration Notes
- Local Dev Server: `http://localhost:8443`
- TypeScript: `npx tsc --noEmit` verified with 0 errors.
- Production Build: `npm run build` verified clean (code 0).
- Base Production URL: `https://gyanmarg.ai`

## Last Updated
- 2026-09-18 22:50 IST

