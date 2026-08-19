# IBM Power ISA: Complete Learning Guide

## Introduction

IBM Power ISA (Instruction Set Architecture) is an open-source RISC (Reduced Instruction Set Computer) architecture developed and managed by the OpenPOWER Foundation, led by IBM. In August 2019, IBM open-sourced the Power ISA specification, making it freely available to the community.

---

## Module 1: Fundamentals

### What is Power ISA?

Power ISA is a specification that defines:
- The instructions that POWER processors execute
- The architecture used by POWER processors
- The memory model and addressing modes
- Supervisor and hypervisor operations

### History & Evolution

- **PowerPC (1991)**: Original architecture developed by Apple, IBM, and Motorola
- **Book E Extension (2006)**: Addition for embedded systems
- **Power ISA v3.0 (2017)**: Current standard with major updates
- **Power ISA v3.1 (2020)**: Enhanced instruction set with 64-bit prefixes
- **Power ISA v3.1c (2024)**: Latest version with ongoing updates

### Why Open Source?

1. **Community Participation**: Enable broader ecosystem development
2. **Innovation**: Allow third-party implementations and extensions
3. **Transparency**: Full specification visibility for researchers and developers
4. **Industry Alignment**: Move OpenPOWER Foundation under Linux Foundation umbrella

---

## Module 2: Architecture Overview

### Register Organization

Power ISA uses multiple register sets for different purposes:

#### General-Purpose Registers (GPRs)
- **32 registers** (R0-R31)
- **32 or 64-bit** width depending on mode
- Used for integer arithmetic and logical operations
- R0 has special behavior in some instructions (reads as 0)

#### Vector-Scalar Registers (VSRs)
- **64 registers** (VSR0-VSR63)
- **128-bit** width
- Unified vector and floating-point register file
- Supports both SIMD (Single Instruction, Multiple Data) and scalar FP operations

#### Special Registers
- **Condition Register (CR)**: 32-bit field for comparison results
- **Link Register (LR)**: Stores return addresses for function calls
- **Counter Register (CTR)**: Used for loop counting and branching

### Memory Model

- **Load/Store Architecture**: Only LW/SW instructions access memory (RISC principle)
- **Byte Addressable**: Memory is addressed at byte granularity
- **Endianness**: Supports both big-endian and little-endian modes
- **Harvard Cache Architecture**: Separate instruction and data caches

### Instruction Format

- **Basic Format**: 32 bits
- **Extended Format** (v3.1+): Up to 64 bits using prefix instructions
- **Instruction Types**:
  - I-Type: Immediate operand
  - D-Type: Memory load/store
  - X-Type: Extended
  - A-Type: Arithmetic (multiply/add)

---

## Module 3: Instruction Categories

### 1. Integer Instructions
- Arithmetic: ADD, ADDI, SUBTRACT, SUBI
- Logical: AND, OR, XOR, NAND, NOR
- Shift: SHL, SHR, SHRA, ROTL, ROTR
- Compare: CMP, CMPI

### 2. Floating-Point Instructions
- Arithmetic: FADD, FSUB, FMUL, FDIV
- Multiply-Add: FMA (Fused Multiply-Add)
- Rounding: FROUND, FTRUNC
- Decimal: DADD, DSUB (Decimal arithmetic)

### 3. Load/Store Instructions
- Integer Load: LW, LWZ, LD
- Integer Store: SW, STW, STD
- Float Load: LFS, LFD
- Float Store: STFS, STFD
- Vector Load/Store: LVX, STVX

### 4. Branch Instructions
- Unconditional: B, BL (Branch with Link)
- Conditional: BC (Branch on Condition)
- Count Register: BCCTR
- Link Register: BCLR

### 5. Vector/SIMD Instructions
- Vector Add: VADDU, VADDS
- Vector Multiply: VMUL
- Vector Permute: VPERM
- Supports up to 16 elements per instruction

### 6. Special Instructions
- Move to/from Special Registers: MTSPR, MFSPR
- No Operation: NOR 0,0,0 (idiom for NOP)
- Synchronization: SYNC, LWSYNC

---

## Module 4: Operation Modes

### User Mode
- Restricted instruction set
- Cannot access privileged registers
- Limited memory access control
- Default execution mode for applications

### Supervisor Mode
- Full instruction set access
- Can manage memory and interrupts
- Typically used by operating systems
- Can context switch between user and hypervisor modes

### Hypervisor Mode
- Complete processor control
- Can manage virtual machines
- Can manage all system resources
- Most privileged mode

---

## Module 5: Key Features

### Floating-Point
- IEEE 754 Standard Compliance
- Fused Multiply-Add (FMA) for precision
- Decimal floating-point for financial applications
- Rounding modes support

### SIMD Capabilities
- Vector operations on packed data
- 128-bit vectors with variable element widths
- Supports integers, floats, and decimals
- Enables parallel processing on single instruction

### Memory Hierarchy
- L1 Instruction/Data Caches
- L2 Unified Cache
- L3/L4 Cache support (implementation dependent)
- TLB (Translation Lookaside Buffer) for virtual memory

### Privilege Levels
- User-mode ISA (Book I)
- Supervisor-mode ISA (Book III-S)
- Hypervisor-mode ISA (Book III-H)

---

## Module 6: Compliance Levels (v3.0+)

Starting with Power ISA v3.0, not all implementations must support the entire specification. Instead, designs support:

