import { Building, Home, GraduationCap, MapPin, CheckCircle } from 'lucide-react';

export interface ProjectData {
    id: string;
    title: string;
    category: string;
    location: string;
    description: string;
    priceStart: string;
    features: string[];
    specs: { label: string; value: string }[];
    units: {
        name: string;
        type: string;
        price: string;
        features: string[];
        image?: string;
        description?: string;
        sqm?: number;
        floor?: string;
        gallery?: string[];
    }[];
    status: 'Selling' | 'Sold Out' | 'Coming Soon';
    imageHeight: string;
    heroImage?: string;
    gallery?: string[];
    offerings?: { label: string; icon: 'living' | 'kitchen' | 'bed' | 'bath' }[];
    logo?: string;
    // Investment fields
    minInvestment?: string;
    expectedYield?: number;
    appreciationRate?: number;
    paymentPlans?: { name: string; duration: string; deposit: string; monthly: string; total: string }[];
    investorCount?: number;
    fundedPercentage?: number;
    // Rich detail fields
    amenities?: { category: string; items: string[] }[];
    neighborhood?: { name: string; distance: string; type: string }[];
    propertyDetails?: { label: string; value: string }[];
    constructionStatus?: string;
    completionDate?: string;
    totalUnits?: number;
    architectStyle?: string;
}

