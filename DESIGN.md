---
name: WMS (Warehouse Management System)
description: >
  An enterprise warehouse management platform with a dual-interface architecture:
  a professional admin dashboard for inventory operations and a consumer-facing
  storefront for product browsing. The visual identity prioritizes clarity,
  operational efficiency, and trustworthy professionalism.
colors:
  # Backgrounds
  background: "#f5f6fa"
  background-secondary: "#f7f9fa"
  # Surfaces
  surface: "#ffffff"
  surface-variant: "#f9f9fb"
  surface-hover: "#f5f6fa"
  # Text
  on-surface: "#202224"
  on-surface-muted: "#666666"
  on-surface-inverse: "#ffffff"
  # Primary
  primary: "#4880ff"
  primary-hover: "#3366ff"
  primary-active: "#2952cc"
  primary-soft: "#ebf2ff"
  # Secondary
  secondary: "#34D399"
  secondary-hover: "#27B282"
  secondary-active: "#059669"
  # Destructive
  destructive: "#f1416c"
  destructive-hover: "#d6305a"
  destructive-active: "#b8264d"
  destructive-soft: "#fff1f3"
  # Feedback
  success: "#47f764"
  success-soft: "#d9f7f1"
  warning: "#ff9f43"
  warning-soft: "#fff3e8"
  info: "#00a3ff"
  # Border
  outline: "#d5d5d5"
  outline-hover: "#9ca3af"
  # Modal
  scrim: "#000000"
  # User storefront
  user-background: "#fafafa"
  user-background-secondary: "#f6f6f6"
  # Table
  table-head: "#fcfdfd"
  # Notification
  notification-icon: "#3d42df"
  notification-badge: "#ff4f4f"
typography:
  display:
    fontFamily: Nunito
    fontSize: 48px
    fontWeight: "700"
    lineHeight: 56px
  headline-lg:
    fontFamily: Nunito
    fontSize: 40px
    fontWeight: "700"
    lineHeight: 48px
  headline-md:
    fontFamily: Nunito
    fontSize: 32px
    fontWeight: "700"
    lineHeight: 40px
  title-lg:
    fontFamily: Nunito
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
  body-lg:
    fontFamily: Nunito
    fontSize: 16px
    fontWeight: "400"
    lineHeight: 24px
  body-md:
    fontFamily: Nunito
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 20px
  label-lg:
    fontFamily: Nunito
    fontSize: 16px
    fontWeight: "500"
    lineHeight: 24px
  label-md:
    fontFamily: Nunito
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
  label-sm:
    fontFamily: Nunito
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 10px
  lg: 12px
  xl: 14px
  pill: 28px
  full: 9999px
spacing:
  unit: 8px
  2xs: 2px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 40px
  3xl: 48px
  4xl: 56px
  5xl: 64px
  sidebar-width: 240px
  header-height: 70px
  content-padding: 30px
