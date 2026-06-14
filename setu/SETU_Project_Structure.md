# SETU — Repository Structure & Documentation Reference

*Premium IoT Smart Switch Board | India Market Entry*
*Last Updated: May 2026 | Version: 1.0*

---

## 1. Quick Overview

This document is the single source of truth for how the SETU repository is organized, what goes where, and what is still missing. Read this before adding any new file to the repo.

**Golden Rule:** There are two types of files in this project.

| Type | Definition | Examples |
|------|-----------|---------|
| **Design Files** | Files you create and edit. Source of truth. | KiCad `.kicad_sch`, C source `.c`, STEP enclosure files |
| **Production Files** | Files exported FROM design files for manufacturing. Never edit directly. | Gerbers, BOM CSV, STL for print, firmware `.bin` |

---

## 2. Full Directory Tree

```
setu1.0/
│
├── CLAUDE.md                        ← AI assistant context (read first)
├── README.md                        ← Project overview (public-facing)
├── .gitignore                       ← Ignore EDA caches, build outputs
│
├── .claude/                         ← Claude Code AI configuration
│   ├── settings.json                ← Tool permissions, model settings
│   └── agents/
│       ├── hardware-reviewer.md     ← Sub-agent for PCB/schematic review
│       └── firmware-reviewer.md     ← Sub-agent for firmware code review
│
├── hardware/                        ← PCB DESIGN FILES (source of truth)
│   ├── design/
│   │   ├── schematics/              ← KiCad .kicad_sch or Altium .SchDoc
│   │   ├── pcb-layout/              ← KiCad .kicad_pcb or Altium .PcbDoc
│   │   ├── symbols/                 ← Custom schematic symbols (.kicad_sym)
│   │   ├── footprints/              ← Custom PCB footprints (.kicad_mod)
│   │   └── 3d-models/               ← Component 3D models (.step, .wrl)
│   ├── bom/
│   │   ├── SETU_BOM_v1.0.xlsx       ← Master BOM (editable)
│   │   └── SETU_BOM_v1.0.csv        ← Exported for CM (production file)
│   └── datasheets/                  ← PDFs for all ICs and key components
│
├── firmware/                        ← EMBEDDED SOFTWARE (source of truth)
│   ├── src/
│   │   ├── main/                    ← Application entry point, task init
│   │   ├── drivers/                 ← Low-level peripheral drivers
│   │   ├── hal/                     ← Hardware abstraction layer
│   │   ├── middleware/              ← WiFi stack, OTA, MQTT, voice engine
│   │   └── rtos/                    ← FreeRTOS task configs, priorities
│   ├── include/                     ← Shared header files (.h)
│   ├── tests/
│   │   ├── unit/                    ← Unity/CMock unit tests
│   │   └── integration/             ← Hardware-in-loop tests
│   ├── tools/                       ← Flash scripts, debug tools
│   ├── docs/
│   │   ├── api/                     ← API reference (auto-generated or manual)
│   │   └── test-plans/              ← Formal test protocols
│   ├── CMakeLists.txt               ← ESP-IDF build file
│   └── sdkconfig                    ← ESP-IDF menuconfig (version controlled)
│
├── manufacturing/                   ← PRODUCTION OUTPUT FILES
│   ├── gerbers/
│   │   └── v1.0/                    ← Zip of Gerber + drill files for this version
│   ├── assembly/
│   │   ├── pick-and-place/          ← SMT P&P centroid file (.csv)
│   │   ├── assembly-drawing/        ← Assembly drawing PDF (component placement)
│   │   └── solder-paste/            ← Paste stencil Gerber (F.Paste / B.Paste)
│   ├── test-fixtures/               ← ICT fixture design, test protocol docs
│   └── quality/                     ← QC checklists, incoming inspection, ITP
│
├── industrial-design/               ← ENCLOSURE & PACKAGING
│   ├── cad/
│   │   ├── enclosure/               ← Housing body (.STEP, .F3D, .IGES)
│   │   └── bezel/                   ← Touch-panel face plate (.STEP, .STL)
│   ├── renders/                     ← High-res product renders (.PNG, .JPG)
│   └── packaging/                   ← Box dieline, inserts, label artwork
│
├── certification/                   ← REGULATORY COMPLIANCE DOCUMENTS
│   ├── BIS/                         ← IS 1293:2002 (electrical safety, India)
│   │   ├── pre-test-reports/        ← In-house + TÜV pre-compliance test results
│   │   ├── design-docs/             ← Safety manual, isolation drawings for submission
│   │   └── final-certificate/       ← Approved BIS license (DO NOT MODIFY)
│   ├── WPC/                         ← Wireless Planning Commission (WiFi, India)
│   ├── CE/                          ← CE marking (Europe — Phase 4+)
│   └── FCC/                         ← FCC Part 15 (USA — Phase 4+)
│
├── docs/                            ← ALL PROJECT DOCUMENTATION
│   ├── SETU_24M_Execution_Roadmap.md   ← Master roadmap (phases 1–4)
│   ├── SETU_Project_Structure.md       ← This file
│   ├── hardware-specs/              ← HW design requirements, review notes
│   ├── firmware-docs/               ← Architecture doc, OTA flow, WiFi behavior
│   ├── production-specs/            ← Assembly SOP, test protocols, QC procedures
│   └── business/                    ← GTM strategy, pitch deck, financial model
│
└── tools/
    ├── scripts/                     ← Automation: flash, test, BOM generation
    └── config/                      ← Tool configs (KiCad DRC rules, clang-format)
```

