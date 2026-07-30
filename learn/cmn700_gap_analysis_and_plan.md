# CMN-700 Course — Gap Analysis & Remediation Plan

**Subject:** ARM CMN-700 interview-preparation course (10 interactive lessons + overview + course map)
**Date:** 30 July 2026
**Status of course:** All 10 planned lessons built. No planned topic dropped.
**Verdict:** Structurally complete, but **8 substantive gaps** and **2 artifact defects** identified. Three gaps carry real interview risk.

---

## 1. Executive summary

The course delivers the full arc originally planned (transport → coherency → performance/scale → integration + capstone). Every topic listed in the course map was built.

However, "covered in the plan" is not the same as "covered to interview depth." A keyword-and-depth audit across all 12 HTML artifacts found several topics that are **name-dropped but never mechanically explained** — the failure mode where you can recognise a term but cannot walk a flow or defend a trade-off under questioning.

**Highest-risk gaps:**

1. **DVM** — 24 mentions, but zero flow coverage. Cannot currently answer "walk me through a TLB invalidate across 128 cores."
2. **Cache stashing** — 95 words, one paragraph, no diagram, no mechanism, no failure mode.
3. **CHI cache states** — effectively absent (5 mentions course-wide, 1 in the lesson that should own it).

**Also found:** CXL sub-protocols have **zero** coverage; security/Realm has 2 incidental mentions; CAL, MTE and SMMU are name-drops only. Two artifact defects (stale course-map badges, no index page).

---

## 2. Audit method

Three passes, so findings are evidence-based rather than impressionistic:

| Pass | What was checked |
|---|---|
| **Plan conformance** | Every topic bullet in the course map traced to a delivered lesson section. |
| **Keyword density** | Regex count per topic across all files, with `<style>`/`<script>` stripped, then located by file. |
| **Depth inspection** | Suspect sections extracted and word-counted; checked for presence of a diagram, a worked flow, and a stated trade-off. |

**Depth bar used.** A topic counts as interview-ready only if the course provides all three of:
- a **mechanism** (how it actually works, not just what it is),
- a **worked flow or diagram**, and
- a **trade-off or failure mode** (what breaks, what it costs).

A topic with only a definition is classed as a name-drop regardless of how many times it appears.

---

## 3. Coverage evidence

Mentions per topic, by file (style/script excluded):

| Topic | Mentions | Distribution | Depth verdict |
|---|---:|---|---|
| DVM | 24 | taxonomy (10), overview (9), integration (3), map (2) | **Name-drop** — no flow, absent from L3 where flows live |
| Cache stashing | 19 | L6 (12), map (4), overview (2), L5 (1) | **Thin** — 95 words, no diagram, no mechanism |
| CHI cache states | 5 | L6 (1), overview (2), map (2) | **Absent in practice** |
| Security / Realm | 2 | L10 (2, both incidental via `MPAM_S`/`_NS`) | **Absent** |
| CXL sub-protocols | 0 | — | **Absent entirely** |
| CAL | 17 | taxonomy (6), map (5), L1 (3), others (3) | **Name-drop** — never mechanically explained |
| MTE | 9 | L4 (5), map (3), overview (1) | **Shallow** — one-line treatment |
| SMMU | 5 | mostly incidental "translation" matches | **Absent** |

**Artifact defects:** course map shows 9 lessons still badged *planned* and 1 badged *next*; zero badged *done*. No single index page listing all ten lessons.

---

## 4. Gap register

Severity is **interview risk**, not academic completeness.

| # | Gap | Severity | Rationale |
|---|---|---|---|
| G1 | DVM operations & flow | **High** | Distinct, commonly asked, and currently unanswerable at flow level. Directly tied to RN-D/HN-D, which the course does teach — so the question is *likely*. |
| G2 | Cache stashing depth | **High** | Explicitly a CHI-E headline feature. Course names it as an optimisation but cannot support follow-ups. |
| G3 | CHI cache states & transitions | **High** | Foundational. Every coherency answer implicitly depends on it. Was listed in the L6 plan but delivered abstractly. |
| G4 | POWER ↔ CMN-700 translation | **Medium-High** | Not a knowledge gap — an *articulation* gap. Strongest differentiator available and currently uncaptured. |
| G5 | Security: secure/non-secure, Realm/RME | **Medium** | Rising in server-class interviews. Role-dependent. |
| G6 | CXL sub-protocols & device types | **Medium** | Zero coverage. Matters if the role touches memory pooling or accelerators. |
| G7 | CAL mechanism | **Low-Medium** | Cheap to fix; appears in port-density and placement discussions. |
| G8 | MTE, SMMU interaction | **Low** | Peripheral to the mesh itself. Worth a short appendix only. |
| D1 | Stale course-map badges | **Defect** | Actively misleading — says work is pending that is complete. |
| D2 | No index page | **Defect** | Navigation relies on prev/next chaining; no single entry point. |

---

## 5. Gap detail

### G1 — DVM operations (High)

