# IBM Power ISA — Instruction Forms and Primary Opcodes

## 1. Instruction basics

Power ISA instructions are generally **32 bits** wide.

> **Bit-numbering note:** Power ISA documentation traditionally numbers instruction bits from **0 at the most-significant bit (MSB)** to **31 at the least-significant bit (LSB)**. Thus, the primary opcode is bits **0–5** in IBM/Power ISA notation. In conventional MSB-to-LSB diagrams this corresponds to bits **31–26**.

```text
Power ISA bit numbering

  0                                                        31
  ┌──────┬─────┬─────┬─────────────────────────────────────┐
  │ OPCD │ ... │ ... │                ...                  │
  │ 6bit │     │     │                                     │
  └──────┴─────┴─────┴─────────────────────────────────────┘
   MSB                                                   LSB
```

---

## 2. Instruction forms

| Form | Meaning / idea | Typical purpose | Typical operands | Example |
|---|---|---|---|---|
| **D-form** | D = Displacement | Load/store and immediate operations | `RT, RA, D` | `lwz`, `addi` |
| **DS-form** | DS = Displacement + suffix field | 64-bit load/store with aligned displacement | `RT, RA, DS` | `ld`, `std` |
| **X-form** | X = Indexed/register form | Register-register operations and indexed memory access | `RT, RA, RB` | `add` family uses XO; `and`, `lwzx` |
| **XO-form** | X-form with overflow-control field | Integer arithmetic with optional overflow recording | `RT, RA, RB, OE` | `addo` |
| **I-form** | I = Immediate branch form | Unconditional branching | `LI, AA, LK` | `b`, `bl` |
| **B-form** | B = Branch form | Conditional branching | `BO, BI, BD, AA, LK` | `bc`, `beq` |
| **XL-form** | Extended branch/control form | Register-based branches and condition-register operations | Branch/control fields | `bclr`, `bcctr` |
| **M-form** | M = Mask | Rotate and mask operations | Rotate + mask fields | `rlwinm` |
| **MD-form** | MD = Mask + Doubleword | 64-bit rotate and mask operations | 64-bit rotate/mask fields | `rldicl` |
| **MDS-form** | MD + S-style/register shift field | 64-bit rotate, mask and register-specified shift operations | Rotate/mask fields + `RB` | `rldimi` |
| **SC-form** | System-call form | System calls / supervisor entry | System-call fields | `sc` |
| **SI-form** | Signed Immediate | Signed-immediate operations | `RA, SI` | `addis` |

> **Terminology note:** These letter expansions are useful mnemonic descriptions, not necessarily formal IBM definitions of every letter. The form names themselves are the authoritative ISA terminology.

---

## 3. Primary opcode

The **primary opcode (OPCD)** is a **6-bit field**.

```text
OPCD = 6 bits
Possible values = 0–63
```

In Power ISA notation:

```text
Instruction bits
0          5 6                                  31
┌──────────┬─────────────────────────────────────┐
│   OPCD   │          Remaining fields           │
│  6 bits  │                                     │
└──────────┴─────────────────────────────────────┘
```

The primary opcode selects the major instruction encoding space. Some primary opcodes directly identify an instruction family; others select an **extended opcode** space.

---

## 4. Primary opcode map

The following is a **decoder-oriented major opcode map**. It is intentionally a high-level map rather than a complete instruction-by-instruction encoding table. A number of opcode spaces contain sub-opcodes or are shared by multiple instruction forms.

