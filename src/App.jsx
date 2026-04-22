import { useState, useCallback } from 'react';
import NeonNavbar from './components/NeonNavbar';
import GlassHero from './components/GlassHero';
import DashboardWidget from './components/DashboardWidget';
import NeumorphicForm from './components/NeumorphicForm';
import BrutalistLanding from './components/BrutalistLanding';
import EditorialGrid from './components/EditorialGrid';
import TypeSpecimen from './components/TypeSpecimen';
import GradientButtons from './components/GradientButtons';
import RetroTerminal from './components/RetroTerminal';
import MacOSDock from './components/MacOSDock';
import CyberpunkText from './components/CyberpunkText';
import SaaSPricing from './components/SaaSPricing';
import InteractiveTimeline from './components/InteractiveTimeline';
import ProductGrid from './components/ProductGrid';
import FloatingMusicPlayer from './components/FloatingMusicPlayer';
import ArticleDetail from './components/ArticleDetail';

const CATEGORIES = [
  'All', 'Navigation', 'Hero', 'Dashboard', 'Forms',
  'Landing', 'Cards', 'Typography', 'Dark UI', 'Motion', 'Article'
];

const SEED_CARDS = [
  {
    id: 1, title: 'Neon Navigation Bar', category: 'Navigation',
    accent: '#00ff88',
    palette: ['#00ff88', '#0a0a1a', '#00aa55', '#0d0f1a', '#1a2a1a'],
    tags: ['Navbar', 'Glow', 'Interactive'],
    fonts: ['DM Mono', 'Playfair Display'],
    component: NeonNavbar,
    prompt: 'Build a dark navigation bar with neon green (#00ff88) glowing active link indicators. Use DM Mono for nav links and Playfair Display for the brand logo. Each link has a pill-shaped hover state with rgba(0,255,136,0.12) background, a bottom glow line with box-shadow: 0 0 10px #00ff88, and a green circular avatar on the right. Active state uses border + background + glow shadow. Content area below shows the active section name in large serif text.',
    code: `.neon-nav { background: rgba(0,0,0,0.3); border-bottom: 1px solid rgba(0,255,136,0.08); }\n.active-link { color: #00ff88; background: rgba(0,255,136,0.12); border: 1px solid rgba(0,255,136,0.4); box-shadow: 0 0 15px rgba(0,255,136,0.15); }\n.indicator { height: 2px; background: #00ff88; box-shadow: 0 0 10px #00ff88; }`,
    usage: 'Best for high-tech SaaS dashboards or developer tools requiring high visual feedback.'
  },
  {
    id: 2, title: 'Glassmorphism Hero', category: 'Hero',
    accent: '#8b5cf6',
    palette: ['#8b5cf6', '#06b6d4', '#ec4899', '#1a0533', '#0d1b3e'],
    tags: ['Glass', 'Backdrop-blur', 'CTA'],
    fonts: ['Playfair Display', 'DM Mono', 'Lora'],
    component: GlassHero,
    prompt: 'Create a hero section with a deep purple-to-navy gradient background and 3 blurred gradient orbs (violet, cyan, pink) positioned at corners. Center a frosted glass card using backdrop-filter: blur(20px), background: rgba(255,255,255,0.06), border: 1px solid rgba(255,255,255,0.12). Inside the card: a small uppercase label in DM Mono, a headline "The Future of Design Systems" in Playfair Display 28px, body text in Lora, and a gradient CTA button (#8b5cf6 → #6d28d9) with a purple glow shadow.',
    code: `.glass-card { background: rgba(255,255,255,0.06); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.12); border-radius: 20px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); }\n.cta { background: linear-gradient(135deg, #8b5cf6, #6d28d9); box-shadow: 0 4px 20px rgba(139,92,246,0.4); }`,
    usage: 'Perfect for landing pages that want to convey a modern, "next-gen" feeling with depth.'
  },
  {
    id: 3, title: 'Dashboard Stat Widget', category: 'Dashboard',
    accent: '#10b981',
    palette: ['#10b981', '#8b5cf6', '#f59e0b', '#0a0f1a', '#0d1420'],
    tags: ['Charts', 'KPI', 'Animated Bars'],
    fonts: ['DM Mono'],
    component: DashboardWidget,
    prompt: 'Design a dark dashboard widget with a top row of 3 KPI stat cards (Revenue, Users, Orders) in DM Mono. Each card has a label in 10px uppercase, a large value in 20px, and a colored percentage badge. Below, render a 7-bar chart labeled "Weekly Performance" with bars using linear-gradient from solid to 30% opacity. Bars have border-radius: 6px 6px 2px 2px. The highest bar uses green (#10b981), others use purple (#8b5cf6). Animate bars with staggered fadeSlideUp. Day labels below in 9px uppercase.',
    code: `.stat-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; }\n.bar { background: linear-gradient(180deg, #8b5cf6, rgba(139,92,246,0.3)); border-radius: 6px 6px 2px 2px; transition: height 0.6s cubic-bezier(0.16,1,0.3,1); }\n.bar.max { background: linear-gradient(180deg, #10b981, rgba(16,185,129,0.3)); }`,
    usage: 'Use for analytical interfaces where key performance indicators need to be summarized visually.'
  },
  {
    id: 4, title: 'Neumorphic Form', category: 'Forms',
    accent: '#ec4899',
    palette: ['#ec4899', '#be185d', '#1a1a2e', '#232340', '#111125'],
    tags: ['Neumorphism', 'Float Labels', 'Soft UI'],
    fonts: ['Playfair Display', 'DM Mono', 'Lora'],
    component: NeumorphicForm,
    prompt: 'Build a neumorphic contact form on a #1a1a2e background. The form container has box-shadow: 8px 8px 20px #111125, -8px -8px 20px #232340 for the raised soft-UI effect. Title "Get in Touch" in Playfair Display centered. Inputs have floating labels in DM Mono that scale from 12px to 9px on focus with color transition to #ec4899. Input fields use inset shadows for the pressed look. A full-width pink gradient submit button (#ec4899 → #be185d) with combined neumorphic + glow shadow.',
    code: `.neu-container { background: #1a1a2e; box-shadow: 8px 8px 20px #111125, -8px -8px 20px #232340; }\n.neu-input { box-shadow: inset 3px 3px 8px #111125, inset -3px -3px 8px #232340; }\n.neu-input:focus { border-color: #ec4899; box-shadow: inset 3px 3px 8px #111125, inset -3px -3px 8px #232340, 0 0 15px rgba(236,72,153,0.1); }\n.neu-button { background: linear-gradient(135deg, #ec4899, #be185d); }`,
    usage: 'Best used sparingly for specific landing page forms where a tactile, soft aesthetic is desired.'
  },
  {
    id: 5, title: 'Brutalist Landing', category: 'Landing',
    accent: '#f5e642',
    palette: ['#f5e642', '#000000', '#ffffff', '#333333', '#1a1a1a'],
    tags: ['Brutalism', 'Bold Type', 'High Contrast'],
    fonts: ['Playfair Display', 'DM Mono'],
    component: BrutalistLanding,
    prompt: 'Create a brutalist landing page with bold yellow (#f5e642) background. Top bar: brand "BRUT.CO" in DM Mono 14px bold black + underlined nav links. Main area: giant stacked uppercase heading "DESIGN WITHOUT RULES." in Playfair Display 48px black, letter-spacing -2px, line-height 0.95. Subtext in 11px with 50% opacity. Bottom bar: inverted colors (black bg, yellow text) with "Est. 2024" and a yellow-bordered "Enter ↗" button. All dividers use 3px solid black borders.',
    code: `.brut-hero { background: #f5e642; }\n.brut-heading { font: 900 48px/0.95 'Playfair Display', serif; text-transform: uppercase; letter-spacing: -2px; color: #000; }\n.brut-footer { background: #000; color: #f5e642; border-top: 3px solid #000; }\n.brut-btn { border: 2px solid #f5e642; background: transparent; color: #f5e642; }`,
    usage: 'Ideal for art portfolios or alternative brands that want to break away from traditional clean UI.'
  },
  {
    id: 6, title: 'Editorial Magazine Grid', category: 'Cards',
    accent: '#f472b6',
    palette: ['#f472b6', '#a78bfa', '#06b6d4', '#f59e0b', '#0c0c14'],
    tags: ['Serif', 'Pull Quotes', 'Two-Column'],
    fonts: ['Playfair Display', 'DM Mono', 'Lora'],
    component: EditorialGrid,
    prompt: 'Build a two-column editorial magazine card grid on #0c0c14 background. Left column (flex 1.2): featured essay card with gradient background (#1a1a2e → #12121f), "Featured Essay" label in DM Mono 9px pink, title in Playfair Display 20px, an italic pull quote in Lora 11px, and author avatar + metadata row. Right column: 3 stacked article cards, each with a colored category label (Typography/purple, Layout/cyan, Motion/amber), title in Playfair Display 13px, and author in DM Mono 9px. All cards use 1px solid rgba(255,255,255,0.06) borders.',
    code: `.editorial-card { background: linear-gradient(180deg, #1a1a2e, #12121f); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; }\n.pull-quote { font: italic 11px/1.6 'Lora', serif; color: rgba(255,255,255,0.3); }\n.category-label { font: 500 9px 'DM Mono', monospace; text-transform: uppercase; letter-spacing: 2px; }`,
    usage: 'Use for content-heavy sections where you want to maintain a sophisticated, publication-like feel.'
  },
  {
    id: 7, title: 'Type Specimen Showcase', category: 'Typography',
    accent: '#f472b6',
    palette: ['#f472b6', '#f0eef5', '#0c0a12', '#e0ddd8', '#a78bfa'],
    tags: ['Font Pairing', 'Specimen', 'Weights'],
    fonts: ['Playfair Display', 'Lora', 'DM Mono'],
    component: TypeSpecimen,
    prompt: 'Create a type specimen showcase on a #0c0a12 dark background. Show "Type Specimen · 001" in DM Mono 9px pink uppercase. Display "Aa Bb Cc" in Playfair Display 52px weight 800. Below, an italic quote in Lora 18px at 45% opacity. Then a row of 3 font preview cards showing "Ag" in each font (Playfair Display 800, Lora 400, DM Mono 400) with labels below. Finish with a row of weight chips (Regular, Italic, Bold, Black) in pill-shaped badges with pink background/border at low opacity.',
    code: `.specimen { background: #0c0a12; }\n.display-sample { font: 800 52px 'Playfair Display', serif; color: #f0eef5; letter-spacing: -2px; }\n.body-quote { font: italic 18px/1.6 'Lora', serif; color: rgba(255,255,255,0.45); }\n.font-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; }\n.weight-chip { background: rgba(244,114,182,0.08); border: 1px solid rgba(244,114,182,0.15); color: rgba(244,114,182,0.6); border-radius: 20px; }`,
    usage: 'Excellent for design systems documentation or brand identity presentations.'
  },
  {
    id: 8, title: 'Gradient Button System', category: 'Dark UI',
    accent: '#8b5cf6',
    palette: ['#8b5cf6', '#10b981', '#ef4444', '#f59e0b', '#0a0a14'],
    tags: ['Buttons', 'Variants', 'Gradient'],
    fonts: ['DM Mono'],
    component: GradientButtons,
    prompt: 'Build a button system showcase on #0a0a14 dark background. Display 3 rows of 4 buttons each (Primary/purple, Success/green, Danger/red, Warning/amber). Row 1: solid gradient buttons with glow shadow, active button lifts with translateY(-2px). Row 2: outline variants with colored borders and transparent background. Row 3: ghost variants with tinted rgba backgrounds. All buttons use DM Mono font, border-radius 10-12px. Active solid button gets box-shadow: 0 6px 24px with the color at 40% opacity.',
    code: `.btn-solid { background: linear-gradient(135deg, #8b5cf6, #6d28d9); box-shadow: 0 6px 24px rgba(139,92,246,0.4); }\n.btn-outline { border: 1px solid rgba(139,92,246,0.4); background: transparent; }\n.btn-ghost { background: rgba(139,92,246,0.08); }\n.btn-success { background: linear-gradient(135deg, #10b981, #059669); }\n.btn-danger { background: linear-gradient(135deg, #ef4444, #dc2626); }\n.btn-warning { background: linear-gradient(135deg, #f59e0b, #d97706); }`,
    usage: 'Foundation for any dark-themed application requiring clear, vibrant call-to-actions.'
  },
  {
    id: 9, title: 'Retro Terminal', category: 'Dark UI',
    accent: '#00ff88',
    palette: ['#00ff88', '#8b5cf6', '#0a0a0a', '#1a1a1a', '#2a2a2a'],
    tags: ['Terminal', 'CLI', 'Monospace'],
    fonts: ['DM Mono'],
    component: RetroTerminal,
    prompt: 'Build a retro terminal emulator with a #0a0a0a background. Top bar: macOS-style traffic light dots (red #ff5f56, yellow #ffbd2e, green #27c93f) at 12px diameter, plus a title "phantom — zsh — 80×24" in DM Mono 11px. Main area: simulated shell session with green command text (#00ff88), purple prompt prefix (#8b5cf6 "~ $"), and dimmed output text at 50% opacity. Include an ASCII art banner in green. A blinking cursor at the end using pulseGlow animation. All text in DM Mono 12px.',
    code: `.terminal { background: #0a0a0a; font-family: 'DM Mono', monospace; }\n.title-bar { background: #1a1a1a; border-bottom: 1px solid #2a2a2a; }\n.traffic-light { width: 12px; height: 12px; border-radius: 50%; }\n.prompt { color: #00ff88; }\n.prefix { color: #8b5cf6; }\n.output { color: rgba(255,255,255,0.5); }\n.cursor { animation: pulseGlow 1s ease-in-out infinite; }`,
    usage: 'Add character to tech-focused websites or used as a creative "About Me" section.'
  },
  {
    id: 10, title: 'MacOS Dock Interactive', category: 'Motion',
    accent: '#3b82f6',
    palette: ['#3b82f6', '#f59e0b', '#ef4444', '#10b981', '#8b5cf6'],
    tags: ['MacOS', 'Hover', 'Magnify'],
    fonts: ['DM Mono'],
    component: MacOSDock,
    prompt: 'Create a MacOS style dock floating at the bottom with a frosted glass background (blur 20px). Add 5 squircle icons inside. When hovering over an icon, it scales up to 1.4x and translates slightly up. Apply a smaller scale constraint (1.2x) to adjacent icons to simulate the MacOS dock magnification effect. Ensure transform-origin is set to bottom center.',
    code: `.dock { backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.2); border-radius: 24px; }\n.icon:hover { transform: scale(1.4) translateY(-8px); }\n.icon.adjacent { transform: scale(1.2) translateY(-4px); }`,
    usage: 'High-interactivity navigation component for desktop-like web experiences.'
  },
  {
    id: 11, title: 'Cyberpunk Glitch Text', category: 'Dark UI',
    accent: '#00ffff',
    palette: ['#00ffff', '#ff00ff', '#050510', '#ffffff', '#222222'],
    tags: ['Cyberpunk', 'Glitch', 'CSS Animation'],
    fonts: ['DM Mono'],
    component: CyberpunkText,
    prompt: 'Build a cyberpunk lock screen with a perspective grid floor. Center a giant CYBER_NET header using CSS glitch effects (two pseudo elements with clip-path and translating animations to create red and cyan chromatic aberration). Add two buttons below: SYSTEM.INIT() with cyan outline + inset shadow, and OVERRIDE with solid magenta background and glow.',
    code: `.glitch::before { text-shadow: -2px 0 red; clip-path: inset(20% 0 80% 0); animation: glitch-1 2s infinite; }\n.btn-cyan { border: 2px solid #0ff; color: #0ff; box-shadow: inset 0 0 10px rgba(0,255,255,0.2); }`,
    usage: 'Hero title for gaming sites or high-impact digital art projects.'
  },
  {
    id: 12, title: 'SaaS Pricing Cards', category: 'Cards',
    accent: '#8b5cf6',
    palette: ['#8b5cf6', '#0d1117', '#161b22', '#f0eef5', '#10b981'],
    tags: ['Pricing', 'Hover', 'Glow Border'],
    fonts: ['DM Mono', 'Playfair Display'],
    component: SaaSPricing,
    prompt: 'Design a 3-tier SaaS pricing block (Hobby, Pro, Team). Hobby and Team have a dark #0d1117 background with thin white borders. The center Pro tier is slightly scaled up (scale 1.05) with a deeper background (#161b22) and features an animated glowing conic gradient border that slowly rotates around the card using a pseudo-element behind a 1px masked inset. Include a giant price in serif font.',
    code: `.card-pro { transform: scale(1.05); }\n.card-pro::before { content: ""; background: conic-gradient(from 0deg, transparent, #8b5cf6); animation: rotateBorder 3s linear infinite; }\n@keyframes rotateBorder { 100% { transform: rotate(1turn); } }`,
    usage: 'Essential for SaaS landing pages; provides clear focus on the recommended subscription tier.'
  },
  {
    id: 13, title: 'Interactive Timeline', category: 'Motion',
    accent: '#8b5cf6',
    palette: ['#8b5cf6', '#07070f', '#1a1a2e', '#f0eef5', '#a78bfa'],
    tags: ['Timeline', 'Interactive', 'History'],
    fonts: ['DM Mono', 'Playfair Display', 'Lora'],
    component: InteractiveTimeline,
    prompt: 'Create a horizontal interactive timeline on #07070f. A central progress line fills as user selects nodes. Each node is a circle that glows when active. Below, a card displays the title in Playfair Display and description in Lora. Animate card content with a fadeSlideUp effect on selection change.',
    code: `.timeline-line { height: 4px; background: rgba(255,255,255,0.1); }\n.timeline-progress { background: #8b5cf6; box-shadow: 0 0 15px #8b5cf6; transition: width 0.6s ease; }\n.node.active { background: #8b5cf6; box-shadow: 0 0 10px #8b5cf6; }`,
    usage: 'Perfect for company roadmaps or personal journey sections in portfolios.'
  },
  {
    id: 14, title: 'Minimal Product Grid', category: 'Landing',
    accent: '#10b981',
    palette: ['#ffffff', '#f8f9fa', '#1a1a1a', '#10b981', '#8b5cf6'],
    tags: ['E-commerce', 'Cards', 'Hover'],
    fonts: ['DM Mono'],
    component: ProductGrid,
    prompt: 'Design a minimal light-themed product grid. Each product card has a subtle border, rounded corners (24px), and a gray background. On hover, the card translates up 8px. Center an icon/glyph, followed by the product name and price. Include a simple black pill-shaped "Buy" button.',
    code: `.product-card { background: #f8f9fa; border-radius: 24px; transition: transform 0.3s ease; }\n.product-card:hover { transform: translateY(-8px); }\n.buy-btn { background: #1a1a1a; color: #fff; border-radius: 20px; }`,
    usage: 'Clean aesthetic for high-end boutique e-commerce stores.'
  },
  {
    id: 15, title: 'Floating Music Player', category: 'Dark UI',
    accent: '#f472b6',
    palette: ['#0f172a', '#f472b6', '#8b5cf6', '#f0eef5', '#1e293b'],
    tags: ['Glass', 'Player', 'Blur'],
    fonts: ['Playfair Display', 'DM Mono'],
    component: FloatingMusicPlayer,
    prompt: 'Build a glassmorphic music player widget. Use backdrop-filter: blur(30px) and a thin white border. Feature a square album art with a gradient that rotates when playing. Title in Playfair Display, artist in DM Mono. Controls (Prev, Play/Pause, Next) with simple glyphs.',
    code: `.player { background: rgba(255,255,255,0.05); backdrop-filter: blur(30px); border-radius: 32px; }\n.album-art { animation: spinVinyl 8s linear infinite; }\n.controls { color: #f472b6; cursor: pointer; }`,
    usage: 'Ideal for community sidebars or as a persistent floating entertainment element.'
  },
  {
    id: 16, title: 'Long-form Article Detail', category: 'Article',
    accent: '#8b5cf6',
    palette: ['#fcfcf9', '#1a1a1a', '#8b5cf6', '#eee', '#ffffff'],
    tags: ['Typography', 'Editorial', 'Minimal'],
    fonts: ['Lora', 'Playfair Display', 'DM Mono'],
    component: ArticleDetail,
    prompt: 'Design a clean, high-readability article view on #fcfcf9. Use Lora for body text and Playfair Display for the headline. Include a purple category label in DM Mono, an author row with a placeholder avatar, and a highlighted pull-quote with a left border.',
    code: `.article { font-family: 'Lora', serif; color: #1a1a1a; }\n.headline { font-family: 'Playfair Display', serif; font-size: 32px; }\n.pull-quote { border-left: 3px solid #8b5cf6; padding-left: 20px; font-style: italic; }`,
    usage: 'Best for blogs, news portals, or documentation sites that prioritize reading experience.'
  },
];


