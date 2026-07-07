# Design System

## 1. Overview

Edita.tools is a browser-first file tools product built around local processing, privacy, speed, and low-friction task completion. The interface is optimized for utility workflows such as PDF conversion, image conversion, compression, calculator utilities, and industry-specific use-case landing pages.

### Purpose of the design

- Present a fast, trustworthy, privacy-focused experience for file handling tasks.
- Make complex file operations feel simple through large, obvious controls and clear progress states.
- Keep all primary journeys usable on desktop and mobile without requiring account creation.

### Design philosophy

- Light-first and privacy-forward. The app explicitly locks to light mode and avoids a dark theme.
- Emerald-accented, soft pastel visual language with subtle glassmorphism and layered depth.
- Utility over decoration, but with deliberate expressive moments in the hero, cards, and section headers.
- Reuse a consistent card metaphor for tools, steps, and feature blocks.

### Visual language

- Clean white and pale blue surfaces with emerald highlights.
- Rounded containers, soft borders, layered shadows, and blurred glows.
- Large display typography for hero and section headings.
- Card-based UI motifs that resemble folders or file cards, especially in the marketing pages and tool tiles.

## 2. Brand Identity

### Primary colors

| Token                  | Value     | Usage                                                    |
| ---------------------- | --------- | -------------------------------------------------------- |
| `--primary`            | `#10B981` | Main brand accent, buttons, highlights, trust indicators |
| `--primary-hover`      | `#059669` | Hover state for primary actions                          |
| `--primary-dark`       | `#047857` | Darker emerald tone used in some emphasis states         |
| `--primary-accessible` | `#065F46` | Stronger contrast emerald tone                           |
| `--primary-subtle`     | `#ECFDF5` | Soft background tint for accent surfaces                 |

### Secondary colors

| Token / Palette key | Value                           | Usage                                              |
| ------------------- | ------------------------------- | -------------------------------------------------- |
| `--accent`          | `#34D399`                       | Secondary emerald highlight                        |
| `blue`              | `#F5F9FF` to `#E6F0FF` gradient | Theme palette entry for tool cards and section art |
| `purple`            | `#F8F4FF` to `#EDE5FF` gradient | Theme palette entry                                |
| `orange`            | `#FFF6EC` to `#FFEAD8` gradient | Theme palette entry                                |
| `cyan`              | `#F2FDFF` to `#DCF8FF` gradient | Theme palette entry                                |
| `indigo`            | `#F3F5FF` to `#E5E9FF` gradient | Theme palette entry                                |
| `pink`              | `#FFF3F7` to `#FFE5F0` gradient | Theme palette entry                                |
| `rose`              | `#FFF4F4` to `#FFE7E7` gradient | Theme palette entry                                |
| `green`             | `#F3FFF7` to `#E2FBEA` gradient | Theme palette entry                                |
| `emerald`           | `#F4FFF9` to `#E5FBEF` gradient | Theme palette entry                                |
| `violet`            | `#F7F5FF` to `#EEE9FF` gradient | Theme palette entry                                |

### Accent colors

| Token                     | Value            | Usage                                         |
| ------------------------- | ---------------- | --------------------------------------------- |
| `--primary-subtle`        | `#ECFDF5`        | Accent surface tint                           |
| `--surface-2`             | `#f3f7ff`        | Soft background layer                         |
| `emerald-500` class usage | Tailwind utility | General emphasis, icons, badges, focus states |
| `emerald-600` class usage | Tailwind utility | CTA buttons and active states                 |

### Neutral palette

| Token                | Value     | Usage                |
| -------------------- | --------- | -------------------- |
| `--background`       | `#f7f9ff` | Site background      |
| `--foreground`       | `#08101e` | Primary text         |
| `--card`             | `#ffffff` | Card backgrounds     |
| `--card-foreground`  | `#08101e` | Card text            |
| `--border`           | `#dde5f0` | Default border color |
| `--muted`            | `#eef2fb` | Soft neutral surface |
| `--muted-foreground` | `#526071` | Secondary text       |
| `--surface-1`        | `#ffffff` | Elevated surface     |
| `--surface-2`        | `#f3f7ff` | Soft surface tint    |

### Success

| Token / Usage             | Value                                                       |
| ------------------------- | ----------------------------------------------------------- |
| `success` toast theme     | Emerald palette                                             |
| Success text / icon usage | Emerald greens (`#059669`, `#10B981`, Tailwind `emerald-*`) |

### Warning

| Token / Usage         | Value                                 |
| --------------------- | ------------------------------------- |
| `warning` toast theme | Orange palette                        |
| Warning icon usage    | `orange-500` / `orange-600` utilities |

### Error

| Token / Usage       | Value                             |
| ------------------- | --------------------------------- |
| `error` toast theme | Rose palette                      |
| Error icon usage    | `rose-500` / `rose-600` utilities |

### Info

| Token / Usage      | Value                             |
| ------------------ | --------------------------------- |
| `info` toast theme | Blue palette                      |
| Info icon usage    | `blue-500` / `blue-600` utilities |

### Color variables

| Variable               | Value     |
| ---------------------- | --------- |
| `--background`         | `#f7f9ff` |
| `--foreground`         | `#08101e` |
| `--card`               | `#ffffff` |
| `--card-foreground`    | `#08101e` |
| `--border`             | `#dde5f0` |
| `--muted`              | `#eef2fb` |
| `--muted-foreground`   | `#526071` |
| `--primary`            | `#10B981` |
| `--primary-foreground` | `#ffffff` |
| `--primary-hover`      | `#059669` |
| `--primary-dark`       | `#047857` |
| `--primary-accessible` | `#065F46` |
| `--primary-subtle`     | `#ECFDF5` |
| `--accent`             | `#34D399` |
| `--surface-1`          | `#ffffff` |
| `--surface-2`          | `#f3f7ff` |

### CSS variables

| Variable               | Source                                     | Notes                     |
| ---------------------- | ------------------------------------------ | ------------------------- |
| `--font-inter`         | [src/app/layout.tsx](src/app/layout.tsx)   | Set by `next/font/google` |
| `--font-display`       | [src/app/layout.tsx](src/app/layout.tsx)   | Set by `next/font/google` |
| `--background`         | [src/app/globals.css](src/app/globals.css) | Site background           |
| `--foreground`         | [src/app/globals.css](src/app/globals.css) | Site text color           |
| `--card`               | [src/app/globals.css](src/app/globals.css) | Card background           |
| `--card-foreground`    | [src/app/globals.css](src/app/globals.css) | Card text                 |
| `--border`             | [src/app/globals.css](src/app/globals.css) | Border color              |
| `--muted`              | [src/app/globals.css](src/app/globals.css) | Muted surface             |
| `--muted-foreground`   | [src/app/globals.css](src/app/globals.css) | Muted text                |
| `--primary`            | [src/app/globals.css](src/app/globals.css) | Brand accent              |
| `--primary-foreground` | [src/app/globals.css](src/app/globals.css) | Text on primary           |
| `--primary-hover`      | [src/app/globals.css](src/app/globals.css) | Hover color               |
| `--primary-dark`       | [src/app/globals.css](src/app/globals.css) | Stronger emerald          |
| `--primary-accessible` | [src/app/globals.css](src/app/globals.css) | High contrast emerald     |
| `--primary-subtle`     | [src/app/globals.css](src/app/globals.css) | Soft accent tint          |
| `--accent`             | [src/app/globals.css](src/app/globals.css) | Secondary accent          |
| `--radius`             | [src/app/globals.css](src/app/globals.css) | Global radius token       |
| `--surface-1`          | [src/app/globals.css](src/app/globals.css) | Elevated white surface    |
| `--surface-2`          | [src/app/globals.css](src/app/globals.css) | Soft background surface   |

### Tailwind color definitions

Tailwind 4 is configured through [src/app/globals.css](src/app/globals.css) using `@theme inline`.