| OPCD (dec) | OPCD (hex) | Major form / space | Typical use |
|---:|---:|---|---|
| 0 | `0x00` | Reserved / implementation-defined space | Reserved |
| 1 | `0x01` | Reserved | Reserved |
| 2 | `0x02` | Reserved | Reserved |
| 3 | `0x03` | Reserved | Reserved |
| 4 | `0x04` | Reserved / extended space | Reserved / extension space |
| 5 | `0x05` | Reserved / extended space | Reserved / extension space |
| 6 | `0x06` | Reserved / extended space | Reserved / extension space |
| 7 | `0x07` | Reserved / extended space | Reserved / extension space |
| 8 | `0x08` | D | Immediate / fixed-point operation space |
| 9 | `0x09` | D | Immediate / fixed-point operation space |
| 10 | `0x0A` | D | Compare-immediate space |
| 11 | `0x0B` | D | Compare-immediate space |
| 12 | `0x0C` | D | Add-immediate-with-carry space |
| 13 | `0x0D` | D | Add-immediate-with-carry-and-record space |
| 14 | `0x0E` | D | Add immediate (`addi`) |
| 15 | `0x0F` | D | Add immediate shifted (`addis`) |
| 16 | `0x10` | B | Conditional branch (`bc`) |
| 17 | `0x11` | SC / system-control space | System call / supervisor-control space |
| 18 | `0x12` | I | Unconditional branch (`b`) |
| 19 | `0x13` | XL / X / extended control | Branch-register and condition-register operations |
| 20 | `0x14` | M | Rotate/mask space |
| 21 | `0x15` | M | Rotate/mask space |
| 22 | `0x16` | M | Rotate/mask space |
| 23 | `0x17` | M | Rotate/mask space |
| 24 | `0x18` | D | OR immediate |
| 25 | `0x19` | D | OR immediate shifted |
| 26 | `0x1A` | D | XOR immediate |
| 27 | `0x1B` | D | XOR immediate shifted |
| 28 | `0x1C` | D | AND immediate |
| 29 | `0x1D` | D | AND immediate shifted |
| 30 | `0x1E` | Extended / implementation-dependent space | Extension space |
| 31 | `0x1F` | X / XO / XFX / XFL / ... | Large register-operation and extended-opcode space |
| 32 | `0x20` | D | Load word (`lwz`) |
| 33 | `0x21` | D | Load word with update (`lwzu`) |
| 34 | `0x22` | D | Load byte and zero (`lbz`) |
| 35 | `0x23` | D | Load byte and zero with update (`lbzu`) |
| 36 | `0x24` | D | Store byte (`stb`) |
| 37 | `0x25` | D | Store byte with update (`stbu`) |
| 38 | `0x26` | D | Store halfword (`sth`) |
| 39 | `0x27` | D | Store halfword with update (`sthu`) |
| 40 | `0x28` | D | Store word (`stw`) |
| 41 | `0x29` | D | Store word with update (`stwu`) |
| 42 | `0x2A` | D | Load halfword and sign-extend (`lha`) |
| 43 | `0x2B` | D | Load halfword and sign-extend with update (`lhau`) |
| 44 | `0x2C` | D | Load halfword and zero (`lhz`) |
| 45 | `0x2D` | D | Load halfword and zero with update (`lhzu`) |
| 46 | `0x2E` | D | Load/store extended memory-operation space |
| 47 | `0x2F` | D | Load/store extended memory-operation space |
| 48 | `0x30` | D | Floating-point load/store space |
| 49 | `0x31` | D | Floating-point load/store space |
| 50 | `0x32` | D | Floating-point load/store space |
| 51 | `0x33` | D | Floating-point load/store space |
| 52 | `0x34` | D | Floating-point / memory-operation space |
| 53 | `0x35` | D | Floating-point / memory-operation space |
| 54 | `0x36` | D | Floating-point / memory-operation space |
| 55 | `0x37` | D | Floating-point / memory-operation space |
| 56 | `0x38` | Extended / vector-related space | Extended operation space |
| 57 | `0x39` | Extended / vector-related space | Extended operation space |
| 58 | `0x3A` | DS | 64-bit load/store space |
| 59 | `0x3B` | A | Floating-point arithmetic space |
| 60 | `0x3C` | Extended / VSX-related space | Extended operation space |
| 61 | `0x3D` | Extended / VSX-related space | Extended operation space |
| 62 | `0x3E` | DS | 64-bit load/store / extended space |
| 63 | `0x3F` | Extended / floating-point space | Extended operation space |

> **Important:** This table is a high-level decoder map. It should not be used as a substitute for the Power ISA instruction-encoding tables when implementing a complete decoder. Several opcode values contain multiple instruction classes and extended-opcode fields.

---

## 5. Extended opcode concept

A major feature of Power ISA is that the 6-bit primary opcode does **not** uniquely identify every instruction.

For example:

```text
                    Instruction
                         │
                         ▼
                  OPCD [0:5]
                         │
                  ┌──────┴──────┐
                  │             │
               OPCD=14       OPCD=31
                  │             │
                  ▼             ▼
                D-form       Extended space
                                │
                                ▼
                           XO [21:30]
                                │
                       ┌────────┼────────┐
                       ▼        ▼        ▼
                     AND      ADD      SUBF
```

