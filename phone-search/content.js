// All page copy, links and data live here. Edit this file, then run `node build.mjs`.
// Plain text only (the build escapes it). Compliance review: CR-8966
// (https://ltvco.atlassian.net/browse/CR-8966). Do not add scores, star ratings,
// "tested" / "we ranked" claims or pricing without Compliance sign-off.

export const LANDING = 'https://www.beenverified.com/lp/596a06/1/landing';

export const page = {
  title: 'Best reverse phone lookup sites of 2026',
  headerLogoAlt: 'BeenVerified phone search guide',
  // OPEN ITEM: hardcoded date.
  updated: 'Updated Oct 28, 2026',
  byline: 'By BeenVerified',
  subhead:
    "Seven reverse phone lookup services that can help you find out who's calling or texting, and what each one is best for.",
  searchNote: 'Searches run on BeenVerified. Not for FCRA-regulated purposes.',
  disclosure: {
    label: 'Advertiser disclosure',
    text: 'This guide is published by BeenVerified. BeenVerified and PeopleLooker are our brands, so we have a financial interest in them. We may also earn a commission from other services listed. Our picks are editorial and based on publicly available information about each service.',
  },
  searchPlaceholder: '(555) 555-1234',
  stickyBar: {
    label: "Know who's calling",
    powered: 'Powered by BeenVerified',
    button: 'Search a number',
  },
};

// Table of contents. `short` is the horizontal jump nav label, `label` the sidebar / dropdown label.
export const toc = [
  { id: 'picks', label: 'Top picks', short: 'Top picks' },
  { id: 'reviews', label: 'Full reviews', short: 'Reviews' },
  { id: 'compare', label: 'Compare features', short: 'Compare' },
  { id: 'guide-what-it-shows', label: 'How it works', short: 'How it works' },
  { id: 'guide-opt-out', label: 'Phone search guide', short: 'Guide' },
  { id: 'learn', label: 'Learn more', short: 'Learn' },
  { id: 'faq', label: 'FAQ', short: 'FAQ' },
];