// ─── Toast ───────────────────────────────────────────────────
function Toast({ message, visible, exiting }) {
  if (!visible && !exiting) return null;
  return (
    <div style={{
      position: 'fixed', bottom: '32px', left: '50%',
      transform: 'translateX(-50%)',
      background: 'linear-gradient(135deg, rgba(139,92,246,0.9), rgba(99,60,200,0.95))',
      color: '#fff', fontFamily: "'DM Mono', monospace",
      fontSize: '13px', fontWeight: 500, padding: '12px 28px',
      borderRadius: '40px', zIndex: 9999,
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(139,92,246,0.4)',
      boxShadow: '0 8px 32px rgba(139,92,246,0.3)',
      letterSpacing: '0.5px',
      animation: exiting ? 'toastSlideOut 0.3s ease-in forwards' : 'toastSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
    }}>✓ {message}</div>
  );
}

// ─── Vinyl Disc ──────────────────────────────────────────────
function VinylDisc() {
  return (
    <div style={{
      width: '56px', height: '56px', borderRadius: '50%',
      background: 'conic-gradient(from 0deg, #1a1a2e, #8b5cf6, #1a1a2e, #6d28d9, #1a1a2e, #8b5cf6, #1a1a2e)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      animation: 'spinVinyl 4s linear infinite',
      boxShadow: '0 0 20px rgba(139,92,246,0.25)', flexShrink: 0,
    }}>
      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#07070f', border: '2px solid rgba(139,92,246,0.5)' }} />
    </div>
  );
}