---

## 3. Hardware Section Detail

### 3.1 Schematics (`hardware/design/schematics/`)

**File naming:** `SETU_SCH_v{major}.{minor}.kicad_sch`

| What to store | What NOT to store |
|--------------|------------------|
| KiCad / Altium schematic source files | Exported PDFs (put in `docs/hardware-specs/`) |
| Custom symbol libraries | Generic manufacturer symbols (use KiCad standard lib) |
| Revision history notes (in schematic title block) | Gerber files (those go in `manufacturing/gerbers/`) |

**Current state:** Empty — first schematic due by end of Phase 1 (M6).

### 3.2 PCB Layout (`hardware/design/pcb-layout/`)

**File naming:** `SETU_PCB_v{major}.{minor}.kicad_pcb`

Key design constraints to embed in the file:
- Board outline: 140mm × 100mm
- Stackup: 4-layer (Signal / GND / PWR / Signal)
- Minimum trace width: 0.15mm (signal), 0.5mm (power), 2mm (HV)
- HV clearance: 4mm creepage / 2.5mm clearance between HV and LV zones
- WiFi antenna keepout: 15mm copper-free zone around ESP32-S3 antenna

### 3.3 BOM (`hardware/bom/`)

Maintain two formats:
- **SETU_BOM_v{x}.xlsx** — Master BOM with pricing, supplier info, alternates (for internal use)
- **SETU_BOM_v{x}.csv** — Stripped-down version sent to Contract Manufacturer

BOM columns (minimum): Ref Des | MPN | Manufacturer | Description | Value | Package | Qty | Supplier | Unit Cost | Approved Alternate

---

## 4. Firmware Section Detail

### 4.1 Source Code Structure

```
firmware/src/
├── main/
│   ├── app_main.c          ← Entry point, task spawning
│   └── app_config.h        ← Global compile-time config
├── drivers/
│   ├── touch_drv.c/.h      ← CAP1296 / STM32 TSC driver
│   ├── relay_drv.c/.h      ← Relay/triac switching driver
│   └── led_drv.c/.h        ← Status LED driver
├── hal/
│   ├── gpio_hal.c/.h
│   ├── uart_hal.c/.h       ← UART bridge to touch MCU
│   └── nvs_hal.c/.h        ← Flash NVS abstraction
├── middleware/
│   ├── wifi_mgr.c/.h       ← WiFi connect, reconnect, AP fallback
│   ├── ota_mgr.c/.h        ← OTA update with rollback
│   ├── theme_engine.c/.h   ← Theme state machine (Party, Sleep, etc.)
│   └── voice_engine.c/.h   ← Wake-word detection (OpenWakeWord/TFLite)
└── rtos/
    ├── task_config.h        ← Task priorities, stack sizes
    └── event_groups.h       ← FreeRTOS event group definitions
```

### 4.2 Firmware Version Policy

| Version | Meaning |
|---------|---------|
| v1.0.0 | Certification-ready build (frozen for BIS/WPC testing) |
| v1.1.x | Bug fixes based on alpha user feedback |
| v2.0.0 | Phase 4 features (multi-panel, cloud app, Alexa) |

### 4.3 Test Plan Location