**Present:** RN-D described as "an RN-I that also handles DVM." HN-D described as containing "the DVM node (DN)." Overview has a short §10 paragraph.

**Missing:** What a DVM operation *is* as a transaction; the TLBI / instruction-cache-invalidate / sync message classes; how the DN sequences and distributes them; why they are broadcast-natured rather than address-hashed; how completion is collected and what a sync barrier waits on; the scaling problem at high core counts.

**Why it matters:** DVM is the one coherency mechanism that is *not* address-based, so it doesn't fit the SAM/hashing model the rest of the course teaches. That contrast is exactly what makes it a good interview question.

**Interview risk:** "How does a TLB invalidate on one core reach 128 other MMUs, and what does the sync wait for?" — currently not answerable.

---

### G2 — Cache stashing (High)

**Present:** One 95-word paragraph in L6 §6. No diagram, no opcode, no target-selection mechanism, no failure path.

**Missing:** How a stash target is *named* (target ID / logical processor hint vs cache-level hint); which agent issues it and with what permission; that a stash is a **hint the target may decline**, and what happens when it does; where the line lands (core cache vs SLC region) and the consequences of each; the interaction with the snoop filter (a stash creates a sharer, so the SF must be updated); the real end-to-end NIC/DPDK receive flow; and the failure mode where mis-targeted stashing *pollutes* a cache and makes things worse.

**Why it matters:** Stashing is the clearest example in the course of a *push* rather than *pull* optimisation, and the only one whose failure mode is actively harmful. That makes it a natural probe for whether a candidate understands the feature or just its name.

**Interview risk:** "You enable stashing and throughput drops. Why?" — currently not answerable.

---

### G3 — CHI cache states & transitions (High)

**Present:** L6 §2 describes home-node state abstractly ("is the line present, clean or dirty"; "shared vs unique/owned"). No state enumeration.

**Missing:** The CHI state set (Invalid, SharedClean, UniqueClean, SharedDirty, UniqueDirty and the partial/empty variants); which states permit silent eviction; who is responsible for writeback in each state; how snoop responses map to state transitions; and the relationship between RN-F line state and what the snoop filter records — which are *not* the same thing and are a classic point of confusion.

**Why it matters:** Every DMT/DCT/atomics answer rests on this. Without it, answers stay descriptive and cannot go one level deeper when pushed.

**Note:** This may be partly covered by prior CHI study outside this course. Recommend a self-test before investing a full lesson — see Phase 1 acceptance criteria.

---

### G4 — POWER ↔ CMN-700 translation (Medium-High)

**Present:** Nothing in the artifacts. The mapping was worked out conversationally only.

**Missing:** A written, defensible mapping table: MCD.cg ≈ HN-F (compute-domain home/coherency), MCD.io ≈ HN-I/HN-P (I/O home), A-link ≈ CML/CCG (chip-to-chip coherent bridge), plus per-chip-MCD vs distributed-HN-F as an *architectural contrast* rather than an equivalence. Also needs the honest caveats — these are analogies, not equivalences, and the centralisation difference is the interesting part.

**Why it matters:** This is the single strongest differentiator available. Thirteen years of coherent-fabric experience is only valuable in the interview if it can be *translated on demand*. The risk of an unrehearsed mapping is over-claiming equivalence and getting corrected.

---

### G5 — Security: secure/non-secure and Realm (Medium)

**Present:** Two incidental mentions, both arising from the `HNS_MPAM_S` / `HNS_MPAM_NS` node naming in L10.

**Missing:** Secure vs non-secure address spaces and how the mesh keeps them separate; how home nodes and the SAM handle security attributes; Armv9 RME/CCA and the realm concept at fabric level; why MPAM has separate secure and non-secure partition spaces at all.

**Priority note:** Role-dependent. Escalate to High if the job description mentions confidential computing, RME/CCA, or TrustZone.

---

### G6 — CXL sub-protocols and device types (Medium)

**Present:** L8 covers the CXL-vs-CCIX *coherency model* contrast well (host-based vs near-memory).

**Missing:** Zero coverage of CXL.io / CXL.cache / CXL.mem as distinct sub-protocols; zero coverage of Type 1 / Type 2 / Type 3 device classes; nothing on which CMN-700 gateway path serves which; nothing on memory pooling or expansion topologies concretely.

**Priority note:** Role-dependent. Escalate to High if the role touches memory disaggregation, pooling, or CXL accelerators.

---

### G7 — CAL mechanism (Low-Medium)

**Present:** 17 mentions across files, uniformly of the form "the CAL lets multiple devices share one XP device port."

**Missing:** How sharing actually works (arbitration between the aggregated devices), what it costs (added latency, shared bandwidth into one port), and when *not* to use it — i.e. the trade-off that makes it a design decision rather than a free feature.

---

### G8 — MTE and SMMU (Low)

**MTE:** One line in L4 ("with MTE enabled the slice stores data and tags"). Missing: what tag checking costs in the cache, and the capacity implication.

**SMMU:** Effectively absent. It is separate IP, but address translation happens *before* the mesh sees a request, so its absence leaves a hole in any end-to-end system story.

