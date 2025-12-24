# Copilot instructions for this repo

Quick context
- A React + TypeScript frontend using Tailwind utilities. Source is under `src/`.
- Components live in `src/components/`. Example: `src/components/HeroSection.tsx`.
- Assets are imported via an alias starting with `@/` (e.g. `@/assets/avatar.png`). Respect the alias when adding imports.

What to know (high-value, codebase-specific)
- Component pattern
  - Use default-exported functional components in `.tsx` files placed in `src/components/`.
  - Keep component names PascalCase and file names matching (e.g. `HeroSection.tsx`).
- UI patterns
  - Tailwind utility classes are used extensively (e.g. `text-foreground`, `animate-fade-in`).
  - Animations often combine a class plus inline `style={{ animationDelay: "0.1s" }}` for staggered entrance.
    - Example pattern from HeroSection:
      - infoItems.map((item, i) => <div style={{ animationDelay: `${0.1 + i*0.05}s` }} className="opacity-0 animate-fade-in">...)
- Icons & small components
  - Use `lucide-react` icons like `import { Code, MapPin } from "lucide-react";` and render as `<Code className="w-4 h-4" />`.
  - Small presentational components such as `TechBadge` and `SocialLinks` are imported and used inside larger components. Keep their props minimal and descriptive (e.g. `TechBadge name="Java" color="typescript"`).
- Time/locale handling
  - HeroSection demonstrates locale-specific formatting: `date.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', hour12:true, timeZone:'Asia/Kolkata' })`.
  - If modifying time display, preserve timezone and locale intention unless explicitly changing behavior.

Practical rules for changes
- New components: place under `src/components/`, default export, import using `@/...` alias if referring to project assets or other components.
- Styling changes: update Tailwind classes; if a project-specific token (e.g. `text-foreground`, `ring-border`) is needed, modify Tailwind config or theme tokens (search for `tailwind.config.js`).
- Animation delays: prefer inline `style` for per-instance delay while keeping the shared `animate-fade-in` class for the animation itself.
- Icons: import only the needed lucide icons to keep bundle size small.

Dev workflow hints
- Inspect `package.json` for exact npm/pnpm/yarn scripts (common scripts: `dev`, `build`, `start`, `lint`, `format`). Run the appropriate script rather than assuming a specific tool.
- When adding new assets, place them in `src/assets/` and import via `@/assets/...`.

Code examples (copy-ready)
- Importing an asset and an icon:
  ```tsx
  import avatar from "@/assets/avatar.png";
  import { Code } from "lucide-react";
  ```
- Staggered animation pattern:
  ```tsx
  <div
    className="opacity-0 animate-fade-in"
    style={{ animationDelay: `${0.1 + index * 0.05}s` }}
  >
    ...
  </div>
  ```

What Copilot should not assume
- Do not assume package manager or scripts — always check `package.json`.
- Avoid changing global styling tokens without locating theme/tailwind configuration first.

If anything here is unclear or missing (build commands, test setup, alias config), tell me which areas to expand and I'll iterate.
