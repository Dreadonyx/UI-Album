import { lazy } from 'react';

const NeonNavbar = lazy(() => import('./components/NeonNavbar'));
const MinimalFooter = lazy(() => import('./components/MinimalFooter'));
const SidebarNav = lazy(() => import('./components/SidebarNav'));
const CommandPalette = lazy(() => import('./components/CommandPalette'));
const BreadcrumbPagination = lazy(() => import('./components/BreadcrumbPagination'));
const MorphingTabs = lazy(() => import('./components/MorphingTabs'));
const GlassHero = lazy(() => import('./components/GlassHero'));
const SplitHero = lazy(() => import('./components/SplitHero'));
const AuroraHero = lazy(() => import('./components/AuroraHero'));
const LaunchHero = lazy(() => import('./components/LaunchHero'));
const BrutalistLanding = lazy(() => import('./components/BrutalistLanding'));
const SaaSPricing = lazy(() => import('./components/SaaSPricing'));
const TestimonialWall = lazy(() => import('./components/TestimonialWall'));
const FeatureComparison = lazy(() => import('./components/FeatureComparison'));
const LogoMarquee = lazy(() => import('./components/LogoMarquee'));
const FAQAccordion = lazy(() => import('./components/FAQAccordion'));
const EditorialGrid = lazy(() => import('./components/EditorialGrid'));
const BentoGrid = lazy(() => import('./components/BentoGrid'));
const GradientButtons = lazy(() => import('./components/GradientButtons'));
const NeumorphicForm = lazy(() => import('./components/NeumorphicForm'));
const NewsletterCard = lazy(() => import('./components/NewsletterCard'));
const DashboardWidget = lazy(() => import('./components/DashboardWidget'));
const ProductGrid = lazy(() => import('./components/ProductGrid'));
const FloatingMusicPlayer = lazy(() => import('./components/FloatingMusicPlayer'));
const TypeSpecimen = lazy(() => import('./components/TypeSpecimen'));
const CyberpunkText = lazy(() => import('./components/CyberpunkText'));
const MacOSDock = lazy(() => import('./components/MacOSDock'));
const InteractiveTimeline = lazy(() => import('./components/InteractiveTimeline'));
const ExpandableFAB = lazy(() => import('./components/ExpandableFAB'));
const RetroTerminal = lazy(() => import('./components/RetroTerminal'));
const ArticleDetail = lazy(() => import('./components/ArticleDetail'));

// Display order of the category filter. Every entry's `category` must be listed here.
export const CATEGORIES = [
  'Navigation', 'Hero', 'Landing', 'Cards', 'Buttons', 'Forms', 'Inputs', 'Auth',
  'Dashboard', 'Feedback', 'Overlays', 'Commerce', 'Social', 'Media',
  'Typography', 'Motion', 'Developer', 'Mobile', 'Content',
];