// Order here is the rank (1-7). Other services link to homepages as placeholders;
// affiliate / tracking URLs will replace them. OPEN ITEM: competitor logos need legal approval.
export const services = [
  {
    id: 'beenverified',
    name: 'BeenVerified',
    logo: 'assets/beenverified.svg',
    href: LANDING,
    topPick: true,
    bestFor: 'Best for all-in-one search',
    picks: [
      'Search by phone, name, email, address or VIN in one membership',
      'Reports can include owner name, carrier and line type',
      'iOS and Android apps for lookups on the go',
    ],
    pros: [
      'Search by phone, name, email, address or VIN under one membership',
      "Phone reports can show the owner's name, carrier, line type and location when records exist",
      'Mobile app makes it easy to look up a number right after a missed call',
      'Reports link out to related people, past addresses and emails',
    ],
    cons: [
      'Standard plans cap reports each month',
      'Trial memberships renew automatically unless canceled',
      'Newer or prepaid mobile numbers can return limited results',
      'More data than you need if you only want caller ID',
    ],
    whoFor:
      'People who get unknown calls regularly and want more than a name: past addresses, related contacts and social profiles tied to a number.',
    whyPicked:
      'It covers landlines, mobile and VoIP numbers in one search, and the same membership unlocks people, email, address and vehicle searches, so one unknown number can lead to fuller context.',
    privacy:
      "Searches are confidential: the person you look up isn't notified. Anyone can request removal of their own record through BeenVerified's opt-out page.",
    // OPEN ITEM: feature table is from public sources and unverified for services other than BeenVerified.
    features: { owner: true, carrier: true, spam: true, app: true, phoneOnly: false },
  },
  {
    id: 'peoplelooker',
    name: 'PeopleLooker',
    logo: 'assets/peoplelooker.svg',
    href: 'https://www.peoplelooker.com',
    bestFor: 'Best for straightforward reports',
    picks: [
      'Clean, simple report layout for fast answers',
      'Phone, name and address search in one place',
      'Straightforward results with less clutter',
    ],
    pros: [
      'Clean, simple report layout that is easy to scan',
      'Phone, name and address searches in one place',
      'Fast results on most landline and mobile numbers',
    ],
    cons: [
      'Full reports require a paid membership',
      'Fewer extras than larger platforms',
      'No standalone phone-only plan',
    ],
    whoFor: 'People who want a simple answer to who called, without a lot of extra report sections.',
    whyPicked: 'Its reports are shorter and less cluttered than most competitors, which suits one-off lookups.',
    privacy: 'Searches are confidential. People can remove their own listing through the opt-out page.',
    features: { owner: true, carrier: true, spam: false, app: false, phoneOnly: false },
  },
  {
    id: 'spokeo',
    name: 'Spokeo',
    logo: 'assets/spokeo.png',
    href: 'https://www.spokeo.com',
    bestFor: 'Best value for frequent lookups',
    picks: [
      'Search by phone, email, name or address',
      'Free preview before you commit to a report',
      'Good for occasional, lower-volume lookups',
    ],
    pros: [
      'Affordable membership, with multi-month discounts',
      'Search by phone, email, name or address',
      'Free search shows a basic preview before you pay',
    ],
    cons: [
      'Reports are capped at a monthly limit',
      'PDF downloads require an add-on',
      'Results on newer mobile numbers can be thin',
    ],
    whoFor: 'Budget-minded people who check several numbers a month.',
    whyPicked: 'It offers one of the most affordable full people-search memberships, and phone searches are included.',
    privacy: 'Searches are confidential. Spokeo offers an opt-out form for your own listing.',
    features: { owner: true, carrier: true, spam: false, app: false, phoneOnly: false },
  },
  {
    id: 'truthfinder',
    name: 'TruthFinder',
    logo: 'assets/truthfinder.png',
    href: 'https://www.truthfinder.com',
    bestFor: 'Best phone-only plan',
    picks: [
      'Dedicated reverse-phone plan, separate from full membership',
      'Unlimited phone reports on that plan',
      'Optional people-search upgrade available',
    ],
    pros: [
      'Dedicated reverse phone plan available separately from the full membership',
      'Unlimited phone reports on that plan',
      'Optional people-search upgrade if you need more',
    ],
    cons: [
      'People search, email and PDFs are separate paid plans or add-ons',
      'Upsells appear throughout the search flow',
      'Phone plan does not include full background reports',
    ],
    whoFor: "People who only want to identify callers and don't need full reports.",
    whyPicked: 'Its phone-only plan is the cheapest paid way to run unlimited reverse lookups in this list.',
    privacy: 'Searches are confidential. TruthFinder and its sister sites each need a separate opt-out request.',
    features: { owner: true, carrier: true, spam: false, app: false, phoneOnly: true },
  },
  {
    id: 'intelius',
    name: 'Intelius',
    logo: 'assets/intelius.png',
    href: 'https://www.intelius.com',
    bestFor: 'Best for mixed landline and mobile',
    picks: [
      'Covers landline, mobile and VoIP numbers',
      'Can bundle phone and people search',
      'Large, long-running public-record base',
    ],
    pros: [
      'Covers landlines and mobile numbers',
      'Plans can be bundled by search type',
      'Long-running service with a large record base',
    ],
    cons: [
      'Plan tiers are confusing to compare',
      'More expensive than most picks',
      'PDF downloads require an add-on',
    ],
    whoFor: 'People who need both phone and address lookups in one plan.',
    whyPicked:
      'It pairs reverse phone with people search in a single tier, useful when a number leads to an address you also need to check.',
    privacy: 'Searches are confidential. Intelius offers an opt-out process for your own record.',
    features: { owner: true, carrier: true, spam: false, app: false, phoneOnly: false },
  },
  {
    id: 'whitepages',
    name: 'Whitepages Premium',
    logo: 'assets/whitepages.png',
    href: 'https://www.whitepages.com',
    bestFor: 'Best for caller ID and spam alerts',
    picks: [
      'Caller ID and spam-alert mobile app',
      'The longest-running name in phone directories',
      'Lighter weight than full background-report sites',
    ],
    pros: [
      'The longest-running name in phone directories',
      'Caller ID and spam-alert app',
      'Easy to get started with Premium',
    ],
    cons: [
      'Free results are very limited',
      'Background-style data requires an upgrade',
      'Less depth than full people-search sites',
    ],
    whoFor: 'People who mainly want to screen calls as they come in.',
    whyPicked:
      'Its app-first caller ID and spam warnings are the most practical option for blocking unwanted calls in real time.',
    privacy: 'Whitepages lets people suppress their own listing.',
    features: { owner: true, carrier: true, spam: true, app: true, phoneOnly: true },
  },
  {
    id: 'instantcheckmate',
    name: 'Instant Checkmate',
    logo: 'assets/instant-checkmate.png',
    href: 'https://www.instantcheckmate.com',
    bestFor: 'Best for add-on background reports',
    picks: [
      'Phone search hands off into fuller background reports',
      'Separate standalone reverse-phone plan available',
      'Clear, easy-to-follow report layout',
    ],
    pros: [
      'Detailed people reports alongside phone search',
      'Separate standalone phone plan',
      'Clear report layout',
    ],
    cons: [
      'Among the most expensive full memberships',
      'Premium reports are a separate purchase',
      'Phone plan is separate from the full membership',
    ],
    whoFor: "People who expect a phone lookup to turn into a fuller look at someone's public records.",
    whyPicked: "Its phone search hands off cleanly into longer reports when one number isn't enough context.",
    privacy: 'Searches are confidential. Opt-outs are handled separately from sister sites.',
    features: { owner: true, carrier: true, spam: false, app: false, phoneOnly: true },
  },
];

