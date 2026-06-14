# SETU: 24-Month Startup Execution Roadmap (2025–2027)
*Premium IoT Home Automation System | India Market Entry*

---

## Executive Summary
**Mission:** Launch SETU (premium capacitive touch panels with voice control) in H2 2027 with certified, manufacturable hardware and a validated go-to-market strategy.

**Core De-Risking Strategy:**
1. **Certification first** (BIS/WPC) — regulatory delay = 4-6 months slippage
2. **Manufacturing yield** — PCB complexity & touch calibration for Indian electrical boxes
3. **Voice integration** — vendor lock-in and privacy/data handling in India
4. **Team & execution** — transitioning from IC design to product entrepreneurship

**Key Metrics by Phase:**
- Phase 1: Prototype validation + team formation
- Phase 2: Certifications initiated + manufacturing DFM
- Phase 3: Pilot production + beta customer feedback
- Phase 4: Scale to 1K+ units/month + launch

---

## PHASE 1: Foundation & Prototyping (Months 1–6, Q1–Q2 2025)
*"Get the engineering and business fundamentals right"*

### 📱 **Product & Engineering**

#### Microarchitecture Finalization
- **Touch Controller Spec:**
  - Define capacitive touch IC (e.g., TI MSP430 + CAP1296 or STM32L0 with touch library)
  - Sensor array: 4–12 zones + gesturedetection (swipe, long-press)
  - Calibration routine for Indian 230V electrical box EMI environment (critical de-risk)
  - Power budget: <2W quiescent (24/7 operation)
  
- **IoT Bridge (WiFi/Zigbee/Matter):**
  - Select SoC: ESP32-S3 or nRF5340 (Matter-ready for future)
  - Decision: WiFi-first (simpler) vs. Zigbee mesh (resilient). **Recommend WiFi Phase 1, Zigbee Phase 3**
  - OTA firmware capability (non-negotiable for startup iteration)
  - **Action:** Prototype both touch + WiFi on separate dev boards; test integration in electrical box mockup

- **Theme Engine (Voice Integration):**
  - Partner or open-source: OpenWakeWord + EdgeML (TensorFlow Lite)
  - Supported themes: Devotional, Party, Movie, Sleep, Morning
  - **Initial launch:** Pre-recorded voice prompts (Phase 1 MVP). Full voice assistant (Alexa/Google) = Phase 3 + legal complexity
  - Privacy first: All voice processing on-device (no cloud for Phase 1)

