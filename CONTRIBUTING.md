# Contributing to SipStrong

Thank you for your interest in contributing to SipStrong! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

- Be respectful and inclusive to all contributors
- Focus on constructive feedback
- Report issues respectfully
- Help others succeed

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 11.x or higher
- Git installed and configured
- A GitHub account

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/sipstrong.git
   cd sipstrong
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/original-owner/sipstrong.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

6. **Setup environment**
   ```bash
   cp .env.example .env.local
   # Fill in Firebase credentials for testing
   ```

## Development Workflow

### Making Changes

1. **Keep main branch updated**
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Write your code**
   - Follow the code style (see below)
   - Write TypeScript with proper types
   - Add comments for complex logic

3. **Test your changes**
   ```bash
   npm run build  # Build test
   npm run lint   # Linting
   npm run dev    # Manual testing
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: Add awesome new feature"
   ```

   Use conventional commits:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation
   - `style:` - Code style (formatting)
   - `refactor:` - Code refactoring
   - `perf:` - Performance improvement
   - `test:` - Tests
   - `chore:` - Build, dependencies, etc.

### Submitting Changes

1. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

2. **Create a Pull Request**
   - Go to GitHub
   - Click "New Pull Request"
   - Fill in the PR template
   - Describe what you changed and why

3. **Respond to reviews**
   - Make requested changes
   - Push updates (don't force push)
   - Respond to comments

## Code Style Guidelines

### TypeScript

- Use strict type definitions
- Avoid `any` types unless necessary
- Use interfaces for object shapes
- Document complex functions with JSDoc

Example:
```typescript
/**
 * Fetch products by category
 * @param category - Product category
 * @param limit - Maximum results
 * @returns Array of products
 */
export function getProductsByCategory(
  category: string,
  limit: number = 10
): Product[] {
  // implementation
}
```

### Components

- Use functional components
- Use hooks for state/effects
- Memoize expensive components with `React.memo`
- Export as default for routes

Example:
```typescript
'use client';

import React from 'react';

interface ProductCardProps {
  product: Product;
  onSelect: (id: number) => void;
}

export default function ProductCard({
  product,
  onSelect
}: ProductCardProps) {
  return (
    <div onClick={() => onSelect(product.id)}>
      {/* component content */}
    </div>
  );
}
```

### CSS / Tailwind

- Use Tailwind utility classes
- Avoid inline styles
- Use responsive prefixes: `sm:`, `md:`, `lg:`, etc.
- Create custom components for repeated groups

Example:
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* content */}
</div>
```

### Naming Conventions

- **Files**: kebab-case for folders, PascalCase for components
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Events**: on + PascalCase (e.g., `onProductSelect`)

## Documentation

### README Changes

- Keep README.md updated with major changes
- Document new environment variables
- Update setup instructions if needed

### Component Documentation

- Add JSDoc comments to components
- Document props and their types
- Explain complex logic with comments

## Testing

While not required, tests are encouraged:

```bash
# Future: Run tests
npm test

# Run linting (current)
npm run lint

# Manual testing
npm run dev
npm run build
npm run start
```

## Branching Strategy

### Branch Naming

- Feature: `feature/description`
- Bugfix: `fix/description`
- Hotfix: `hotfix/description`
- Documentation: `docs/description`

Example:
- `feature/add-product-reviews`
- `fix/cart-total-calculation`
- `docs/update-setup-guide`

## Pull Request Process

### Before Submitting

- [ ] Code follows style guidelines
- [ ] TypeScript compiles without errors
- [ ] ESLint passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Changes are tested locally
- [ ] Commit messages are clear and conventional
- [ ] PR description clearly describes changes

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issues
Closes #123

## Testing
Description of testing performed

## Screenshots (if applicable)
Add screenshots for UI changes
```

## Issue Reporting

### Bug Reports

Include:
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment (OS, Node version, etc.)

### Feature Requests

Include:
- Clear description of feature
- Why it's useful
- Possible implementation approach
- Any alternatives considered

## Questions or Need Help?

- Check existing [Issues](https://github.com/your-username/sipstrong/issues)
- Start a [Discussion](https://github.com/your-username/sipstrong/discussions)
- Review documentation in project README

## Review Process

1. A maintainer will review your PR
2. They may request changes or ask questions
3. Respond to feedback constructively
4. Once approved, your PR will be merged

## Stale Issues/PRs

- Issues without activity for 30 days may be marked as stale
- PRs without activity for 14 days may be closed
- You can keep them active by responding

## Recognition

Contributors will be recognized in:
- Project README
- Release notes
- GitHub insights

## Questions?

Feel free to ask! We want to help you contribute successfully.

---

**Thank you for contributing to SipStrong! 🚀**