export const picksSection = {
  title: 'Our top picks at a glance',
  introBefore:
    'Seven services that can help identify an unknown caller, and what each is best for. See each full review below, or jump to a ',
  introLinkText: 'feature comparison',
  introLinkHref: '#compare',
  introAfter: '.',
  topPickTag: 'Our top pick',
  button: 'Visit site',
};

export const reviewsSection = {
  title: 'Full reviews: every service in detail',
  intro: 'The pros, cons, and who each service actually suits — for anyone who wants more than the quick summary above.',
  goTo: (name) => `Go to ${name}`,
  headings: {
    prosCons: 'The good and the bad',
    whoFor: "Who it's for",
    whyPicked: (name) => `Why we picked ${name}`,
    privacy: 'Privacy and opt-out',
  },
};

export const compareSection = {
  title: 'Compare features side by side',
  intro: 'Standard paid plan for each service.',
  columns: [
    { key: 'owner', label: 'Owner name' },
    { key: 'carrier', label: 'Carrier / line type' },
    { key: 'spam', label: 'Spam alerts' },
    { key: 'app', label: 'Mobile app' },
    { key: 'phoneOnly', label: 'Phone-only plan' },
  ],
  serviceHeader: 'Service',
};

export const howSection = {
  title: 'How reverse phone lookup works',
  intro: 'The short version, before you pay for a report.',
  cards: [
    {
      icon: 'phone',
      title: 'What a lookup tells you',
      text: "A lookup matches a number against public and commercially available records. Results can include the owner's name, carrier, line type, a general location and links to related records.",
    },
    {
      icon: 'shield',
      title: "What it usually can't",
      text: 'Prepaid and newly issued numbers often have little history. Spoofed calls display a fake number. No legitimate service shows live location or call logs.',
    },
    {
      icon: 'search',
      title: 'What to look for',
      text: 'Check whether phone searches are included or sold separately, how trials renew, whether reports are capped monthly and how easy it is to remove your own listing.',
    },
  ],
};

