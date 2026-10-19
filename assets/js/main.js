// Register GSAP plugins safely
if (typeof gsap !== 'undefined') {
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  if (typeof Draggable !== 'undefined') gsap.registerPlugin(Draggable);
}

const projectData = [
  {
    title: "Bill of Materials (BOM) and Manufacturing ERP",
    category: ["enterprise", "Enterprise"],
    tech: "Laravel, PHP, MySQL, Multi-Level BOM Engine, Service Layer",
    shortDesc: "Manufacturing resource planning with hierarchical multi-level Bill of Materials (BOM), production cycles, and scrap tracking.",
    description: "Engineered comprehensive manufacturing ERP system with multi-level BOM workflows, work order routing across production stages, raw material wastage tracking, batch costing, and automated inventory reconciliation. Features fine-grained role-based access control (RBAC).",
    image: "assets/img/portfolio/bom-cpo-demand.png",
    link: "#",
    slider: [
      "assets/img/portfolio/bom-cpo-demand.png",
      "assets/img/portfolio/bom-demand-cpo.png",
      "assets/img/portfolio/bom-inventory.png",
      "assets/img/portfolio/bom-inventory-ledger.png",
      "assets/img/portfolio/bom-product-add.png",
      "assets/img/portfolio/bom-product.png",
      "assets/img/portfolio/bom-login.png",
      "assets/img/portfolio/bom-cpo-view.png"
    ]
  },
  {
    title: "Multi-Branch Restaurant POS & ERP",
    category: ["enterprise", "Enterprise"],
    tech: "Laravel, PHP, MySQL, Repository Pattern, Thermal receipt & sticker printing, TCP/IP printing",
    shortDesc: "Enterprise multi-branch restaurant platform with split billing, KOT printing, coupons, staff shifts, and branch targets.",
    description: "Architected and engineered at Doodle N Dash. Features high-speed ESC/POS thermal printing over network TCP/IP for receipts, KOTs, and pantry labels. Implemented complex shift management, coupon workflows, multi-level branch target reporting, and rock-solid repository pattern architecture.",
    image: "assets/img/portfolio/pos-dashboard.png",
    link: "#",
    slider: [
      "assets/img/portfolio/pos-dashboard.png",
      "assets/img/portfolio/pos-orders.png",
      "assets/img/portfolio/pos-login-l.png",
      "assets/img/portfolio/pos-login.png",
      "assets/img/portfolio/pos-live-kitchen.png",
      "assets/img/portfolio/pos-waiter.png",
      "assets/img/portfolio/pos-accountant.png",
      "assets/img/portfolio/pos-floor-map.png"
    ]
  },
  {
    title: "Enterprise HRMS",
    category: ["enterprise", "Enterprise"],
    tech: "Laravel, PHP, Biometric Hardware Sync, MySQL",
    shortDesc: "Comprehensive HR platform with biometric attendance integration, leave approvals, payroll, and support ticketing.",
    description: "Enterprise grade HR management solution deployed with physical biometric machine integration. Automates real-time check-in logging, overtime calculations, monthly tax deductions, pay-slip generation, and employee self-service leaves.",
    image: "assets/img/portfolio/hrms-menu.png",
    link: "#",
    slider: [
      "assets/img/portfolio/hrms-menu.png",
      "assets/img/portfolio/hrms-admin-page.png",
      "assets/img/portfolio/hrms-employee.png",
      "assets/img/portfolio/hrms-checkin.png",
      "assets/img/portfolio/hrms-report.png"
    ]
  },
  {
    title: "Entrepreneur Insider SaaS",
    category: ["web", "Web & SaaS"],
    tech: "Laravel, React.js, MySQL, Bootstrap, REST APIs",
    shortDesc: "Global startup networking and investor ecosystem platform connecting founders, angels, and mentors.",
    description: "Insider community is a dynamic SaaS platform designed to offer founders access to exclusive mentoring, startup insights, and partner perks worth over $700k. Features custom questionnaire builders, blog publication engines, and interactive founder forums.",
    image: "assets/img/portfolio/insider-home.png",
    link: "#",
    slider: [
      "assets/img/portfolio/insider-home.png",
      "assets/img/portfolio/insider-home2.png",
      "assets/img/portfolio/insider-blog.png",
      "assets/img/portfolio/insider-qn.png",
      "assets/img/portfolio/insider-questioniar.png",
      "assets/img/portfolio/insider-admin.png"
    ]
  },
  {
    title: "Pakistan Space Activities Regulatory Board (PSARB)",
    category: ["enterprise", "Enterprise"],
    tech: "Laravel, PHP 8+, Portfolio + Dashboard + CRM, MySQL",
    shortDesc: "Pakistan Space Activities Regulatory Board(PSARB) is a public sector administrative board platform for regulatory filings, appeal hearings, legal dockets, and committee approvals.",
    description: "Enterprise digital governance portal engineered for Pakistan Space Activities Regulatory Board(PSARB). Automates judicial appeal submissions, document verification, multi-stage committee review workflows, audit trails, and role-segregated portals for board members, legal counsels, and public applicants.",
    image: "assets/img/portfolio/psarb-website.png",
    link: "https://psarb.gov.pk/",
    slider: [
      "assets/img/portfolio/psarb-website.png",
      "assets/img/portfolio/psarb-login.png",
      "assets/img/portfolio/psarb-form-view.png",
      "assets/img/portfolio/psarb-invoice.png"
    ]
  },
  {
    title: "Property Management & Tenancy System",
    category: ["enterprise", "Enterprise"],
    tech: "FastAPI, React.js, Postgres, Portfolio + Dashboard+ CRM, JWT, Stripe & MyFatoorah",
    shortDesc: "End-to-end real estate and property operations portal with tenant onboarding, rent automation, and maintenance ticketing.",
    description: "Comprehensive property management platform for residential and commercial assets. Features unit occupancy tracking, digital lease agreements, automated recurring rent invoicing with Stripe, maintenance dispatch, landlord payout ledgers, and tenant self-service portals.",
    image: "assets/img/portfolio/property-dashboard.png",
    link: "#",
    slider: [
      "assets/img/portfolio/property-dashboard.png",
      "assets/img/portfolio/property-login.png",
      "assets/img/portfolio/property-managemenet.png",
      "assets/img/portfolio/property-unit-management.png"
    ]
  },
  {
    title: "Prefex CRM",
    category: ["enterprise", "Enterprise"],
    tech: "CodeIgniter, PHP, MySQL, Dashboard + CRM",
    shortDesc: "Perfex CRM - Customers Relationship & Project Management.",
    description: "Comprehensive customer relationship management (CRM) platform designed to streamline business operations, enhance customer engagement, and drive sales growth. With its intuitive interface and powerful features, Prefex empowers businesses to manage leads, track interactions, automate tasks, and gain valuable insights through advanced analytics and reporting.",
    image: "assets/img/portfolio/prefex.png",
    link: "#",
    slider: [
      "assets/img/portfolio/prefex.png",
      "assets/img/portfolio/prefex-crm.png",
      "assets/img/portfolio/prefex-lead-report.png",
      "assets/img/portfolio/prefex-leads.png",
      "assets/img/portfolio/prefex-crm-ticket.png",
      "assets/img/portfolio/prefex-task.png"
    ]
  },
  {
    title: "WhatsApp Chatbot & Agent Portal",
    category: ["mobile-ai", "AI & Automation"],
    tech: "WhatsApp API, PHP, Node.js, NLP Search, MySQL",
    shortDesc: "Smart multi-layered automated conversational FAQ bot with keyword search and live human agent escalation.",
    description: "Built for KODEV Global. Seamlessly connects users to automated conversational flows on WhatsApp. Includes intelligent NLP keyword searching, automated answer dispatch, and seamless escalation to human customer support agents through an internal agent portal.",
    image: "assets/img/portfolio/chatbot-login.png",
    link: "https://github.com/m-anas-iqbal",
    slider: [
      "assets/img/portfolio/chatbot-login.png",
      "assets/img/portfolio/chatbot.png",
      "assets/img/portfolio/chatbot-question_add.png",
      "assets/img/portfolio/chatbot-question_word.png",
      "assets/img/portfolio/chatbot-report.png"
    ]
  }, {
    title: "Work Around",
    category: ["enterprise", "Enterprise"],
    tech: "PHP, MySQL, Laravel, API, REST APIs, WebSocket, React.js, JWT, Unity 3D",
    shortDesc: "AR-enhanced virtual marker inspection platform for oil-sector field technicians.",
    description: "An immersive AR-enhanced virtual marker inspection platform designed for oil-sector field technicians. The system overlay’s precise 3D virtual markers onto physical equipment, enabling technicians to instantly identify exact component locations, collaborate remotely via integrated chat/video, and share real-time spatial annotations. It supports role-based access for field agents, supervisors, and inspectors with complete audit trails of inspections and maintenance actions.",
    link: "#",
    image: "assets/img/portfolio/workaround-cgroup.png",
    slider: [
      "assets/img/portfolio/workaround-cgroup.png",
      "assets/img/portfolio/workaround-group-add-invites.png",
      "assets/img/portfolio/workaround-group-add-members.png",
      "assets/img/portfolio/workaround-group.png",
      "assets/img/portfolio/workaround-lgroup.png",
      "assets/img/portfolio/workaround-profile.png",
      "assets/img/portfolio/workaround.png",
    ]
  },
  {
    title: "Lelobike - Bike E-commerce Platform",
    category: ["web", "Web & SaaS"],
    tech: "Laravel, PHP, MySQL, REST APIs, E-commerce",
    shortDesc: "Dealer-customer interaction and bike e-commerce platform.",
    description: "Built for Lelobike. Seamlessly connects dealers and customers for bike trading and e-commerce. buying, selling, and trading of bikes.",
    image: "assets/img/portfolio/lelobike-home.png",
    link: "https://github.com/m-anas-iqbal",
    slider: [
      "assets/img/portfolio/lelobike-home.png",
      "assets/img/portfolio/lelobike-login.png",
      "assets/img/portfolio/lelobike-admin-dasboard.png",
      "assets/img/portfolio/lelobike-admin-ads.png",
      "assets/img/portfolio/lelobike-admin-package.png"
    ]
  },
  {
    title: "8stores - E-commerce Platform",
    category: ["web", "Web & SaaS"],
    tech: "Laravel, PHP, MySQL,  E-commerce",
    shortDesc: "8stores is an e-commerce platform that allows users to sell products.",
    description: "8stores is an e-commerce platform that allows users to sell products. you can create your own store and sell products to customers.",
    image: "assets/img/portfolio/8stores-home.png",
    link: "https://github.com/m-anas-iqbal",
    slider: [
      "assets/img/portfolio/8stores-home.png",
      "assets/img/portfolio/8stores-login.png",
      "assets/img/portfolio/8store-product-detail.png",
      "assets/img/portfolio/8stores-product.png",
      "assets/img/portfolio/8stores-dashboard.png",
      "assets/img/portfolio/8store-announc.png",
      "assets/img/portfolio/8stores-emailtamplate.png"
    ]
  },
  {
    title: "RMS - Multi restaurant system",
    category: ["web", "Web & SaaS"],
    tech: "Laravel, PHP, MySQL,  E-commerce",
    shortDesc: "RMS is a multi-restaurant system that allows users to order food from different restaurants.",
    description: "RMS is a multi-restaurant management platform that allows users to explore menus and order food from different restaurants. Features POS management, QR-based tabletop ordering without waitstaff, kitchen display, and detailed customer feedback management.",
    image: "assets/img/portfolio/rms-home-dark.png",
    link: "https://github.com/m-anas-iqbal",
    slider: [
      "assets/img/portfolio/rms-home-dark.png",
      "assets/img/portfolio/rms-homelight.png",
      "assets/img/portfolio/rms-login.png",
      "assets/img/portfolio/rms-menu.png",
      "assets/img/portfolio/rms-nav.png",
      "assets/img/portfolio/rms-restru.png"
    ]
  },
  {
    title: "Towel Management System",
    category: ["enterprise", "Enterprise"],
    tech: "PHP, MySQL, CSS, JS",
    shortDesc: "ERP & inventory platform for textile mills tracking yarn movements, beam processing, and production wastage.",
    description: "The Towel Management System is custom software designed for textile mills to efficiently manage various aspects of yarn processing and inventory management. It facilitates tracking of empty and loaded beams, yarn inward and outward movements, cone rewinding, and generates comprehensive reports on purchases, deliveries, and production activities. With user-friendly interfaces, robust security measures, and potential for integration with other systems, it streamlines operations and enhances productivity in textile manufacturing processes.",
    image: "assets/img/portfolio/towel-dashboard.png",
    link: "#",
    slider: [
      "assets/img/portfolio/towel-dashboard.png",
      "assets/img/portfolio/towel-login.png",
      "assets/img/portfolio/towel-po.png",
      "assets/img/portfolio/towel-report.png",
      "assets/img/portfolio/towel-rewind.png",
      "assets/img/portfolio/towel-wastage.png"
    ]
  },
  {
    title: "World Taiji Science Federation (WTSF)",
    link: "https://wtjsf.org/login",
    category: ["web", "Web & SaaS"],
    tech: "WordPress, HTML, CSS, JS, PHP, MySQL, PayPal",
    shortDesc: "Non-profit international portal featuring member registration, CodeIgniter ticketing backend, and PayPal payments.",
    description: "WTSF (World Taiji Science Federation) is a US Federal proof non-profit Organization with a WordPress frontend and CodeIgniter backend. Users can register on the site to access CodeIgniter-powered features, including event ticketing. An administrator panel allows for user management, event creation, and content updates. The site integrates HTML, CSS, and JS for a seamless and interactive user experience. Additionally, payment integration with PayPal facilitates secure and convenient transactions for event tickets.",
    image: "assets/img/portfolio/wtjsf-login.png",
    slider: [
      "assets/img/portfolio/wtjsf-home-word.png",
      "assets/img/portfolio/wtjsf-event.png",
      "assets/img/portfolio/wtjsf-login.png",
      "assets/img/portfolio/wtjsf-admin-page.png",
      "assets/img/portfolio/wtjsf-admin-event.png",
      "assets/img/portfolio/wtjsf-event1.png",
      "assets/img/portfolio/wtjsf-event2.png",
      "assets/img/portfolio/wtjsf-event-3.png",
      "assets/img/portfolio/wtjsf-contact.png",
    ]
  },
  {
    title: "Brewery Recording Studio",
    category: ["web", "Web & SaaS"],
    tech: "React.js, Laravel REST API, HTML5/CSS3, MySQL",
    shortDesc: "State-of-the-art recording studio booking platform with real-time session scheduling and artist portfolios.",
    description: "High-performance web app with React.js frontend and Laravel REST API backend. Enables artists and producers to book studio sessions, preview audio equipment specs, meet resident audio engineers, and manage billing securely online.",
    image: "assets/img/portfolio/brewery-home.png",
    link: "https://breweryrecording.com/",
    slider: [
      "assets/img/portfolio/brewery-home.png",
      "assets/img/portfolio/brewery-admin.png",
      "assets/img/portfolio/brewery-studio.png",
      "assets/img/portfolio/brewery-serice.png",
      "assets/img/portfolio/brewery-staff.png",
      "assets/img/portfolio/brewery-booking.png"
    ]
  },
  {
    title: "NP Car Rentals Dubai",
    category: ["web", "Web & SaaS"],
    tech: "React.js, Laravel, Stripe Payment Gateway, REST APIs",
    shortDesc: "Premier Dubai luxury vehicle reservation portal with real-time calendar availability and instant Stripe checkout.",
    description: "Engineered high-end car rental platform featuring dynamic fleet browsing, multi-attribute filtering (brand, category, daily rates), instant date-range booking, Stripe card payments, and comprehensive admin rental agreement management.",
    image: "assets/img/portfolio/rental_car-home.png",
    link: "https://github.com/m-anas-iqbal",
    slider: [
      "assets/img/portfolio/rental_car-home.png",
      "assets/img/portfolio/rental_car-filter.png",
      "assets/img/portfolio/rental_car-detail.png",
      "assets/img/portfolio/rental_car-detail2.png",
      "assets/img/portfolio/rental_car-checkout.png",
      "assets/img/portfolio/rental_car-payment.png",
      "assets/img/portfolio/rental_car-admin.png"
    ]
  },
  {
    title: "Manage Your School (MYS)",
    category: ["enterprise", "Enterprise"],
    tech: "Laravel, PHP, MySQL, JavaScript, Bootstrap",
    shortDesc: "Comprehensive digital school ERP with online admissions, parent/student portals, and automated fee processing.",
    description: "Replaces traditional paper-based school operations with automated student admissions, fee voucher generation, classroom grading, report cards, and role-segregated panels for principals, teachers, parents, and students.",
    image: "assets/img/portfolio/mys-home.png",
    link: "https://github.com/m-anas-iqbal",
    slider: [
      "assets/img/portfolio/mys-home.png",
      "assets/img/portfolio/mys-school-home.png",
      "assets/img/portfolio/mys-school-registration.png",
      "assets/img/portfolio/mys-school-adminission.png",
      "assets/img/portfolio/mys-school-fees-type.png",
      "assets/img/portfolio/mys-school-student.png",
      "assets/img/portfolio/mys-school-admission-list.png"
    ]
  },
  {
    title: "Rango Cart E-Commerce",
    category: ["ecom", "E-Commerce"],
    tech: "Laravel, PHP, JavaScript, MySQL, Payment Gateways",
    shortDesc: "Modern e-commerce storefront for educational & STEM toys with live order management and payment tracking.",
    description: "E-commerce platform designed for high-conversion shopping of STEM learning toys. Includes multi-variant products, customer cart/wishlist state, voucher management, courier tracking integration, and admin sales analytics.",
    image: "assets/img/portfolio/rango-home.png",
    link: "#",
    slider: [
      "assets/img/portfolio/rango-home.png",
      "assets/img/portfolio/rango-home2.png",
      "assets/img/portfolio/rango-cart.png",
      "assets/img/portfolio/rango-product-detail.png",
      "assets/img/portfolio/rango-admin-dash.png",
      "assets/img/portfolio/rango-admin-order.png"
    ]
  },
  {
    title: "MapBirdy Community Geolocation",
    category: ["mobile-ai", "AI & Automation"],
    tech: "Laravel, Google Maps API, JavaScript, MySQL",
    shortDesc: "Neighborhood feedback and civic issue voting platform powered by Google Maps API.",
    description: "Empowers citizens to mark geolocation points on interactive maps, vote on civic infrastructure initiatives, launch neighborhood discussions, and submit direct petitions to municipal stakeholders.",
    image: "assets/img/portfolio/mapbirdy-login.png",
    link: "#",
    slider: [
      "assets/img/portfolio/mapbirdy-user-dashboard.png",
      "assets/img/portfolio/mapbirdy-vote-comment.png",
      "assets/img/portfolio/mapbirdy-map-maker.png",
      "assets/img/portfolio/mapbirdy-search.png",
      "assets/img/portfolio/mapbirdy-login.png"
    ]
  },
  {
    title: "Dukan24h Multi-Vendor Marketplace",
    category: ["ecom", "E-Commerce"],
    tech: "Laravel, PHP, MySQL, Multi-Vendor Architecture",
    shortDesc: "End-to-end retail marketplace and shop management platform with built-in Point of Sale.",
    description: "Caters to three core user roles: retail consumers, vendor businesses, and administrative supervisors. Features dedicated vendor storefronts, wholesale quotation requests, inventory tracking, and POS barcode lookups.",
    image: "assets/img/portfolio/dukan24h-home.png",
    link: "#",
    slider: [
      "assets/img/portfolio/dukan24h-home.png",
      "assets/img/portfolio/dukan24h-shop-page.png",
      "assets/img/portfolio/dukan24h-shop-register.png",
      "assets/img/portfolio/dukan24h-search.png",
      "assets/img/portfolio/dukan24h-contact.png"
    ]
  },
  {
    title: "Christian Creations Unlimited",
    category: ["ecom", "E-Commerce"],
    tech: "Laravel, Stripe, JavaScript, CSS3, MySQL",
    shortDesc: "Custom jewelry and apparel e-commerce store with multi-tier consultant commissions and secure checkout.",
    description: "Bespoke e-commerce platform with specialized role structures (consultant, member, admin). Integrates Stripe for secure card transactions, automated affiliate referral tracking, and order fulfillment queues.",
    image: "assets/img/portfolio/christan-ecom-home.png",
    link: "https://christiancreationsunlimited.com/",
    slider: [
      "assets/img/portfolio/christan-ecom-home.png",
      "assets/img/portfolio/christan-ecom-product-page.png",
      "assets/img/portfolio/christan-ecom-fearture.png",
      "assets/img/portfolio/christan-admin-product.png",
      "assets/img/portfolio/ch.png"
    ]
  }
];