#### PCB Design & Thermal Considerations
- **Board Size:** Custom form-factor for Indian electrical 3-gang/4-gang boxes
  - Standard: 140mm × 100mm (fits Havells/Schneider/Legrand boxes)
  - Power input: 230VAC (with 5V converter for logic)
  - **Critical:** EMI shielding for touch IC in high-EMI environment (India's electrical infrastructure)
  
- **Design & Validation:**
  - Schematic finalization (touch + WiFi + voice codec)
  - PCB layout with impedance control for touch traces
  - **Prototype run:** 5–10 units for EMI testing in real Indian electrical boxes
  - Temperature testing: 40–60°C (Indian climate)

#### Manufacturing Readiness (Early DFM)
- Partner with Pune/Bangalore PCB vendor for 4-layer design (cost: ₹2–4K per unit at 100qty)
- Touchscreen calibration: Develop automated test fixture (in-house, Phase 1)
- Assembly plan: Contract manufacturer vs. in-house (Phase 2 decision)

**Deliverables:**
- [ ] Working prototype with touch + WiFi + theme engine
- [ ] EMI compliance report (in-house testing)
- [ ] PCB + BOM finalized
- [ ] Thermal modeling complete

---

### 🛠️ **Operations & Setup**

#### Tools & Infrastructure
| Tool | Purpose | Cost (INR) | Timeline |
|------|---------|-----------|----------|
| **EDA** | Altium/KiCad (KiCad = free, steeper learning; Altium = ₹15K/yr) | 0–15K | Week 1 |
| **PLM/Lifecycle** | Jira + Confluence for product tracking | 5K/yr | Week 2 |
| **Firmware** | VS Code + ESP-IDF / STM32CubeIDE | Free | Week 1 |
| **Testing** | Oscilloscope (Hantek 2D42 = ₹30K), function gen | 40K | Month 2 |

**Recommendation:** Use KiCad (free, GitHub integration) + VS Code. This fits your IC design background.

#### Team Building (Months 2–4)
- **Core Hires:**
  1. **Firmware Engineer** (1–2 FTE): Embedded C, WiFi/BLE stack experience. Salary: ₹12–18L/yr
  2. **PCB Layout Engineer** (Contract, 6–9 months): High-speed digital + power integrity. Rate: ₹50–80K/mo
  3. **Operations/QA** (0.5 FTE initially): Test protocol setup, vendor coordination. Salary: ₹8–12L/yr

- **Avoid hiring:** Full-stack product managers, marketing teams. Use advisors instead.

#### Legal & Compliance Foundation
- **Company Setup:** Pvt Ltd (if raising capital) or LLP (bootstrapped). Lawyer cost: ₹20–30K
- **IP Protection:**
  - File provisional patent for "theme-based voice control UI" (₹30–50K, India)
  - Trademark: "SETU" in Class 9/11 (₹15–25K, India)
  - **Timeline:** Do this NOW. Patent prosecution takes 18 months; filing delay risks copying
  
- **Supplier Agreements:** Begin NDAs with PCB vendors, chip suppliers

**Deliverables:**
- [ ] Company incorporation + GST registration
- [ ] Patent provisional filed
- [ ] Core team (firmware + PCB engineer) in place or committed
- [ ] Lab setup with test equipment

---

### 💼 **Business & Market**

#### Brand Foundation (SETU)
- **Positioning:** "Intelligence in Silence" (premium, understated, Indian)
  - NOT: "Smart Home for everyone" (vs. Xiaomi/Kasa/Philips)
  - YES: "Handcrafted lighting + ambiance for discerning homes"
  - Target: Upper-middle class (₹50L+ annual income), metros + Tier 1 cities
  
- **Visual Identity:**
  - Logo: Minimalist, inspired by Indian "Setu" (bridge) — connecting spaces
  - Color: Deep blue + gold accents (premium, Indian cultural aesthetic)
  - Launch a simple 1-page website (Webflow/Notion) to seed interest

#### Market Validation (0-Customer Learning)
- **ICP (Ideal Customer Profile):**
  - Age: 35–55, tech-savvy professionals
  - Income: ₹50L–₹2Cr annual
  - Pain point: Tired of garish "smart home" aesthetics; want reliable Indian-built premium
  - Decision-maker: Architect, interior designer, or early-adopter homeowner
  
- **Validation Method:**
  - Interview 20–30 architects/designers in Bangalore, Mumbai, Delhi
  - Ask: "Would you recommend premium touch panels with voice control?"
  - Don't sell. Understand the gap.
  - **Expected insight:** Theme-based modes resonate well; voice might be secondary concern
  
- **Sales Channel (Draft):**
  - B2B2C: Partnerships with premium electrical retailers (Havells, Schneider, Orient Electric)
  - OR direct-to-architect: White-glove sales for high-end residential projects
  - Decision: Finalize by end of Phase 2

#### Go-To-Market Strategy (Rough Draft)
- **Pricing model:** ₹15–25K per panel (at retail), aiming ₹6–8K COGS by Phase 3
- **Launch plan:** Pilot with 10–20 high-net-worth individuals (Phase 3), full market launch (Phase 4)
- **Marketing:** LinkedIn + architectural magazines + trade shows (Ifitex 2026)

**Deliverables:**
- [ ] Brand book (logo, colors, positioning statement)
- [ ] ICP validated with 20+ customer interviews
- [ ] Draft GTM strategy document
- [ ] Simple landing page (webform to capture interest)

---

### 🎯 **Phase 1 De-Risking Checklist**
- [ ] **Tech risk:** Can you achieve <5% touch false-trigger rate in 230V box? (Test by Month 5)
- [ ] **Team risk:** Is firmware engineer available by Month 3? (Hire by Month 2 if not)
- [ ] **Manufacturing risk:** Can your PCB vendor deliver in 8 weeks at target cost? (Qualify by Month 4)
- [ ] **Regulatory risk:** Start certification discussions with TÜV India (BIS). Pre-filing by Month 6.

---

## PHASE 2: Validation & Certification Prep (Months 7–12, Q3–Q4 2025)
*"Prove manufacturability and start regulatory compliance"*

### 📱 **Product & Engineering**

#### Prototype Validation (v2 Hardware)
- **Design iterations:**
  - 20 units: Thermal validation, touch reliability over 1,000 cycles
  - Power consumption audit: Target <2W quiescent, <15W peak
  - **Electrical safety:** High-voltage isolation, leakage current testing (prep for BIS)
  - PCB failure mode analysis (FMEA): Identify weakest components
  
- **Voice Engine Refinement:**
  - Record theme trigger phrases ("Party Mode", "Movie Time", etc.) in multiple Indian accents
  - Test voice latency: <500ms from wake-word to response
  - **Privacy audit:** Confirm no audio upload to cloud servers (India privacy concern)

#### Design for Manufacturing (DFM) & Certification Readiness
- **Manufacturing Partner Selection:**
  - Evaluate 3–5 contract manufacturers in Pune/Bangalore (SMD assembly capability)
  - DFM review: Reduce via count, simplify PCB stackup, optimize paste stencil
  - Cost target: ₹3–4K/unit at 500qty (vs. ₹6–8K Phase 1)
  
- **Certification Preparation:**
  - **BIS (Indian Standard IS 1293:2002):** Electrical safety for low-voltage devices
    - Start design validation: High-voltage isolation, grounding, leakage current
    - Engage TÜV India or BSA Ltd. as third-party lab (cost: ₹1.5–2.5L)
    - **Timeline:** 3–4 months for pre-testing + corrections
  
  - **WPC (Wireless Planning Commission):** WiFi certification
    - Relatively straightforward if using certified modules (ESP32-S3)
    - Cost: ₹50–80K, timeline: 4–6 weeks
  
  - **Data Protection:** MEITY registration (if applicable for future cloud features)

#### Firmware Hardening
- Implement OTA update mechanism with rollback
- Add telemetry (usage patterns, errors) with explicit user consent
- Optimize for Indian WiFi stability (unreliable networks, frequent disconnects)

**Deliverables:**
- [ ] 20-unit prototype batch tested
- [ ] Manufacturing partner selected + DFM review complete
- [ ] BIS pre-testing protocol submitted to TÜV India
- [ ] WPC certification initiated
- [ ] Firmware v1.0 frozen for testing

---

### 🛠️ **Operations & Setup**

#### Manufacturing Readiness
- **Component sourcing:** Lock suppliers for touch IC, WiFi module, MCU (12-month agreements)
  - Negotiate volume discounts (target: ₹1.5–2K COGS for electronics by 500qty)
  - **Supply chain risk:** Maintain 2–3 alternate suppliers for critical components
  
- **Assembly & Test:**
  - Define assembly process (hand-solder Phase 2, automated Phase 3)
  - Build test fixtures for touch calibration + WiFi connectivity
  - Quality acceptance criteria: <0.5% defect rate

#### Compliance & Legal
- **BIS Certification:**
  - Engage TÜV India as notified body (cost: ₹1.5–2.5L)
  - Prepare technical documentation (safety manual, schematic, design notes)
  - **Critical timeline:** 3–4 months of back-and-forth; budget for design iterations
  
- **WPC Approval:** 
  - Submit via approved testing lab
  - Timeline: 6–8 weeks
  
- **Trademark + IP:**
  - Follow up on provisional patent filing; prepare for formal application
  - Trademarking: Should be approved by now (6-month timeline India)
  
- **Contracts:**
  - Manufacturing agreement with contract partner
  - Supplier agreements with BOM component vendors

#### Team Expansion
- Hire **1 QA/Test engineer** full-time for certification support
- Consider **part-time CSO (Chief Sales Officer)** or Business Development Manager (₹10–15K/mo for startup)
- Optionally hire **Supply Chain intern** (cost: ₹20K/mo, helps with vendor management)

**Deliverables:**
- [ ] Manufacturing partner agreement signed
- [ ] Test fixtures and protocols finalized
- [ ] BIS + WPC certifications submitted (in-progress)
- [ ] Component suppliers locked in
- [ ] Supply chain documentation complete

---

### 💼 **Business & Market**

#### Customer Validation (Design Your Product with Them)
- **Alpha User Program:** Recruit 5–8 power users (architects, builders, early-adopters)
  - Provide free prototypes for 3-month trial
  - Collect feedback on theme preferences, ease of installation, support needs
  - **Key learning:** Does voice control + theme modes resonate? Or is pure automation enough?
  
- **Architect Partnerships (Pilot):**
  - Identify 2–3 high-end residential projects launching in H1 2026
  - Propose SETU as "smart lighting partner" (in-kind sponsorship for visibility)
  - Target outcome: Reference installations for Phase 3 launch

#### Go-to-Market Finalization
- **Channel Decision:**
  - **Option A:** Direct-to-architect (high touch, ₹20K+ per panel, Tier 1 cities)
  - **Option B:** B2B2C through Havells/Schneider premium retailers (volume play, wider reach)
  - **Option C:** Hybrid (architects initially, scale via retailers in Phase 4)
  - **Recommendation for Phase 2:** Commit to Option A (architect channel). Option B requires more compliance.
  
- **Pricing Strategy:**
  - Target COGS: ₹3K–4K (electronics) + ₹1K (assembly, logistics, margin buffer)
  - Retail price: ₹18–22K per panel (premium positioning)
  - Margin targets: 40–50% gross (realistic for hardware startup)
  
- **Marketing Assets:**
  - Professional demo video (3–5 min): "SETU in action" showing themes, voice control
  - Case studies: 2–3 alpha user testimonials
  - Pitch deck: 10 slides for investor conversations (if raising capital in Phase 3)

#### Sales Infrastructure
- Build simple CRM (HubSpot free tier) for lead tracking
- Create technical spec sheet for architects (2 pages, PDF)
- Draft installation + support manual (begin writing, refine post-beta)

**Deliverables:**
- [ ] Alpha user program launched (5–8 testers)
- [ ] Channel strategy finalized (architect vs. retailer vs. hybrid)
- [ ] Pricing model validated with 3–5 potential customers
- [ ] Demo video + case study created
- [ ] CRM + lead tracking system in place

---

### 🎯 **Phase 2 De-Risking Checklist**
- [ ] **Certification risk:** Are BIS pre-tests passing? Any design changes needed? (Must know by Month 11)
- [ ] **Manufacturing risk:** Can contract partner deliver first 100 units on schedule? (Proof run by Month 11)
- [ ] **Market risk:** Do architects actually want this product? (Validate with 5+ inquiries by Month 12)
- [ ] **Supply chain risk:** Are component suppliers committed? Any long-lead items? (Secure by Month 10)

---

## PHASE 3: Manufacturing & Market Entry (Months 13–18, Q1–Q2 2026)
*"Certify, produce pilot batch, validate product-market fit"*

### 📱 **Product & Engineering**

#### Certification Completion & Production Release
- **BIS Certification:** Should be finalized by Month 13
  - Last-mile corrections (design tweaks if needed)
  - Obtain BIS license number (₹15–20K annual, renewable)
  - Begin post-certification compliance documentation
  
- **WPC Approval:** Expected by Month 14
- **Firmware Finalization:**
  - v1.1 release: Bug fixes + performance tuning based on alpha feedback
  - Long-term support plan (security patches, theme updates, 3-year commitment)

#### Pilot Production (500–1,000 units)
- **First manufacturing run:** 500 units (aim for 95%+ yield)
  - Validate assembly process, test protocols, packaging
  - Cost target: ₹3.5–4K per unit (electronics + assembly + packaging)
  - **Quality metrics:** <1% defect rate, 100% functionality pass
  
- **Logistics & Packaging:**
  - Design premium unboxing experience (₹200–300 packaging cost)
  - Arrange storage/fulfillment (₹50K/mo for 500 units in Bangalore)
  - Shipping logistics: ₹500–800 per unit (within India)

#### Product Roadmap (Phase 3 + Beyond)
- **Phase 3:** Single WiFi touch panel, 5 themes, voice wake-word only
- **Phase 4:** Multi-panel coordination, app control, Alexa/Google integration, Zigbee support
- **Backlog:** Matter support, AI-driven mood themes, subscription services (Phase 4+)

**Deliverables:**
- [ ] BIS + WPC certifications finalized
- [ ] 500-unit production batch completed
- [ ] <1% defect rate achieved
- [ ] Firmware v1.1 stable
- [ ] Product roadmap doc shared with team

---

### 🛠️ **Operations & Setup**

#### Manufacturing Scale-Up
- **Supplier Lock-in:** Finalize 12–24 month volume commitments (component suppliers)
- **Contract Manufacturer Agreement:** Define SLAs for delivery, quality, warranty
- **Inventory Management:** 
  - Target: 2-month buffer of components (hedge against supply chain disruption)
  - Cost: ₹15–20L tied up in working capital
  
- **Quality Assurance:**
  - Implement in-process testing (touch calibration, WiFi connectivity, safety checks)
  - Monthly yield tracking + root-cause analysis for defects
  - Develop repair/RMA process for customer returns

#### Team Scaling
- **Hires for Phase 3:**
  - **Customer Support Manager** (1 FTE): Handle architect/installer questions, troubleshooting. Salary: ₹8–10L/yr
  - **Manufacturing Engineer** (1 FTE): Process optimization, vendor management, SQA. Salary: ₹12–15L/yr
  - **Marketing/Business Dev** (1 FTE): Alpha user follow-up, reference accounts, case studies. Salary: ₹10–12L/yr
  
- **Optional:** Hire **Finance/Operations Manager** (if raising Series A in Phase 4)

#### Support Infrastructure
- Set up toll-free number + email (support@setu.in or similar)
- Create knowledge base (50–100 FAQs): Installation, WiFi setup, theme customization, troubleshooting
- SLA targets: <2hr email response, <24hr issue resolution

#### Fundraising (if pursuing capital)
- Finalize pitch deck (15 slides for VCs/angel investors)
  - Problem + market size, product demo, team, financials, ask
  - De-risking narrative: "Certified, first 500 units in production, architect pilots validation"
- Target: ₹2–3Cr Series A (use capital for Phase 4 scale-up)

**Deliverables:**
- [ ] Component suppliers locked (12–24 month agreements)
- [ ] Manufacturing SLAs defined
- [ ] Customer support infrastructure live
- [ ] Knowledge base (100 FAQs) created
- [ ] Pitch deck finalized (if fundraising)

---

### 💼 **Business & Market**

#### Product-Market Fit Validation
- **Launch Tier 1 Cities (Select):** Bangalore, Mumbai, Delhi, Pune
  - Partner with 2–3 premium retailers or architects in each city
  - Target: 50–100 units sold in first 2 months
  - NPS survey: Target >50 (excellent for hardware)
  
- **Customer Acquisition:**
  - Ads: Instagram/LinkedIn targeting architects, designers, high-net-worth individuals
  - Budget: ₹10–20L for Phase 3 (focus on brand awareness, not direct sales)
  - Organic: Press coverage in architecture + design magazines (Indian Architecture & Design Magazine, etc.)

#### Reference Accounts & Case Studies
- Identify 3–5 "hero customers" (high-visibility installations)
- Document their story: Problem → SETU solution → Outcome
- Publish case studies + get testimonial videos
- Use for future marketing + sales credibility

#### Pricing Validation
- Monitor actual sell-through vs. ₹18–22K target
- If demand exceeds supply: Consider price increase or managed scarcity
- If slower than expected: Refine positioning (problem might be market timing or ICP mismatch, not product)

#### Channel Expansion (Selective)
- Begin outreach to premium retailers (Havells, Schneider, Orient Electric)
- Proposal: "SETU as premium lighting control solution"
- Timeline: 2–3 months to secure first retailer partnership (Phase 4)

#### Build Brand Moat
- Customer community: Launch "SETU Enthusiasts" group on WhatsApp/Telegram (1,000+ members)
- Content: Monthly theme packs, installation tips, design inspiration
- Goal: Organic advocacy + retention

**Deliverables:**
- [ ] Tier 1 market entry completed (50–100 units sold)
- [ ] 3–5 case studies published
- [ ] Customer NPS >50 achieved
- [ ] Brand community (1,000+ members) established
- [ ] Retailer partnership discussions initiated

---

### 🎯 **Phase 3 De-Risking Checklist**
- [ ] **Production risk:** Did 500-unit batch hit <1% defect rate? (Must verify by Month 14)
- [ ] **Market risk:** Did first 50 customers love the product? (NPS>40 by Month 16)
- [ ] **Channel risk:** Are architects actually buying? (5+ sales by Month 17, not just prototypes)
- [ ] **Team risk:** Have you retained firmware + manufacturing engineers? (High attrition risk in startups)
- [ ] **Cash risk:** Is working capital sufficient for 2-month inventory? (Burn rate check by Month 15)

---

## PHASE 4: Scale & 2027 Launch (Months 19–24, Q3–Q4 2026)
*"Prove unit economics, scale manufacturing, execute full market launch"*

### 📱 **Product & Engineering**

#### Product Maturation
- **Firmware v2.0:** New features validated in Phase 3
  - Multi-panel coordination (sync lighting across rooms)
  - Cloud app (optional, privacy-first design)
  - Alexa/Google Home integration (if market demand confirmed)
  - Zigbee support (for mesh reliability in future)
  
- **Hardware Variants (Optional):**
  - 4-gang panel (standard)
  - 2-gang panel (simpler, lower cost)
  - Wireless remote (battery-powered theme switcher)
  - Decide based on Phase 3 customer demand
  
- **Quality & Reliability:**
  - Aim for 5,000+ operating hours MTBF (proven via accelerated life testing)
  - Warranty: 2-year parts + labor (competitive with premium brands)

#### Manufacturing Scale (1,000–5,000 units/month)
- Evaluate capacity: Can current CM handle 5K units/month by Q4 2026?
  - If not, identify 2nd CM (reduce single-source risk)
  - Target COGS reduction to ₹2.8–3.5K/unit (via volume leverage + process optimization)
  
- Supply chain hardening: Secure 6-month component inventory (₹30–40L capex)
- Supplier consolidation: Finalize 24-month agreements with top 3 vendors per component

**Deliverables:**
- [ ] Firmware v2.0 released
- [ ] 5,000 units/month manufacturing capacity validated
- [ ] COGS reduced to ₹2.8–3.5K
- [ ] Warranty + support SLAs finalized

---

### 🛠️ **Operations & Setup**

#### Organization Buildout
- **Core Team (Final):**
  - CEO (You) — Product vision, fundraising, customer relationships
  - VP Engineering (hire) — Firmware, PCB, manufacturing oversight. Salary: ₹20–25L/yr
  - VP Operations (hire/promote) — Manufacturing, supply chain, QA. Salary: ₹18–22L/yr
  - VP Sales/Marketing (hire) — Channel expansion, brand, customer acquisition. Salary: ₹15–20L/yr
  - CFO/Finance (part-time, initially) — Accounting, fundraising, financial planning. Salary: ₹12–15L/yr part-time
  
- **Total headcount by end of Phase 4:** 15–20 people (engineering, ops, sales, support)
- **Annual payroll:** ₹1.5–2Cr

#### Post-Launch Operations
- **Warranty & Support:** Establish regional service centers (Bangalore, Mumbai, Delhi)
  - Partner with electrical distributors for local support
  - Cost: ₹50–100K/month per city for first 2 years
  
- **Inventory & Logistics:**
  - Build distribution network: Warehouses in 4–6 metros
  - Negotiate logistics contracts with Blue Dart/Delhivery (₹400–500/unit)
  - Target: 2-day delivery within metros, 5-day pan-India
  
- **Regulatory Compliance (Ongoing):**
  - Annual BIS compliance audits (cost: ₹50–100K/year)
  - Data protection compliance (DPIA, GDPR if international expansion planned)
  - Warranty claim tracking + product recall procedures

#### Fundraising & Capital
- **Series A (if pursuing):** Should close in early Phase 4 (Q3 2026)
  - Valuation: ₹15–25Cr (depending on traction in Phase 3)
  - Use of funds: 40% manufacturing scale, 30% marketing/sales, 20% hiring, 10% working capital
  - Expected burn rate: ₹50–80L/month (manage to profitability by Phase 4 end)

**Deliverables:**
- [ ] Leadership team (VP Eng, Ops, Sales, CFO) hired
- [ ] Regional support centers operational
- [ ] Distribution logistics finalized
- [ ] Series A funding (if applicable) closed or secured

---

### 💼 **Business & Market**

#### Full Market Launch (H2 2026 → Full 2027)
- **Expansion to All Tier 1 + Tier 2 Cities:**
  - Bangalore, Mumbai, Delhi, Pune → Hyderabad, Bangalore, Ahmedabad, Chennai
  - Target by EOY 2026: Presence in 10 metros
  
- **Channel Expansion:**
  - **Architect channel:** 100+ registered architects/interior designers
  - **Retail partnerships:** 5–10 premium electrical retailers (Havells, Schneider, Orient Electric)
  - **Direct e-commerce:** setu.in with pre-order capability (Phase 4 late)
  - **B2B2C:** Builder partnerships for luxury residential projects

#### Marketing & Brand
- **Brand Investment:** ₹1–1.5Cr annual marketing budget (Phase 4)
  - Integrated campaign: Print (design magazines), digital (Instagram, LinkedIn), events (Ifitex 2026 + 2027)
  - Celebrity architect/influencer endorsements (₹5–10L per partnership)
  - Showrooms in 3–4 key metros (high-end design districts)
  
- **PR & Thought Leadership:**
  - Publish 2–3 design guides: "The Art of Smart Lighting"
  - Speaker at architecture conferences (ASAI, IIA)
  - Awards: Enter "Best IoT Hardware" categories (Indian Design Awards, etc.)

#### Sales Metrics & Growth
- **Revenue Target (2027):**
  - Units sold: 5,000–10,000 panels (₹9–20Cr annual revenue)
  - Average selling price: ₹18–25K per panel (mix of direct + retail)
  - Gross margin: 45–55%
  - EBITDA: Break-even to +5% by Q4 2027
  
- **Customer Acquisition Cost (CAC):** ₹2–3K per panel (via architect partnerships + digital)
- **Lifetime Value (LTV):** ₹25–30K (assuming accessories + warranty extensions)
- **LTV:CAC ratio:** 8–12x (excellent for hardware)

#### International Expansion (Roadmap)
- Target: UAE, Singapore by 2028
- Why: Premium segment, English-speaking, regulatory alignment with India
- Feasibility: Depends on Phase 4 profitability + brand strength
- **Action for Phase 4:** Explore CE certification (Europe), FCC (USA) for future optionality

#### Product Portfolio Expansion
- **Phase 4+:** 
  - Smart lighting integration (Zigbee/Matter)
  - Audio integration (multi-room music)
  - Security features (door/window sensors, alarms)
  - Subscription services (theme updates, premium AI features)
  - Target: Expand TAM from ₹500Cr (lighting control) to ₹2,000Cr (full home automation)

**Deliverables:**
- [ ] Presence in 10+ metros (Tier 1 + Tier 2)
- [ ] 5,000+ units sold (cumulative by end of Phase 4)
- [ ] 3–5 retail partnerships active
- [ ] Break-even EBITDA achieved
- [ ] 2028+ roadmap finalized (international + portfolio expansion)

---

### 🎯 **Phase 4 De-Risking Checklist**
- [ ] **Profitability risk:** Is unit economics positive? (COGS <50% of selling price by Month 22)
- [ ] **Scale risk:** Can manufacturing keep up with demand? (No more than 20% month-on-month growth constraints)
- [ ] **Market risk:** Are retailers selling through, or just sitting on inventory? (Track sell-through rate >60% by Month 23)
- [ ] **Team risk:** Has your VP Eng/Ops stayed committed? (Key person dependencies are highest risk)
- [ ] **Capital risk:** Will you need Series B, or can you scale profitably? (Cash flow projection by Month 21)

---

## Master De-Risking Timeline

### 🚨 **Failure Points to Watch (Ranked by Probability)**

| Rank | Risk | Phase | Impact | Mitigation |
|------|------|-------|--------|-----------|
| **1** | BIS/WPC certification delay | 2 | 4–6 month slip | Start Phase 1 Month 1; engage TÜV India by Phase 2 Month 7 |
| **2** | Manufacturing yield <90% | 2–3 | Quality crisis, cost overrun | DFM review, pilot 500 units in Phase 3 |
| **3** | Firmware stability (WiFi crashes) | 3–4 | Customer returns, brand damage | Aggressive testing in Phase 2; hire 2nd firmware engineer |
| **4** | Touch false-trigger in high-EMI | 1 | Product unfeasible | EMI testing in Phase 1 Month 5; consider shielding redesign |
| **5** | Architect adoption slower than expected | 3 | Revenue miss | Validate demand in Phase 2 (20+ interviews); adjust pricing/positioning early |
| **6** | Component supply chain disruption | 2–4 | Manufacturing halt | Lock suppliers early; maintain 2 alternates per component |
| **7** | Team attrition (engineer leaves) | 3–4 | Delayed roadmap | Competitive salary, equity, clear growth path; avoid burnout |
| **8** | Working capital shortage | 3 | Can't scale manufacturing | Raise seed/Series A by Phase 3; manage inventory tightly |
| **9** | Retailer channel doesn't work | 3–4 | Limited distribution | Test with 2–3 retailers first; don't overcommit marketing budget |
| **10** | Alexa/Google integration complicated | 4 | Feature delays | Defer cloud/voice assistant to Phase 4+; local-first MVP in Phase 1–3 |

---

## Financial Summary (Estimated)

### Capital Requirements
| Phase | Use of Funds | Amount (₹) |
|-------|-------------|-----------|
| **Phase 1** | Prototyping, team, lab setup | 50–70L |
| **Phase 2** | Certifications, manufacturing prep, team | 40–60L |
| **Phase 3** | Production run (500u), marketing, team | 1–1.5Cr |
| **Phase 4** | Scale-up, expansion, working capital | 1.5–2.5Cr |
| **TOTAL** | 3–5Cr (bootstrap + seed/Series A) | — |

### Burn Rate Estimate
| Phase | Monthly Burn | Runway (₹50L capital) |
|-------|-------------|----------------------|
| **Phase 1** | ₹10–15L | 3.5–5 months |
| **Phase 2** | ₹15–20L | 2.5–3.5 months |
| **Phase 3** | ₹30–40L | 1.2–1.7 months (revenue offset) |
| **Phase 4** | ₹40–50L | Break-even trajectory |

**Recommendation:** Bootstrap Phase 1–2 with ₹1Cr angel/friends+family. Raise Series A in Phase 3 (Month 15–18) once you have traction (100+ units, certifications, team).

---

## Roadmap Summary (One-Pager for Your Board)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ SETU: 24-MONTH EXECUTION ROADMAP (2025–2027)                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ PHASE 1 (M1–6):   PROTOTYPE + TEAM + BRAND               [2025 Q1–Q2]    │
│                   ✓ Working prototype (touch + WiFi + voice)               │
│                   ✓ Core team hired (firmware, PCB)                        │
│                   ✓ Brand + ICP validation                                 │
│                   ✓ Patent filed, company registered                       │
│                                                                             │
│ PHASE 2 (M7–12):  CERTIFICATION + DFM + VALIDATION       [2025 Q3–Q4]    │
│                   ✓ BIS + WPC certifications submitted                     │
│                   ✓ Manufacturing partner selected                         │
│                   ✓ 20-unit prototype tested                               │
│                   ✓ Alpha user program (5–8 testers)                       │
│                   ✓ Channel strategy locked (architect-first)              │
│                                                                             │
│ PHASE 3 (M13–18): PRODUCTION + MARKET ENTRY              [2026 Q1–Q2]    │
│                   ✓ BIS + WPC certifications APPROVED                      │
│                   ✓ 500-unit production batch completed                    │
│                   ✓ Tier 1 city launch (50–100 units sold)                │
│                   ✓ NPS >50, case studies published                        │
│                   ✓ Retailer partnerships initiated                        │
│                                                                             │
│ PHASE 4 (M19–24): SCALE + 2027 LAUNCH                    [2026 Q3–Q4]    │
│                   ✓ Manufacturing: 5,000 units/month capacity              │
│                   ✓ Expansion: 10+ metro cities                            │
│                   ✓ Revenue: ₹9–20Cr annual run-rate                       │
│                   ✓ Profitability: EBITDA break-even                       │
│                   ✓ Series A closed (if capital-raising path)              │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│ KEY SUCCESS METRICS BY PHASE                                                │
├─────────────────────────────────────────────────────────────────────────────┤
│ Phase 1:  <5% touch false-trigger rate, team 100% committed, patent filed  │
│ Phase 2:  BIS pre-testing passed, 1st manufacturing run at <5% defect     │
│ Phase 3:  500 units delivered, customer NPS >50, revenue ₹1Cr+            │
│ Phase 4:  10K cumulative units, profitability, leadership team in place   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Appendix: Founder Checklist (Your Next 30 Days)

### Week 1 (Foundation)
- [ ] **Legal:** Incorporate company (Pvt Ltd or LLP) + GST registration
- [ ] **Hiring:** Post firmware engineer role on LinkedIn, AngelList
- [ ] **IP:** File trademark "SETU" (Class 9/11) with TM Registry
- [ ] **Setup:** Order oscilloscope, function generator for lab

### Week 2–3 (Engineering)
- [ ] **Prototyping:** Finalize touch IC + WiFi module selection
- [ ] **Design:** Begin schematic + PCB layout (KiCad)
- [ ] **Testing:** Build EMI test plan for electrical box validation

### Week 4 (Market)
- [ ] **Research:** Interview 10 architects/interior designers (Bangalore/Mumbai)
- [ ] **Brand:** Create simple landing page (Webflow)
- [ ] **Positioning:** Write 1-page brand positioning doc + target ICP

---

## Final Thoughts: Transition from IC Design to Product Entrepreneurship

You have 13 years of deep-tech IC design expertise — this is a MASSIVE advantage. But entrepreneurship is a different muscle.

**Key mindset shifts:**
1. **From "perfect" to "shipped":** Your IC designs iterate slowly (tapeout costs ₹50L+). Hardware startups need fast fail/iterate cycles.
2. **From technical depth to business breadth:** Manufacturing, certification, sales channels, and team management matter as much as circuit design.
3. **From solo expertise to delegation:** You can't do everything. Hire people smarter than you in their domains (firmware, manufacturing, sales).
4. **From risk-aversion to calculated risk-taking:** Startups require 70% confidence decisions, not 99%. Get comfortable with ambiguity.

**Early wins to build momentum:**
- Month 3: Prototype working + team onboarded (dopamine hit)
- Month 6: Patent + company legal setup (legitimacy)
- Month 10: First certification approval (external validation)
- Month 15: First 50 customers (proof of demand)

**Long-term:** SETU can be a ₹500Cr+ business if executed well. The smart lighting + voice control + premium positioning is a 10-year TAM play. Stay focused, de-risk relentlessly, and don't get distracted by feature creep.

You've got this. 🚀

---

**Last Updated:** May 2026 (Start of execution)
**Next Review:** Quarter-end Phase 1 (M6) for trajectory correction