export const projects: Record<string, ProjectData> = {
    'metro-view': {
        id: 'metro-view',
        title: 'The MetroView',
        category: 'Premium Residential',
        location: 'Institution & Research District, Jabi, Abuja',
        description: 'Situated within the Institution and Research Zone of Jabi District, MetroView Estate offers proximity to premier institutions like Nile and Baze Universities. A masterpiece of modern architecture tailored for the discerning investor. The estate features contemporary designs with clean lines, floor-to-ceiling windows, and premium imported finishes throughout. Each home is thoughtfully planned to maximize natural light and cross-ventilation, with landscaped gardens and dedicated green spaces creating a serene living environment in the heart of Abuja.',
        priceStart: 'N50 Million',
        features: ['Ample Parking Spaces', 'Children\'s Play Area', 'Dedicated 24/7 Security', 'Close to Top Schools', 'Flexible Payment Plans', 'Landscaped Gardens', 'Perimeter Fencing & CCTV', 'Underground Drainage System', 'Street Lighting', 'Community Lounge', 'Eco-Friendly Design', 'Fire Safety Systems'],
        specs: [
            { label: 'Location', value: 'Jabi, Abuja' },
            { label: 'Initial Deposit', value: 'N10 Million' },
            { label: 'Payment Plan', value: 'Up to 18 Months' },
        ],
        units: [
            {
                name: 'Signature',
                type: 'Two Bedroom Apartment',
                price: 'N50 Million',
                sqm: 85,
                floor: 'Ground & First Floor',
                features: ['2 Bedrooms', '3 Toilets', 'Ample Parking', 'Modern Finish', 'Open-Plan Kitchen', 'Visitors Toilet', 'Store Room', 'En-suite Master'],
                image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
                description: 'The Signature is a premium 2-bedroom apartment designed for modern urban living. Featuring high-end finishes and ample natural light, this unit offers an estimated 7% rental yield and significant capital appreciation potential in the heart of Jabi. The open-plan living and dining area flows seamlessly into a modern kitchen with granite countertops and fitted cabinets.',
                gallery: [
                    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
                ]
            },
            {
                name: 'Deluxe',
                type: 'Two Bedroom Terrace + BQ',
                price: 'N75 Million',
                sqm: 120,
                floor: 'Duplex (Ground + First)',
                features: ['2 Bedrooms', '3 Toilets', 'Attached BQ', 'Private Balcony', 'Fitted Kitchen', 'Dining Area', 'Anti-Burglar Doors', 'POP Ceiling'],
                image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
                description: 'The Deluxe offers the perfect balance of privacy and community. A 2-bedroom terrace with an attached BQ, it provides spacious living areas and a private balcony with garden views. Ideal for young families or investors seeking high rental demand. Features include high-quality ceramic floor tiles, POP ceiling with ambient lighting, and a dedicated parking bay.',
                gallery: [
                    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1600210491892-03d54cc0c578?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1600566753376-12c8ab7c5a85?auto=format&fit=crop&q=80&w=800',
                ]
            },
            {
                name: 'Vista 1',
                type: 'Four Bedroom Terrace + BQ',
                price: 'N110 Million',
                sqm: 200,
                floor: 'Duplex (3 Levels)',
                features: ['4 Bedrooms', '5 Toilets', 'Attached BQ', 'Spacious Living', 'Walk-in Closet', 'Family Lounge', 'Maid\'s Room', 'Double Door Entry'],
                image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
                description: 'Vista 1 is a spacious 4-bedroom terrace designed for luxury and comfort. With 5 toilets and an attached BQ, it offers ample space for larger families. The ground floor features a grand living room, dining area, and a fully fitted kitchen. The first floor hosts three bedrooms and a family lounge, while the penthouse level includes the master suite with a walk-in closet and private balcony.',
                gallery: [
                    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1600573472556-e636c2acda9e?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
                ]
            },
            {
                name: 'Vista 2',
                type: 'Four Bedroom Terrace + BQ (Corner Piece)',
                price: 'N130 Million',
                sqm: 230,
                floor: 'Duplex (3 Levels) + Garden',
                features: ['4 Bedrooms', '5 Toilets', 'Corner Piece', 'Extra Garden Space', 'Rooftop Terrace', 'Double Parking', 'Premium Tiles', 'Jacuzzi-Ready Master Bath'],
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
                description: 'Vista 2 is our premium corner-piece terrace, offering extra garden space and enhanced privacy. With 4 bedrooms and a BQ, this exclusive unit commands premium rental value. The corner position provides additional natural light, a wrap-around garden, and a private rooftop terrace with panoramic views. The master bathroom is jacuzzi-ready with premium Italian tiles.',
                gallery: [
                    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
                    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800',
                ]
            }
        ],
        status: 'Selling',
        imageHeight: 'h-[500px]',
        heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600573472556-e636c2acda9e?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800',
        ],
        offerings: [
            { label: 'Living Room & Dining', icon: 'living' },
            { label: 'Kitchen & Wardrobes', icon: 'kitchen' },
            { label: '4 Bedrooms', icon: 'bed' },
            { label: '4.5 Bathrooms', icon: 'bath' }
        ],
        logo: '/images/mretro-logo-1024x315.png',
        minInvestment: 'N10 Million',
        expectedYield: 8.5,
        appreciationRate: 12,
        investorCount: 47,
        fundedPercentage: 78,
        paymentPlans: [
            { name: 'Outright', duration: 'Immediate', deposit: 'N50M', monthly: '—', total: 'N50M' },
            { name: 'Standard', duration: '12 Months', deposit: 'N10M', monthly: 'N3.5M', total: 'N52M' },
            { name: 'Extended', duration: '18 Months', deposit: 'N10M', monthly: 'N2.5M', total: 'N55M' },
        ],
        constructionStatus: '75% Complete',
        completionDate: 'Q4 2026',
        totalUnits: 48,
        architectStyle: 'Contemporary Modern',
        amenities: [
            { category: 'Security', items: ['24/7 Armed Security', 'CCTV Surveillance', 'Perimeter Electric Fencing', 'Controlled Access Gate', 'Intercom System'] },
            { category: 'Lifestyle', items: ['Children\'s Play Area', 'Landscaped Gardens', 'Community Lounge', 'Jogging Track', 'BBQ Area'] },
            { category: 'Infrastructure', items: ['Underground Drainage', 'Street Lighting', 'Paved Internal Roads', 'Central Waste Management', 'Water Treatment Plant'] },
            { category: 'Utilities', items: ['Prepaid Electricity Meters', 'Borehole Water Supply', 'Backup Generator Provision', 'Fiber Optic Ready', 'Gas Pipeline Network'] },
        ],
        neighborhood: [
            { name: 'Nile University', distance: '2 min', type: 'Education' },
            { name: 'Baze University', distance: '5 min', type: 'Education' },
            { name: 'Jabi Lake Mall', distance: '8 min', type: 'Shopping' },
            { name: 'National Open University', distance: '3 min', type: 'Education' },
            { name: 'Ceddi Plaza', distance: '10 min', type: 'Shopping' },
            { name: 'National Hospital', distance: '15 min', type: 'Healthcare' },
            { name: 'Nnamdi Azikiwe International Airport', distance: '25 min', type: 'Transport' },
            { name: 'Jabi Motor Park', distance: '5 min', type: 'Transport' },
        ],
        propertyDetails: [
            { label: 'Foundation', value: 'Reinforced Concrete' },
            { label: 'Wall Structure', value: 'Sandcrete Blocks, Plastered & Painted' },
            { label: 'Roofing', value: 'Aluminium Long-Span Roofing Sheets' },
            { label: 'Flooring', value: '60x60 Porcelain Tiles (Living) / Ceramic Tiles (Wet Areas)' },
            { label: 'Doors', value: 'Solid Hardwood Panel Doors + Anti-Burglar Doors' },
            { label: 'Windows', value: 'Aluminium Sliding Windows with Mosquito Nets' },
            { label: 'Ceiling', value: 'POP Suspended Ceiling with Recessed Lighting' },
            { label: 'Kitchen', value: 'Granite Worktop, Built-in Cabinets, Stainless Steel Sink' },
            { label: 'Bathroom', value: 'Wall-Hung WC, Shower Panel, Vanity Mirror' },
            { label: 'Painting', value: 'Emulsion Paint (Interior) / Textured Paint (Exterior)' },
        ],
    },
    'dantata-vistas': {
        id: 'dantata-vistas',
        title: 'Dantata Vistas',
        category: 'Self-Complete Housing Units',
        location: 'Multiple Locations (Jabi, Gwarinpa, Kabusa)',
        description: '1SQmeters by Dantata Vistas offers a curated mix of detached, terraced, and apartment homes across Abuja’s prime locations. Delivered as cost-effective structures for owner customization, they ensure affordability, swift possession, and investment appeal.',
        priceStart: 'Contact for Pricing',
        features: ['Cost-Effective', 'Faster Possession', 'Customization Options', 'Prime Locations'],
        specs: [
            { label: 'Plot 310', value: 'By Nile University, Jabi' },
            { label: 'Plot 106', value: 'By Papal\'s Ground, Gwarinpa Ext.' },
            { label: 'Plot 2151', value: 'By Sunnyvale Estate, Kabusa' },
        ],
        units: [],
        status: 'Selling',
        imageHeight: 'h-[400px]',
        heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000'
    },
    'dantata-hostels': {
        id: 'dantata-hostels',
        title: 'Dantata Hostels',
        category: 'Student Co-Living',
        location: 'Institution & Research Zone, Jabi',
        description: 'Invest in premium student accommodation serving Nile, Baze, and National Open Universities. A high-yield asset class with consistent demand and proven returns.',
        priceStart: 'N300 Million',
        features: ['12% Yearly Rental Yield', '99.9% Occupancy', 'Minimal Maintenance', 'All En-suite Rooms'],
        specs: [
            { label: 'Rooms', value: '30 En-suite + Kitchenette' },
            { label: 'ROI (Year 1)', value: 'N60m Rental Income' },
            { label: 'Appreciation', value: '9% Annual Growth' },
        ],
        units: [
            {
                name: 'Full Block (Outright)',
                type: '30 Room Hostel Block',
                price: 'N300 Million',
                features: ['Outright Payment', 'Immediate Ownership'],
                image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800',
                description: 'Own a complete 30-room student hostel block. This high-yield asset serves the growing student population of Nile and Baze Universities, offering a projected 12% annual rental yield and 99.9% occupancy rate. A turnkey investment for serious portfolio builders.'
            },
            {
                name: '12-Month Plan',
                type: '30 Room Hostel Block',
                price: 'N312 Million',
                features: ['Spread over 12 Months'],
                image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
                description: 'Secure a 30-room hostel block with a flexible 12-month payment plan. Enjoy the same high returns and student demand while managing your cash flow. A strategic investment in the thriving educational sector.'
            },
            {
                name: '18-Month Plan',
                type: '30 Room Hostel Block',
                price: 'N318 Million',
                features: ['Spread over 18 Months'],
                image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800',
                description: 'Maximize your investment flexibility with our 18-month payment plan for a 30-room hostel block. Benefit from long-term capital appreciation and steady rental income from the vibrant student community in Jabi.'
            }
        ],
        status: 'Selling',
        imageHeight: 'h-[450px]',
        heroImage: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2000',
        gallery: [
            'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1522771753035-485053ded613?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800'
        ],
        offerings: [
            { label: 'Student Lounge & Study', icon: 'living' },
            { label: 'Kitchenette', icon: 'kitchen' },
            { label: '30 En-suite Rooms', icon: 'bed' },
            { label: '30 Bathrooms', icon: 'bath' }
        ],
        minInvestment: 'N60 Million',
        expectedYield: 12,
        appreciationRate: 9,
        investorCount: 12,
        fundedPercentage: 42,
        paymentPlans: [
            { name: 'Outright', duration: 'Immediate', deposit: 'N300M', monthly: '—', total: 'N300M' },
            { name: 'Standard', duration: '12 Months', deposit: 'N60M', monthly: 'N21M', total: 'N312M' },
            { name: 'Extended', duration: '18 Months', deposit: 'N60M', monthly: 'N14.3M', total: 'N318M' },
        ]
    },
    'copa-cabana-ii': {
        id: 'copa-cabana-ii',
        title: 'Copa Cabana II',
        category: 'Lifestyle Estate',
        location: 'Wumba District, Abuja',
        description: 'Situated in Cadastral Zone C10, Wumba. A 100% built-up neighborhood offering security, landscape, and proximity to shopping malls and schools.',
        priceStart: 'N35 Million',
        features: ['100% Built-up Area', 'Access to Shopping Malls', 'Dedicated Security', 'Play Area'],
        specs: [
            { label: 'Location', value: 'Wumba District' },
            { label: 'Zone', value: 'Cadastral Zone C10' },
            { label: 'Infrastructure', value: 'Fully Developed' },
        ],
        units: [
            {
                name: 'Cardinal',
                type: '3-Bedroom Semi-Detached + BQ',
                price: 'N60 Million',
                features: ['3 Bedrooms', '4 Toilets', 'Detached BQ', 'Exquisite'],
                image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
                description: 'The Cardinal is an exquisite 3-bedroom semi-detached duplex with a detached BQ. It offers superior privacy and luxury, making it a top choice for families. Enjoy robust capital growth and high rental demand in the fully developed Wumba District.'
            },
            {
                name: 'Clover',
                type: '3-Bedroom Terrace + BQ',
                price: 'N45 Million',
                features: ['3 Bedrooms', '4 Toilets', 'Comfortable Selection'],
                image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
                description: 'Clover offers a comfortable selection of 3-bedroom terrace duplexes with 1-room boys’ quarters each. This property offers up to 5% per annum in rental income, 6% annual growth in value, and a 90% occupancy rate.'
            },
            {
                name: 'Bouvardia',
                type: '2-Bedroom Terrace + BQ',
                price: 'N35 Million',
                features: ['2 Bedrooms', '3 Toilets', 'Unique Development'],
                image: 'https://images.unsplash.com/photo-1600210491892-03d54cc0c578?auto=format&fit=crop&q=80&w=800',
                description: 'Bouvardia offers a unique 2-bedroom terrace with a BQ, perfect for starters or investors. With a unique design and efficient layout, it promises excellent rental yields and is situated in a secure, fully built-up neighborhood.'
            }
        ],
        status: 'Selling',
        imageHeight: 'h-[400px]',
        heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000',
        gallery: [
            'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600210491892-03d54cc0c578?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=800'
        ],
        offerings: [
            { label: 'Family Living Area', icon: 'living' },
            { label: 'Modern Kitchen', icon: 'kitchen' },
            { label: '3 Bedrooms + BQ', icon: 'bed' },
            { label: '4 Bathrooms', icon: 'bath' }
        ],
        logo: '/images/copacapana-logo.png',
        minInvestment: 'N7 Million',
        expectedYield: 6,
        appreciationRate: 8,
        investorCount: 63,
        fundedPercentage: 85,
        paymentPlans: [
            { name: 'Outright', duration: 'Immediate', deposit: 'N35M', monthly: '—', total: 'N35M' },
            { name: 'Standard', duration: '12 Months', deposit: 'N7M', monthly: 'N2.5M', total: 'N37M' },
            { name: 'Extended', duration: '18 Months', deposit: 'N7M', monthly: 'N1.7M', total: 'N38M' },
        ]
    },
    'dantata-allure': {
        id: 'dantata-allure',
        title: 'Dantata Allure',
        category: 'Coming Soon',
        location: 'Abuja',
        description: 'Details for Dantata Allure will be announced soon. Stay tuned for this exclusive development.',
        priceStart: 'TBA',
        features: ['Coming Soon'],
        specs: [],
        units: [],
        status: 'Coming Soon',
        imageHeight: 'h-[400px]'
    },
    'polo-vistas': {
        id: 'polo-vistas',
        title: 'Polo Vistas',
        category: 'Coming Soon',
        location: 'Abuja',
        description: 'Details for Polo Vistas will be announced soon. Experience luxury living at its finest.',
        priceStart: 'TBA',
        features: ['Coming Soon'],
        specs: [],
        units: [],
        status: 'Coming Soon',
        imageHeight: 'h-[400px]'
    },
    'vintage': {
        id: 'vintage',
        title: 'Vintage',
        category: 'Coming Soon',
        location: 'Abuja',
        description: 'Details for Vintage will be announced soon. A timeline of elegance.',
        priceStart: 'TBA',
        features: ['Coming Soon'],
        specs: [],
        units: [],
        status: 'Coming Soon',
        imageHeight: 'h-[400px]'
    }
};