---

## 6. Remediation plan

Phased by risk and effort. Each phase is independently shippable.

### Phase 0 — Artifact fixes (trivial)

| Item | Deliverable | Effort |
|---|---|---|
| D1 | Update course-map badges: all 10 → *built · ready* | Minutes |
| D2 | New `cmn700_index.html` — single entry point linking all 10 lessons, overview, course map, phase grouping, progress state | Small |

**Acceptance:** Course map contains zero "planned" badges. Index page reaches every artifact in one click.

---

### Phase 1 — High-risk content gaps

| Item | Deliverable | Format | Effort |
|---|---|---|---|
| G1 | **Lesson 11 — DVM Operations & Distributed TLB Maintenance** | Full lesson, same template | 1 lesson |
| G2 | **L6 §6 expansion** — cache stashing raised from paragraph to full section: mechanism, target selection, ASCII flow (NIC → stash → core), snoop-filter interaction, decline path, cache-pollution failure mode, added self-check + Q&A items | In-place edit to L6 | Half lesson |
| G3 | **Lesson 12 — CHI Cache States & Transitions** *(conditional)* | Full lesson, or a reference appendix if self-test passes | 1 lesson or appendix |

**G3 gating:** Before building, self-test — enumerate the CHI states from memory, state which permit silent eviction, and state who owes the writeback in each. Pass → build a compact reference appendix instead of a lesson. Fail → build the full lesson. This avoids duplicating prior CHI study.

**Acceptance per item:** each topic satisfies the three-part depth bar (mechanism + worked flow/diagram + trade-off/failure mode), and adds at least two interview Q&A entries and two self-check questions.

---

### Phase 2 — Differentiator

| Item | Deliverable | Effort |
|---|---|---|
| G4 | **Appendix A — POWER ↔ CMN-700 Translation Guide**: side-by-side mapping table (MCD.cg / MCD.io / A-link / snoop filter), architectural-contrast section (per-chip MCD vs distributed HN-F, and what that implies for scaling), rehearsed talking points, and explicit "analogy not equivalence" caveats | Half lesson |

**Acceptance:** Contains a mapping table, at least three rehearsed answers of the form *"In POWER we did X; the CMN-700 equivalent is Y; the difference that matters is Z,"* and a stated list of where the analogy breaks down.

---

### Phase 3 — Role-dependent (build only if the JD warrants)

| Item | Deliverable | Trigger | Effort |
|---|---|---|---|
| G5 | **Lesson 13 — Security: Secure/Non-Secure & Realm on the Mesh** | JD mentions confidential computing, RME/CCA, TrustZone | 1 lesson |
| G6 | **L8 extension — CXL sub-protocols & device types** | JD mentions CXL, memory pooling, disaggregation, accelerators | Half lesson |

**Recommendation:** Do not pre-build both. Read the job description first, then build at most one.

---

### Phase 4 — Completeness sweep (low priority)

| Item | Deliverable | Effort |
|---|---|---|
| G7 | CAL section in L2 — arbitration, latency/bandwidth cost, when not to use | Small |
| G8 | Short appendix — MTE cost/capacity implications; SMMU's position in the request path before the mesh | Small |

---

## 7. Deliberately out of scope

Stated explicitly so the boundary is a decision rather than an omission. These are **TRM lookup material**, not mental-model material, and attempting to memorise them is a poor use of preparation time:

- Register maps and field encodings
- Exhaustive PMU event lists
- CHI opcode tables
- Node-ID bit-width allocation per mesh size
- Integration, clock and reset signal lists
- Socrates tool usage detail beyond its role in the flow

**Rationale:** the course exists to make the TRM readable. Once the structure is held, these become reference lookups — and an interviewer asking for a register offset from memory is testing the wrong thing.

---

## 8. Recommended sequence

| Order | Action | Why first |
|---|---|---|
| 1 | Phase 0 (badges + index) | Minutes; removes actively misleading state |
| 2 | G2 — cache stashing expansion | Cheapest high-risk fix; edits an existing lesson |
| 3 | G1 — DVM lesson | Largest genuine knowledge gap |
| 4 | G3 self-test, then build if needed | Avoids duplicating prior CHI study |
| 5 | G4 — POWER translation appendix | Highest differentiator per unit effort |
| 6 | Read JD → pick **one** of G5 / G6 | Avoid speculative work |
| 7 | Phase 4 sweep | Only if time remains |

---

## 9. Post-remediation state

On completion of Phases 0–2, the course will comprise:

- 11–12 lessons (10 existing + DVM + conditional cache-states)
- 1 overview, 1 course map, 1 index
- 1–2 appendices (POWER translation; optional MTE/SMMU)
- Zero High-severity gaps
- Remaining open items explicitly classified as role-dependent or out-of-scope

**Definition of done for the course as a whole:** every topic that the course *names* is a topic the course can also *defend* — mechanism, flow, and trade-off — and every remaining omission is a recorded decision rather than an oversight.
