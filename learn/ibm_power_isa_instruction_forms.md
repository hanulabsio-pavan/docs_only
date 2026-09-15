# IBM Power ISA — Instruction Forms

| Form | Meaning / idea | Typical purpose | Typical operands | Example |
|---|---|---|---|---|
| **D-form** | D = Displacement | Load/store and immediate operations | `RT, RA, D` | `lwz`, `addi` |
| **DS-form** | DS = Displacement + suffix | 64-bit load/store with aligned displacement | `RT, RA, DS` | `ld`, `std` |
| **X-form** | X = Indexed/register form | Register-register operations and indexed memory access | `RT, RA, RB` | `add`, `and`, `lwzx` |
| **XO-form** | X + O = extended X-form | Arithmetic with overflow control | `RT, RA, RB, OE` | `addo` |
| **I-form** | I = Immediate branch | Unconditional branching | `LI, AA, LK` | `b`, `bl` |
| **B-form** | B = Branch | Conditional branching | `BO, BI, BD, AA, LK` | `bc`, `beq` |
| **XL-form** | XL = Extended branch form | Register-based branching / condition handling | Branch-control fields | `bclr`, `bcctr` |
| **M-form** | M = Mask | Rotate and mask operations | Rotate + mask fields | `rlwinm` |
| **MD-form** | MD = Mask + Doubleword | 64-bit rotate and mask operations | 64-bit rotate/mask fields | `rldicl` |
| **MDS-form** | MDS = Mask + Doubleword + S | 64-bit rotate, mask and register-specified shift | Rotate/mask fields + `RB` | `rldimi` |
| **SC-form** | SC = System Call | System calls / privileged transition | System-call fields | `sc` |
| **SI-form** | SI = Signed Immediate | Operations using signed immediate values | `RA, SI` | `addis` |

> **Note:** The expansions such as “D = Displacement” and “M = Mask” are useful mnemonic descriptions of the encoding. They should not necessarily be treated as formal IBM definitions of every form name. The form names themselves are the authoritative terminology used by the Power ISA specification.
