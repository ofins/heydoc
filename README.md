# HeyDoc

[![npm version](https://badge.fury.io/js/heydoc.svg)](https://badge.fury.io/js/heydoc)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, fast, and beautiful documentation generator that transforms your project's Markdown files into a searchable, navigable documentation site.

## ✨ Features

- **🚀 Fast & Modern**: Built with Astro for lightning-fast static site generation
- **🔍 Fuzzy Search**: Integrated full-text search with Pagefind for instant results
- **📱 Responsive Design**: Beautiful, mobile-friendly interface that works on all devices
- **🎯 Easy Navigation**: Automatic table of contents and breadcrumb navigation
- **📝 Markdown First**: Write documentation in familiar Markdown format
- **🔧 Zero Config**: Works out of the box with sensible defaults
- **🏗️ Static Generation**: Generate static sites deployable anywhere
- **🎨 Customizable**: Easy to theme and extend

## 🚀 Installation

### Global Installation (Recommended)

```bash
npm install -g heydoc
```

### Local Installation

```bash
npm install --save-dev heydoc
```

## 🏁 Getting Started

### 1. Create Your Documentation

Create a `docs/` or `api/` directory in your project root and add Markdown files:

```
your-project/
├── docs/
│   ├── index.md          # Main documentation page
│   ├── getting-started.md
│   └── api/
│       └── endpoints.md
├── package.json
└── ...
```

Or simply create MD docs next to your api files

```
your-project/
├── api/
│   ├── user-api.ts
│   ├── user-api.md
├── package.json
└── ...
```

### 2. Add Front Matter (Optional but Recommended)

Add metadata to your Markdown files for better organization:

```markdown
---
title: Getting Started
description: Learn how to get started with our API
category: Guide
tags: ['tutorial', 'beginner']
---

# Getting Started

Welcome to our documentation! This guide will help you...
```

### 3. Start the Development Server

```bash
# If installed globally
heydoc dev

# If installed locally
npx heydoc dev
```

Open [http://localhost:4321/docs](http://localhost:4321/docs) in your browser to see your documentation site!

### 4. Build for Production

```bash
# If installed globally
heydoc build

# If installed locally
npx heydoc build
```

Your static site will be generated in the `dist-doc/` directory, ready for deployment.

## 📖 Usage

### Commands

| Command          | Description                      |
| ---------------- | -------------------------------- |
| `heydoc dev`     | Start development server         |
| `heydoc build`   | Build static site for production |
| `heydoc preview` | Preview the built site locally   |

### File Structure

HeyDoc automatically discovers and processes all `.md` files in your project, excluding:

- `node_modules/` directory
- `dist-doc/` directory (build output)

### Front Matter Support

Enhance your documentation with front matter:

```yaml
---
title: Page Title
description: Brief description for SEO
category: API Reference
tags: ['api', 'reference', 'v1']
---
```

Supported fields:

- `title`: Page title (defaults to filename)
- `description`: Page description for meta tags
- `category`: Group related pages together
- `tags`: Array of tags for filtering and search

## ⚙️ Configuration

### Environment Variables

| Variable       | Description                          | Default |
| -------------- | ------------------------------------ | ------- |
| `HEY_DOC_BASE` | Base path for the documentation site | `/docs` |

Example:

```bash
HEY_DOC_BASE="/my-docs" heydoc build
```

### Custom Base Path

If you need to deploy to a subdirectory, set the base path:

```bash
# Deploy to https://example.com/my-docs/
HEY_DOC_BASE="/my-docs" heydoc build
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Search powered by [Pagefind](https://pagefind.app/)
- Markdown processing by [Marked](https://marked.js.org/)

---

**Made with ❤️ for developers who value great documentation**
