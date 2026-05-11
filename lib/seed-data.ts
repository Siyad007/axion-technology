import { Category, Product } from "@/types";

export const CATEGORIES: Category[] = [
  {
    id: "cat-1",
    name: "LED Display Systems",
    slug: "led-displays",
    description: "Axion delivers professional LED display solutions ranging from rental-grade indoor and outdoor LED screens to premium fixed installation COB, MIP, and fine-pitch displays for events, exhibitions, command centers, corporate environments, retail spaces, entertainment venues, and immersive visual experiences.\n\nProduct Categories: Indoor Rental LED Displays, Outdoor Rental LED Displays, Fine Pitch LED Displays, COB LED Displays, MIP LED Displays, Creative LED Displays, Curved & Transparent LED Displays, All-in-One LED Displays, Fixed Installation LED Systems.",
    tagline: "Brilliant Visuals for Every Environment.",
    icon: "Monitor",
    image: "/images/categories/led-displays.png",
    parent_id: null,
    sort_order: 1,
    is_active: true,
    created_at: new Date().toISOString(),
    product_count: 9,
  },
  {
    id: "cat-2",
    name: "LCD Screens & Interactive Kiosks",
    slug: "lcd-kiosks",
    description: "Axion provides advanced LCD displays, touch screens, interactive kiosks, digital signage systems, and enterprise collaboration solutions designed for smart offices, exhibitions, museums, retail environments, visitor engagement, and modern interactive experiences.\n\nProduct Categories: Interactive Touch Screens, Digital Signage Displays, Interactive Kiosks, OLED Displays, Transparent OLED Systems, Self-Service Kiosks, Enterprise Collaboration Displays, Meeting Room Solutions, Information & Wayfinding Systems.",
    tagline: "Smart Displays for Connected Experiences.",
    icon: "Tv",
    image: "/images/categories/lcd-kiosks.png",
    parent_id: null,
    sort_order: 2,
    is_active: true,
    created_at: new Date().toISOString(),
    product_count: 9,
  },
  {
    id: "cat-3",
    name: "Lighting Systems",
    slug: "lighting",
    description: "Axion offers professional stage and architectural lighting solutions including moving heads, beam, wash, profile, effect, and outdoor lighting systems engineered for live events, entertainment productions, exhibitions, venues, and dynamic visual environments.\n\nProduct Categories: Moving Head Lights, Beam Lights, Wash Lights, Hybrid Fixtures, Profile Lights, Outdoor IP Lighting, Architectural Lighting, Effect Lighting, Follow Spots, DMX & Control Systems.",
    tagline: "Dynamic Lighting for Immersive Spaces.",
    icon: "Zap",
    image: "/images/categories/lighting.png",
    parent_id: null,
    sort_order: 3,
    is_active: true,
    created_at: new Date().toISOString(),
    product_count: 10,
  },
  {
    id: "cat-4",
    name: "Professional Audio Systems",
    slug: "pro-audio",
    description: "Axion supplies professional sound systems including line arrays, speakers, subwoofers, amplifiers, DSP systems, and installation audio solutions tailored for events, corporate spaces, auditoriums, entertainment venues, and public environments requiring reliable and high-quality audio performance.\n\nProduct Categories: Line Array Systems, Professional Speakers, Subwoofers, Amplifiers, DSP Systems, Installation Audio, Conference Audio Systems, Portable Sound Systems, Wireless Audio Solutions.",
    tagline: "Precision Audio for Powerful Experiences.",
    icon: "Volume2",
    image: "/images/categories/audio.png",
    parent_id: null,
    sort_order: 4,
    is_active: true,
    created_at: new Date().toISOString(),
    product_count: 9,
  },
  {
    id: "cat-5",
    name: "Power Distribution & Cable Solutions",
    slug: "power-cable",
    description: "Axion provides reliable power distribution systems, electrical distribution units, signal management solutions, and professional-grade power, audio, video, and data cabling designed to support demanding event, broadcast, AV, and fixed installation environments.\n\nProduct Categories: Power Distribution Units, Event Power Systems, Signal Distribution Systems, Power Cables, Audio Cables, Video & Data Cables, DMX & Signal Solutions, Connectors & Accessories, Cable Management Solutions.",
    tagline: "Engineered Connectivity. Reliable Performance.",
    icon: "Cable",
    image: "/images/categories/power-cable.png",
    parent_id: null,
    sort_order: 5,
    is_active: true,
    created_at: new Date().toISOString(),
    product_count: 9,
  },
];

