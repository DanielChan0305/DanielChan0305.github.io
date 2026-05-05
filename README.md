# [danielchan0305.github.io](https://danielchan0305.github.io)

A personal website built with [Jekyll](https://jekyllrb.com/) — a static site generator. It's a place to share a bit about myself, my projects, and whatever else I find interesting.

Built on top of the [Lightspeed](https://github.com/tajacks/lightspeed) template by [tajacks](https://github.com/tajacks). Big thanks to tajacks for creating it!

---

## Prerequisites

- **Ruby 3.2.3** (see `.ruby-version` or `Gemfile`)
- **Bundler** (`gem install bundler`)

## Local Development

### 1. Install dependencies

```bash
bundle install
```

### 2. Start the dev server with live reload

```bash
bundle exec jekyll serve --livereload
```

This starts a local server at **http://localhost:4000**. The `--livereload` flag automatically refreshes the browser whenever you save a change to any file.

### 3. Build for production (no server)

```bash
bundle exec jekyll build
```

The generated static site is output to `_site/`.

---

## Project Structure

```
.
├── _config.yml          # Site configuration
├── _data/               # Data files (nav, etc.)
├── _includes/           # Reusable HTML snippets
├── _layouts/            # Page templates
├── _sass/               # Sass stylesheets
├── assets/              # Compiled CSS, JS, images
├── cats/_posts/         # Blog posts (Markdown)
├── categories/          # Category pages
├── posts/               # Post index
├── Gemfile              # Ruby dependencies
└── README.md
```

## License

Distributed under the [GNU General Public License v3.0](COPYING).