const testimonialsData = [
  {
    quote: "Anas is an exceptionally talented individual with a strong work ethic. He is adaptable, self-motivated, and always eager to learn. He quickly grasps complex concepts and executes tasks with precision and creativity. His positive attitude and problem-solving skills make him a valuable asset to any team.",
    image: "assets/img/testimonials/avatar.jpg",
    name: "Abdullah",
    position: "CEO, Dadatextile"
  },
  {
    quote: "His services command a premium price, yet the impeccable quality of his work, expert architectural guidance, and dedication speak volumes about his worth. Anas delivered beyond expectations.",
    image: "assets/img/testimonials/avatar.jpg",
    name: "Abdul Malik",
    position: "General Manager, Orient Metal"
  },
  {
    quote: "Anas is exceptionally skilled, responsive, and works efficiently. He takes complete ownership of the project architecture and was a pleasure to work with.",
    image: "assets/img/testimonials/avatar.jpg",
    name: "Vinnie Pelia",
    position: "Founder, MapBirdy"
  },
  {
    quote: "Working with Anas Iqbal was seamless. Short deadlines, complex requirements, and tight constraints were handled with absolute professionalism and speed.",
    image: "assets/img/testimonials/avatar.jpg",
    name: "Saba Yasmeen",
    position: "Lead Software Engineer"
  },
  {
    quote: "Anas is patient, technically profound, and reliable. He helped guide us through the entire development roadmap with flawless execution.",
    image: "assets/img/testimonials/avatar.jpg",
    name: "Tahir Qureshi",
    position: "Founder, Softweb"
  },
  {
    quote: "Communication was top-notch and delivery was rock-solid. Anas is our go-to senior developer for complex Laravel and React solutions.",
    image: "assets/img/testimonials/faisal.jpg",
    name: "Faisal",
    position: "Product Director"
  }
];