components:
  button-solid:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.label-md}"
    rounded: "{rounded.DEFAULT}"
    padding: 10px 20px
  button-solid-hover:
    backgroundColor: "{colors.primary-hover}"
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.DEFAULT}"
    padding: 10px 20px
  button-outline-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-surface-inverse}"
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.DEFAULT}"
    padding: 10px 20px
  button-ghost-hover:
    backgroundColor: "{colors.primary-soft}"
  button-destructive:
    backgroundColor: "{colors.destructive}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.label-md}"
    rounded: "{rounded.DEFAULT}"
    padding: 10px 20px
  button-destructive-hover:
    backgroundColor: "{colors.destructive-hover}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  modal-dialog:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.md}"
  modal-dialog-sm:
    width: 400px
  modal-dialog-md:
    width: 600px
  modal-dialog-lg:
    width: 800px
  modal-dialog-xl:
    width: 1140px
  table-container:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    typography: "{typography.body-md}"
  table-header:
    backgroundColor: "{colors.table-head}"
    padding: 15px 32px
  table-cell:
    padding: 28px 32px
  toast-notification:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.DEFAULT}"
    width: 380px
    padding: 12px 16px
  dropdown-menu:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.sm}"
  sidebar-nav-item:
    padding: 16px 0
    rounded: 6px
  sidebar-nav-item-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-surface-inverse}"
  tag:
    rounded: "{rounded.md}"
    padding: 5px
    typography: "{typography.body-md}"
  product-card:
    backgroundColor: "{colors.user-background-secondary}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.md}"
  product-card-hover:
    backgroundColor: "{colors.user-background}"
  filter-group:
    backgroundColor: "{colors.surface-variant}"
    rounded: "{rounded.xl}"
    typography: "{typography.body-md}"
    padding: 25px
  filter-reset:
    backgroundColor: "{colors.destructive-soft}"
    textColor: "{colors.destructive-active}"
    rounded: "{rounded.xl}"
    padding: 25px
  page-container:
    backgroundColor: "{colors.background}"
    padding: "{spacing.lg}"
  section-container:
    backgroundColor: "{colors.background-secondary}"
    rounded: "{rounded.DEFAULT}"
    padding: "{spacing.md}"
  table-row-hover:
    backgroundColor: "{colors.surface-hover}"
  input-label:
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.label-lg}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-surface-inverse}"
    typography: "{typography.label-md}"
    rounded: "{rounded.DEFAULT}"
    padding: 10px 20px
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
  button-destructive-active:
    backgroundColor: "{colors.destructive-active}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
  button-secondary-active:
    backgroundColor: "{colors.secondary-active}"
  toast-success:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.success}"
  toast-success-soft:
    backgroundColor: "{colors.success-soft}"
  toast-warning:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.warning}"
  toast-warning-soft:
    backgroundColor: "{colors.warning-soft}"
  toast-info:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.info}"
  input-border:
    textColor: "{colors.outline}"
  input-border-hover:
    textColor: "{colors.outline-hover}"
  notification-icon:
    textColor: "{colors.notification-icon}"
  notification-badge:
    backgroundColor: "{colors.notification-badge}"
    textColor: "{colors.on-surface-inverse}"
    rounded: "{rounded.full}"
---

## Brand & Style

WMS is a professional-grade Warehouse Management System built for operational clarity. The design language follows a **Clean Enterprise Dashboard** philosophy — functional, spacious, and deliberately restrained. The visual identity is split across two distinct surfaces:

1. **Admin Dashboard** — A sidebar-driven layout with white surfaces, soft neutral backgrounds, and a punchy blue primary accent. Every pixel serves a purpose: data tables are generous with padding, modals are crisply bordered, and interactive states are subtle but clear. The experience should feel like a modern SaaS control panel — confident, airy, and free of visual noise.

2. **User Storefront** — A consumer-facing product browsing experience with warmer neutral backgrounds (`#fafafa`), card-based product grids, and a minimal e-commerce aesthetic that lets product imagery speak for itself.

The overall tone is **trustworthy and utilitarian** with enough warmth (rounded corners, generous whitespace, soft shadows) to avoid feeling cold or clinical. The system deliberately avoids dark mode complexity in the user-facing side, reserving it as an optional theme for the admin dashboard.

## Colors

The palette is anchored by a single confident blue that drives all primary actions, balanced by a neutral gray-scale that provides structure without distraction.

