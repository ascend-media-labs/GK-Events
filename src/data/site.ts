import hero from "@/assets/hero-stage.jpg";
import wedding from "@/assets/wedding.jpg";
import corporate from "@/assets/corporate.jpg";
import equipment from "@/assets/equipment.jpg";
import camera from "@/assets/camera.jpg";

export const images = { hero, wedding, corporate, equipment, camera };

// Placeholder contact details — replace with the real ones.
export const contact = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919876543210",
  email: "hello@gkevents.in",
  city: "Your City, India",
  hours: "Open 7 days · 8 AM – 10 PM",
};

export const waLink = (msg = "Hi GK Events, I'd like a quote for my event.") =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;

export type NavItem = { to: string; label: string };
export const mainNav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/equipment", label: "Equipment" },
  { to: "/wedding-events", label: "Weddings" },
  { to: "/corporate-events", label: "Corporate" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];
export const serviceNav: NavItem[] = [
  { to: "/sound-system-rental", label: "Sound Systems" },
  { to: "/led-wall-rental", label: "LED Walls & Screens" },
  { to: "/led-tv-rental", label: "LED TV Rental" },
  { to: "/projector-rental", label: "Projectors & Screens" },
  { to: "/photography", label: "Photography" },
  { to: "/videography", label: "Videography" },
  { to: "/live-streaming", label: "Live Streaming" },
  { to: "/event-solutions", label: "Other Event Solutions" },
];

export type Item = { name: string; desc: string };
export type ServiceData = {
  eyebrow: string;
  title: string;
  highlight: string;
  intro: string;
  image: string;
  itemsTitle: string;
  items: Item[];
  solutions: Item[];
  process: string[];
  faqs: { q: string; a: string }[];
};

const stdProcess = ["Share your event details", "Site visit & tech plan", "Transparent quote", "Delivery, setup & testing", "On-site technician support"];

