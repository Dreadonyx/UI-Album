import { lazy } from 'react';

const ThemeNeumorphism = lazy(() => import('./components/ThemeNeumorphism'));
const ThemeClaymorphism = lazy(() => import('./components/ThemeClaymorphism'));
const ThemeGlassmorphism = lazy(() => import('./components/ThemeGlassmorphism'));
const ThemeSkeuomorphism = lazy(() => import('./components/ThemeSkeuomorphism'));
const ThemeFlat = lazy(() => import('./components/ThemeFlat'));
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
const ProfileCard = lazy(() => import('./components/ProfileCard'));
const TiltCard = lazy(() => import('./components/TiltCard'));
const GradientButtons = lazy(() => import('./components/GradientButtons'));
const ButtonStates = lazy(() => import('./components/ButtonStates'));
const ShinyButtons = lazy(() => import('./components/ShinyButtons'));
const NeumorphicForm = lazy(() => import('./components/NeumorphicForm'));
const NewsletterCard = lazy(() => import('./components/NewsletterCard'));
const MultiStepWizard = lazy(() => import('./components/MultiStepWizard'));
const SettingsPanel = lazy(() => import('./components/SettingsPanel'));
const ToggleControls = lazy(() => import('./components/ToggleControls'));
const RangeSlider = lazy(() => import('./components/RangeSlider'));
const TagInput = lazy(() => import('./components/TagInput'));
const DatePicker = lazy(() => import('./components/DatePicker'));
const ColorPicker = lazy(() => import('./components/ColorPicker'));
const FileDropzone = lazy(() => import('./components/FileDropzone'));
const StarRating = lazy(() => import('./components/StarRating'));
const LoginCard = lazy(() => import('./components/LoginCard'));
const PasswordStrength = lazy(() => import('./components/PasswordStrength'));
const OTPVerify = lazy(() => import('./components/OTPVerify'));
const DashboardWidget = lazy(() => import('./components/DashboardWidget'));
const AreaChart = lazy(() => import('./components/AreaChart'));
const ProgressRings = lazy(() => import('./components/ProgressRings'));
const DataTable = lazy(() => import('./components/DataTable'));
const KanbanBoard = lazy(() => import('./components/KanbanBoard'));
const WeekSchedule = lazy(() => import('./components/WeekSchedule'));
const ToastStack = lazy(() => import('./components/ToastStack'));
const AlertBanners = lazy(() => import('./components/AlertBanners'));
const SkeletonLoader = lazy(() => import('./components/SkeletonLoader'));
const LoaderCollection = lazy(() => import('./components/LoaderCollection'));
const EmptyState = lazy(() => import('./components/EmptyState'));
const NotFound404 = lazy(() => import('./components/NotFound404'));
const TooltipShowcase = lazy(() => import('./components/TooltipShowcase'));
const BadgesAvatars = lazy(() => import('./components/BadgesAvatars'));
const ModalDialog = lazy(() => import('./components/ModalDialog'));
const DrawerSheet = lazy(() => import('./components/DrawerSheet'));
const DropdownMenu = lazy(() => import('./components/DropdownMenu'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
const ProductGrid = lazy(() => import('./components/ProductGrid'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const CheckoutCard = lazy(() => import('./components/CheckoutCard'));
const ChatInterface = lazy(() => import('./components/ChatInterface'));
const CommentThread = lazy(() => import('./components/CommentThread'));
const NotificationCenter = lazy(() => import('./components/NotificationCenter'));
const SocialPost = lazy(() => import('./components/SocialPost'));
const FloatingMusicPlayer = lazy(() => import('./components/FloatingMusicPlayer'));
const VideoPlayer = lazy(() => import('./components/VideoPlayer'));
const ImageCarousel = lazy(() => import('./components/ImageCarousel'));
const AudioWaveform = lazy(() => import('./components/AudioWaveform'));
const TypeSpecimen = lazy(() => import('./components/TypeSpecimen'));
const CyberpunkText = lazy(() => import('./components/CyberpunkText'));
const KineticText = lazy(() => import('./components/KineticText'));
const MacOSDock = lazy(() => import('./components/MacOSDock'));
const InteractiveTimeline = lazy(() => import('./components/InteractiveTimeline'));
const ExpandableFAB = lazy(() => import('./components/ExpandableFAB'));
const MagneticButton = lazy(() => import('./components/MagneticButton'));
const RetroTerminal = lazy(() => import('./components/RetroTerminal'));
const CodeBlockTabs = lazy(() => import('./components/CodeBlockTabs'));
const StatusPage = lazy(() => import('./components/StatusPage'));
const MobileAppScreen = lazy(() => import('./components/MobileAppScreen'));
const OnboardingFlow = lazy(() => import('./components/OnboardingFlow'));
const WeatherWidget = lazy(() => import('./components/WeatherWidget'));
const ArticleDetail = lazy(() => import('./components/ArticleDetail'));
const DocsLayout = lazy(() => import('./components/DocsLayout'));
const Changelog = lazy(() => import('./components/Changelog'));

// Display order of the category filter. Every entry's `category` must be listed here.
export const CATEGORIES = [
  'Themes', 'Navigation', 'Hero', 'Landing', 'Cards', 'Buttons', 'Forms', 'Inputs', 'Auth',
  'Dashboard', 'Feedback', 'Overlays', 'Commerce', 'Social', 'Media',
  'Typography', 'Motion', 'Developer', 'Mobile', 'Content',
];

const ENTRIES = [
  // ─── Themes ───────────────────────────────────────────────
  {
    title: 'Neumorphism', category: 'Themes', component: ThemeNeumorphism,
    accent: '#6d5dfc',
    palette: ['#e0e5ec', '#a3b1c6', '#ffffff', '#6d5dfc', '#44476a'],
    tags: ['Soft UI', 'Extruded', 'Light'],
    fonts: ['Inter'],
    prompt: 'Design a "Deep Work" focus widget in neumorphism (soft UI) on a single flat surface color #e0e5ec. Every element is the same color as the background and gets its form only from paired shadows: raised elements use 9px 9px 16px #a3b1c6 and -9px -9px 16px #ffffff; pressed elements use the inset version. Card radius 28px. Include an inset circular percentage dial, an inset progress track with a violet (#6d5dfc) gradient fill, an inset switch track with a raised knob that turns violet when on, and a full-width button that looks raised at rest and becomes inset (pressed) while the session runs. Text #44476a in Inter.',
    code: `body { background: #e0e5ec; }\n.raised { background: #e0e5ec; box-shadow: 9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff; border-radius: 28px; }\n.inset { box-shadow: inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff; }\n.btn:active, .btn[aria-pressed="true"] { box-shadow: inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff; color: #6d5dfc; }`,
    usage: 'Calm dashboards, smart-home and music controls. Keep contrast in check: add color for states and focus.',
  },
  {
    title: 'Claymorphism', category: 'Themes', component: ThemeClaymorphism,
    accent: '#9b7cff',
    palette: ['#c8b6ff', '#ffd6a5', '#a0e7e5', '#9bf6c5', '#ffadad'],
    tags: ['Clay', '3D', 'Pastel'],
    fonts: ['Space Grotesk'],
    prompt: 'Design a "Deep Work" focus widget in claymorphism on a pink-to-periwinkle pastel gradient. Elements look like inflated clay: very large radii (38px card, 20–24px inner pieces), pastel fills (#c8b6ff card, #ffd6a5 icon tile, #a0e7e5 button, #9bf6c5 progress, #ffadad active toggle) and a triple shadow on each piece: a soft colored outer drop shadow (0 18px 30px -10px) plus an inner dark shadow bottom-right and an inner white highlight top-left. Include an emoji icon tile, a white clay panel with the progress bar, a square clay toggle button (🔕/🔔) and a chunky "Start session" button that squishes (scale 0.97) while running. Space Grotesk bold, deep purple text #3b2f63.',
    code: `.clay { border-radius: 38px; background: #c8b6ff; box-shadow: 0 18px 30px -10px rgba(124,92,230,.45), inset -6px -8px 14px rgba(0,0,0,.12), inset 6px 8px 14px rgba(255,255,255,.65); }\n.clay-btn { border-radius: 20px; background: #a0e7e5; }\n.clay-btn:active { transform: scale(.97); }`,
    usage: 'Playful consumer apps, kids and education products, onboarding illustrations and 3D-ish landing pages.',
  },
  {
    title: 'Glassmorphism', category: 'Themes', component: ThemeGlassmorphism,
    accent: '#38bdf8',
    palette: ['#4f46e5', '#0ea5e9', '#f472b6', '#facc15', '#ffffff'],
    tags: ['Frosted Glass', 'Blur', 'Translucent'],
    fonts: ['Inter'],
    prompt: 'Design a "Deep Work" focus widget in glassmorphism. Background: an indigo-to-sky gradient with bold solid shapes behind the card (a pink circle, a yellow circle, a rotated cyan square) so the blur has something to show. The card is rgba(255,255,255,0.14) with backdrop-filter: blur(18px) saturate(160%), a 1px rgba(255,255,255,0.35) border, a 1px inner top highlight and a soft indigo shadow. White Inter text, a big 40px percentage, a glowing white progress bar, a translucent switch row and a glass button that turns solid white with indigo text while running. Add a second smaller glass panel for the caption.',
    code: `.glass { background: rgba(255,255,255,.14); backdrop-filter: blur(18px) saturate(160%); -webkit-backdrop-filter: blur(18px) saturate(160%); border: 1px solid rgba(255,255,255,.35); border-radius: 24px; box-shadow: 0 8px 32px rgba(31,38,135,.25), inset 0 1px 0 rgba(255,255,255,.4); }`,
    usage: 'Overlays on rich imagery: music players, weather, OS-style widgets and hero cards. Ensure text contrast over busy areas.',
  },
  {
    title: 'Skeuomorphism', category: 'Themes', component: ThemeSkeuomorphism,
    accent: '#3fa521',
    palette: ['#4a2c1a', '#cfcfcf', '#2d4220', '#9cff6b', '#2b8de0'],
    tags: ['Realistic', 'Textures', 'Hardware'],
    fonts: ['Libre Baskerville', 'VT323', 'DM Mono'],
    prompt: 'Design a "Deep Work" focus widget in skeuomorphism, imitating physical hardware on a leather desk (radial brown gradient with a fine diagonal stitch texture). The device is a brushed-metal panel (vertical silver gradient, beveled edges, inner highlights, deep drop shadow) with: a glowing LED that turns green when running, a recessed LCD screen showing the percentage in green VT323 digits with a glow, a glossy two-tone blue progress bar in a sunken track, an iOS-6-style ON/OFF slider switch with a metal knob, and a glossy gel button (green → red while running) with an embossed label. Next to it, a lined-paper sticky note rotated 2° explaining the style.',
    code: `.metal { background: linear-gradient(180deg, #f2f2f2, #cfcfcf 45%, #e6e6e6); border: 1px solid #8a8a8a; box-shadow: 0 14px 28px rgba(0,0,0,.55), inset 0 1px 0 #fff; }\n.lcd { background: linear-gradient(#1a2a12, #2d4220); box-shadow: inset 0 3px 8px rgba(0,0,0,.8); color: #9cff6b; text-shadow: 0 0 8px rgba(156,255,107,.7); }\n.gel { background: linear-gradient(180deg, #7ed957, #3fa521 50%, #2e8c14 51%, #4cbb2a); text-shadow: 0 -1px 0 rgba(0,0,0,.5); }`,
    usage: 'Audio plugins, games, retro tributes and anywhere tactile realism adds delight.',
  },
  {
    title: 'Flat Design', category: 'Themes', component: ThemeFlat,
    accent: '#e67e22',
    palette: ['#3498db', '#2c3e50', '#2ecc71', '#e67e22', '#e74c3c'],
    tags: ['Flat', 'Solid Color', 'No Shadows'],
    fonts: ['Inter'],
    prompt: 'Design a "Deep Work" focus widget in classic flat design on a solid #3498db background. Absolutely no gradients, shadows or textures. The card has a dark #2c3e50 header with an orange circular check icon, then an #ecf0f1 body: a big bold percentage, a square-ended progress bar (#2ecc71 on #bdc3c7), a simple pill switch, and an uppercase orange (#e67e22) button that turns red (#e74c3c) while running. Small 4–6px radii, bold Inter. Show the flat palette as five square swatches next to the card.',
    code: `.card { background: #ecf0f1; border-radius: 6px; }\n.card-header { background: #2c3e50; color: #fff; }\n.progress { background: #bdc3c7; } .progress > span { background: #2ecc71; }\n.btn { background: #e67e22; color: #fff; border: 0; border-radius: 4px; text-transform: uppercase; }`,
    usage: 'Fast-loading interfaces, infographics, icon systems and products that need maximum clarity.',
  },

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
  {
    title: 'Social Profile Card', category: 'Cards', component: ProfileCard,
    accent: '#ec4899',
    palette: ['#6366f1', '#ec4899', '#f59e0b', '#ffffff', '#18181b'],
    tags: ['Profile', 'Follow', 'Stats'],
    fonts: ['Inter', 'Fraunces'],
    prompt: 'Design a 300px white profile card on a soft indigo-to-pink background. Top: an 86px gradient cover (#6366f1 → #ec4899 → #f59e0b) with a subtle white dot pattern. The 72px avatar overlaps the cover with a 4px white ring and a green online dot. Right-aligned "Follow" pill button toggles to an outlined "Following" state with a check icon and bumps the follower count. Below: name, @handle · role, a two-line bio, skill chips, and a 3-column stats row (Posts, Followers, Following) separated by a hairline.',
    code: `.cover { height: 86px; background: linear-gradient(120deg, #6366f1, #ec4899 60%, #f59e0b); }\n.avatar { width: 72px; height: 72px; margin-top: -36px; border: 4px solid #fff; border-radius: 50%; }\n.follow { border-radius: 999px; background: #18181b; color: #fff; }\n.follow[aria-pressed="true"] { background: #fff; color: #18181b; border: 1px solid #e4e4e7; }`,
    usage: 'Community apps, team directories, creator platforms and author bios.',
  },
  {
    title: '3D Holographic Tilt Card', category: 'Cards', component: TiltCard,
    accent: '#a855f7',
    palette: ['#1e1b4b', '#4c1d95', '#be185d', '#22d3ee', '#f0abfc'],
    tags: ['3D', 'Tilt', 'Holographic'],
    fonts: ['Space Grotesk'],
    prompt: 'Build a collectible-style card that tilts in 3D following the cursor. Wrap it in perspective: 900px. On mousemove compute the pointer position and set rotateX/rotateY up to ±11°, scale to 1.04 and move the drop shadow opposite to the tilt. Layer two overlays: a radial white glare that follows the cursor (mix-blend-mode: overlay) and a cyan/pink holographic stripe whose angle shifts with tilt (mix-blend-mode: color-dodge). Card body: violet-to-pink gradient, "HOLO · 07 / ★ RARE" header, a glowing conic-gradient orb, and the title "Prism Core". Spring back smoothly on mouse leave.',
    code: `.scene { perspective: 900px; }\n.card { transform: rotateX(var(--rx)) rotateY(var(--ry)); transform-style: preserve-3d; transition: transform .6s cubic-bezier(.16,1,.3,1); }\n.glare { background: radial-gradient(circle at var(--gx) var(--gy), rgba(255,255,255,.55), transparent 55%); mix-blend-mode: overlay; }\n.content { transform: translateZ(40px); }`,
    usage: 'NFT/collectible showcases, product highlights and playful portfolio pieces.',
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
  {
    title: 'Async Button States', category: 'Buttons', component: ButtonStates,
    accent: '#2563eb',
    palette: ['#2563eb', '#16a34a', '#dc2626', '#f8fafc', '#0f172a'],
    tags: ['Loading', 'Success', 'Error'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Create a single action button that walks through idle → loading → success/error states on #f8fafc. Idle: blue (#2563eb) "Deploy to production" with a lightning icon and a matching colored glow. Click: a 16px spinner appears and the label becomes "Deploying…" with aria-busy. After 1.6s it turns green with a popping check icon and "Deployed", then resets after 2.2s. If failure is simulated (checkbox below), it turns red, shakes horizontally and reads "Retry deploy". Below the button show a 4-step state legend with colored dots.',
    code: `.btn { transition: background .35s, box-shadow .35s; }\n.btn[aria-busy="true"] .spinner { width: 16px; height: 16px; border: 2px solid rgba(255,255,255,.35); border-top-color: #fff; border-radius: 50%; animation: spin .7s linear infinite; }\n.btn.error { background: #dc2626; animation: shake .4s ease; }\n@keyframes shake { 20%,60% { transform: translateX(-6px); } 40%,80% { transform: translateX(6px); } }`,
    usage: 'Any action that talks to a server: saving, deploying, paying, submitting forms.',
  },
  {
    title: 'Premium Button Effects', category: 'Buttons', component: ShinyButtons,
    accent: '#a78bfa',
    palette: ['#09090b', '#a78bfa', '#22d3ee', '#f43f5e', '#ec4899'],
    tags: ['Shimmer', 'Border Beam', '3D Press'],
    fonts: ['Inter', 'Space Grotesk', 'DM Mono'],
    prompt: 'Showcase four premium button effects in a 2×2 grid on #09090b, each labelled in tiny DM Mono caps. 1) Shimmer: dark button with a moving light sweep (linear-gradient at 110deg, background-size 200%, animated background-position). 2) Border beam: a 1px wrapper with overflow hidden whose ::before is a spinning conic-gradient (violet → cyan) that reveals a travelling light along the border. 3) 3D pressable: rose (#f43f5e) button with a solid 6px darker bottom shadow that collapses as it translates down on press. 4) Gradient ring: pill button with a transparent border painted via a padding-box/border-box double background (orange → pink → violet).',
    code: `.shimmer { background: linear-gradient(110deg, #18181b 40%, #3f3f46 50%, #18181b 60%) 0 0 / 200% 100%; animation: shimmer 2.4s linear infinite; }\n.beam::before { content: ''; position: absolute; inset: -150%; background: conic-gradient(transparent 0 300deg, #a78bfa 330deg, #22d3ee 360deg); animation: spin 3s linear infinite; }\n.press { box-shadow: 0 6px 0 #9f1239; } .press:active { transform: translateY(5px); box-shadow: 0 1px 0 #9f1239; }\n.ring { border: 2px solid transparent; background: linear-gradient(#09090b,#09090b) padding-box, linear-gradient(90deg,#f97316,#ec4899,#8b5cf6) border-box; }`,
    usage: 'Hero CTAs and upgrade prompts where one button needs to stand out.',
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
  {
    title: 'Multi-step Wizard', category: 'Forms', component: MultiStepWizard,
    accent: '#0f766e',
    palette: ['#0f766e', '#f5f5f4', '#ccfbf1', '#1c1917', '#a8a29e'],
    tags: ['Stepper', 'Onboarding', 'Validation'],
    fonts: ['Inter'],
    prompt: 'Build a 4-step onboarding wizard (Account → Workspace → Plan → Done) on #f5f5f4. A horizontal stepper at the top: numbered 26px circles that become teal (#0f766e) check marks when complete, the current step outlined with a soft teal focus ring, and connector lines that fill teal as you progress. The white step card animates in on every change. Workspace step: a URL field with an "app.co/" prefix addon that slugifies input and shows "is available". Plan step: three selectable plan tiles. Done step: success icon and summary. Footer: Back (disabled on step 1) and Continue / Start over.',
    code: `.step-dot { width: 26px; height: 26px; border-radius: 50%; }\n.step-dot.current { border: 2px solid #0f766e; box-shadow: 0 0 0 4px rgba(15,118,110,.12); }\n.step-dot.done { background: #0f766e; color: #fff; }\n.connector > span { background: #0f766e; transition: width .4s ease; }`,
    usage: 'Onboarding, checkout, account setup and any long form split into digestible steps.',
  },
  {
    title: 'Settings with Save Bar', category: 'Forms', component: SettingsPanel,
    accent: '#3b82f6',
    palette: ['#0a0c11', '#161b25', '#3b82f6', '#e6e8ee', '#6b7385'],
    tags: ['Settings', 'Dirty State', 'Dark'],
    fonts: ['Inter'],
    prompt: 'Design a dark (#0a0c11) settings screen with a 160px left nav (Profile, Security, Notifications, Billing with icons; active item #161b25). The Profile pane has a gradient initial avatar with "Change avatar", a Display name input and a Bio textarea with an 80-character counter, all with #0d1017 fields and #2a2f3a borders. When any field differs from the saved value, a floating "Unsaved changes" bar slides up from the bottom (translateY + opacity) with Reset and a blue Save button; saving or resetting slides it away.',
    code: `.save-bar { position: absolute; bottom: 18px; transform: translate(-50%, 80px); opacity: 0; transition: transform .4s cubic-bezier(.16,1,.3,1), opacity .3s; }\n.save-bar.dirty { transform: translate(-50%, 0); opacity: 1; }\n.field { background: #0d1017; border: 1px solid #2a2f3a; border-radius: 9px; }`,
    usage: 'Account and app settings where accidental navigation should not lose edits.',
  },

  // ─── Inputs ───────────────────────────────────────────────
  {
    title: 'Switches, Checks & Radios', category: 'Inputs', component: ToggleControls,
    accent: '#10b981',
    palette: ['#18181b', '#10b981', '#27272a', '#e4e4e7', '#52525b'],
    tags: ['Switch', 'Checkbox', 'Radio'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Create a dark (#18181b) control kit in two columns. Left: three settings rows (title + description) each with a 46×26 switch using role="switch" and aria-checked; the knob slides with a springy curve and the track turns emerald (#10b981) with a soft glow. Right: custom checkboxes (18px rounded squares that fill emerald with a dark check) built on visually hidden native inputs, and a radio group of two selectable cards (Monthly $12 / Yearly $120) where the selected card gets an emerald border, tinted background and a thick-ring radio dot.',
    code: `.switch { width: 46px; height: 26px; border-radius: 999px; background: #3f3f46; }\n.switch[aria-checked="true"] { background: #10b981; box-shadow: 0 0 16px rgba(16,185,129,.35); }\n.switch .knob { transition: transform .25s cubic-bezier(.34,1.56,.64,1); }\n.radio.checked { border: 5px solid #10b981; }`,
    usage: 'Preferences, filters, permission screens and any boolean or single-choice input.',
  },
  {
    title: 'Range Slider with Histogram', category: 'Inputs', component: RangeSlider,
    accent: '#0d9488',
    palette: ['#fdfcfb', '#0d9488', '#5eead4', '#e7e5e4', '#1c1917'],
    tags: ['Slider', 'Dual Range', 'Filter'],
    fonts: ['Inter', 'Fraunces', 'DM Mono'],
    prompt: 'Design a price-range filter on #fdfcfb. Header: "Price range" in Fraunces with the live "$180 – $640" value in teal DM Mono. Above the track, a 20-bar histogram where bars inside the selected range turn mint (#5eead4) and others stay grey. The dual-thumb slider overlays two native range inputs (pointer-events only on thumbs) above a 4px track with a teal (#0d9488) filled segment between the thumbs; thumbs are white 22px circles with teal borders. Keep a minimum gap between thumbs. Below: Min/Max value boxes and a single volume slider with a gradient fill and percentage readout.',
    code: `.range { -webkit-appearance: none; position: absolute; width: 100%; background: transparent; pointer-events: none; }\n.range::-webkit-slider-thumb { -webkit-appearance: none; pointer-events: auto; width: 22px; height: 22px; border-radius: 50%; background: #fff; border: 2px solid #0d9488; }\n.fill { position: absolute; left: var(--lo); right: calc(100% - var(--hi)); background: #0d9488; }`,
    usage: 'E-commerce filters, booking sites and any numeric range selection.',
  },
  {
    title: 'Tag Input with Suggestions', category: 'Inputs', component: TagInput,
    accent: '#8b5cf6',
    palette: ['#0f0f14', '#18181f', '#8b5cf6', '#2e2e3a', '#f4f4f5'],
    tags: ['Chips', 'Autocomplete', 'Keyboard'],
    fonts: ['Inter'],
    prompt: 'Build a dark (#0f0f14) multi-tag input. The field (#18181f, 1px #2e2e3a, soft violet focus ring) holds colorful removable chips — each chip gets a different hue tint (hsla background, brighter text, matching border) with a small × button. Enter or comma adds a slugified tag, Backspace on an empty input removes the last one, max 8 tags with a counter in the helper text. Typing shows an autocomplete dropdown with # icons. Under the field, a "Popular:" row of dashed suggestion pills adds tags in one click.',
    code: `.tag-field { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 10px; border-radius: 12px; background: #18181f; border: 1px solid #2e2e3a; box-shadow: 0 0 0 4px rgba(139,92,246,.08); }\n.chip { padding: 4px 6px 4px 10px; border-radius: 8px; background: hsla(var(--h), 80%, 65%, .12); color: hsl(var(--h), 85%, 75%); }\n.suggestion { border: 1px dashed #3f3f46; border-radius: 999px; }`,
    usage: 'Topics, skills, recipients, labels — any free-form multi-value field.',
  },
  {
    title: 'Date Range Picker', category: 'Inputs', component: DatePicker,
    accent: '#4f46e5',
    palette: ['#eef2f7', '#4f46e5', '#e0e7ff', '#0f172a', '#94a3b8'],
    tags: ['Calendar', 'Range', 'Booking'],
    fonts: ['Inter', 'Fraunces', 'DM Mono'],
    prompt: 'Create a booking-style date range picker on #eef2f7. A white 290px calendar card with month navigation (chevron buttons) and a Monday-first 7-column grid. Click once to set check-in, again to set check-out (reversing if needed). Start and end days are filled indigo (#4f46e5) rounded squares with a glow; days between get a continuous #e0e7ff band; hovering previews the range before the second click. Next to the calendar: "Your stay" with Check-in / Check-out summary cards and a large Fraunces night count.',
    code: `.day.edge { background: #4f46e5; color: #fff; border-radius: 10px; box-shadow: 0 6px 14px rgba(79,70,229,.35); }\n.day.in-range { background: #e0e7ff; color: #3730a3; border-radius: 0; }\n.grid { display: grid; grid-template-columns: repeat(7, 1fr); }`,
    usage: 'Hotel and travel booking, analytics date filters and reporting periods.',
  },
  {
    title: 'HSL Color Picker', category: 'Inputs', component: ColorPicker,
    accent: '#8b5cf6',
    palette: ['#111113', '#1c1c1f', '#8b5cf6', '#f4f4f5', '#2a2a2e'],
    tags: ['Color', 'Picker', 'Design Tool'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Build a design-tool color picker on #111113. A 250px #1c1c1f panel contains: a saturation/lightness pad (white-to-hue horizontal gradient under a transparent-to-black vertical gradient) with a draggable white-ringed handle; a rainbow hue slider with a custom white thumb; a row of 8 preset swatches; and a readout showing the swatch, the HEX value in DM Mono and the HSL numbers. Beside the panel, render a generated 7-step tonal scale (100–700) from the selected hue so designers can see the full ramp.',
    code: `.pad { background: linear-gradient(to top, #000, transparent), linear-gradient(to right, #808080, hsl(var(--h), 100%, 50%)); border-radius: 12px; cursor: crosshair; }\n.hue { background: linear-gradient(90deg, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00); -webkit-appearance: none; }\n.handle { border: 3px solid #fff; border-radius: 50%; transform: translate(-50%, -50%); }`,
    usage: 'Theme customizers, design tools and brand-color settings.',
  },
  {
    title: 'Upload Dropzone', category: 'Inputs', component: FileDropzone,
    accent: '#7c3aed',
    palette: ['#f6f7fb', '#7c3aed', '#f3e8ff', '#10b981', '#1e293b'],
    tags: ['Upload', 'Drag & Drop', 'Progress'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Design a file upload area on #f6f7fb. A large white dropzone with a 2px dashed #cbd2e1 border, an upload icon in a lilac tile, "Click to upload or drag and drop" (the first part in violet #7c3aed) and a format hint. While dragging over, the border turns violet, the background tints and the zone scales slightly. It wraps a hidden file input. Below, a list of file rows: file icon (turns into a green check when done), name with ellipsis, size or live percentage in DM Mono, a thin progress bar (violet gradient → green when complete) and a trash button.',
    code: `.dropzone { border: 2px dashed #cbd2e1; border-radius: 18px; background: #fff; transition: all .2s; }\n.dropzone.dragging { border-color: #7c3aed; background: rgba(124,58,237,.06); transform: scale(1.01); }\n.progress > span { background: linear-gradient(90deg, #a78bfa, #7c3aed); transition: width .15s linear; }`,
    usage: 'Attachments, media libraries, document portals and profile photo uploads.',
  },
  {
    title: 'Star Rating & Breakdown', category: 'Inputs', component: StarRating,
    accent: '#fbbf24',
    palette: ['#1a1625', '#fbbf24', '#3d3650', '#f5f3ff', '#8b85a0'],
    tags: ['Rating', 'Reviews', 'Hover'],
    fonts: ['Fraunces', 'Inter', 'DM Mono'],
    prompt: 'Create a review widget on a deep plum background (#1a1625). Left: "Rate your stay" in Fraunces, a hint line, and five 34px star buttons in a radiogroup. Hovering previews the rating (stars fill amber #fbbf24 with a drop-shadow glow) and the hovered star bounces with scale(1.25) rotate(-8deg); a label below changes from "Terrible" to "Amazing!". Right: a summary card with the average "4.6 / 5 · 1,920 reviews" and 5→1 star distribution bars in amber with percentage labels.',
    code: `.star { transition: transform .2s cubic-bezier(.34,1.56,.64,1); }\n.star:hover { transform: scale(1.25) rotate(-8deg); }\n.star.on svg { fill: #fbbf24; filter: drop-shadow(0 0 10px rgba(251,191,36,.55)); }\n.bar > span { background: #fbbf24; border-radius: 4px; }`,
    usage: 'Product reviews, post-purchase surveys, app feedback and NPS-style prompts.',
  },

  // ─── Auth ─────────────────────────────────────────────────
  {
    title: 'Split Login Card', category: 'Auth', component: LoginCard,
    accent: '#2563eb',
    palette: ['#111827', '#1e3a8a', '#60a5fa', '#ffffff', '#ef4444'],
    tags: ['Login', 'Validation', 'Social Auth'],
    fonts: ['Inter', 'Instrument Serif'],
    prompt: 'Design a split sign-in screen. Left 230px panel: dark navy gradient (#111827 → #1e3a8a) with a logo, a large decorative ring, and a customer quote in Instrument Serif. Right: white form with "Welcome back", a "Create an account" link, two social buttons (Google, GitHub), an OR divider, then email and password fields with leading icons and a show/hide password toggle. On submit, invalid fields get a red border, a soft red focus ring and inline error text ("Enter a valid email address", "At least 8 characters"). A full-width dark "Sign in" button and a "Forgot password?" link.',
    code: `.field { display: flex; align-items: center; gap: 8px; height: 40px; border: 1px solid #e5e7eb; border-radius: 10px; }\n.field[aria-invalid="true"] { border-color: #f87171; box-shadow: 0 0 0 3px rgba(248,113,113,.15); }\n.error { font-size: 10px; color: #ef4444; }`,
    usage: 'Login and sign-up pages for SaaS products and internal tools.',
  },
  {
    title: 'Password Strength Meter', category: 'Auth', component: PasswordStrength,
    accent: '#10b981',
    palette: ['#0c1222', '#ef4444', '#eab308', '#22c55e', '#10b981'],
    tags: ['Password', 'Validation', 'Live Feedback'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Build a "Set a password" card on a dark navy gradient. The input uses DM Mono with wide letter-spacing when masked, a lock icon and a show/hide toggle; its border tints with the current strength color. Below: a 4-segment meter that fills from red (Too weak) through orange, yellow, green to emerald (Strong), a live-announced strength label (aria-live="polite"), and a checklist of rules (10+ characters, uppercase, number, symbol) whose icons switch from a dash to an emerald check as each rule passes.',
    code: `.meter { display: flex; gap: 5px; }\n.meter > span { flex: 1; height: 5px; border-radius: 4px; background: rgba(255,255,255,.08); transition: background .3s; }\n.meter > span.on { background: var(--strength-color); }\n.rule.ok { color: #cbd5e1; } .rule.ok .icon { background: rgba(16,185,129,.15); color: #10b981; }`,
    usage: 'Sign-up, password reset and security settings screens.',
  },
  {
    title: 'OTP Verification', category: 'Auth', component: OTPVerify,
    accent: '#4f46e5',
    palette: ['#fafafa', '#4f46e5', '#a5b4fc', '#22c55e', '#ef4444'],
    tags: ['2FA', 'One-time Code', 'Auto-advance'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Create a 6-digit one-time-code screen on #fafafa. Shield icon tile, "Check your phone", masked phone number. Six 48×56 single-digit inputs in DM Mono (gap after the third) with inputMode="numeric" and autocomplete="one-time-code". Typing auto-advances, Backspace moves back, arrow keys navigate, and pasting a full code fills all boxes. Filled boxes get an indigo border; a complete correct code turns all borders green and swaps the icon to a check ("Verified!"); a wrong code shakes the row with red borders and an error message. A resend link counts down from 0:30.',
    code: `.otp input { width: 48px; height: 56px; text-align: center; font: 600 22px 'DM Mono', monospace; border: 2px solid #e4e4e7; border-radius: 12px; }\n.otp input:not(:placeholder-shown) { border-color: #a5b4fc; }\n.otp.error { animation: shake .4s ease; } .otp.error input { border-color: #ef4444; }`,
    usage: 'Two-factor authentication, phone verification and passwordless login.',
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
  {
    title: 'Interactive Area Chart', category: 'Dashboard', component: AreaChart,
    accent: '#38bdf8',
    palette: ['#0b0f17', '#38bdf8', '#34d399', '#1e2633', '#f8fafc'],
    tags: ['SVG Chart', 'Crosshair', 'Range Toggle'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Build a dark (#0b0f17) MRR chart card with no chart library: hand-written SVG. Header shows "Monthly recurring revenue", a large tabular-number value that updates with the hovered point, and a green "▲ x%" delta pill. A 7D / 30D / 90D segmented toggle swaps the dataset. The chart is a smooth cubic-bezier line (#38bdf8, 2.5px) over an area filled with a vertical sky-blue gradient fading to transparent, on dashed #1e2633 gridlines. Hovering moves a vertical crosshair and a ringed dot to the nearest point.',
    code: `svg { overflow: visible; cursor: crosshair; }\n.line { fill: none; stroke: #38bdf8; stroke-width: 2.5; stroke-linecap: round; }\n.area { fill: url(#fill); } /* <linearGradient id="fill"> #38bdf8 35% → 0% */\n.grid { stroke: #1e2633; stroke-dasharray: 3 5; }`,
    usage: 'Revenue, traffic and usage trends in analytics dashboards.',
  },
  {
    title: 'Activity Progress Rings', category: 'Dashboard', component: ProgressRings,
    accent: '#fb7185',
    palette: ['#000000', '#fb7185', '#a3e635', '#22d3ee', '#71717a'],
    tags: ['Rings', 'SVG', 'Goals'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Create fitness-style concentric progress rings on pure black. Three SVG circles (Move #fb7185, Exercise #a3e635, Stand #22d3ee) with 16px rounded strokes, 15%-opacity tracks and a soft colored drop-shadow glow. Progress is drawn with stroke-dasharray / stroke-dashoffset and animates in from empty with a staggered keyframe (rotate the SVG -90° so it starts at 12 o’clock). The center shows "79% Daily goal". A legend on the right lists each ring’s label in its color, the percentage and the goal in DM Mono (e.g. "520 / 640 kcal").',
    code: `.ring { fill: none; stroke-width: 16; stroke-linecap: round; stroke-dasharray: var(--circ); stroke-dashoffset: calc(var(--circ) * (1 - var(--p))); animation: fill 1.4s cubic-bezier(.16,1,.3,1) both; }\n@keyframes fill { from { stroke-dashoffset: var(--circ); } }\nsvg { transform: rotate(-90deg); }`,
    usage: 'Health and fitness apps, goal tracking, quota and storage usage.',
  },
  {
    title: 'Sortable Data Table', category: 'Dashboard', component: DataTable,
    accent: '#4f46e5',
    palette: ['#ffffff', '#4f46e5', '#eef2ff', '#10b981', '#0f172a'],
    tags: ['Table', 'Sort', 'Bulk Select'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Design an invoices data table on white. Toolbar: title with "n selected" count, a compact search input that filters rows, and an indigo Export button. Table inside a 12px-rounded bordered container: a select-all checkbox, sortable column headers (Invoice, Customer, Status, Date, Amount) with arrow icons and aria-sort, invoice IDs in DM Mono, status pills with colored dots (Paid green, Pending amber, Overdue red), right-aligned tabular-number amounts, and selected rows highlighted #eef2ff. Show an empty-state row when the search has no matches.',
    code: `th button { display: inline-flex; gap: 4px; background: none; border: 0; font: inherit; }\ntr.selected { background: #eef2ff; }\n.status { display: inline-flex; gap: 5px; padding: 2px 8px; border-radius: 999px; }\n.amount { text-align: right; font-variant-numeric: tabular-nums; }`,
    usage: 'Admin panels, billing pages, CRMs and anywhere users scan and act on records.',
  },
  {
    title: 'Drag & Drop Kanban', category: 'Dashboard', component: KanbanBoard,
    accent: '#818cf8',
    palette: ['#f1f5f9', '#e8edf3', '#818cf8', '#f59e0b', '#22c55e'],
    tags: ['Kanban', 'Drag and Drop', 'Tasks'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Build a three-column kanban board (To do, In progress, Done) on #f1f5f9 using native HTML5 drag and drop. Columns are #e8edf3 rounded panels with a colored status dot, title and count badge; while a card hovers over a column it turns light indigo with a dashed #818cf8 outline. Cards are white with a colored label chip (Design/Bug/Feature/Docs), title, ticket ID in DM Mono and an assignee dot. The dragged card tilts 2°, fades and gets a lifted shadow. Done cards get a strikethrough. Empty columns show "Drop cards here".',
    code: `.column.over { background: #e0e7ff; outline: 2px dashed #818cf8; }\n.card { background: #fff; border-radius: 10px; cursor: grab; box-shadow: 0 1px 2px rgba(15,23,42,.06); }\n.card.dragging { opacity: .6; transform: rotate(2deg); box-shadow: 0 12px 24px rgba(15,23,42,.18); }`,
    usage: 'Project management, sprint boards, hiring pipelines and content calendars.',
  },
  {
    title: 'Week Calendar View', category: 'Dashboard', component: WeekSchedule,
    accent: '#7c3aed',
    palette: ['#ffffff', '#7c3aed', '#ef4444', '#0ea5e9', '#10b981'],
    tags: ['Calendar', 'Schedule', 'Time Grid'],
    fonts: ['Inter', 'Fraunces'],
    prompt: 'Create a Monday–Friday week calendar on white. Header: "October 2026" in Fraunces and an event summary that updates on hover. Day headers show weekday and date, with today in a violet (#7c3aed) circle and today’s column faintly tinted. A 9am–5pm time grid uses repeating-linear-gradient hour lines. Events are absolutely positioned by start/end time: tinted backgrounds (color at ~12% alpha) with a 3px solid left border, title and time; hover lifts them with a colored shadow. A red "now" line with a dot marks the current time in today’s column.',
    code: `.day-col { position: relative; background-image: repeating-linear-gradient(180deg, #f3f4f6 0 1px, transparent 1px 34px); }\n.event { position: absolute; top: calc((var(--start) - 9) * 34px); height: calc((var(--end) - var(--start)) * 34px); border-left: 3px solid var(--c); background: color-mix(in srgb, var(--c) 12%, transparent); border-radius: 7px; }\n.now { height: 2px; background: #ef4444; }`,
    usage: 'Scheduling apps, booking tools, team availability and productivity planners.',
  },

  // ─── Feedback ─────────────────────────────────────────────
  {
    title: 'Stacked Toast Notifications', category: 'Feedback', component: ToastStack,
    accent: '#3b82f6',
    palette: ['#f4f5f8', '#22c55e', '#ef4444', '#3b82f6', '#f59e0b'],
    tags: ['Toast', 'Stack', 'Auto-dismiss'],
    fonts: ['Inter', 'Fraunces'],
    prompt: 'Build a Sonner-style toast system on #f4f5f8. Buttons on the left trigger success, error, info and warning toasts. Toasts stack in the bottom-right: the newest sits in front and older ones peek behind it, offset up 12px each and scaled down 5% per level (max 3 visible). Hovering the stack expands it into a full vertical list with spring easing. Each white toast has a colored status icon, title, description and a dismiss ×, enters from below with a scale-up animation, uses role="status" and auto-dismisses after 6 seconds.',
    code: `.toast { position: absolute; right: 0; bottom: 0; transform: translateY(calc(var(--i) * -12px)) scale(calc(1 - var(--i) * .05)); transition: transform .4s cubic-bezier(.16,1,.3,1); }\n.stack:hover .toast { transform: translateY(calc(var(--i) * -76px)); }\n@keyframes toastIn { from { opacity: 0; transform: translateY(40px) scale(.9); } }`,
    usage: 'Non-blocking confirmations and errors after user actions in any web app.',
  },
  {
    title: 'Alert Banners', category: 'Feedback', component: AlertBanners,
    accent: '#d97706',
    palette: ['#2563eb', '#16a34a', '#d97706', '#dc2626', '#ffffff'],
    tags: ['Alerts', 'Status', 'Dismissible'],
    fonts: ['Inter'],
    prompt: 'Design four inline alert banners on white: info (blue), success (green), warning (amber) and error (red). Each has a tinted background, a matching 1px border with a thicker 4px left accent, a status icon, a bold title with a one-line description, an optional outlined action button in the tone color (View status, Upgrade, View logs) and a dismiss ×. Error uses role="alert", others role="status". Dismissed alerts disappear and a dashed "Restore n dismissed" pill appears at the bottom.',
    code: `.alert { display: flex; gap: 12px; padding: 12px 14px; border-radius: 12px; background: var(--bg); border: 1px solid var(--border); border-left: 4px solid var(--tone); }\n.alert .action { border: 1px solid var(--border); color: var(--tone); background: #fff; }`,
    usage: 'System status, form-level errors, billing warnings and important announcements.',
  },
  {
    title: 'Skeleton Loading Feed', category: 'Feedback', component: SkeletonLoader,
    accent: '#a78bfa',
    palette: ['#0e1015', '#14171e', '#1a1d25', '#262a35', '#a78bfa'],
    tags: ['Skeleton', 'Shimmer', 'Loading'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Create a dark social feed (#0e1015) that alternates between loading and loaded states. Loading: each post card shows skeleton "bones" — a circular avatar, two short title bars and three text lines of varying width — with a shimmering gradient (#1a1d25 → #262a35 → #1a1d25 at 300% width, animated background-position). Loaded: the real avatar, name, timestamp and post text fade and slide in. A small toggle pill in the header switches states manually; the container sets aria-busy while loading.',
    code: `.bone { background: linear-gradient(90deg, #1a1d25 0%, #262a35 40%, #1a1d25 80%) 0 0 / 300% 100%; animation: shimmer 1.4s ease-in-out infinite; border-radius: 6px; }\n@keyframes shimmer { from { background-position: 100% 0; } to { background-position: -50% 0; } }`,
    usage: 'Feeds, dashboards and lists where content loads asynchronously.',
  },
  {
    title: 'Loader Collection', category: 'Feedback', component: LoaderCollection,
    accent: '#f472b6',
    palette: ['#0f0d1a', '#a78bfa', '#f472b6', '#22d3ee', '#34d399'],
    tags: ['Spinner', 'CSS Animation', 'Indeterminate'],
    fonts: ['DM Mono'],
    prompt: 'Showcase six pure-CSS loaders in a 3×2 grid on #0f0d1a, each labelled in tiny DM Mono caps: 1) a violet ring spinner (transparent ring with a colored top border), 2) three pink bouncing dots with staggered delays, 3) a cyan 5-bar equalizer scaling on Y, 4) an emerald pulse with two expanding, fading ripples, 5) four colored squares orbiting as a rotating group, 6) an amber indeterminate progress bar with a gradient segment sliding across a track.',
    code: `.ring { border: 4px solid rgba(167,139,250,.15); border-top-color: #a78bfa; border-radius: 50%; animation: spin .8s linear infinite; }\n.dot { animation: bounce 1.2s infinite ease-in-out both; }\n@keyframes bounce { 0%,80%,100% { transform: scale(.4); opacity: .4; } 40% { transform: scale(1); opacity: 1; } }\n.bar { animation: eq 1s infinite ease-in-out; } @keyframes eq { 50% { transform: scaleY(1); } 0%,100% { transform: scaleY(.35); } }`,
    usage: 'Pick-and-mix loading indicators for buttons, pages, media and background tasks.',
  },
  {
    title: 'Empty State', category: 'Feedback', component: EmptyState,
    accent: '#ea580c',
    palette: ['#fbfaf8', '#1c1917', '#ea580c', '#ffedd5', '#78716c'],
    tags: ['Empty State', 'Illustration', 'Onboarding'],
    fonts: ['Fraunces', 'Inter'],
    prompt: 'Design a friendly empty state on warm off-white (#fbfaf8). A small CSS-only illustration: two stacked white "cards" (one rotated 6°), the front one floating gently up and down with a folder icon tile and two placeholder lines, plus an orange sparkle and a soft elliptical shadow. Below: "No projects yet" in Fraunces 22px, a helpful two-line explanation, and two actions — a dark primary "New project" button with a plus icon and a white secondary "Browse templates".',
    code: `.illustration .card { background: #fff; border: 1px solid #e7e5e4; border-radius: 14px; box-shadow: 0 14px 30px rgba(28,25,23,.08); animation: float 4s ease-in-out infinite; }\n@keyframes float { 50% { transform: translateY(-8px) rotate(-1deg); } }`,
    usage: 'First-run experiences, empty lists, cleared inboxes and zero-result searches.',
  },
  {
    title: '404 Parallax Page', category: 'Feedback', component: NotFound404,
    accent: '#6366f1',
    palette: ['#05040d', '#1e1b4b', '#6366f1', '#e0e7ff', '#312e81'],
    tags: ['404', 'Parallax', 'Error Page'],
    fonts: ['Space Grotesk', 'Inter'],
    prompt: 'Create a space-themed 404 page on a deep indigo radial gradient. Scatter ~28 tiny white stars at varying opacity. On mousemove, stars drift with layered parallax (three depth speeds) while a giant "404" (Space Grotesk 150px, letter-spacing -8px) moves the opposite way; the number has a vertical #e0e7ff → #6366f1 → #312e81 gradient text fill and an indigo glow. Below: "Lost in space", a playful one-liner, a glowing indigo "Back home" button and an outlined "Report a broken link".',
    code: `.big { font: 700 150px/0.9 'Space Grotesk'; letter-spacing: -8px; background: linear-gradient(180deg, #e0e7ff, #6366f1 60%, #312e81); -webkit-background-clip: text; color: transparent; transform: translate(calc(var(--mx) * -12px), calc(var(--my) * -8px)); }\n.star { transform: translate(calc(var(--mx) * var(--depth)), calc(var(--my) * var(--depth))); transition: transform .3s ease-out; }`,
    usage: 'Not-found and error pages that keep users on-brand instead of bouncing.',
  },
  {
    title: 'Tooltips with Arrows', category: 'Feedback', component: TooltipShowcase,
    accent: '#7c3aed',
    palette: ['#fafafa', '#18181b', '#7c3aed', '#c4b5fd', '#e4e4e7'],
    tags: ['Tooltip', 'Placement', 'A11y'],
    fonts: ['Inter'],
    prompt: 'Build a tooltip component showcase on #fafafa. A toolbar of four 44px icon buttons (Bold, Link, Image, Code), each with a dark (#18181b) tooltip in a different placement — top, bottom, left, right — complete with a CSS border-triangle arrow. Tooltips use role="tooltip", open on hover and keyboard focus, and fade + slide 4px from the anchor. Below, a paragraph with an inline dashed-underlined violet term that shows its own tooltip, demonstrating inline usage.',
    code: `.tooltip { position: absolute; padding: 6px 10px; border-radius: 8px; background: #18181b; color: #fafafa; font-size: 11px; opacity: 0; transition: opacity .15s, transform .15s; pointer-events: none; }\n.anchor:hover .tooltip, .anchor:focus-within .tooltip { opacity: 1; }\n.tooltip.top::after { content: ''; position: absolute; top: 100%; left: 50%; transform: translateX(-50%); border: 5px solid transparent; border-top-color: #18181b; }`,
    usage: 'Icon-only toolbars, form hints, glossary terms and keyboard shortcut hints.',
  },
  {
    title: 'Badges & Avatars', category: 'Feedback', component: BadgesAvatars,
    accent: '#8b5cf6',
    palette: ['#ffffff', '#f97316', '#8b5cf6', '#0ea5e9', '#ef4444'],
    tags: ['Avatar', 'Badge', 'Presence'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Design a white reference sheet of avatars and badges. Row 1: five gradient initial avatars in descending sizes (56 → 22px) with presence dots (online green, away amber, offline grey) scaled to each size, plus a dashed "+" add tile. Row 2: an overlapping avatar group with a "+9" overflow bubble and "13 people are editing". Row 3: status badges — Default, Active (green dot), Pending (amber dot), Failed (red dot), outlined Beta, gradient New — and a bell icon with a red count bubble.',
    code: `.avatar { border-radius: 50%; display: grid; place-items: center; color: #fff; }\n.presence { position: absolute; right: 0; bottom: 0; border: 2px solid #fff; border-radius: 50%; }\n.group .avatar + .avatar { margin-left: -10px; border: 2px solid #fff; }\n.badge { display: inline-flex; gap: 6px; padding: 4px 10px; border-radius: 999px; font-size: 12px; }`,
    usage: 'Collaboration indicators, user lists, statuses and notification counts.',
  },

  // ─── Overlays ─────────────────────────────────────────────
  {
    title: 'Destructive Confirm Modal', category: 'Overlays', component: ModalDialog,
    accent: '#dc2626',
    palette: ['#f8fafc', '#dc2626', '#fee2e2', '#0f172a', '#64748b'],
    tags: ['Modal', 'Confirm', 'Danger'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Create a "Delete project?" confirmation modal over a settings page. The backdrop is rgba(15,23,42,0.45) with a 3px blur and fades in; clicking it or pressing Escape closes. The 380px dialog (role="alertdialog", aria-modal, aria-labelledby) scales and slides up into place. It has a red trash icon in a #fee2e2 circle, a title, an explanation naming the project in bold, and a "Type acme-web to confirm" input in DM Mono. The red "Delete project" button stays disabled (light red) until the text matches. Footer: Cancel and Delete on a #f8fafc strip.',
    code: `.backdrop { position: fixed; inset: 0; background: rgba(15,23,42,.45); backdrop-filter: blur(3px); animation: fade .2s; }\n.dialog { width: 380px; border-radius: 16px; background: #fff; box-shadow: 0 30px 60px rgba(15,23,42,.3); animation: dialogIn .3s cubic-bezier(.16,1,.3,1); }\n@keyframes dialogIn { from { opacity: 0; transform: translateY(12px) scale(.96); } }\n.danger:disabled { background: #fca5a5; cursor: not-allowed; }`,
    usage: 'Irreversible actions: deleting projects, removing members, cancelling plans.',
  },
  {
    title: 'Cart Drawer', category: 'Overlays', component: DrawerSheet,
    accent: '#65a30d',
    palette: ['#f5f2ec', '#1c1917', '#65a30d', '#ffffff', '#a8a29e'],
    tags: ['Drawer', 'Cart', 'Side Sheet'],
    fonts: ['Instrument Serif', 'Inter'],
    prompt: 'Build a slide-in cart drawer for a minimal fashion store (#f5f2ec background, "Atelier" logo in Instrument Serif and a cart pill with item count). The 300px white drawer slides in from the right with cubic-bezier(0.16,1,0.3,1) over a dimmed backdrop. Inside: header with a close button, a free-shipping progress bar ("$x away from free shipping" → "You unlocked free shipping") in olive green, line items with color swatch thumbnails, variant text and a −/+ quantity stepper (0 removes the item), and a sticky footer with subtotal and a full-width dark Checkout button.',
    code: `.drawer { position: fixed; top: 0; right: 0; bottom: 0; width: 300px; background: #fff; transform: translateX(100%); transition: transform .45s cubic-bezier(.16,1,.3,1); }\n.drawer.open { transform: none; }\n.backdrop { background: rgba(28,25,23,.35); opacity: 0; transition: opacity .3s; }\n.ship-progress > span { background: #65a30d; }`,
    usage: 'E-commerce carts, filter panels, detail views and mobile navigation.',
  },
  {
    title: 'Dropdown Action Menu', category: 'Overlays', component: DropdownMenu,
    accent: '#f87171',
    palette: ['#0c0c0f', '#16161b', '#2a2a33', '#e4e4e7', '#f87171'],
    tags: ['Menu', 'Dropdown', 'Shortcuts'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Design a dark file row (#16161b) with a "more" (⋯) icon button that opens an action menu. The 220px menu (role="menu") uses translucent rgba(28,28,34,0.96) with backdrop blur, a 1px #2e2e36 border and a deep shadow, and scales in from its top-right origin. Items are grouped with hairline separators: Edit (⌘E), Duplicate (⌘D), Share with a submenu chevron; Move to folder, Add to favorites; and a red destructive Delete (⌫). Each row has an icon, label and right-aligned DM Mono shortcut; hover/focus-visible highlights in #2a2a33 (red tint for Delete).',
    code: `.menu { position: absolute; right: 0; top: calc(100% + 8px); width: 220px; padding: 5px; border-radius: 12px; background: rgba(28,28,34,.96); backdrop-filter: blur(12px); transform-origin: top right; animation: menuIn .18s cubic-bezier(.16,1,.3,1); }\n.item:hover, .item:focus-visible { background: #2a2a33; }\n.item.danger { color: #f87171; }`,
    usage: 'Row actions in tables and file lists, kebab menus, account menus.',
  },
  {
    title: 'Cookie Consent', category: 'Overlays', component: CookieConsent,
    accent: '#c2410c',
    palette: ['#fef7ee', '#c2410c', '#7c2d12', '#ffffff', '#57534e'],
    tags: ['Consent', 'GDPR', 'Preferences'],
    fonts: ['Inter', 'Instrument Serif'],
    prompt: 'Create a cookie consent card for a bakery site on a warm peach gradient. A 340px white card in the bottom-left slides up with a cookie icon and "We use cookies". Three equal buttons: Customize, Reject all, and a burnt-orange (#c2410c) Accept all. "Customize" swaps the body for a preferences list (Essential — always on and disabled, Analytics, Marketing) with orange checkboxes, plus Back / Save choices. After choosing, the card collapses into a small round cookie button in the corner that reopens it.',
    code: `.consent { position: fixed; left: 20px; bottom: 20px; width: 340px; padding: 18px; border-radius: 18px; background: #fff; box-shadow: 0 20px 50px rgba(124,45,18,.18); }\n.consent .primary { background: #c2410c; color: #fff; }\n.consent-fab { width: 42px; height: 42px; border-radius: 50%; background: #7c2d12; }`,
    usage: 'GDPR/CCPA-compliant consent on marketing sites and web apps.',
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
  {
    title: 'Product Detail Panel', category: 'Commerce', component: ProductDetail,
    accent: '#c2703d',
    palette: ['#fffdf9', '#c2703d', '#5f7a4a', '#27303f', '#1c1917'],
    tags: ['PDP', 'Variants', 'Add to Cart'],
    fonts: ['Fraunces', 'Inter'],
    prompt: 'Build a product detail view for a sneaker on #fffdf9. Left: a 270px media panel whose gradient background and CSS shoe silhouette recolor when a color variant is chosen, with a "NEW" tag, a wishlist heart toggle and gallery dots. Right: category eyebrow, "Terra Runner" in Fraunces, star rating with review count, price with strikethrough original and a green discount, color swatches (Clay, Moss, Ink) with a ring on the selected one, a 6-column EU size grid with a crossed-out sold-out size, a full-width "Add to cart" that turns green with "Added · size 41", and a delivery estimate.',
    code: `.swatch[aria-pressed="true"] { box-shadow: 0 0 0 2px var(--c); border: 2px solid #fffdf9; }\n.size:disabled { color: #d6d3d1; text-decoration: line-through; cursor: not-allowed; }\n.size.selected { background: #1c1917; color: #fff; }\n.media { transition: background .4s; }`,
    usage: 'Product pages for fashion, footwear and any item with variants.',
  },
  {
    title: 'Live Credit Card Checkout', category: 'Commerce', component: CheckoutCard,
    accent: '#4338ca',
    palette: ['#f4f4f5', '#1e1b4b', '#4338ca', '#06b6d4', '#fde68a'],
    tags: ['Payment', '3D Flip', 'Input Masking'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Create a payment form beside a live credit card preview. The 250×158 card has an indigo-to-cyan gradient, a gold chip, an auto-detected brand (VISA/MASTERCARD/AMEX), the number masked as you type in DM Mono, cardholder name and expiry. Focusing the CVC field flips the card in 3D (perspective 1000px, rotateY 180°, backface-visibility hidden) to show the magnetic stripe and CVC. Inputs auto-format: number in groups of 4, expiry as MM/YY, uppercase name, digits-only CVC, with proper autocomplete="cc-*" attributes. Finish with a "Pay $128.00" indigo button.',
    code: `.card-3d { transform-style: preserve-3d; transition: transform .7s cubic-bezier(.16,1,.3,1); }\n.card-3d.flipped { transform: rotateY(180deg); }\n.face { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 16px; }\n.back { transform: rotateY(180deg); }`,
    usage: 'Checkout flows, subscription upgrades and saved payment methods.',
  },

  // ─── Social ───────────────────────────────────────────────
  {
    title: 'Messenger Chat', category: 'Social', component: ChatInterface,
    accent: '#3b82f6',
    palette: ['#eef0f5', '#3b82f6', '#6366f1', '#f1f3f8', '#22c55e'],
    tags: ['Chat', 'Typing Indicator', 'Bubbles'],
    fonts: ['Inter'],
    prompt: 'Build a messenger window (360×360, white, 20px radius) on #eef0f5. Header: avatar with a green presence dot, name, and status that flips to "typing…" in blue. The message log (role="log", aria-live) shows grouped bubbles: incoming #f1f3f8, outgoing blue-to-indigo gradient; the corner nearest the sender squares off only on the last bubble of a group. New messages slide in and the list auto-scrolls. Sending shows a three-dot bouncing typing indicator, then an auto-reply. Composer: paperclip button, pill input and a round send button that is disabled until there is text.',
    code: `.bubble.me { align-self: flex-end; background: linear-gradient(135deg, #3b82f6, #6366f1); color: #fff; border-radius: 16px 16px 4px 16px; }\n.bubble.them { background: #f1f3f8; border-radius: 16px 16px 16px 4px; }\n.typing span { animation: typing 1.2s infinite; } @keyframes typing { 30% { transform: translateY(-4px); opacity: 1; } }`,
    usage: 'Support widgets, team chat, marketplaces and AI assistant interfaces.',
  },
  {
    title: 'Threaded Comments', category: 'Social', component: CommentThread,
    accent: '#e11d48',
    palette: ['#ffffff', '#0f172a', '#e11d48', '#4338ca', '#f1f5f9'],
    tags: ['Comments', 'Replies', 'Likes'],
    fonts: ['Inter'],
    prompt: 'Design a discussion thread on white. Header: "Discussion · n" total count. A composer row with your avatar, a bordered input and a "Post" button that activates when text is entered. Comments show a colored initial avatar, bold name, optional indigo "AUTHOR" badge, relative time, body text and actions (heart like toggle with count that turns rose #e11d48, Reply). Replies are indented under their parent with smaller avatars and a 2px #f1f5f9 left thread line. New comments animate in at the bottom.',
    code: `.replies { margin-left: 15px; padding-left: 25px; border-left: 2px solid #f1f5f9; }\n.badge-author { font-size: 9px; font-weight: 700; padding: 1px 5px; border-radius: 4px; background: #e0e7ff; color: #4338ca; }\n.like[aria-pressed="true"] { color: #e11d48; }`,
    usage: 'Blogs, docs feedback, design review tools and community forums.',
  },
  {
    title: 'Notification Center', category: 'Social', component: NotificationCenter,
    accent: '#4f46e5',
    palette: ['#0f172a', '#ffffff', '#4f46e5', '#f8faff', '#94a3b8'],
    tags: ['Notifications', 'Inbox', 'Unread'],
    fonts: ['Inter'],
    prompt: 'Create a notifications popover (380px white card) on a dark slate gradient. Header: "Notifications" and a "Mark all as read" link that disables when nothing is unread. Tabs: All (with an indigo unread count pill) and Mentions, underlined in indigo. Rows show an avatar or icon tile (deploy bolt, security shield), a sentence with bold actor and target, relative time, and an indigo unread dot; unread rows have a #f8faff background. Clicking a row marks it read. An invite row includes inline Accept / Decline buttons. Empty tabs show "You’re all caught up ✨".',
    code: `.row.unread { background: #f8faff; }\n.unread-dot { width: 8px; height: 8px; border-radius: 50%; background: #4f46e5; }\n.tab[aria-selected="true"] { color: #0f172a; border-bottom: 2px solid #4f46e5; }`,
    usage: 'App headers, activity inboxes and collaboration tools.',
  },
  {
    title: 'Social Media Post', category: 'Social', component: SocialPost,
    accent: '#ef4444',
    palette: ['#fafafa', '#f59e0b', '#ec4899', '#8b5cf6', '#ef4444'],
    tags: ['Feed', 'Double-tap Like', 'Story Ring'],
    fonts: ['Inter'],
    prompt: 'Build an Instagram-style post card (320px). Header: avatar inside a gradient story ring (amber → pink → violet), username, location and a more icon. Media: a sunset gradient image; double-clicking it likes the post and pops a big white heart in the center (scale 0 → 1.3 → fade). Action row: heart (bumps and fills red when liked), comment, share, and a bookmark that fills when saved. Then the like count (updates live), caption with bold username and an uppercase timestamp.',
    code: `.story-ring { padding: 2px; border-radius: 50%; background: linear-gradient(45deg, #f59e0b, #ec4899, #8b5cf6); }\n.heart-pop { animation: heartPop .9s ease forwards; }\n@keyframes heartPop { 0% { transform: scale(0); opacity: 0; } 40% { transform: scale(1.3); opacity: 1; } 100% { transform: scale(1.6); opacity: 0; } }`,
    usage: 'Social feeds, community galleries and UGC showcases.',
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
  {
    title: 'Video Player Controls', category: 'Media', component: VideoPlayer,
    accent: '#ef4444',
    palette: ['#000000', '#ef4444', '#0e7490', '#f97316', '#ffffff'],
    tags: ['Video', 'Scrubber', 'Chapters'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Design a custom video player (600×400) with a cinematic gradient poster. Top overlay: title, chapter subtitle and a "4K" glass badge. A centered frosted round play button shows while paused. Bottom gradient overlay holds the scrubber: a track with a buffered segment, red played progress, chapter gaps, a red thumb with a halo, and a timestamp tooltip that follows the cursor; the track thickens on hover and clicking seeks. Control row: play/pause, +10s, volume, "1:13 / 3:34" in DM Mono, a cycling playback-speed pill (0.5×–2×) and fullscreen.',
    code: `.scrubber { height: 4px; background: rgba(255,255,255,.2); transition: height .15s; }\n.scrubber:hover { height: 6px; }\n.buffered { background: rgba(255,255,255,.3); }\n.played { background: #ef4444; }\n.thumb { width: 12px; height: 12px; border-radius: 50%; background: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,.3); }`,
    usage: 'Course platforms, product demos, streaming and marketing videos.',
  },
  {
    title: 'Ken Burns Carousel', category: 'Media', component: ImageCarousel,
    accent: '#a855f7',
    palette: ['#0c0a09', '#f97316', '#0891b2', '#4d7c0f', '#a855f7'],
    tags: ['Carousel', 'Autoplay', 'Progress'],
    fonts: ['Instrument Serif', 'Inter'],
    prompt: 'Build a full-bleed travel carousel with four gradient "photo" slides (Desert Bloom, Northern Glass, Moss Cathedral, Violet Hour). Slides move with translateX and a cubic-bezier(0.77,0,0.18,1) ease, and the active slide does a slow Ken Burns zoom from scale(1.12) to 1. Each slide has a location eyebrow with a pin icon and a large Instrument Serif title over a bottom gradient. Glassy round prev/next arrows sit on the sides. Story-style progress bars along the bottom fill over 3.5s and drive autoplay; hovering pauses.',
    code: `.track { display: flex; transform: translateX(calc(var(--i) * -100%)); transition: transform .8s cubic-bezier(.77,0,.18,1); }\n.slide.active .bg { animation: kenBurns 4s ease-out both; } @keyframes kenBurns { from { transform: scale(1.12); } }\n.progress.active > span { animation: fill 3.5s linear forwards; }`,
    usage: 'Hero galleries, portfolios, travel and real-estate showcases.',
  },
  {
    title: 'Podcast Waveform Player', category: 'Media', component: AudioWaveform,
    accent: '#f97316',
    palette: ['#f5f0e8', '#1c1917', '#f97316', '#db2777', '#44403c'],
    tags: ['Audio', 'Waveform', 'Podcast'],
    fonts: ['Fraunces', 'Instrument Serif', 'Inter', 'DM Mono'],
    prompt: 'Create a podcast player card (#1c1917, 22px radius) on warm beige. Header: gradient cover tile, orange episode eyebrow and the title in Fraunces. A 64-bar waveform acts as the scrubber: played bars use an orange-to-pink gradient, upcoming bars are #44403c; clicking seeks and arrow keys nudge (role="slider" with aria-value attributes). Elapsed and remaining time in DM Mono below. Controls: −15 and +30 skip buttons in outlined circles around a large cream play/pause button.',
    code: `.wave { display: flex; align-items: center; gap: 3px; height: 64px; cursor: pointer; }\n.wave span { flex: 1; border-radius: 2px; background: #44403c; }\n.wave span.played { background: linear-gradient(180deg, #fb923c, #db2777); }`,
    usage: 'Podcast sites, voice notes, audio courses and music previews.',
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
  {
    title: 'Kinetic Headline', category: 'Typography', component: KineticText,
    accent: '#ff4d1a',
    palette: ['#f2efe6', '#151515', '#ff4d1a', '#8a857a', '#ffffff'],
    tags: ['Text Reveal', 'Word Rotator', 'Marquee'],
    fonts: ['Syne', 'Instrument Serif', 'DM Mono'],
    prompt: 'Design a kinetic typography hero on cream (#f2efe6). "Make something" in Syne 58px extra-bold reveals letter by letter: each character rises from below a clipping mask with a slight rotation and a 35ms stagger. Beneath it, a rotating word slot cycles "faster. / bolder. / together. / better." in italic Instrument Serif 66px orange (#ff4d1a) using a stepped translateY keyframe with an expressive ease. Clicking replays the reveal. A black ticker tape at the bottom scrolls "DESIGN ✦ BUILD ✦ SHIP ✦ ITERATE" infinitely.',
    code: `.char { display: inline-block; animation: rise .7s cubic-bezier(.16,1,.3,1) calc(var(--i) * 35ms) both; }\n@keyframes rise { from { transform: translateY(110%) rotate(6deg); } }\n.rotator { height: 62px; overflow: hidden; } .rotator > div { animation: cycle 8s cubic-bezier(.83,0,.17,1) infinite; }\n.ticker { display: flex; width: max-content; animation: marquee 16s linear infinite; }`,
    usage: 'Agency sites, launch pages and portfolio intros that need personality.',
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
  {
    title: 'Magnetic Cursor Button', category: 'Motion', component: MagneticButton,
    accent: '#bef264',
    palette: ['#0a0a0a', '#bef264', '#f5f5f5', '#1a1a1a', '#ffffff'],
    tags: ['Magnetic', 'Cursor', 'Spotlight'],
    fonts: ['Space Grotesk', 'DM Mono'],
    prompt: 'Create a magnetic call-to-action on #0a0a0a. A 130px round "Let’s talk ↗" button sits in the center inside a faint dashed 110px-radius field. When the cursor enters that radius the button is pulled toward it (offset = distance × 0.4), scales to 1.08, turns lime (#bef264) and glows; its label moves at a lower factor for a parallax feel. A soft lime radial spotlight follows the cursor across the whole canvas. Leaving the field springs the button back with cubic-bezier(0.22,1,0.36,1).',
    code: `.magnetic { transform: translate(var(--x), var(--y)) scale(var(--s)); transition: transform .35s cubic-bezier(.22,1,.36,1), background .3s; }\n.magnetic.active { background: #bef264; box-shadow: 0 0 60px rgba(190,242,100,.35); }\n.spotlight { background: radial-gradient(260px circle at var(--mx) var(--my), rgba(190,242,100,.10), transparent 70%); }`,
    usage: 'Portfolio and agency CTAs, contact sections and playful interactive moments.',
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
  {
    title: 'Tabbed Code Block', category: 'Developer', component: CodeBlockTabs,
    accent: '#f78166',
    palette: ['#0d1117', '#010409', '#f78166', '#c084fc', '#86efac'],
    tags: ['Code', 'Syntax Highlight', 'Copy'],
    fonts: ['JetBrains Mono', 'Inter'],
    prompt: 'Design a GitHub-dark code block (#0d1117) on an indigo gradient. A tab bar (#010409) switches between "npm", "app.ts" and "curl" snippets; the active tab has an orange (#f78166) top border. A Copy button on the right copies the plain text and flips to a green "Copied" check for 1.5s. Code renders in JetBrains Mono 12.5px with line numbers in #484f58 (not selectable), token colors (keywords violet, strings green, functions sky, env vars red, comments grey), and highlighted lines marked with a blue tinted background and a 2px blue left border.',
    code: `.tab.active { background: #0d1117; color: #e6edf3; border-top: 2px solid #f78166; }\n.line.hl { background: rgba(56,139,253,.1); border-left: 2px solid #388bfd; }\n.ln { color: #484f58; user-select: none; }\n.tok-k { color: #c084fc; } .tok-s { color: #86efac; } .tok-f { color: #7dd3fc; }`,
    usage: 'Documentation, API references, blog tutorials and README-style landing pages.',
  },
  {
    title: 'Status Page Uptime', category: 'Developer', component: StatusPage,
    accent: '#10b981',
    palette: ['#ffffff', '#10b981', '#f59e0b', '#ef4444', '#065f46'],
    tags: ['Uptime', 'Status', 'Incidents'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Build a public status page on white. Top banner: green #ecfdf5 card with a pinging live dot (expanding ring animation), "All systems operational", last-updated time and a Subscribe button. Then one row per service (API, Dashboard, Webhooks, CDN) with its name and "99.98% uptime" in DM Mono, above a 90-day bar strip: 90 thin rounded bars that are green for healthy days, amber for degraded and red for outages. Hovering a bar enlarges it and shows "Service · n days ago · status" in a caption between "90 days ago" and "Today".',
    code: `.ping { animation: ping 1.6s ease-out infinite; } @keyframes ping { to { transform: scale(2.6); opacity: 0; } }\n.uptime { display: flex; gap: 2px; height: 26px; }\n.uptime span { flex: 1; border-radius: 2px; background: #10b981; }\n.uptime .degraded { background: #f59e0b; } .uptime .outage { background: #ef4444; }`,
    usage: 'SaaS status pages, internal service dashboards and incident communication.',
  },

  // ─── Mobile ───────────────────────────────────────────────
  {
    title: 'Habit Tracker App Screen', category: 'Mobile', component: MobileAppScreen,
    accent: '#f97316',
    palette: ['#faf9f7', '#1c1917', '#f97316', '#8b5cf6', '#0ea5e9'],
    tags: ['iOS', 'Tab Bar', 'Mobile App'],
    fonts: ['Inter'],
    prompt: 'Design a mobile habit tracker inside a 200px phone frame (dark bezel, 28px inner radius, notch pill and status bar) on a pastel gradient. Content: date, "Hi, Sam 👋", a dark progress card showing done/total habits with an amber-to-orange bar that animates as habits are ticked, and tappable habit rows with a color checkbox tile, name (strikethrough when done) and "🔥 n day streak". Bottom: a frosted tab bar with Home, Explore, a raised dark center "+" button, Alerts (red badge dot) and Profile; the active tab is orange.',
    code: `.phone { width: 200px; border-radius: 34px; padding: 7px; background: #111; }\n.tabbar { display: flex; justify-content: space-around; background: rgba(255,255,255,.9); backdrop-filter: blur(10px); }\n.tab.active { color: #f97316; }\n.fab { margin-top: -14px; border-radius: 12px; background: #1c1917; box-shadow: 0 6px 14px rgba(28,25,23,.3); }`,
    usage: 'Mobile app mockups, PWA layouts and app-store marketing screens.',
  },
  {
    title: 'Onboarding Carousel', category: 'Mobile', component: OnboardingFlow,
    accent: '#6366f1',
    palette: ['#f8f7ff', '#6366f1', '#db2777', '#16a34a', '#18181b'],
    tags: ['Onboarding', 'Pagination Dots', 'Mobile'],
    fonts: ['Inter', 'DM Mono'],
    prompt: 'Create a 3-screen mobile onboarding flow inside a phone frame on #f8f7ff. Each screen: a large rounded gradient icon tile with a rotated ghost tile behind it, a bold title and one-line body. Each step has its own color (indigo, pink, green) that tints the illustration, active pagination dot (which stretches to a 20px pill) and the primary button. Includes Skip (hidden on the last step), Next / Get started, and content that slides up on every change. Beside the phone, a step list mirrors progress and lets you jump to any step.',
    code: `.dot { width: 6px; height: 6px; border-radius: 3px; background: #e4e4e7; transition: all .3s; }\n.dot.active { width: 20px; background: var(--accent); }\n.illustration { border-radius: 30px; background: linear-gradient(135deg, var(--from), var(--to)); box-shadow: 0 16px 30px color-mix(in srgb, var(--to) 35%, transparent); }`,
    usage: 'First-run tours for mobile apps and feature announcements.',
  },
  {
    title: 'Weather Widget', category: 'Mobile', component: WeatherWidget,
    accent: '#0ea5e9',
    palette: ['#38bdf8', '#0ea5e9', '#f59e0b', '#312e81', '#e2e8f0'],
    tags: ['Widget', 'Weather', 'Glass'],
    fonts: ['Inter'],
    prompt: 'Design an iOS-style weather widget (300px, 26px radius) next to a city switcher (Lisbon, Oslo, Kyoto). The card background is a sky gradient that changes per city and condition (sunny blue/amber, cloudy slate, night indigo) with a large faint condition icon in the corner. Content: city with pin icon, a huge 64px thin temperature that animates on change, condition, high/low, an hourly forecast strip in a frosted rgba(255,255,255,0.15) panel, and two glass tiles for wind and humidity.',
    code: `.weather { border-radius: 26px; color: #fff; background: linear-gradient(160deg, var(--sky1), var(--sky2) 60%, var(--sky3)); transition: background .6s; }\n.temp { font-size: 64px; font-weight: 200; letter-spacing: -3px; }\n.glass { background: rgba(255,255,255,.15); backdrop-filter: blur(10px); border-radius: 14px; }`,
    usage: 'Dashboard widgets, travel apps and home-screen style interfaces.',
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
  {
    title: 'Documentation Layout', category: 'Content', component: DocsLayout,
    accent: '#7c3aed',
    palette: ['#ffffff', '#7c3aed', '#f5f3ff', '#18181b', '#fde68a'],
    tags: ['Docs', 'Three-column', 'TOC'],
    fonts: ['Inter', 'JetBrains Mono', 'DM Mono'],
    prompt: 'Build a three-column docs layout on white. Header: book-icon logo "Prism UI", a version chip and a "Search docs ⌘K" field. Left nav: grouped page links where the current page is highlighted violet (#6d28d9 on #f5f3ff) with aria-current. Main column: breadcrumb, H1, intro paragraph, a live preview area on a subtle checkerboard with Primary/Secondary buttons, a dark code snippet with syntax colors, and an amber callout. Right rail: "On this page" table of contents with a violet left-border indicator on the active section.',
    code: `.layout { display: grid; grid-template-columns: 140px 1fr 112px; }\n.nav a[aria-current="page"] { background: #f5f3ff; color: #6d28d9; font-weight: 600; }\n.preview { background: repeating-conic-gradient(#fafafa 0 25%, #fff 0 50%) 0 0 / 14px 14px; }\n.toc a.active { border-left: 2px solid #7c3aed; color: #6d28d9; }`,
    usage: 'Component library docs, API references and knowledge bases.',
  },
  {
    title: 'Release Changelog', category: 'Content', component: Changelog,
    accent: '#16a34a',
    palette: ['#fcfcfb', '#1c1917', '#16a34a', '#1e40af', '#991b1b'],
    tags: ['Changelog', 'Timeline', 'Filters'],
    fonts: ['Fraunces', 'Inter', 'DM Mono'],
    prompt: 'Create a product changelog on #fcfcfb. Header: "Changelog" in Fraunces with filter pills (All, New, Improved, Fixed, Breaking) where the active pill is filled dark. Releases sit on a vertical timeline: left column shows the version in DM Mono and the date, a dot on the line (the latest one green with a halo), and on the right the release title with a list of changes, each prefixed by a colored uppercase tag (New green, Improved blue, Fixed amber, Breaking red). Filtering hides non-matching changes and empty releases.',
    code: `.timeline::before { content: ''; position: absolute; left: 91.5px; top: 6px; bottom: 0; width: 1px; background: #e7e5e4; }\n.tag { font-size: 9px; font-weight: 700; text-transform: uppercase; padding: 2px 6px; border-radius: 4px; }\n.tag.new { background: #dcfce7; color: #166534; } .tag.breaking { background: #fee2e2; color: #991b1b; }`,
    usage: 'Product update pages, release notes and "What’s new" sections.',
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