All test plans live in `firmware/docs/test-plans/`. Required documents:

- `TP-001_Touch_Calibration.md` — touch sensitivity + false trigger rate test
- `TP-002_WiFi_Stability.md` — reconnection behavior under poor signal
- `TP-003_OTA_Update.md` — OTA success + rollback failure test
- `TP-004_Power_Consumption.md` — quiescent + peak power measurement

---

## 5. Manufacturing Section Detail

### 5.1 Gerber Files (`manufacturing/gerbers/`)

**Always version Gerbers.** Never overwrite a previous version.

```
manufacturing/gerbers/
└── v1.0/
    ├── SETU_F_Cu.gbr          ← Front copper
    ├── SETU_B_Cu.gbr          ← Back copper
    ├── SETU_In1_Cu.gbr        ← Inner layer 1 (GND)
    ├── SETU_In2_Cu.gbr        ← Inner layer 2 (PWR)
    ├── SETU_F_Mask.gbr        ← Front solder mask
    ├── SETU_B_Mask.gbr        ← Back solder mask
    ├── SETU_F_Silkscreen.gbr  ← Front silkscreen
    ├── SETU_Edge_Cuts.gbr     ← Board outline
    ├── SETU_NPTH.drl          ← Non-plated through-holes
    ├── SETU_PTH.drl            ← Plated through-holes
    └── SETU_GBR_v1.0.zip      ← Full package sent to PCB fab
```

### 5.2 Assembly Files

| File | Purpose | Owner |
|------|---------|-------|
| `assembly-drawing/SETU_ASSY_v1.0.pdf` | Shows component placement, polarity markings | Hardware Engineer |
| `pick-and-place/SETU_CPL_v1.0.csv` | SMT machine centroid file (X, Y, rotation, layer) | Hardware Engineer |
| `solder-paste/SETU_F_Paste.gbr` | Stencil file for paste printer | Hardware Engineer |

### 5.3 Quality Documents (`manufacturing/quality/`)

Required before Phase 3 production run:

| Document | Description |
|---------|-------------|
| `QC-001_Incoming_Inspection.md` | PCB bare board check (dimensions, layer count, surface finish) |
| `QC-002_SMT_Assembly.md` | Post-reflow inspection criteria (solder joints, tombstoning limits) |
| `QC-003_Functional_Test.md` | Go/no-go: touch, WiFi connect, relay switch, power consumption |
| `QC-004_Final_Inspection.md` | Cosmetic check, label placement, packaging check |
| `QC-005_RMA_Procedure.md` | Return merchandise authorization + root cause logging |

---

## 6. Industrial Design Section Detail

### 6.1 Enclosure Design (`industrial-design/cad/`)

**File formats:**
- Primary design: `.F3D` (Fusion 360) or `.SLDPRT` (SolidWorks)
- Neutral exchange: `.STEP` (share with CM, PCB layout engineer)
- 3D print prototype: `.STL` (print for physical mockup)

**Enclosure constraints:**
- Must fit Indian 3-gang modular electrical box (Havells/Schneider compatible)
- Wall thickness: minimum 1.5mm (ABS/PC blend)
- Touch bezel material: tempered glass or hard-coated PMMA
- IP rating target: IP20 (indoor, finger-proof)
- Flame rating: UL94-V0 (required for BIS compliance)

### 6.2 Packaging (`industrial-design/packaging/`)

Required files before Phase 3 launch:

| File | Description |
|------|-------------|
| `SETU_Box_Dieline_v1.0.ai` | Outer box dieline (Adobe Illustrator source) |
| `SETU_Box_Artwork_v1.0.pdf` | Print-ready artwork for box printer |
| `SETU_Insert_Foam_v1.0.step` | Foam insert 3D file |
| `SETU_QSG_v1.0.pdf` | Quick Start Guide (2-page, inside box) |
| `SETU_Label_Serial_v1.0.ai` | Serial number / regulatory label artwork |

---

## 7. Certification Section Detail

### 7.1 BIS Certification (Critical Path)

**Standard:** IS 1293:2002 (plugs and socket-outlets for domestic use)
**Testing body:** TÜV India or BSA Lab (Bangalore/Pune)
**Timeline:** 4–6 months from first submission
**Cost:** ₹1.5–2.5L (lab fees + design corrections)

Documents required for submission:

```
certification/BIS/design-docs/
├── Safety_Manual_v1.0.pdf          ← Explains safety design decisions
├── Schematic_HV_Isolation.pdf      ← Annotated schematic showing isolation barriers
├── PCB_Clearance_Report.pdf        ← Creepage/clearance measurement report
├── Component_Safety_Certs.pdf      ← UL/CE certs for critical components
└── Risk_Assessment_FMEA.xlsx       ← Failure mode analysis
```

### 7.2 WPC Approval (WiFi)

**Authority:** Wireless Planning Commission, Ministry of Communications
**Scope:** 2.4GHz WiFi (ESP32-S3 module)
**Shortcut:** If using a WPC-pre-certified module (Espressif ESP32-S3-WROOM), the module cert covers the radio. Only need to file for the final product.
**Timeline:** 4–6 weeks | **Cost:** ₹50–80K

### 7.3 Future Certifications

| Cert | Market | Trigger | Est. Cost |
|------|--------|---------|----------|
| CE (EMC + LVD) | Europe | If exporting to EU (Phase 4+) | ₹3–5L |
| FCC Part 15 | USA | If exporting to US (Phase 4+) | ₹2–4L |
| RoHS Compliance | Global | Required for CE; good practice now | ₹50–80K |
| MEITY Registration | India | If cloud/data features added | ₹20–30K |

---

## 8. What Is Missing (Gap Analysis)

Items not yet present in the repo that are required before each phase gate:

### Missing Before Phase 2 (Month 7)

| Item | Where It Goes | Priority |
|------|-------------|---------|
| Schematic v1.0 | `hardware/design/schematics/` | **CRITICAL** |
| PCB Layout v1.0 | `hardware/design/pcb-layout/` | **CRITICAL** |
| BOM v1.0 | `hardware/bom/` | **CRITICAL** |
| Touch IC + ESP32 datasheets | `hardware/datasheets/` | High |
| Firmware architecture doc | `docs/firmware-docs/` | High |
| EMI pre-test report | `certification/BIS/pre-test-reports/` | High |
| Product Requirements Document | `docs/hardware-specs/` | Medium |

### Missing Before Phase 3 (Month 13)

| Item | Where It Goes | Priority |
|------|-------------|---------|
| Gerber v1.0 package | `manufacturing/gerbers/v1.0/` | **CRITICAL** |
| Assembly drawing | `manufacturing/assembly/assembly-drawing/` | **CRITICAL** |
| Enclosure STEP file | `industrial-design/cad/enclosure/` | **CRITICAL** |
| BIS safety documentation | `certification/BIS/design-docs/` | **CRITICAL** |
| WPC submission package | `certification/WPC/` | **CRITICAL** |
| QC checklist set (QC-001 to 005) | `manufacturing/quality/` | High |
| Test plans TP-001 to TP-004 | `firmware/docs/test-plans/` | High |
| Packaging dieline + artwork | `industrial-design/packaging/` | High |
| Quick Start Guide | `industrial-design/packaging/` | High |
| Firmware v1.0.0 release | `firmware/` | **CRITICAL** |

### Missing Before Phase 4 (Month 19)

| Item | Where It Goes | Priority |
|------|-------------|---------|
| RMA procedure | `manufacturing/quality/` | High |
| CE pre-compliance report | `certification/CE/` | Medium |
| Firmware v2.0 test plan | `firmware/docs/test-plans/` | High |
| Pitch deck / financial model | `docs/business/` | Medium |

---

## 9. Claude Code (AI Assistant) Setup

### File: `CLAUDE.md` (root)
This is the primary context file Claude reads at the start of every session. It describes the product, repo layout, naming conventions, and technical constraints.

### File: `.claude/settings.json`
Controls which tools Claude is allowed to run automatically without prompting. Edit this to add permissions as your dev environment stabilizes.

### Directory: `.claude/agents/`
Specialized sub-agent configurations. These are instructions Claude uses when you ask it to do a focused review task:
- `hardware-reviewer.md` — PCB/schematic design rule checks
- `firmware-reviewer.md` — Embedded code quality + SETU-specific checks

### How to use Claude effectively on this project
- **Ask for schematic review:** "Review the schematic in `hardware/design/schematics/` against the hardware-reviewer agent rules."
- **Ask for firmware review:** "Review the OTA update code in `firmware/src/middleware/ota_mgr.c`."
- **Ask for BOM generation:** "Generate a production BOM CSV from the schematic netlist in `hardware/design/schematics/`."
- **Ask for gap check:** "Check which items from the Phase 2 missing list in the project structure doc are now present in the repo."

