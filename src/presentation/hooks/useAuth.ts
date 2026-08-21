import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import type { IAuth } from '../context/IAuth';

export const useAuth = () => {
    const context: IAuth | null = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }
    return context;
};