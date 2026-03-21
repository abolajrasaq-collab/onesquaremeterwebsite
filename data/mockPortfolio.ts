// Mock data for the Owner Portal

export interface Investment {
    id: string;
    projectId: string;
    projectName: string;
    unitName: string;
    investmentDate: string;
    amountInvested: number;
    currentValue: number;
    appreciationRate: number;
    rentalYieldRate: number;
    status: 'Active' | 'Matured' | 'Pending';
    nextPaymentDate?: string;
    nextPaymentAmount?: number;
    totalPaid: number;
    totalCost: number;
    image: string;
}

export interface Transaction {
    id: string;
    type: 'deposit' | 'withdrawal' | 'rental_yield' | 'investment' | 'referral_bonus';
    amount: number;
    date: string;
    description: string;
    status: 'completed' | 'pending' | 'failed';
    reference: string;
}

export interface UserProfile {
    id: string;
    firstName: string;
    lastName: string;
    name: string;
    email: string;
    phone: string;
    avatar: string;
    role: string;
    kycStatus: 'verified' | 'pending' | 'not_started';
    joinDate: string;
    referralCode: string;
    notificationPrefs: {
        email: boolean;
        sms: boolean;
        push: boolean;
    };
}

export const mockUser: UserProfile = {
    id: 'USR-001',
    firstName: 'Amara',
    lastName: 'Ibrahim',
    name: 'Amara Ibrahim',
    email: 'amara.ibrahim@gmail.com',
    phone: '+234 805 123 4567',
    avatar: '',
    role: 'Investor',
    kycStatus: 'verified',
    joinDate: '2024-06-15',
    referralCode: '1SQM-AMARA24',
    notificationPrefs: {
        email: true,
        sms: true,
        push: false,
    },
};

export const mockInvestments: Investment[] = [
    {
        id: 'INV-001',
        projectId: 'metro-view',
        projectName: 'Metro View',
        unitName: '2 Bed Luxury Suite',
        investmentDate: '2024-07-10',
        amountInvested: 35000000,
        currentValue: 42350000,
        appreciationRate: 12.1,
        rentalYieldRate: 8.5,
        status: 'Active',
        nextPaymentDate: '2026-03-15',
        nextPaymentAmount: 5000000,
        totalPaid: 25000000,
        totalCost: 35000000,
        image: '/images/metroview/S1.webp',
    },
    {
        id: 'INV-002',
        projectId: 'copa-cabana-ii',
        projectName: 'Copa Cabana II',
        unitName: 'Studio Pool View',
        investmentDate: '2025-01-20',
        amountInvested: 18500000,
        currentValue: 19980000,
        appreciationRate: 8.0,
        rentalYieldRate: 10.2,
        status: 'Active',
        nextPaymentDate: '2026-04-01',
        nextPaymentAmount: 3000000,
        totalPaid: 15500000,
        totalCost: 18500000,
        image: '/images/copacabana/S1.webp',
    },
    {
        id: 'INV-003',
        projectId: 'dantata-hostels',
        projectName: 'Dantata Hostels',
        unitName: 'Single Room Block A',
        investmentDate: '2024-03-05',
        amountInvested: 12000000,
        currentValue: 14400000,
        appreciationRate: 10.0,
        rentalYieldRate: 15.0,
        status: 'Matured',
        totalPaid: 12000000,
        totalCost: 12000000,
        image: '/images/dantata-hostels/S1.webp',
    },
];

export const mockTransactions: Transaction[] = [
    {
        id: 'TXN-001',
        type: 'deposit',
        amount: 10000000,
        date: '2026-02-10',
        description: 'Wallet funding via bank transfer',
        status: 'completed',
        reference: 'DEP-20260210-001',
    },
    {
        id: 'TXN-002',
        type: 'investment',
        amount: -5000000,
        date: '2026-02-08',
        description: 'Metro View — Installment #4',
        status: 'completed',
        reference: 'INV-20260208-MV04',
    },
    {
        id: 'TXN-003',
        type: 'rental_yield',
        amount: 425000,
        date: '2026-01-31',
        description: 'Copa Cabana II — Jan 2026 Rental Yield',
        status: 'completed',
        reference: 'YLD-20260131-CC01',
    },
    {
        id: 'TXN-004',
        type: 'rental_yield',
        amount: 295000,
        date: '2026-01-31',
        description: 'Metro View — Jan 2026 Rental Yield',
        status: 'completed',
        reference: 'YLD-20260131-MV01',
    },
    {
        id: 'TXN-005',
        type: 'deposit',
        amount: 25000000,
        date: '2026-01-15',
        description: 'Wallet funding via bank transfer',
        status: 'completed',
        reference: 'DEP-20260115-002',
    },
    {
        id: 'TXN-006',
        type: 'investment',
        amount: -15500000,
        date: '2025-01-20',
        description: 'Copa Cabana II — Initial Investment',
        status: 'completed',
        reference: 'INV-20250120-CC01',
    },
    {
        id: 'TXN-007',
        type: 'referral_bonus',
        amount: 250000,
        date: '2026-01-05',
        description: 'Referral bonus — John Okafor signed up',
        status: 'completed',
        reference: 'REF-20260105-001',
    },
    {
        id: 'TXN-008',
        type: 'withdrawal',
        amount: -2000000,
        date: '2025-12-20',
        description: 'Withdrawal to Zenith Bank ****4567',
        status: 'completed',
        reference: 'WDR-20251220-001',
    },
];

export const mockWalletBalance = 8970000;