| Tailwind token               | Maps to                                             |
| ---------------------------- | --------------------------------------------------- |
| `--color-background`         | `var(--background)`                                 |
| `--color-foreground`         | `var(--foreground)`                                 |
| `--color-card`               | `var(--card)`                                       |
| `--color-card-foreground`    | `var(--card-foreground)`                            |
| `--color-border`             | `var(--border)`                                     |
| `--color-muted`              | `var(--muted)`                                      |
| `--color-muted-foreground`   | `var(--muted-foreground)`                           |
| `--color-primary`            | `var(--primary)`                                    |
| `--color-primary-foreground` | `var(--primary-foreground)`                         |
| `--color-primary-hover`      | `var(--primary-hover)`                              |
| `--font-sans`                | `var(--font-inter), 'Inter', system-ui, sans-serif` |

## 3. Typography

### Font families

| Font                       | Source                                                                                  | Usage                                                       |
| -------------------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Inter                      | [src/app/layout.tsx](src/app/layout.tsx) and [src/app/globals.css](src/app/globals.css) | Base body / UI font                                         |
| Bricolage Grotesque        | [src/app/layout.tsx](src/app/layout.tsx)                                                | Display font for brand marks, hero headings, section titles |
| System sans-serif fallback | [src/app/globals.css](src/app/globals.css)                                              | Fallback stack                                              |
| Monospace system font      | Tailwind `font-mono` utility                                                            | Used on math inputs and code-like fields                    |

### Font sizes

No formal type scale file was found. Type sizes are set inline or via Tailwind utilities.

Observed sizes and ranges:

| Usage                | Observed size              |
| -------------------- | -------------------------- |
| Hero H1              | `clamp(42px, 7.5vw, 78px)` |
| Section H2           | `clamp(36px, 6vw, 48px)`   |
| Tool page title      | `text-4xl` to `text-5xl`   |
| Card title           | `17px` to `20px`           |
| Body text            | `14px` to `17px`           |
| Small labels / chips | `10px` to `13px`           |
| Button text          | `13px` to `16px`           |
| Toast title          | `15px` equivalent styling  |

### Font weights

| Weight      | Usage                                           |
| ----------- | ----------------------------------------------- |
| 400         | Body copy and muted labels                      |
| 500         | Secondary UI text, nav items, helper copy       |
| 600         | Pills, buttons, emphasized text                 |
| 700         | Section labels, card headings, active nav items |
| 800         | Hero titles and logo wordmark                   |
| 900 / black | Calculator displays, some major CTAs            |

### Line heights

| Usage            | Observed value  |
| ---------------- | --------------- |
| Hero headings    | `0.92` to `1.1` |
| Section headings | `1.1` to `1.2`  |
| Body copy        | `1.6` to `1.7`  |
| Compact labels   | `1` to `1.3`    |

### Letter spacing

| Usage             | Observed value         |
| ----------------- | ---------------------- |
| Hero titles       | `-0.04em` to `-0.03em` |
| Section titles    | `-0.03em` to `-0.02em` |
| Card and nav text | `-0.01em`              |
| Uppercase labels  | `0.05em` to `0.08em`   |

### Heading hierarchy

| Level | Typical implementation                                        |
| ----- | ------------------------------------------------------------- |
| H1    | Major page hero titles, brand landing pages, tool page titles |
| H2    | Section headers, FAQ, related tools, use-case cards           |
| H3    | Subsections inside content pages and FAQ items                |
| H4    | Footer category headings and smaller section labels           |

### Body text styles

- Marketing pages use centered, medium-weight body copy in `slate-500` or `#526071`.
- Legal pages use `prose prose-slate` styling with standard document flow.
- Tool pages use short helper text blocks and status text around the active control area.

### Code fonts

- No dedicated code font token or custom code stack was found.
- Some calculator and SEO content uses inline `code` elements and `font-mono` utilities.
- `Not found in project.` for a formal code font token.

## 4. Spacing System

### Margins

- Section vertical spacing commonly uses `py-20`, `py-28`, `py-32`, and `mb-16` to `mb-20`.
- Page shells use `pt-28` and `pb-28` / `pb-32` to clear the fixed header and create long-scroll layouts.
- Tool layouts often center content with `mx-auto` and constrained max widths.

### Padding

| Pattern        | Example usage                    |
| -------------- | -------------------------------- |
| Page gutters   | `px-4 sm:px-8`                   |
| Card padding   | `p-6`, `p-8`, `p-10`             |
| Button padding | `px-4 py-3`, `px-5 py-2`, `px-8` |
| Section blocks | `py-16`, `py-20`, `py-32`        |

### Gap values

| Pattern           | Example usage                |
| ----------------- | ---------------------------- |
| Tight UI gaps     | `gap-1`, `gap-2`, `gap-3`    |
| Card gaps         | `gap-4`, `gap-6`, `gap-8`    |
| Large layout gaps | `gap-12`, `gap-16`, `gap-20` |

### Tailwind spacing scale

No custom spacing scale was found. The project uses the default Tailwind spacing scale plus arbitrary values such as `pt-28`, `rounded-[2.5rem]`, `w-[640px]`, and `min-h-[500px]`.

### Layout spacing rules

- Use generous vertical breathing room around major content sections.
- Keep interactive tool controls compact and centered in a narrow column or two-column card.
- Use wider grids only for catalog and comparison surfaces.
- Use negative margins sparingly for layered decorative backgrounds.

## 5. Grid & Layout

### Containers

| Container      | Typical max width                                  |
| -------------- | -------------------------------------------------- |
| Main shell     | `max-w-[1200px]` or full width                     |
| Footer content | `max-w-[1280px]`                                   |
| Home sections  | `max-w-6xl`, `max-w-5xl`, `max-w-4xl`, `max-w-3xl` |
| Tool shell     | `max-w-4xl`, `max-w-5xl`, `max-w-6xl`              |

### Breakpoints

- Only the default Tailwind breakpoints are used: `sm`, `md`, `lg`, `xl`.
- No custom breakpoint configuration was found.

### Responsive rules

- Navigation collapses to a hamburger menu on mobile.
- Marketing sections often switch from stacked mobile layouts to multi-column desktop grids at `md` or `lg`.
- Tool controls frequently become two-column forms at `md` and stack vertically on small screens.
- Catalog grids expand from 2 columns on mobile to 5 columns on large screens.

### Grid systems

