# Well-Structured Slide Examples

Use these templates as a starting point for your slides.

## 1. Concept Slide (Text-only)
Focuses on "Why" and "What".

```markdown
---
title: "Why use Bun?"
order: 10
---
## Key Advantages
- **Speed**: Built for performance from the ground up.
- **All-in-one**: Bundler, test runner, and runtime in one tool.
- **Compat**: High compatibility with Node.js APIs.
- **Native**: First-class TypeScript and JSX support.
```

## 2. Code Explanation Slide (Code + Summary)
Focuses on a specific API.

```markdown
---
title: "Basic Server Setup"
order: 20
---
## Minimal Implementation
The `Bun.serve` method is the entry point for all HTTP servers.

```javascript
Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Hello!");
  }
});
```
```

## 3. Pattern/Comparison Slide (List + Short Code)
Shows a pattern with a brief example.

```markdown
---
title: "Request Metadata"
order: 30
---
## Accessing URL Info
Use the `URL` constructor to parse the incoming request URL.

- `req.url`: Full string URL.
- `url.pathname`: The path part.
- `url.search`: Query strings.

```javascript
const url = new URL(req.url);
console.log(url.pathname); // e.g. "/users"
```
```

## 4. Multi-step Process (Splitting)
If a process has many steps, use multiple slides.

**Slide 1: The Setup**
```markdown
---
title: "Middleware Chain: Setup"
order: 40
---
## Defining Middlewares
Store your functions in an array for sequential execution.

```javascript
const middlewares = [
  logging,
  auth,
  cors
];
```
```

**Slide 2: The Execution**
```markdown
---
title: "Middleware Chain: Logic"
order: 41
---
## Execution Loop
Iterate through the array before calling the main handler.

```javascript
for (const fn of middlewares) {
  const result = fn(req);
  if (result.error) return result.error;
}
```
```
