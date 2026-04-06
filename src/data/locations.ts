export interface Location {
  slug: string;
  name: string;
  county: string;
  zip: string[];
  neighborhoods: string[];
  landmarks: { name: string; type: string; description: string }[];
  geo: { lat: number; lng: number };
  soilType: string;
  waterRestrictions: string;
  localInsight: string;
  commonYardSize: string;
  hoaNotes: string;
  testimonial: { quote: string; name: string; neighborhood: string; rating: number };
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
}

export const locations: Location[] = [
  {
    slug: 'holly-springs-nc',
    name: 'Holly Springs',
    county: 'Wake County',
    zip: ['27540'],
    neighborhoods: ['12 Oaks', 'Sunset Ridge', 'Braxton Village', 'Holly Glen', 'Holly Pointe', 'Windcrest'],
    landmarks: [
      { name: 'Bass Lake Park', type: 'park', description: 'A 100-acre park with walking trails and lakeside picnic areas — many homeowners nearby want outdoor living spaces that capture that same relaxed, natural atmosphere.' },
      { name: 'Holly Springs Towne Center', type: 'shopping', description: 'The central retail and dining hub on Holly Springs Road. Homes in surrounding subdivisions like Holly Pointe and Windcrest are among our most frequent service areas.' },
      { name: 'Hunt Center', type: 'community', description: 'Holly Springs cultural and recreation center hosting community events year-round. The neighborhoods surrounding it — including Braxton Village — feature the mix of established and newer homes we work on most.' },
    ],
    geo: { lat: 35.6513, lng: -78.8336 },
    soilType: 'Heavy Piedmont clay (Cecil and Appling series) — expands significantly when wet and contracts when dry, creating a freeze-thaw cycle that can shift deck footings if they are not poured deep enough. We pour footings 18–24 inches deep in Holly Springs to stay below the clay movement zone.',
    waterRestrictions: 'Holly Springs follows Harnett County Regional Water odd/even watering schedules during summer drought periods. Irrigation systems near deck areas should be zoned separately and checked for overspray that can prematurely wear deck finishes.',
    localInsight: 'Holly Springs is our home base. We know the subdivision layouts, the HOA boards, and the soil conditions block by block. Many homes built in the 2005–2015 boom are now 10–20 years old — the age when original builder-grade decks start showing serious wear and homeowners start thinking about upgrades or full replacements.',
    commonYardSize: 'Quarter-acre to half-acre lots with gently sloping backyards. Most subdivisions have 15–25 foot rear setbacks, which comfortably accommodates a 300–400 sq ft deck.',
    hoaNotes: 'Most Holly Springs HOAs (12 Oaks, Sunset Ridge, Braxton Village) require architectural review before any exterior construction. Typical requirements include material and color approval, maximum height restrictions, and setback compliance. We submit HOA applications on your behalf and attend review meetings when needed.',
    testimonial: {
      quote: 'They rebuilt our entire deck in 12 Oaks and it looks like it was always part of the house. The HOA approved it in one pass because Mission Decks prepared everything perfectly.',
      name: 'The Andersons',
      neighborhood: '12 Oaks, Holly Springs',
      rating: 5,
    },
    metaTitle: 'Deck Builder in Holly Springs NC | Mission Decks & Design',
    metaDescription: 'Mission Decks & Design serves Holly Springs NC — custom decks, outdoor kitchens, pergolas & more. Neighborhoods: 12 Oaks, Sunset Ridge, Braxton Village. Request a consultation.',
    heroHeading: 'Deck Builder & Outdoor Living in Holly Springs NC',
  },
  {
    slug: 'apex-nc',
    name: 'Apex',
    county: 'Wake County',
    zip: ['27502', '27523', '27539'],
    neighborhoods: ['Bella Casa', 'Scotts Mill', 'Haddon Hall', 'Sweetwater', 'Lochmere Highlands'],
    landmarks: [
      { name: 'Apex Nature Park', type: 'park', description: 'A 130-acre preserve with boardwalk trails through wetlands. Homeowners along the Lufkin Road corridor frequently ask for decks and porches that blend with the natural wooded setting surrounding this park.' },
      { name: 'Historic Downtown Apex', type: 'district', description: 'Salem Street\'s renovated downtown — voted America\'s Peak of Good Living. The older homes near downtown often have smaller lots requiring creative deck layouts that maximize limited backyard space.' },
      { name: 'Apex Community Park', type: 'park', description: 'A 200+ acre sports and recreation complex off Laura Duncan Road. The subdivisions bordering the park — including Scotts Mill and Haddon Hall — feature homes with larger lots ideal for multi-zone outdoor living projects.' },
    ],
    geo: { lat: 35.7327, lng: -78.8503 },
    soilType: 'Piedmont clay transitioning to sandy loam near Jordan Lake watershed. Soil conditions vary by subdivision — neighborhoods near the lake drainage have better-draining soil, while those on the ridgelines sit on dense red clay. We adjust footing depth and drainage planning for each specific lot.',
    waterRestrictions: 'Apex water restrictions follow the Town of Apex Conservation Plan with seasonal watering limits. Homes on wells (common in 27523 zip code) have no municipal restrictions but should monitor well capacity for irrigation near outdoor structures.',
    localInsight: 'Apex has grown rapidly and the real estate market is highly competitive — outdoor living upgrades are one of the best ROI investments for Apex homeowners. The "Peak of Good Living" tagline is not just marketing; the community takes pride in well-maintained, attractive outdoor spaces. Homes in Bella Casa and Sweetwater tend toward Mediterranean and transitional architecture, which pairs well with stained cedar pergolas and earth-toned composite decking.',
    commonYardSize: 'Quarter-acre to third-acre lots in newer subdivisions, with half-acre+ lots in older areas near downtown. Rear setbacks range from 20–30 feet depending on the community.',
    hoaNotes: 'Apex HOAs tend to be moderately strict. Bella Casa has detailed architectural guidelines including specific material and color palettes. Scotts Mill requires pre-approval with a 30-day review cycle. We manage the application process and ensure designs comply before submission.',
    testimonial: {
      quote: 'Our Bella Casa neighbors kept asking who built our pergola. The design fits the Mediterranean style of the neighborhood perfectly. Worth every penny.',
      name: 'Sarah M.',
      neighborhood: 'Bella Casa, Apex',
      rating: 5,
    },
    metaTitle: 'Deck Builder in Apex NC | Mission Decks & Design',
    metaDescription: 'Mission Decks & Design serves Apex NC — custom decks, outdoor kitchens, pergolas & more. Neighborhoods: Bella Casa, Scotts Mill, Sweetwater. Request a consultation.',
    heroHeading: 'Deck Builder & Outdoor Living in Apex NC',
  },
  {
    slug: 'cary-nc',
    name: 'Cary',
    county: 'Wake County',
    zip: ['27511', '27513', '27518', '27519'],
    neighborhoods: ['Amberly', 'Preston', 'MacGregor Downs', 'Cary Park', 'Lochmere'],
    landmarks: [
      { name: 'Fred G. Bond Metro Park', type: 'park', description: 'The largest municipal park in Wake County at 310 acres with a lake, trails, and boathouse. Homes in Lochmere and along Kildaire Farm Road are minutes away, and many homeowners there invest in outdoor living spaces that echo the park\'s natural lakeside setting.' },
      { name: 'Waverly Place & Crossroads', type: 'shopping', description: 'Two of Cary\'s premier shopping and dining destinations. The established neighborhoods between these centers — including Cary Park and parts of Preston — contain homes built in the 1990s and 2000s that are prime candidates for deck replacement and outdoor upgrades.' },
      { name: 'Prestonwood Country Club', type: 'community', description: 'A private club surrounded by the Preston neighborhood, one of Cary\'s most upscale communities. Preston homeowners typically pursue high-end outdoor living projects — composite decks with cable rail, full outdoor kitchens, and Eze Breeze porches.' },
    ],
    geo: { lat: 35.7915, lng: -78.7811 },
    soilType: 'Predominantly Cecil clay with some Worsham sandy loam near creek corridors. Cary sits on rolling Piedmont terrain with moderate slopes — many backyards have 3–8% grades that require multi-level deck designs or retaining considerations. Creek setback rules apply on lots bordering Swift Creek and Walnut Creek tributaries.',
    waterRestrictions: 'Cary enforces year-round odd/even watering schedules and seasonal water conservation measures during drought. The town\'s water recycling program (reclaimed water for irrigation) is available in some newer subdivisions, which can affect landscape planning around deck and patio areas.',
    localInsight: 'Cary is the Triangle\'s most established suburb with a mature tree canopy, well-funded HOAs, and homeowners who value quality over cost. Deck projects in Cary tend to be higher-end — composite materials, cable rail systems, integrated lighting, and multi-zone designs are the norm rather than the exception. The town\'s strict tree preservation ordinances mean deck designs often need to work around existing hardwoods, which we treat as a design opportunity rather than a constraint.',
    commonYardSize: 'Third-acre to half-acre lots in most subdivisions, with 1+ acre lots in MacGregor Downs and older West Cary neighborhoods. Mature tree canopy creates shade considerations for material selection.',
    hoaNotes: 'Cary HOAs are among the most active in the Triangle. Preston and Amberly have architectural review committees that meet monthly with detailed submission requirements. MacGregor Downs has specific material restrictions and a 45-day review process. We build HOA-compliance into every Cary project from the first design meeting.',
    testimonial: {
      quote: 'We had three contractors say our MacGregor Downs lot was too complicated — mature oaks, slope, strict HOA. Mission Decks designed around every constraint and the result is stunning.',
      name: 'Robert & Linda K.',
      neighborhood: 'MacGregor Downs, Cary',
      rating: 5,
    },
    metaTitle: 'Deck Builder in Cary NC | Mission Decks & Design',
    metaDescription: 'Mission Decks & Design serves Cary NC — custom decks, outdoor kitchens, pergolas & more. Neighborhoods: Amberly, Preston, MacGregor Downs. Request a consultation.',
    heroHeading: 'Deck Builder & Outdoor Living in Cary NC',
  },
  {
    slug: 'fuquay-varina-nc',
    name: 'Fuquay-Varina',
    county: 'Wake County',
    zip: ['27526'],
    neighborhoods: ['Crooked Creek', 'South Lakes', 'Bentwinds', 'Sunset Bluffs', 'Holland Hills'],
    landmarks: [
      { name: 'Fuquay Mineral Spring Park', type: 'park', description: 'The historic mineral spring that gave the town its name. The revitalized downtown area around the park is driving new investment, and nearby homeowners are upgrading their properties to match the town\'s growth.' },
      { name: 'Aviator Brewing Company', type: 'business', description: 'A landmark local brewery on Broad Street. Fuquay-Varina\'s emerging food-and-drink culture is pushing homeowners to create backyard entertaining spaces — outdoor kitchens and decks designed for hosting are our most requested projects in FV.' },
      { name: 'South Lakes Golf Course', type: 'recreation', description: 'The centerpiece of the South Lakes community. Homes bordering the course often have premium views that are best enjoyed from an elevated deck or screened porch designed to frame the sightlines.' },
    ],
    geo: { lat: 35.5843, lng: -78.7997 },
    soilType: 'Piedmont clay similar to Holly Springs but with more variability — some areas near the Harnett County line have sandy clay subsoil that drains better, while neighborhoods on the ridgelines sit on dense red clay. We test soil conditions during the site visit and adjust footing specs accordingly.',
    waterRestrictions: 'Fuquay-Varina draws from Harnett County Regional Water. Summer irrigation restrictions are common during drought years. Deck and porch projects are not directly affected, but landscaping around new outdoor structures should use drought-tolerant plantings.',
    localInsight: 'Fuquay-Varina is the Triangle\'s fastest-growing town, and that growth means new subdivisions with builder-grade outdoor spaces that homeowners want to personalize. The south side of town (Sunset Bluffs, Holland Hills) has newer construction with standard 12x12 builder decks that most families outgrow within 2–3 years. The north side (Crooked Creek, Bentwinds) has more established homes where aging decks need replacement. Both segments are actively investing in outdoor upgrades.',
    commonYardSize: 'Quarter-acre lots in newer subdivisions, half-acre+ lots in older areas south of town. Lots in Crooked Creek and Bentwinds tend to have more varied topography, creating opportunities for multi-level deck designs.',
    hoaNotes: 'Crooked Creek and South Lakes have active HOAs with architectural review. Bentwinds (a gated golf community) has the strictest guidelines including specific material and color requirements. Newer subdivisions like Sunset Bluffs typically have lighter restrictions but still require pre-approval for exterior structures.',
    testimonial: {
      quote: 'We outgrew our builder deck in two years. Mission Decks replaced it with a two-level composite deck that finally gives us the space we need for the kids and the grill.',
      name: 'The Patels',
      neighborhood: 'Crooked Creek, Fuquay-Varina',
      rating: 5,
    },
    metaTitle: 'Deck Builder in Fuquay-Varina NC | Mission Decks & Design',
    metaDescription: 'Mission Decks & Design serves Fuquay-Varina NC — custom decks, outdoor kitchens, pergolas & more. Neighborhoods: Crooked Creek, South Lakes, Bentwinds. Request a consultation.',
    heroHeading: 'Deck Builder & Outdoor Living in Fuquay-Varina NC',
  },
  {
    slug: 'sanford-nc',
    name: 'Sanford',
    county: 'Lee County',
    zip: ['27330', '27332'],
    neighborhoods: ['Carolina Trace', 'West Landing', 'Brownstone', 'Owls Nest', 'Quail Ridge'],
    landmarks: [
      { name: 'San-Lee Park', type: 'park', description: 'A 125-acre nature park with hiking trails, fishing ponds, and a zip line course. The park reflects Sanford\'s mix of outdoor recreation culture and growing residential development. Homes nearby are investing in outdoor living to match the area\'s lifestyle.' },
      { name: 'Kiwanis Family Park', type: 'park', description: 'Community park along the Deep River. The established neighborhoods in central Sanford near the park feature larger lots with mature trees — ideal for pergolas and shaded outdoor dining areas.' },
      { name: 'Carolina Trace Country Club', type: 'community', description: 'A gated golf and lake community that is Sanford\'s premier residential address. Carolina Trace homeowners invest in premium outdoor structures that complement lakefront and golf course views.' },
    ],
    geo: { lat: 35.4799, lng: -79.1803 },
    soilType: 'Deep River basin soils — a mix of Piedmont clay and sandy loam. Carolina Trace and lakefront properties sit on better-draining sandy clay, while the western side of Sanford has denser clay requiring deeper footings. Soil variability is higher in Sanford than in Wake County, so site-specific assessment matters more here.',
    waterRestrictions: 'Sanford draws from the Cape Fear River basin through the City of Sanford water system. Restrictions are less frequent than Wake County but apply during severe drought. Well water is common in Carolina Trace and rural lots.',
    localInsight: 'Sanford is our furthest service area, and we bring the same quality here that our Holly Springs neighbors expect. The market is different — lots are larger, homes are more spread out, and the pace is slower. Homeowners in Sanford tend to prioritize durability and value over trend. Deck projects here often involve larger structures (400–600 sq ft) because the yard space allows it, and we see more demand for traditional wood aesthetics that match the area\'s rural-suburban character.',
    commonYardSize: 'Half-acre to 1+ acre lots, with 2+ acre properties in Carolina Trace and rural areas. Larger lots mean fewer setback constraints and more flexibility for expansive outdoor living layouts.',
    hoaNotes: 'Carolina Trace has a well-established HOA with architectural review for all exterior construction. Owls Nest and Quail Ridge have lighter guidelines. Many Sanford properties outside of planned communities have no HOA restrictions, which gives homeowners more design freedom.',
    testimonial: {
      quote: 'Most contractors in our area focus on basic builds. Mission Decks brought a level of design and attention to detail that we didn\'t expect to find this far from Raleigh.',
      name: 'Jim & Carol T.',
      neighborhood: 'Carolina Trace, Sanford',
      rating: 5,
    },
    metaTitle: 'Deck Builder in Sanford NC | Mission Decks & Design',
    metaDescription: 'Mission Decks & Design serves Sanford NC — custom decks, outdoor kitchens, pergolas & more. Neighborhoods: Carolina Trace, West Landing, Owls Nest. Request a consultation.',
    heroHeading: 'Deck Builder & Outdoor Living in Sanford NC',
  },
  {
    slug: 'raleigh-nc',
    name: 'Raleigh',
    county: 'Wake County',
    zip: ['27603', '27606', '27607', '27610', '27615'],
    neighborhoods: ['North Hills', 'Brier Creek', 'Midtown', 'Five Points', 'Boylan Heights'],
    landmarks: [
      { name: 'Umstead State Park', type: 'park', description: 'A 5,600-acre park on Raleigh\'s western edge, bordering the neighborhoods we serve most — the 27607 and 27606 zip codes. Homes in this corridor sit on wooded lots with mature hardwoods, making deck design a balance of maximizing outdoor space and respecting the tree canopy.' },
      { name: 'North Hills District', type: 'shopping', description: 'Raleigh\'s premier mixed-use development at Six Forks and the Beltline. The surrounding residential areas in North Raleigh contain homes from the 1970s–2000s that are actively being renovated, with outdoor living upgrades being one of the most common improvement projects.' },
      { name: 'Historic Boylan Heights', type: 'district', description: 'One of Raleigh\'s oldest neighborhoods near downtown, with early 1900s homes on smaller lots. Deck and porch projects here require creative use of space, historically sensitive design, and navigation of the neighborhood\'s overlay district guidelines.' },
    ],
    geo: { lat: 35.7796, lng: -78.6382 },
    soilType: 'Diverse Piedmont soils across Raleigh\'s spread — heavy Cecil clay in South and SW Raleigh (27603, 27606), transitioning to Worsham and Durham sandy clay in northern areas (27615). Raleigh\'s oldest neighborhoods have heavily compacted urban fill soils that sometimes require helical pier footings instead of standard poured concrete.',
    waterRestrictions: 'Raleigh Public Utilities enforces year-round odd/even irrigation schedules with additional restrictions during drought stages. The city has one of the Triangle\'s most proactive water conservation programs, which affects landscape irrigation planning around new outdoor structures.',
    localInsight: 'Raleigh is the Triangle\'s largest and most competitive market for outdoor construction. Homeowners here have more contractors to choose from, which makes quality, communication, and design differentiation essential. We focus on the SW Raleigh corridor (27603, 27606, 27607) where our Holly Springs proximity gives us a logistics advantage. Raleigh projects tend to be design-forward — homeowners in Five Points and Boylan Heights want outdoor spaces that respect the character of their historic homes, while North Hills and Brier Creek clients lean toward modern clean-line designs.',
    commonYardSize: 'Highly variable — from small urban lots in Five Points (0.1–0.2 acres) to suburban half-acre lots in Brier Creek and North Raleigh. Inner-city lots require more creative design; suburban lots allow larger, multi-zone layouts.',
    hoaNotes: 'Raleigh HOA strictness varies enormously by neighborhood. Brier Creek has an active HOA with detailed architectural guidelines. North Hills residential areas have lighter restrictions. Five Points and Boylan Heights fall under historic overlay districts with City of Raleigh design review — not an HOA, but functionally similar. We research the specific rules for your neighborhood before presenting design options.',
    testimonial: {
      quote: 'Finding a deck builder who understood the character of our 1920s Five Points home was not easy. Mission Decks designed a back porch that looks like it\'s been there for decades. Exactly what we wanted.',
      name: 'Maria S.',
      neighborhood: 'Five Points, Raleigh',
      rating: 5,
    },
    metaTitle: 'Deck Builder in Raleigh NC | Mission Decks & Design',
    metaDescription: 'Mission Decks & Design serves Raleigh NC — custom decks, outdoor kitchens, pergolas & more. Neighborhoods: North Hills, Brier Creek, Midtown. Request a consultation.',
    heroHeading: 'Deck Builder & Outdoor Living in Raleigh NC',
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(l => l.slug === slug);
}
