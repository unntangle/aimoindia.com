/* ------------------------------------------------------------------
   Central content layer for aimoindia.com
   Editing copy, contacts, events or people? Do it here — not in JSX.
------------------------------------------------------------------- */

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const img = {
  heroConference: U("1540575467063-178a50c2df87"),
  heroFactory: U("1567789884554-0b844b597180"),
  heroPolicy: U("1600880292203-757bb62b4baf"),
  boardroom: U("1517048676732-d65bc937f952"),
  speaker: U("1531482615713-2afd69097998"),
  handshake: U("1552664730-d307ca884978"),
  engineers: U("1581091226825-a6a2a5aee158"),
  factoryFloor: U("1565793298595-6a879b1d9492"),
  precision: U("1581092160562-40aa08e78837"),
  womanEngineer: U("1573164713988-8665fc963095"),
  lectureHall: U("1524178232363-1fb2b075b655"),
  notes: U("1454165804606-c3d57bc86b40"),
  dataScreen: U("1516321318423-f06f85e504b3"),
  officeTeam: U("1556761175-b413da4baf72"),
  networking: U("1519389950473-47ba0277781c"),
  awards: U("1567427017947-545c5f8d16ad"),
  pressRoom: U("1560179707-f14e90ef3623"),
  mumbai: U("1529253355930-ddbe423a2ac7"),
  india: U("1587474260584-136574528ed5"),
  warehouse: U("1553413077-190dd305871c"),
  textile: U("1558618666-fcd25c85cd64"),
  pharma: U("1584308666744-24d5c474f2ae"),
  agri: U("1500382017468-9049fed747ef"),
  startup: U("1522071820081-009f0129c71c"),
  ports: U("1494412574643-ff11b0a5c1c3"),
};

export const site = {
  name: "All India Manufacturers' Organisation",
  short: "AIMO",
  tagline: "Prosperity through Industry",
  founded: 1941,
  founder: "Bharat Ratna Sir M. Visvesvaraya",
  description:
    "AIMO is the leading voice of Indian industry — a national body of Micro, Small and Medium Enterprises founded by Bharat Ratna Sir M. Visvesvaraya in 1941.",
  url: "https://www.aimoindia.com",
};

export const contact = {
  addressLines: [
    "Jeevan Sahakar, 4th Floor",
    "Sir P M Road, Fort",
    "Mumbai – 400 001",
  ],
  address: "Jeevan Sahakar, 4th Floor, Sir P M Road, Fort, Mumbai – 400 001",
  phones: ["+91 22 2261 5858", "+91 22 2261 5959"],
  emails: ["gs@aimoindia.com", "aimoindia@aimoindia.com"],
  hours: "Monday – Saturday · 10:00 AM – 6:00 PM IST",
  mapQuery: "Jeevan Sahakar Building, Sir P M Road, Fort, Mumbai 400001",
};

