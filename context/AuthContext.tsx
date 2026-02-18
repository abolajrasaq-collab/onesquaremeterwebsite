import * as React from 'react';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { mockUser, UserProfile } from '../data/mockPortfolio';

interface AuthContextType {
    user: UserProfile | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    demoLogin: () => void;
    register: (data: { firstName: string; lastName: string; email: string; phone: string; password: string }) => Promise<boolean>;
    logout: () => void;
    updateProfile: (updates: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = '1sqm_auth';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Restore session from localStorage
    useEffect(() => {
        const stored = localStorage.getItem(AUTH_STORAGE_KEY);
        if (stored) {
            try {
                setUser(JSON.parse(stored));
            } catch {
                localStorage.removeItem(AUTH_STORAGE_KEY);
            }
        }
        setIsLoading(false);
    }, []);

    // Persist to localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        } else {
            localStorage.removeItem(AUTH_STORAGE_KEY);
        }
    }, [user]);

    const login = async (email: string, _password: string): Promise<boolean> => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));

        // Accept any email/password for demo — use mock user data
        const loggedInUser: UserProfile = {
            ...mockUser,
            email,
        };
        setUser(loggedInUser);
        return true;
    };

    const demoLogin = () => {
        setUser(mockUser);
    };

    const register = async (data: { firstName: string; lastName: string; email: string; phone: string; password: string }): Promise<boolean> => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1200));

        const newUser: UserProfile = {
            id: `USR-${Date.now()}`,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            avatar: '',
            kycStatus: 'not_started',
            joinDate: new Date().toISOString().split('T')[0],
            referralCode: `1SQM-${data.firstName.toUpperCase().slice(0, 5)}${Math.floor(Math.random() * 100)}`,
            notificationPrefs: { email: true, sms: true, push: false },
        };
        setUser(newUser);
        return true;
    };

    const logout = () => {
        setUser(null);
    };

    const updateProfile = (updates: Partial<UserProfile>) => {
        if (user) {
            setUser({ ...user, ...updates });
        }
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, demoLogin, register, logout, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;
