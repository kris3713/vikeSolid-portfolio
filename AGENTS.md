# AGENTS.md

## Development

- Use **Bun** for all commands; scripts are `bun --bun <command>`.
- `bun --bun vike dev` – starts dev server with hot reload.
- `bun --bun vike build` – builds production assets.
- `bun --bun vike build && vike preview` – builds then serves preview.

## Linting & Formatting

- Lint: `bun --bun oxlint .` (runs all rules).
- Type‑aware lint: `bun --bun oxlint --type-aware .`.
- Format: `bun --bun oxfmt`.
- Format check: `bun --bun oxfmt --check`.

## Testing

- No test script defined in `package.json`. Add your own test runner if needed.

## Project Structure

- **File‑based routing**: pages live in `/pages`; each page is a folder with a `+Page.tsx` entry component.
- **Layout**: `+Layout.tsx` (root `pages`) wraps pages; components can be reused via `+Layout`.
- **Entry point**: `/pages/index/+Page.tsx` renders the home page.
- All components are SolidJS JSX (`.tsx`) files.

## Dependencies & Tooling

- Runtime: **SolidJS** + **Vite** (via Vike).
- Package manager: **Bun** (all scripts use `bun --bun`).
- Linting: **oxlint** with extensive rule set (`.oxlintrc.jsonc`).
- Formatting: **oxfmt** (`.oxfmtrc.jsonc`) – respects tabs=false, indent 2 spaces, line width 75.

## Common Pitfalls

- Do **not** use `npm run …` or `vite …`; always invoke via `bun --bun`.
- Do **not** assume a test command exists; add tests yourself.
- Lint order isn’t enforced automatically; run `oxlint` before committing.
- Tailwind classes are in `pages/**/*.css` (e.g., `pages/index/tailwind.css`); editing the CSS file is required for style changes.
