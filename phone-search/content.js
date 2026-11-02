// All page copy, links and data live here. Edit this file, then run `node build.mjs`.
// Plain text only (the build escapes it). Compliance review: CR-8966
// (https://ltvco.atlassian.net/browse/CR-8966). Scores and order are our subjective opinion:
// never describe them as tested or as a methodology. No pricing, no negative statements about
// any service, and no changes to disclosure / ownership / FCRA text without Compliance sign-off.

export const LANDING = 'https://www.beenverified.com/lp/596a06/1/landing';

// The phone search forms skip the landing page: on submit, js/page.js opens this loading page
// with the typed number as `?phone=<base64 of the 10 digits>`
// (e.g. 6192774081 -> https://www.beenverified.com/lp/596a06/2/loading/2fa779?phone=NjE5Mjc3NDA4MQ==).
// Non-form links (sticky bar button, BeenVerified "Visit site") still use LANDING.
export const LOADING = 'https://www.beenverified.com/lp/596a06/2/loading/2fa779';

// OPEN ITEM: scores are placeholders. Each service's `score` is below; the label comes from these
// bands (first match wins) and the filled stars are floor(score / 2 + 0.5) out of 5.
export const scoreBands = [
  { min: 9.5, label: 'Outstanding' },
  { min: 9.0, label: 'Excellent' },
  { min: 8.5, label: 'Very good' },
  { min: 0, label: 'Good' },
];

