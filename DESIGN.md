---
name: Lades Hutabarat portfolio
description: Light editorial portfolio for practical software quality assurance.
colors:
  canvas: "#f5f8fc"
  paper: "#fff"
  ink: "#172a43"
  muted: "#53657c"
  blue: "#244ed8"
  line: "#d7e0ed"
  soft-blue: "#e6edfb"
  blue-hover: "#1c3da9"
  tag-surface: "#e9eff8"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(53px, 5.8vw, 76px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(34px, 4vw, 48px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 650
  emphasis:
    fontFamily: "Georgia, serif"
    fontWeight: 400
    letterSpacing: "-0.04em"
rounded:
  tag: "4px"
  control: "8px"
  panel: "12px"
  coverage: "16px"
spacing:
  tag-gap: "8px"
  gutter-mobile: "22px"
  gutter-tablet: "32px"
  gutter-desktop: "48px"
  section-mobile: "62px"
  section-desktop: "96px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
    textColor: "{colors.paper}"
  nav-contact:
    rounded: "{rounded.control}"
    padding: "10px 18px"
  tag:
    backgroundColor: "{colors.tag-surface}"
    textColor: "{colors.muted}"
    rounded: "{rounded.tag}"
    padding: "5px 10px"
  coverage:
    backgroundColor: "{colors.soft-blue}"
    rounded: "{rounded.coverage}"
    padding: "28px 28px 0"
---

# Design System: Lades Hutabarat portfolio

## Overview

**Creative North Star: "Light editorial QA portfolio"**

An approachable engineering portfolio for recruiters reviewing practical QA experience. Clear typography, pale blue surfaces and generous section spacing support reading a detailed career. A branching test-coverage diagram connects requirements to web, mobile and API testing; its content explains the work rather than suggesting an invented dashboard.

The existing direction favors this editorial treatment over a photo-led composition without an authentic portrait or a dark developer terminal that would overstate coding as the primary job. The shipped page varies its composition between editorial columns, chronological rows and selective panels.

**Key Characteristics:**
- Light blue canvas with dark ink and a concentrated blue accent.
- Self-hosted Manrope with restrained Georgia italic emphasis.
- Subject-specific diagrams, clear dividers and flat surfaces.
- Responsive reading order and native, accessible interactions.

## Colors

A cool, quiet palette gives career content room while blue identifies actions and the testing signature. Runtime custom properties in `dist/style.css` own the seven core colors; frontmatter records their current values.

### Primary
- **Blue:** primary action, focus outlines, hero emphasis, diagram icons and featured-work surface.
- **Blue hover:** the darker primary-button hover state.
- **Soft blue:** the test-coverage panel backdrop.

### Neutral
- **Canvas:** page background.
- **Paper:** timeline section, test-plan node and platform nodes.
- **Ink:** headings and default copy.
- **Muted:** supporting copy, dates and secondary labels.
- **Line:** section dividers, timeline and outlined contact navigation.
- **Tag surface:** small tool and testing labels.

Additional pale blue surfaces distinguish the company band, education panel and contact section. These are local treatments in the stylesheet rather than a generalized tonal scale.

## Typography

**Display Font:** self-hosted Manrope, with Arial and sans-serif fallbacks.
**Body Font:** Manrope with the same fallbacks.
**Emphasis Font:** Georgia, serif, italic through semantic emphasis.

The sans-serif supplies a clear engineering voice; the serif adds a human accent to selected headline words. Headings use balanced wrapping and close tracking.

### Hierarchy
- **Display:** hero headline; responsive adjustments are recorded in Layout.
- **Headline:** section headings; contact uses a larger local scale.
- **Title:** article headings, locally varied from 19px for skill categories to 28px for featured work.
- **Body:** base reading style; detailed career and work copy commonly uses 13–14px with muted ink.
- **Label:** action text; navigation uses a slightly lighter weight (600). Tool tags and supporting diagram labels are smaller (10–12px).
- **Emphasis:** restrained italic words in hero and contact headings, colored blue.

**The Emphasis Rule.** Keep Georgia for selected headline emphasis; Manrope carries the reading text and interface.

## Layout

The content maximum is 1180px. The wrapper adds 48px side gutters, giving a maximum outer width of 1276px. Sections use 96px vertical spacing. The hero uses a 1.22fr / 1fr grid with a 68px gap; featured work uses equal columns, experience uses .85fr / 1.15fr, and about uses 1.35fr / 1fr. Secondary work is divided into two bordered articles rather than repeated boxed cards.

At widths up to 1050px, gutters become 32px and column gaps tighten. At widths up to 760px, gutters become 22px, main grids stack, section spacing becomes 62px, and the experience introduction stops being sticky. The header reduces from 112px to 88px; Experience and About navigation links are hidden while Work and contact remain available. Hero display type becomes `clamp(48px, 10vw, 70px)` after the tablet size of 58px. Contact headings use 44px on mobile. At 1500px and above, hero vertical space increases.

Reading order follows the semantic document. Buttons and tag groups wrap. Diagram platform nodes stay in three columns within the stacked panel. The contact area changes from a horizontal composition to stacked content.

## Elevation & Depth

The system uses no box shadows. Pale tonal surfaces, one-pixel rules, white diagram nodes and selective borders establish depth. The coverage panel clips its content; its brief arrival animation adds movement without changing the reading hierarchy.

## Shapes

Tags and current-role markers use compact corners; controls and diagram nodes use gently rounded corners. Featured-work and education panels use the panel radius, while coverage uses the larger coverage radius. The timeline combines a thin vertical rule with circular role markers, filling the first marker blue. Diagram branches use thin orthogonal connectors and simple outlined SVG icons.

## Components

### Buttons and text links

Primary links are compact blue rectangles with white text, an arrow and generous horizontal separation. Their background changes to the darker blue on hover over .2s. On mobile their padding becomes 14px 17px and their text becomes 12px. Text links use an underline with a 5px offset and may include a small inline SVG. All links have a visible blue focus outline (3px, offset 6px).

### Navigation

The header pairs a lowercase letter mark and name with simple text links. Contact is outlined and rounded; its border turns blue on hover. Links inherit the shared focus treatment. The mobile navigation retains Work and contact without introducing a menu overlay.

### Tags

Small, static labels describe tools and testing practices. They use muted text on a pale surface with compact padding and wrapping gaps. They are not interactive filters and have no selected state.

### Panels and work articles

Use panels selectively: the blue featured-work visual, pale coverage diagram and education summary each support a distinct content role. Supporting work articles use a top divider and open space. The education panel uses 32px padding, reduced to 26px on mobile; featured-work visual padding changes from 36px to 28px.

### Coverage diagram

A requirements node connects to the white test-plan node, then branches to three white platform nodes. A ruled footer completes the sequence with test, report and retest. The panel has an accessible text label describing the sequence; decorative branches and icons do not add spoken content. Its arrival lasts .8s with `cubic-bezier(.16,1,.3,1)`, translating 12px and clearing a 2px blur.

### Timeline and earlier-experience disclosure

Chronological roles sit on a shared line with tabular dates and horizontal dividers. A small current-role marker accompanies the first date. Earlier roles use native details/summary behavior; the plus rotates 45 degrees when open over .2s. Keyboard focus uses the same visible outline as links.

The skip link appears on focus. Content and disclosure remain available without JavaScript; the only script updates the footer year. Reduced-motion preference disables animation, transitions and smooth scrolling.

## Do's and Don'ts

### Do:
- **Do** use Manrope for reading text and Georgia for selected headline emphasis.
- **Do** preserve flat tonal surfaces, visible dividers and the shared blue focus outline.
- **Do** vary editorial columns, chronological rows and selective panels to suit the content.
- **Do** keep diagram meaning accessible and preserve reduced-motion behavior.

### Don't:
- **Don't** turn every work article into an identical boxed card.
- **Don't** add decorative shadows to the existing flat surface vocabulary.
- **Don't** style static tags as interactive controls.
