# Design Guidelines

This document outlines the design and styling principles for this project to ensure consistency and maintainability.

## Tech Stack

- **Framework**: [SolidJS](https://www.solidjs.com/)
- **Routing**: [Vike](https://vike.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Solid](https://lucide.dev/)
- **Class Management**: [tailwind-variants/lite](https://github.com/tailwind-variants/tailwind-variants)

## Styling Approach

### 1. Tailwind CSS

Use Tailwind CSS for the vast majority of styling. It is the primary tool for layout, spacing, colors, and typography.

### 2. Conditional Classes

For complex or conditional classes, use the `cx` function from `tailwind-variants/lite`.

```tsx
import { cx } from 'tailwind-variants/lite';

// Example
<div
  class={cx(
    'base-classes',
    isActive ? 'active-classes' : 'inactive-classes'
  )}
/>;
```

### 3. Custom Theme

Leverage the custom theme defined in `pages/tailwind.css`. Avoid hardcoding hex codes when a theme variable is available.

- `primary`: Main brand color.
- `surface`: Surface/card background.
- `bg`: Main background color.
- `border`: Border color.
- `inactive` / `active`: State colors.

### 4. CSS Variables

Use CSS variables for reusable values that might change or need to be shared across components (e.g., `--padding`, `--min-height`).

### 5. Component-Specific CSS

For highly complex patterns or animations that are difficult to express with Tailwind utility classes, use component-specific CSS files (e.g., `pages/index/styles.css`).

## Color Palette

| Name           | Value     | Usage                                      |
| :------------- | :-------- | :----------------------------------------- |
| **Primary**    | `#4574dc` | Main actions, highlights, icons            |
| **Surface**    | `#171c2a` | Cards, elevated elements                   |
| **Background** | `#121620` | Main page background                       |
| **Border**     | `#2a2e3a` | Dividers, borders                          |
| **Text**       | `white`   | Primary text (use opacities for hierarchy) |

## Typography

- **Primary Font**: 'Source Sans Pro'
- **Hierarchy**: Use Tailwind's text size and weight utilities (e.g., `text-2xl`, `font-bold`) to establish visual hierarchy.
- **Text Color**: Use white with varying opacities (e.g., `text-white/60` for secondary text) to create depth.

## Icons

Use `lucide-solid` for all iconography. Ensure icons are sized consistently and use the `primary` color where appropriate.

## Component Structure

- **Pages**: Each page is located in its own directory under `/pages` with a `+Page.tsx` entry point.
- **Layouts**: Shared layouts are defined in `+Layout.tsx` files.
- **Styles**: Component-specific styles should live in a `.css` file within the same directory as the component.
