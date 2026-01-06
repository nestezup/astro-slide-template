# Slide Reorganization Plan

This document outlines how to split existing long slides into manageable, presentation-friendly pieces.

## 1. 04-routing.md (145 lines) → 5 Slides

Currently, this file tries to cover everything from parameters to REST APIs and Query params in one view.

### Proposed Split:
- **04-01-routing-intro.md**: Introduction to Routing system + Simple example.
- **04-02-dynamic-params.md**: Focus on `path.match` and regex parameters.
- **04-03-rest-api-get.md**: GET endpoints for Users.
- **04-04-rest-api-post.md**: POST endpoints and Body parsing.
- **04-05-query-params.md**: `URLSearchParams` usage.

## 2. 05-middleware.md (253 lines) → 6 Slides

This file covers 5 different types of middleware plus a "Middleware Chain" logic.

### Proposed Split:
- **05-01-middleware-concept.md**: What is middleware?
- **05-02-logging.md**: Logging middleware example.
- **05-03-cors.md**: CORS headers and preflight.
- **05-04-auth.md**: Authentication logic.
- **05-05-chaining.md**: How to chain multiple middlewares.
- **05-06-error-handling.md**: Global error handler middleware.

## 3. 06-deployment.md (361 lines) → 10+ Slides

This is the longest file. It should be broken down into sections.

### Proposed Split:
- **06-01-env-config.md**: Environment variables and Config files.
- **06-02-build-process.md**: `bun build` command.
- **06-03-prod-server.md**: Production server settings (`0.0.0.0`, etc.).
- **06-04-docker-basics.md**: Dockerfile structure.
- **06-05-docker-compose.md**: Orchestrating with DB.
- **06-06-vercel-deploy.md**: Vercel configuration.
- **06-07-railway-deploy.md**: Railway CLI and setup.
- **06-08-optimization-mem.md**: Memory limits and GC.
- **06-09-optimization-pool.md**: Database connection pooling.
- **06-10-caching.md**: Memory cache implementation.
- **06-11-monitoring.md**: Health checks and Logging.

## How to execute the split:
1. Create new files using the `XX-YY-name.md` pattern.
2. Update the `order` field in frontmatter to maintain sequence (e.g., 401, 402, 403 or use floats if the system supports them, or just sequential integers like 7, 8, 9...).
3. Ensure each slide has a unique, descriptive `title`.
