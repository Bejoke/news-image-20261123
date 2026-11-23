# World news in one image — Monday, 23 November 2026

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Bejoke/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Bejoke/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One image that sums up the world's news of 23 November 2026, drawn as a
newspaper front page (`entry.png`, 1024×1024, drawn with PIL so every word
is crisp and spelled correctly).

## The stories

- **COP31 collapses** — climate talks in Antalya end with no deal: the
  longest COP ever, and the first major breakdown since Copenhagen 2009.
  The EU and island states rejected a pact that never mentioned fossil fuels.
- **Tankers ablaze** — at least 3 tankers struck Fri–Sat near the Strait
  of Hormuz; 2 more caught fire Sunday after hitting mines, Iran's navy says.
- **Russian warship sunk** — corvette Merkury capsizes at Benghazi after
  suspected Ukrainian sea drones hit it; 10 slightly hurt. A second
  Russian ship was hit in the Baltic.
- **AI sell-off spreads** — Nasdaq −10% in a week, its worst since March
  2020; Taiwan −17%, worst since 1990. Kospi −3.7% Monday as Asian
  regulators step in to steady markets.
- **Flat hit near Kyiv** — a Russian drone destroys a five-storey block
  in Dymer; at least 3 killed, about 10 feared trapped.
- Also: Poland confirms all 3 objects that fell on Friday were Russian
  Kh-101 missiles — NATO meets in Brussels today; BepiColombo reaches
  Mercury orbit after 8 years; FIFA to confirm the UK as 2035 Women's
  World Cup host.

All facts as reported on 23 November 2026 (CNN, WSJ, Le Monde, Reuters,
AP, UKMTO, Nature / ESA, BBC).

## How it is built

`draw.py` (outside this repo) renders `entry.png` with PIL. `main.ts`
(Node 22, standard library only) copies `entry.png` to
`/output/entry.png` and checks the copy with a SHA-256 hash, so both
grader runs write identical bytes. The image was visually checked after
rendering: every headline and caption is legible, and every figure above
was verified against at least two independent reports.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## make.fun

Entry for the `news-image-20261123` bounty ($100 USDC). Payout wallet is
in `.makefun/owner.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=kxzsynh9&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