export const services: Record<string, ServiceData> = {
  sound: {
    eyebrow: "Sound System Rental", title: "Sound that fills", highlight: "every corner.",
    intro: "Line arrays, subwoofers, digital consoles and wireless mics — tuned by engineers for crystal-clear speech and powerful music.",
    image: equipment, itemsTitle: "Available sound equipment",
    items: [
      { name: "Line Array Systems", desc: "Even, long-throw coverage for large venues and outdoor crowds." },
      { name: "Professional Speakers", desc: "Full-range tops for halls, lawns and banquets." },
      { name: "Subwoofers", desc: "Deep, controlled low end for music and DJ nights." },
      { name: "Digital Mixers & Consoles", desc: "Multi-channel consoles with scene recall and effects." },
      { name: "Wireless Microphones", desc: "Handheld, lapel and headset UHF systems." },
      { name: "Wired Microphones", desc: "Stage, podium and instrument mics." },
      { name: "Monitor Speakers", desc: "Stage wedges so performers hear themselves clearly." },
      { name: "DJ Audio Systems", desc: "Decks, controllers and club-grade speakers." },
      { name: "Conference Audio", desc: "Delegate mic systems and ceiling coverage." },
    ],
    solutions: [
      { name: "Weddings", desc: "Sangeet, baraat, pheras and reception — clear vows, big dance floors." },
      { name: "Corporate Events", desc: "Intelligible speech for keynotes, panels and award nights." },
      { name: "Concerts", desc: "Touring-grade rigs with FOH and monitor engineers." },
      { name: "Outdoor Events", desc: "Weather-ready rigs with even coverage across lawns." },
      { name: "Indoor Events", desc: "Acoustically tuned systems for halls and ballrooms." },
    ],
    process: stdProcess,
    faqs: [
      { q: "Do you provide a sound engineer?", a: "Yes. Every sound rental includes a trained technician for setup, sound check and live operation." },
      { q: "How early do you set up?", a: "We usually arrive 3–5 hours before the event to install, tune and test." },
      { q: "Can you handle outdoor weddings?", a: "Yes, we bring power distribution, covers and line array systems built for outdoor coverage." },
    ],
  },
  led: {
    eyebrow: "LED Wall & Screen Rental", title: "Big, bright", highlight: "LED walls.",
    intro: "Seamless indoor and outdoor LED walls in custom sizes, with processors, content playback and live camera feeds.",
    image: hero, itemsTitle: "LED display categories",
    items: [
      { name: "Indoor LED Walls", desc: "Fine pixel pitch for close viewing in halls and ballrooms." },
      { name: "Outdoor LED Walls", desc: "High-brightness, weather-resistant panels for daylight." },
      { name: "Stage LED Screens", desc: "Backdrops and side screens for performances." },
      { name: "Conference LED Screens", desc: "Sharp presentations and speaker IMAG." },
      { name: "Wedding LED Displays", desc: "Custom visuals, couple montages and live feeds." },
      { name: "Concert LED Screens", desc: "Large-format walls synced with lighting." },
      { name: "Digital Signage", desc: "Branding and wayfinding for exhibitions." },
    ],
    solutions: [
      { name: "Custom Sizes", desc: "From 8×6 ft to stage-wide walls, built to your venue." },
      { name: "Content Playback", desc: "Media servers, switchers and operators included." },
      { name: "Live Camera Feed", desc: "Show the stage to every seat in the house." },
    ],
    process: stdProcess,
    faqs: [
      { q: "What sizes are available?", a: "We build modular walls in almost any size, depending on venue and viewing distance." },
      { q: "Will it work in daylight?", a: "Our outdoor panels are high-brightness and readable in direct daylight." },
    ],
  },
  tv: {
    eyebrow: "LED TV Rental", title: "LED TVs for", highlight: "every setup.",
    intro: "43\" to 98\" 4K LED TVs with floor stands, wall mounts and media players — perfect for exhibitions, offices and weddings.",
    image: equipment, itemsTitle: "TV sizes & options",
    items: [
      { name: "43\" – 55\" LED TVs", desc: "Ideal for booths, registration desks and lounges." },
      { name: "65\" – 75\" 4K TVs", desc: "Presentations, video walls and conference rooms." },
      { name: "85\" – 98\" Large TVs", desc: "Big-impact displays without an LED wall." },
      { name: "Floor Stands & Mounts", desc: "Portable stands, trolleys and wall brackets." },
      { name: "Media Players", desc: "USB, HDMI and looping playback for content." },
      { name: "Video Wall Setups", desc: "Multi-TV arrays for exhibitions and lobbies." },
    ],
    solutions: [
      { name: "Exhibitions", desc: "Product videos and live demos at your stall." },
      { name: "Corporate", desc: "Boardrooms, trainings and live dashboards." },
      { name: "Weddings", desc: "Photo slideshows and live feeds for guests." },
    ],
    process: stdProcess,
    faqs: [{ q: "Do you deliver and install?", a: "Yes — delivery, mounting, cabling and testing are included." }],
  },
  projector: {
    eyebrow: "Projector & Screen Rental", title: "Crisp projection,", highlight: "any scale.",
    intro: "HD and 4K projectors from 3,500 to 20,000+ lumens, with fast-fold, tripod and custom screens.",
    image: corporate, itemsTitle: "Projection equipment",
    items: [
      { name: "HD Projectors", desc: "Bright, reliable projectors for meetings and seminars." },
      { name: "4K & Laser Projectors", desc: "High-lumen projectors for large halls." },
      { name: "Short-Throw Projectors", desc: "Big images in tight spaces." },
      { name: "Fast-Fold Screens", desc: "Front and rear projection, up to 20 ft." },
      { name: "Tripod Screens", desc: "Portable screens for training rooms." },
      { name: "Projection Mapping", desc: "Immersive visuals on stages and buildings." },
    ],
    solutions: [
      { name: "Conferences", desc: "Dual-screen setups with switchers and clickers." },
      { name: "Schools & Trainings", desc: "Simple, portable kits delivered ready to go." },
      { name: "Movie Nights", desc: "Outdoor screenings with sound." },
    ],
    process: stdProcess,
    faqs: [{ q: "How many lumens do I need?", a: "It depends on room light and screen size — we'll recommend the right projector after a quick chat." }],
  },
  photo: {
    eyebrow: "Photography Services", title: "Moments, framed", highlight: "forever.",
    intro: "Candid, traditional and corporate photography by an experienced team, delivered as edited galleries and premium albums.",
    image: wedding, itemsTitle: "Photography services",
    items: [
      { name: "Wedding Photography", desc: "Candid and traditional coverage of every ritual." },
      { name: "Pre-Wedding Shoots", desc: "Styled, story-driven couple sessions." },
      { name: "Corporate Photography", desc: "Conferences, headshots and product launches." },
      { name: "Event Photography", desc: "Birthdays, anniversaries and private parties." },
      { name: "Drone Photography", desc: "Aerial views of venues and celebrations." },
      { name: "Premium Albums", desc: "Hand-finished albums and digital galleries." },
    ],
    solutions: [
      { name: "Candid", desc: "Natural emotions, unposed." },
      { name: "Traditional", desc: "Family portraits and rituals, nothing missed." },
      { name: "Fast Delivery", desc: "Sneak peeks within 48 hours." },
    ],
    process: ["Discuss your vision", "Plan shot list", "Event coverage", "Editing & retouching", "Gallery & album delivery"],
    faqs: [{ q: "When do we get photos?", a: "Sneak peeks within 48 hours; the full edited gallery in 2–4 weeks." }],
  },
  video: {
    eyebrow: "Videography & Cinematic Films", title: "Films that feel", highlight: "like cinema.",
    intro: "Cinematic wedding films, corporate videos and highlight reels shot on cinema cameras, gimbals and drones.",
    image: camera, itemsTitle: "Videography services",
    items: [
      { name: "Cinematic Wedding Films", desc: "Story-led films with music and colour grading." },
      { name: "Highlight Reels", desc: "Short, shareable edits for social media." },
      { name: "Corporate Videos", desc: "Brand films, testimonials and event recaps." },
      { name: "Drone Videography", desc: "Sweeping aerial shots." },
      { name: "Multi-Camera Coverage", desc: "Full-length recordings from several angles." },
      { name: "Same-Day Edits", desc: "A film screened at your reception." },
    ],
    solutions: [
      { name: "Weddings", desc: "Every ritual, every emotion." },
      { name: "Brands", desc: "Launches and promotional content." },
      { name: "Social", desc: "Reels formatted for Instagram and YouTube." },
    ],
    process: ["Creative brief", "Storyboard & schedule", "Shoot", "Edit, music & grading", "Delivery in 4K"],
    faqs: [{ q: "Do you shoot in 4K?", a: "Yes, all films are shot and delivered in 4K." }],
  },
  stream: {
    eyebrow: "Live Streaming Services", title: "Go live,", highlight: "worldwide.",
    intro: "Multi-camera live streaming to YouTube, Facebook, Zoom and private links, with graphics, switching and backup internet.",
    image: camera, itemsTitle: "Streaming solutions",
    items: [
      { name: "Wedding Live Streams", desc: "Let family abroad join every moment." },
      { name: "Corporate Webcasts", desc: "Town halls, AGMs and product launches." },
      { name: "Hybrid Conferences", desc: "Zoom/Teams integration with in-room AV." },
      { name: "Religious Events", desc: "Pujas, satsangs and festivals streamed live." },
      { name: "Multi-Camera Switching", desc: "Professional vision mixing and graphics." },
      { name: "Backup Connectivity", desc: "Bonded 4G/5G and dedicated lines." },
    ],
    solutions: [
      { name: "YouTube & Facebook", desc: "Public or unlisted streams." },
      { name: "Zoom & Teams", desc: "Two-way hybrid sessions." },
      { name: "Private Links", desc: "Password-protected viewing pages." },
    ],
    process: ["Platform & audience planning", "Network test", "Camera & audio setup", "Live production", "Recording delivered"],
    faqs: [{ q: "What if the internet drops?", a: "We use bonded backup connections and record locally, so nothing is lost." }],
  },
  wedding: {
    eyebrow: "Wedding Event Solutions", title: "Your wedding,", highlight: "brilliantly produced.",
    intro: "Sound, LED walls, lighting, photography, films and live streaming — one team for every function from haldi to reception.",
    image: wedding, itemsTitle: "Wedding services",
    items: [
      { name: "Sangeet & Mehendi Sound", desc: "DJ rigs and dance-floor lighting." },
      { name: "Stage LED Backdrops", desc: "Custom visuals behind the mandap or stage." },
      { name: "Wedding Lighting", desc: "Warm washes, uplighters and moving heads." },
      { name: "Photography & Films", desc: "Candid photos and cinematic films." },
      { name: "Live Streaming", desc: "Share the ceremony with loved ones anywhere." },
      { name: "Reception Production", desc: "Entry effects, screens and sound." },
    ],
    solutions: [
      { name: "Single Point of Contact", desc: "One coordinator for all technology." },
      { name: "Multi-Day Events", desc: "Setups moved and reconfigured overnight." },
      { name: "Destination Weddings", desc: "We travel with our full kit." },
    ],
    process: stdProcess,
    faqs: [{ q: "Can you cover all wedding functions?", a: "Yes, we plan AV for each function and can bundle them into one package." }],
  },
  corporate: {
    eyebrow: "Corporate Event Solutions", title: "Events that", highlight: "mean business.",
    intro: "Conferences, launches, award nights and AGMs delivered with flawless AV, staging and broadcast-grade production.",
    image: corporate, itemsTitle: "Corporate services",
    items: [
      { name: "Conference AV", desc: "Podium mics, delegate systems and confidence monitors." },
      { name: "Product Launches", desc: "Reveal moments with LED, lighting and sound." },
      { name: "Award Nights", desc: "Stage design, show calling and walk-in music." },
      { name: "Exhibitions", desc: "Booth TVs, LED walls and audio." },
      { name: "Hybrid Meetings", desc: "Streaming and remote presenter integration." },
      { name: "Event Recording", desc: "Multi-camera recording and photography." },
    ],
    solutions: [
      { name: "Show Calling", desc: "Run-of-show managed by our producer." },
      { name: "Brand Consistency", desc: "Content formatted to your brand." },
      { name: "On-Time Delivery", desc: "Rehearsals before doors open." },
    ],
    process: stdProcess,
    faqs: [{ q: "Do you provide GST invoices?", a: "Yes, we provide proper GST invoices for corporate clients." }],
  },
  other: {
    eyebrow: "Other Event Solutions", title: "Everything else", highlight: "your event needs.",
    intro: "Stage lighting, trussing, power backup, special effects and more — the extras that make the day complete.",
    image: hero, itemsTitle: "Additional solutions",
    items: [
      { name: "Stage Lighting", desc: "Moving heads, pars, beams and DMX control." },
      { name: "Truss & Staging", desc: "Truss structures, stages and ramps." },
      { name: "Special Effects", desc: "Cold pyros, CO₂ jets, fog and confetti." },
      { name: "Power Backup", desc: "Silent generators and distribution." },
      { name: "DJ & Entertainment", desc: "DJs, anchors and performers." },
      { name: "Concerts & Festivals", desc: "Full production for live shows." },
    ],
    solutions: [
      { name: "Birthdays & Parties", desc: "Compact party packages." },
      { name: "Religious Festivals", desc: "Ganesh Chaturthi, Navratri and more." },
      { name: "College Fests", desc: "Stages, sound and lights for big crowds." },
    ],
    process: stdProcess,
    faqs: [{ q: "Can you create a custom package?", a: "Absolutely — tell us your event and budget and we'll put it together." }],
  },
};