export const socials = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "X", href: "https://x.com", icon: "twitter" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
] as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about" },
      { label: "Our Founder", href: "/about/founder" },
      { label: "National Leadership", href: "/about/leadership" },
      { label: "Industry Representation", href: "/about#representation" },
      { label: "Government Relations", href: "/about#government" },
    ],
  },
  { label: "Membership", href: "/membership" },
  { label: "State Boards", href: "/state-boards" },
  { label: "AIMO Awards", href: "/awards" },
  {
    label: "Events",
    href: "/events",
    children: [
      { label: "Upcoming Events", href: "/events" },
      { label: "Past Events", href: "/events#past" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

/* ----------------------------- Hero slides ----------------------------- */

export const heroSlides = [
  {
    eyebrow: "Since 1941 · Founded by Sir M. Visvesvaraya",
    title: "The Leading Voice of Indian Industry",
    body: "For over eight decades AIMO has carried the concerns of India's manufacturers into the rooms where policy is written — from the first five-year plans to today's MSME reforms.",
    image: img.heroConference,
    cta: { label: "Become a Member", href: "/membership" },
    alt: "Delegates at a national industry convention",
  },
  {
    eyebrow: "51 Million MSMEs · One Organisation",
    title: "Where Small Enterprise Finds a Loud Voice",
    body: "Engineering, chemicals, pharma, food processing, textiles and services — AIMO members span every sector that keeps the Indian economy moving.",
    image: img.heroFactory,
    cta: { label: "Explore Membership Benefits", href: "/membership#benefits" },
    alt: "Skilled worker on a manufacturing shop floor",
  },
  {
    eyebrow: "Policy · Advocacy · Representation",
    title: "Bridging Government and the Shop Floor",
    body: "AIMO closes the last-mile gap between well-intentioned schemes and the entrepreneurs they were designed to serve.",
    image: img.heroPolicy,
    cta: { label: "Our Government Relations", href: "/about#government" },
    alt: "Industry representatives in a policy consultation",
  },
];

/* --------------------------- The three pillars -------------------------- */

export const pillars = [
  {
    icon: "graduation",
    title: "Educate",
    subtitle: "The Stakeholders",
    body: "Workshops, clinics and sector briefings that translate new technology, compliance and finance into language a promoter can act on this quarter.",
    href: "/events",
  },
  {
    icon: "chart",
    title: "Evaluate",
    subtitle: "The Global Situation",
    body: "Original research, member surveys and trade data — so that when AIMO speaks to government, it speaks with evidence rather than anecdote.",
    href: "/press",
  },
  {
    icon: "sparkles",
    title: "Evolve",
    subtitle: "The Next Generation",
    body: "Mentorship for second-generation promoters and new-age entrepreneurs who are rebuilding family enterprises around digital and green manufacturing.",
    href: "/about",
  },
];

/* -------------------------------- Stats -------------------------------- */

export const stats = [
  { value: "51 Mn", label: "MSME units across India" },
  { value: "117 Mn", label: "People employed — 40% of the workforce" },
  { value: "37%", label: "Share of national GDP" },
  { value: "43%", label: "Of India's total exports" },
];

/* ---------------------------- Featured event ---------------------------- */

export const featuredEvent = {
  eyebrow: "Upcoming Convention",
  title: "AIMO National Manufacturing Summit",
  date: "2026-11-19T09:30:00+05:30",
  dateLabel: "19–20 November 2026",
  dayBadge: { day: "19", month: "Nov" },
  venue: "Nehru Centre, Worli, Mumbai",
  body: "Two days on the themes that will decide the next decade of Indian manufacturing: export competitiveness after the new trade agreements, credit access beyond collateral, energy costs, and the skills pipeline. Ministers, bankers, buyers and 900 promoters in one room.",
  image: img.speaker,
  highlights: [
    "12 sector round-tables with policy-makers",
    "Curated buyer–supplier matchmaking desk",
    "Bank and NBFC credit clinic for members",
  ],
};

/* ---------------------------- Leadership team --------------------------- */

export const leaders = [
  {
    name: "Shri Rajiv Ranjan",
    role: "National President",
    city: "New Delhi",
    email: "president@aimoindia.com",
    phone: "+91 98731 05778",
  },
  {
    name: "Shri Sudhir Jha",
    role: "National Convenor",
    city: "New Delhi",
    email: "aimoindia@aimoindia.com",
    phone: "+91 88009 04780",
  },
  {
    name: "Shri Veerendra Kumar Singh",
    role: "National Vice President",
    city: "Uttar Pradesh",
    email: "aimoindia@aimoindia.com",
    phone: "+91 98101 56751",
  },
  {
    name: "Shri R. Radhakrishnan",
    role: "National General Secretary",
    city: "Chennai",
    email: "gs@aimoindia.com",
    phone: "+91 98409 44318",
  },
];

/* ------------------------------ Events grid ----------------------------- */

export const eventGallery = [
  {
    title: "MSME Policy Conclave",
    meta: "New Delhi · Feb 2026",
    image: img.boardroom,
  },
  {
    title: "Export Readiness Workshop",
    meta: "Coimbatore · Jan 2026",
    image: img.warehouse,
  },
  {
    title: "Young Entrepreneurs Forum",
    meta: "Bengaluru · Dec 2025",
    image: img.networking,
  },
  {
    title: "AIMO Excellence Awards Night",
    meta: "Mumbai · Nov 2025",
    image: img.awards,
  },
];

/* --------------------------- Membership tiers --------------------------- */

export const membershipTiers = [
  {
    name: "Associate",
    price: "₹ 6,000",
    cadence: "per year",
    for: "Micro units, proprietorships and start-ups",
    featured: false,
    features: [
      "State Board membership & voting rights",
      "Access to all AIMO webinars",
      "Monthly policy digest",
      "Listing in the member directory",
      "Credit & compliance helpdesk",
    ],
  },
  {
    name: "Corporate",
    price: "₹ 18,000",
    cadence: "per year",
    for: "Small and medium manufacturers and service MSMEs",
    featured: true,
    features: [
      "Everything in Associate",
      "Delegate passes to national conventions",
      "Sector round-table participation",
      "Buyer–supplier matchmaking access",
      "Eligibility for AIMO Awards",
      "Named representation in submissions",
    ],
  },
  {
    name: "Patron",
    price: "₹ 60,000",
    cadence: "per year",
    for: "Large enterprises and industry groups",
    featured: false,
    features: [
      "Everything in Corporate",
      "Seat on a national sub-committee",
      "Co-branding on AIMO research",
      "Priority speaking opportunities",
      "Direct access to the Secretariat",
    ],
  },
];

export const memberBenefits = [
  {
    icon: "cpu",
    title: "Exposure to New Tech Trends",
    body: "The MSME sector cannot afford to meet automation, AI and digital compliance for the first time when a customer demands it. AIMO brings the trends to you early.",
  },
  {
    icon: "landmark",
    title: "A Voice in Public Policy",
    body: "AIMO makes mature, evidence-led representations to ministries and regulators — and names the members whose experience shaped them.",
  },
  {
    icon: "book",
    title: "Knowledge and Learning",
    body: "Continuous improvement of professional skill is what separates a surviving unit from a scaling one. Our calendar is built around that.",
  },
  {
    icon: "users",
    title: "Building Business Networks",
    body: "Thousands of promoters across every state. Some become mentors, some become customers, some become the partner you needed for a tender.",
  },
  {
    icon: "chart",
    title: "Access to Research and Data",
    body: "We partner academic and management institutes to produce sector studies that members can actually use in a board meeting.",
  },
  {
    icon: "award",
    title: "Rewards and Recognition",
    body: "Active, performing members get industry recognition and media exposure through the AIMO Awards and our press platform.",
  },
];

export const enrolSteps = [
  { step: "01", title: "Download the form", body: "Fill in your personal and enterprise details on the AIMO membership application." },
  { step: "02", title: "Choose your chapter", body: "Select the State Board or regional chapter closest to your unit." },
  { step: "03", title: "Pick a category", body: "Associate, Corporate or Patron — based on the scale of your enterprise." },
  { step: "04", title: "Pay and confirm", body: "Settle the fee by RTGS or the online gateway and receive an email acknowledgement." },
  { step: "05", title: "Approval", body: "Your State Board and the National Governing Council approve the application." },
  { step: "06", title: "Welcome aboard", body: "You receive your membership number and docket, and your listing goes live." },
];

/* ------------------------------ State boards ---------------------------- */

export const stateBoards = [
  { state: "Maharashtra", city: "Mumbai", note: "National headquarters & Western region" },
  { state: "Tamil Nadu", city: "Chennai", note: "Engineering, auto components, textiles" },
  { state: "Karnataka", city: "Bengaluru", note: "Machine tools, electronics, aerospace" },
  { state: "Delhi NCR", city: "New Delhi", note: "Policy liaison & northern region" },
  { state: "Gujarat", city: "Ahmedabad", note: "Chemicals, pharma, ceramics" },
  { state: "Uttar Pradesh", city: "Lucknow", note: "Leather, food processing, handicraft" },
  { state: "West Bengal", city: "Kolkata", note: "Foundry, jute and eastern region" },
  { state: "Telangana", city: "Hyderabad", note: "Pharma, life sciences, precision" },
  { state: "Kerala", city: "Kochi", note: "Marine products, rubber, spices" },
  { state: "Punjab", city: "Ludhiana", note: "Bicycle parts, hosiery, hand tools" },
  { state: "Rajasthan", city: "Jaipur", note: "Stone, gems, textiles" },
  { state: "Madhya Pradesh", city: "Indore", note: "Auto components, agri processing" },
];

/* -------------------------------- Awards -------------------------------- */

export const awardCategories = [
  { title: "Manufacturer of the Year", body: "The unit that best combined growth, quality and employment creation over the assessment year." },
  { title: "Export Excellence", body: "For members who opened new geographies or grew export revenue against a difficult market." },
  { title: "Green Manufacturing", body: "Measurable reduction in energy, water or waste intensity without loss of output." },
  { title: "Digital Transformation", body: "Meaningful adoption of automation, ERP or data-led decision-making on the shop floor." },
  { title: "Woman Entrepreneur", body: "Recognising women promoters building and scaling manufacturing enterprises." },
  { title: "Young Entrepreneur", body: "Under-40 promoters who have taken a family unit or a start-up to a new level." },
];

/* --------------------------- Press / news items -------------------------- */

export const news = [
  {
    title: "AIMO urges rationalised GST slabs for capital goods used by micro units",
    excerpt:
      "In a pre-budget submission, the organisation argued that inverted duty structures continue to trap working capital in exactly the enterprises least able to absorb it.",
    date: "12 Jun 2026",
    category: "Policy",
    author: "AIMO Secretariat",
    image: img.notes,
    slug: "gst-capital-goods-submission",
  },
  {
    title: "Credit clinics reach 4,200 promoters across eleven state boards",
    excerpt:
      "The joint programme with public sector banks has moved from awareness to sanction, with a measurable rise in collateral-free lending among participants.",
    date: "28 May 2026",
    category: "Members",
    author: "AIMO Secretariat",
    image: img.handshake,
    slug: "credit-clinics-2026",
  },
  {
    title: "Why the services MSME is India's quietest growth engine",
    excerpt:
      "Services now contribute 58% of GDP against 33% in the 1950s. AIMO's latest note examines what that shift means for a country still organised around factory-era policy.",
    date: "07 May 2026",
    category: "Research",
    author: "AIMO Research Desk",
    image: img.dataScreen,
    slug: "services-msme-growth-engine",
  },
];

/* ----------------------------- Focus sectors ---------------------------- */

export const sectors = [
  "Engineering & Machine Tools",
  "Chemicals & Petrochemicals",
  "Pharmaceuticals",
  "Food Processing",
  "Textiles & Apparel",
  "Auto Components",
  "Electronics & Electricals",
  "Services MSMEs",
];

/* ------------------------------- Gallery -------------------------------- */

export const gallery = [
  { src: img.boardroom, caption: "National Governing Council session, Mumbai" },
  { src: img.speaker, caption: "Keynote at the Manufacturing Summit" },
  { src: img.factoryFloor, caption: "Member unit visit — precision engineering" },
  { src: img.networking, caption: "Young Entrepreneurs Forum, Bengaluru" },
  { src: img.lectureHall, caption: "Export readiness workshop" },
  { src: img.womanEngineer, caption: "Women in Manufacturing initiative" },
  { src: img.awards, caption: "AIMO Excellence Awards" },
  { src: img.handshake, caption: "MoU signing with a partner institute" },
  { src: img.precision, caption: "Shop-floor automation clinic" },
  { src: img.officeTeam, caption: "State Board coordination meeting" },
  { src: img.warehouse, caption: "Logistics and warehousing round-table" },
  { src: img.india, caption: "Regional chapter outreach" },
];

/* ------------------------------ Testimonials ---------------------------- */

export const testimonials = [
  {
    quote:
      "We had been told for years that collateral-free credit existed. It took one AIMO clinic and a follow-up call from the Secretariat for it to actually reach our balance sheet.",
    name: "Managing Director",
    org: "Auto component unit, Pune",
  },
  {
    quote:
      "As a second-generation promoter I did not want to run my father's factory the way he had to. The mentorship network here gave me people who had already made that transition.",
    name: "Director",
    org: "Precision engineering, Coimbatore",
  },
  {
    quote:
      "AIMO put our objection on inverted duty into a written submission with data behind it. That is a very different thing from a complaint.",
    name: "Proprietor",
    org: "Chemical processing, Vadodara",
  },
];
