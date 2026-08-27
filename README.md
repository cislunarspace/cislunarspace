English | [简体中文](./README.zh-CN.md)

<div align="center">

# Cislunar Space Beginner's Guide

**A bilingual knowledge base on cislunar space concepts, orbital mechanics, and engineering practice**

[Read Online](https://cislunarspace.cn/en/) · [中文版](https://cislunarspace.cn/) · [Report an Issue](https://github.com/cislunarspace/cislunarspace/issues)

</div>

---

## What is this

Between low Earth orbit and the Moon, 384,000 km away, spacecraft dynamics change fundamentally: Earth's gravity no longer dominates, and lunar and solar gravity interweave to produce the rich orbital structures of multi-body dynamics. Understanding this environment underlies lunar exploration programs, crewed landings, and future deep-space logistics.

The site is organized around three main tracks:

| Module | Contents |
|---|---|
| [What is Cislunar Space](https://cislunarspace.cn/en/what-is-cislunarspace/) | Definition of the region, its environment, and its value |
| [Cislunar Orbits](https://cislunarspace.cn/en/cislunar-orbits/) | NRHO, DRO, libration-point orbits, and transfer corridors |
| [Research Frontiers & Engineering](https://cislunarspace.cn/en/research-frontiers/) | Research directions, institutions, and major missions |

It also covers orbital mechanics background ([`web/background/`](web/background/)), a glossary spanning dynamics, orbits, navigation, and more ([`web/glossary/`](web/glossary/)), and an AI chat entry backed by the whole knowledge base. See the [development guide](docs/internal/develop.en.md) for repository layout and local setup.

## Contributing

Issues and pull requests are welcome. Before you start, read [`AGENTS.md`](AGENTS.md) (AI collaboration guidelines), [`CONTEXT.md`](CONTEXT.md) (domain vocabulary), and the [contributor notes](docs/internal/contributors.md).

When adding a Chinese glossary entry, keep the English mirror (`web/en/glossary/`) in mind; bilingual consistency is enforced automatically by `npm run check`.

## License

Released under the [Apache License 2.0](LICENSE).