// Long-form guide. Block types: h2, p, h3, ul (items are strings or { b, t } for a bold lead-in), banner.
export const guide = {
  blocks: [
    { type: 'h2', text: "Getting a call from a number you don't recognize" },
    {
      type: 'p',
      text: "An unknown number can mean a lot of things: a missed delivery, a doctor's office, a recruiter — or a scam attempt. Most people's instinct is to either ignore it or Google the number and hope something useful turns up. A reverse phone search is built to close that gap faster, with more structured information than a search engine typically returns.",
    },
    {
      type: 'p',
      text: "Robocalls and spoofed numbers have made unknown calls harder to read at a glance, since the number on your screen doesn't always belong to the person or system actually calling. Knowing a number's history — whether it's tied to a real registered line, who it's associated with, and whether others have flagged it — gives you something concrete to act on instead of a guess.",
    },
    { type: 'h3', text: 'What reverse phone search tools actually do' },
    {
      type: 'p',
      text: 'These services search public records, carrier data, and other available sources to match a phone number with identifying information. Typical uses include:',
    },
    {
      type: 'ul',
      items: [
        'Identifying an unknown caller before calling back',
        'Checking a number that contacted you more than once',
        'Screening a number before you return a call or text',
        'Getting context on a missed call from an unfamiliar area code',
      ],
    },
    { type: 'h3', text: 'How a lookup works, step by step' },
    {
      type: 'ul',
      items: [
        { b: 'Enter the number', t: " into the service's search field" },
        { b: 'The service checks it', t: ' against public records, carrier data and other sources' },
        { b: 'Results are compiled', t: ' and shown, typically within seconds' },
      ],
    },
    {
      type: 'p',
      text: 'The level of detail varies by number: a long-standing registered line tends to return more than a newly issued or prepaid one.',
    },
    { type: 'banner', text: 'See what a reverse phone search can tell you about an unfamiliar number.' },
    { type: 'h3', text: 'Common features across these services' },
    { type: 'p', text: 'Features vary by provider, but most phone search services offer some version of:' },
    {
      type: 'ul',
      items: [
        { b: 'Caller identification', t: ' for unknown numbers' },
        { b: 'Line type detail', t: ' — mobile, landline or VoIP' },
        { b: 'Location information', t: ' tied to the number, where available' },
        { b: 'Linked names or records', t: ' associated with the number' },
        { b: 'Search history', t: ' so you can revisit past lookups' },
      ],
    },
    { type: 'h3', text: 'What to weigh when choosing a service' },
    {
      type: 'ul',
      items: [
        { b: 'Data coverage', t: ' — broader sources tend to mean more complete results' },
        { b: 'Ease of use', t: ' — a simple search flow with clear results' },
        { b: 'Privacy', t: ' — confidential searches and a real opt-out path for your own listing' },
        { b: 'How results are presented', t: ' — clear and specific, not vague or cluttered' },
      ],
    },
    { type: 'h3', text: 'Who tends to find this most useful' },
    { type: 'p', text: 'Phone search tools are broadly useful, but they come up most often for people who:' },
    {
      type: 'ul',
      items: [
        'Get frequent calls from unfamiliar numbers',
        'Want to check a number before calling it back',
        "Prefer to verify who's calling rather than guess",
      ],
    },
    { type: 'h3', text: 'Before you choose a service' },
    {
      type: 'p',
      text: 'Compare a few options against what matters most to you, and check what each one actually includes before you commit — coverage and report depth vary more than the marketing usually suggests.',
    },
  ],
};

export const closingBanner = {
  text: 'Ready to check a number? Run a confidential search with BeenVerified.',
};

