# Presentation Markdown Structure Guide

This guide provides principles and patterns for creating effective slides using Markdown in this Astro-based presentation system.

## 1. Slide-First Principles

Unlike documents, slides are visual aids meant to be consumed quickly while someone is speaking. 

- **One Idea per Slide**: If you have two distinct points, create two slides.
- **Minimize Text**: Use keywords and phrases instead of full paragraphs.
- **Visual Balance**: Ensure there is enough white space around your content.
- **Progressive Disclosure**: Split complex topics into multiple slides that build upon each other.

## 2. Heading Hierarchy

The system automatically uses the frontmatter `title` as the main slide heading (`<h1>`).

- **Avoid H1 in Content**: Do not use `# Heading` in your Markdown content as it creates a secondary title that competes with the slide title.
- **Use H3 for Sections**: Instead of H2, use `### Sub-heading` for major sections within a slide. H2 can often be too large (1.5rem) and take up valuable space.
- **Keep it shallow**: Try not to go deeper than H3. Focus on using bullet points for further detail.

## 3. Content Budgets (Limits)

To prevent overflow and maintain readability, follow these "budgets":

| Content Type | Maximum Limit | Recommendation |
| :--- | :--- | :--- |
| **Bullet Points** | 6 items | 3-4 items |
| **Bullet Length** | 2 lines | 1 line |
| **Code Lines** | 20 lines | 12-15 lines |
| **Paragraphs** | 2 paragraphs | 1 short paragraph |
| **Tables** | 5 rows x 3 columns | Smaller is better |

## 4. Slide Patterns

### 4.1. Text-Focused Slide
Best for introductions or conceptual explanations.
```markdown
---
title: "Slide Title"
order: 10
---
## Key Concepts
- **Concept A**: Brief description.
- **Concept B**: Another brief point.
- **Concept C**: Final thought.
```

### 4.2. Code-Focused Slide
Focus on one specific implementation.
```markdown
---
title: "Implementation Example"
order: 11
---
```javascript
// Keep code focused and concise
const server = Bun.serve({
  fetch(req) {
    return new Response("Hello!");
  }
});
```
```

### 4.3. Split Content (Conceptual)
Since the system doesn't support columns out-of-the-box, use short lists followed by short code blocks to keep them on the same screen.
```markdown
---
title: "Feature & Code"
order: 12
---
- Uses `Bun.serve` for high performance.
- Native TypeScript support.

```javascript
// Minimal example
console.log("Fast!");
```
```

## 5. Code Presentation Guidelines

- **Excerpts over Full Files**: Don't show the entire 100-line file. Show the 10 lines that matter.
- **Use Ellipses**: Use `// ...` to indicate skipped code.
- **Split Long Blocks**: If a code block is >20 lines, split it into two slides focusing on different parts (e.g., "Part 1: Setup", "Part 2: Logic").
- **Highlighting**: Ensure you specify the language (e.g., ` ```javascript `) for proper syntax highlighting.

## 6. Anti-patterns to Avoid

- **The "Wall of Text"**: Avoid slides that look like a book page.
- **Overcrowding**: If you feel the need to use a smaller font, you have too much content.
- **Nested Lists**: Avoid going more than 2 levels deep in bullet points.
- **Excessive Scrolling**: If the slide body requires scrolling, it's a sign to split the slide.

## 7. Reorganization Examples

### Problem: Too much content
**Before (One Slide):**
- Heading 1
- Paragraph explaining theory
- Bullet list with 8 items
- 40-line code block

**After (Three Slides):**
1. **Slide 1: Overview**: Heading + Bullet list (3-4 items)
2. **Slide 2: Implementation (Part 1)**: Key bullet points + 15 lines of setup code
3. **Slide 3: Implementation (Part 2)**: Remaining logic code + Summary point
