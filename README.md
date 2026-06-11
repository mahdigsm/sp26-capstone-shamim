# sp26-capstone-shamim

## Overview

Your task is to implement the provided Figma design as a production-ready Front-End application.

The goal of this project is to evaluate:

* UI implementation skills
* Component architecture
* Responsive design
* TypeScript usage
* State and server state management
* Code quality and maintainability
* Git workflow and development process

---

## Design

Live Preview::

```text
[PASTE_FIGMA_LINK_HERE]
```

Carefully inspect all screens, components, spacing, typography, colors, and interactions before starting development.

---

## Required Technologies

The following technologies must be used:

* Next.js (App Router)
* React.js
* TypeScript
* Tailwind CSS
* Shadcn
* git
* Responsive Design

You may use additional libraries if needed.

---

## Requirements

## Design System

### Color Palette

- Primary Background: `#F9F8F6`
- Secondary Surface: `#D9CFC7`
- Card / Section Background: `#EFE9E3`

### Notes

- Use colors consistently via Tailwind config or CSS variables.
- Avoid hardcoding hex values directly in components.

### UI

* Implement all provided screens.
* Match the Figma design as closely as possible.
* Use reusable components.
* Follow a clean folder structure.

### Responsive Design

The application must work properly on:

* Mobile
* Tablet
* Desktop

### Code Quality

* Keep components modular.
* Avoid unnecessary duplication.
* Use meaningful naming conventions.
* Maintain readable and scalable code.

#### No Inline Styles

Avoid using inline styles whenever possible.

Bad:

`<div style={{ width: "300px" }} />`

Good:

`<div className="w-full max-w-md" />`

Use Tailwind CSS utilities instead of inline style objects.

#### No Hardcoded Colors

Do not use raw color values directly in components.

Bad:

`className="text-[#4F46E5]"`

Good:

className="text-primary"

or use design tokens and CSS variables when appropriate.

#### File Naming Convention

All files must use kebab-case naming.

Good:

- product-card.tsx
- user-profile-form.tsx
- auth-service.ts

Bad:

- ProductCard.tsx
- userProfile.tsx
- AuthService.ts

#### Avoid Arbitrary Pixel Values

Prefer Tailwind spacing and sizing scales over arbitrary pixel values.

Avoid:

- `w-[347px]`
- `text-[15px]`

Prefer:

- `w-full`
- `max-w-sm`
- `text-base`
- `text-lg`

Use responsive and scalable sizing whenever possible.

#### Named Exports Only

Use named exports for all custom components.

Good:

`export function ProductCard() {
  return null;
}`

*Import:

`import { ProductCard } from "@/components/product-card";`

Avoid:

`export default function ProductCard() {
  return null;
}`

Exception:

- page.tsx
- layout.tsx

may use default exports when required by Next.js.

#### No Deep Relative Imports

Avoid long relative imports.

Bad:

`import Button from "../../../components/button";`

Prefer path aliases:

`import { Button } from "@/components/button";`

Configure and use TypeScript path aliases consistently throughout the project.
---

## Commit Requirements

Development progress will be evaluated.

Requirements:

* Minimum 3 commits per day
* Use meaningful commit messages
* Avoid committing the entire project in a single commit

Good examples:

```bash
feat: create authentication pages

feat: implement product card component

feat: integrate react query

fix: mobile navigation issue

refactor: extract reusable modal component
```

Bad examples:

```bash
update

changes

final

project
```

---

## Evaluation Criteria

### UI Accuracy

* Similarity to the Figma design
* Attention to details

### Functionality

* Correct implementation of required features

### Responsive Design

* Mobile, tablet, and desktop support

### Git Usage

* Commit history
* Commit quality
* Development consistency

---

## Deadline

* Duration: 4 Days  
* Submission deadline: Tuesday night, June 16, 2026  
Good luck and enjoy building.