### Example: `addi`

```text
addi r3, r8, 256

OPCD = 14

┌────────┬─────┬─────┬────────────────┐
│ OPCD   │ RT  │ RA  │       SI       │
│  6     │  5  │  5  │      16        │
└────────┴─────┴─────┴────────────────┘
```

`addi` therefore decodes directly from its D-form primary opcode:

```text
OPCD = 14
Form = D
```

### Example: `add`

```text
add r3, r6, r5

OPCD = 31
XO   = 266
```

Conceptually:

```text
┌────────┬─────┬─────┬─────┬────────────┬─────┐
│ OPCD   │ RT  │ RA  │ RB  │     XO     │ Rc  │
│   6    │  5  │  5  │  5  │    10      │  1  │
└────────┴─────┴─────┴─────┴────────────┴─────┘
     │                          │
     │                          └── 266 → ADD
     └───────────────────────────── 31 → X/XO space
```

For `add`, the extended opcode is what distinguishes it from other instructions sharing `OPCD=31`.

---

## 6. Useful examples of OPCD + extended opcode

| Instruction | Form | Primary OPCD | Extended opcode | Purpose |
|---|---|---:|---:|---|
| `addi` | D | 14 | — | Add immediate |
| `addis` | D | 15 | — | Add immediate shifted |
| `bc` | B | 16 | — | Conditional branch |
| `b` | I | 18 | — | Unconditional branch |
| `bclr` | XL | 19 | 16 | Branch to link register |
| `bcctr` | XL | 19 | 528 | Branch to count register |
| `and` | X | 31 | 28 | Logical AND |
| `add` | XO | 31 | 266 | Integer addition |
| `subf` | XO | 31 | 40 | Subtract from |
| `mfspr` | XFX | 31 | 339 | Move from special-purpose register |

---

## 7. Decoder hierarchy for a Power ISA implementation

A practical fixed-point decoder can be structured as:

```text
                 32-bit instruction
                         │
                         ▼
                ┌─────────────────┐
                │ Primary OPCD     │
                │     [0:5]        │
                └────────┬────────┘
                         │
          ┌──────────────┼─────────────────┐
          │              │                 │
          ▼              ▼                 ▼
       D-form         Branches       Extended space
          │              │                 │
          │              │        ┌────────┴─────────┐
          │              │        │                  │
          │              │        ▼                  ▼
          │              │       XO               XFX/XFL
          │              │        │                  │
          ▼              ▼        ▼                  ▼
       Immediate       B/I/XL   Arithmetic       SPR/CR/etc.
       Load/Store      decode    / logic          decode
```

For a CPU implementation, this means the decoder should generally be thought of as:

```text
instruction
    │
    ├── primary opcode
    │
    ├── instruction form
    │
    ├── extended opcode / sub-opcode
    │
    └── operand/control-field decode
```

---

## 8. Power ISA decoder fields worth tracking

| Field | Typical size | Purpose |
|---|---:|---|
| `OPCD` | 6 bits | Primary opcode |
| `RT` / `RS` | 5 bits | Target/source GPR |
| `RA` | 5 bits | Base/source GPR |
| `RB` | 5 bits | Index/source GPR |
| `D` / `SI` | 16 bits | Immediate/displacement |
| `DS` | 14 bits | Displacement in DS-form |
| `LI` | 24 bits | Branch immediate |
| `BD` | 14 bits | Conditional-branch displacement |
| `BO` | 5 bits | Branch options |
| `BI` | 5 bits | Branch condition bit |
| `XO` | 9–10 bits depending on form | Extended operation selector |
| `OE` | 1 bit | Overflow-enable control |
| `Rc` | 1 bit | Record result in condition register |

---

## 9. Key takeaway

The most important concept for a Power ISA decoder is:

> **OPCD identifies the major encoding space; the instruction form determines how the remaining fields are interpreted; extended opcode fields then select the specific operation where required.**

For example:

```text
addi
  OPCD 14
  └── D-form
      └── immediate arithmetic

add
  OPCD 31
  └── XO-form
      └── XO 266
          └── ADD
```

---

## Sources

- IBM PowerPC / POWER Assembler Language Reference — instruction tables and opcode/form information.
- IBM Power Systems documentation and Redbooks — instruction encoding examples.
- OpenPOWER Foundation — Power ISA specifications.