export const equipmentCatalog = [
  { cat: "Sound", name: "Professional Sound Systems", desc: "Line arrays and full-range PA for any crowd size.", use: "Weddings, concerts", to: "/sound-system-rental" },
  { cat: "Sound", name: "Wireless Microphones", desc: "Handheld, lapel and headset UHF systems.", use: "Conferences, weddings", to: "/sound-system-rental" },
  { cat: "Sound", name: "Speakers", desc: "Portable and installed speakers with stands.", use: "Parties, seminars", to: "/sound-system-rental" },
  { cat: "Sound", name: "Mixers", desc: "Analog and digital mixing consoles.", use: "Live music, events", to: "/sound-system-rental" },
  { cat: "Display", name: "LED Walls", desc: "Indoor and outdoor modular LED walls.", use: "Stages, concerts", to: "/led-wall-rental" },
  { cat: "Display", name: "LED Displays", desc: "Signage and side screens.", use: "Exhibitions", to: "/led-wall-rental" },
  { cat: "Display", name: "LED TVs", desc: "43\" to 98\" 4K TVs with stands.", use: "Booths, offices", to: "/led-tv-rental" },
  { cat: "Projection", name: "Projectors", desc: "HD, 4K and laser projectors.", use: "Seminars, halls", to: "/projector-rental" },
  { cat: "Projection", name: "Projection Screens", desc: "Fast-fold and tripod screens.", use: "Trainings, movie nights", to: "/projector-rental" },
  { cat: "Lighting", name: "Stage Lighting", desc: "Moving heads, washes and beams.", use: "Stages, parties", to: "/event-solutions" },
  { cat: "Lighting", name: "Event Equipment", desc: "Truss, staging, power and effects.", use: "All events", to: "/event-solutions" },
];