export const learnSection = {
  title: 'Learn more about phone search and scam calls',
  intro: 'Trusted resources from regulators, plus our own guides.',
  readMore: 'Read more',
  // `accent` picks the card's top rule and label color: blue | purple | green. Internal links have no `external`.
  cards: [
    {
      accent: 'blue',
      label: 'FTC',
      title: 'Phone scams: how to recognize and avoid them',
      text: "Common scam scripts and what to do if you've been targeted.",
      href: 'https://consumer.ftc.gov/articles/phone-scams',
      external: true,
    },
    {
      accent: 'purple',
      label: 'FCC',
      title: 'Stop unwanted robocalls and texts',
      text: 'Carrier blocking tools, call labeling and how to file a complaint.',
      href: 'https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts',
      external: true,
    },
    {
      accent: 'green',
      label: 'DoNotCall.gov',
      title: 'National Do Not Call Registry',
      text: 'Register your number and report sales calls that ignore the list.',
      href: 'https://www.donotcall.gov/',
      external: true,
    },
    {
      accent: 'blue',
      label: 'FTC',
      title: 'Report fraud',
      text: 'Report a scam call so it can help investigators.',
      href: 'https://reportfraud.ftc.gov/',
      external: true,
    },
    {
      accent: 'purple',
      label: 'Guide',
      title: "What a reverse phone lookup can and can't tell you",
      text: 'Why some numbers return a full name and others return only a carrier.',
      href: '#guide-what-it-shows',
    },
    {
      accent: 'green',
      label: 'Guide',
      title: 'How to remove your number from people-search sites',
      text: 'Step-by-step opt-out links for every service on this list.',
      href: '#guide-opt-out',
    },
  ],
};

export const faqSection = {
  title: 'Frequently asked questions',
  items: [
    {
      q: 'Is reverse phone lookup legal?',
      a: "Yes. Looking up a phone number in public records is legal in the US. What you do with the result is regulated: these services can't be used to screen job applicants or tenants or to make credit or insurance decisions, because they aren't consumer reporting agencies under the FCRA.",
    },
    {
      q: 'Can I do a reverse phone lookup for free?',
      a: 'Partly. Free tools and carrier caller ID can often show a carrier, line type or spam label. Owner names, past addresses and related contacts usually need a paid report.',
    },
    {
      q: "Why didn't my search return a name?",
      a: "Prepaid, newly issued and VoIP numbers often have little public-record history. Spoofed numbers show a number that isn't the caller's real one, so any match may be unrelated.",
    },
    {
      q: 'Will the person know I looked up their number?',
      a: 'None of the services listed notify the person you search.',
    },
    {
      q: 'How do I remove my own number?',
      a: 'Each service has its own opt-out form, and sister sites often need separate requests. Our opt-out guide links to each one.',
    },
  ],
};

// Sidebar search card. "Confidential searches" and "Millions of public records" are
// Compliance-approved claims: do not change without sign-off.
export const sidebar = {
  title: "Who's calling or texting?",
  text: 'Find out who owns a number. Results may include name, carrier, location and linked records.',
  button: 'Search',
  claims: [
    { icon: 'check', text: 'Confidential searches' },
    { icon: 'check', text: 'Millions of public records' },
    { icon: 'shield', text: 'Not a consumer reporting agency' },
  ],
  powered: 'Powered by BeenVerified',
};

// Ownership statement and FCRA notice are required: do not remove without Compliance sign-off.
export const footer = {
  blurb: 'The BeenVerified phone search guide lists reverse phone lookup services, including our own, and what each one is best for.',
  columns: [
    {
      title: 'Guides',
      // OPEN ITEM: "Best phone search sites" has no destination yet.
      links: [
        { text: 'Best phone search sites', href: '#' },
        { text: 'What a lookup shows', href: '#guide-what-it-shows' },
        { text: 'Opt-out guide', href: '#guide-opt-out' },
      ],
    },
    {
      title: 'About',
      // OPEN ITEM: Privacy policy link is a placeholder.
      links: [
        { text: 'Advertiser disclosure', href: '#top' },
        { text: 'Privacy policy', href: '#' },
      ],
    },
  ],
  ownership: {
    label: 'Ownership:',
    text: ' This site is owned and operated by BeenVerified. BeenVerified and PeopleLooker are our brands. We may receive compensation from other services.',
  },
  fcra: {
    label: 'FCRA notice:',
    text: " None of the services listed are consumer reporting agencies as defined by the FCRA. Don't use information from them for employment, tenant screening, credit, insurance or any other FCRA-regulated purpose.",
  },
};