// ─── Stat Card ───────────────────────────────────────────────
function StatCard({ count }) {
  return (
    <div style={{
      background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.2)',
      borderRadius: '14px', padding: '10px 22px',
      display: 'flex', alignItems: 'center', gap: '10px',
      animation: 'pulseGlow 3s ease-in-out infinite',
    }}>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '24px', fontWeight: 500, color: '#a78bfa', lineHeight: 1 }}>{count}</span>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: 'rgba(167,139,250,0.6)', textTransform: 'uppercase', letterSpacing: '1.5px', lineHeight: 1.2 }}>Components<br/>Curated</span>
    </div>
  );
}

// ─── Category Filter ─────────────────────────────────────────
function CategoryFilter({ active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', padding: '4px 0 16px 0', scrollbarWidth: 'none' }}>
      {CATEGORIES.map(cat => {
        const isActive = cat === active;
        return (
          <button key={cat} onClick={() => onChange(cat)} style={{
            flexShrink: 0, fontFamily: "'DM Mono', monospace",
            fontSize: '12px', fontWeight: isActive ? 500 : 400, letterSpacing: '0.5px',
            padding: '8px 20px', borderRadius: '40px',
            border: isActive ? '1px solid rgba(139,92,246,0.6)' : '1px solid rgba(255,255,255,0.08)',
            background: isActive ? 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,60,200,0.15))' : 'rgba(255,255,255,0.03)',
            color: isActive ? '#c4b5fd' : 'rgba(255,255,255,0.4)',
            cursor: 'pointer', transition: 'all 0.3s ease', whiteSpace: 'nowrap',
          }}
            onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; } }}
            onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; } }}
          >{cat}</button>
        );
      })}
    </div>
  );
}