let globalThreeGroup = null;
let globalThreeCamera = null;

/*--------------------------------------------------------------
# 1. LENIS SMOOTH MOMENTUM SCROLLING
--------------------------------------------------------------*/
function initLenis() {
  if (typeof Lenis === 'undefined') return;
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true
  });

  lenis.on('scroll', () => {
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.update();
  });

  if (typeof gsap !== 'undefined') {
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }
}

/*--------------------------------------------------------------
# 2. FUTURISTIC CYBER 3D BACKGROUND (FAST, DYNAMIC & FLUID)
--------------------------------------------------------------*/
let knotMeshRef = null;
let coreMeshRef = null;
let ring1MeshRef = null;
let ring2MeshRef = null;
let lightPrimaryRef = null;
let lightAccentRef = null;

function initThreeScene() {
  const container = document.getElementById('three-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 7;
  globalThreeCamera = camera;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const worldGroup = new THREE.Group();
  scene.add(worldGroup);
  globalThreeGroup = worldGroup;

  // Dynamically extract colors from the active :root theme palette
  const rootStyles = getComputedStyle(document.documentElement);
  const primaryHex = rootStyles.getPropertyValue('--primary').trim() || '#0d9488';
  const accentHex = rootStyles.getPropertyValue('--accent-coral').trim() || '#d97706';
  const cyanHex = rootStyles.getPropertyValue('--accent-cyan').trim() || primaryHex;
  const amberHex = rootStyles.getPropertyValue('--accent-amber').trim() || accentHex;
  const purpleHex = rootStyles.getPropertyValue('--accent-purple').trim() || primaryHex;

  const colorPrimary = new THREE.Color(primaryHex);
  const colorAccent = new THREE.Color(accentHex);
  const colorCyan = new THREE.Color(cyanHex);
  const colorAmber = new THREE.Color(amberHex);
  const colorPurple = new THREE.Color(purpleHex);

  // 1. Central Cyber Torus Knot (Uses Active Theme Primary Color)
  const knotGeo = new THREE.TorusKnotGeometry(2.1, 0.52, 140, 24);
  const knotMat = new THREE.MeshStandardMaterial({
    color: colorPrimary,
    wireframe: true,
    transparent: true,
    opacity: 0.38,
    roughness: 0.2,
    metalness: 0.85
  });
  const knotMesh = new THREE.Mesh(knotGeo, knotMat);
  worldGroup.add(knotMesh);
  knotMeshRef = knotMesh;

  // 2. Inner Glowing Core (Uses Active Theme Accent Color)
  const coreGeo = new THREE.IcosahedronGeometry(1.25, 1);
  const coreMat = new THREE.MeshBasicMaterial({
    color: colorAccent,
    wireframe: true,
    transparent: true,
    opacity: 0.5
  });
  const coreMesh = new THREE.Mesh(coreGeo, coreMat);
  worldGroup.add(coreMesh);
  coreMeshRef = coreMesh;

  // 3. Dual Cyber Gyroscope Orbital Rings (Futuristic Tech Accent)
  const ring1Geo = new THREE.TorusGeometry(3.1, 0.03, 16, 100);
  const ring1Mat = new THREE.MeshBasicMaterial({
    color: colorPrimary,
    transparent: true,
    opacity: 0.45
  });
  const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
  ring1Mesh.rotation.x = Math.PI / 3;
  worldGroup.add(ring1Mesh);
  ring1MeshRef = ring1Mesh;

  const ring2Geo = new THREE.TorusGeometry(3.55, 0.025, 16, 100);
  const ring2Mat = new THREE.MeshBasicMaterial({
    color: colorAccent,
    transparent: true,
    opacity: 0.38
  });
  const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
  ring2Mesh.rotation.y = Math.PI / 4;
  worldGroup.add(ring2Mesh);
  ring2MeshRef = ring2Mesh;

  // 4. Floating 3D Star & Particle Constellation
  const particleCount = 800;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const palette = [
    colorPrimary,
    colorAccent,
    colorCyan,
    colorAmber,
    colorPurple
  ];

  for (let i = 0; i < particleCount * 3; i += 3) {
    const r = 3.5 + Math.random() * 5.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);

    positions[i] = r * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = r * Math.cos(phi);

    const chosen = palette[Math.floor(Math.random() * palette.length)];
    colors[i] = chosen.r;
    colors[i + 1] = chosen.g;
    colors[i + 2] = chosen.b;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.065,
    vertexColors: true,
    transparent: true,
    opacity: 0.75
  });

  const particleCloud = new THREE.Points(particleGeo, particleMat);
  worldGroup.add(particleCloud);

  // Dynamic Ambient & Orbiting Point Lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
  scene.add(ambientLight);

  const lightPrimary = new THREE.PointLight(colorPrimary, 2.8, 50);
  lightPrimary.position.set(5, 5, 5);
  scene.add(lightPrimary);
  lightPrimaryRef = lightPrimary;

  const lightAccent = new THREE.PointLight(colorAccent, 2.5, 50);
  lightAccent.position.set(-5, -5, 5);
  scene.add(lightAccent);
  lightAccentRef = lightAccent;

  // Responsive Mouse Parallax
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  window.addEventListener('mousemove', (e) => {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    mouseX = (e.clientX - halfW) / halfW;
    mouseY = (e.clientY - halfH) / halfH;
  });

  window.addEventListener('resize', () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Responsive spring lerp on cursor
    targetX += (mouseX - targetX) * 0.045;
    targetY += (mouseY - targetY) * 0.045;

    // Fast, energetic, and silky-smooth rotation
    worldGroup.rotation.y += 0.0032 + targetX * 0.004;
    worldGroup.rotation.x = targetY * 0.22;

    knotMesh.rotation.x = elapsedTime * 0.32;
    knotMesh.rotation.y = elapsedTime * 0.22;
    knotMesh.rotation.z = elapsedTime * 0.16;

    coreMesh.rotation.y = -elapsedTime * 0.42;
    coreMesh.rotation.x = elapsedTime * 0.25;

    ring1Mesh.rotation.z = elapsedTime * 0.28;
    ring1Mesh.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.6) * 0.15;

    ring2Mesh.rotation.y = -elapsedTime * 0.24;
    ring2Mesh.rotation.z = Math.cos(elapsedTime * 0.5) * 0.18;

    particleCloud.rotation.y = elapsedTime * 0.06;
    particleCloud.rotation.z = Math.sin(elapsedTime * 0.3) * 0.04;

    // Subtle rhythmic breathing / pulsing
    const pulse = 1 + Math.sin(elapsedTime * 1.6) * 0.045;
    knotMesh.scale.set(pulse, pulse, pulse);

    // Dynamic light orbits
    lightPrimary.position.x = Math.sin(elapsedTime * 0.65) * 5.5;
    lightPrimary.position.y = Math.cos(elapsedTime * 0.65) * 5.5;
    lightPrimary.position.z = Math.sin(elapsedTime * 0.45) * 4;

    lightAccent.position.x = -Math.sin(elapsedTime * 0.65) * 5.5;
    lightAccent.position.y = -Math.cos(elapsedTime * 0.65) * 5.5;
    lightAccent.position.z = -Math.sin(elapsedTime * 0.45) * 4;

    renderer.render(scene, camera);
  }

  animate();
}