| Pattern      | Example                                                    |
| ------------ | ---------------------------------------------------------- |
| Hero collage | 5 columns by 3 rows on desktop, 3 by 4 on mobile           |
| Tool catalog | `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5` |
| Feature grid | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`                |
| Tool inputs  | `grid-cols-1 md:grid-cols-2`                               |

### Flex layouts

- Used for header alignment, button groups, tool controls, and content stacks.
- Tool pages often use `flex flex-col gap-*` wrappers with optional horizontal alignment at larger breakpoints.

### Max widths

| Value            | Where used                               |
| ---------------- | ---------------------------------------- |
| `max-w-[1200px]` | Navbar shell                             |
| `max-w-[1280px]` | Footer content                           |
| `max-w-6xl`      | Home and tools pages                     |
| `max-w-5xl`      | Detail sections and FAQs                 |
| `max-w-4xl`      | FAQ and tool content sections            |
| `max-w-3xl`      | Tool interaction columns                 |
| `max-w-2xl`      | Hero copy blocks and contact/legal pages |

## 6. Border System

### Border radius

| Token / Value                       | Usage                               |
| ----------------------------------- | ----------------------------------- |
| `--radius: 1.5rem`                  | Global radius token                 |
| `rounded-xl`                        | Buttons, inputs, pills              |
| `rounded-2xl`                       | Cards, chips, icon blocks           |
| `rounded-3xl`                       | Large tool panels                   |
| `rounded-[24px]` / `rounded-[32px]` | Marketing cards, hero surfaces      |
| `rounded-full`                      | Pills, badges, avatar-like controls |

### Border widths

- Common borders: `1px` via Tailwind `border` or inline styles.
- Stronger borders appear as `1.5px` or `2px` on selected interactive surfaces.
- The upload dropzone uses a dotted border.

### Divider styles

- Horizontal dividers use `border-t`, `border-y`, and `border-t border-slate-100/10`.
- Tool cards and summary bars often use a thin vertical divider between result blocks.
- Footer and shell areas use soft border separators with low-opacity neutral tones.

## 7. Shadows

### Shadow tokens

No central shadow token file was found. The project uses a mix of Tailwind shadows and explicit `box-shadow` values.

Observed shadow treatments:

| Usage                 | Example                                                    |
| --------------------- | ---------------------------------------------------------- |
| Low elevation         | `shadow-sm`                                                |
| Floating cards        | `0 8px 16px rgba(0,0,0,0.02)`                              |
| Elevated cards        | `0 20px 50px rgba(0,0,0,0.04)`                             |
| Hero/navigation depth | `0 15px 35px rgba(0,0,0,0.1)`                              |
| Accent shadows        | emerald, purple, and blue tinted shadows on CTAs and cards |

### Elevation system

- Base surfaces are nearly flat with soft borders.
- Hover states lift cards slightly and deepen the shadow.
- Hero layers and toast notifications use stronger blurred shadows for a floating feel.

## 8. Components

### Global shell and navigation

| Name         | Location                                                                     | Purpose                                                    | Props                                                                                                                                                                                                      | Variants / States                                             | Styling approach                                                       |
| ------------ | ---------------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `Navbar`     | [src/components/layout/Navbar.tsx](src/components/layout/Navbar.tsx)         | Fixed top navigation, logo, primary links, mobile menu     | None                                                                                                                                                                                                       | Home vs non-home shell, active nav link, mobile open/closed   | Inline styles plus Tailwind, glassy white surfaces, rounded pill shell |
| `Footer`     | [src/components/layout/Footer.tsx](src/components/layout/Footer.tsx)         | Marketing footer, category links, trust badge, legal links | None                                                                                                                                                                                                       | Static content and featured-on badges                         | Inline styles plus Tailwind grid, light border, soft neutral surfaces  |
| `ToolLayout` | [src/components/layout/ToolLayout.tsx](src/components/layout/ToolLayout.tsx) | Common shell for tool detail pages                         | `title`, `description`, `children`, `howItWorksTitle?`, `howItWorksSubtitle?`, `howItWorksSteps?`, `faqItems?`, `faqTitle?`, `faqSubtitle?`, `footerContent?`, `toolSlug?`, `seoContent?`, `canonicalUrl?` | Optional How It Works, related tools, FAQ, SEO content blocks | Centered column layout, aurora glow background, section wrappers       |

### Core UI primitives

| Name             | Location                                                                                 | Purpose                          | Props                                                             | Variants / States                                                                          | Styling approach                                                  |
| ---------------- | ---------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `Button`         | [src/components/ui/Button.tsx](src/components/ui/Button.tsx)                             | Reusable action button           | Native button props plus `variant`, `size`, `isLoading`           | `default`, `outline`, `ghost`, `destructive`; `default`, `sm`, `lg`, `icon`; loading state | Tailwind classes with emerald gradient for default variant        |
| `Toast`          | [src/components/ui/Toast.tsx](src/components/ui/Toast.tsx)                               | Floating notification card       | `title`, `description?`, `type?`, `onClose`                       | `success`, `error`, `warning`, `info`                                                      | Glassmorphic card with theme accent bar and auto-dismiss progress |
| `ToastProvider`  | [src/components/providers/ToastProvider.tsx](src/components/providers/ToastProvider.tsx) | Global toast state and overlay   | `children`                                                        | Toast queue state                                                                          | Context provider with fixed bottom-right stack                    |
| `useToast`       | [src/hooks/useToast.ts](src/hooks/useToast.ts)                                           | Access toast API from components | None                                                              | Throws if used outside provider                                                            | Context hook                                                      |
| `StructuredData` | [src/components/seo/StructuredData.tsx](src/components/seo/StructuredData.tsx)           | Emits JSON-LD for tools and FAQs | `toolName`, `toolDescription`, `url`, `faqs?`, `howItWorksSteps?` | SoftwareApplication, FAQPage, HowTo schema blocks                                          | Script tags with `dangerouslySetInnerHTML`                        |

### Marketing sections and shared patterns

| Name                        | Location                                                                               | Purpose                                      | Props                                                                                                    | Variants / States                                            | Styling approach                                                          |
| --------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `FAQSection`                | [src/components/ui/FAQSection.tsx](src/components/ui/FAQSection.tsx)                   | Collapsible FAQ list for home and tool pages | `items?`, `title?`, `subtitle?`                                                                          | Home FAQ defaults, custom FAQ sets, open/closed items        | Accordion cards with emerald active state and animated height transitions |
| `HeroCardGrid` / `CardFace` | [src/components/ui/HeroCardGrid.tsx](src/components/ui/HeroCardGrid.tsx)               | Decorative card collage behind hero content  | `HeroCardGrid`: `cards`; `CardFace`: `label`, `category`, `theme`, `size`                                | Desktop 5x3 grid, mobile 3x4 grid, randomized order on mount | Inline layout math, pastel theme palette, blurred depth layers            |
| `HeroicHowItWorks`          | [src/components/ui/HeroicHowItWorks.tsx](src/components/ui/HeroicHowItWorks.tsx)       | Home-page How It Works marketing block       | None                                                                                                     | Fixed 3-step presentation                                    | Large icon cards, floating decorative cards, emerald gradient title       |
| `HowItWorksSection`         | [src/components/ui/HowItWorksSection.tsx](src/components/ui/HowItWorksSection.tsx)     | Reusable 3-step process section              | `steps?`, `title?`, `subtitle?`                                                                          | Default or custom step list                                  | Card-based steps with numbered badges and gradients                       |
| `SimilarToolsSection`       | [src/components/ui/SimilarToolsSection.tsx](src/components/ui/SimilarToolsSection.tsx) | Related tools strip on tool pages            | None                                                                                                     | Uses pathname-derived current tool                           | Grid of `ToolCard` components                                             |
| `WhyUsSection`              | [src/components/ui/WhyUsSection.tsx](src/components/ui/WhyUsSection.tsx)               | Value proposition marketing section          | None                                                                                                     | Fixed 4-feature layout                                       | Folder-card motif with floating decorative cards                          |
| `ToolCard`                  | [src/components/ui/ToolCard.tsx](src/components/ui/ToolCard.tsx)                       | Catalog / related tool tile                  | `name`, `slug`, `theme`, `category`                                                                      | Hover lift, active link, tracked click                       | Folder-style card with pastel header/body split                           |
| `ToolFooter`                | [src/components/ui/ToolFooter.tsx](src/components/ui/ToolFooter.tsx)                   | Two-card footer block for tool pages         | `blocks` array                                                                                           | Per-block gradient/category defaults                         | Folder-style card shell with pastel header                                |
| `ToolsHeader`               | [src/components/ui/ToolsHeader.tsx](src/components/ui/ToolsHeader.tsx)                 | Search and filter controls for catalog page  | `totalTools`, `filteredCount`, `query`, `onSearch`, `selectedCategory`, `onCategoryChange`, `categories` | Search active vs inactive, selected category pill state      | Pill search bar, horizontal filter chips, scroll-hidden category rail     |
| `ToolsSection`              | [src/components/ui/ToolsSection.tsx](src/components/ui/ToolsSection.tsx)               | Tool catalog grid and filter orchestration   | `tools`                                                                                                  | Search result mode vs category mode vs empty state           | Grid of `ToolCard` components plus empty state                            |

### Tool workflow and file handling components

| Name                    | Location                                                                                         | Purpose                                     | Props                                         | Variants / States                                                                  | Styling approach                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------- | --------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `UploadDropzone`        | [src/components/tools/UploadDropzone.tsx](src/components/tools/UploadDropzone.tsx)               | File input and drag-and-drop upload surface | `onUpload`, `accept?`, `multiple?`            | Dragging vs idle, file type validation                                             | Dotted border dropzone with layered `CardFace` illustration                |
| `FilePreviewCard`       | [src/components/tools/FilePreviewCard.tsx](src/components/tools/FilePreviewCard.tsx)             | Shows uploaded file details in tool flows   | `file`, `onRemove`, `isDraggable?`            | Draggable mode, remove button                                                      | Compact row card with dot indicator and drag handle                        |
| `formatBytes`           | [src/components/tools/FilePreviewCard.tsx](src/components/tools/FilePreviewCard.tsx)             | File size formatter                         | `bytes`, `decimals?`                          | N/A                                                                                | Pure utility                                                               |
| `ImageConverter`        | [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)               | Browser image format conversion             | `initialInputFormat?`, `initialOutputFormat?` | File selected vs idle, output format dropdown, result ready                        | Two-column control/result panel with upload, dropdown, and download button |
| `CompressPdfClient`     | [src/components/tools/CompressPdfClient.tsx](src/components/tools/CompressPdfClient.tsx)         | Client-side PDF compression                 | None                                          | Upload, compression level, progress, result, reset                                 | Large card with segmented compression controls and progress bar            |
| `SplitPdfClient`        | [src/components/tools/SplitPdfClient.tsx](src/components/tools/SplitPdfClient.tsx)               | Page range extraction from PDF              | None                                          | Upload, page range entry, result, reset                                            | Form card with numeric inputs and download CTA                             |
| `MergePdfClient`        | [src/app/tools/merge-pdf/MergePdfClient.tsx](src/app/tools/merge-pdf/MergePdfClient.tsx)         | Reorder and merge multiple PDFs             | None                                          | Upload list, drag reorder, merge, add more files, result                           | Drag-and-drop list plus action bar                                         |
| `ImageCompressorClient` | [src/components/tools/ImageCompressorClient.tsx](src/components/tools/ImageCompressorClient.tsx) | Client-side image compression               | None                                          | Upload, optimize, result, reset                                                    | Large result card with before/after sizes                                  |
| `Mp4ToMp3Client`        | [src/components/tools/Mp4ToMp3Client.tsx](src/components/tools/Mp4ToMp3Client.tsx)               | Extract audio from MP4                      | None                                          | Upload, FFmpeg loading, processing progress, result                                | Progress area plus result summary and download                             |
| `PdfToWordClient`       | [src/components/tools/PdfToWordClient.tsx](src/components/tools/PdfToWordClient.tsx)             | Extract PDF text into DOCX                  | None                                          | Upload, processing progress, result, reset                                         | Progress card with source/generated summary                                |
| `QRCodeGenerator`       | [src/components/tools/QRCodeGenerator.tsx](src/components/tools/QRCodeGenerator.tsx)             | Generate customizable QR codes              | None                                          | Content input, module style, colors, transparency, size, export format, copy state | Split controls and preview area, dropdown export menu                      |
| `ImageColorPalette`     | [src/components/tools/ImageColorPalette.tsx](src/components/tools/ImageColorPalette.tsx)         | Extract dominant colors from an image       | None                                          | Upload, processing, palette results, copy-to-clipboard, reset                      | Two-panel layout with preview and palette grid                             |
| `PlaceholderToolClient` | [src/components/tools/PlaceholderToolClient.tsx](src/components/tools/PlaceholderToolClient.tsx) | Placeholder shell for unfinished tools      | None                                          | Static placeholder state                                                           | UploadDropzone plus muted message                                          |

### Calculator and utility tool clients

These components follow a shared pattern: single-page client widgets with form controls, live calculations or output summaries, and a consistent rounded card shell. They generally take no props.

| Family                            | Locations                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Purpose                                                                                  | Variants / States                                                                   | Styling approach                                                                |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Standard calculator               | [src/components/tools/StandardCalculatorClient.tsx](src/components/tools/StandardCalculatorClient.tsx)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Basic arithmetic calculator                                                              | Display, expression, clear, operator input, equals                                  | Button grid with compact calculator display                                     |
| Scientific calculator             | [src/components/tools/ScientificCalculatorClient.tsx](src/components/tools/ScientificCalculatorClient.tsx)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Scientific math calculator                                                               | Radian/degree toggle, history, scientific functions, keypad                         | Dense multi-row keypad and display panel                                        |
| Unit converter                    | [src/components/tools/UnitConverterClient.tsx](src/components/tools/UnitConverterClient.tsx)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Convert between measurement units                                                        | Measure tabs, from/to inputs, computed result                                       | Two-column card with unit tabs and result panel                                 |
| Statistics calculator             | [src/components/tools/StatisticsCalculatorClient.tsx](src/components/tools/StatisticsCalculatorClient.tsx)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Descriptive statistics from a dataset                                                    | Input parsing, result vs empty state                                                | Two-column layout with metric cards                                             |
| Random generator                  | [src/components/tools/RandomGeneratorClient.tsx](src/components/tools/RandomGeneratorClient.tsx)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Random integer generation                                                                | Min/max/count inputs, generated results                                             | Form panel and result tile grid                                                 |
| Age / BMI / finance / math family | [src/components/tools/AgeCalculatorClient.tsx](src/components/tools/AgeCalculatorClient.tsx), [src/components/tools/BMICalculatorClient.tsx](src/components/tools/BMICalculatorClient.tsx), [src/components/tools/CompoundInterestClient.tsx](src/components/tools/CompoundInterestClient.tsx), [src/components/tools/DifferentiationClient.tsx](src/components/tools/DifferentiationClient.tsx), [src/components/tools/DiscountCalculatorClient.tsx](src/components/tools/DiscountCalculatorClient.tsx), [src/components/tools/EquationSolverClient.tsx](src/components/tools/EquationSolverClient.tsx), [src/components/tools/FDCalculatorClient.tsx](src/components/tools/FDCalculatorClient.tsx), [src/components/tools/FractionCalculatorClient.tsx](src/components/tools/FractionCalculatorClient.tsx), [src/components/tools/GCDLCMCalculatorClient.tsx](src/components/tools/GCDLCMCalculatorClient.tsx), [src/components/tools/IntegrationClient.tsx](src/components/tools/IntegrationClient.tsx), [src/components/tools/LoanCalculatorClient.tsx](src/components/tools/LoanCalculatorClient.tsx), [src/components/tools/LogarithmClient.tsx](src/components/tools/LogarithmClient.tsx), [src/components/tools/MarginCalculatorClient.tsx](src/components/tools/MarginCalculatorClient.tsx), [src/components/tools/MatrixCalculatorClient.tsx](src/components/tools/MatrixCalculatorClient.tsx), [src/components/tools/MutualFundCalculatorClient.tsx](src/components/tools/MutualFundCalculatorClient.tsx), [src/components/tools/PercentageCalculatorClient.tsx](src/components/tools/PercentageCalculatorClient.tsx), [src/components/tools/PPFCalculatorClient.tsx](src/components/tools/PPFCalculatorClient.tsx), [src/components/tools/QuadraticSolverClient.tsx](src/components/tools/QuadraticSolverClient.tsx), [src/components/tools/RDCalculatorClient.tsx](src/components/tools/RDCalculatorClient.tsx), [src/components/tools/RomanNumeralConverterClient.tsx](src/components/tools/RomanNumeralConverterClient.tsx), [src/components/tools/SalesTaxCalculatorClient.tsx](src/components/tools/SalesTaxCalculatorClient.tsx), [src/components/tools/SIPCalculatorClient.tsx](src/components/tools/SIPCalculatorClient.tsx), [src/components/tools/BinaryConverterClient.tsx](src/components/tools/BinaryConverterClient.tsx) | Calculator-style tools with input forms, computed results, and variant-specific controls | Mostly idle / calculate / result states, often responsive at `md` two-column layout | Rounded card shells, muted input panels, emerald or category-colored highlights |

### SEO, analytics, and metadata helpers

| Name                                                                                                              | Location                                                                                     | Purpose                             | Props / Notes                                         |
| ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ----------------------------------- | ----------------------------------------------------- |
| `GoogleAnalytics`                                                                                                 | [src/components/analytics/GoogleAnalytics.tsx](src/components/analytics/GoogleAnalytics.tsx) | Loads GA4 script and route tracking | Uses `GA_MEASUREMENT_ID = G-R9PHS8S8ZD`               |
| `trackEvent`, `trackToolUsed`, `trackFileUploaded`, `trackFileDownloaded`, `trackToolSelected`, `trackConversion` | [src/lib/ga4.ts](src/lib/ga4.ts)                                                             | Analytics event helpers             | GA4 wrapper functions                                 |
| `constructMetadata`                                                                                               | [src/lib/metadata.ts](src/lib/metadata.ts)                                                   | Shared metadata builder             | Sets title, canonical, OG, Twitter, robots            |
| `validateFiles`                                                                                                   | [src/lib/file-validation.ts](src/lib/file-validation.ts)                                     | File acceptance helper              | Accept string, returns valid files and rejected count |
| `cn`                                                                                                              | [src/lib/utils.ts](src/lib/utils.ts)                                                         | Tailwind class merge helper         | Wraps `clsx` and `tailwind-merge`                     |

## 9. Icons

### Icon library

- Primary icon library: `lucide-react`.
- It is used for nav controls, buttons, section badges, tool tiles, toasts, empty states, and calculators.

### Custom icons

| Asset     | Location                                     | Usage                        |
| --------- | -------------------------------------------- | ---------------------------- |
| Logo icon | [public/logo-icon.png](public/logo-icon.png) | Navbar and footer brand mark |
| App icon  | [src/app/icon.png](src/app/icon.png)         | App icon asset               |
| Favicon   | [src/app/favicon.ico](src/app/favicon.ico)   | Browser favicon              |

### Usage conventions

- Icons are usually thin line icons with emerald or semantic accent colors.
- Utility tools often use a leading icon inside a 32-64px circular or rounded-square surface.
- Action buttons pair icons with text, not icon-only controls, except for compact close/copy buttons.

## 10. Animations

### Transition durations

| Duration      | Example usage                            |
| ------------- | ---------------------------------------- |
| `150ms`       | Link hover and subtle text color changes |
| `200ms`       | Buttons and focus transitions            |
| `300ms`       | Cards, accordions, filters               |
| `350ms`       | Scale-in animations                      |
| `400ms`       | Card hover lifts and larger interactions |
| `500ms`       | Toasts and content reveal                |
| `700ms`       | Header/layout transitions                |
| `6s` to `16s` | Ambient floating loops                   |

### Timing functions

- `ease` and `ease-in-out` are common for default motion.
- `cubic-bezier(0.16,1,0.3,1)` appears on many card and shell transitions.
- `cubic-bezier(0.34,1.56,0.64,1)` is used for spring-like controls in search, upload, and dropdown surfaces.

### Keyframes

| Keyframe                          | Location                                                   | Purpose                   |
| --------------------------------- | ---------------------------------------------------------- | ------------------------- |
| `float`                           | [src/app/globals.css](src/app/globals.css)                 | Gentle vertical drift     |
| `shimmer`                         | [src/app/globals.css](src/app/globals.css)                 | Background shimmer effect |
| `fade-up`                         | [src/app/globals.css](src/app/globals.css)                 | Entry animation           |
| `scale-in`                        | [src/app/globals.css](src/app/globals.css)                 | Entry animation           |
| `depth-float-a` / `b` / `c` / `d` | [src/app/globals.css](src/app/globals.css)                 | Ambient decorative motion |
| `toast-progress`                  | [src/components/ui/Toast.tsx](src/components/ui/Toast.tsx) | Auto-dismiss bar          |

### Motion guidelines

- Motion is mostly decorative or state-revealing, not essential for task completion.
- Cards and panels lift slightly on hover.
- Loading states use subtle pulse or progress bars.
- Reduced motion support disables the floating animation classes in `prefers-reduced-motion`.

## 11. Theme System

### Light mode

- The entire app is locked to light mode through `color-scheme: light` in [src/app/globals.css](src/app/globals.css) and the root layout viewport setting in [src/app/layout.tsx](src/app/layout.tsx).
- The root layout also injects a small script to remove any `dark` class from the document element.

### Dark mode

- `Not found in project.` There is no implemented dark theme palette or dark-mode visual system.

### Theme switching

- `Not found in project.` No theme toggle, persisted theme preference, or multi-theme switcher was found.

### Theme variables

- The only formal theme palette lives in [src/config/themes.ts](src/config/themes.ts).
- Palette keys: `blue`, `purple`, `orange`, `cyan`, `indigo`, `pink`, `rose`, `green`, `emerald`, `violet`.
- Each palette entry exposes `gradient`, `tint`, and `shadow`.

## 12. Responsive Design

### Mobile behaviour

- Navbar collapses into a menu button with an overlay dropdown.
- Hero sections stack vertically and hide some decorative layers behind the main text.
- Tool cards and forms collapse to one column.
- The tools catalog starts as a two-column grid.

### Tablet behaviour

- Content blocks often shift to two columns at `md`.
- The footer becomes a multi-column grid.
- Tool page controls typically align side-by-side where screen width allows.

### Desktop behaviour

- Hero and marketing pages show large layered decorative compositions.
- Tool catalog grows to 4-5 columns.
- Tool pages use a centered content column with large section blocks below.

### Breakpoints

- Default Tailwind breakpoints only: `sm`, `md`, `lg`, `xl`.
- No project-specific breakpoint tokens were found.

## 13. Accessibility

### ARIA usage

| Area                | Usage                                                         |
| ------------------- | ------------------------------------------------------------- |
| FAQ accordion       | `aria-expanded` on toggle button                              |
| Search field        | `aria-label="Search tools"`                                   |
| Clear search button | `aria-label="Clear search"`                                   |
| Mobile menu button  | `aria-label="Toggle mobile menu"`                             |
| Upload inputs       | `aria-label="Upload files"` and `aria-label="Add more files"` |
| Remove actions      | `aria-label="Remove item"` in file preview cards              |

### Keyboard navigation

- Standard HTML controls are used for navigation, inputs, and actions.
- Custom components rely on buttons, links, and inputs rather than div-based click targets.
- No custom keyboard shortcut system was found.

### Focus states

- The shared `Button` component includes `focus-visible:ring-2` with emerald focus treatment.
- Most native inputs and buttons rely on browser defaults plus Tailwind focus rings.
- Some custom controls use hover/active state styling but lack a centralized focus token.

### Color contrast

- The design generally uses dark text on very light surfaces.
- Emerald accents are often paired with white or slate text.
- `Not found in project.` for an explicit contrast audit or automated contrast enforcement.

### Screen reader support

- The app uses semantic landmarks like `header`, `main`, `footer`, `section`, and `nav`.
- FAQ toggles and file controls are accessible through real buttons and labeled inputs.
- No formal skip-link or screen-reader-only utility was found.

## 14. Design Tokens

### Global design tokens found in the project

| Token                  | Type         | Location                                     |
| ---------------------- | ------------ | -------------------------------------------- |
| `--background`         | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--foreground`         | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--card`               | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--card-foreground`    | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--border`             | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--muted`              | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--muted-foreground`   | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--primary`            | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--primary-foreground` | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--primary-hover`      | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--primary-dark`       | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--primary-accessible` | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--primary-subtle`     | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--accent`             | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--radius`             | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--surface-1`          | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--surface-2`          | CSS variable | [src/app/globals.css](src/app/globals.css)   |
| `--font-inter`         | CSS variable | [src/app/layout.tsx](src/app/layout.tsx)     |
| `--font-display`       | CSS variable | [src/app/layout.tsx](src/app/layout.tsx)     |
| `blue`                 | Theme token  | [src/config/themes.ts](src/config/themes.ts) |
| `purple`               | Theme token  | [src/config/themes.ts](src/config/themes.ts) |
| `orange`               | Theme token  | [src/config/themes.ts](src/config/themes.ts) |
| `cyan`                 | Theme token  | [src/config/themes.ts](src/config/themes.ts) |
| `indigo`               | Theme token  | [src/config/themes.ts](src/config/themes.ts) |
| `pink`                 | Theme token  | [src/config/themes.ts](src/config/themes.ts) |
| `rose`                 | Theme token  | [src/config/themes.ts](src/config/themes.ts) |
| `green`                | Theme token  | [src/config/themes.ts](src/config/themes.ts) |
| `emerald`              | Theme token  | [src/config/themes.ts](src/config/themes.ts) |
| `violet`               | Theme token  | [src/config/themes.ts](src/config/themes.ts) |

### Functional tokens and utilities

| Token / Utility     | Location                                                                                                                          | Notes                               |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `GA_MEASUREMENT_ID` | [src/components/analytics/GoogleAnalytics.tsx](src/components/analytics/GoogleAnalytics.tsx) and [src/lib/ga4.ts](src/lib/ga4.ts) | GA4 measurement ID                  |
| `TOOLS`             | [src/config/tools.ts](src/config/tools.ts)                                                                                        | Tool catalog data                   |
| `SITE_CONFIG`       | [src/config/seo.ts](src/config/seo.ts)                                                                                            | Metadata defaults                   |
| `GENERAL_FAQS`      | [src/config/seo.ts](src/config/seo.ts)                                                                                            | Shared FAQ content                  |
| `TOOL_METADATA`     | [src/config/seo.ts](src/config/seo.ts)                                                                                            | Tool-specific SEO metadata          |
| `PROGRAMMATIC_SEO`  | [src/config/programmaticSeo.tsx](src/config/programmaticSeo.tsx)                                                                  | SEO landing page entries            |
| `MATRIX_SEO`        | [src/config/programmaticSeoMatrix.tsx](src/config/programmaticSeoMatrix.tsx)                                                      | Additional SEO landing page entries |
| `HOME_FAQS`         | [src/components/ui/FAQSection.tsx](src/components/ui/FAQSection.tsx)                                                              | Default FAQ content                 |
| `THEME_PALETTE`     | [src/config/themes.ts](src/config/themes.ts)                                                                                      | Component theme palette             |

## 15. CSS Variables

### Documented global CSS variables

| Variable               | Defined in                                 | Found in project |
| ---------------------- | ------------------------------------------ | ---------------- |
| `--background`         | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--foreground`         | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--card`               | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--card-foreground`    | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--border`             | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--muted`              | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--muted-foreground`   | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--primary`            | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--primary-foreground` | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--primary-hover`      | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--primary-dark`       | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--primary-accessible` | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--primary-subtle`     | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--accent`             | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--radius`             | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--surface-1`          | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--surface-2`          | [src/app/globals.css](src/app/globals.css) | Yes              |
| `--font-inter`         | [src/app/layout.tsx](src/app/layout.tsx)   | Yes              |
| `--font-display`       | [src/app/layout.tsx](src/app/layout.tsx)   | Yes              |

### Other CSS-level tokens

- `color-scheme: light` is enforced globally.
- Tailwind 4 theme aliases are declared in `@theme inline`.
- There are custom utility classes for animation and scrollbar behavior, not CSS variables.

## 16. Tailwind Configuration

### Colors

- No `tailwind.config.*` file was found in the project root.
- Tailwind 4 is imported directly in [src/app/globals.css](src/app/globals.css).
- Colors are exposed via `@theme inline` aliases from CSS variables.
- Many components also use explicit Tailwind color utilities like `emerald-500`, `slate-900`, `rose-500`, and `blue-500`.

### Fonts

- `--font-sans` is mapped in `@theme inline` to Inter.
- No Tailwind display font token was defined.
- Bricolage Grotesque is used through inline `fontFamily: 'var(--font-display), sans-serif'` styles.

### Spacing

- No custom Tailwind spacing scale was defined.
- The project uses the default Tailwind spacing utilities and arbitrary values.

### Border radius

- No custom Tailwind radius scale was defined.
- Radius is expressed via Tailwind utilities and the `--radius` CSS variable.

### Shadows

- No custom Tailwind shadow scale or plugin layer was found.
- Shadows are mostly Tailwind built-ins or inline `box-shadow` values.

### Plugins

- No custom Tailwind plugins were found.
- Tailwind CSS 4 is used through `@import "tailwindcss";`.

### Custom utilities

| Utility                                        | Location                                   | Purpose               |
| ---------------------------------------------- | ------------------------------------------ | --------------------- |
| `.animate-float`                               | [src/app/globals.css](src/app/globals.css) | Floating motion       |
| `.animate-fade-up`                             | [src/app/globals.css](src/app/globals.css) | Fade and rise motion  |
| `.animate-scale-in`                            | [src/app/globals.css](src/app/globals.css) | Scale reveal motion   |
| `.scrollbar-hide`                              | [src/app/globals.css](src/app/globals.css) | Hide scrollbars       |
| `.float-a`, `.float-b`, `.float-c`, `.float-d` | [src/app/globals.css](src/app/globals.css) | Ambient drift         |
| `.float-a-rev`, `.float-b-rev`                 | [src/app/globals.css](src/app/globals.css) | Reverse ambient drift |

## 17. Reusable Patterns

### Recurring UI patterns

- Folder-style cards with a pastel gradient top and white body.
- Large rounded panels with low-contrast borders and soft shadows.
- Emerald gradient text for emphasis in hero titles and section headings.
- Glassmorphic overlays for navigation, toasts, and dropdowns.
- Consistent file-workflow structure: upload, preview, process, result, download.
- Centered marketing sections with decorative floating `CardFace` art.
- Reusable FAQ accordion with animated open/close states.
- Utility tool pages that share the same shell, differ only in the inner interactive widget.

### Repeated structural pattern

1. Hero or page title.
2. Supporting description.
3. Primary interaction card or catalog grid.
4. Trust strip or related content.
5. FAQ / how-it-works / SEO content.

## 18. Page Inventory

### Core routes

| Route               | File                                                                                                                                                   | Main sections                                                             | Layout used    | Components used                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------- |
| `/`                 | [src/app/page.tsx](src/app/page.tsx), [src/app/HomeClient.tsx](src/app/HomeClient.tsx)                                                                 | Hero, tools grid, how-it-works, why-us, FAQ, trust strip                  | Root shell     | `HeroCardGrid`, `ToolsSection`, `HeroicHowItWorks`, `WhyUsSection`, `FAQSection` |
| `/tools`            | [src/app/tools/page.tsx](src/app/tools/page.tsx), [src/app/tools/ToolsClient.tsx](src/app/tools/ToolsClient.tsx)                                       | Tools intro hero, catalog, trust strip                                    | Root shell     | `ToolsSection`, `CardFace`                                                       |
| `/how-it-works`     | [src/app/how-it-works/page.tsx](src/app/how-it-works/page.tsx), [src/app/how-it-works/HowItWorksClient.tsx](src/app/how-it-works/HowItWorksClient.tsx) | Three-step explainer, privacy/access cards                                | Root shell     | `CardFace`, step cards, feature cards                                            |
| `/why-us`           | [src/app/why-us/page.tsx](src/app/why-us/page.tsx), [src/app/why-us/WhyUsClient.tsx](src/app/why-us/WhyUsClient.tsx)                                   | Why-us section                                                            | Root shell     | `WhyUsSection`                                                                   |
| `/contact`          | [src/app/contact/page.tsx](src/app/contact/page.tsx), [src/app/contact/ContactClient.tsx](src/app/contact/ContactClient.tsx)                           | Contact card, email copy action                                           | Root shell     | Mail card, copy button                                                           |
| `/privacy`          | [src/app/privacy/page.tsx](src/app/privacy/page.tsx), [src/app/privacy/PrivacyClient.tsx](src/app/privacy/PrivacyClient.tsx)                           | Privacy policy article                                                    | Root shell     | Static legal content                                                             |
| `/terms`            | [src/app/terms/page.tsx](src/app/terms/page.tsx), [src/app/terms/TermsClient.tsx](src/app/terms/TermsClient.tsx)                                       | Terms article                                                             | Root shell     | Static legal content                                                             |
| `/use-cases`        | [src/app/use-cases/page.tsx](src/app/use-cases/page.tsx)                                                                                               | Industry cards, related links, CTA                                        | Root shell     | Lucide icons, `Link` cards                                                       |
| `/use-cases/[slug]` | [src/app/use-cases/[slug]/page.tsx](src/app/use-cases/[slug]/page.tsx)                                                                                 | Programmatic SEO page, tool shell, tool widget, related FAQ/HowTo content | `ToolLayout`   | Dynamic tool component mapping                                                   |
| `/robots`           | [src/app/robots.ts](src/app/robots.ts)                                                                                                                 | Robots metadata route                                                     | Route metadata | Not UI                                                                           |
| `/sitemap`          | [src/app/sitemap.ts](src/app/sitemap.ts)                                                                                                               | Sitemap metadata route                                                    | Route metadata | Not UI                                                                           |

### Tool routes

All tool pages follow the same route-wrapper pattern: a `page.tsx` file in `src/app/tools/<slug>/page.tsx` sets metadata and mounts the matching client component, usually with a loading skeleton.

#### PDF and document tools

- `/tools/merge-pdf` -> [src/app/tools/merge-pdf/page.tsx](src/app/tools/merge-pdf/page.tsx), [src/app/tools/merge-pdf/MergePdfClient.tsx](src/app/tools/merge-pdf/MergePdfClient.tsx)
- `/tools/compress-pdf` -> [src/app/tools/compress-pdf/page.tsx](src/app/tools/compress-pdf/page.tsx), [src/components/tools/CompressPdfClient.tsx](src/components/tools/CompressPdfClient.tsx)
- `/tools/split-pdf` -> [src/app/tools/split-pdf/page.tsx](src/app/tools/split-pdf/page.tsx), [src/components/tools/SplitPdfClient.tsx](src/components/tools/SplitPdfClient.tsx)
- `/tools/pdf-to-word` -> [src/app/tools/pdf-to-word/page.tsx](src/app/tools/pdf-to-word/page.tsx), [src/components/tools/PdfToWordClient.tsx](src/components/tools/PdfToWordClient.tsx)
- `/tools/word-to-pdf` -> [src/app/tools/word-to-pdf/page.tsx](src/app/tools/word-to-pdf/page.tsx), [src/components/tools/WordToPdfClient.tsx](src/components/tools/WordToPdfClient.tsx)
- `/tools/jpg-to-pdf` -> [src/app/tools/jpg-to-pdf/page.tsx](src/app/tools/jpg-to-pdf/page.tsx), [src/components/tools/JpgToPdfClient.tsx](src/components/tools/JpgToPdfClient.tsx)
- `/tools/pdf-to-jpg` -> [src/app/tools/pdf-to-jpg/page.tsx](src/app/tools/pdf-to-jpg/page.tsx), [src/components/tools/PdfToJpgClient.tsx](src/components/tools/PdfToJpgClient.tsx)
- `/tools/pdf-to-word` -> also mapped in use-case routes through programmatic SEO
- `/tools/merge-pdf`, `/tools/compress-pdf`, `/tools/split-pdf` are also used as base tools for use-case SEO routes

#### Image tools

- `/tools/image-compressor` -> [src/app/tools/image-compressor/page.tsx](src/app/tools/image-compressor/page.tsx), [src/components/tools/ImageCompressorClient.tsx](src/components/tools/ImageCompressorClient.tsx)
- `/tools/image-color-palette-generator` -> [src/app/tools/image-color-palette-generator/page.tsx](src/app/tools/image-color-palette-generator/page.tsx), [src/components/tools/ImageColorPalette.tsx](src/components/tools/ImageColorPalette.tsx)
- `/tools/png-to-jpg` -> [src/app/tools/png-to-jpg/page.tsx](src/app/tools/png-to-jpg/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/jpg-to-png` -> [src/app/tools/jpg-to-png/page.tsx](src/app/tools/jpg-to-png/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/png-to-webp` -> [src/app/tools/png-to-webp/page.tsx](src/app/tools/png-to-webp/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/webp-to-png` -> [src/app/tools/webp-to-png/page.tsx](src/app/tools/webp-to-png/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/jpg-to-webp` -> [src/app/tools/jpg-to-webp/page.tsx](src/app/tools/jpg-to-webp/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/webp-to-jpg` -> [src/app/tools/webp-to-jpg/page.tsx](src/app/tools/webp-to-jpg/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/png-to-avif` -> [src/app/tools/png-to-avif/page.tsx](src/app/tools/png-to-avif/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/jpg-to-avif` -> [src/app/tools/jpg-to-avif/page.tsx](src/app/tools/jpg-to-avif/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/avif-to-png` -> [src/app/tools/avif-to-png/page.tsx](src/app/tools/avif-to-png/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/avif-to-jpg` -> [src/app/tools/avif-to-jpg/page.tsx](src/app/tools/avif-to-jpg/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/svg-to-png` -> [src/app/tools/svg-to-png/page.tsx](src/app/tools/svg-to-png/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/svg-to-jpg` -> [src/app/tools/svg-to-jpg/page.tsx](src/app/tools/svg-to-jpg/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)
- `/tools/svg-to-webp` -> [src/app/tools/svg-to-webp/page.tsx](src/app/tools/svg-to-webp/page.tsx), [src/components/tools/ImageConverter.tsx](src/components/tools/ImageConverter.tsx)

#### Audio and video tools

- `/tools/mp4-to-mp3` -> [src/app/tools/mp4-to-mp3/page.tsx](src/app/tools/mp4-to-mp3/page.tsx), [src/components/tools/Mp4ToMp3Client.tsx](src/components/tools/Mp4ToMp3Client.tsx)

#### Finance tools

- `/tools/sip-calculator` -> [src/app/tools/sip-calculator/page.tsx](src/app/tools/sip-calculator/page.tsx), [src/components/tools/SIPCalculatorClient.tsx](src/components/tools/SIPCalculatorClient.tsx)
- `/tools/compound-interest-calculator` -> [src/app/tools/compound-interest-calculator/page.tsx](src/app/tools/compound-interest-calculator/page.tsx), [src/components/tools/CompoundInterestClient.tsx](src/components/tools/CompoundInterestClient.tsx)
- `/tools/fd-calculator` -> [src/app/tools/fd-calculator/page.tsx](src/app/tools/fd-calculator/page.tsx), [src/components/tools/FDCalculatorClient.tsx](src/components/tools/FDCalculatorClient.tsx)
- `/tools/mutual-fund-calculator` -> [src/app/tools/mutual-fund-calculator/page.tsx](src/app/tools/mutual-fund-calculator/page.tsx), [src/components/tools/MutualFundCalculatorClient.tsx](src/components/tools/MutualFundCalculatorClient.tsx)
- `/tools/ppf-calculator` -> [src/app/tools/ppf-calculator/page.tsx](src/app/tools/ppf-calculator/page.tsx), [src/components/tools/PPFCalculatorClient.tsx](src/components/tools/PPFCalculatorClient.tsx)
- `/tools/rd-calculator` -> [src/app/tools/rd-calculator/page.tsx](src/app/tools/rd-calculator/page.tsx), [src/components/tools/RDCalculatorClient.tsx](src/components/tools/RDCalculatorClient.tsx)
- `/tools/loan-calculator` -> [src/app/tools/loan-calculator/page.tsx](src/app/tools/loan-calculator/page.tsx), [src/components/tools/LoanCalculatorClient.tsx](src/components/tools/LoanCalculatorClient.tsx)
- `/tools/discount-calculator` -> [src/app/tools/discount-calculator/page.tsx](src/app/tools/discount-calculator/page.tsx), [src/components/tools/DiscountCalculatorClient.tsx](src/components/tools/DiscountCalculatorClient.tsx)
- `/tools/margin-calculator` -> [src/app/tools/margin-calculator/page.tsx](src/app/tools/margin-calculator/page.tsx), [src/components/tools/MarginCalculatorClient.tsx](src/components/tools/MarginCalculatorClient.tsx)
- `/tools/sales-tax-calculator` -> [src/app/tools/sales-tax-calculator/page.tsx](src/app/tools/sales-tax-calculator/page.tsx), [src/components/tools/SalesTaxCalculatorClient.tsx](src/components/tools/SalesTaxCalculatorClient.tsx)

#### Math tools

- `/tools/standard-calculator` -> [src/app/tools/standard-calculator/page.tsx](src/app/tools/standard-calculator/page.tsx), [src/components/tools/StandardCalculatorClient.tsx](src/components/tools/StandardCalculatorClient.tsx)
- `/tools/scientific-calculator` -> [src/app/tools/scientific-calculator/page.tsx](src/app/tools/scientific-calculator/page.tsx), [src/components/tools/ScientificCalculatorClient.tsx](src/components/tools/ScientificCalculatorClient.tsx)
- `/tools/differentiation-calculator` -> [src/app/tools/differentiation-calculator/page.tsx](src/app/tools/differentiation-calculator/page.tsx), [src/components/tools/DifferentiationClient.tsx](src/components/tools/DifferentiationClient.tsx)
- `/tools/integration-calculator` -> [src/app/tools/integration-calculator/page.tsx](src/app/tools/integration-calculator/page.tsx), [src/components/tools/IntegrationClient.tsx](src/components/tools/IntegrationClient.tsx)
- `/tools/equation-solver` -> [src/app/tools/equation-solver/page.tsx](src/app/tools/equation-solver/page.tsx), [src/components/tools/EquationSolverClient.tsx](src/components/tools/EquationSolverClient.tsx)
- `/tools/quadratic-solver` -> [src/app/tools/quadratic-solver/page.tsx](src/app/tools/quadratic-solver/page.tsx), [src/components/tools/QuadraticSolverClient.tsx](src/components/tools/QuadraticSolverClient.tsx)
- `/tools/matrix-calculator` -> [src/app/tools/matrix-calculator/page.tsx](src/app/tools/matrix-calculator/page.tsx), [src/components/tools/MatrixCalculatorClient.tsx](src/components/tools/MatrixCalculatorClient.tsx)
- `/tools/statistics-calculator` -> [src/app/tools/statistics-calculator/page.tsx](src/app/tools/statistics-calculator/page.tsx), [src/components/tools/StatisticsCalculatorClient.tsx](src/components/tools/StatisticsCalculatorClient.tsx)
- `/tools/gcd-lcm-calculator` -> [src/app/tools/gcd-lcm-calculator/page.tsx](src/app/tools/gcd-lcm-calculator/page.tsx), [src/components/tools/GCDLCMCalculatorClient.tsx](src/components/tools/GCDLCMCalculatorClient.tsx)
- `/tools/percentage-calculator` -> [src/app/tools/percentage-calculator/page.tsx](src/app/tools/percentage-calculator/page.tsx), [src/components/tools/PercentageCalculatorClient.tsx](src/components/tools/PercentageCalculatorClient.tsx)
- `/tools/fraction-calculator` -> [src/app/tools/fraction-calculator/page.tsx](src/app/tools/fraction-calculator/page.tsx), [src/components/tools/FractionCalculatorClient.tsx](src/components/tools/FractionCalculatorClient.tsx)
- `/tools/logarithm-calculator` -> [src/app/tools/logarithm-calculator/page.tsx](src/app/tools/logarithm-calculator/page.tsx), [src/components/tools/LogarithmClient.tsx](src/components/tools/LogarithmClient.tsx)
- `/tools/binary-converter` -> [src/app/tools/binary-converter/page.tsx](src/app/tools/binary-converter/page.tsx), [src/components/tools/BinaryConverterClient.tsx](src/components/tools/BinaryConverterClient.tsx)

#### Utility tools

- `/tools/unit-converter` -> [src/app/tools/unit-converter/page.tsx](src/app/tools/unit-converter/page.tsx), [src/components/tools/UnitConverterClient.tsx](src/components/tools/UnitConverterClient.tsx)
- `/tools/bmi-calculator` -> [src/app/tools/bmi-calculator/page.tsx](src/app/tools/bmi-calculator/page.tsx), [src/components/tools/BMICalculatorClient.tsx](src/components/tools/BMICalculatorClient.tsx)
- `/tools/age-calculator` -> [src/app/tools/age-calculator/page.tsx](src/app/tools/age-calculator/page.tsx), [src/components/tools/AgeCalculatorClient.tsx](src/components/tools/AgeCalculatorClient.tsx)
- `/tools/random-generator` -> [src/app/tools/random-generator/page.tsx](src/app/tools/random-generator/page.tsx), [src/components/tools/RandomGeneratorClient.tsx](src/components/tools/RandomGeneratorClient.tsx)
- `/tools/roman-numerals` -> [src/app/tools/roman-numerals/page.tsx](src/app/tools/roman-numerals/page.tsx), [src/components/tools/RomanNumeralConverterClient.tsx](src/components/tools/RomanNumeralConverterClient.tsx)
- `/tools/qr-code-generator` -> [src/app/tools/qr-code-generator/page.tsx](src/app/tools/qr-code-generator/page.tsx), [src/components/tools/QRCodeGenerator.tsx](src/components/tools/QRCodeGenerator.tsx)
- `/tools/image-color-palette-generator` -> [src/app/tools/image-color-palette-generator/page.tsx](src/app/tools/image-color-palette-generator/page.tsx), [src/components/tools/ImageColorPalette.tsx](src/components/tools/ImageColorPalette.tsx)

### Notable route helpers and route metadata

| Route helper           | File                                                                   | Notes                                                    |
| ---------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------- |
| `generateMetadata`     | [src/app/use-cases/[slug]/page.tsx](src/app/use-cases/[slug]/page.tsx) | Builds SEO metadata from programmatic SEO data           |
| `generateStaticParams` | [src/app/use-cases/[slug]/page.tsx](src/app/use-cases/[slug]/page.tsx) | Prebuilds use-case routes                                |
| `metadata` exports     | Most route files                                                       | Route-level metadata wrappers around `constructMetadata` |

## 19. Folder Structure

### UI organization summary

| Folder                                               | Purpose                                                                               |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [src/app](src/app)                                   | Next.js App Router pages, layouts, and route metadata                                 |
| [src/components/layout](src/components/layout)       | Global shell and page wrappers                                                        |
| [src/components/ui](src/components/ui)               | Marketing UI sections, generic primitives, and reusable cards                         |
| [src/components/tools](src/components/tools)         | Tool-specific clients and utility widgets                                             |
| [src/components/providers](src/components/providers) | Context providers such as toast state                                                 |
| [src/components/analytics](src/components/analytics) | Analytics bootstrap and route tracking                                                |
| [src/components/seo](src/components/seo)             | JSON-LD structured data helpers                                                       |
| [src/config](src/config)                             | Tool catalog, theme palette, SEO content, metadata data, and programmatic SEO entries |
| [src/hooks](src/hooks)                               | Shared React hooks                                                                    |
| [src/lib](src/lib)                                   | Small utility helpers, metadata builder, analytics helpers, validation                |
| [public](public)                                     | Static assets, app icons, manifest, SVG placeholders, brand files                     |

### Public asset summary

- `file.svg`, `globe.svg`, `next.svg`, `vercel.svg`, `window.svg` are present in [public](public).
- `logo-icon.png` is used as the product mark.
- `llms.txt` and `manifest.json` are also present.

## 20. Recommendations

### Consistency

- Centralize repeated card shells, button styles, and gradient headers into a smaller set of primitives.
- Unify the multiple page shells. The home, tools, how-it-works, why-us, legal, and contact pages each use slightly different spacing and decoration rules.
- Reduce duplicate tool catalog definitions. The home page repeats the same tool list that already exists in [src/config/tools.ts](src/config/tools.ts).

### Reusability

- Promote shared form controls for the calculator family so inputs, selects, and result panels behave consistently.
- Extract the repeated file-processing card pattern into a reusable workflow component for upload, preview, progress, and result states.
- Consider a shared themed card primitive for the folder-style visuals used by `ToolCard`, `ToolFooter`, `HeroCardGrid`, `WhyUsSection`, and `HowItWorksSection`.

### Accessibility

- Add a documented focus style system for custom buttons and pills so keyboard affordances are more consistent across the app.
- Consider a skip link and a formal screen-reader-only utility for long pages and legal content.
- Verify contrast on muted text overlays and semi-transparent backgrounds if the palette is expanded.

### Maintainability

- Move more inline style values into shared tokens or component classes to reduce repetition.
- Consolidate metadata definitions so route files do less per-page assembly.
- Make `ToolLayout` the standard shell for all tool-like experiences where possible.

### Component architecture

- The `Button` primitive exists, but many tool views still use custom buttons directly. Expanding the primitive’s coverage would improve consistency.
- The project has a strong theme palette, but only one visual theme is active. If dark mode is ever introduced, it should be implemented as a real token set rather than a class toggle.
- Some custom patterns are duplicated in multiple places, especially the gradient folder-card motif and the hero decorative collage. A shared visual kit would lower maintenance cost.
- `Not found in project.` for a dedicated component library, Storybook setup, or formal token source-of-truth beyond the existing CSS variables and config files.