// ─── Fullscreen Modal ────────────────────────────────────────
function FullscreenModal({ card, onClose }) {
  if (!card) return null;
  const Preview = card.component;
  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(7, 7, 15, 0.95)',
      backdropFilter: 'blur(10px)',
      animation: 'fadeIn 0.3s ease-out forwards',
    }} onClick={onClose}>
      <div style={{
        position: 'absolute', top: '30px', right: '30px',
        color: '#fff', fontSize: '24px', cursor: 'pointer',
        fontFamily: "'DM Mono', monospace", zIndex: 10001
      }} onClick={onClose}>✕</div>
      
      <div style={{
        position: 'relative',
        width: 'min(90vw, 900px)',
        height: 'min(80vh, 600px)',
        background: '#0a0a14',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }} onClick={e => e.stopPropagation()}>
        <div style={{
          transform: 'scale(1.2)', // Scale up for full view
          transformOrigin: 'center center',
          width: '600px', height: '400px',
          borderRadius: '12px', overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
        }}>
          <Preview />
        </div>
      </div>

      <div style={{
        position: 'absolute', bottom: '40px', textAlign: 'center',
        color: '#fff', maxWidth: '600px'
      }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', marginBottom: '10px' }}>{card.title}</h2>
        <p style={{ fontFamily: "'Lora', serif", opacity: 0.6, fontSize: '14px' }}>{card.prompt}</p>
      </div>
    </div>
  );
}

