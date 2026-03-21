export interface ProjectUnit {
    name: string;
    type: string;
    price: string;
    description: string;
    image?: string;
    floorPlans?: string[];
    features?: string[];
    sqm?: string;
}

export interface ProjectData {
    id: string;
    name: string;
    title?: string;
    tagline: string;
    description: string;
    location: string;
    coordinates?: { lat: number; lng: number };
    status: string;
    progress: number;
    mainImage: string;
    heroImage?: string;
    images: string[];
    minInvestment: string;
    annualYield: string;
    expectedYield?: number;
    capitalAppreciation: string;
    appreciationRate?: number;
    amenities: string[];
    units: ProjectUnit[];
    brochures?: { name: string; url: string }[];
    category?: string;
    logo?: string;
    investorCount?: number;
    fundedPercentage?: number;
    glbUrl?: string;
    offerings?: { icon: string; label: string }[];
    features?: string[];
    paymentPlans?: { name: string; duration: string; deposit: string; monthly: string; total: string }[];
}

export const projects: Record<string, ProjectData> = {
    'metro-view': {
        id: 'metro-view',
        name: 'The MetroView',
        title: 'The MetroView',
        category: 'Urban Luxury',
        tagline: 'Urban Luxury in the Heart of Jabi',
        description: 'A masterpiece of contemporary architecture, Metro View offers sophisticated living with breathtaking views of Abuja. Designed for the discerning urban professional, this development combines state-of-the-art facilities with a location that keeps you connected to everything that matters.',
        location: 'Plot 310, Nile University Street, Jabi, Abuja',
        status: 'Ongoing Construction',
        progress: 65,
        fundedPercentage: 72,
        investorCount: 45,
        expectedYield: 8.5,
        appreciationRate: 12,
        mainImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
        heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
        images: [
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800'
        ],
        minInvestment: '₦35,000,000',
        annualYield: '8.5%',
        capitalAppreciation: '12%',
        amenities: ['Rooftop Infinity Pool', 'Smart Home Integration', '24/7 Concierge', 'Private Gym', 'Automated Security'],
        features: ['Smart Home Automation', 'High-speed Elevators', 'Rooftop Lounge', '24/7 Power Supply'],
        offerings: [
            { icon: 'bed', label: '1-4 Bedrooms' },
            { icon: 'kitchen', label: 'Modular Kitchen' },
            { icon: 'living', label: 'Spacious Living' },
            { icon: 'bath', label: 'En-suite Bathrooms' }
        ],
        units: [
            {
                name: 'The Signature Penthouse',
                type: '4 Bedroom Penthouse',
                price: '₦215,000,000',
                sqm: '450',
                description: 'The pinnacle of luxury living with panoramic views and private terrace.',
                features: ['Private Elevator', 'Smart Automation', 'Chef-grade Kitchen']
            },
            {
                name: 'The Deluxe Suite',
                type: '3 Bedroom Apartment',
                price: '₦145,000,000',
                sqm: '280',
                description: 'Spacious high-floor apartment with floor-to-ceiling windows.',
                features: ['En-suite Bedrooms', 'Open-plan Living', 'Wrap-around Balcony']
            },
            {
                name: 'The Vista Type 1',
                type: '2 Bedroom Apartment',
                price: '₦85,000,000',
                sqm: '180',
                description: 'Modern urban home perfect for professionals or small families.',
                features: ['Modern Finishes', 'Integrated Appliances', 'Pool View']
            },
            {
                name: 'The Vista Type 2',
                type: '1 Bedroom Suite',
                price: '₦55,000,000',
                sqm: '95',
                description: 'Chic urban retreat with high rental demand and appreciation.',
                features: ['Compact Luxury', 'Fully Fitted', 'High Yield']
            }
        ],
        paymentPlans: [
            { name: 'Outright', duration: 'Instant', deposit: '100%', monthly: '0', total: '100%' },
            { name: 'Standard', duration: '12 Months', deposit: '30%', monthly: 'Balance over 12 mo', total: '105%' },
            { name: 'Flexible', duration: '24 Months', deposit: '20%', monthly: 'Balance over 24 mo', total: '110%' }
        ],
        brochures: [{ name: 'Metro View Brochure', url: '/brochures/metro-view.pdf' }]
    },
    'dantata-hostels': {
        id: 'dantata-hostels',
        name: 'Dantata Hostels',
        title: 'Dantata Hostels',
        category: 'Student Co-Living',
        tagline: 'Premium Student Co-Living Investment',
        description: 'Located in the Jabi Nile-Baze University corridor, Dantata Hostels offers a high-yield investment opportunity in the student housing sector. With a 20,000+ student catchment and 100% target occupancy, these units are delivered fully furnished and rent-ready.',
        location: 'Plot 747, Institution & Research District, Jabi, Abuja',
        status: 'Advanced Stage',
        progress: 85,
        fundedPercentage: 91,
        investorCount: 128,
        expectedYield: 15,
        appreciationRate: 35,
        mainImage: '/images/portfolio/Dantata Hostels/4 bedroom Terrace Duplex/4 BEDROOM TERRACE DUPLEX.png',
        heroImage: '/images/portfolio/Dantata Hostels/4 bedroom Terrace Duplex/4 BEDROOM TERRACE DUPLEX.png',
        images: [
            '/images/portfolio/Dantata Hostels/4 bedroom Terrace Duplex/4 BEDROOM TERRACE DUPLEX.png',
            '/images/portfolio/Dantata Hostels/3 bedroom Terrace Duplex/3 Bedroom terrace duplex.png',
            '/images/portfolio/Dantata Hostels/2 Bedroom Apartment/2 Bedroom Apartment.png'
        ],
        minInvestment: '₦112,500,000',
        annualYield: '12% - 15%',
        capitalAppreciation: '35%+',
        amenities: ['Tech Innovation Hub', 'Recreation Facilities', '24/7 Security', 'Professional Management', 'Furnished Common Areas'],
        features: ['Fully Furnished Units', 'Student Concierge', 'Study Lounges', 'High-speed WiFi'],
        offerings: [
            { icon: 'bed', label: '8 Bedspaces/Unit' },
            { icon: 'kitchen', label: 'Common Kitchen' },
            { icon: 'living', label: 'Social Hubs' },
            { icon: 'bath', label: 'En-suite' }
        ],
        units: [
            {
                name: '4 Bedroom Terrace Duplex',
                type: '8 Student Bedspaces',
                price: '₦300,000,000',
                sqm: '220',
                description: 'Fully furnished 4-bedroom terrace duplex designed for maximum yield.',
                features: ['8 Bedspaces', 'Fully Furnished', 'Projected ₦32M Rental/yr'],
                image: '/images/portfolio/Dantata Hostels/4 bedroom Terrace Duplex/4 BEDROOM TERRACE DUPLEX.png',
                floorPlans: [
                    '/images/portfolio/Dantata Hostels/4 bedroom Terrace Duplex/GROUND FLOR.png',
                    '/images/portfolio/Dantata Hostels/4 bedroom Terrace Duplex/FIRST FLOOR.png'
                ]
            },
            {
                name: '3 Bedroom Terrace Duplex',
                type: '6 Student Bedspaces',
                price: '₦225,000,000',
                sqm: '185',
                description: 'Accessible high-yield investment with 6 bedspaces across two floors.',
                features: ['6 Bedspaces', 'Fully Furnished', 'Projected ₦24M Rental/yr'],
                image: '/images/portfolio/Dantata Hostels/3 bedroom Terrace Duplex/3 Bedroom terrace duplex.png',
                 floorPlans: [
                    '/images/portfolio/Dantata Hostels/3 bedroom Terrace Duplex/GROUND FLOOR.png',
                    '/images/portfolio/Dantata Hostels/3 bedroom Terrace Duplex/FIRST FLOOR.png'
                ]
            },
            {
                name: '2 Bedroom Apartment',
                type: '4 Student Bedspaces',
                price: '₦150,000,000',
                sqm: '120',
                description: 'Pent-floor apartment offering privacy and strong rental returns.',
                features: ['4 Bedspaces', 'Fully Furnished', 'Projected ₦16M Rental/yr'],
                image: '/images/portfolio/Dantata Hostels/2 Bedroom Apartment/2 Bedroom Apartment.png',
                floorPlans: [
                    '/images/portfolio/Dantata Hostels/2 Bedroom Apartment/2 BED - PENT FLOOR BED A&B 1.png',
                    '/images/portfolio/Dantata Hostels/2 Bedroom Apartment/2 BED - PENT FLOOR KITCHEN.png'
                ]
            },
            {
                name: '1 Bedroom Apartment (Platinum)',
                type: '3 Student Bedspaces',
                price: '₦115,000,000',
                sqm: '85',
                description: 'Premium floor 1-bedroom suite optimized for student co-living.',
                features: ['3 Bedspaces', 'Fully Furnished', 'Projected ₦12M Rental/yr'],
                image: '/images/portfolio/Dantata Hostels/1 Bedroom Apartment/1 Bedroom Apartment.png'
            },
             {
                name: '1 Bedroom Apartment (Gold)',
                type: '3 Student Bedspaces',
                price: '₦112,500,000',
                sqm: '82',
                description: 'Standard 1-bedroom suite delivering consistent student rental returns.',
                features: ['3 Bedspaces', 'Fully Furnished', 'Projected ₦12M Rental/yr'],
                image: '/images/portfolio/Dantata Hostels/1 Bedroom Apartment/1 Bedroom Apartment.png'
            },
            {
                name: 'Studio Apartment',
                type: 'Private Unit',
                price: '₦50,000,000',
                sqm: '45',
                description: 'Individual studio unit for private student occupancy.',
                features: ['Fully Furnished', 'Kitchenette', 'Private Bath']
            }
        ],
        paymentPlans: [
            { name: 'Outright', duration: 'Instant', deposit: '100%', monthly: '0', total: '100%' },
            { name: 'Short Term', duration: '6 Months', deposit: '50%', monthly: 'Balance over 6 mo', total: '102%' }
        ],
        brochures: [
            { name: 'Hostels Brochure', url: '/brochures/HOSTELS_260320_152018.pdf' },
            { name: '747 Application Form', url: '/brochures/747 Application Form.pdf' }
        ]
    },
    'dantata-vistas': {
        id: 'dantata-vistas',
        name: 'Dantata Vistas',
        title: 'Dantata Vistas',
        category: 'Residential',
        tagline: 'Premier Residential Developments Across Abuja',
        description: 'Dantata Vistas is a collection of four strategically located residential projects: Vistas 002 (Karsana), Vistas 106 (Karsana North), Vistas 310 (Jabi), and Vistas 2151 (Lokogoma). Offering everything from early-stage DPC entry to advanced shell units.',
        location: 'Abuja: Jabi, Karsana, Lokogoma',
        status: 'Various Stages',
        progress: 40,
        fundedPercentage: 45,
        investorCount: 82,
        expectedYield: 8,
        appreciationRate: 25,
        mainImage: '/images/portfolio/Dantata Vistas/Vistas 106/4Bedroom Detached Duplex/A.RGB_color.jpg',
        heroImage: '/images/portfolio/Dantata Vistas/Vistas 106/4Bedroom Detached Duplex/A.RGB_color.jpg',
        images: [
            '/images/portfolio/Dantata Vistas/Vistas 106/4Bedroom Detached Duplex/A.RGB_color.jpg',
            '/images/portfolio/Dantata Vistas/Vistas 310/4 Bedroom Terrace Duplex/4Bedroom_Terrace_Okanje_21-11-2024 - 3D View - {3D}.jpg',
            '/images/portfolio/Dantata Vistas/Vistas 2151/3 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - 3D View - {3D}.jpg'
        ],
        minInvestment: '₦65,000,000',
        annualYield: '7% - 9%',
        capitalAppreciation: '25%+',
        amenities: ['Tarred Estate Roads', 'Perimeter Fencing', 'Estate Gatehouse', 'Utility Connections', 'Landscaped Grounds'],
        features: ['Good Road Network', 'Secure Environment', 'Modern Layouts', 'Capital Growth'],
        offerings: [
            { icon: 'bed', label: '2-4 Bedrooms' },
            { icon: 'kitchen', label: 'Standard Kitchen' },
            { icon: 'living', label: 'Modern Living' },
            { icon: 'bath', label: 'En-suite' }
        ],
        units: [
            // Vistas 002
            {
                name: 'Vistas 002 - 4 Bed Detached Duplex + BQ',
                type: 'Vistas 002 (EFAB Queens)',
                price: '₦220,000,000',
                sqm: '400',
                description: 'Premium family home in EFAB Queens, Karsana.',
                features: ['Detached Duplex', 'BQ Included'],
                image: '/images/portfolio/Dantata Vistas/Vistas 002/4Bedroom Detached Duplex/4 BED FOR JPEGS - 3D View - {3D}.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 002/4Bedroom Detached Duplex/4 BED FOR JPEGS - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 002/4Bedroom Detached Duplex/4 BED FOR JPEGS - Floor Plan - 02 First Floor.jpg'
                ]
            },
            // Vistas 106
            {
                name: 'Vistas 106 - 4 Bed Detached Duplex + BQ',
                type: 'Vistas 106 (Karsana N.)',
                price: '₦220,000,000',
                sqm: '380',
                description: 'Premium family home in the growing Karsana North district.',
                features: ['Papal Ground Location', 'Detached Duplex', 'Modern Design'],
                image: '/images/portfolio/Dantata Vistas/Vistas 106/4Bedroom Detached Duplex/A.RGB_color.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 106/4Bedroom Detached Duplex/4 BED FOR JPEGS - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 106/4Bedroom Detached Duplex/4 BED FOR JPEGS - Floor Plan - 02 First Floor.jpg'
                ]
            },
            {
                name: 'Vistas 106 - 4 Bed Terrace Duplex',
                type: 'Vistas 106 (Karsana N.)',
                price: '₦165,000,000',
                sqm: '280',
                description: 'Efficient and modern 4 bedroom terraced unit.',
                features: ['Terraced Duplex', 'Modern Design'],
                image: '/images/portfolio/Dantata Vistas/Vistas 106/4 Bedroom Terrace Duplex/4Bedroom_Terrace_Okanje_21-11-2024 - 3D View - {3D}.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 106/4 Bedroom Terrace Duplex/4Bedroom_Terrace_Okanje_21-11-2024 - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 106/4 Bedroom Terrace Duplex/4Bedroom_Terrace_Okanje_21-11-2024 - Floor Plan - 02 First Floor.jpg'
                ]
            },
            {
                name: 'Vistas 106 - 3 Bedroom Apartment',
                type: 'Vistas 106 (Karsana N.)',
                price: '₦101,000,000',
                sqm: '180',
                description: 'Spacious 3 bedroom apartment for young families.',
                features: ['Apartment Block', 'Modern Design'],
                image: '/images/portfolio/Dantata Vistas/Vistas 106/3 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - 3D View - {3D}.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 106/3 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 106/3 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 02 First Floor.jpg'
                ]
            },
            {
                name: 'Vistas 106 - 2 Bedroom Apartment',
                type: 'Vistas 106 (Karsana N.)',
                price: '₦77,000,000',
                sqm: '120',
                description: 'Compact 2 bedroom apartment ideal for professionals.',
                features: ['Apartment Block', 'Modern Design'],
                image: '/images/portfolio/Dantata Vistas/Vistas 106/2 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - 3D View - {3D}.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 106/2 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 106/2 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 02 First Floor.jpg'
                ]
            },
            // Vistas 310
            {
                name: 'Vistas 310 - 4 Bed Detached Duplex + BQ',
                type: 'Vistas 310 (Jabi)',
                price: '₦265,000,000',
                sqm: '420',
                description: 'Flagship Jabi residential offering on Nile University Street.',
                features: ['Premier Jabi Address', 'Detached Duplex', 'High Liquidity'],
                image: '/images/portfolio/Dantata Vistas/Vistas 310/4Bedroom Detached Duplex/A.RGB_color.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 310/4Bedroom Detached Duplex/4 BED FOR JPEGS - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 310/4Bedroom Detached Duplex/4 BED FOR JPEGS - Floor Plan - 02 First Floor.jpg'
                ]
            },
            {
                name: 'Vistas 310 - 4 Bed Terrace Duplex',
                type: 'Vistas 310 (Jabi)',
                price: '₦178,000,000',
                sqm: '290',
                description: 'Flagship Jabi terraced offering.',
                features: ['Premier Jabi Address', 'Terraced Duplex'],
                image: '/images/portfolio/Dantata Vistas/Vistas 310/4 Bedroom Terrace Duplex/4Bedroom_Terrace_Okanje_21-11-2024 - 3D View - {3D}.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 310/4 Bedroom Terrace Duplex/4Bedroom_Terrace_Okanje_21-11-2024 - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 310/4 Bedroom Terrace Duplex/4Bedroom_Terrace_Okanje_21-11-2024 - Floor Plan - 02 First Floor.jpg'
                ]
            },
            {
                name: 'Vistas 310 - 3 Bedroom Apartment',
                type: 'Vistas 310 (Jabi)',
                price: '₦115,000,000',
                sqm: '180',
                description: 'Premium 3 bedroom apartment in Jabi.',
                features: ['Premier Jabi Address', 'Apartment'],
                image: '/images/portfolio/Dantata Vistas/Vistas 310/3 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - 3D View - {3D}.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 310/3 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 310/3 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 02 First Floor.jpg'
                ]
            },
            {
                name: 'Vistas 310 - 2 Bedroom Apartment',
                type: 'Vistas 310 (Jabi)',
                price: '₦83,000,000',
                sqm: '120',
                description: 'Premium 2 bedroom apartment in Jabi.',
                features: ['Premier Jabi Address', 'Apartment'],
                image: '/images/portfolio/Dantata Vistas/Vistas 310/2 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - 3D View - {3D}.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 310/2 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 310/2 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 02 First Floor.jpg'
                ]
            },
            // Vistas 2151
            {
                name: 'Vistas 2151 - 4 Bed Detached Duplex + BQ (DPC)',
                type: 'Vistas 2151 (Lokogoma)',
                price: '₦65,000,000',
                sqm: '400',
                description: 'Entry-level construction stage for maximum capital appreciation. Shell available for ₦210M.',
                features: ['DPC Stage', 'Lokogoma Location', 'Huge Upside'],
                image: '/images/portfolio/Dantata Vistas/Vistas 2151/4Bedroom Detached Duplex/A.RGB_color.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 2151/4Bedroom Detached Duplex/4 BED FOR JPEGS - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 2151/4Bedroom Detached Duplex/4 BED FOR JPEGS - Floor Plan - 02 First Floor.jpg'
                ]
            },
            {
                name: 'Vistas 2151 - 4 Bed Terrace Duplex (Shell)',
                type: 'Vistas 2151 (Lokogoma)',
                price: '₦145,000,000',
                sqm: '280',
                description: 'Terraced duplex at Shell stage.',
                features: ['Shell Stage', 'Lokogoma Location'],
                image: '/images/portfolio/Dantata Vistas/Vistas 2151/4 Bedroom Terrace Duplex/4Bedroom_Terrace_Okanje_21-11-2024 - 3D View - {3D}.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 2151/4 Bedroom Terrace Duplex/4Bedroom_Terrace_Okanje_21-11-2024 - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 2151/4 Bedroom Terrace Duplex/4Bedroom_Terrace_Okanje_21-11-2024 - Floor Plan - 02 First Floor.jpg'
                ]
            },
            {
                name: 'Vistas 2151 - 3 Bedroom Apartment (Adv. Shell)',
                type: 'Vistas 2151 (Lokogoma)',
                price: '₦95,000,000',
                sqm: '180',
                description: '3 Bed Apartment at Advanced Shell stage.',
                features: ['Adv. Shell Stage', 'Lokogoma Location'],
                image: '/images/portfolio/Dantata Vistas/Vistas 2151/3 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - 3D View - {3D}.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 2151/3 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 2151/3 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 02 First Floor.jpg'
                ]
            },
            {
                name: 'Vistas 2151 - 2 Bedroom Apartment (Adv. Shell)',
                type: 'Vistas 2151 (Lokogoma)',
                price: '₦72,000,000',
                sqm: '120',
                description: '2 Bed Apartment at Advanced Shell stage.',
                features: ['Adv. Shell Stage', 'Lokogoma Location'],
                image: '/images/portfolio/Dantata Vistas/Vistas 2151/2 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - 3D View - {3D}.jpg',
                floorPlans: [
                    '/images/portfolio/Dantata Vistas/Vistas 2151/2 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 01 Ground Floor.jpg',
                    '/images/portfolio/Dantata Vistas/Vistas 2151/2 Bedroom Apartment/2-3 BEDROOM APARTMENTS OKANJE 05-03-2025 - Floor Plan - 02 First Floor.jpg'
                ]
            }
        ],
        paymentPlans: [
            { name: 'Outright', duration: 'Instant', deposit: '100%', monthly: '0', total: '100%' },
            { name: 'Milestone', duration: 'Construction Period', deposit: '40%', monthly: 'Based on stages', total: '105%' }
        ],
        brochures: [
            { name: 'Vistas Brochure', url: '/brochures/Dantata Vistas Brochure_CUSTOM 3_WEB_260320_151940.pdf' },
            { name: '106 Application Form', url: '/brochures/106 FORM.pdf' },
            { name: '310 Application Form', url: '/brochures/310 FORM.pdf' },
            { name: '2151 Application Form', url: '/brochures/2151 FORM.pdf' }
        ]
    },
    'dantata-arcade': {
        id: 'dantata-arcade',
        name: 'Dantata Arcade',
        title: 'Dantata Arcade',
        category: 'Commercial',
        tagline: 'Purpose-Built Commercial Units at EFAB Queens',
        description: 'Dantata Arcade delivers retail and commercial spaces within the EFAB Queens Gate community. Designed for boutiques, supermarkets, and banks, these units serve an immediate captive population.',
        location: 'EFAB Queens Gate, Karsana, Abuja',
        status: 'Under Construction',
        progress: 50,
        fundedPercentage: 60,
        investorCount: 34,
        expectedYield: 11,
        appreciationRate: 30,
        mainImage: '/images/portfolio/Dantata Arcade/300sqm BankingHall_Supermarket/300sqm BankingHall_Supermarket.jpeg',
        heroImage: '/images/portfolio/Dantata Arcade/300sqm BankingHall_Supermarket/300sqm BankingHall_Supermarket.jpeg',
        images: [
            '/images/portfolio/Dantata Arcade/300sqm BankingHall_Supermarket/300sqm BankingHall_Supermarket.jpeg',
            '/images/portfolio/Dantata Arcade/75sqm Duplex Shops/75sqm Duplex Shops.jpeg',
            '/images/portfolio/Dantata Arcade/50sqm Duplex Shops/50sqm Duplex Shops.jpeg'
        ],
        minInvestment: '₦100,000,000',
        annualYield: '10% - 12%',
        capitalAppreciation: '30%+',
        amenities: ['Ample Customer Parking', 'Standard Internal Roads', 'Security Patrols', 'Ready Utility Hooks', 'Central Waste Mgt'],
        features: ['Premium Commercial Address', 'High Foot Traffic', 'Modern Architecture', 'Secure Area'],
        offerings: [
            { icon: 'living', label: 'Commercial Units' },
            { icon: 'kitchen', label: 'Food Court Area' },
            { icon: 'bed', label: 'Retail Spaces' }
        ],
        units: [
            {
                name: 'Type B - 50 sqm Duplex Shop',
                type: '2 Floors',
                price: '₦100,000,000',
                sqm: '100',
                description: 'Entry-level commercial unit for boutiques, pharmacies or food services.',
                features: ['50sqm Ground', 'Two Floors', 'Advanced Shell'],
                image: '/images/portfolio/Dantata Arcade/50sqm Duplex Shops/50sqm Duplex Shops.jpeg',
                floorPlans: [
                    '/images/portfolio/Dantata Arcade/50sqm Duplex Shops/GROUND FLOOR.png',
                    '/images/portfolio/Dantata Arcade/50sqm Duplex Shops/FIRST FLOOR.png'
                ]
            },
            {
                name: 'Type A - 75 sqm Triplex Shop',
                type: '3 Floors',
                price: '₦135,000,000',
                sqm: '225',
                description: 'Versatile three-floor commercial unit for showrooms and restaurants.',
                features: ['75sqm per floor', 'Three Floors', 'Advanced Shell'],
                image: '/images/portfolio/Dantata Arcade/75sqm Duplex Shops/75sqm Duplex Shops.jpeg',
                floorPlans: [
                    '/images/portfolio/Dantata Arcade/75sqm Duplex Shops/GROUND FLOOR.png',
                    '/images/portfolio/Dantata Arcade/75sqm Duplex Shops/FIRST FLOOR.png',
                    '/images/portfolio/Dantata Arcade/75sqm Duplex Shops/SECOND FLOOR.png'
                ]
            },
            {
                name: 'Type C - 150 sqm Triplex + Lounge',
                type: 'Banking Hall / Showroom',
                price: '₦165,000,000',
                sqm: '450',
                description: 'Large-format commercial space suitable for anchor tenants and banks.',
                features: ['150sqm Ground', 'Three Floors', 'Advanced Shell'],
                image: '/images/portfolio/Dantata Arcade/300sqm BankingHall_Supermarket/300sqm BankingHall_Supermarket.jpeg'
            },
             {
                name: 'Type D - 125 sqm Duplex + Lounge',
                type: 'Supermarket / Retail',
                price: '₦117,500,000',
                sqm: '250',
                description: 'Spacious retail outlet for high-volume operations.',
                features: ['125sqm Ground', 'Two Floors', 'Advanced Shell'],
                image: '/images/portfolio/Dantata Arcade/300sqm BankingHall_Supermarket/300sqm BankingHall_Supermarket.jpeg'
            }
        ],
        paymentPlans: [
            { name: 'Outright', duration: 'Instant', deposit: '100%', monthly: '0', total: '100%' },
            { name: 'Business', duration: '18 Months', deposit: '30%', monthly: 'Balance over 18 mo', total: '108%' }
        ],
        brochures: [
            { name: 'Arcade Brochure', url: '/brochures/EFAB BIFOLD EXT.pdf' },
            { name: 'EFAB Application Form', url: '/brochures/EFAB FORM.pdf' }
        ]
    }
};