### Base Architecture
- Fundamental instructions all compliant designs must support
- Common operations across all implementations

### Subsets (Choose at least one)
1. **Server/SFS** (Server Floating-point Subset)
   - For general-purpose server processors
   - Full floating-point support

2. **Supercomputer/SFFS** (Supercomputer Floating-point Subset)
   - For high-performance computing
   - Enhanced vectorization

3. **Embedded/LCS** (Lightweight Compute Subset)
   - For embedded systems
   - Minimal overhead

4. **Application/ACS** (Application Class Subset)
   - For specific application domains
   - Tailored feature sets

### Optional Features
- Additional instruction extensions
- Processor-specific optimizations
- Custom feature selection

---

## Module 7: Advantages of Power ISA

| Feature | Benefit |
|---------|---------|
| **RISC Design** | Simpler implementation, faster clock speeds |
| **Load/Store Architecture** | Regular instruction patterns, easier pipelining |
| **Large Register File** | Reduces memory access, improves performance |
| **Flexible Modes** | Supports user, supervisor, and hypervisor operations |
| **Open Source** | Community contributions, transparency, reduced licensing costs |
| **Compliance Levels** | Flexibility in implementation scope |
| **IEEE 754 + Decimal** | Financial applications support |

---

## Module 8: Comparison with Other ISAs

| Feature | Power | x86 | ARM |
|---------|-------|-----|-----|
| **Type** | RISC | CISC | RISC |
| **Philosophy** | Load/Store | Memory Operations | Load/Store |
| **Registers** | 32 GPRs | 16 GPRs | 15-31 GPRs |
| **Instruction Size** | 32/64-bit | 1-15 bytes | 32/16-bit |
| **Complexity** | Low | High | Low |
| **Desktop Prevalence** | Specialized | Common | Mobile-focused |
| **Server Use** | Growing | Dominant | Emerging |

---

## Module 9: Real-World Applications

### 1. IBM Power Servers
- POWER9, POWER10 processors
- Enterprise data centers
- High-performance computing

### 2. Embedded Systems
- Networking equipment
- Industrial controllers
- Automotive systems

### 3. Supercomputing
- Aurora (Argonne National Lab)
- Frontier (Oak Ridge)

### 4. Open Implementations
- Libre-SOC: Open-source POWER implementation
- OpenPOWER Systems: Community reference designs

---

## Module 10: Getting Started

### Step 1: Understand the Basics
- Review RISC principles
- Study load/store architecture
- Familiarize yourself with register organization

### Step 2: Study the Specification
- Download Power ISA v3.1 specification
- Focus on Book I (User-level ISA) first
- Progress to Book II (Memory model) and Book III (Supervisor)

### Step 3: Assembly Language
- Learn Power assembly syntax
- Practice writing simple programs
- Use GCC/LLVM with Power target support

### Step 4: Advanced Topics
- Vector programming (SIMD)
- Memory management
- Privilege levels and mode switching

### Step 5: Hands-On Coding
- Use simulators (QEMU, Gem5)
- Write kernel code
- Contribute to open projects

---

## Module 11: Development Tools

### Compilers
- **GCC**: Supports Power ISA
- **LLVM**: Native Power backend
- **IBM XL Compiler**: Commercial option

### Simulators
- **QEMU**: Full system emulation
- **Gem5**: Detailed architectural simulator
- **Spike**: Lightweight simulator

### Debuggers
- **GDB**: GNU Debugger with Power support
- **Valgrind**: Memory analysis tool

### Assemblers
- **GNU as**: Default Power assembler
- **LLVM**: Alternative assembler

---

## Module 12: Resources & References

### Official Documentation
1. **OpenPOWER Foundation**: https://openpowerfoundation.org
2. **Power ISA Specifications**: Available in PDF format (v3.0, v3.1, v3.1c)
3. **IEEE 754 Standard**: For floating-point operations

### Educational Resources
- **Libre-SOC Project**: Open implementation and learning materials
- **RaptorCS Wiki**: Power architecture documentation
- **IBM Power Documentation**: Architecture guides

### Community
- **OpenPOWER Discussion Forums**
- **Linux Foundation**: OpenPOWER now under LF umbrella
- **GitHub**: Open-source Power implementations

### Papers & Articles
- "Power ISA v3.0/3.1 Overview"
- "POWER10 Architecture Deep Dive"
- "OpenPower Foundation: Industry Collaboration"

---

## Summary

Power ISA is a modern, open-source RISC architecture with:

✅ **Open Specification** - Freely available for community use  
✅ **Flexible Design** - Multiple compliance levels  
✅ **Powerful Features** - Vectors, floats, decimal arithmetic  
✅ **Strong Ecosystem** - IBM, supercomputers, embedded systems  
✅ **Active Community** - Growing implementations and contributions  

Whether you're interested in processor design, systems programming, or high-performance computing, Power ISA offers a clean, well-documented architecture to learn from.

---

## Learning Path

**Beginner** → Fundamentals (Module 1-2) → Architecture (Module 3-4)  
**Intermediate** → Features (Module 5-7) → Comparisons (Module 8)  
**Advanced** → Applications (Module 9) → Development (Module 10-11)  
**Expert** → Specification Deep-Dive → Implementation → Contributions  

---

**Last Updated**: August 2026  
**Source**: OpenPOWER Foundation, IBM Power ISA Specifications, Community Resources