// ─── Live Flip Card ──────────────────────────────────────────
function LiveFlipCard({ card, index, onCopy, onView }) {
  const [flipped, setFlipped] = useState(false);
  const Preview = card.component;

  return (
    <div style={{
      perspective: '1200px', width: '100%', height: '420px',
      animation: `fadeSlideUp 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s both`,
    }}>
      <div style={{
        position: 'relative', width: '100%', height: '100%',
        transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        transformStyle: 'preserve-3d',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>
        {/* ── FRONT ── */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          borderRadius: '16px', border: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden', background: '#0a0a14',
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
        }}>
          {/* Centered scaled preview */}
          <div style={{
            flex: 1, overflow: 'hidden', position: 'relative',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-in',
            background: 'rgba(0,0,0,0.2)'
          }} onClick={() => onView(card)}>
            <div style={{
              width: '600px', height: '400px',
              transform: 'scale(0.52)',
              transformOrigin: 'center center',
              pointerEvents: 'none',
              borderRadius: '8px', overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}>
              <Preview />
            </div>
            <div className="preview-overlay" style={{
              position: 'absolute', inset: 0, 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(139,92,246,0)', transition: 'background 0.3s ease',
            }}>
              <span style={{ 
                fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#fff',
                background: 'rgba(139,92,246,0.8)', padding: '8px 16px', borderRadius: '40px',
                opacity: 0, transform: 'translateY(10px)', transition: 'all 0.3s ease'
              }}>View Fullscreen</span>
            </div>
            <style>{`
              div[cursor="zoom-in"]:hover .preview-overlay { background: rgba(139,92,246,0.1); }
              div[cursor="zoom-in"]:hover .preview-overlay span { opacity: 1; transform: translateY(0); }
            `}</style>
          </div>
          {/* Bottom title bar */}
          <div style={{
            padding: '16px 20px', borderTop: `1px solid ${card.accent}20`,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            cursor: 'pointer'
          }} onClick={() => setFlipped(true)}>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: card.accent, textTransform: 'uppercase', letterSpacing: '1px' }}>{card.category}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '14px', fontWeight: 600, color: '#f0eef5', marginTop: '2px' }}>{card.title}</div>
            </div>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.2)', letterSpacing: '1px', textTransform: 'uppercase' }}>Details →</span>
          </div>
        </div>

        {/* ── BACK ── */}
        <div style={{
          position: 'absolute', inset: 0,
          backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)',
          background: 'linear-gradient(135deg, #0d0d1a, #111128)',
          borderRadius: '16px', border: `1px solid ${card.accent}40`,
          padding: '24px', display: 'flex', flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: `inset 0 0 30px ${card.accent}08, 0 0 20px ${card.accent}10`,
          cursor: 'pointer'
        }} onClick={() => setFlipped(false)}>
          <div style={{ position: 'absolute', inset: '-1px', borderRadius: '16px', background: `linear-gradient(135deg, ${card.accent}20, transparent, ${card.accent}10)`, pointerEvents: 'none', zIndex: 0 }} />

          <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', scrollbarWidth: 'none' }}>
            {/* Category + Title */}
            <div style={{ marginBottom: '16px' }}>
              <span style={{
                fontFamily: "'DM Mono', monospace", fontSize: '9px', textTransform: 'uppercase',
                letterSpacing: '2px', color: card.accent,
                background: `${card.accent}15`, padding: '3px 10px', borderRadius: '20px',
                border: `1px solid ${card.accent}30`,
              }}>{card.category}</span>
              <h4 style={{
                fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700,
                color: '#f0eef5', lineHeight: 1.2, marginTop: '10px', marginBottom: 0,
              }}>{card.title}</h4>
            </div>

            {/* Prompt */}
            <p style={{
              fontFamily: "'Lora', serif", fontSize: '12px', lineHeight: 1.6,
              color: 'rgba(255,255,255,0.5)', marginBottom: '16px', flexShrink: 0
            }}>{card.prompt}</p>

            {/* Usage Tips */}
            {card.usage && (
              <div style={{ marginBottom: '16px', padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '6px' }}>Usage Strategy</div>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '11px', fontStyle: 'italic', color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>{card.usage}</p>
              </div>
            )}

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {card.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: "'DM Mono', monospace", fontSize: '9px',
                  color: 'rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  padding: '4px 10px', borderRadius: '20px',
                }}>{tag}</span>
              ))}
            </div>

            {/* Fonts & Palette Row */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>Typography</div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {card.fonts.map(f => (
                    <span key={f} style={{
                      fontFamily: `'${f}', serif`, fontSize: '10px',
                      color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.04)',
                      padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.06)'
                    }}>{f}</span>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.2)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '8px' }}>Palette</div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  {card.palette.map((c, i) => (
                    <div key={i} style={{ width: '18px', height: '18px', borderRadius: '4px', background: c, border: '1px solid rgba(255,255,255,0.1)' }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
              <button onClick={e => { e.stopPropagation(); onCopy(card.prompt, 'Prompt copied'); }} style={{
                flex: 1, fontFamily: "'DM Mono', monospace", fontSize: '10px', fontWeight: 500,
                letterSpacing: '0.5px', textTransform: 'uppercase',
                color: card.accent, background: `${card.accent}12`,
                border: `1px solid ${card.accent}35`, borderRadius: '10px',
                padding: '12px 0', cursor: 'pointer', transition: 'all 0.25s ease'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = `${card.accent}25`; }}
                onMouseLeave={e => { e.currentTarget.style.background = `${card.accent}12`; }}
              >Prompt</button>
              <button onClick={e => { e.stopPropagation(); onCopy(card.code, 'CSS copied'); }} style={{
                flex: 1, fontFamily: "'DM Mono', monospace", fontSize: '10px', fontWeight: 500,
                letterSpacing: '0.5px', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px',
                padding: '12px 0', cursor: 'pointer', transition: 'all 0.25s ease'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              >CSS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App ─────────────────────────────────────────────────────
export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCard, setSelectedCard] = useState(null);
  const [toast, setToast] = useState({ visible: false, exiting: false, message: '' });

  const filtered = activeCategory === 'All'
    ? SEED_CARDS
    : SEED_CARDS.filter(c => c.category === activeCategory);

  const handleCopy = useCallback((text, msg = 'Copied to clipboard') => {
    navigator.clipboard.writeText(text).then(() => {
      setToast({ visible: true, exiting: false, message: msg });
      setTimeout(() => {
        setToast(t => ({ ...t, exiting: true }));
        setTimeout(() => setToast({ visible: false, exiting: false, message: '' }), 300);
      }, 2000);
    });
  }, []);

  return (
    <div style={{ 
      position: 'relative', zIndex: 1, minHeight: '100vh', 
      padding: '0 clamp(20px, 5vw, 120px)',
      maxWidth: '1600px', margin: '0 auto' 
    }}>
      <div style={{
        position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(99,60,200,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(139,92,246,0.08) 0%, transparent 55%), radial-gradient(ellipse 70% 40% at 50% 90%, rgba(88,28,135,0.1) 0%, transparent 50%)',
      }} />

      {/* Header */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '30px',
        paddingTop: 'clamp(40px, 6vh, 80px)', paddingBottom: '30px',
        borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '40px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <VinylDisc />
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800, color: '#f0eef5', lineHeight: 1, letterSpacing: '-2px' }}>UI Album</h1>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '8px' }}>Curated Interface Collection</p>
          </div>
        </div>
        <StatCard count={filtered.length} />
      </header>

      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
        gap: '30px', paddingBottom: '100px', paddingTop: '20px',
      }}>
        {filtered.map((card, i) => (
          <LiveFlipCard 
            key={`${activeCategory}-${card.id}`} 
            card={card} 
            index={i} 
            onCopy={handleCopy} 
            onView={setSelectedCard}
          />
        ))}
        {filtered.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '120px 20px' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', color: 'rgba(255,255,255,0.2)', fontStyle: 'italic' }}>No components in this category yet.</p>
          </div>
        )}
      </main>

      <FullscreenModal card={selectedCard} onClose={() => setSelectedCard(null)} />
      <Toast message={toast.message} visible={toast.visible} exiting={toast.exiting} />
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