export const PRODUCTS: Product[] = [
  // CATEGORY 1: LED Displays
  {
    id: "prod-1", name: "AxionStar P2.5 Indoor Fine-Pitch LED", slug: "axionstar-p2-5-indoor-led", category_id: "cat-1",
    short_description: "Ultra-fine pitch indoor LED display delivering stunning 4K clarity and seamless tiling for control rooms and studios.",
    full_description: "The AxionStar P2.5 is engineered for the most demanding indoor environments. With a pixel pitch of 2.5mm and peak brightness of 1200 nits, it delivers crystal-clear imagery at close viewing distances. Its modular cabinet design enables seamless tiling to any size and aspect ratio — from boardrooms to broadcast studios.",
    tagline: "4K clarity. Zero compromise.", featured_image: "/images/products/prod_indoor_led.png", gallery: ["/images/products/prod_indoor_led.png"],
    specifications: [
      { group: "Display", items: [
        { label: "Pixel Pitch", value: "2.5 mm" },
        { label: "Brightness", value: "1200 nits" },
        { label: "Contrast Ratio", value: "5000:1" },
        { label: "Refresh Rate", value: "3840 Hz" },
        { label: "Viewing Angle", value: "160° / 140° H/V" },
        { label: "IP Rating", value: "IP33 (Indoor)" }
      ]}
    ],
    features: [
      { title: "Seamless Tiling", description: "Zero-gap cabinet design for any configuration.", icon: "Grid" },
      { title: "High Refresh Rate", description: "3840 Hz refresh eliminates flicker on camera.", icon: "Zap" },
      { title: "Tool-free Service", description: "Front and rear access for rapid maintenance.", icon: "Wrench" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: true, is_active: true, sort_order: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-2", name: "AxionMax P4 Outdoor LED Billboard", slug: "axionmax-p4-outdoor-led", category_id: "cat-1",
    short_description: "IP65-rated outdoor LED billboard with 8000 nit peak brightness delivering daylight-visible imagery for advertising.",
    full_description: "Built for the harshest outdoor conditions, the AxionMax P4 delivers blazing-bright imagery with full IP65 weatherproofing. Auto brightness adjustment based on ambient light ensures energy efficiency across all conditions.",
    tagline: "Daylight-visible. Weather-proof.", featured_image: "/images/products/prod_outdoor_led.png", gallery: ["/images/products/prod_outdoor_led.png"],
    specifications: [
      { group: "Display", items: [
        { label: "Pixel Pitch", value: "4.0 mm" },
        { label: "Brightness", value: "8000 nits" },
        { label: "Contrast Ratio", value: "8000:1" },
        { label: "Refresh Rate", value: "3840 Hz" },
        { label: "IP Rating", value: "IP65" },
        { label: "Operating Temp", value: "-20°C to +60°C" }
      ]}
    ],
    features: [
      { title: "IP65 Weatherproof", description: "Fully sealed against dust and direct water jets.", icon: "Shield" },
      { title: "Smart Dimming", description: "Auto brightness adjustment based on ambient light.", icon: "Sun" },
      { title: "Energy Efficient", description: "Advanced power supply reduces consumption by 30%.", icon: "BatteryCharging" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: true, is_active: true, sort_order: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-2b", name: "AxionCurve P3 Flexible LED", slug: "axioncurve-p3-flexible", category_id: "cat-1",
    short_description: "Soft LED modules allowing for creative curved and cylindrical display installations in retail and exhibitions.",
    full_description: "Unleash creative architectures with AxionCurve. These highly flexible magnetic modules allow for convex and concave formations, perfect for column wraps, wave displays, and custom retail installations.",
    tagline: "Bend the rules of display.", featured_image: "/images/products/prod_curved_led.png", gallery: ["/images/products/prod_curved_led.png"],
    specifications: [
      { group: "Display", items: [
        { label: "Pixel Pitch", value: "3.0 mm" },
        { label: "Flexibility", value: "Convex & Concave" },
        { label: "Brightness", value: "1000 nits" },
        { label: "Module Weight", value: "0.45 kg" },
        { label: "Mounting", value: "Magnetic Force" },
        { label: "Lifespan", value: "100,000 Hours" }
      ]}
    ],
    features: [
      { title: "Magnetic Mount", description: "Easy front installation and replacement.", icon: "Magnet" },
      { title: "Ultra-Flexible", description: "Can bend to form tight cylinders and waves.", icon: "Activity" },
      { title: "Seamless Curves", description: "Perfectly smooth curved surfaces without gaps.", icon: "Maximize" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 3, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-2c", name: "AxionClear Transparent Window LED", slug: "axionclear-transparent-led", category_id: "cat-1",
    short_description: "High-transparency LED mesh for retail windows, allowing natural light in while displaying vibrant video content.",
    full_description: "Transform glass facades into high-impact advertising surfaces without blocking natural light. The AxionClear boasts up to 75% transparency with a brightness that easily cuts through direct sunlight.",
    tagline: "See through the noise.", featured_image: "/images/products/prod_transparent_led.png", gallery: ["/images/products/prod_transparent_led.png"],
    specifications: [
      { group: "Display", items: [
        { label: "Pixel Pitch", value: "3.9 mm / 7.8 mm" },
        { label: "Transparency", value: "Up to 75%" },
        { label: "Brightness", value: "5000 nits" },
        { label: "Cabinet Weight", value: "12 kg / m²" },
        { label: "Installation", value: "Hanging / Stacking" },
        { label: "Application", value: "Glass Facades" }
      ]}
    ],
    features: [
      { title: "High Transparency", description: "Maintains visibility and natural lighting.", icon: "Eye" },
      { title: "Lightweight Frame", description: "Minimal structural support required.", icon: "Feather" },
      { title: "Daylight Visible", description: "5000 nits brightness cuts through direct sun.", icon: "Sun" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 4, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },

  // CATEGORY 2: LCD Screens & Kiosks
  {
    id: "prod-3", name: "AxionTouch 65\" Interactive Display", slug: "axiontouch-65-interactive", category_id: "cat-2",
    short_description: "4K ultra-HD interactive touchscreen panel designed for modern boardrooms and collaborative education environments.",
    full_description: "Enhance team collaboration with the AxionTouch 65. Featuring 20-point multi-touch, integrated Android OS, and anti-glare tempered glass, it's the ultimate hub for brainstorming and presentations.",
    tagline: "Touch the future of collaboration.", featured_image: "/images/products/prod_touch_display.png", gallery: ["/images/products/prod_touch_display.png"],
    specifications: [
      { group: "Display", items: [
        { label: "Resolution", value: "4K UHD (3840x2160)" },
        { label: "Touch Points", value: "20-Point Infrared" },
        { label: "Brightness", value: "450 nits" },
        { label: "Glass", value: "4mm Anti-Glare Tempered" },
        { label: "OS", value: "Android 11 / Windows OPS" },
        { label: "Speakers", value: "2x 15W Built-in" }
      ]}
    ],
    features: [
      { title: "Multi-Touch", description: "Smooth 20-point simultaneous interaction.", icon: "Pointer" },
      { title: "Anti-Glare", description: "Clear viewing from all angles under bright lights.", icon: "Sun" },
      { title: "Wireless Casting", description: "Share screens from any device instantly.", icon: "Wifi" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: true, is_active: true, sort_order: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-4", name: "AxionSignage 55\" Digital Menu Board", slug: "axionsignage-55-menu-board", category_id: "cat-2",
    short_description: "Ultra-slim bezel LCD digital signage display engineered for 24/7 continuous operation in retail and QSR.",
    full_description: "The AxionSignage 55 delivers vibrant, true-to-life colors that make content pop. With a built-in media player and centralized content management software, it's perfect for menus and retail advertising.",
    tagline: "Vibrant signage that never sleeps.", featured_image: "/images/products/prod_digital_signage.png", gallery: ["/images/products/prod_digital_signage.png"],
    specifications: [
      { group: "Display", items: [
        { label: "Panel Type", value: "IPS Commercial" },
        { label: "Operation", value: "24/7 Continuous" },
        { label: "Brightness", value: "700 nits" },
        { label: "Bezel Width", value: "3.5mm Even Bezel" },
        { label: "Orientation", value: "Portrait / Landscape" },
        { label: "Connectivity", value: "HDMI, DP, USB, LAN" }
      ]}
    ],
    features: [
      { title: "24/7 Operation", description: "Commercial-grade reliability for non-stop use.", icon: "Clock" },
      { title: "Built-in Player", description: "Integrated SoC for seamless content playback.", icon: "PlayCircle" },
      { title: "Ultra-Slim Bezel", description: "Sleek aesthetic that blends into any environment.", icon: "Maximize" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-5", name: "AxionWayfinder 43\" Dual-Sided Kiosk", slug: "axionwayfinder-43", category_id: "cat-2",
    short_description: "Freestanding dual-sided interactive kiosk for shopping malls, airports, and large exhibition venues.",
    full_description: "Guide your visitors seamlessly with the AxionWayfinder. Featuring two high-brightness 43-inch screens encased in a sleek, tamper-proof metallic chassis, providing maximum ROI in heavy footfall areas.",
    tagline: "Point the way with elegance.", featured_image: "/images/categories/lcd-kiosks.png", gallery: ["/images/categories/lcd-kiosks.png"],
    specifications: [
      { group: "Design", items: [
        { label: "Screens", value: "Dual 43-inch IPS" },
        { label: "Chassis", value: "Powder-Coated Steel" },
        { label: "Brightness", value: "700 nits per side" },
        { label: "Touch capability", value: "10-Point PCAP" },
        { label: "Security", value: "Tamper-Proof Locks" },
        { label: "Cooling", value: "Silent Smart Fans" }
      ]}
    ],
    features: [
      { title: "Dual Display", description: "Double the audience reach and interactive capacity.", icon: "Monitor" },
      { title: "PCAP Touch", description: "Edge-to-edge glass with responsive touch.", icon: "Pointer" },
      { title: "Robust Chassis", description: "Vandal-resistant housing for public spaces.", icon: "Shield" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: true, is_active: true, sort_order: 3, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-6", name: "AxionOLED 55\" Transparent Display", slug: "axionoled-55-transparent", category_id: "cat-2",
    short_description: "Futuristic transparent OLED screen allowing users to see physical products behind digital content.",
    full_description: "Redefine retail showcases with the AxionOLED. This transparent display blends digital AR content with physical objects sitting behind the glass, creating an unforgettable luxury retail experience.",
    tagline: "The magic of transparent pixels.", featured_image: "/images/categories/lcd-kiosks.png", gallery: ["/images/categories/lcd-kiosks.png"],
    specifications: [
      { group: "Display", items: [
        { label: "Panel Technology", value: "Transparent OLED" },
        { label: "Transparency", value: "38%" },
        { label: "Contrast Ratio", value: "150,000:1" },
        { label: "Color Gamut", value: "120% sRGB" },
        { label: "Thickness", value: "6.6 mm" },
        { label: "Viewing Angle", value: "178° / 178°" }
      ]}
    ],
    features: [
      { title: "Self-Lit Pixels", description: "Perfect blacks without a backlight.", icon: "Lightbulb" },
      { title: "AR Experience", description: "Merge physical products with digital overlays.", icon: "Layers" },
      { title: "Ultra-Thin", description: "Incredibly slim profile for luxury showcases.", icon: "Feather" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 4, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },

  // CATEGORY 3: Lighting Systems
  {
    id: "prod-7", name: "AxionBeam 350 Pro Moving Head", slug: "axionbeam-350-pro-moving-head", category_id: "cat-3",
    short_description: "350W beam/spot/wash hybrid moving head with CMY color mixing and motorized zoom for concerts.",
    full_description: "The AxionBeam 350 Pro combines three powerful functions in one fixture. CMY+CTO color mixing, 14-channel gobo wheel, and motorized zoom from 5° to 48° give lighting designers unmatched creative freedom.",
    tagline: "One fixture. Infinite looks.", featured_image: "/images/categories/lighting.png", gallery: ["/images/categories/lighting.png"],
    specifications: [
      { group: "Performance", items: [
        { label: "Source", value: "350W Discharge Lamp" },
        { label: "Zoom Range", value: "5° to 48° Motorized" },
        { label: "Color System", value: "CMY + CTO + Wheel" },
        { label: "Gobos", value: "14 Static + 9 Rotating" },
        { label: "Prism", value: "8-facet + 6-facet linear" },
        { label: "Pan / Tilt", value: "540° / 270° (16-bit)" }
      ]}
    ],
    features: [
      { title: "CMY Color Mixing", description: "Infinite color palette with seamless transitions.", icon: "Palette" },
      { title: "Hybrid Optics", description: "Functions as a Beam, Spot, or Wash.", icon: "Maximize" },
      { title: "Dual Prisms", description: "Overlay prisms for complex aerial effects.", icon: "Aperture" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: true, is_active: true, sort_order: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-8", name: "AxionWash 19x15W RGBW LED Wash", slug: "axionwash-19x15w", category_id: "cat-3",
    short_description: "High-output LED wash moving head featuring 19 individual 15W RGBW LEDs with pixel mapping capabilities.",
    full_description: "Bathe the stage in rich, uniform colors. The AxionWash features a massive zoom range and individual pixel control, allowing for stunning eye-candy effects as well as broad, powerful stage washes.",
    tagline: "Wash the stage in pure color.", featured_image: "/images/categories/lighting.png", gallery: ["/images/categories/lighting.png"],
    specifications: [
      { group: "Performance", items: [
        { label: "LED Array", value: "19 x 15W RGBW 4-in-1" },
        { label: "Zoom Range", value: "8° to 60° Motorized" },
        { label: "Control", value: "Pixel Mapping (Aura)" },
        { label: "Dimming", value: "0-100% 16-bit Linear" },
        { label: "DMX Channels", value: "16 / 24 / 92 CH" },
        { label: "Strobe", value: "1-25 Hz Variable" }
      ]}
    ],
    features: [
      { title: "Pixel Control", description: "Individual LED mapping for eye-candy effects.", icon: "Grid" },
      { title: "Wide Zoom", description: "From punchy narrow beams to massive wide washes.", icon: "ZoomIn" },
      { title: "Silent Operation", description: "Temperature-controlled fans for theatrical use.", icon: "Wind" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-9", name: "AxionProfile 600W LED Spot", slug: "axionprofile-600w", category_id: "cat-3",
    short_description: "Professional LED profile fixture with a 4-blade framing system for precise theatrical and broadcast lighting.",
    full_description: "Designed for the rigors of theatre and television. The AxionProfile 600W delivers a completely flat field of light, high CRI, and a rapid, precise motorized framing shutter system to cut light exactly where needed.",
    tagline: "Precision shaping. Flat field.", featured_image: "/images/categories/lighting.png", gallery: ["/images/categories/lighting.png"],
    specifications: [
      { group: "Performance", items: [
        { label: "Source", value: "600W White LED Engine" },
        { label: "CRI", value: "> 95 (High Color Rendition)" },
        { label: "Framing", value: "4-blade rotating module" },
        { label: "Iris", value: "Motorized linear iris" },
        { label: "Animation", value: "Bi-directional animation wheel" },
        { label: "Color Temp", value: "6500K Native" }
      ]}
    ],
    features: [
      { title: "Framing Shutters", description: "Precise light cutting for theatrical drops.", icon: "Scissors" },
      { title: "High CRI", description: "Perfect skin tone rendition for broadcast cameras.", icon: "Camera" },
      { title: "Flat Field Optics", description: "Perfectly even light distribution edge-to-edge.", icon: "Sun" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 3, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-10", name: "AxionPar IP65 Outdoor Wash", slug: "axionpar-ip65", category_id: "cat-3",
    short_description: "Rugged, IP65-rated LED Par fixture for architectural uplighting and outdoor event illumination.",
    full_description: "Built to withstand the elements, the AxionPar IP65 is the workhorse of outdoor events. Featuring silent operation and intense RGBWA+UV color mixing, it is perfect for illuminating facades and stages in any weather.",
    tagline: "Architectural power. Any weather.", featured_image: "/images/categories/lighting.png", gallery: ["/images/categories/lighting.png"],
    specifications: [
      { group: "Performance", items: [
        { label: "IP Rating", value: "IP65 (Waterproof)" },
        { label: "LEDs", value: "18 x 12W RGBWA+UV" },
        { label: "Beam Angle", value: "25° (Optional 15°/40°)" },
        { label: "Housing", value: "Die-cast Aluminum" },
        { label: "Connections", value: "Seetronic IP65 DMX/Power" },
        { label: "Cooling", value: "Convection (Fanless)" }
      ]}
    ],
    features: [
      { title: "Weatherproof", description: "Fully sealed for rain and outdoor operation.", icon: "CloudRain" },
      { title: "6-in-1 Color", description: "RGBWA+UV for deep saturated colors and blacklight.", icon: "Palette" },
      { title: "Fanless Design", description: "Completely silent convection cooling.", icon: "VolumeX" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 4, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },

  // CATEGORY 4: Audio Systems
  {
    id: "prod-11", name: "AxionLine LA-208 Line Array", slug: "axionline-la-208", category_id: "cat-4",
    short_description: "Dual 8-inch passive line array element with 120° horizontal dispersion delivering consistent coverage.",
    full_description: "The LA-208 delivers powerful, articulate sound with dual 8-inch neodymium woofers and a titanium compression driver. Designed for consistent 120° horizontal coverage across large venues.",
    tagline: "Line array. Perfectly tuned.", featured_image: "/images/categories/audio.png", gallery: ["/images/categories/audio.png"],
    specifications: [
      { group: "Acoustic", items: [
        { label: "LF Driver", value: "2× 8\" Neodymium" },
        { label: "HF Driver", value: "1× 3\" Titanium diaphragm" },
        { label: "Frequency Resp.", value: "65Hz – 18kHz (-10dB)" },
        { label: "SPL Max", value: "134 dB Peak" },
        { label: "Dispersion", value: "120° H x 10° V" },
        { label: "Impedance", value: "16 Ω" }
      ]}
    ],
    features: [
      { title: "Consistent Coverage", description: "120° horizontal ensures even SPL across the audience.", icon: "Waves" },
      { title: "Rigging System", description: "Integrated 3-point rigging hardware for quick flying.", icon: "Link" },
      { title: "Neodymium Drivers", description: "Lightweight components for easy array suspension.", icon: "Feather" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: true, is_active: true, sort_order: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-12", name: "AxionSub S218 Dual 18\" Subwoofer", slug: "axionsub-s218", category_id: "cat-4",
    short_description: "High-power dual 18-inch vented subwoofer extending low-frequency response down to 30Hz.",
    full_description: "The foundation of any serious PA system. The S218 features two long-excursion 18-inch transducers moving massive amounts of air to deliver chest-thumping bass for live concerts and club installations.",
    tagline: "Feel the foundation.", featured_image: "/images/categories/audio.png", gallery: ["/images/categories/audio.png"],
    specifications: [
      { group: "Acoustic", items: [
        { label: "Drivers", value: "2x 18\" Long Excursion" },
        { label: "Frequency Range", value: "30Hz - 120Hz (-10dB)" },
        { label: "Power Handling", value: "2400W RMS / 9600W Peak" },
        { label: "SPL Max", value: "140 dB Peak" },
        { label: "Enclosure", value: "18mm Birch Plywood" },
        { label: "Impedance", value: "4 Ω" }
      ]}
    ],
    features: [
      { title: "Massive SPL", description: "Chest-pounding low end up to 140dB.", icon: "Speaker" },
      { title: "Touring Grade", description: "Rugged polyurea finish and steel grilles.", icon: "Shield" },
      { title: "Vented Design", description: "Optimized ports eliminate chuffing and distortion.", icon: "Wind" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-13", name: "AxionAmp 4X1000 DSP Amplifier", slug: "axionamp-4x1000", category_id: "cat-4",
    short_description: "4-channel Class-D touring amplifier with integrated 96kHz DSP and Dante networking.",
    full_description: "Intelligent power for your speaker systems. The 4X1000 delivers 4x 1000W at 4 ohms with an incredibly lightweight Class-D topology, backed by a powerful 96kHz DSP engine for precise speaker tuning.",
    tagline: "Intelligent power. Absolute control.", featured_image: "/images/categories/audio.png", gallery: ["/images/categories/audio.png"],
    specifications: [
      { group: "Electronics", items: [
        { label: "Power Output", value: "4x 1000W @ 4Ω" },
        { label: "Amplifier Class", value: "Class-D High Efficiency" },
        { label: "DSP", value: "96kHz / 64-bit Processing" },
        { label: "Networking", value: "Dante / AES67" },
        { label: "Damping Factor", value: "> 5000" },
        { label: "Weight", value: "8.5 kg (2U Rack)" }
      ]}
    ],
    features: [
      { title: "Integrated DSP", description: "Advanced EQ, FIR filters, delay, and limiting.", icon: "Sliders" },
      { title: "Dante Networked", description: "Digital audio networking for flawless signal routing.", icon: "Activity" },
      { title: "Class-D Topology", description: "Lightweight and efficient touring power.", icon: "Zap" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 3, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-14", name: "AxionPoint 12\" Coaxial Stage Monitor", slug: "axionpoint-12", category_id: "cat-4",
    short_description: "Low-profile active coaxial stage monitor designed for vocal clarity and feedback resistance.",
    full_description: "The AxionPoint 12 uses a true coaxial design to ensure perfect phase alignment between the woofer and tweeter, delivering crystal-clear vocal reproduction that cuts through loud stage volumes.",
    tagline: "Hear every detail on stage.", featured_image: "/images/categories/audio.png", gallery: ["/images/categories/audio.png"],
    specifications: [
      { group: "Acoustic", items: [
        { label: "Design", value: "12\" Coaxial Transducer" },
        { label: "Amplifier", value: "Class-D 800W Built-in" },
        { label: "Dispersion", value: "80° Conical" },
        { label: "Max SPL", value: "132 dB Peak" },
        { label: "DSP Modes", value: "Monitor, FOH, Vocal" },
        { label: "Angle", value: "45° Stage wedge angle" }
      ]}
    ],
    features: [
      { title: "Coaxial Design", description: "Perfect phase alignment for high gain before feedback.", icon: "Target" },
      { title: "Active DSP", description: "Built-in amplification with application presets.", icon: "Cpu" },
      { title: "Low Profile", description: "Unobtrusive on stage for clear camera sightlines.", icon: "Eye" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 4, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },

  // CATEGORY 5: Power & Cable
  {
    id: "prod-15", name: "AxionPower 63A Distribution Box", slug: "axionpower-63a-distro", category_id: "cat-5",
    short_description: "Heavy-duty 63A 3-phase power distribution unit flight-cased for touring and outdoor events.",
    full_description: "Safe, reliable power for your entire rig. Built into a shock-mounted flight case, this distro features individual RCDs and MCBs per channel, digital voltage/amperage metering, and industrial CEE connectors.",
    tagline: "The heartbeat of your production.", featured_image: "/images/categories/power-cable.png", gallery: ["/images/categories/power-cable.png"],
    specifications: [
      { group: "Electrical", items: [
        { label: "Input", value: "63A 3-Phase CEE 5-Pin" },
        { label: "Outputs", value: "12x 16A Schuko, 2x 32A CEE" },
        { label: "Protection", value: "30mA RCBO per channel" },
        { label: "Metering", value: "3x Digital V/A Displays" },
        { label: "Enclosure", value: "9U Shock-mount Rack" },
        { label: "Safety", value: "Emergency Stop Button" }
      ]}
    ],
    features: [
      { title: "Digital Metering", description: "Real-time load monitoring per phase.", icon: "Activity" },
      { title: "Individual Protection", description: "Isolated breakers prevent cascading power failures.", icon: "ShieldAlert" },
      { title: "Tour-Ready", description: "Shock-mounted within a heavy-duty flight case.", icon: "Truck" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: true, is_active: true, sort_order: 1, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-16", name: "AxionTour Cat6a Snake Cable", slug: "axiontour-cat6a-snake", category_id: "cat-5",
    short_description: "Ruggedized 4-channel Cat6a tactical snake cable on an industrial drum for AV networking.",
    full_description: "Data infrastructure you can trust. Featuring four shielded Cat6a lines housed in a flexible polyurethane touring jacket, this snake handles Dante, ArtNet, and video over IP flawlessly across long runs.",
    tagline: "Tactical data infrastructure.", featured_image: "/images/categories/power-cable.png", gallery: ["/images/categories/power-cable.png"],
    specifications: [
      { group: "Physical", items: [
        { label: "Channels", value: "4x Cat6a S/FTP" },
        { label: "Jacket Material", value: "Polyurethane (PUR)" },
        { label: "Connectors", value: "Neutrik etherCON" },
        { label: "Length", value: "50m / 80m / 100m" },
        { label: "Bandwidth", value: "10 Gigabit Ethernet" },
        { label: "Reel", value: "Heavy-duty steel drum" }
      ]}
    ],
    features: [
      { title: "Tour-Grade Jacket", description: "Crush, cut, and UV resistant polyurethane.", icon: "Shield" },
      { title: "10G Bandwidth", description: "Handles multiple high-res AV streams effortlessly.", icon: "Zap" },
      { title: "Neutrik etherCON", description: "Locking, weather-resistant data connectors.", icon: "Link" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 2, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-17", name: "AxionDrop 32A Stage Box", slug: "axiondrop-32a", category_id: "cat-5",
    short_description: "Compact rubberized stage power drop box, IP54 rated for wet stage environments.",
    full_description: "Distribute power safely across the stage. Made from solid, non-conductive rubber, this drop box takes a 32A input and provides multiple 16A and Schuko outputs with integrated breaker protection.",
    tagline: "Safe power, right where you need it.", featured_image: "/images/categories/power-cable.png", gallery: ["/images/categories/power-cable.png"],
    specifications: [
      { group: "Electrical", items: [
        { label: "Input", value: "32A 3-Phase CEE" },
        { label: "Output", value: "6x 16A Schuko with flaps" },
        { label: "IP Rating", value: "IP54 (Splash-proof)" },
        { label: "Material", value: "Solid Vulcanized Rubber" },
        { label: "Protection", value: "Integrated MCB/RCD" },
        { label: "Stackable", value: "Yes, interlocking design" }
      ]}
    ],
    features: [
      { title: "Rubber Chassis", description: "Virtually indestructible and non-conductive.", icon: "Hammer" },
      { title: "IP54 Rated", description: "Safe for outdoor use and wet stage conditions.", icon: "CloudRain" },
      { title: "Stackable Design", description: "Interlocking molds for tidy storage and transport.", icon: "Layers" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 3, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  },
  {
    id: "prod-18", name: "AxionSignal DMX/ArtNet Splitter", slug: "axionsignal-dmx-splitter", category_id: "cat-5",
    short_description: "8-port isolated DMX and ArtNet splitter node for large-scale lighting networks.",
    full_description: "Manage complex lighting networks effortlessly. The AxionSignal node converts ArtNet/sACN to physical DMX, providing 8 optically isolated outputs to prevent ground loops and protect your console.",
    tagline: "Clean signals. Protected networks.", featured_image: "/images/categories/power-cable.png", gallery: ["/images/categories/power-cable.png"],
    specifications: [
      { group: "Data", items: [
        { label: "Protocols Supported", value: "DMX512, ArtNet, sACN" },
        { label: "Inputs", value: "1x DMX, 1x etherCON" },
        { label: "Outputs", value: "8x 5-Pin DMX (Isolated)" },
        { label: "Isolation Voltage", value: "2000V per port" },
        { label: "Form Factor", value: "1U 19\" Rack Mount" },
        { label: "Power", value: "PowerCON TRUE1 In/Out" }
      ]}
    ],
    features: [
      { title: "Optical Isolation", description: "Protects against voltage spikes and ground loops.", icon: "ZapOff" },
      { title: "Protocol Conversion", description: "Translates network data to physical DMX seamlessly.", icon: "Network" },
      { title: "Signal Booster", description: "Regenerates DMX signal for extended cable runs.", icon: "Activity" }
    ],
    accessories: [], applications: [], downloads: [], is_featured: false, is_active: true, sort_order: 4, created_at: new Date().toISOString(), updated_at: new Date().toISOString(),
  }
];

export const STATS = [
  { value: 20,  suffix: "+", label: "Years Experience"    },
  { value: 500, suffix: "+", label: "Projects Delivered"  },
  { value: 30,  suffix: "+", label: "Countries Served"    },
  { value: 200, suffix: "+", label: "Products in Catalogue"},
];

export const WHY_AXION = [
  { icon: "Clock",       stat: "20+",    title: "20+ Years Industry Experience",       desc: "Extensive experience supporting projects across the Middle East and Europe." },
  { icon: "Cpu",         stat: "Eng.",   title: "Engineering-Driven Solutions",    desc: "Professional technologies designed for performance, reliability, and scalability." },
  { icon: "Globe2",      stat: "OEM",    title: "Global Manufacturing Partnerships",desc: "Strong OEM manufacturing collaboration and production coordination capabilities." },
  { icon: "Truck",       stat: "Intl.",  title: "International Supply Capabilities",desc: "Efficient sourcing, production management, and global logistics support." },
  { icon: "MapPin",      stat: "3",      title: "Regional Operations Support",     desc: "Operational presence in Hong Kong, Shenzhen, and Dubai." },
  { icon: "ShieldCheck", stat: "Q1",     title: "Quality-Focused Approach",        desc: "Reliable technologies engineered for real-world environments." },
];

export const INDUSTRIES = [
  { name: "Live Events & Entertainment", icon: "Star",          slug: "live-events",   description: "Touring LED, lighting rigs, and line arrays for concerts and festivals." },
  { name: "Exhibitions & Trade Shows",   icon: "Layout",        slug: "exhibitions",   description: "Rental LED walls, interactive kiosks, and AV systems for exhibitions." },
  { name: "Corporate Environments",      icon: "Building2",     slug: "corporate",     description: "Boardroom displays, digital signage, and collaboration systems." },
  { name: "Museums & Experience Centers",icon: "Landmark",      slug: "museums",       description: "Immersive LED, interactive kiosks, and wayfinding systems." },
  { name: "Retail & Digital Signage",    icon: "ShoppingBag",   slug: "retail",        description: "High-brightness displays and interactive signage for retail." },
  { name: "Command & Control Centers",   icon: "Monitor",       slug: "command-control",description: "Fine-pitch LED video walls and signal management for control rooms." },
  { name: "Hospitality & Public Spaces", icon: "Hotel",         slug: "hospitality",   description: "Ambient lighting, audio, and display solutions for hotels and venues." },
  { name: "Houses of Worship",           icon: "Church",        slug: "worship",       description: "Projection, LED displays, and audio for churches and worship centers." },
  { name: "Broadcast & Studios",         icon: "Radio",         slug: "broadcast",     description: "LED cyc walls, studio lighting, and broadcast audio infrastructure." },
  { name: "Education & Training Facilities",icon: "GraduationCap", slug: "education",     description: "Interactive displays, AV systems, and collaboration tools for institutions." },
];

export const NAV_ITEMS = [
  { label: "Products",   href: "/products"   },
  { label: "Industries", href: "/industries" },
  { label: "About",      href: "/about"      },
  { label: "Contact",    href: "/contact"    },
];

export const GLOBAL_OFFICES = [
  { id: "hong-kong", city: "Hong Kong",  role: "Global business operations and international coordination.",               flag: "🇭🇰" },
  { id: "shenzhen",  city: "Shenzhen",   role: "Manufacturing coordination, sourcing, and supply chain management.",     flag: "🇨🇳" },
  { id: "dubai",     city: "Dubai",      role: "Middle East operations and regional inventory support.",flag: "🇦🇪" },
];