- **Primary (#4880FF):** The signature action color. Used for CTA buttons, active navigation states, selected items, focus rings, and link-style interactions. Its hover (#3366FF) and active (#2952CC) states darken progressively to provide tactile depth.
- **Primary Soft (#EBF2FF):** A low-opacity tint of primary used for ghost button hover states, selected dropdown items, and subtle highlight backgrounds. It provides visual feedback without overwhelming the neutral canvas.
- **Destructive (#F1416C):** Reserved strictly for delete actions, error states, form validation messages, and warning badges. Its soft variant (#FFF1F3) is used for background tints on destructive hover states.
- **Secondary (#34D399):** An emerald green used sparingly for success confirmations and secondary positive actions. Deliberately underused to maintain the blue-dominated visual hierarchy.
- **Feedback Colors:** Success (#47F764), Warning (#FF9F43), and Info (#00A3FF) are applied exclusively to toast notifications, status badges, and system alerts. They appear only as left-border accents and icon colors on toast components, never as full backgrounds.
- **Neutral Canvas:** The background stack moves from `#F5F6FA` (main page background) → `#FFFFFF` (surface cards, sidebar, header) → `#F9F9FB` (subtle section differentiators). This three-tier approach creates depth without explicit shadows.
- **Text:** Deep charcoal (#202224) for primary content ensures maximum readability. Muted gray (#666666) is used for secondary text, labels, placeholders, and metadata. Pure white (#FFFFFF) is reserved for text on colored backgrounds (primary buttons, active nav items).
- **Borders:** A single consistent border color (#D5D5D5) is used across all structural elements — table rows, input fields, modal containers, sidebar dividers. On hover, borders darken to #9CA3AF for interactive feedback.

## Typography

The system uses **Nunito** (sans-serif) as its sole typeface, leveraging its rounded terminals to inject friendliness into an otherwise data-heavy interface.

- **Font Scale:** An 8-step scale from 12px (labels, error messages) through 48px (display headlines on the user storefront). The admin dashboard primarily lives in the 14px–20px range for optimal data density.
- **Weight System:** Four weights are used deliberately:
  - **Regular (400):** Body text, table cell content, form inputs.
  - **Medium (500):** Labels, navigation items, secondary emphasis.
  - **Semi-bold (600):** Button text, modal titles, table headers, card titles, specification labels.
  - **Bold (700):** Page headlines, product prices, section titles, banner overlays.
- **Line Height:** Body text uses `1.4–1.6` line heights for comfortable reading in dense admin views. Labels and small metadata use tighter `16px` heights.
- **Base Font Size:** The root `html` element is set to `16px`, and the system uses `rem` units for font sizing to ensure consistent scaling.

## Layout & Spacing

The layout follows a **Fixed Shell** model: a permanent sidebar and header frame the viewport, with scrollable content in the main area.

- **Admin Shell:**
  - **Sidebar:** Fixed at 240px wide, full viewport height, white surface background. Navigation groups are separated by 1px border dividers.
  - **Header:** Fixed at 70px tall, spanning the remaining viewport width. Contains a pill-shaped search bar (28px border-radius), notification bell, language selector, and user profile avatar.
  - **Content Area:** 30px padding on left, right, and top. The content scrolls independently within `calc(100vh - header height)`.

- **Spacing Scale:** Strictly based on an 8px unit grid. The scale is exhaustive:
  `2px → 4px → 8px → 16px → 24px → 32px → 40px → 48px → 56px → 64px → 72px → 80px → 88px → 96px → 104px`. Component-level spacing draws from these values exclusively.

- **Data Table Rhythm:** Table headers use `15px 32px` padding (tighter vertically) while table cells use a generous `28px 32px` to give each data row breathing room. This asymmetry is intentional — headers should feel compact and structural while rows should feel spacious and scannable.

- **User Storefront Layout:** Content sections use 10% horizontal padding for a centered, magazine-like reading width. Product grids use a 4-column CSS Grid layout with spacing tokens for gaps.

## Elevation & Depth

Depth is achieved through **tonal layering** and **minimal, purpose-driven shadows** rather than aggressive elevation stacks.

- **Shadow Tokens:**
  - **sm:** `0px 1px 2px rgba(16, 24, 40, 0.05)` — Used for input field focus states. Barely perceptible; just enough to signal interactivity.
  - **md:** `0px 4px 12px rgba(16, 24, 40, 0.1)` — Used for dropdown menus, floating panels, and elevated overlays.
  - **Button lift:** `0 4px 12px rgba(0, 0, 0, 0.12)` — Applied on solid button hover alongside a `-2px` translateY to create a tactile "press-and-lift" feel.
  - **Toast:** `0 10px 25px rgba(0, 0, 0, 0.08)` — Larger spread for notifications to float above all content.
  - **Table header:** `0 1px 2px rgba(0, 0, 0, 0.05)` — Subtle separator when table header becomes sticky during scroll.

- **Tonal Stack:** The primary depth mechanism. Background (#F5F6FA) sits behind surface (#FFFFFF), which sits behind hover states (#F5F6FA again, creating a subtle "dip" effect). This avoids the need for heavy shadows while maintaining clear visual hierarchy.

- **Modal Overlay:** A dark scrim at `rgba(0, 0, 0, 0.7)` blankets the full viewport behind modal dialogs. Modals enter with a `0.3s ease-out` fade-in combined with a `-20px → 0` translateY slide, creating a confident "drop-in" effect.

- **Z-Index Strategy:** Modals and their scrim sit at z-index `1000`. Dropdowns within modals also use `1000`. Sticky table headers use `10`. The header search dropdown uses `100`. This three-tier approach avoids z-index escalation wars.

## Shapes

The shape language is **subtly rounded** — enough to feel modern without becoming bubbly or toy-like.

- **Structural Containers:** Table containers use 14px radius. Filter groups also use 14px. Modal dialogs use 12px. These larger radii create a soft, card-like appearance for major content blocks.
- **Interactive Elements:** Buttons use 8px radius — small enough to feel clickable and purposeful. Input fields use 4px for a sharper, form-like feel that differentiates them from cards.
- **Navigation:** Active sidebar items use 6px radius, creating a compact highlight pill. The header search bar uses a full 28px pill radius to visually separate it as a utility rather than a form element.
- **Tags & Badges:** Tags use 10px radius. Notification badges use `border-radius: 50%` for perfect circles.
- **User-Facing Cards:** Product cards and category items use 8px radius, matching the button radius for visual harmony across the e-commerce surface.

### Buttons

Buttons come in three variants — **Solid**, **Outline**, and **Ghost** — each available in six semantic colors (primary, secondary, destructive, success, warning, info). Three size tiers control padding and font size:

- **sm:** `0.5rem 1rem` padding, `0.875rem` font size
- **md:** `0.625rem 1.25rem` padding, `1rem` font size
- **lg:** `0.75rem 1.5rem` padding, `1.125rem` font size

All buttons share a `2px solid transparent` border (prevents layout shift), `font-weight: 600`, and a `0.2s cubic-bezier(0.4, 0, 0.2, 1)` transition. Solid buttons lift on hover (`translateY(-2px)` with a drop shadow). Outline buttons fill with their accent color on hover. Ghost buttons reveal a soft tinted background.

Disabled buttons drop to `0.6` opacity with `cursor: not-allowed` and suppress all transform/shadow effects. A loading state replaces button content with a centered spinning border-ring animation (0.6s linear infinite).

### Inputs & Forms

Input fields use a 1px border with `#D5D5D5`, 4px border-radius, and 8px internal padding. On hover, the border darkens. On focus, the border turns primary blue and a subtle `shadow-sm` ring appears. Error states override the border to destructive red.

Labels sit above inputs with `font-weight: 500`, followed by an error message area with a fixed `min-height: 16px` to prevent layout jank.

Select fields and tree-select fields display their values as small bordered tags with an "×" remove button. Dropdown panels appear directly below the input with `shadow-md` and a `4px` top margin.

### Modals

Modals are fixed full-viewport overlays with a 70% opacity black scrim. Content panels are centered, bordered, and use the 12px radius. Five width tiers: sm (400px), md (600px), lg (800px), xl (1140px), and full (95vw). Max height is capped at 95vh with internal overflow scrolling.

Headers have a bottom border separator, a title at 20px font size, and a close button that turns destructive red on hover. The body area gets `24px` padding for comfortable content spacing.

### Toast Notifications

Toasts slide in from the right edge with an elastic `cubic-bezier(0.68, -0.55, 0.265, 1.35)` easing. They use a grid layout (40px icon | flexible info | 24px close) with a colored 6px left border indicating the toast type (success/error/info). A 3px progress bar at the bottom animates over 5 seconds before the toast auto-dismisses.

### Data Tables

Tables are contained in rounded 14px containers with a sticky header. Header cells use uppercase text and a sticky `top: 0` position with a subtle bottom shadow for scroll separation. Clickable rows show a hover background tint. Cell padding is deliberately generous (28px vertical) to prevent data from feeling cramped in warehouse-scale datasets.

### Sidebar Navigation

Navigation items are full-width flex containers. The active state fills with the primary blue and sets text to white. A 4px-wide primary-colored bar appears on the left edge of active items (rounded on the right side: `0 4px 4px 0`) as a position indicator. Items transition with `0.2s ease` for smooth state changes.