/*--------------------------------------------------------------
# 3. GENUINE X + Y AXIS SCROLL ANIMATION ENGINE
--------------------------------------------------------------*/
function initGsapScrollAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  // 1. Three.js 3D Model Dynamic Zoom & Rotation (Zoom IN on scroll down, Zoom OUT on scroll up)
  if (globalThreeGroup) {
    globalThreeGroup.scale.set(1, 1, 1);
    globalThreeGroup.position.set(window.innerWidth < 768 ? 0.3 : 1.5, 0, 0);

    // Multi-axis continuous rotation with page scroll
    gsap.to(globalThreeGroup.rotation, {
      y: Math.PI * 5,
      x: Math.PI * 1.4,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2
      }
    });

    // Zoom IN on scroll down (Scales up dramatically), Zooms OUT on scroll up
    const targetScale = window.innerWidth < 768 ? 1.65 : 2.15;
    gsap.to(globalThreeGroup.scale, {
      x: targetScale,
      y: targetScale,
      z: targetScale,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2
      }
    });

    // Advance 3D model closer toward the screen on scroll down, recedes back on scroll up
    gsap.to(globalThreeGroup.position, {
      x: window.innerWidth < 768 ? 0.4 : 1.9,
      y: -0.3,
      z: 1.8,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2
      }
    });

    // Camera zooms in closer on scroll down (z: 7 -> z: 4.6), zooms back out on scroll up
    if (globalThreeCamera) {
      gsap.to(globalThreeCamera.position, {
        z: 4.6,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2
        }
      });
    }
  }

  // 2. Top Scroll Progress Bar
  const progressBar = document.getElementById('scroll-progress-bar');
  if (progressBar) {
    gsap.to(progressBar, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.2
      }
    });
  }

  // 3. Kinetic Marquee X-Axis Scroll Velocity Scrub
  const marqueeTrack = document.getElementById('kinetic-marquee-track');
  if (marqueeTrack) {
    gsap.to(marqueeTrack, {
      x: "-28%",
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8
      }
    });
  }

  // 4. Hero Section Multi-Axis Entrance (Zero X-shift on mobile to prevent horizontal viewport slip)
  const isMobScreen = window.innerWidth <= 768;
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTl.from(".hero-status-pill", { y: 20, opacity: 0, duration: 0.6, delay: 0.15, clearProps: "all" })
    .from(".hero-title", { x: isMobScreen ? 0 : -40, y: 20, opacity: 0, duration: 0.8, clearProps: "all" }, "-=0.4")
    .from(".hero-subtitle", { x: isMobScreen ? 0 : -30, opacity: 0, duration: 0.6, clearProps: "all" }, "-=0.5")
    .from(".hero-desc", { y: 25, opacity: 0, duration: 0.6, clearProps: "all" }, "-=0.4")
    .from(".hero-cta-group", { y: 20, opacity: 0, duration: 0.5, clearProps: "all" }, "-=0.4")
    .from(".hero-glass-profile-card", { x: isMobScreen ? 0 : 50, y: 30, scale: 0.92, opacity: 0, duration: 0.9, ease: "back.out(1.4)", clearProps: "all" }, "-=0.6");

  // 5. Section Headers X+Y Kinetic Reveal
  gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header.children, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: header,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    });
  });

  // 6. Stats Ribbon Items & Live Number Counters
  gsap.utils.toArray('.stat-item').forEach((item, idx) => {
    gsap.from(item, {
      x: isMobScreen ? 0 : (idx % 2 === 0 ? -25 : 25),
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.5)",
      scrollTrigger: {
        trigger: item,
        start: "top 90%"
      }
    });
  });

  document.querySelectorAll('.counter-num').forEach(counter => {
    const target = +counter.getAttribute('data-target');
    if (!target) return;
    ScrollTrigger.create({
      trigger: counter,
      start: "top 90%",
      once: true,
      onEnter: () => {
        let current = 0;
        const duration = 1200;
        const stepTime = 30;
        const increment = target / (duration / stepTime);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current);
          }
        }, stepTime);
      }
    });
  });

  // 7. About Section: Photo slide-in from Left (X) & Right Text Stagger
  gsap.from(".about-card-left", {
    x: isMobScreen ? 0 : -60,
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-card-left",
      start: "top 85%"
    }
  });

  gsap.from(".about-info-box", {
    x: isMobScreen ? 0 : 35,
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".about-info-grid",
      start: "top 85%"
    }
  });

  // 8. CORE PILLARS MULTI-DIRECTIONAL X+Y CONVERGENCE (CHIPSA / BUZZWORTHY STYLE)
  const pillarCards = document.querySelectorAll('.pillar-card');
  pillarCards.forEach((card, idx) => {
    // 01: Top-Left, 02: Top-Right, 03: Bottom-Left, 04: Bottom-Right
    const xOffset = isMobScreen ? 0 : ((idx % 2 === 0) ? -70 : 70);
    const yOffset = (idx < 2) ? -40 : 40;
    const rot = isMobScreen ? 0 : ((idx % 2 === 0) ? -3 : 3);

    gsap.fromTo(card,
      { x: xOffset, y: yOffset, rotation: rot, opacity: 0 },
      {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  // 9. Skills & AI Matrix Cards (Alternating Left/Right X+Y glide)
  gsap.utils.toArray('.skill-box-card').forEach((card, idx) => {
    const xShift = isMobScreen ? 0 : ((idx % 2 === 0) ? -60 : 60);
    gsap.from(card, {
      x: xShift,
      y: 40,
      opacity: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%"
      }
    });
  });

  // 10. Progress Fill Bars
  gsap.utils.toArray('.prof-meter-fill').forEach(fill => {
    const targetWidth = fill.style.width || "90%";
    gsap.fromTo(fill,
      { width: "0%" },
      {
        width: targetWidth,
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: fill,
          start: "top 90%"
        }
      }
    );
  });

  // 11. Work History Timeline: Slide from Left with Pop Node
  gsap.utils.toArray('.timeline-entry').forEach((entry, idx) => {
    const card = entry.querySelector('.timeline-entry-card');
    const node = entry.querySelector('.timeline-entry-node');

    if (card) {
      gsap.from(card, {
        x: isMobScreen ? 0 : -70,
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: entry,
          start: "top 86%"
        }
      });
    }
    if (node) {
      gsap.from(node, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(2.5)",
        scrollTrigger: {
          trigger: entry,
          start: "top 86%"
        }
      });
    }
  });

  // 12. Award Showcase Cards: Slide from Right (X+Y)
  gsap.utils.toArray('.award-showcase-box').forEach((box, i) => {
    gsap.from(box, {
      x: isMobScreen ? 0 : 60,
      y: 30,
      opacity: 0,
      duration: 0.85,
      delay: i * 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: box,
        start: "top 85%"
      }
    });
  });

  // 13. macOS Desktop Workspace 3D Perspective Tilt on Scroll
  gsap.fromTo(".macos-desktop-workspace",
    { y: 80, rotationX: isMobScreen ? 0 : 6, transformPerspective: 1000, opacity: 0.85 },
    {
      y: 0,
      rotationX: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 82%",
        toggleActions: "play none none none"
      }
    }
  );

  // 14. Quotation Section Steps & Live Summary Card
  gsap.from('.quote-highlight-banner', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.quote-highlight-banner',
      start: "top 85%"
    }
  });

  gsap.from('.quote-service-grid', {
    x: isMobScreen ? 0 : -40,
    y: 30,
    opacity: 0,
    duration: 0.85,
    ease: "power3.out",
    scrollTrigger: {
      trigger: '.quote-service-grid',
      start: "top 85%"
    }
  });

  gsap.from('.quote-live-summary-card', {
    x: isMobScreen ? 0 : 40,
    y: 40,
    opacity: 0,
    duration: 0.9,
    ease: "back.out(1.4)",
    scrollTrigger: {
      trigger: '.quote-live-summary-card',
      start: "top 85%"
    }
  });

  // 15. Testimonials & Contact Cards (Always fully visible, smooth entrance)
  gsap.from('.contact-grid-card', {
    y: 25,
    duration: 0.6,
    stagger: 0.08,
    ease: "power2.out",
    clearProps: "transform",
    scrollTrigger: {
      trigger: '#contact',
      start: "top 85%",
      once: true
    }
  });

  gsap.from('.direct-email-box', {
    y: 25,
    duration: 0.6,
    ease: "power2.out",
    clearProps: "transform",
    scrollTrigger: {
      trigger: '.direct-email-box',
      start: "top 90%",
      once: true
    }
  });
}

