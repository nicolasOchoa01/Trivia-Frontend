import { AuthContext } from './AuthContext';
import { useEffect, useState, type ReactNode } from 'react';
import { useDependencies } from '../hooks/useDependencies';
import type { User } from '../../domain/entities/User';
import type { IAuth } from './IAuth';

export function AuthContextProvider({ children }: { children: ReactNode }) {
    const { userService } = useDependencies();

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const currentUser = await userService.getCurrentUser();
                setUser(currentUser);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, [userService]);

    const login = async (emailOrName: string, password: string) => {
        const loggedUser: User = await userService.login(emailOrName, password);
        setUser(loggedUser);
        return loggedUser;
    };

    const register = async (userName: string, email: string, password: string) => {
        const registeredUser: User = await userService.register(userName, email, password);
        setUser(registeredUser);
        return registeredUser;
    }

    const logout = () => {
        userService.logout();
        setUser(null);
    };

    const auth: IAuth = {
        user: user,
        isAuthenticated: !!user,
        loading: loading,
        login: login,
        logout: logout,
        register: register,
    };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

