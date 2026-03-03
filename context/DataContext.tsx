import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Investment, Transaction, mockInvestments, mockTransactions } from '../data/mockPortfolio';
import { useAuth } from './AuthContext';

interface InquiryData {
    id: string;
    projectId: string;
    unit?: string;
    userName: string;
    userEmail: string;
    userPhone: string;
    message?: string;
    date: string;
    status: 'pending' | 'contacted' | 'closed';
}

interface DataContextType {
    investments: Investment[];
    transactions: Transaction[];
    inquiries: InquiryData[];
    walletBalance: number;
    isLoading: boolean;
    submitInquiry: (data: Omit<InquiryData, 'id' | 'date' | 'status'>) => Promise<boolean>;
    makeInvestment: (projectId: string, amount: number, unitName: string) => Promise<boolean>;
    refreshData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { user } = useAuth();
    const [investments, setInvestments] = useState<Investment[]>([]);
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [inquiries, setInquiries] = useState<InquiryData[]>([]);
    const [walletBalance, setWalletBalance] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Load initial data
    useEffect(() => {
        // Simulate loading from API/Local Storage
        const loadData = async () => {
            setIsLoading(true);
            await new Promise(resolve => setTimeout(resolve, 500)); // Simulate latency

            // In a real app, we'd fetch from Supabase here
            // For now, load from constants + user specific if any
            setInvestments(mockInvestments);
            setTransactions(mockTransactions);
            setWalletBalance(2500000); // Mock balance
            setIsLoading(false);
        };

        if (user) {
            loadData();
        } else {
            setInvestments([]);
            setTransactions([]);
            setIsLoading(false);
        }
    }, [user]);

    const submitInquiry = async (data: Omit<InquiryData, 'id' | 'date' | 'status'>): Promise<boolean> => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newInquiry: InquiryData = {
            ...data,
            id: `INQ-${Date.now()}`,
            date: new Date().toISOString(),
            status: 'pending'
        };

        setInquiries(prev => [...prev, newInquiry]);
        console.log('Inquiry Submitted:', newInquiry);

        // TODO: Ensure this connects to Supabase/Email service later
        return true;
    };

    const makeInvestment = async (projectId: string, amount: number, unitName: string): Promise<boolean> => {
        await new Promise(resolve => setTimeout(resolve, 1500));

        const newInvestment: Investment = {
            id: `INV-${Date.now()}`,
            projectId,
            projectName: projectId, // Should lookup real name
            unitName,
            investmentDate: new Date().toISOString().split('T')[0],
            amountInvested: amount,
            currentValue: amount, // Starts equal
            appreciationRate: 0,
            rentalYieldRate: 0,
            status: 'Pending', // Pending admin approval
            totalPaid: amount,
            totalCost: amount,
            image: '/images/placeholders/project.jpg'
        };

        setInvestments(prev => [newInvestment, ...prev]);

        const newTxn: Transaction = {
            id: `TXN-${Date.now()}`,
            type: 'investment',
            amount: -amount,
            date: new Date().toISOString().split('T')[0],
            description: `Investment in ${projectId} - ${unitName}`,
            status: 'completed',
            reference: `INV-${Date.now()}`
        };

        setTransactions(prev => [newTxn, ...prev]);
        return true;
    };

    const refreshData = () => {
        // Re-fetch logic would go here
    };

    return (
        <DataContext.Provider value={{ investments, transactions, inquiries, walletBalance, isLoading, submitInquiry, makeInvestment, refreshData }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

export default DataContext;