/*--------------------------------------------------------------
# 4. MACOS DESKTOP OS INTERACTIVE WORKSPACE (CLEAN START)
--------------------------------------------------------------*/
let desktopTopZ = 35;

function initByChudyInteractiveDesktop() {
  // macOS Top Bar Live Clock
  function updateMenubarClock() {
    const clockEl = document.getElementById('menubarClock');
    if (clockEl) {
      const now = new Date();
      clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
  }
  setInterval(updateMenubarClock, 1000);
  updateMenubarClock();
  updateActiveWindowsCount();
}

function updateActiveWindowsCount() {
  const visible = document.querySelectorAll('.draggable-macos-window:not([style*="display: none"])');
  const badge = document.getElementById('activeCountText');
  if (badge) badge.textContent = visible.length;

  const emptyState = document.getElementById('desktopEmptyState');
  if (emptyState) {
    emptyState.style.display = visible.length === 0 ? 'flex' : 'none';
  }
}

// CLOSE WINDOW
window.closeDesktopWindow = function (windowId) {
  const win = document.getElementById(windowId);
  if (!win) return;
  gsap.to(win, {
    scale: 0.2,
    opacity: 0,
    duration: 0.22,
    ease: "back.in(1.5)",
    onComplete: () => {
      win.style.display = "none";
      updateActiveWindowsCount();
    }
  });
};

// SHORTABLE / MINIMIZE WINDOW (Yellow dot)
window.toggleShortWindow = function (windowId) {
  const win = document.getElementById(windowId);
  if (!win) return;
  win.classList.toggle('window-short');
  desktopTopZ++;
  win.style.zIndex = desktopTopZ;
  updateActiveWindowsCount();
};

// BIG / MAXIMIZE WINDOW (Green dot)
window.toggleMaximizeWindow = function (windowId) {
  const win = document.getElementById(windowId);
  if (!win) return;
  const isMax = win.classList.toggle('window-maximized');
  desktopTopZ++;
  win.style.zIndex = isMax ? 9999 : desktopTopZ;
  if (typeof Draggable !== 'undefined') {
    const d = Draggable.get(win);
    if (d) {
      if (isMax) {
        d.disable();
        gsap.set(win, { x: 0, y: 0 });
      } else {
        d.enable();
        d.update();
      }
    }
  }
};

// LAUNCH OR REOPEN ANY OF THE 12 PROJECTS ON DESKTOP CANVAS (OPEN MULTIPLE AT ONCE)
window.launchProjectWindow = function (index) {
  const item = projectData[index];
  if (!item) return;

  const emptyState = document.getElementById('desktopEmptyState');
  if (emptyState) emptyState.style.display = 'none';

  const winId = `osWindow${index}`;
  let win = document.getElementById(winId);

  // If already exists on canvas, restore and focus it
  if (win) {
    win.style.display = "block";
    win.classList.remove('window-short');
    win.classList.remove('window-maximized');
    desktopTopZ++;
    win.style.zIndex = desktopTopZ;
    document.querySelectorAll('.draggable-macos-window').forEach(w => w.classList.remove('focused'));
    win.classList.add('focused');
    gsap.fromTo(win,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.5)" }
    );
    updateActiveWindowsCount();
    return;
  }

  // Otherwise create new draggable window
  const canvas = document.getElementById('desktopCanvas');
  if (!canvas) return;

  const newWin = document.createElement('div');
  newWin.className = 'draggable-macos-window focused';
  newWin.id = winId;
  const isMobile = window.innerWidth <= 576;
  const offset = isMobile ? (index % 3) * 15 : (index % 4) * 45;
  newWin.style.top = isMobile ? `${20 + offset}px` : `${55 + offset}px`;
  newWin.style.left = isMobile ? `10px` : `${40 + offset}px`;
  desktopTopZ++;
  newWin.style.zIndex = desktopTopZ;

  const techChips = item.tech.split(',').slice(0, 3).map(t => `<span>${t.trim()}</span>`).join('');

  newWin.innerHTML = `
    <div class="macos-window-header draggable-handle">
      <div class="macos-traffic-lights">
        <span class="traffic-dot dot-red" onclick="closeDesktopWindow('${winId}')" title="Close Window"></span>
        <span class="traffic-dot dot-yellow" onclick="toggleShortWindow('${winId}')" title="Shorten / Mini"></span>
        <span class="traffic-dot dot-green" onclick="toggleMaximizeWindow('${winId}')" title="Expand Big"></span>
      </div>
      <div class="macos-window-title font-mono"><i class="bi bi-grip-vertical"></i> ~/systems/${item.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.app</div>
      <span class="macos-window-badge font-mono">DRAG ME</span>
    </div>
    <div class="window-inner-content">
      <img src="${item.image}" class="window-preview-img" alt="${item.title}">
      <div class="p-3 window-body-padding">
        <div class="d-flex justify-content-between align-items-center mb-1">
          <span class="window-cat-tag font-mono">${item.category[1].toUpperCase()}</span>
          <span class="font-mono text-muted" style="font-size: 11px;">SYS.${index + 1}</span>
        </div>
        <h4 class="window-title-text">${item.title}</h4>
        <p class="window-desc-text">${item.shortDesc || item.description || ''}</p>
        <div class="window-tech-row font-mono mb-3">
          ${techChips}
        </div>
        <div class="d-flex justify-content-between align-items-center gap-2">
          <button type="button" class="btn-deck-action btn-deck-primary py-1 px-3 flex-grow-1" onclick="openProjectModal(${index})">
            <i class="bi bi-arrows-fullscreen"></i> Full Specs
          </button>
          ${item.link ? `
            <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="btn-deck-action btn-deck-ghost py-1 px-2" title="Source">
              <i class="bi bi-box-arrow-up-right"></i>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `;

  canvas.appendChild(newWin);

  newWin.addEventListener('mousedown', () => {
    desktopTopZ++;
    newWin.style.zIndex = desktopTopZ;
    document.querySelectorAll('.draggable-macos-window').forEach(w => w.classList.remove('focused'));
    newWin.classList.add('focused');
  });

  if (typeof Draggable !== 'undefined') {
    const handleEl = newWin.querySelector('.draggable-handle');
    Draggable.create(newWin, {
      handle: handleEl,
      cancel: ".traffic-dot",
      bounds: "#desktopCanvas",
      edgeResistance: 0.65,
      type: "x,y",
      onPress: function () {
        desktopTopZ++;
        newWin.style.zIndex = desktopTopZ;
        document.querySelectorAll('.draggable-macos-window').forEach(w => w.classList.remove('focused'));
        newWin.classList.add('focused');
      }
    });
  }

  gsap.fromTo(newWin,
    { scale: 0.4, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.35, ease: "back.out(1.5)" }
  );

  updateActiveWindowsCount();
};

window.openAllWindows = function () {
  projectData.forEach((_, idx) => {
    launchProjectWindow(idx);
  });
  setTimeout(window.tileWindows, 350);
};

window.tileWindows = function () {
  const windows = Array.from(document.querySelectorAll('.draggable-macos-window')).filter(w => w.style.display !== 'none');
  const isMobile = window.innerWidth <= 768;
  const cols = window.innerWidth > 1200 ? 3 : (isMobile ? 1 : 2);
  const colWidth = isMobile ? (window.innerWidth - 30) : 390;
  const rowHeight = isMobile ? 320 : 350;

  windows.forEach((win, idx) => {
    win.style.display = "block";
    win.classList.remove('window-maximized');

    const col = idx % cols;
    const row = Math.floor(idx / cols);

    gsap.to(win, {
      x: 0,
      y: 0,
      top: `${(isMobile ? 15 : 50) + (row * rowHeight)}px`,
      left: `${(isMobile ? 10 : 25) + (col * colWidth)}px`,
      duration: 0.45,
      ease: "power3.out",
      onComplete: () => {
        if (typeof Draggable !== 'undefined') {
          const d = Draggable.get(win);
          if (d) d.update();
        }
      }
    });
  });
  updateActiveWindowsCount();
};

window.resetDesktop = function () {
  const windows = Array.from(document.querySelectorAll('.draggable-macos-window'));
  windows.forEach(w => w.style.display = "none");
  launchProjectWindow(0);
  if (window.innerWidth > 768) {
    launchProjectWindow(1);
    launchProjectWindow(2);
  }
  setTimeout(window.tileWindows, 350);
};

function populateProjectLaunchers() {
  // Dynamically sync project count badges & buttons
  const totalCount = projectData.length;
  document.querySelectorAll('.project-count-val').forEach(el => {
    el.textContent = totalCount;
  });

  const container = document.getElementById('projectLaunchersContainer');
  if (!container) return;

  let html = '';
  projectData.forEach((item, index) => {
    html += `
      <button type="button" class="project-launcher-pill" onclick="launchProjectWindow(${index})">
        <i class="bi bi-window-stack text-primary"></i>
        <span>${item.title}</span>
        <span class="badge bg-light text-muted font-mono" style="font-size: 10px;">${item.category[1]}</span>
      </button>
    `;
  });
  container.innerHTML = html;
}

/*--------------------------------------------------------------
# 5. INTERACTIVE QUOTATION SYSTEM (ONLY EMAIL)
--------------------------------------------------------------*/
const quotationConfig = {
  selectedType: "Enterprise ERP / POS Platform",
  selectedFeatures: [
    "AI & LLM Model Integration",
    "Chatbot & WhatsApp API Integration",
    "Workflow & Task Automation (n8n/Zapier)",
    "Payment Merchant Gateway (Stripe/PayPal)",
    "Email & Notification Service (SMTP/Resend)",
    "Role-Based Access Control (RBAC)",
    "Admin Analytics & Export Reports"
  ],
  selectedTimeline: "Standard Delivery (3-5 Weeks)",
  clientName: "",
  clientEmail: "",
  clientCompany: "",
  clientNotes: ""
};

function initQuotationCalculator() {
  const serviceCards = document.querySelectorAll('.quote-service-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', () => {
      serviceCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const radio = card.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        quotationConfig.selectedType = radio.value;
      }
      updateQuotationSummary();
    });
  });

  const moduleChips = document.querySelectorAll('.quote-module-chip');
  moduleChips.forEach(chip => {
    const checkbox = chip.querySelector('input[type="checkbox"]');
    if (!checkbox) return;

    // Ensure initial visual state matches checked property
    chip.classList.toggle('active', checkbox.checked);

    checkbox.addEventListener('change', () => {
      chip.classList.toggle('active', checkbox.checked);

      const activeFeatures = [];
      document.querySelectorAll('.quote-module-chip input[type="checkbox"]:checked').forEach(cb => {
        activeFeatures.push(cb.value);
      });
      quotationConfig.selectedFeatures = activeFeatures;
      updateQuotationSummary();
    });
  });

  // Dynamically sync initial checked features from DOM
  const initialChecked = Array.from(document.querySelectorAll('.quote-module-chip input[type="checkbox"]:checked')).map(cb => cb.value);
  if (initialChecked.length > 0) {
    quotationConfig.selectedFeatures = initialChecked;
  }

  const timelineItems = document.querySelectorAll('.quote-timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('click', () => {
      timelineItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const radio = item.querySelector('input[type="radio"]');
      if (radio) {
        radio.checked = true;
        quotationConfig.selectedTimeline = radio.value;
      }
      updateQuotationSummary();
    });
  });

  const nameEl = document.getElementById('calc-client-name');
  const emailEl = document.getElementById('calc-client-email');
  const companyEl = document.getElementById('calc-client-company');
  const notesEl = document.getElementById('calc-client-notes');

  if (nameEl) nameEl.addEventListener('input', (e) => { quotationConfig.clientName = e.target.value; updateQuotationSummary(); });
  if (emailEl) emailEl.addEventListener('input', (e) => { quotationConfig.clientEmail = e.target.value; updateQuotationSummary(); });
  if (companyEl) companyEl.addEventListener('input', (e) => { quotationConfig.clientCompany = e.target.value; updateQuotationSummary(); });
  if (notesEl) notesEl.addEventListener('input', (e) => { quotationConfig.clientNotes = e.target.value; updateQuotationSummary(); });

  updateQuotationSummary();
}

function updateQuotationSummary() {
  const typeText = document.getElementById('live-preview-type');
  const timelineText = document.getElementById('live-preview-timeline');
  const featuresBox = document.getElementById('live-preview-modules');
  const clientText = document.getElementById('live-preview-client');

  if (typeText) typeText.textContent = quotationConfig.selectedType;
  if (timelineText) timelineText.textContent = quotationConfig.selectedTimeline;

  if (featuresBox) {
    if (quotationConfig.selectedFeatures.length === 0) {
      featuresBox.innerHTML = '<span class="text-muted" style="font-size:12px;">Standard Core System</span>';
    } else {
      featuresBox.innerHTML = quotationConfig.selectedFeatures.map(f => `<span class="summary-pill">${f}</span>`).join(' ');
    }
  }

  if (clientText) {
    const name = quotationConfig.clientName.trim() || "Prospective Client";
    const email = quotationConfig.clientEmail.trim() ? ` (${quotationConfig.clientEmail.trim()})` : "";
    clientText.textContent = name + email;
  }
}

function generateQuotationText() {
  const name = quotationConfig.clientName.trim() || "Prospective Client";
  const email = quotationConfig.clientEmail.trim() || "Not provided";
  const company = quotationConfig.clientCompany.trim() || "Not provided";
  const notes = quotationConfig.clientNotes.trim() || "No additional custom specifications provided.";

  const featuresList = quotationConfig.selectedFeatures.length > 0
    ? quotationConfig.selectedFeatures.map(f => `  • ${f}`).join('\n')
    : "  • Standard core architecture";

  return `========================================================
PROJECT QUOTATION REQUEST
Recipient: Anas Iqbal (Senior Software Engineer)
Direct Email: anusiqbal33@gmail.com
========================================================

CLIENT INFORMATION:
- Contact Name: ${name}
- Work Email: ${email}
- Company / Organization: ${company}

PROJECT SCOPE & ARCHITECTURE:
- Selected System:
  ${quotationConfig.selectedType}

- Estimated Delivery Target:
  ${quotationConfig.selectedTimeline}

- Selected Features & Modules:
${featuresList}

- Project Brief & Specifications:
  ${notes}

========================================================
Generated via Anas Iqbal Portfolio (Executive Edition)
Portfolio Link: https://m-anas-iqbal.github.io
========================================================`;
}

function sendQuoteViaEmail() {
  const clientName = quotationConfig.clientName.trim() || "Client";
  const subject = encodeURIComponent(`Project Quotation Request - ${clientName} [${quotationConfig.selectedType}]`);
  const body = encodeURIComponent(generateQuotationText());

  const mailtoUrl = `mailto:anusiqbal33@gmail.com?subject=${subject}&body=${body}`;

  showAppToast("Opening your email client to send quotation...", "bi-envelope-check");

  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 350);
}

function copyQuoteToClipboard() {
  const text = generateQuotationText();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showAppToast("✓ Quotation copied to clipboard! Paste directly into Gmail, Outlook, or WhatsApp.", "bi-clipboard-check");
    }).catch(() => {
      fallbackClipboard(text);
    });
  } else {
    fallbackClipboard(text);
  }
}

function fallbackClipboard(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
  showAppToast("✓ Quotation copied to clipboard!", "bi-clipboard-check");
}

function showAppToast(message, iconClass = "bi-check-circle") {
  let toast = document.getElementById('app-toast-box');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast-box';
    toast.className = 'app-toast-box';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="bi ${iconClass}"></i> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function copyContactEmail() {
  const email = "anusiqbal33@gmail.com";
  if (navigator.clipboard) {
    navigator.clipboard.writeText(email).then(() => {
      showAppToast(`✓ Email copied: ${email}`, "bi-clipboard-check");
    });
  } else {
    fallbackClipboard(email);
  }
}

function openProjectModal(idx) {
  const project = projectData[idx];
  if (!project) return;

  const modal = document.getElementById('project-detail-modal');
  if (!modal) return;

  const modalCat = modal.querySelector('.modal-cat-text');
  const modalTitle = modal.querySelector('.modal-title-text');
  const modalTech = modal.querySelector('.modal-tech-text');
  const modalDesc = modal.querySelector('.modal-desc-text');
  const modalLink = modal.querySelector('.modal-live-link');
  const modalQuoteBtn = modal.querySelector('.modal-quote-trigger');
  const swiperWrap = modal.querySelector('.modal-swiper-track');

  if (modalCat) modalCat.textContent = project.category[1];
  if (modalTitle) modalTitle.textContent = project.title;
  if (modalTech) modalTech.textContent = project.tech;
  if (modalDesc) modalDesc.textContent = project.description || project.shortDesc;

  if (modalLink) {
    if (project.link && project.link !== "#") {
      modalLink.href = project.link;
      modalLink.style.display = "inline-flex";
    } else {
      modalLink.style.display = "none";
    }
  }

  if (modalQuoteBtn) {
    modalQuoteBtn.onclick = () => {
      closeProjectModal();
      const quoteSec = document.getElementById('quotation');
      if (quoteSec) quoteSec.scrollIntoView({ behavior: 'smooth' });
    };
  }

  if (swiperWrap) {
    swiperWrap.innerHTML = project.slider.map(img => `
      <div class="swiper-slide text-center">
        <img src="${img}" alt="${project.title}" class="img-fluid rounded" style="max-height: 480px; width: 100%; object-fit: contain;">
      </div>
    `).join('');
  }

  modal.classList.add('show');

  if (typeof Swiper !== 'undefined') {
    new Swiper('.modal-slider-container', {
      speed: 500,
      loop: project.slider.length > 1,
      pagination: { el: '.modal-slider-pagination', clickable: true }
    });
  }
}

function closeProjectModal() {
  const modal = document.getElementById('project-detail-modal');
  if (modal) modal.classList.remove('show');
}

function appendTestimonials(testimonials) {
  const wrapper = document.querySelector('.testimonials-swiper .swiper-wrapper');
  if (!wrapper) return;

  wrapper.innerHTML = testimonials.map(t => `
    <div class="swiper-slide">
      <div class="testi-slide-card">
        <div class="testi-quote-icon"><i class="bi bi-quote"></i></div>
        <p class="testi-quote-text">"${t.quote}"</p>
        <div class="testi-client-profile">
          <img src="${t.image}" class="testi-client-avatar" alt="${t.name}">
          <div>
            <h4>${t.name}</h4>
            <span>${t.position}</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-swiper', {
      speed: 600,
      loop: true,
      autoplay: { delay: 5000, disableOnInteraction: false },
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 2, spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 24 }
      }
    });
  }
}