const ENTRIES = [
  // ─── Navigation ───────────────────────────────────────────
  {
    title: 'Neon Navigation Bar', category: 'Navigation', component: NeonNavbar,
    accent: '#00ff88',
    palette: ['#00ff88', '#0a0a1a', '#00aa55', '#0d0f1a', '#1a2a1a'],
    tags: ['Navbar', 'Glow', 'Interactive'],
    fonts: ['DM Mono', 'Playfair Display'],
    prompt: 'Build a dark navigation bar with neon green (#00ff88) glowing active link indicators. Use DM Mono for nav links and Playfair Display for the brand logo. Each link has a pill-shaped hover state with rgba(0,255,136,0.12) background, a bottom glow line with box-shadow: 0 0 10px #00ff88, and a green circular avatar on the right. Active state uses border + background + glow shadow. Content area below shows the active section name in large serif text.',
    code: `.neon-nav { background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(0,255,136,0.08); }\n.active-link { color: #00ff88; background: rgba(0,255,136,0.12); border: 1px solid rgba(0,255,136,0.4); box-shadow: 0 0 15px rgba(0,255,136,0.15); }\n.indicator { height: 2px; background: #00ff88; box-shadow: 0 0 10px #00ff88; }`,
    usage: 'Best for high-tech SaaS dashboards or developer tools requiring high visual feedback.',
  },
  {
    title: 'Professional Minimal Footer', category: 'Navigation', component: MinimalFooter,
    accent: '#ffffff',
    palette: ['#0a0a14', '#ffffff', 'rgba(255,255,255,0.3)', 'rgba(255,255,255,0.05)'],
    tags: ['Footer', 'Navigation', 'Links'],
    fonts: ['Space Grotesk', 'Inter'],
    prompt: 'Design a clean, professional footer with a dark navy background. Left side: brand logo and a short description. Right side: multiple columns for categorized navigation links. Bottom: copyright text and small utility links separated by a subtle top border.',
    code: `.footer { background: #0a0a14; color: #fff; }\n.links-column { display: flex; flex-direction: column; gap: 10px; }`,
    usage: 'The standard for SaaS, corporate, or professional portfolio sites.',
  },
  {
    title: 'Collapsible Sidebar', category: 'Navigation', component: SidebarNav,
    accent: '#6366f1',
    palette: ['#6366f1', '#22d3ee', '#11141b', '#0b0d12', '#c7d2fe'],
    tags: ['Sidebar', 'App Shell', 'Collapsible'],
    fonts: ['Inter'],
    prompt: 'Build an app shell with a collapsible left sidebar on #0b0d12. The sidebar (#11141b, 200px wide, 68px when collapsed) has a gradient logo tile (#6366f1 → #22d3ee), grouped nav sections with 10px uppercase group labels, and icon + label rows. The active row gets rgba(99,102,241,0.14) background, #c7d2fe text and a 3px glowing indigo bar on its left edge. Show a count badge on Inbox. A "Collapse" button at the bottom animates width with cubic-bezier(0.16,1,0.3,1) and fades labels out. The main area shows a breadcrumb, page title and skeleton list rows.',
    code: `.sidebar { width: 200px; background: #11141b; border-right: 1px solid rgba(255,255,255,0.06); transition: width .35s cubic-bezier(.16,1,.3,1); }\n.sidebar.collapsed { width: 68px; }\n.nav-item.active { background: rgba(99,102,241,.14); color: #c7d2fe; }\n.nav-item.active::before { content: ''; position: absolute; left: 0; top: 8px; bottom: 8px; width: 3px; background: #6366f1; box-shadow: 0 0 10px #6366f1; }`,
    usage: 'The backbone of dashboards, admin panels and productivity apps with many sections.',
  },
  {
    title: 'Command Palette', category: 'Navigation', component: CommandPalette,
    accent: '#a78bfa',
    palette: ['#a78bfa', '#1e1b4b', '#18181b', '#09090b', '#fafafa'],
    tags: ['⌘K', 'Search', 'Keyboard'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Create a ⌘K command palette floating over a dark radial gradient (#1e1b4b → #09090b). The 440px panel uses rgba(24,24,27,0.92) with backdrop-filter: blur(16px), 14px radius and a large soft shadow. Top row: search icon, borderless input "Type a command or search…" and an ESC keycap. Results are grouped under small headers (Suggestions, Navigation); each row has an icon, label and keyboard shortcut keycaps in DM Mono. Arrow keys move a violet highlight (rgba(139,92,246,0.16)); typing filters live and shows an empty state. Footer shows "↑↓ navigate · ↵ select" and the result count.',
    code: `.palette { background: rgba(24,24,27,.92); backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,.09); border-radius: 14px; box-shadow: 0 24px 60px rgba(0,0,0,.55); }\n.item[aria-selected="true"] { background: rgba(139,92,246,.16); color: #ede9fe; }\nkbd { font: 10px 'DM Mono', monospace; padding: 2px 5px; border-radius: 4px; background: rgba(255,255,255,.06); }`,
    usage: 'Power-user navigation for SaaS apps, docs sites and developer tools.',
  },
  {
    title: 'Breadcrumbs & Pagination', category: 'Navigation', component: BreadcrumbPagination,
    accent: '#a8a29e',
    palette: ['#1c1917', '#fafaf9', '#e7e5e4', '#78716c', '#a8a29e'],
    tags: ['Breadcrumb', 'Pagination', 'Light'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Design a light (#fafaf9) navigation utilities panel with two sections, each labelled in 10px uppercase DM Mono. 1) Breadcrumb: Home (with a house icon) › Library › Components › Navigation, chevron separators in #d6d3d1, and the current page shown as a white pill with a 1px #e7e5e4 border and aria-current="page". 2) Pagination for 12 pages: Prev/Next buttons with chevrons (disabled state greyed out), numbered 36px square buttons, ellipsis gaps that adapt to the current page, and the active page filled #1c1917 with light text.',
    code: `.crumb[aria-current="page"] { background: #fff; border: 1px solid #e7e5e4; border-radius: 8px; font-weight: 600; }\n.page-btn { width: 36px; height: 36px; border-radius: 10px; }\n.page-btn[aria-current="page"] { background: #1c1917; color: #fafaf9; }`,
    usage: 'Deep content hierarchies, search results, tables and e-commerce listings.',
  },
  {
    title: 'Morphing Pill Tabs', category: 'Navigation', component: MorphingTabs,
    accent: '#c2410c',
    palette: ['#1f1d1a', '#f4f1ea', '#e7e2d6', '#c2410c', '#fffdf8'],
    tags: ['Tabs', 'Spring', 'Segmented'],
    fonts: ['Space Grotesk', 'Fraunces'],
    prompt: 'Build segmented tabs on a warm #f4f1ea background. The tab track is a #e7e2d6 pill with an inset shadow; a dark #1f1d1a pill indicator slides between four 104px tabs (Overview, Activity, Billing, Members) using a springy cubic-bezier(0.34,1.56,0.64,1). Active label turns cream. Below, a #fffdf8 content card fades and slides up on each change, showing "01 / 04" in burnt orange (#c2410c), the tab name in Fraunces 26px and a sentence of body copy. Use role="tablist", role="tab" and aria-selected.',
    code: `.track { display: flex; padding: 5px; border-radius: 999px; background: #e7e2d6; position: relative; }\n.indicator { position: absolute; width: 104px; border-radius: 999px; background: #1f1d1a; transition: transform .45s cubic-bezier(.34,1.56,.64,1); }\n.tab[aria-selected="true"] { color: #f4f1ea; }`,
    usage: 'Settings sections, pricing toggles and any view switcher with 2–5 options.',
  },

  // ─── Hero ─────────────────────────────────────────────────
  {
    title: 'Glassmorphism Hero', category: 'Hero', component: GlassHero,
    accent: '#8b5cf6',
    palette: ['#8b5cf6', '#06b6d4', '#ec4899', '#1a0533', '#0d1b3e'],
    tags: ['Glass', 'Backdrop-blur', 'CTA'],
    fonts: ['Playfair Display', 'DM Mono', 'Lora'],
    prompt: 'Create a hero section with a deep purple-to-navy gradient background and 3 blurred gradient orbs (violet, cyan, pink) positioned at corners. Center a frosted glass card using backdrop-filter: blur(20px), background: rgba(255,255,255,0.06), border: 1px solid rgba(255,255,255,0.12). Inside the card: a small uppercase label in DM Mono, a headline "The Future of Design Systems" in Playfair Display 28px, body text in Lora, and a gradient CTA button (#8b5cf6 → #6d28d9) with a purple glow shadow.',
    code: `.glass-card { background: rgba(255,255,255,0.06); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); }\n.cta { background: linear-gradient(135deg, #8b5cf6, #6d28d9); box-shadow: 0 4px 20px rgba(139,92,246,0.4); }`,
    usage: 'Perfect for landing pages that want to convey a modern, "next-gen" feeling with depth.',
  },
  {
    title: 'Minimal Split Hero', category: 'Hero', component: SplitHero,
    accent: '#8b5cf6',
    palette: ['#ffffff', '#1a1a1a', '#8b5cf6', '#ec4899', '#f3f4f6'],
    tags: ['Hero', 'Minimal', 'Split'],
    fonts: ['Fraunces', 'Inter', 'Space Grotesk'],
    prompt: 'Design a high-contrast split hero section. Left side: white background with elegant serif typography (Fraunces), a small uppercase label, and a primary CTA. Right side: light gray background with an abstract geometric shape or product placeholder with subtle shadows and gradients.',
    code: `.hero { display: flex; }\n.title { font-family: 'Fraunces', serif; }\n.right-pane { background: #f3f4f6; position: relative; }`,
    usage: 'Perfect for lifestyle brands, fashion, or modern e-commerce homepages.',
  },
  {
    title: 'Aurora Gradient Hero', category: 'Hero', component: AuroraHero,
    accent: '#a855f7',
    palette: ['#030712', '#22d3ee', '#a855f7', '#ec4899', '#22c55e'],
    tags: ['Aurora', 'Grid', 'Gradient Text'],
    fonts: ['Syne', 'Inter'],
    prompt: 'Create a dark SaaS hero on #030712 with a slowly drifting aurora: an oversized conic-gradient (cyan, violet, pink, green at ~30% alpha) blurred 60px and animated with a 14s translate/rotate/scale loop. Overlay a 40px line grid masked by a radial gradient so it fades at the edges. Centered content: an announcement pill ("New" gradient badge + "Realtime sync is live →"), a two-line headline in Syne 46px bold with a white-to-transparent vertical text gradient, a muted subheading, and two buttons: solid white "Start building" with a violet glow and a ghost "Book a demo".',
    code: `.aurora { position: absolute; inset: -40%; background: conic-gradient(from 180deg, #22d3ee33, #a855f755, #ec489944, #22c55e33, #22d3ee33); filter: blur(60px); animation: drift 14s ease-in-out infinite; }\n.grid { background-image: linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px); background-size: 40px 40px; mask-image: radial-gradient(ellipse 60% 60% at 50% 40%, #000 30%, transparent 75%); }\nh1 { background: linear-gradient(180deg, #fff 30%, rgba(255,255,255,.45)); -webkit-background-clip: text; color: transparent; }`,
    usage: 'Product launches and AI/dev-tool homepages that need instant wow-factor.',
  },
  {
    title: 'Waitlist Launch Hero', category: 'Hero', component: LaunchHero,
    accent: '#ea580c',
    palette: ['#fffbf5', '#ea580c', '#1c1917', '#fed7aa', '#78716c'],
    tags: ['Waitlist', 'Email Capture', 'Social Proof'],
    fonts: ['Instrument Serif', 'Inter', 'DM Mono'],
    prompt: 'Design a warm, editorial waitlist hero on #fffbf5 with a soft peach radial glow in the top-right. Headline in Instrument Serif 52px: "Your inbox, finally quiet." with "finally" in italic orange (#ea580c). Short supporting copy in Inter. An inline email form inside a white rounded container: borderless input + "Join waitlist" orange button that stays disabled until the email is valid. On submit, swap the form for a green success pill "You’re #1,284 on the list". Below: overlapping colored avatar circles, five amber stars and "Loved by 1,200+ early users".',
    code: `.form { display: flex; padding: 5px; border-radius: 14px; background: #fff; border: 1px solid #e7e5e4; box-shadow: 0 10px 30px rgba(234,88,12,.08); }\n.submit:disabled { background: #fdba74; cursor: not-allowed; }\n.avatar + .avatar { margin-left: -8px; border: 2px solid #fffbf5; }`,
    usage: 'Pre-launch pages, beta signups and lead capture for new products.',
  },

  // ─── Landing ──────────────────────────────────────────────
  {
    title: 'Brutalist Landing', category: 'Landing', component: BrutalistLanding,
    accent: '#f5e642',
    palette: ['#f5e642', '#000000', '#ffffff', '#333333', '#1a1a1a'],
    tags: ['Brutalism', 'Bold Type', 'High Contrast'],
    fonts: ['Playfair Display', 'DM Mono'],
    prompt: 'Create a brutalist landing page with bold yellow (#f5e642) background. Top bar: brand "BRUT.CO" in DM Mono 14px bold black + underlined nav links. Main area: giant stacked uppercase heading "DESIGN WITHOUT RULES." in Playfair Display 48px black, letter-spacing -2px, line-height 0.95. Subtext in 11px with 50% opacity. Bottom bar: inverted colors (black bg, yellow text) with "Est. 2024" and a yellow-bordered "Enter ↗" button. All dividers use 3px solid black borders.',
    code: `.brut-hero { background: #f5e642; }\n.brut-heading { font: 900 48px/0.95 'Playfair Display', serif; text-transform: uppercase; letter-spacing: -2px; color: #000; }\n.brut-footer { background: #000; color: #f5e642; border-top: 3px solid #000; }\n.brut-btn { border: 2px solid #f5e642; background: transparent; color: #f5e642; }`,
    usage: 'Ideal for art portfolios or alternative brands that want to break away from traditional clean UI.',
  },
  {
    title: 'SaaS Pricing Cards', category: 'Landing', component: SaaSPricing,
    accent: '#8b5cf6',
    palette: ['#8b5cf6', '#0d1117', '#161b22', '#f0eef5', '#10b981'],
    tags: ['Pricing', 'Hover', 'Glow Border'],
    fonts: ['DM Mono', 'Playfair Display'],
    prompt: 'Design a 3-tier SaaS pricing block (Hobby, Pro, Team). Hobby and Team have a dark #0d1117 background with thin white borders. The center Pro tier is slightly scaled up (scale 1.05) with a deeper background (#161b22) and features an animated glowing conic gradient border that slowly rotates around the card using a pseudo-element behind a 1px masked inset. Include a giant price in serif font.',
    code: `.card-pro { transform: scale(1.05); }\n.card-pro::before { content: ""; background: conic-gradient(from 0deg, transparent, #8b5cf6); animation: rotateBorder 3s linear infinite; }\n@keyframes rotateBorder { 100% { transform: rotate(1turn); } }`,
    usage: 'Essential for SaaS landing pages; provides clear focus on the recommended subscription tier.',
  },
  {
    title: 'Infinite Testimonial Wall', category: 'Landing', component: TestimonialWall,
    accent: '#fbbf24',
    palette: ['#0b0b10', '#fbbf24', '#f472b6', '#60a5fa', '#34d399'],
    tags: ['Testimonials', 'Marquee', 'Social Proof'],
    fonts: ['Inter', 'Lora', 'Instrument Serif'],
    prompt: 'Build a dark (#0b0b10) testimonial wall with three columns of quote cards that scroll upward infinitely at different speeds (18s, 24s, 30s). Duplicate each column’s list and animate translateY(0 → -50%) for a seamless loop. Each card: rgba(255,255,255,0.03) background, 1px faint border, five amber stars, the quote in Lora italic-feel 12px, and an author row with a colored initial avatar, name and role. Fade the top and bottom with a background-colored gradient overlay, and anchor a centered "Loved by builders" title in Instrument Serif at the bottom.',
    code: `.column { overflow: hidden; }\n.column-track { animation: scrollUp 24s linear infinite; }\n@keyframes scrollUp { to { transform: translateY(-50%); } }\n.fade { position: absolute; inset: 0; background: linear-gradient(180deg, #0b0b10, transparent 22%, transparent 70%, #0b0b10); pointer-events: none; }`,
    usage: 'Social proof sections on landing pages; works with dozens of reviews without pagination.',
  },
  {
    title: 'Plan Comparison Table', category: 'Landing', component: FeatureComparison,
    accent: '#6d28d9',
    palette: ['#ffffff', '#6d28d9', '#f5f3ff', '#16a34a', '#18181b'],
    tags: ['Table', 'Pricing', 'Hover Column'],
    fonts: ['Inter', 'Fraunces'],
    prompt: 'Design a white feature comparison table for three plans (Starter $0, Growth $24, Scale $79). The header row has "Compare plans" in Fraunces 18px and each plan name with its monthly price. Rows list features (Projects, Team seats, Custom domains, Analytics, SSO / SAML, Audit logs, Support). Booleans render as a green check inside a #dcfce7 circle or a light em dash; text values render inline. Hovering any cell highlights the whole plan column in #f5f3ff with rounded top and bottom corners and makes the plan name violet (#6d28d9).',
    code: `table { border-collapse: separate; border-spacing: 0; }\ntd, th { border-top: 1px solid #f4f4f5; transition: background .2s; }\n.col-active { background: #f5f3ff; }\n.check { width: 20px; height: 20px; border-radius: 50%; background: #dcfce7; color: #16a34a; }`,
    usage: 'Pricing pages where buyers need to compare plans feature by feature.',
  },
  {
    title: 'Logo Cloud Marquee', category: 'Landing', component: LogoMarquee,
    accent: '#71717a',
    palette: ['#fafafa', '#18181b', '#71717a', '#a1a1aa', '#e4e4e7'],
    tags: ['Logos', 'Marquee', 'Trust'],
    fonts: ['Space Grotesk', 'Fraunces', 'DM Mono'],
    prompt: 'Create a "Trusted by 4,000+ teams" logo cloud on #fafafa. Title: tiny uppercase DM Mono eyebrow plus "From startups to the Fortune 500" in Fraunces 26px. Below, two rows of grey wordmark logos (glyph + name in Space Grotesk 20px semibold, #71717a) that scroll horizontally forever in opposite directions at different speeds. Duplicate each row and animate translateX(0 → -50%). Mask both edges with a linear-gradient mask-image so logos fade in and out, and pause a row on hover.',
    code: `.row { overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 15%, #000 85%, transparent); }\n.track { display: flex; width: max-content; animation: scroll 28s linear infinite; }\n.row:hover .track { animation-play-state: paused; }\n@keyframes scroll { to { transform: translateX(-50%); } }`,
    usage: 'Customer logo sections directly below a hero to build instant credibility.',
  },
  {
    title: 'FAQ Accordion', category: 'Landing', component: FAQAccordion,
    accent: '#d9f99d',
    palette: ['#0c0c0c', '#d9f99d', '#fafafa', '#262626', '#8a8a8a'],
    tags: ['Accordion', 'FAQ', 'Grid Animation'],
    fonts: ['Instrument Serif', 'Inter', 'DM Mono'],
    prompt: 'Design a dark (#0c0c0c) FAQ section in two columns. Left: a lime (#d9f99d) "FAQ" eyebrow, "Questions, answered." in Instrument Serif 34px and a small "Talk to us →" link. Right: four accordion items separated by #262626 lines. Each trigger shows a numbered index (01–04) in DM Mono, the question, and a circular plus icon that rotates 45° and fills lime when open. Animate the answer panel height with grid-template-rows: 0fr → 1fr so it expands smoothly without measuring. Only one item open at a time; use aria-expanded.',
    code: `.panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s cubic-bezier(.16,1,.3,1); }\n.panel.open { grid-template-rows: 1fr; }\n.panel > div { overflow: hidden; }\n.icon.open { transform: rotate(45deg); background: #d9f99d; color: #0c0c0c; }`,
    usage: 'Pricing and product pages to handle objections before users contact support.',
  },

  // ─── Cards ────────────────────────────────────────────────
  {
    title: 'Editorial Magazine Grid', category: 'Cards', component: EditorialGrid,
    accent: '#f472b6',
    palette: ['#f472b6', '#a78bfa', '#06b6d4', '#f59e0b', '#0c0c14'],
    tags: ['Serif', 'Pull Quotes', 'Two-Column'],
    fonts: ['Playfair Display', 'DM Mono', 'Lora'],
    prompt: 'Build a two-column editorial magazine card grid on #0c0c14 background. Left column (flex 1.2): featured essay card with gradient background (#1a1a2e → #12121f), "Featured Essay" label in DM Mono 9px pink, title in Playfair Display 20px, an italic pull quote in Lora 11px, and author avatar + metadata row. Right column: 3 stacked article cards, each with a colored category label (Typography/purple, Layout/cyan, Motion/amber), title in Playfair Display 13px, and author in DM Mono 9px. All cards use 1px solid rgba(255,255,255,0.06) borders.',
    code: `.editorial-card { background: linear-gradient(180deg, #1a1a2e, #12121f); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; }\n.pull-quote { font: italic 11px/1.6 'Lora', serif; color: rgba(255,255,255,0.3); }\n.category-label { font: 500 9px 'DM Mono', monospace; text-transform: uppercase; letter-spacing: 2px; }`,
    usage: 'Use for content-heavy sections where you want to maintain a sophisticated, publication-like feel.',
  },
  {
    title: 'Feature Bento Grid', category: 'Cards', component: BentoGrid,
    accent: '#10b981',
    palette: ['#0a0a0a', '#8b5cf6', '#10b981', '#3b82f6', '#f59e0b'],
    tags: ['Bento', 'Grid', 'Features'],
    fonts: ['Inter'],
    prompt: 'Create a modern Bento-style feature grid on a dark background. Use 4-5 cards of varying sizes (large, medium, small) with subtle 1px borders and low-opacity tinted backgrounds. Each card should feature a large icon/emoji, a clear heading, and concise descriptive text.',
    code: `.grid { display: grid; grid-template-columns: repeat(3, 1fr); }\n.card { border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); }`,
    usage: 'Ideal for "Features" or "Why Us" sections on tech and SaaS landing pages.',
  },

  // ─── Buttons ──────────────────────────────────────────────
  {
    title: 'Gradient Button System', category: 'Buttons', component: GradientButtons,
    accent: '#8b5cf6',
    palette: ['#8b5cf6', '#10b981', '#ef4444', '#f59e0b', '#0a0a14'],
    tags: ['Buttons', 'Variants', 'Gradient'],
    fonts: ['DM Mono'],
    prompt: 'Build a button system showcase on #0a0a14 dark background. Display 3 rows of 4 buttons each (Primary/purple, Success/green, Danger/red, Warning/amber). Row 1: solid gradient buttons with glow shadow, active button lifts with translateY(-2px). Row 2: outline variants with colored borders and transparent background. Row 3: ghost variants with tinted rgba backgrounds. All buttons use DM Mono font, border-radius 10-12px. Active solid button gets box-shadow: 0 6px 24px with the color at 40% opacity.',
    code: `.btn-solid { background: linear-gradient(135deg, #8b5cf6, #6d28d9); box-shadow: 0 6px 24px rgba(139,92,246,0.4); }\n.btn-outline { border: 1px solid rgba(139,92,246,0.4); background: transparent; }\n.btn-ghost { background: rgba(139,92,246,0.08); }\n.btn-success { background: linear-gradient(135deg, #10b981, #059669); }\n.btn-danger { background: linear-gradient(135deg, #ef4444, #dc2626); }\n.btn-warning { background: linear-gradient(135deg, #f59e0b, #d97706); }`,
    usage: 'Foundation for any dark-themed application requiring clear, vibrant call-to-actions.',
  },

  // ─── Forms ────────────────────────────────────────────────
  {
    title: 'Neumorphic Form', category: 'Forms', component: NeumorphicForm,
    accent: '#ec4899',
    palette: ['#ec4899', '#be185d', '#1a1a2e', '#232340', '#111125'],
    tags: ['Neumorphism', 'Float Labels', 'Soft UI'],
    fonts: ['Playfair Display', 'DM Mono', 'Lora'],
    prompt: 'Build a neumorphic contact form on a #1a1a2e background. The form container has box-shadow: 8px 8px 20px #111125, -8px -8px 20px #232340 for the raised soft-UI effect. Title "Get in Touch" in Playfair Display centered. Inputs have floating labels in DM Mono that scale from 12px to 9px on focus with color transition to #ec4899. Input fields use inset shadows for the pressed look. A full-width pink gradient submit button (#ec4899 → #be185d) with combined neumorphic + glow shadow.',
    code: `.neu-container { background: #1a1a2e; box-shadow: 8px 8px 20px #111125, -8px -8px 20px #232340; }\n.neu-input { box-shadow: inset 3px 3px 8px #111125, inset -3px -3px 8px #232340; }\n.neu-input:focus { border-color: #ec4899; box-shadow: inset 3px 3px 8px #111125, inset -3px -3px 8px #232340, 0 0 15px rgba(236,72,153,0.1); }\n.neu-button { background: linear-gradient(135deg, #ec4899, #be185d); }`,
    usage: 'Best used sparingly for specific landing page forms where a tactile, soft aesthetic is desired.',
  },
  {
    title: 'Glass Newsletter Signup', category: 'Forms', component: NewsletterCard,
    accent: '#8b5cf6',
    palette: ['#07070f', '#8b5cf6', '#ffffff', 'rgba(255,255,255,0.05)'],
    tags: ['Newsletter', 'Form', 'Glassmorphism'],
    fonts: ['Space Grotesk', 'Inter'],
    prompt: 'Create a glassmorphic newsletter signup card. Use a dark background with a subtle gradient blur orb. The card should have a 1px white border at 10% opacity, an input field with a low-opacity background, and a vibrant primary button with a glow effect.',
    code: `.card { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); }\n.btn { background: #8b5cf6; box-shadow: 0 4px 12px rgba(139,92,246,0.3); }`,
    usage: 'A high-conversion element for footers or middle-of-page lead magnets.',
  },

  // ─── Dashboard ────────────────────────────────────────────
  {
    title: 'Dashboard Stat Widget', category: 'Dashboard', component: DashboardWidget,
    accent: '#10b981',
    palette: ['#10b981', '#8b5cf6', '#f59e0b', '#0a0f1a', '#0d1420'],
    tags: ['Charts', 'KPI', 'Animated Bars'],
    fonts: ['DM Mono'],
    prompt: 'Design a dark dashboard widget with a top row of 3 KPI stat cards (Revenue, Users, Orders) in DM Mono. Each card has a label in 10px uppercase, a large value in 20px, and a colored percentage badge. Below, render a 7-bar chart labeled "Weekly Performance" with bars using linear-gradient from solid to 30% opacity. Bars have border-radius: 6px 6px 2px 2px. The highest bar uses green (#10b981), others use purple (#8b5cf6). Animate bars with staggered fadeSlideUp. Day labels below in 9px uppercase.',
    code: `.stat-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; }\n.bar { background: linear-gradient(180deg, #8b5cf6, rgba(139,92,246,0.3)); border-radius: 6px 6px 2px 2px; transition: height 0.6s cubic-bezier(0.16,1,0.3,1); }\n.bar.max { background: linear-gradient(180deg, #10b981, rgba(16,185,129,0.3)); }`,
    usage: 'Use for analytical interfaces where key performance indicators need to be summarized visually.',
  },

  // ─── Commerce ─────────────────────────────────────────────
  {
    title: 'Minimal Product Grid', category: 'Commerce', component: ProductGrid,
    accent: '#10b981',
    palette: ['#ffffff', '#f8f9fa', '#1a1a1a', '#10b981', '#8b5cf6'],
    tags: ['E-commerce', 'Cards', 'Hover'],
    fonts: ['DM Mono'],
    prompt: 'Design a minimal light-themed product grid. Each product card has a subtle border, rounded corners (24px), and a gray background. On hover, the card translates up 8px. Center an icon/glyph, followed by the product name and price. Include a simple black pill-shaped "Buy" button.',
    code: `.product-card { background: #f8f9fa; border-radius: 24px; transition: transform 0.3s ease; }\n.product-card:hover { transform: translateY(-8px); }\n.buy-btn { background: #1a1a1a; color: #fff; border-radius: 20px; }`,
    usage: 'Clean aesthetic for high-end boutique e-commerce stores.',
  },

  // ─── Media ────────────────────────────────────────────────
  {
    title: 'Floating Music Player', category: 'Media', component: FloatingMusicPlayer,
    accent: '#f472b6',
    palette: ['#0f172a', '#f472b6', '#8b5cf6', '#f0eef5', '#1e293b'],
    tags: ['Glass', 'Player', 'Blur'],
    fonts: ['Playfair Display', 'DM Mono'],
    prompt: 'Build a glassmorphic music player widget. Use backdrop-filter: blur(30px) and a thin white border. Feature a square album art with a gradient that rotates when playing. Title in Playfair Display, artist in DM Mono. Controls (Prev, Play/Pause, Next) with simple glyphs.',
    code: `.player { background: rgba(255,255,255,0.05); backdrop-filter: blur(30px); border-radius: 32px; }\n.album-art { animation: spinVinyl 8s linear infinite; }\n.controls { color: #f472b6; cursor: pointer; }`,
    usage: 'Ideal for community sidebars or as a persistent floating entertainment element.',
  },

  // ─── Typography ───────────────────────────────────────────
  {
    title: 'Type Specimen Showcase', category: 'Typography', component: TypeSpecimen,
    accent: '#f472b6',
    palette: ['#f472b6', '#f0eef5', '#0c0a12', '#e0ddd8', '#a78bfa'],
    tags: ['Font Pairing', 'Specimen', 'Weights'],
    fonts: ['Playfair Display', 'Lora', 'DM Mono'],
    prompt: 'Create a type specimen showcase on a #0c0a12 dark background. Show "Type Specimen · 001" in DM Mono 9px pink uppercase. Display "Aa Bb Cc" in Playfair Display 52px weight 800. Below, an italic quote in Lora 18px at 45% opacity. Then a row of 3 font preview cards showing "Ag" in each font (Playfair Display 800, Lora 400, DM Mono 400) with labels below. Finish with a row of weight chips (Regular, Italic, Bold, Black) in pill-shaped badges with pink background/border at low opacity.',
    code: `.specimen { background: #0c0a12; }\n.display-sample { font: 800 52px 'Playfair Display', serif; color: #f0eef5; letter-spacing: -2px; }\n.body-quote { font: italic 18px/1.6 'Lora', serif; color: rgba(255,255,255,0.45); }\n.font-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; }\n.weight-chip { background: rgba(244,114,182,0.08); border: 1px solid rgba(244,114,182,0.15); color: rgba(244,114,182,0.6); border-radius: 20px; }`,
    usage: 'Excellent for design systems documentation or brand identity presentations.',
  },
  {
    title: 'Cyberpunk Glitch Text', category: 'Typography', component: CyberpunkText,
    accent: '#00ffff',
    palette: ['#00ffff', '#ff00ff', '#050510', '#ffffff', '#222222'],
    tags: ['Cyberpunk', 'Glitch', 'CSS Animation'],
    fonts: ['DM Mono'],
    prompt: 'Build a cyberpunk lock screen with a perspective grid floor. Center a giant CYBER_NET header using CSS glitch effects (two pseudo elements with clip-path and translating animations to create red and cyan chromatic aberration). Add two buttons below: SYSTEM.INIT() with cyan outline + inset shadow, and OVERRIDE with solid magenta background and glow.',
    code: `.glitch::before { text-shadow: -2px 0 red; clip-path: inset(20% 0 80% 0); animation: glitch-1 2s infinite; }\n.btn-cyan { border: 2px solid #0ff; color: #0ff; box-shadow: inset 0 0 10px rgba(0,255,255,0.2); }`,
    usage: 'Hero title for gaming sites or high-impact digital art projects.',
  },

  // ─── Motion ───────────────────────────────────────────────
  {
    title: 'MacOS Dock Interactive', category: 'Motion', component: MacOSDock,
    accent: '#3b82f6',
    palette: ['#3b82f6', '#f59e0b', '#ef4444', '#10b981', '#8b5cf6'],
    tags: ['MacOS', 'Hover', 'Magnify'],
    fonts: ['DM Mono'],
    prompt: 'Create a MacOS style dock floating at the bottom with a frosted glass background (blur 20px). Add 5 squircle icons inside. When hovering over an icon, it scales up to 1.4x and translates slightly up. Apply a smaller scale constraint (1.2x) to adjacent icons to simulate the MacOS dock magnification effect. Ensure transform-origin is set to bottom center.',
    code: `.dock { backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; }\n.icon:hover { transform: scale(1.4) translateY(-8px); }\n.icon.adjacent { transform: scale(1.2) translateY(-4px); }`,
    usage: 'High-interactivity navigation component for desktop-like web experiences.',
  },
  {
    title: 'Interactive Timeline', category: 'Motion', component: InteractiveTimeline,
    accent: '#8b5cf6',
    palette: ['#8b5cf6', '#07070f', '#1a1a2e', '#f0eef5', '#a78bfa'],
    tags: ['Timeline', 'Interactive', 'History'],
    fonts: ['DM Mono', 'Playfair Display', 'Lora'],
    prompt: 'Create a horizontal interactive timeline on #07070f. A central progress line fills as user selects nodes. Each node is a circle that glows when active. Below, a card displays the title in Playfair Display and description in Lora. Animate card content with a fadeSlideUp effect on selection change.',
    code: `.timeline-line { height: 4px; background: rgba(255,255,255,0.1); }\n.timeline-progress { background: #8b5cf6; box-shadow: 0 0 15px #8b5cf6; transition: width 0.6s ease; }\n.node.active { background: #8b5cf6; box-shadow: 0 0 10px #8b5cf6; }`,
    usage: 'Perfect for company roadmaps or personal journey sections in portfolios.',
  },
  {
    title: 'Expandable Action Button', category: 'Motion', component: ExpandableFAB,
    accent: '#3b82f6',
    palette: ['#f3f4f6', '#1a1a1a', '#3b82f6', '#10b981', '#f59e0b'],
    tags: ['FAB', 'Animation', 'Menu'],
    fonts: ['Inter'],
    prompt: 'Build an expandable Floating Action Button (FAB). The main button should rotate 45 degrees on click to become a "close" icon, while a vertical list of secondary actions slides up with a staggered animation. Each action includes a labeled tooltip and a colored circular icon.',
    code: `.fab { border-radius: 50%; transition: transform 0.3s ease; }\n.menu { display: flex; flex-direction: column; gap: 12px; }`,
    usage: 'Use in mobile-first web apps or dashboards to consolidate secondary actions.',
  },

  // ─── Developer ────────────────────────────────────────────
  {
    title: 'Retro Terminal', category: 'Developer', component: RetroTerminal,
    accent: '#00ff88',
    palette: ['#00ff88', '#8b5cf6', '#0a0a0a', '#1a1a1a', '#2a2a2a'],
    tags: ['Terminal', 'CLI', 'Monospace'],
    fonts: ['DM Mono'],
    prompt: 'Build a retro terminal emulator with a #0a0a0a background. Top bar: macOS-style traffic light dots (red #ff5f56, yellow #ffbd2e, green #27c93f) at 12px diameter, plus a title "phantom — zsh — 80×24" in DM Mono 11px. Main area: simulated shell session with green command text (#00ff88), purple prompt prefix (#8b5cf6 "~ $"), and dimmed output text at 50% opacity. Include an ASCII art banner in green. End with a glowing block cursor that blinks using a steps(1) opacity animation. All text in DM Mono 12px.',
    code: `.terminal { background: #0a0a0a; font-family: 'DM Mono', monospace; }\n.title-bar { background: #1a1a1a; border-bottom: 1px solid #2a2a2a; }\n.traffic-light { width: 12px; height: 12px; border-radius: 50%; }\n.prompt { color: #00ff88; }\n.prefix { color: #8b5cf6; }\n.output { color: rgba(255,255,255,0.5); }\n.cursor { text-shadow: 0 0 8px #00ff88; animation: blink 1s steps(1) infinite; }\n@keyframes blink { 50% { opacity: 0; } }`,
    usage: 'Add character to tech-focused websites or used as a creative "About Me" section.',
  },

  // ─── Content ──────────────────────────────────────────────
  {
    title: 'Long-form Article Detail', category: 'Content', component: ArticleDetail,
    accent: '#8b5cf6',
    palette: ['#fcfcf9', '#1a1a1a', '#8b5cf6', '#eeeeee', '#ffffff'],
    tags: ['Typography', 'Editorial', 'Minimal'],
    fonts: ['Lora', 'Playfair Display', 'DM Mono'],
    prompt: 'Design a clean, high-readability article view on #fcfcf9. Use Lora for body text and Playfair Display for the headline. Include a purple category label in DM Mono, an author row with a placeholder avatar, and a highlighted pull-quote with a left border.',
    code: `.article { font-family: 'Lora', serif; color: #1a1a1a; }\n.headline { font-family: 'Playfair Display', serif; font-size: 32px; }\n.pull-quote { border-left: 3px solid #8b5cf6; padding-left: 20px; font-style: italic; }`,
    usage: 'Best for blogs, news portals, or documentation sites that prioritize reading experience.',
  },
];

const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const CATALOG = ENTRIES.map((entry, index) => ({ ...entry, id: slugify(entry.title), index }));

export function buildFullSpec(card) {
  return [
    `# ${card.title}`,
    '',
    card.prompt,
    '',
    `Fonts: ${card.fonts.join(', ')}`,
    `Palette: ${card.palette.join(', ')}`,
    `Use it for: ${card.usage}`,
    '',
    'Reference CSS:',
    '```css',
    card.code,
    '```',
  ].join('\n');
}
