export interface Service {
  slug: string;
  comboSlug: string;
  name: string;
  shortDescription: string;
  description: string;
  heroHeading: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  features: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  priceRange: string;
  commonIssues: string[];
  seasonalNotes: string;
}

export const services: Service[] = [
  {
    slug: 'custom-decks',
    comboSlug: 'custom-deck-builder',
    name: 'Custom Decks',
    shortDescription: 'Premium custom decks built with composite, cedar, or pressure-treated lumber, designed to complement your home.',
    description: 'A deck should be more than boards and railings — it should feel like an extension of the rooms inside your home. At Mission Decks & Design, we start every project by understanding how you actually use your outdoor space. Do you need a grilling station next to the kitchen door? A quiet corner for morning coffee? A multi-level layout that follows the slope of your yard? We design around your answers, not a template. Our builds use premium composite decking from Trex and TimberTech, naturally rot-resistant cedar, or high-grade pressure-treated Southern Yellow Pine — each chosen based on your priorities for look, feel, maintenance, and budget. Every deck we build meets or exceeds Wake County structural codes, with properly spaced joists, corrosion-resistant hardware, and footings sized for the clay-heavy soils common across the Triangle.',
    heroHeading: 'Custom Deck Builder in Holly Springs & the NC Triangle',
    metaTitle: 'Custom Decks | Mission Decks & Design',
    metaDescription: 'Premium custom deck building in Holly Springs, Apex, Cary & the Triangle. Composite, cedar & pressure-treated lumber. Request a consultation.',
    image: '/images/hero/composite-deck-screened-porch.jpeg',
    features: [
      'Composite decking from Trex, TimberTech, and Fiberon with 25–50 year warranties',
      'Western Red Cedar and pressure-treated Southern Yellow Pine options',
      'Multi-level designs that work with sloped Triangle backyards',
      'Built-in seating, planters, and storage benches',
      'Cable rail, aluminum balusters, or traditional wood railing systems',
      'LED stair and post cap lighting integrated during build',
      'Full permit handling and Wake County code compliance',
      'Proper footing depth for NC clay soil conditions',
    ],
    process: [
      { step: 1, title: 'Design Consultation', description: 'We visit your home, take measurements, discuss your vision, and walk through material options. You get a 3D design rendering before we break ground.' },
      { step: 2, title: 'Proposal & Permits', description: 'You receive a detailed, line-item estimate with no hidden fees. We handle all permit applications with your local building department.' },
      { step: 3, title: 'Build', description: 'Our crew works on-site daily. We protect your landscaping, communicate progress, and keep the job site clean throughout construction.' },
      { step: 4, title: 'Final Walkthrough', description: 'We walk every inch together, check every connection, and make sure you are completely satisfied before the final inspection.' },
    ],
    faqs: [
      {
        question: 'How long does it take to build a custom deck in the Triangle area?',
        answer: 'Most residential decks take 1–3 weeks of on-site construction, depending on size and complexity. A straightforward 300 sq ft single-level deck might wrap up in 5–7 working days, while a multi-level design with built-ins and lighting can take 2–3 weeks. Permit approval from Wake County typically adds 1–2 weeks before construction begins. We provide a detailed timeline during your design consultation so you know exactly what to expect.',
      },
      {
        question: 'What deck material holds up best in North Carolina humidity and heat?',
        answer: 'Composite decking (Trex, TimberTech) performs exceptionally well in NC\'s humid subtropical climate because it resists moisture absorption, mold growth, and UV fading. Cedar is a strong natural option — it contains oils that resist rot and insects — but requires annual sealing in this climate. Pressure-treated pine is the most affordable but needs staining every 2–3 years to prevent graying and moisture damage. We walk through material samples during your consultation so you can feel the difference.',
      },
      {
        question: 'Do I need a permit for a deck in Holly Springs or Wake County?',
        answer: 'Yes. Wake County requires a building permit for any deck attached to a home or any freestanding deck higher than 30 inches above grade. The permit process involves submitting a site plan, structural drawings, and footing specifications. Your deck will also need a final inspection before it is considered code-compliant. We handle the entire permit process for you — from application through final inspection — so you do not have to navigate it on your own.',
      },
      {
        question: 'How deep do deck footings need to be in North Carolina clay soil?',
        answer: 'NC building code requires footings to extend at least 12 inches below grade, but in the heavy clay soils common around Holly Springs and the Triangle, we typically pour footings 18–24 inches deep. Clay expands and contracts with moisture changes and freeze-thaw cycles, which can cause shallow footings to shift or heave over time. Deeper footings anchored below the frost line and clay movement zone prevent your deck from developing structural problems down the road.',
      },
      {
        question: 'What is the price range for a custom deck in the Holly Springs area?',
        answer: 'Deck costs in the Triangle typically range from $35–$75 per square foot for pressure-treated wood, $50–$100 for composite, and $75–$120+ for premium composite with upgraded railings and lighting. A typical 300 sq ft composite deck runs $18,000–$30,000 installed, depending on height, complexity, and features. We provide detailed, itemized estimates — not ballpark guesses — so you understand exactly where every dollar goes before work begins.',
      },
    ],
    priceRange: '$35–$120+ per sq ft depending on material and complexity',
    commonIssues: [
      'Footing settlement in clay soil causing uneven deck surfaces',
      'Ledger board rot from improper flashing against the house',
      'Fastener corrosion from humidity accelerating nail and screw failure',
      'Joist spacing too wide for composite boards causing sagging between supports',
      'Inadequate ventilation under low-profile decks trapping moisture',
    ],
    seasonalNotes: 'Spring and fall are ideal building seasons in the Triangle. Summer builds are common but heat can affect crew productivity. Winter is the best time to start planning and permitting — get ahead of the spring rush when most homeowners call.',
  },
  {
    slug: 'outdoor-kitchens',
    comboSlug: 'outdoor-kitchens',
    name: 'Outdoor Kitchens',
    shortDescription: 'Functional outdoor kitchens with grills, countertops, and storage for backyard entertaining.',
    description: 'An outdoor kitchen turns your backyard from a place you visit into a place you live. We design kitchens that match how you actually cook and entertain — whether that means a built-in gas grill with a prep counter for weeknight dinners, or a full setup with a smoker, sink, refrigerator, and bar seating for hosting. Our outdoor kitchens are built on reinforced concrete pads or integrated into existing deck structures with proper load-bearing support. We use granite, quartz, and concrete countertops rated for outdoor exposure, paired with stainless steel appliances designed to handle NC humidity. Every kitchen includes proper gas line routing, electrical for outlets and lighting, and drainage planning so your investment lasts for decades.',
    heroHeading: 'Outdoor Kitchen Builder in Holly Springs & the NC Triangle',
    metaTitle: 'Outdoor Kitchens | Mission Decks & Design',
    metaDescription: 'Custom outdoor kitchen design & installation in Holly Springs, Apex, Cary & the Triangle. Grills, countertops & storage. Request a consultation.',
    image: '/images/services/pergola-pool-daytime.jpeg',
    features: [
      'Built-in gas grills, smokers, and pizza ovens from top brands',
      'Granite, quartz, and stamped concrete countertop options',
      'Outdoor-rated cabinetry and stainless steel storage',
      'Integrated bar seating and serving areas',
      'Plumbed sinks with hot and cold water connections',
      'Electrical outlets, USB charging, and dedicated lighting circuits',
      'Weather-resistant construction rated for NC climate exposure',
      'Gas line installation and proper ventilation planning',
    ],
    process: [
      { step: 1, title: 'Lifestyle Consultation', description: 'We learn how you cook, how often you entertain, and what appliances matter most. We measure your space and discuss placement relative to your home and existing landscape.' },
      { step: 2, title: 'Design & Appliance Selection', description: 'You receive a scaled layout showing counter placement, appliance locations, traffic flow, and utility connections. We help you select appliances that fit your cooking style and budget.' },
      { step: 3, title: 'Foundation & Build', description: 'We pour the concrete pad, build the block or steel-frame structure, run gas and electrical, install countertops, and mount appliances — all coordinated with licensed plumbers and electricians.' },
      { step: 4, title: 'Fire It Up', description: 'We test every appliance, check all connections, and walk you through operation and seasonal maintenance before handing over the keys to your new kitchen.' },
    ],
    faqs: [
      {
        question: 'Can an outdoor kitchen be built on an existing deck?',
        answer: 'It depends on the deck\'s structural capacity. A grill island with countertops can weigh 1,500–3,000 lbs, which exceeds what most residential decks are designed to support. We assess your deck\'s framing, footings, and joist sizing to determine if reinforcement is needed. In many cases, we can add supplemental posts and beams beneath the kitchen area without rebuilding the entire deck. If the deck cannot be modified, a ground-level concrete pad adjacent to the deck is usually the best solution.',
      },
      {
        question: 'What countertop material works best outdoors in North Carolina?',
        answer: 'Granite is the most popular choice for outdoor kitchens in NC — it handles heat, UV exposure, and humidity without degrading. Quartz performs well under a covered structure but can discolor with prolonged direct sun exposure. Stamped and polished concrete is durable and affordable, with the flexibility to match any color scheme. We avoid marble and certain natural stones that are porous and stain easily in outdoor cooking environments.',
      },
      {
        question: 'Do I need a gas line run to my outdoor kitchen?',
        answer: 'If you want a built-in natural gas grill, yes — a licensed plumber needs to extend a gas line from your home\'s main supply. Natural gas is more convenient and cheaper long-term than propane tanks, and it provides consistent heat for grilling. We coordinate gas line installation as part of every outdoor kitchen project. If a gas line extension is not feasible, we design for propane with a concealed tank compartment built into the island structure.',
      },
      {
        question: 'How do you protect an outdoor kitchen from NC storms and humidity?',
        answer: 'We build with marine-grade stainless steel, pressure-treated or composite framing, and sealed concrete block structures that resist moisture penetration. All electrical components are GFCI-protected and rated for wet locations. Countertops are sealed with penetrating sealers that block water absorption. We also recommend a pergola or roof structure over the kitchen area — not just for rain protection, but to extend the life of appliances and finishes by limiting UV and moisture exposure.',
      },
    ],
    priceRange: '$15,000–$60,000+ depending on appliances and scope',
    commonIssues: [
      'Cracking countertops from improper substrate support',
      'Grease and smoke damage to nearby siding or soffit',
      'Inadequate drainage causing standing water around the base',
      'Appliance rust from choosing indoor-rated equipment for outdoor use',
      'Poor lighting making the kitchen unusable after sunset',
    ],
    seasonalNotes: 'Outdoor kitchen construction works year-round in the Triangle, but concrete work is best in spring or fall when temperatures stay above 50°F consistently. Plan in winter to have your kitchen ready for grilling season.',
  },
  {
    slug: 'pergolas-arbors',
    comboSlug: 'pergolas-arbors',
    name: 'Pergolas & Arbors',
    shortDescription: 'Elegant shade structures that add definition and character to your outdoor living space.',
    description: 'A pergola changes how a space feels. It gives overhead definition to an open patio, creates filtered shade where there was only sun, and adds a sense of room to a backyard that otherwise feels like an empty lawn. Our pergolas are designed as architectural elements — proportioned to your home, built with the same attention to detail as the house itself. We build freestanding pergolas for patios and garden areas, attached pergolas that extend over decks and outdoor kitchens, and entry arbors that frame walkways and garden gates. Material options include pressure-treated pine (painted or stained to match your home), Western Red Cedar for a natural warm grain, and low-maintenance composite or aluminum systems that never need refinishing. Every structure is engineered for wind loads common to the Triangle and anchored to concrete footings that resist the clay soil movement unique to this area.',
    heroHeading: 'Pergola & Arbor Builder in Holly Springs & the NC Triangle',
    metaTitle: 'Pergolas & Arbors | Mission Decks & Design',
    metaDescription: 'Custom pergola and arbor design & installation in Holly Springs, Apex, Cary & the Triangle. Wood & composite options. Request a consultation.',
    image: '/images/services/pergola-string-lights.jpeg',
    features: [
      'Freestanding and attached pergola designs',
      'Western Red Cedar, pressure-treated pine, and composite options',
      'Aluminum pergola systems with adjustable louvers for sun control',
      'Entry arbors and garden gate structures',
      'Integrated mounting for string lights, fans, and shade sails',
      'Engineered for NC wind loads and anchored to proper footings',
      'Optional privacy screens and lattice side panels',
      'Custom stain and paint color matching to your home',
    ],
    process: [
      { step: 1, title: 'Site Assessment', description: 'We evaluate sun exposure, wind patterns, and sight lines from your home to determine the ideal size, orientation, and style for your pergola or arbor.' },
      { step: 2, title: 'Custom Design', description: 'You receive scaled drawings showing the structure in relation to your home, patio, or garden. We finalize material, color, and any add-ons like lighting hooks or shade panels.' },
      { step: 3, title: 'Build & Install', description: 'Footings are poured, posts are set plumb, and beams and rafters are installed with precision. Most pergolas are completed in 2–5 days of on-site work.' },
      { step: 4, title: 'Finishing Touches', description: 'We apply final stain or sealant, install any lighting hardware, and ensure everything is level, square, and solid.' },
    ],
    faqs: [
      {
        question: 'How much shade does a pergola actually provide?',
        answer: 'A standard open-rafter pergola provides roughly 25–50% shade depending on rafter spacing and orientation. East-west oriented rafters provide more midday shade. For more coverage, we can add retractable shade canopies, fixed fabric panels, or grow climbing plants like wisteria or jasmine on the structure. Aluminum louvered pergolas offer adjustable shade from 0–100% with a hand crank or motorized system — they are the most versatile option if shade control matters to you.',
      },
      {
        question: 'What is the difference between a pergola and an arbor?',
        answer: 'A pergola is a larger structure — typically 10x10 feet or bigger — designed to cover a seating or dining area. It has multiple posts, beams, and rafters creating a defined overhead plane. An arbor is smaller and narrower, usually framing a walkway, garden entrance, or gate. Think of an arbor as a doorway and a pergola as a room. We build both, and often combine them — an arbor leading into a pergola-covered patio creates a natural flow through your outdoor space.',
      },
      {
        question: 'Do pergolas need footings in North Carolina?',
        answer: 'Absolutely. Any permanent pergola needs concrete footings extending below the frost line — at least 12 inches in NC, though we pour 18–24 inches in clay soil areas to prevent shifting. Without proper footings, the clay expansion and contraction cycle will gradually push posts out of plumb. Freestanding pergolas need four independent footings; attached pergolas anchor to the home\'s framing on one side and footings on the other. We handle all footing work as part of every pergola installation.',
      },
      {
        question: 'Will a pergola increase my home value?',
        answer: 'Yes. Outdoor living structures consistently rank among the top ROI home improvements. A well-built pergola that is proportioned to the home and integrated with the existing landscape typically adds 50–80% of its cost to home value at resale. More importantly, it dramatically increases the usability of your outdoor space, which is a primary selling point for Triangle-area homes where outdoor living is practical 8–9 months of the year.',
      },
    ],
    priceRange: '$5,000–$25,000+ depending on size, material, and features',
    commonIssues: [
      'Posts leaning due to shallow footings in expansive clay',
      'Wood cracking and splitting from UV and moisture cycling',
      'Undersized beams sagging under snow or ice load',
      'Improper attachment to home framing causing structural movement',
      'Mold and mildew buildup on untreated wood in humid seasons',
    ],
    seasonalNotes: 'Pergolas can be built year-round. Spring and fall installations are most popular because homeowners want shade before summer arrives. Plan in winter for a spring build — popular dates fill up fast.',
  },
  {
    slug: 'outdoor-lighting',
    comboSlug: 'outdoor-lighting',
    name: 'Outdoor Lighting',
    shortDescription: 'Professional landscape and deck lighting for safety, ambiance, and extended outdoor use.',
    description: 'Good outdoor lighting does two things at once: it makes your space safer and it makes it more inviting. A well-lit deck, patio, or walkway extends your evening hours outdoors by two to three months a year in the Triangle. We design lighting systems that layer ambient, task, and accent light — post cap LEDs for deck perimeters, recessed step lights for stair safety, spotlight trees or architectural features, and warm overhead string lights for dining areas. Every system runs on low-voltage LED transformers, which means dramatically lower energy costs compared to line voltage. We plan wire runs during construction so there are no visible cords, no surface-mounted conduit, and no afterthought look. When lighting is integrated during a deck or pergola build, we run wiring inside the structure itself for a completely clean installation.',
    heroHeading: 'Outdoor Lighting Installation in Holly Springs & the NC Triangle',
    metaTitle: 'Outdoor Lighting | Mission Decks & Design',
    metaDescription: 'Professional outdoor lighting for decks, patios & landscapes in Holly Springs, Apex, Cary & the Triangle. Safety & ambiance. Request a consultation.',
    image: '/images/services/pergola-outdoor-living-night.jpeg',
    features: [
      'Low-voltage LED systems with 50,000+ hour lifespan',
      'Deck post cap lights, recessed riser lights, and rail lighting',
      'Path lights for walkways and garden borders',
      'Uplighting for trees, architectural features, and landscaping',
      'String light installation with permanent mounting points',
      'Smart timers and photocell sensors for automatic on/off',
      'Hidden wire routing with no visible conduit or cords',
      'Integrated design during new deck and pergola construction',
    ],
    process: [
      { step: 1, title: 'Lighting Assessment', description: 'We walk your property at dusk to identify dark zones, safety concerns, and features worth highlighting. We discuss your priorities — security, ambiance, task lighting, or a combination.' },
      { step: 2, title: 'Design Plan', description: 'You receive a lighting layout showing fixture locations, wire runs, transformer placement, and the visual effect each zone creates. We use warm-white LEDs (2700K) that match the golden-hour feel your outdoor space deserves.' },
      { step: 3, title: 'Install', description: 'Fixtures are mounted, wires are routed through hidden channels, and transformers are connected. Most lighting installations complete in 1–2 days.' },
      { step: 4, title: 'Evening Reveal', description: 'We fine-tune fixture angles and brightness after dark so you see the final effect in real conditions. Adjustments are made on the spot until every zone looks right.' },
    ],
    faqs: [
      {
        question: 'How much does outdoor lighting cost for a typical deck or patio?',
        answer: 'A basic deck lighting package (post caps, step lights, transformer) typically runs $1,500–$3,500 installed. A comprehensive landscape and deck lighting system with path lights, uplighting, and string lights ranges from $4,000–$10,000+. The biggest factor is the number of fixtures and the length of wire runs. LED systems have very low operating costs — most residential setups cost $3–$8 per month in electricity. We provide fixture-by-fixture pricing so you can scale the project to your budget.',
      },
      {
        question: 'What is the difference between low-voltage and line-voltage outdoor lighting?',
        answer: 'Low-voltage systems run on 12V power through a transformer, making them safe to install, energy-efficient, and legal for non-electricians to work on in most jurisdictions. Line-voltage (120V) is what your house runs on — it requires a licensed electrician and is typically used for permanent flood lights or outlets. For deck, patio, and landscape lighting, low-voltage LED is the standard. It produces the same brightness with a fraction of the energy draw and generates almost no heat.',
      },
      {
        question: 'Can you add lighting to an existing deck without tearing it up?',
        answer: 'Yes. We install post cap lights that mount on top of existing railing posts, surface-mounted step lights that attach to riser faces, and rail-mounted strip lights that tuck under the top rail. Wire runs can be routed underneath the deck through the joist cavity and along posts with minimal visible hardware. It is not as seamless as wiring during initial construction, but the result is still clean and professional. If you are planning a railing upgrade, that is the ideal time to add integrated lighting.',
      },
      {
        question: 'How long do LED outdoor light fixtures last?',
        answer: 'Quality LED fixtures are rated for 50,000+ hours, which translates to roughly 15–20 years of typical evening use (6–8 hours per night). The transformer typically lasts 10–15 years. Unlike halogen bulbs that burn out and need replacement, LEDs gradually dim over their lifespan — you will not wake up to sudden dark spots. We use commercial-grade fixtures with sealed housings rated for direct ground contact and constant moisture exposure, which significantly outlast the hardware-store alternatives.',
      },
    ],
    priceRange: '$1,500–$10,000+ depending on scope and fixture count',
    commonIssues: [
      'Transformer undersized for the number of connected fixtures',
      'Wire connections corroding from moisture intrusion at splice points',
      'Fixtures aimed poorly, creating glare instead of ambiance',
      'Cheap fixtures failing within 1–2 years from UV degradation',
      'No timer or photocell, forcing manual on/off every evening',
    ],
    seasonalNotes: 'Lighting installations work year-round. Fall is popular because shorter days make homeowners notice how dark their outdoor spaces become. Adding lighting during a fall deck or pergola build is the most cost-effective approach.',
  },
  {
    slug: 'fencing-privacy',
    comboSlug: 'fencing-privacy',
    name: 'Fencing & Privacy Solutions',
    shortDescription: 'Durable fencing for privacy, safety, and style in wood, vinyl, and composite materials.',
    description: 'Privacy changes how you use your yard. Without it, the deck becomes a stage and the patio feels exposed. A well-designed fence or privacy screen turns your backyard into a room — a space where you relax without an audience. We build traditional wood privacy fences in cedar and pressure-treated pine, low-maintenance vinyl fencing that never needs staining, and composite privacy screens that integrate directly into deck structures. Our approach goes beyond running boards in a straight line. We consider sight lines from neighboring homes, HOA height restrictions, setback requirements, and how the fence interacts with existing landscaping and grading. On sloped lots — common throughout the Triangle — we use stepped or racked fence sections that follow the terrain cleanly rather than leaving awkward gaps at the bottom.',
    heroHeading: 'Fencing & Privacy Solutions in Holly Springs & the NC Triangle',
    metaTitle: 'Fencing & Privacy | Mission Decks & Design',
    metaDescription: 'Custom fencing and privacy solutions in Holly Springs, Apex, Cary & the Triangle. Wood, vinyl & composite materials. Request a consultation.',
    image: '/images/areas/deck-railing-stairs-porch.jpeg',
    features: [
      'Western Red Cedar and pressure-treated pine privacy fences',
      'Vinyl fencing in white, tan, and gray with lifetime color warranty',
      'Composite privacy screens integrated into deck structures',
      'Horizontal slat modern fence designs',
      'Stepped and racked sections for sloped lots',
      'Steel-reinforced posts with concrete footings',
      'Gate hardware rated for daily use with self-closing hinges',
      'HOA-compliant designs with pre-approval coordination',
    ],
    process: [
      { step: 1, title: 'Property Survey', description: 'We walk the fence line, identify property corners, discuss HOA rules, and note any grading challenges, trees, or utility easements that affect the layout.' },
      { step: 2, title: 'Material & Style Selection', description: 'You choose from material samples and fence styles. We provide a detailed estimate with per-linear-foot pricing, gate costs, and any grading work needed.' },
      { step: 3, title: 'Installation', description: 'Posts are set in concrete, rails are leveled, and pickets or panels are installed plumb and straight. We protect existing landscaping and leave the site clean.' },
      { step: 4, title: 'Final Inspection', description: 'We check every gate for smooth operation, verify all posts are plumb, and confirm the finished fence matches the approved design.' },
    ],
    faqs: [
      {
        question: 'What is the maximum fence height allowed in Holly Springs and Wake County?',
        answer: 'In most residential zones in Holly Springs and Wake County, backyard fences can be up to 6 feet tall without a variance. Front yard fences are typically limited to 4 feet. Some HOAs have stricter rules — certain communities in the Triangle require specific materials, colors, or maximum heights as low as 4 feet in backyards. We check your specific HOA guidelines and municipal code before designing your fence to avoid costly do-overs.',
      },
      {
        question: 'How long does a wood privacy fence last in North Carolina?',
        answer: 'A pressure-treated pine fence lasts 15–20 years with proper maintenance (staining every 2–3 years). Cedar fences last 20–25+ years because the wood naturally resists rot and insects, though it will gray over time without stain. Vinyl and composite fences last 25–30+ years with virtually no maintenance. The biggest enemy of wood fences in NC is ground contact moisture — we set every post in concrete above the soil line and use post caps to prevent water from wicking into the end grain.',
      },
      {
        question: 'Do I need to know my property lines before getting a fence?',
        answer: 'Yes, and this is critical. A fence built even 6 inches over the property line can trigger a legal dispute and forced removal. If you do not have a recent survey, we recommend getting one before construction — it typically costs $300–$500 and eliminates any guesswork. We work from survey pins or plats and set the fence 2–4 inches inside your property line as a buffer. This protects you legally and ensures you retain full ownership of the fence.',
      },
      {
        question: 'Can you build a privacy fence on a sloped yard?',
        answer: 'Absolutely — sloped lots are common in the Triangle, especially in newer subdivisions built on graded land. We use two methods: stepped fencing (panels drop in uniform steps following the slope, leaving small triangular gaps at the bottom) and racked fencing (the top and bottom rails follow the slope angle for a continuous look with no gaps). Racked is generally preferred for privacy since it eliminates gaps, but stepped creates a cleaner architectural look. We recommend the right approach based on your slope angle and aesthetic preference.',
      },
    ],
    priceRange: '$25–$65 per linear foot depending on material and height',
    commonIssues: [
      'Posts rotting at the base from ground contact moisture',
      'Fence leaning due to shallow post holes in clay soil',
      'Gate sagging from inadequate hinge hardware or post support',
      'Gaps at the bottom on sloped lots from improper installation method',
      'HOA rejection for non-compliant material or color choices',
    ],
    seasonalNotes: 'Fencing can be installed year-round in the Triangle. Spring is the busiest season — homeowners want privacy before summer outdoor living begins. Fall installations benefit from cooler working conditions and faster scheduling.',
  },
  {
    slug: 'porches-eze-breeze',
    comboSlug: 'porches-eze-breeze',
    name: 'Porches & Eze Breeze Windows',
    shortDescription: 'Screened and enclosed porches with Eze Breeze window systems for year-round outdoor comfort.',
    description: 'A screened porch is the most-used outdoor space in the Triangle. It solves the three biggest complaints about outdoor living in North Carolina: mosquitoes, pollen, and afternoon thunderstorms. A screen porch lets you sit outside from March through November without swatting, sneezing, or running indoors when the sky opens up. We build traditional screened porches with aluminum or fiberglass screening, and we install Eze Breeze vinyl window systems that convert a screened porch into a three-season (or nearly four-season) room. Eze Breeze panels slide open for airflow on mild days and close to block wind, rain, and pollen when conditions change. They are not the same as glass windows — they are flexible vinyl panels that are lighter, cheaper, and easier to operate, while still providing excellent weather protection. Combined with a ceiling fan and a portable heater, an Eze Breeze porch is comfortable from early March through late November in the Holly Springs area.',
    heroHeading: 'Porch Builder & Eze Breeze Windows in Holly Springs & the NC Triangle',
    metaTitle: 'Porches & Eze Breeze | Mission Decks & Design',
    metaDescription: 'Screened porches and Eze Breeze window installations in Holly Springs, Apex, Cary & the Triangle. Weather-protected outdoor rooms. Request a consultation.',
    image: '/images/services/screened-porch-horizontal-skirting.jpeg',
    features: [
      'Custom screened porches with aluminum or fiberglass mesh',
      'Eze Breeze sliding vinyl panel window systems',
      'Existing deck-to-porch conversions without full rebuild',
      'Tongue-and-groove beadboard or composite ceiling finishes',
      'Ceiling fan pre-wiring and electrical outlet installation',
      'Matching exterior trim and roofline integration with your home',
      'Foundation and structural upgrades for roof loads',
      'Insect-tight construction with sealed thresholds and trim gaps',
    ],
    process: [
      { step: 1, title: 'Evaluate Existing Structure', description: 'We assess whether your current deck or patio can support a roof structure, or if new footings and framing are needed. We measure the space and discuss how you plan to use the porch — dining, lounging, working from home, all of the above.' },
      { step: 2, title: 'Design & Engineering', description: 'You receive drawings showing roof pitch, post locations, screen or Eze Breeze panel layout, and interior details like ceiling material and fan placement. We ensure the roofline matches your home\'s existing architecture.' },
      { step: 3, title: 'Construction', description: 'Posts and beams go up first, followed by the roof structure, roofing material, and ceiling finish. Screens or Eze Breeze panels are installed last for a tight, clean fit. Typical construction is 2–4 weeks.' },
      { step: 4, title: 'Enjoy Your New Room', description: 'We demo the panels, show you how the Eze Breeze tracks operate, and confirm every screen is taut and every seal is tight. Then you pick a chair and sit down.' },
    ],
    faqs: [
      {
        question: 'What is the difference between Eze Breeze and regular screens?',
        answer: 'Regular screens keep bugs out but let everything else through — wind, rain, pollen, cold air. Eze Breeze panels are clear or tinted vinyl sheets that slide in aluminum tracks. When closed, they block 99% of wind and rain while still allowing some air exchange. When open, they slide up like a window for full ventilation. The practical difference is enormous: a screened porch is usable maybe 6 months a year in NC, while an Eze Breeze porch extends that to 9–10 months because you can close the panels during storms, cool evenings, and high-pollen spring days.',
      },
      {
        question: 'Can you convert my existing deck into a screened porch?',
        answer: 'In most cases, yes. The key question is whether your deck\'s footings and framing can support a roof structure. A porch roof adds significant weight and wind load that the original deck was not designed for. We assess the existing footings (depth and size), joist and beam sizing, and ledger attachment to determine what reinforcement is needed. Sometimes we can add supplemental posts and upgraded footings without rebuilding the deck surface. Other times a partial rebuild is more practical. We give you an honest assessment upfront.',
      },
      {
        question: 'How much does a screened porch with Eze Breeze windows cost?',
        answer: 'A screened porch addition on an existing deck typically runs $20,000–$40,000 depending on size and finish level. Adding Eze Breeze panels adds $3,000–$8,000 to the project depending on the number of openings and panel style (clear, tinted, vertical 4-track, or horizontal slider). A full new build including deck structure, roof, ceiling, screening, and Eze Breeze runs $35,000–$65,000+ for a 200–400 sq ft space. We provide detailed estimates broken down by phase so you can see exactly where the cost goes.',
      },
      {
        question: 'Does a screened porch need a building permit?',
        answer: 'Yes. Any roofed structure attached to a home requires a building permit in Wake County and all Triangle-area municipalities. The permit process covers structural adequacy (can the addition support the roof and wind loads), setback compliance (how close it is to property lines), and roofing integration (proper flashing and waterproofing where the new roof meets the existing house). We handle all permitting as part of the project — you do not need to visit the building department or manage inspections yourself.',
      },
    ],
    priceRange: '$20,000–$65,000+ depending on scope and Eze Breeze options',
    commonIssues: [
      'Roof leaks at the attachment point where porch meets house wall',
      'Sagging ceiling from insufficient rafter sizing for the span',
      'Screen tears from inadequate tension or pet damage',
      'Poor drainage around porch footings causing water intrusion',
      'Eze Breeze panels sticking in tracks from debris accumulation',
    ],
    seasonalNotes: 'Spring is prime time for porch construction — homeowners want their porch ready before mosquito season peaks in June. Fall builds are also popular to have the space enclosed before winter. Eze Breeze panels can be added to an existing screened porch anytime as a standalone upgrade.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getServiceByComboSlug(comboSlug: string): Service | undefined {
  return services.find(s => s.comboSlug === comboSlug);
}
