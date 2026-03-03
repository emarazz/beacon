# Beacon Auto Care — Frontend Dev Guidelines

## Tech Stack
- Framework: Next.js (App Router)
- UI Library: MUI (Material UI)
- Language: TypeScript
- Hosting: Firebase

## Project Structure

### Routes
Each route has two files: a `page.tsx` that handles metadata, and a page component that holds the actual UI.

- `/src/app/` → `page.tsx` + `HomePage.tsx`
- `/src/app/services/` → `page.tsx` + `ServicesPage.tsx`
- `/src/app/about-us/` → `page.tsx` + `AboutUs.tsx`
- `/src/app/find-us/` → `page.tsx` + `FindUs.tsx`

### Theming
MUI theming is centralized in `/theme.ts`. Always go there first for customizations.

## Components and Styling

### MUI Components
- Use MUI components as the default. Avoid custom HTML elements when an MUI equivalent exists.
- Customization must be done in `/theme.ts` whenever possible. This is especially important for `Button`, `Card`, and `Paper`.
- Only customize via `sx` prop for one-off, page-specific cases.

### Layout
- Each page is built with sections. A section is an MUI `Container` with no additional props.
- Layout and spacing inside a section is handled by MUI `Box` components.
- **Horizontal stacking** (side-by-side columns): use `display: grid` with `gridTemplateColumns` defined for each breakpoint (`xs`, `sm`, `md`, `lg`).
- **Vertical stacking** (top-to-bottom rows): use `display: flex` with `flexDirection: column`.

### Spacing
- Use only MUI's integer spacing scale (e.g. `2`, `4`, `8`). No arbitrary pixel or rem values.
- Prefer `padding` over `margin`.
- Achieve spacing between elements using `gap` inside `flex` or `grid` containers. Avoid using `margin` or `padding` for this purpose.

## Naming Conventions
- **Components**: `PascalCase` → `ServiceCard.tsx`, `HeroSection.tsx`
- **Variables & functions**: `camelCase` → `getServices`, `isLoading`
- **Files (non-component)**: `camelCase` → `colors.ts`, `theme.ts`
- **Constants**: `UPPER_SNAKE_CASE` → `MAX_ITEMS`, `DEFAULT_TIMEOUT`
- **Types & interfaces**: `PascalCase` → `ServiceItem`, `PageProps`
- All names in English.

## Fonts
Fonts are configured in `/src/app/layout.tsx` and `/theme.ts`. Do not override `font-size`, `font-weight`, or `line-height` manually. Use only the default MUI typography variants (`h1`–`h6`, `body1`, `body2`, `subtitle1`, etc.).

## Images & Assets
- Images go in `/public/img/` and are excluded from git via `.gitignore`.
- Use Next.js `<Image />` component for all images. Never use plain `<img>` tags.
- Prefer `.webp` format for photos and backgrounds.

## Other Notes
