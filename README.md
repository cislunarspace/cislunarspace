<div align="center">

# Cislunar Space Beginner's Guide / 地月空间入门指南

**An open knowledge base for cislunar science, technology, and engineering practice**

<p align="center">
  <img src="https://img.shields.io/github/stars/cislunarspace/cislunarspace?style=flat-square&logo=github&label=Stars" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/cislunarspace/cislunarspace?style=flat-square&logo=github&label=Forks" alt="GitHub forks">
  <img src="https://img.shields.io/github/license/cislunarspace/cislunarspace?style=flat-square&logo=apache&label=License" alt="GitHub license">
</p>

</div>

The **Cislunar Space Beginner's Guide** is an open-source knowledge project that lowers the learning barrier for cislunar space topics and provides structured, professional, and practical resources for students, researchers, and aerospace enthusiasts.

## Main Modules

| Module | Description | Status |
|---|---|---|
| Cislunar Fundamentals | Definitions, characteristics, and mission overview | 🔄 Updating |
| Orbital Dynamics | Orbit types, features, and related methods | 🔄 Updating |
| Research Frontiers | Active topics and emerging directions | 🔄 Updating |
| Institutions & Organizations | Key labs, teams, and organizations | 🔄 Updating |
| Glossary | Authoritative terminology definitions | 🔄 Updating |
| Resources & Tools | Datasets, software, and code libraries | 🔄 Updating |

## Quick Start

### Website

- Official site: https://cislunarspace.cn

### Local Development

```bash
# clone repo
git clone https://github.com/cislunarspace/cislunarspace.git

# enter docs workspace
cd cislunarspace/web

# install dependencies
npm install

# run local dev
npm run docs:dev

# build static site
npm run docs:build
```

## Repository Structure

- `web/`: VuePress site source and content
  - `web/what-is-cislunarspace/`: Cislunar fundamentals
  - `web/cislunar-orbits/`: Orbital dynamics
  - `web/research-frontiers/`: Research frontiers
  - `web/glossary/`: Terminology dictionary
  - `web/resources-tools/`: Datasets and tools
  - `web/blue-team-research/`: Blue team research
  - `web/space-news/`: Space news
  - `web/en/`: English content
- `CONTRIBUTORS.md`: contributors list
- `LICENSE`: Apache 2.0 license

## Contributing

Contributions are welcome:

- content correction / extension
- new chapter proposals
- translation and proofreading
- issue reporting and feature suggestions
- website optimization

If you'd like to contribute, please open an Issue or Pull Request on GitHub.

## Contact

- GitHub: https://github.com/cislunarspace
- Gitee: https://gitee.com/cislunarspace
- Email: ouyangjiahong22@nudt.edu.cn

## WeChat Share Card Config

WeChat share card settings are maintained here (not in site docs).

### 1. Site-level Config

In `web/.vuepress/config.ts` under `themeConfig.wechatShare`:

- `enabled`: enable/disable
- `signatureEndpoint`: signature API endpoint (must be accessible from production pages)
- `defaultTitle`: default share title
- `defaultDesc`: default share description
- `defaultImage`: default share image (use absolute path like `/logo.png`)

### 2. Page-level Config

In any Markdown frontmatter:

```yaml
wechatShare:
  title: Page share title
  desc: Page share description
  image: /your-share-image.png
```

### 3. Signature API

See example: `web/.vuepress/wechat-signature-server.example.js`

Endpoint convention:

- `GET /api/wechat-signatures?url=<current page URL>`
- Returns JSON:

```json
{
  "appId": "wx1234567890",
  "timestamp": 1710000000,
  "nonceStr": "randomString",
  "signature": "sha1signature"
}
```

### 4. Notes

- The `url` used for WeChat signing must exactly match the page's actual URL (excluding hash).
- Configure JS API security domain in the WeChat Official Account backend.
- Share cards may be cached in WeChat; after changes, change parameters or wait for refresh.

## License

Licensed under **Apache License 2.0**. See [LICENSE](LICENSE).
