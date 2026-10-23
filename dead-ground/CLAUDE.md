# Dead Ground — CYOA Story

## Shared notes

At the start of every session, read `Z:\INDEX.md`.
Check for any notes relevant to this project and act on them.
When you discover something another project Claude should know, create a note file
(`YYYY-MM-DD_projectname_topic.md`) in that same folder and add one line to the index.

A choose-your-own-path mystery set in the Lake District. Single HTML file with all pages, prose, SVG illustrations, and navigation logic.

## Project files

| File | Purpose |
|------|---------|
| `index.html` | The complete game — all pages, styles, SVGs, and JS |
| `cover.html` | Cover/title page used by the portal |
| `audit.js` | Structural audit script — run after every editing session |

## After every editing session

```
node audit.js
```

Reports orphaned pages (defined but never linked to) and confirms the evidence gate is active. Always run this and report the result before ending a session. Do not skip it for small edits.

## Story structure

- **60 pages** of prose organised as a hypertext graph
- Entry point: page 1
- Good ending: page 57 (gated — see below)
- Bad endings: pages 2, 6, 36, 48, 51, 56, 58, 59, 60

### Evidence gate (page 57)

The good ending requires the player to have visited at least 3 of these 5 key evidence pages:

| Page | Evidence |
|------|---------|
| 32 | Brennan's admission of payment |
| 39 | Car park footage of the Defender |
| 50 | Defender plate confirmed to Voss's company |
| 52 | USB drive secured by Marshall |
| 55 | Hartley's statement |

Implemented as a redirect in the `render()` function — players with fewer than 3 redirect to page 60 (Marshall turns them away).

### Intentional orphan

Page 15 is a duplicate of page 9 (DL logo sketch, same choices). Kept for reference. Listed in `intentionalOrphans` in audit.js.

## Authoring process

Simon provides the real-world briefing (people, place, atmosphere). Claude writes the prose into a pre-agreed page graph. **Map the structure before writing any prose** — define all page numbers, branch points, and gate conditions first, then fill in the prose.

Save character/world notes to the project folder before the session ends so they survive between sessions.

## Background

- Setting: Old Dungeon Ghyll, Great Langdale, Lake District
- Characters Ralph, Billy, and Marshall are based on real people
- Martin Voss is the villain (unclear if the name is based on a real person)
- Kate and Phil were briefed as characters but did not make it into the story — context lost when original session transcript was deleted
- A sequel is planned; re-brief Claude from scratch when ready
