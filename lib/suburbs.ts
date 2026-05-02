export interface Suburb {
  slug: string;
  name: string;
  postcode: string;
  latitude: number;
  longitude: number;
  intro: string;
  localContext: string;
  uniqueSellingPoints: string[];
  nearbySuburbs: string[];
  faqs: { question: string; answer: string }[];
  testimonials: { name: string; suburb: string; rating: number; text: string }[];
}

export const suburbs: Suburb[] = [
  {
    slug: "heathridge",
    name: "Heathridge",
    postcode: "6027",
    latitude: -31.7592,
    longitude: 115.7672,
    intro:
      "Heathridge is a quiet, family-friendly Perth northern suburb between Joondalup and the Indian Ocean coastline, made up of late-1970s and 1980s brick-and-tile homes set on generous green blocks. As D Wright Painting & Decorating's home base, this is the suburb we know best — every street, every cul-de-sac, every classic limestone-trimmed facade. Whether your home is an original double-brick rancher or a fully renovated open-plan family home, we bring the right preparation and premium finishes to make it look its absolute best.",
    localContext:
      "Heathridge sits on coastal limestone with a hot, dry summer climate and salt-laden sea breezes off the Indian Ocean. These conditions are tough on exterior paintwork — UV breaks down low-grade coatings within just a few summers, and salt air accelerates rust on metal trims, gutters, and downpipes. Our team uses 100% acrylic exterior systems rated for severe-marine exposure, with anti-corrosion primers on any ferrous surfaces, so your repaint actually lasts the full 10–12 year cycle.\n\nThe suburb's housing stock is largely original 1980s brick veneer and double-brick, much of it now due for its second or third repaint. We're frequently called in for full exterior refreshes — render rebakes, eaves repaint, roof restorations on the older Boral and Monier tile roofs — as well as interior modernisations: removing the original flat-finish ceilings and applying contemporary low-sheen palettes throughout. Our local knowledge means we can recommend colour schemes that suit the natural Heathridge palette of limestone, jarrah, and tuart-tree green without clashing with neighbouring homes.",
    uniqueSellingPoints: [
      "Home base suburb — D Wright lives and works here",
      "Coastal-grade exterior systems built for Perth UV and salt air",
      "Specialists in 1980s double-brick repaints and roof restoration",
      "Same-week quotes — usually on-site within 48 hours",
    ],
    nearbySuburbs: ["beldon", "edgewater", "mullaloo", "ocean-reef", "joondalup", "connolly", "craigie", "padbury"],
    faqs: [
      {
        question: "How much does it cost to repaint a brick veneer home in Heathridge?",
        answer:
          "A typical 4-bedroom Heathridge brick veneer costs between $5,500 and $11,000 for a full exterior repaint, depending on the condition of existing paint, the eaves, the gutters, and any rendered feature walls. We provide detailed, itemised written quotes at no charge.",
      },
      {
        question: "Do you paint roofs in Heathridge?",
        answer:
          "Yes. Roof painting is one of our most popular Heathridge services because so many homes here have original concrete or terracotta tile roofs that have faded and become porous after 30+ years of Perth sun. We pressure-clean, re-bed and re-point ridge caps as needed, prime, and apply a 3-coat heat-reflective roof membrane.",
      },
      {
        question: "Can you help with colour selection for my Heathridge home?",
        answer:
          "Absolutely. Colour consultation is included free with every quote. We'll bring Dulux and Haymes colour decks on-site, look at the natural light on your facade at different times of day, and suggest schemes that complement Heathridge's coastal-bushland setting and your roof/garden tones.",
      },
      {
        question: "How long does an exterior repaint take in Heathridge?",
        answer:
          "For a standard 3–4 bedroom Heathridge home allow 4–6 working days. This includes high-pressure washing, surface repairs, masking, two coats of premium exterior paint, and any trim/gutter work. Weather permitting, we work straight through to keep your project tight.",
      },
      {
        question: "Are you a licensed painter operating in Heathridge?",
        answer:
          "Yes. D Wright Painting & Decorating is fully insured with comprehensive public liability cover. Certificates can be supplied before any work commences — just ask.",
      },
      {
        question: "Do you do interior painting while we're living in the house in Heathridge?",
        answer:
          "Yes. We're experienced at working around families. We work room-by-room, use low-VOC water-based paints where requested, fully cover floors and furniture, and clean up daily so your home stays liveable throughout the project.",
      },
      {
        question: "Do you also do small jobs like a single feature wall in Heathridge?",
        answer:
          "Yes. We happily quote on smaller jobs — feature walls, door and trim refreshes, single-room repaints. There's no minimum job size for D Wright Painting & Decorating in Heathridge or surrounding suburbs.",
      },
    ],
    testimonials: [
      {
        name: "Karen B.",
        suburb: "Heathridge",
        rating: 5,
        text: "D Wright repainted the exterior of our 1980s Heathridge home and the difference is incredible. They patched all the old render cracks before painting and the finish has held up perfectly through summer. Tidy, on-time, exactly as quoted.",
      },
      {
        name: "Mark & Tania R.",
        suburb: "Heathridge",
        rating: 5,
        text: "We had the whole interior repainted before moving in. D Wright was professional from the first quote to the final walk-through. The colour advice they gave us was spot on — couldn't be happier.",
      },
    ],
  },
  {
    slug: "beldon",
    name: "Beldon",
    postcode: "6027",
    latitude: -31.7758,
    longitude: 115.7550,
    intro:
      "Beldon sits directly south of Heathridge, a tightly-knit family suburb of original 1980s brick-and-tile homes with mature trees and quiet looping streets. D Wright Painting & Decorating works in Beldon almost weekly — it's effectively our backyard. Whether you're refreshing tired exterior paint, modernising an interior with a contemporary palette, or restoring a faded tile roof, we bring local knowledge and premium-grade systems to every Beldon project.",
    localContext:
      "Beldon shares the same coastal-influenced climate as Heathridge: intense Perth summer UV, drying easterly winds, and the salt-air carry from the nearby Indian Ocean. Most Beldon homes are now 35–40 years old, and the original builder-grade paint coatings have long passed their service life. Our team specialises in the proper preparation these older surfaces need — flaking removal, render repair, masonry priming, and gutter rust treatment — so your repaint genuinely lasts a full coastal cycle.\n\nA significant share of our Beldon work is also interior: removing dated 1980s textured ceilings, repainting throughout in modern low-sheen acrylics, and refreshing trim and doors in semi-gloss enamel. Beldon homeowners tend to stay long-term and invest properly in their properties, and we're proud to be the painters they call back for the next phase. Proximity to Belridge Secondary College and Beldon Shopping Centre also means evening and weekend scheduling around the school run is something we factor in.",
    uniqueSellingPoints: [
      "Just minutes from our Heathridge base — fast scheduling",
      "Specialists in 1980s exterior repaints and tile-roof restoration",
      "Modern interior palettes — ceiling re-skins, trim and door refreshes",
      "Workmanship warranty on every Beldon job",
    ],
    nearbySuburbs: ["heathridge", "edgewater", "craigie", "joondalup"],
    faqs: [
      {
        question: "How much does it cost to repaint a Beldon house exterior?",
        answer:
          "Most Beldon 3–4 bedroom homes fall in the $5,000–$10,000 range for a full exterior repaint, including walls, eaves, fascia, gutters, and trim. We always provide a detailed written quote on-site at no charge.",
      },
      {
        question: "Do you offer free quotes for Beldon homes?",
        answer:
          "Yes — every quote is free and no-obligation. We'll come to your Beldon property, walk through the work with you, and email a clear itemised quote within 48 hours.",
      },
      {
        question: "Can you paint over old textured ceilings in my Beldon home?",
        answer:
          "Yes. Original 1980s textured ('cottage cheese') ceilings can be either skim-coated to a smooth modern finish or simply repainted with a heavy-build flat ceiling paint. We'll discuss which option suits your budget and timeline.",
      },
      {
        question: "What paint brands do you use in Beldon?",
        answer:
          "We use Dulux and Haymes — both Australian-tested, premium-grade systems with proven performance in Perth's harsh coastal UV. We're happy to discuss product options and warranty levels with you.",
      },
      {
        question: "Do you do roof painting in Beldon?",
        answer:
          "Yes. Many Beldon homes have original concrete tile roofs that have lost their original colour. We pressure-clean, repair any cracked tiles, re-bed ridge capping, and apply a heat-reflective 3-coat roof membrane that dramatically improves both kerb appeal and summer comfort inside the home.",
      },
      {
        question: "How quickly can you start a Beldon project?",
        answer:
          "We can usually start most Beldon projects within 1–2 weeks of accepting a quote, weather and project size permitting. Urgent work (pre-sale repaints, etc.) we can often fast-track.",
      },
    ],
    testimonials: [
      {
        name: "Stuart M.",
        suburb: "Beldon",
        rating: 5,
        text: "D Wright painted our Beldon exterior and roof. Quoted fairly, started on time, finished on time, and the property looks 20 years younger. Couldn't recommend more highly.",
      },
      {
        name: "Lauren P.",
        suburb: "Beldon",
        rating: 5,
        text: "Absolutely brilliant interior repaint. They worked around us being home with two kids, kept everything spotless, and the colours are perfect.",
      },
    ],
  },
  {
    slug: "edgewater",
    name: "Edgewater",
    postcode: "6027",
    latitude: -31.7783,
    longitude: 115.7825,
    intro:
      "Edgewater is one of Perth's most established lakeside suburbs, set around the picturesque Lake Joondalup and packed with quality 1980s and 1990s family homes. D Wright Painting & Decorating works extensively across Edgewater, from full exterior repaints on double-brick homes through to interior makeovers in the newer estates closer to Joondalup CBD. Local knowledge, premium products, and a workmanship warranty on every job.",
    localContext:
      "Edgewater's proximity to Lake Joondalup creates higher humidity than the surrounding coastal suburbs, which can encourage mould and mildew on south-facing walls and shaded eaves. We always specify mould-resistant additives in interior wet-area paints and use anti-fungal exterior systems on shaded southern aspects. The suburb is also notable for its slightly more established trees and elevated home prices, so homeowners here typically expect — and we deliver — premium-grade preparation and finishes.\n\nEdgewater Primary School, Edgewater Train Station, and the proximity to Lakeside Joondalup Shopping City make this a popular family suburb that holds value well. We frequently work on pre-sale exterior repaints here, knowing the lift in kerb appeal directly translates to a stronger sale price. Our team also handles a steady stream of interior refreshes ahead of new family moves — full repaints in modern neutrals, with feature walls in deeper accent tones to suit each home's natural light.",
    uniqueSellingPoints: [
      "Mould-resistant interior systems for Lake Joondalup humidity",
      "Pre-sale exterior repaints proven to lift kerb appeal",
      "Premium-grade preparation expected by Edgewater homeowners",
      "Workmanship warranty on every job",
    ],
    nearbySuburbs: ["heathridge", "joondalup", "beldon", "connolly"],
    faqs: [
      {
        question: "Do you paint homes in Edgewater on the lake side?",
        answer:
          "Yes. Lakeside Edgewater homes need a different approach — higher humidity means we use mould-resistant interior paints in wet areas and anti-fungal additives on shaded exterior surfaces. We've painted dozens of properties along Edgewater's lake-side streets.",
      },
      {
        question: "Can you do a pre-sale exterior repaint in Edgewater?",
        answer:
          "Pre-sale exterior repaints are one of our specialties. A fresh, modern colour scheme on a tired exterior typically returns 5–10x its cost in sale price. We can usually complete a pre-sale package within 5–7 working days.",
      },
      {
        question: "What's your process for an Edgewater interior repaint?",
        answer:
          "We start with a full walkthrough, agree colours, fully cover floors and furniture, prep walls (fill, sand, prime as needed), then apply two coats of premium low-sheen acrylic. Trim and doors are done last in semi-gloss enamel for durability.",
      },
      {
        question: "Are you insured for work in Edgewater homes?",
        answer:
          "Yes — we carry full public liability insurance and copies are available on request before work starts.",
      },
      {
        question: "Do you do feature walls and decorative finishes in Edgewater?",
        answer:
          "Yes. Feature walls, two-tone schemes, and specialty decorative finishes (Venetian plaster, textured coatings) are all part of what we do. Free colour consultation included.",
      },
      {
        question: "How much does interior painting cost in Edgewater?",
        answer:
          "Interior painting in Edgewater typically ranges from $3,500 for a single-room refresh through to $12,000+ for a full 4-bedroom home including ceilings, walls, doors, and trim. Free quotes always.",
      },
    ],
    testimonials: [
      {
        name: "Anita F.",
        suburb: "Edgewater",
        rating: 5,
        text: "D Wright did a full interior repaint of our Edgewater home and it looks stunning. The colour advice was perfect for our lake-side aspect. Top quality finish.",
      },
      {
        name: "James & Dee L.",
        suburb: "Edgewater",
        rating: 5,
        text: "Pre-sale exterior repaint completed on time and on budget. The agent said it added significant value at the open homes. Highly recommend.",
      },
    ],
  },
  {
    slug: "mullaloo",
    name: "Mullaloo",
    postcode: "6027",
    latitude: -31.7758,
    longitude: 115.7311,
    intro:
      "Mullaloo is a relaxed beachside suburb directly west of Heathridge, fronting one of Perth's best family beaches. The housing stock is a mix of original 1970s coastal homes, tidy 1980s brick-and-tile, and newer two-storey rebuilds catching the ocean view. D Wright Painting & Decorating specialises in the heavy-duty coastal coatings these Mullaloo homes need to fight off salt air, intense UV, and prevailing afternoon sea breezes.",
    localContext:
      "Mullaloo is a true coastal exposure zone. Homes within the first few streets of the beach experience constant salt-laden onshore winds that destroy substandard exterior paint within 3–4 years. Our team specifies severe-marine-grade 100% acrylic systems with full anti-corrosive primer on every metal surface (gutters, downpipes, garage doors, fascia brackets) for any home west of Mullaloo Drive. For homes further inland we still recommend coastal-grade systems given Perth's UV intensity.\n\nMany Mullaloo homes have rendered or limestone-clad facades that need specialist preparation — we use breathable, alkali-resistant masonry primers so the topcoat doesn't blister or chalk. Roof restoration is also big business here: original concrete tiles fade dramatically in coastal sun, and a properly applied 3-coat heat-reflective roof membrane both restores kerb appeal and reduces summer cooling loads. Whether you've got a beachside cottage or a contemporary two-storey, we treat every Mullaloo job with full coastal-grade preparation.",
    uniqueSellingPoints: [
      "Severe-marine-grade exterior systems for beachfront exposure",
      "Full anti-corrosive treatment on all metal surfaces",
      "Heat-reflective roof membranes that reduce summer cooling costs",
      "Specialist masonry priming for limestone and rendered facades",
    ],
    nearbySuburbs: ["heathridge", "ocean-reef", "beldon", "padbury"],
    faqs: [
      {
        question: "I live a few streets from Mullaloo Beach — do I need special paint?",
        answer:
          "Yes. Any home within roughly 1km of the coast benefits from severe-marine-grade exterior coatings. The salt and UV combination here is brutal on standard products. We always recommend (and use) coastal-rated systems for Mullaloo properties.",
      },
      {
        question: "How often should I repaint my Mullaloo home exterior?",
        answer:
          "With a properly prepared coastal-grade system, expect 8–12 years between full exterior repaints. Without coastal-grade prep and product, you'll see chalking and fade within 3–4 years.",
      },
      {
        question: "Can you treat rust on metal gutters and fascia in Mullaloo?",
        answer:
          "Yes. Rust treatment is standard on every Mullaloo exterior. We wire-brush back to bare metal, apply a rust-converter primer, then a marine-grade enamel topcoat. Gutters get the same full system — not just a paint-over.",
      },
      {
        question: "Do you paint limestone-clad homes in Mullaloo?",
        answer:
          "Yes. Limestone needs a breathable, alkali-resistant masonry primer before any topcoat to prevent blistering and chalking. We've painted many of the limestone-feature homes around Mullaloo and Ocean Reef.",
      },
      {
        question: "Will roof painting help cool my Mullaloo house in summer?",
        answer:
          "Yes — heat-reflective roof membranes can reduce roof surface temperature by 10–15°C, which translates directly to lower indoor temperatures and reduced air-con load. It's both a cosmetic and a practical upgrade.",
      },
      {
        question: "How much does an exterior repaint cost in Mullaloo?",
        answer:
          "Mullaloo exterior repaints typically range $6,000–$13,000 depending on size, storeys, and the condition of existing surfaces. Coastal-grade products do cost a little more but the lifecycle value is substantially better.",
      },
    ],
    testimonials: [
      {
        name: "Brad H.",
        suburb: "Mullaloo",
        rating: 5,
        text: "D Wright painted our Mullaloo home including a full rust treatment on the gutters. Three years on and it still looks brand new. Worth every dollar.",
      },
      {
        name: "Megan & Pete S.",
        suburb: "Mullaloo",
        rating: 5,
        text: "Roof restoration plus full exterior repaint — house is unrecognisable. The team was tidy, polite, and clearly experienced with coastal work. Highly recommend.",
      },
    ],
  },
  {
    slug: "ocean-reef",
    name: "Ocean Reef",
    postcode: "6027",
    latitude: -31.7572,
    longitude: 115.7286,
    intro:
      "Ocean Reef is a premium coastal Perth suburb perched above the Indian Ocean, known for its boat harbour, ocean views, and large architecturally designed family homes. D Wright Painting & Decorating brings premium-grade preparation, severe-marine coatings, and meticulous attention to detail to every Ocean Reef project — exactly what these high-value homes deserve.",
    localContext:
      "Ocean Reef sits right on the coastal cliff line, and many homes here face direct onshore exposure with full ocean views. Salt air and UV are at maximum intensity, and substandard exterior coatings simply do not survive. Every Ocean Reef project we undertake uses severe-marine-grade 100% acrylic systems, two-pack primers on metal, and breathable masonry primers on rendered or limestone surfaces. We don't compromise on product spec here — and our Ocean Reef customers expect nothing less.\n\nOcean Reef's housing stock skews newer and larger than surrounding suburbs, often two-storey with rendered facades, custom timber details, and feature stone or limestone cladding. These finishes need specialised preparation — timber needs proper sanding and stain or oil-based undercoats, render needs alkali-resistant primer, and stone needs the right sealer system. Our team has the experience and the products to do all of it properly. With Ocean Reef Marina nearby and the suburb's continued growth, well-presented exteriors hold value strongly here.",
    uniqueSellingPoints: [
      "Severe-marine-grade systems for direct ocean exposure",
      "Specialist preparation for rendered, limestone and timber facades",
      "Two-pack primers on all metal surfaces — no shortcuts",
      "Premium-grade workmanship to match Ocean Reef expectations",
    ],
    nearbySuburbs: ["heathridge", "mullaloo", "connolly", "joondalup"],
    faqs: [
      {
        question: "Do you have experience with large two-storey Ocean Reef homes?",
        answer:
          "Yes — many of our Ocean Reef projects are two-storey homes with rendered facades, timber detailing, and feature cladding. We're fully equipped with appropriate access (scaffolding, working-at-heights certified) for these larger projects.",
      },
      {
        question: "How do you handle render painting in Ocean Reef?",
        answer:
          "Rendered surfaces need an alkali-resistant masonry primer before any topcoat to prevent blistering, chalking, and colour drift. We use Dulux and Haymes specialist masonry systems with proven performance on Perth render.",
      },
      {
        question: "Do you paint timber feature panels and decking in Ocean Reef?",
        answer:
          "Yes. Timber feature panels need careful sanding, oil-based undercoat, and a UV-stable topcoat — or staining/oiling if you want to keep the timber look. We can advise on the best system for your specific timber and exposure.",
      },
      {
        question: "How much does a premium Ocean Reef exterior repaint cost?",
        answer:
          "Ocean Reef exterior projects typically range $9,000–$25,000+ depending on size, storeys, and complexity. We always provide an itemised written quote so you can see exactly what's included.",
      },
      {
        question: "Are you insured for high-value Ocean Reef properties?",
        answer:
          "Yes — we carry comprehensive public liability cover and certificates can be supplied before work commences.",
      },
      {
        question: "Can you start work in Ocean Reef quickly?",
        answer:
          "Most Ocean Reef projects we can schedule within 2–3 weeks of quote acceptance. Larger projects may need slightly longer to plan access and material orders.",
      },
    ],
    testimonials: [
      {
        name: "Tom & Cassandra W.",
        suburb: "Ocean Reef",
        rating: 5,
        text: "Full exterior of our two-storey Ocean Reef home. D Wright handled the scaffolding, the render prep, the lot. Finish is flawless and the house has held up brilliantly through the first summer.",
      },
      {
        name: "Olivia D.",
        suburb: "Ocean Reef",
        rating: 5,
        text: "Repainted our timber feature panels and the front facade. The colour and finish quality is exactly what we hoped for. Real professionals.",
      },
    ],
  },
  {
    slug: "joondalup",
    name: "Joondalup",
    postcode: "6027",
    latitude: -31.7448,
    longitude: 115.7661,
    intro:
      "Joondalup is the major commercial and residential hub of Perth's northern corridor, with a busy CBD, the Edith Cowan University campus, and a growing mix of established family homes, apartments, and modern townhouses. D Wright Painting & Decorating works across Joondalup on residential repaints, strata-managed apartment blocks, and commercial fit-out painting — bringing the same quality and reliability to every job.",
    localContext:
      "Joondalup's residential stock is a real mix: older 1990s family homes around the lake and the original streets, newer townhouses and apartments in the densifying inner-CBD area, and a steady stream of commercial premises and shopfronts. We tailor our service accordingly — full coastal-grade exterior systems for the established homes, internal-only repaints for apartment turnover, and after-hours commercial work to minimise disruption to trading businesses.\n\nWith ECU students, hospital workers, and CBD professionals all calling Joondalup home, the rental and investment market here is strong — we work with a number of property managers and investors who want fast, clean, well-priced turnover repaints between tenants. For owner-occupiers we offer the same premium-grade service we deliver in Heathridge and Ocean Reef. Joondalup's central location also makes it our most efficient suburb to service — we can often respond same-week.",
    uniqueSellingPoints: [
      "Residential, strata, and commercial work all handled in-house",
      "Fast turnover repaints for investors and property managers",
      "After-hours commercial scheduling to minimise business disruption",
      "Free quotes — usually on-site within 48 hours",
    ],
    nearbySuburbs: ["heathridge", "edgewater", "connolly", "ocean-reef"],
    faqs: [
      {
        question: "Do you do strata and apartment painting in Joondalup?",
        answer:
          "Yes. We work with several Joondalup strata managers on common-area repaints, individual unit refreshes, and full block exteriors. We can quote on whole-of-strata projects or individual units.",
      },
      {
        question: "Can you do commercial painting in Joondalup CBD?",
        answer:
          "Yes — shopfronts, offices, fit-outs, and full commercial repaints. We typically schedule commercial work after-hours or weekends to minimise disruption to your business.",
      },
      {
        question: "How quickly can you do a tenant-turnover repaint in Joondalup?",
        answer:
          "Standard 2–3 bedroom apartment turnover repaints we can usually complete in 2–3 working days from start to finish. Property managers — call us for fast scheduling.",
      },
      {
        question: "What paint do you use for Joondalup investment properties?",
        answer:
          "We typically use a mid-range Dulux or Haymes acrylic in a low-sheen finish for investment turnovers — durable, easy to touch up, and good value for the rental cycle.",
      },
      {
        question: "Do you do exterior repaints on older Joondalup homes?",
        answer:
          "Yes — many of the established Joondalup family homes are now 25–30 years old and ready for their first or second full exterior repaint. We use coastal-grade systems given Perth's UV.",
      },
      {
        question: "Are you available for emergency or last-minute Joondalup work?",
        answer:
          "We always try to accommodate urgent jobs — pre-tenant moves, last-minute pre-sale repaints, etc. Give us a call and we'll do our best to fit you in.",
      },
    ],
    testimonials: [
      {
        name: "Greg T. (Property Manager)",
        suburb: "Joondalup",
        rating: 5,
        text: "We've used D Wright for half a dozen turnover repaints across our Joondalup rental portfolio. Always tidy, always on time, always priced fairly. Genuinely reliable.",
      },
      {
        name: "Sarah J.",
        suburb: "Joondalup",
        rating: 5,
        text: "Full interior repaint of our Joondalup townhouse. Everything was completed exactly to quote and the finish is beautiful. Will definitely use again.",
      },
    ],
  },
  {
    slug: "connolly",
    name: "Connolly",
    postcode: "6027",
    latitude: -31.7411,
    longitude: 115.7544,
    intro:
      "Connolly is one of Perth's premier golf-course estate suburbs, built around the Joondalup Resort and Country Club. Homes here are typically larger, architecturally designed, and immaculately maintained. D Wright Painting & Decorating brings premium preparation, top-spec products, and the kind of meticulous workmanship Connolly homeowners expect.",
    localContext:
      "Connolly's housing stock is among the highest-spec in Perth's northern corridor — large two-storey rendered homes, custom builds with feature stone and timber, and tightly maintained gardens. These are properties where the finish quality of the paintwork is immediately visible and judged. We use only premium Dulux and Haymes systems on Connolly projects, with full preparation including masonry priming on render, two-pack primers on metal, and proper undercoating on timber elements.\n\nThe Joondalup Resort proximity means many Connolly homeowners are professionals or semi-retired who take genuine pride in their properties. Repaints are typically full-spec, with attention to even the smallest trim detail. Our team has the experience, the right products, and the working-at-heights certifications to handle the large two-storey projects that are common here. We also work to strict scheduling commitments — Connolly clients expect their job to start when promised and finish when promised.",
    uniqueSellingPoints: [
      "Premium Dulux and Haymes systems only — no cost-cutting",
      "Working-at-heights certified for large two-storey homes",
      "Meticulous trim and detail finishing",
      "Strict scheduling — start dates and finish dates we keep",
    ],
    nearbySuburbs: ["heathridge", "joondalup", "ocean-reef", "edgewater"],
    faqs: [
      {
        question: "Do you do large two-storey homes in Connolly?",
        answer:
          "Yes. Two-storey rendered homes are some of our most common Connolly projects. We bring our own scaffolding setup and have the working-at-heights tickets required to do this safely.",
      },
      {
        question: "What paint products do you use in Connolly?",
        answer:
          "Premium Dulux and Haymes systems exclusively in Connolly — typically Dulux Weathershield or Haymes Solashield exterior, and Dulux Wash&Wear or Haymes Expressions interior. Premium products give the longest service life and the best finish.",
      },
      {
        question: "Can you match my existing colour scheme on a Connolly facade repaint?",
        answer:
          "Yes — we can colour-match existing finishes either by sample or via Dulux/Haymes spectrophotometer matching. Useful when you want to repaint just one elevation or trim section.",
      },
      {
        question: "How long does a typical Connolly exterior repaint take?",
        answer:
          "Most Connolly two-storey full exteriors take 7–14 working days depending on size, complexity, and weather. We work straight through and don't pull off mid-job.",
      },
      {
        question: "Are you insured for premium Connolly properties?",
        answer:
          "Yes — full public liability cover. Certificates supplied on request.",
      },
      {
        question: "Do you do feature timber and stone-cladding finishes in Connolly?",
        answer:
          "Yes. Timber feature panels, stone-cladding sealing, and architectural detailing are all part of what we do. We'll match products to your specific surfaces and exposure.",
      },
    ],
    testimonials: [
      {
        name: "Richard & Helen B.",
        suburb: "Connolly",
        rating: 5,
        text: "Full repaint of our large Connolly two-storey home. D Wright was the most professional contractor we've used in 20 years here. Premium product, premium finish, on schedule.",
      },
      {
        name: "Marina K.",
        suburb: "Connolly",
        rating: 5,
        text: "Beautifully done interior repaint and matching the existing trim colour was perfect. The attention to detail on the cornices and skirting is what really sets D Wright apart.",
      },
    ],
  },
  {
    slug: "craigie",
    name: "Craigie",
    postcode: "6025",
    latitude: -31.7886,
    longitude: 115.7553,
    intro:
      "Craigie is a well-established family suburb just south of Beldon, made up of original 1970s and 1980s brick-and-tile homes on generous blocks. D Wright Painting & Decorating works regularly across Craigie on full exterior repaints, roof restorations, and modern interior makeovers — bringing local knowledge and premium-grade systems to every project.",
    localContext:
      "Craigie shares the same 1970s–1980s housing stock as much of the Heathridge corridor, which means most homes are now well into their second or third paint cycle. Original builder-grade coatings have long failed, render has typically developed surface cracks, and metal trims (gutters, fascia brackets, garage doors) often need rust treatment before any topcoat. Our team handles all of this as standard — we don't just paint over old failure, we fix the underlying problem first.\n\nWith Craigie Leisure Centre, multiple primary schools, and quick access to the freeway, Craigie continues to attract young families who buy older homes and modernise them. Interior repaints — removing original textured ceilings, repainting throughout in modern neutrals, refreshing trim and doors — are a steady part of our Craigie work. We're also seeing increasing demand for roof restorations as the original concrete tile roofs in the suburb hit their 35–40 year mark.",
    uniqueSellingPoints: [
      "Specialists in 1970s–1980s repaints — proper preparation, not cover-up",
      "Roof restoration on aging concrete and terracotta tile roofs",
      "Modern interior makeovers — ceiling, walls, trim refreshed together",
      "Local team — Craigie is just minutes from our Heathridge base",
    ],
    nearbySuburbs: ["heathridge", "beldon", "padbury", "joondalup"],
    faqs: [
      {
        question: "How much does a Craigie exterior repaint cost?",
        answer:
          "Most Craigie 3–4 bedroom homes fall in the $5,000–$10,500 range for a full exterior repaint, including walls, eaves, fascia, gutters, and trim. Quotes are always free and itemised.",
      },
      {
        question: "Do you fix render cracks before painting in Craigie?",
        answer:
          "Yes — render crack repair is standard on every Craigie exterior. We rake out cracks, fill with flexible patching compound, sand smooth, and then prime before topcoats. Painting over unfixed cracks just means they'll show through your new paint within months.",
      },
      {
        question: "Can you paint my Craigie roof?",
        answer:
          "Yes. Many Craigie homes have original 1970s/80s concrete tile roofs that have faded badly. We pressure-clean, repair any damaged tiles, re-bed ridge caps as needed, and apply a 3-coat heat-reflective roof membrane for a 10+ year refresh.",
      },
      {
        question: "Do you do interior repaints in Craigie while we live there?",
        answer:
          "Yes — we work room-by-room around your family, use low-VOC paints where requested, fully cover floors and furniture, and clean up daily. Most interior projects are completed with minimal disruption.",
      },
      {
        question: "How long does an interior repaint take in Craigie?",
        answer:
          "A standard 3-bedroom interior takes 5–8 working days for a full repaint (ceilings, walls, trim, doors). Single-room refreshes can be done in 1–2 days.",
      },
      {
        question: "Are you licensed and insured to work in Craigie?",
        answer:
          "Yes — D Wright Painting & Decorating carries full public liability insurance. Certificates supplied on request.",
      },
    ],
    testimonials: [
      {
        name: "Wendy R.",
        suburb: "Craigie",
        rating: 5,
        text: "D Wright did a full exterior on our 1980s Craigie home including roof restoration. The render crack repair was done properly and the finish has held up beautifully.",
      },
      {
        name: "Nathan & Bec H.",
        suburb: "Craigie",
        rating: 5,
        text: "Full interior repaint with new ceilings done. House feels brand new. Tidy, professional, on time. Couldn't be happier.",
      },
    ],
  },
  {
    slug: "padbury",
    name: "Padbury",
    postcode: "6025",
    latitude: -31.7872,
    longitude: 115.7689,
    intro:
      "Padbury is a leafy, established northern Perth suburb just south of Craigie, with a strong family demographic and a mix of 1970s–1980s brick homes and pockets of newer infill. D Wright Painting & Decorating works regularly across Padbury on exterior repaints, roof restorations, and complete interior modernisations.",
    localContext:
      "Padbury's housing is largely original 1970s and 1980s construction, with mature gardens and well-treed streets that create varied exposure conditions across each home — sun-baked north-facing walls vs. shaded, sometimes mossy south-facing walls. We always specify mould and algae-resistant additives for shaded south aspects and full UV-rated systems for the north and west elevations. This kind of thoughtful spec is what gets you a 10-year repaint life rather than a 4-year one.\n\nPadbury Catholic Primary, Padbury Senior High School, and the proximity to Whitfords Avenue retail make this a stable family suburb where homeowners stay long-term and invest in their properties. Our work here is split fairly evenly between full exterior refreshes (often pre-sale or just for refresh after 12+ years), and full interior modernisations as families update homes they've owned for decades. We're proud to be the painters Padbury locals call back for the next phase of work.",
    uniqueSellingPoints: [
      "Tailored coatings — UV-grade for sun aspects, mould-resistant for shade",
      "Full exterior refreshes designed for a true 10-year lifecycle",
      "Interior modernisations — ceilings, walls, trim, doors all together",
      "Workmanship warranty on every Padbury job",
    ],
    nearbySuburbs: ["heathridge", "craigie", "beldon", "mullaloo"],
    faqs: [
      {
        question: "Why does my Padbury exterior have green mould on one side?",
        answer:
          "Shaded south-facing walls in Padbury (especially under trees) develop mould and algae over time. We pressure-clean with a fungicide wash, then specify a mould-resistant exterior topcoat to keep it from coming back quickly.",
      },
      {
        question: "Do you do full interior modernisations in Padbury?",
        answer:
          "Yes. Many of our Padbury jobs are full interior makeovers — re-skinning or repainting the original textured ceilings, repainting all walls in modern low-sheen neutrals, and refreshing trim and doors in semi-gloss enamel. Total transformation in 1–2 weeks.",
      },
      {
        question: "How much does a Padbury exterior repaint cost?",
        answer:
          "Padbury 3–4 bedroom exterior repaints typically range $5,000–$10,500 depending on condition, size, and any rust or render repairs needed. Free itemised quotes always.",
      },
      {
        question: "Do you paint timber decks and pergolas in Padbury?",
        answer:
          "Yes — timber decks, pergolas, fences, and feature timber screens. We sand back, apply oil or stain or paint as appropriate to the timber type and exposure, and the system you want.",
      },
      {
        question: "Can you start a Padbury job within a few weeks?",
        answer:
          "Yes. Most Padbury projects we can schedule within 1–2 weeks of quote acceptance, weather permitting.",
      },
      {
        question: "Are your Padbury quotes free?",
        answer:
          "Always. We come on-site, walk through the work with you, and email a detailed itemised written quote within 48 hours. No obligation.",
      },
    ],
    testimonials: [
      {
        name: "Rob & Janelle T.",
        suburb: "Padbury",
        rating: 5,
        text: "Full exterior plus interior repaint of our Padbury home. D Wright was the easiest contractor we've ever dealt with — quoted properly, started on time, finished on time, brilliant finish.",
      },
      {
        name: "Cath W.",
        suburb: "Padbury",
        rating: 5,
        text: "Fixed our south-side mould problem and repainted the whole exterior. Two summers later it still looks fresh. Genuinely recommend.",
      },
    ],
  },
];