function initNavbar() {
  const navbar = document.getElementById('site-navbar');
  const mobileBtn = document.querySelector('.mobile-nav-btn');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-link-item a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    const sections = document.querySelectorAll('section[id], header[id]');
    let currentId = 'hero';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const icon = mobileBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('bi-list');
        icon.classList.toggle('bi-x');
      }
    });

    navLinks.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('click', () => {
        navLinks.classList.remove('open');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
          icon.classList.add('bi-list');
          icon.classList.remove('bi-x');
        }
      });
    });
  }
}

function initScrollToTop() {
  const floatingAction = document.getElementById('floating-scroll-action');
  if (!floatingAction) return;
  const scrollTopBtn = floatingAction.querySelector('.scroll-top-btn');

  const checkScroll = () => {
    if (window.scrollY > 350) {
      floatingAction.classList.add('visible');
    } else {
      floatingAction.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/*--------------------------------------------------------------
# 6. MASTER BOOTSTRAP INITIALIZATION
--------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initNavbar();
  initScrollToTop();
  initThreeScene();
  initQuotationCalculator();
  initByChudyInteractiveDesktop();
  populateProjectLaunchers();
  appendTestimonials(testimonialsData);
  initGsapScrollAnimations();

  // Initialize Typed.js on hero
  if (typeof Typed !== 'undefined') {
    const typingEl = document.querySelector('.typing');
    if (typingEl) {
      new Typed(typingEl, {
        strings: [
          "Senior Software Engineer",
          "Full Stack Architect",
          "Business Solutions Architect",
          "Enterprise ERP & POS Specialist",
          "AI & Agentic Systems Engineer"
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1800,
        loop: true
      });
    }
  }

  const modal = document.getElementById('project-detail-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  // Initialize Executive Theme Studio (20 Palettes)
  initThemeStudio();

  // Recalculate ScrollTrigger offsets once dynamic DOM elements are inserted
  if (typeof ScrollTrigger !== 'undefined') {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
  }
});

/*--------------------------------------------------------------
# 7. 🎨 EXECUTIVE THEME STUDIO (20 CURATED PALETTES ENGINE)
--------------------------------------------------------------*/
const THEME_PALETTES = [
  // ☀️ GROUP 1: 7 LIGHT PALETTES
  {
    id: 'light-1',
    name: 'Cyber Emerald & Champagne Gold',
    category: 'light',
    badge: 'Light ☀️',
    badgeClass: 'theme-badge-light',
    vibe: 'Fintech & Executive Luxury (Linear / Stripe)',
    colors: { c1: '#0d9488', c2: '#d97706', c3: '#10b981', c4: '#f8fafc', c5: '#e2e8f0', c6: '#090d16' }
  },
  {
    id: 'light-2',
    name: 'Kyoto Matcha & Warm Terracotta',
    category: 'light',
    badge: 'Light ☀️',
    badgeClass: 'theme-badge-light',
    vibe: 'Editorial Zen Studio & Japanese Wabi-Sabi',
    colors: { c1: '#2d5a43', c2: '#c25e40', c3: '#b47b44', c4: '#fcfaf6', c5: '#e7dfd5', c6: '#1c2826' }
  },
  {
    id: 'light-3',
    name: 'Sunlit Tangelo & Pacific Sapphire',
    category: 'light',
    badge: 'Light ☀️',
    badgeClass: 'theme-badge-light',
    vibe: 'Ultra Vibrant & High-Energy California Daytime',
    colors: { c1: '#ea580c', c2: '#059669', c3: '#2563eb', c4: '#fffbf5', c5: '#fed7aa', c6: '#1c1917' }
  },
  {
    id: 'light-4',
    name: 'Parisian Rose Atelier & Lavender',
    category: 'light',
    badge: 'Light ☀️',
    badgeClass: 'theme-badge-light',
    vibe: 'High Fashion & Luxury Atelier (Cartier / Vogue)',
    colors: { c1: '#be123c', c2: '#7c3aed', c3: '#db2777', c4: '#fff5f7', c5: '#fce7f3', c6: '#310d20' }
  },
  {
    id: 'light-5',
    name: 'Aegean Breeze & Coral Shore',
    category: 'light',
    badge: 'Light ☀️',
    badgeClass: 'theme-badge-light',
    vibe: 'Mediterranean Coastal Cloud & Deep Marine',
    colors: { c1: '#0284c7', c2: '#f43f5e', c3: '#0d9488', c4: '#f0f9ff', c5: '#bae6fd', c6: '#082f49' }
  },
  {
    id: 'light-6',
    name: 'Tuscan Olive Grove & Golden Ochre',
    category: 'light',
    badge: 'Light ☀️',
    badgeClass: 'theme-badge-light',
    vibe: 'Earthy Italian Villa & Heritage Craftsmanship',
    colors: { c1: '#4d7c0f', c2: '#d97706', c3: '#b91c1c', c4: '#fefce8', c5: '#fef08a', c6: '#1a2e05' }
  },
  {
    id: 'light-7',
    name: 'Swiss Minimalist & Bauhaus Cobalt',
    category: 'light',
    badge: 'Light ☀️',
    badgeClass: 'theme-badge-light',
    vibe: 'Pristine Swiss Grid Typography & Atelier',
    colors: { c1: '#1d4ed8', c2: '#dc2626', c3: '#eab308', c4: '#ffffff', c5: '#e5e7eb', c6: '#111827' }
  },

  // 🌙 GROUP 2: 7 DARK PALETTES
  {
    id: 'dark-8',
    name: 'Obsidian Matrix & Neon Cyan',
    category: 'dark',
    badge: 'Dark 🌙',
    badgeClass: 'theme-badge-dark',
    vibe: 'Deep Dark Terminal / Next-Gen Cyberspace',
    colors: { c1: '#00f2fe', c2: '#818cf8', c3: '#10b981', c4: '#090d16', c5: '#1e293b', c6: '#f8fafc' }
  },
  {
    id: 'dark-9',
    name: 'Onyx Titanium & Molten Amber Gold',
    category: 'dark',
    badge: 'Dark 🌙',
    badgeClass: 'theme-badge-dark',
    vibe: 'Executive Black & Gold Luxury (Apple Pro / Leica)',
    colors: { c1: '#f59e0b', c2: '#fb923c', c3: '#eab308', c4: '#121214', c5: '#27272a', c6: '#fafafa' }
  },
  {
    id: 'dark-10',
    name: 'Cyber Forest & Phosphor Mint',
    category: 'dark',
    badge: 'Dark 🌙',
    badgeClass: 'theme-badge-dark',
    vibe: 'Bioluminescent Rainforest & Emerald Mint',
    colors: { c1: '#10b981', c2: '#06b6d4', c3: '#34d399', c4: '#051311', c5: '#0f2923', c6: '#ecfdf5' }
  },
  {
    id: 'dark-11',
    name: 'Velvet Galaxy & Royal Violet',
    category: 'dark',
    badge: 'Dark 🌙',
    badgeClass: 'theme-badge-dark',
    vibe: 'Cosmic Nebula & Deep Space Intelligence',
    colors: { c1: '#a855f7', c2: '#ec4899', c3: '#6366f1', c4: '#0f0728', c5: '#241442', c6: '#faf5ff' }
  },
  {
    id: 'dark-12',
    name: 'Blood Moon Ruby & Crimson Ember',
    category: 'dark',
    badge: 'Dark 🌙',
    badgeClass: 'theme-badge-dark',
    vibe: 'Dark Knight Fantasy & Volcanic Obsidian Glass',
    colors: { c1: '#f43f5e', c2: '#fb7185', c3: '#f97316', c4: '#130307', c5: '#2d0b13', c6: '#fff1f2' }
  },
  {
    id: 'dark-13',
    name: 'Stealth Carbon & Glacier Ice',
    category: 'dark',
    badge: 'Dark 🌙',
    badgeClass: 'theme-badge-dark',
    vibe: 'Stealth Aerospace & Nordic Aurora Tech',
    colors: { c1: '#38bdf8', c2: '#2dd4bf', c3: '#60a5fa', c4: '#0b0f19', c5: '#1e293b', c6: '#f0fdf4' }
  },
  {
    id: 'dark-14',
    name: 'Dark Roast Espresso & Caramel',
    category: 'dark',
    badge: 'Dark 🌙',
    badgeClass: 'theme-badge-dark',
    vibe: 'Speakeasy Whiskey Lounge & Smoked Oak',
    colors: { c1: '#d97706', c2: '#b45309', c3: '#f59e0b', c4: '#17120e', c5: '#2e221b', c6: '#fef3c7' }
  },

  // ⚡ GROUP 3: 6 NEON & FUNKY PALETTES
  {
    id: 'neon-15',
    name: 'Miami Vice 80s Synthwave',
    category: 'neon',
    badge: 'Neon ⚡',
    badgeClass: 'theme-badge-neon',
    vibe: 'High-Voltage Cyber Synthwave (Miami Nights)',
    colors: { c1: '#ff007f', c2: '#00f0ff', c3: '#39ff14', c4: '#0a0618', c5: '#26133e', c6: '#ffffff' }
  },
  {
    id: 'neon-16',
    name: 'Radioactive Matrix Terminal',
    category: 'neon',
    badge: 'Neon ⚡',
    badgeClass: 'theme-badge-neon',
    vibe: '90s Hacker Console & Cyber Weapon Plasma',
    colors: { c1: '#00ff66', c2: '#10e6d6', c3: '#e2ff3b', c4: '#020904', c5: '#0a2412', c6: '#dcfce7' }
  },
  {
    id: 'neon-17',
    name: 'Y2K Acid Pop & Hyper Sunset',
    category: 'neon',
    badge: 'Funky 🚀',
    badgeClass: 'theme-badge-neon',
    vibe: 'Rave Culture / Pop-Art Maximalism (MTV Y2K)',
    colors: { c1: '#ffdd00', c2: '#ff2a85', c3: '#8a2be2', c4: '#0e0b16', c5: '#301934', c6: '#fffdf0' }
  },
  {
    id: 'neon-18',
    name: 'Bubblegum Vaporwave & Pastel',
    category: 'neon',
    badge: 'Funky 🌸',
    badgeClass: 'theme-badge-neon',
    vibe: 'Aesthetic Windows 95 & Japanese City Pop',
    colors: { c1: '#ff70a6', c2: '#70d6ff', c3: '#ffd670', c4: '#170b22', c5: '#361b4d', c6: '#ffeffa' }
  },
  {
    id: 'neon-19',
    name: 'Glitchpunk Laser Arcade',
    category: 'neon',
    badge: 'Neon 👾',
    badgeClass: 'theme-badge-neon',
    vibe: 'Tokyo Akihabara Neo-Arcade & CRT Phosphor',
    colors: { c1: '#ff5e00', c2: '#00e5ff', c3: '#d500f9', c4: '#05050f', c5: '#1c1236', c6: '#ffffff' }
  },
  {
    id: 'neon-20',
    name: '70s Retro Disco & Funky Vinyl',
    category: 'neon',
    badge: 'Funky 🕺',
    badgeClass: 'theme-badge-neon',
    vibe: 'Groovy Soul / Woodstock Nostalgia / Vintage',
    colors: { c1: '#f59e0b', c2: '#ea580c', c3: '#84cc16', c4: '#1c130c', c5: '#3d2617', c6: '#fef08a' }
  }
];

let activeThemeId = 'light-1';

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const num = parseInt(hex, 16);
  return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
}

function applyPalette(themeInput, save = true) {
  let theme = null;
  if (typeof themeInput === 'string') {
    theme = THEME_PALETTES.find(t => t.id === themeInput);
  } else if (themeInput && themeInput.colors) {
    theme = themeInput;
  }
  if (!theme) return;

  activeThemeId = theme.id;
  const root = document.documentElement;

  // 1. Set CSS root variables
  root.style.setProperty('--c1', theme.colors.c1);
  root.style.setProperty('--c2', theme.colors.c2);
  root.style.setProperty('--c3', theme.colors.c3);
  root.style.setProperty('--c4', theme.colors.c4);
  root.style.setProperty('--c5', theme.colors.c5);
  root.style.setProperty('--c6', theme.colors.c6);
  root.style.setProperty('--primary-rgb', hexToRgb(theme.colors.c1));

  // 2. Update browser meta theme-color
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', theme.colors.c1);

  // 3. Update Three.js 3D meshes & lights in real time
  if (typeof THREE !== 'undefined') {
    const cPrimary = new THREE.Color(theme.colors.c1);
    const cAccent = new THREE.Color(theme.colors.c2);

    if (knotMeshRef && knotMeshRef.material) knotMeshRef.material.color = cPrimary;
    if (coreMeshRef && coreMeshRef.material) coreMeshRef.material.color = cAccent;
    if (ring1MeshRef && ring1MeshRef.material) ring1MeshRef.material.color = cPrimary;
    if (ring2MeshRef && ring2MeshRef.material) ring2MeshRef.material.color = cAccent;
    if (lightPrimaryRef) lightPrimaryRef.color = cPrimary;
    if (lightAccentRef) lightAccentRef.color = cAccent;
  }

  // 4. Update UI cards active state
  document.querySelectorAll('.theme-card-pill').forEach(card => {
    card.classList.toggle('active', card.dataset.themeId === theme.id);
  });

  const tag = document.getElementById('theme-active-tag');
  if (tag) tag.textContent = `${theme.name} (${theme.badge})`;

  // 5. Save to localStorage
  if (save) {
    try {
      localStorage.setItem('anas_portfolio_theme', theme.id);
    } catch (e) { }
    showAppToast(`🎨 Theme: ${theme.name}`, "bi-palette2");
  }
}
window.applyPalette = applyPalette;

window.renderThemeCards = function (filter = 'all') {
  const container = document.getElementById('themeCardsGrid');
  if (!container) return;

  const filtered = filter === 'all'
    ? THEME_PALETTES
    : THEME_PALETTES.filter(t => t.category === filter);

  container.innerHTML = filtered.map(t => {
    const isActive = t.id === activeThemeId ? 'active' : '';
    return `
      <div class="theme-card-pill ${isActive}" data-theme-id="${t.id}" onclick="applyPalette('${t.id}')">
        <div class="theme-swatch-strip">
          <span style="background: ${t.colors.c1};" title="Primary: ${t.colors.c1}"></span>
          <span style="background: ${t.colors.c2};" title="Accent: ${t.colors.c2}"></span>
          <span style="background: ${t.colors.c3};" title="Highlight: ${t.colors.c3}"></span>
          <span style="background: ${t.colors.c4};" title="Background: ${t.colors.c4}"></span>
        </div>
        <div class="theme-card-header">
          <h4 class="theme-card-title">${t.name}</h4>
          <span class="theme-card-badge ${t.badgeClass}">${t.badge}</span>
        </div>
        <p class="theme-card-vibe">${t.vibe}</p>
        <div class="theme-card-check"><i class="bi bi-check-lg"></i></div>
      </div>
    `;
  }).join('');
};

window.filterThemeCards = function (cat) {
  document.querySelectorAll('.theme-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === cat);
  });
  renderThemeCards(cat);
};

window.shuffleTheme = function () {
  const currentIndex = THEME_PALETTES.findIndex(t => t.id === activeThemeId);
  let nextIndex;
  do {
    nextIndex = Math.floor(Math.random() * THEME_PALETTES.length);
  } while (nextIndex === currentIndex && THEME_PALETTES.length > 1);

  const picked = THEME_PALETTES[nextIndex];
  applyPalette(picked.id);

  // Smooth scroll active card into view in modal
  setTimeout(() => {
    const card = document.querySelector(`.theme-card-pill[data-theme-id="${picked.id}"]`);
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);
};

window.openThemeStudio = function () {
  const modal = document.getElementById('theme-studio-modal');
  if (!modal) return;
  renderThemeCards('all');
  modal.classList.add('show');
};

window.closeThemeStudio = function () {
  const modal = document.getElementById('theme-studio-modal');
  if (modal) modal.classList.remove('show');
};

window.toggleThemeStudio = function () {
  const modal = document.getElementById('theme-studio-modal');
  if (!modal) return;
  if (modal.classList.contains('show')) {
    closeThemeStudio();
  } else {
    openThemeStudio();
  }
};

function initThemeStudio() {
  // Listen for backdrop click on theme studio modal
  const modal = document.getElementById('theme-studio-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeThemeStudio();
    });
  }

  // Restore saved theme or default to Palette 1
  let savedId = null;
  try {
    savedId = localStorage.getItem('anas_portfolio_theme');
  } catch (e) { }

  if (savedId && THEME_PALETTES.some(t => t.id === savedId)) {
    applyPalette(savedId, false);
  } else {
    // Default to Palette 1
    applyPalette('light-1', false);
  }
}