export const page = {
  title: 'Best reverse phone lookup sites of 2026',
  headerLogoAlt: 'BestofThemAll',
  // OPEN ITEM: hardcoded date.
  updated: 'Updated Oct 28, 2026',
  byline: 'By BeenVerified',
  subhead:
    "Nine reverse phone lookup services that can help you find out who's calling or texting, and what each one is best for.",
  searchNote: 'Not for FCRA-regulated purposes.',
  // Expands in place from the hero link. Use exactly as written (CHANGES.md section 5).
  disclosure: {
    label: 'Advertiser disclosure',
    paragraphs: [
      'Many, but not all, of the websites listed on this page are owned and operated by our company, The Lifetime Value Co. We do not receive any third party referral fees for including listings on this page.',
      'Any opinions or recommendations expressed on this page are solely those of our company and are not influenced by any third party. Rankings are based on our subjective opinion alone. We do not feature all providers on the market.',
      'We cannot guarantee that all information provided is necessarily 100% complete, accurate or up to date. The information which appears on this site is subject to change at any time.',
    ],
  },
  searchPlaceholder: 'Enter Phone Number',
  // Shown under a search bar when the number isn't a valid 10-digit US number (same copy as the BeenVerified search).
  phoneError: 'Please enter a valid phone number, e.g. (212) 555-6789',
  stickyBar: {
    label: "Know who's calling",
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

// Order here is the rank (1-9). `ours: true` marks our four brands (links get rel="noopener";
// competitors get rel="nofollow noopener"; never "sponsored"). Competitor and ReversePhone /
// NumberGuru links are homepage placeholders. OPEN ITEM: competitor logos need legal approval;
// key features and table flags for services other than ours are from public sources, unverified.
export const services = [
  {
    id: 'beenverified',
    name: 'BeenVerified',
    logo: 'assets/beenverified.svg',
    href: LANDING,
    score: 9.8,
    ours: true,
    topPick: true,
    bestFor: 'Best for all-in-one search',
    picks: [
      'Search by phone, name, email, address or VIN in one membership',
      'Reports can include owner name, carrier and line type',
      'iOS and Android apps for lookups on the go',
    ],
    keyFeatures: [
      'Search by phone, name, email, address or VIN under one membership',
      "Phone reports can show the owner's name, carrier, line type and location when records exist",
      'Mobile app makes it easy to look up a number right after a missed call',
      'Reports link out to related people, past addresses and emails',
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
    score: 9.5,
    ours: true,
    bestFor: 'Best for straightforward reports',
    picks: [
      'Clean, simple report layout for fast answers',
      'Phone, name and address search in one place',
      'Straightforward results with less clutter',
    ],
    keyFeatures: [
      'Clean, simple report layout that is easy to scan',
      'Phone, name and address searches in one place',
      'Fast results on most landline and mobile numbers',
    ],
    whoFor: 'People who want a simple answer to who called, without a lot of extra report sections.',
    whyPicked: 'Its reports are shorter and less cluttered than most competitors, which suits one-off lookups.',
    privacy: 'Searches are confidential. People can remove their own listing through the opt-out page.',
    features: { owner: true, carrier: true, spam: false, app: false, phoneOnly: false },
  },
  {
    id: 'reversephone',
    name: 'ReversePhone',
    logo: 'assets/reversephone.png',
    href: 'https://www.reversephone.com', // placeholder: homepage
    score: 9.3,
    ours: true,
    bestFor: 'Best for focused phone lookups',
    picks: [
      'Reverse phone lookup with spam reports and person reports',
      'Focused on phone numbers, without extra search types',
      'iPhone and Android apps',
    ],
    keyFeatures: [
      'Reverse phone lookup to identify unknown callers',
      'Spam reports on numbers',
      "Person reports with more detail on a number's owner",
      'iPhone and Android apps',
    ],
    whoFor: "People who mainly want to identify a caller or text sender and don't need a broader people-search tool.",
    whyPicked: 'A phone-focused service with spam reporting and mobile apps. ReversePhone is one of our brands.',
    privacy: "Searches are confidential. See ReversePhone's privacy policy for how to manage your own information.",
    features: { owner: true, carrier: true, spam: true, app: true, phoneOnly: true },
  },
  {
    id: 'numberguru',
    name: 'NumberGuru',
    logo: 'assets/numberguru.png',
    href: 'https://www.numberguru.com', // placeholder: homepage
    score: 9.1,
    ours: true,
    bestFor: 'Best for caller ID and spam blocking',
    picks: [
      'Reverse phone and text lookup',
      'Caller ID and spam-blocking app for iPhone and Android',
      'Premium reports also cover people, email and property searches',
    ],
    keyFeatures: [
      'Reverse phone and text-message sender lookup',
      'Caller ID and spam blocking in its mobile app',
      'Premium reports for people, email and property searches',
      'Long-running phone lookup app, launched in 2011',
    ],
    whoFor: 'People who want caller ID and spam blocking in an app, with optional deeper reports when they need them.',
    whyPicked: 'A long-running phone lookup app with built-in spam blocking. NumberGuru is one of our brands.',
    privacy: 'Searches are confidential. NumberGuru offers an opt-out process for your own information; see its privacy policy.',
    features: { owner: true, carrier: true, spam: true, app: true, phoneOnly: false },
  },
  {
    id: 'spokeo',
    name: 'Spokeo',
    logo: 'assets/spokeo.png',
    href: 'https://www.spokeo.com',
    score: 9.0,
    ours: false,
    bestFor: 'Best value for frequent lookups',
    picks: [
      'Search by phone, email, name or address',
      'Free preview before you commit to a report',
      'Good for occasional, lower-volume lookups',
    ],
    keyFeatures: [
      'Affordable membership, with multi-month discounts',
      'Search by phone, email, name or address',
      'Free search shows a basic preview before you pay',
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
    score: 8.8,
    ours: false,
    bestFor: 'Best phone-only plan',
    picks: [
      'Dedicated reverse-phone plan, separate from full membership',
      'Unlimited phone reports on that plan',
      'Optional people-search upgrade available',
    ],
    keyFeatures: [
      'Dedicated reverse phone plan available separately from the full membership',
      'Unlimited phone reports on that plan',
      'Optional people-search upgrade if you need more',
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
    score: 8.7,
    ours: false,
    bestFor: 'Best for mixed landline and mobile',
    picks: [
      'Covers landline, mobile and VoIP numbers',
      'Can bundle phone and people search',
      'Large, long-running public-record base',
    ],
    keyFeatures: [
      'Covers landlines and mobile numbers',
      'Plans can be bundled by search type',
      'Long-running service with a large record base',
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
    score: 8.5,
    ours: false,
    bestFor: 'Best for caller ID and spam alerts',
    picks: [
      'Caller ID and spam-alert mobile app',
      'The longest-running name in phone directories',
      'Lighter weight than full background-report sites',
    ],
    keyFeatures: [
      'The longest-running name in phone directories',
      'Caller ID and spam-alert app',
      'Easy to get started with Premium',
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
    score: 8.4,
    ours: false,
    bestFor: 'Best for add-on background reports',
    picks: [
      'Phone search hands off into fuller background reports',
      'Separate standalone reverse-phone plan available',
      'Clear, easy-to-follow report layout',
    ],
    keyFeatures: [
      'Detailed people reports alongside phone search',
      'Separate standalone phone plan',
      'Clear report layout',
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
    'Nine services that can help identify an unknown caller, ranked by our own opinion (see the advertiser disclosure). See each full review below, or jump to a ',
  introLinkText: 'feature comparison',
  introLinkHref: '#compare',
  introAfter: '.',
  topPickTag: 'Our top pick',
  button: 'Visit site',
};

export const reviewsSection = {
  title: 'Full reviews: every service in detail',
  // CHANGES.md section 5 uses a comma here; design/desktop.html has an em dash. CHANGES.md wins.
  intro:
    'What each service offers, who it suits, and why we picked it, for anyone who wants more than the quick summary above.',
  goTo: (name) => `Go to ${name}`,
  headings: {
    keyFeatures: 'Key features',
    whoFor: "Who it's for",
    whyPicked: (name) => `Why we picked ${name}`,
    privacy: 'Privacy and opt-out',
  },
};

export const compareSection = {
  title: 'Compare features side by side',
  intro: 'Standard paid plan for each service.',
  scoreHeader: 'Score',
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

    // New in v2: three more sections, each after a thin divider. Compliance will review this wording.
    { type: 'hr' },
    { type: 'h2', text: 'Spotting and handling scam and spam calls' },
    {
      type: 'p',
      text: "Most unknown calls are harmless, but spam and scam calls are common enough that it helps to have a simple routine. Scammers often spoof the number on your screen, so a familiar-looking area code, or even a local number, doesn't prove a call is real.",
    },
    { type: 'h3', text: 'Common signs of a scam call' },
    {
      type: 'ul',
      items: [
        "Pressure to act right away, or a threat if you don't",
        'A request for payment by gift card, wire transfer, cryptocurrency or a payment app',
        'A request for passwords, PINs or one-time verification codes',
        "A caller claiming to be a government agency, bank or tech company you didn't contact",
        'An offer that sounds too good to be true',
      ],
    },
    { type: 'h3', text: 'What to do when an unknown number calls' },
    {
      type: 'ul',
      items: [
        'Let it go to voicemail. Real callers usually leave a message.',
        "Don't press numbers or say “yes” to a recorded message.",
        "Don't share personal or financial information. Hang up and call back using a number from the company's official website or your statement.",
        'Look up the number before you call back.',
      ],
    },
    { type: 'h3', text: 'Texts from unknown numbers' },
    {
      type: 'p',
      text: "The same rules apply to texts. Don't click links or reply to messages you didn't expect. In the US, you can forward unwanted texts to 7726 (SPAM) to report them to your carrier.",
    },
    { type: 'h3', text: 'Blocking and filtering unwanted calls' },
    {
      type: 'ul',
      items: [
        { b: 'iPhone:', t: " Settings > Phone > Silence Unknown Callers sends calls from numbers that aren't in your contacts to voicemail." },
        { b: 'Android:', t: " the Phone app's settings usually include caller ID and spam protection and a blocked-numbers list. Exact menus vary by phone." },
        { b: 'Your carrier:', t: " most major carriers offer free spam-blocking or call-labeling tools. Check your carrier's app or website." },
        { b: 'National Do Not Call Registry:', t: " registering at donotcall.gov reduces calls from legitimate telemarketers, but it won't stop scammers." },
      ],
    },
    { type: 'h3', text: 'Reporting scam calls' },
    {
      type: 'p',
      parts: [
        'You can report scam calls and texts to the FTC at ',
        { href: 'https://reportfraud.ftc.gov/', text: 'ReportFraud.ftc.gov' },
        '. Reports help investigators spot patterns.',
      ],
    },

    { type: 'hr' },
    { type: 'h2', text: 'Reverse phone lookup vs. caller ID apps' },
    {
      type: 'p',
      text: "Caller ID apps and built-in spam filters flag suspicious calls as they come in, often using reports from other users. A reverse phone lookup works differently: you search for a specific number and see what's available in public and commercial records, such as an owner's name, line type and location.",
    },
    {
      type: 'p',
      text: 'The two work well together. A spam label tells you to be careful, and a lookup can add context about who the number belongs to.',
    },

    { type: 'hr' },
    { type: 'h2', text: 'Managing your own number and information' },
    {
      type: 'p',
      text: 'People-search and phone lookup sites list information from public records, and most let you ask to have your own listing removed. Each site has its own opt-out process, and sister sites sometimes need separate requests.',
    },
    {
      type: 'p',
      text: "To remove your number from a site, look for an “opt-out” or “Do Not Sell My Personal Information” link in its footer. It's worth checking back after a few weeks, since listings can reappear when records are refreshed.",
    },
  ],
};

export const closingBanner = {
  text: 'Ready to check a number? Run a confidential search.',
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
    {
      q: 'Is a reverse phone lookup the same as caller ID?',
      a: "Not quite. Caller ID shows the name or number your carrier provides. A reverse phone lookup searches records for a number and may add details like an owner's name, line type or location.",
    },
    {
      q: 'Can I block a number after I look it up?',
      a: "Yes. You can block numbers in your phone's settings or through your carrier. Lookup services don't block calls themselves, though some apps include blocking tools.",
    },
    {
      q: 'What should I do if I get a text from an unknown number?',
      a: "Don't click links or reply with personal details. You can look up the number first, and forward unwanted texts to 7726 (SPAM) to report them to your carrier.",
    },
    {
      q: 'Why do calls show a number similar to mine?',
      a: "Scammers often “spoof” caller ID to show a number that looks local or familiar, sometimes called neighbor spoofing, so you're more likely to answer. The number shown may not belong to the caller.",
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
    text: ' Many, but not all, of the websites listed on this page are owned and operated by our company, The Lifetime Value Co. We do not receive any third party referral fees for including listings on this page. Rankings are based on our subjective opinion alone.',
  },
  fcra: {
    label: 'FCRA notice:',
    text: " None of the services listed are consumer reporting agencies as defined by the FCRA. Don't use information from them for employment, tenant screening, credit, insurance or any other FCRA-regulated purpose.",
  },
};