---

## 10. Naming Conventions Reference

| Asset | Convention | Example |
|-------|-----------|---------|
| Schematic | `SETU_SCH_v{M}.{m}.kicad_sch` | `SETU_SCH_v1.0.kicad_sch` |
| PCB Layout | `SETU_PCB_v{M}.{m}.kicad_pcb` | `SETU_PCB_v1.2.kicad_pcb` |
| Gerber package | `SETU_GBR_v{M}.{m}.zip` | `SETU_GBR_v1.0.zip` |
| BOM (master) | `SETU_BOM_v{M}.{m}.xlsx` | `SETU_BOM_v1.0.xlsx` |
| BOM (for CM) | `SETU_BOM_v{M}.{m}.csv` | `SETU_BOM_v1.0.csv` |
| Firmware release | `v{M}.{m}.{p}` git tag | `v1.0.0` |
| Firmware binary | `SETU_FW_v{M}.{m}.{p}.bin` | `SETU_FW_v1.0.0.bin` |
| Enclosure CAD | `SETU_ENC_{part}_v{M}.{m}.step` | `SETU_ENC_Housing_v1.0.step` |
| Test plan | `TP-{NNN}_{Name}.md` | `TP-001_Touch_Calibration.md` |
| QC document | `QC-{NNN}_{Name}.md` | `QC-003_Functional_Test.md` |
| Certification doc | `{BODY}_{Description}_v{M}.{m}.pdf` | `BIS_Safety_Manual_v1.0.pdf` |

---

## 11. Git Workflow for Hardware Projects

Hardware files have different versioning needs than software. Follow these rules:

1. **Never commit Gerbers without a version bump** — Gerbers are production files; overwriting silently is dangerous.
2. **BOM and schematic must be committed together** — They must always be in sync.
3. **Certification docs are immutable once approved** — Never edit files in `certification/BIS/final-certificate/` or `certification/WPC/`.
4. **Design files are the source** — If a conflict exists between a Gerber and the KiCad source, the KiCad source wins.
5. **Tag firmware releases** — Every firmware build sent for certification must be a git tag (`v1.0.0`).

```
# Example workflow for a hardware revision
git checkout -b hw/pcb-v1.1-thermal-fix
# ... make PCB changes in KiCad ...
# ... re-export Gerbers to manufacturing/gerbers/v1.1/ ...
# ... update BOM if component changed ...
git add hardware/ manufacturing/gerbers/v1.1/
git commit -m "PCB v1.1: add thermal vias under U3 (ESP32-S3)"
git checkout main && git merge hw/pcb-v1.1-thermal-fix
```

---

## 12. Phase-Gate Checklist Summary

### Phase 1 Gate (End of Month 6)
- [ ] Schematic v1.0 committed
- [ ] BOM v1.0 committed
- [ ] Firmware prototype on dev boards (touch + WiFi)
- [ ] EMI pre-test in electrical box (<5% false trigger)
- [ ] Datasheets for all critical ICs saved
- [ ] Company incorporated, GST registered

### Phase 2 Gate (End of Month 12)
- [ ] PCB layout v1.0 committed
- [ ] Gerbers v1.0 generated and committed
- [ ] BIS pre-compliance testing initiated
- [ ] WPC submission filed
- [ ] Manufacturing partner selected (DFM review done)
- [ ] Firmware v1.0.0 frozen for certification
- [ ] 20-unit prototype batch tested

### Phase 3 Gate (End of Month 18)
- [ ] BIS + WPC approvals received (certificates in `certification/`)
- [ ] Enclosure STEP files committed
- [ ] QC checklists complete
- [ ] 500-unit production batch completed (<1% defect)
- [ ] Packaging finalized and committed
- [ ] Firmware v1.1 stable

### Phase 4 Gate (End of Month 24)
- [ ] Firmware v2.0 released and tagged
- [ ] Manufacturing at 1,000+ units/month
- [ ] CE pre-compliance initiated (if international expansion planned)
- [ ] All business docs in `docs/business/`

---

*For the 24-month execution roadmap with phase details, financials, and team plan, see [SETU_24M_Execution_Roadmap.md](SETU_24M_Execution_Roadmap.md).*
