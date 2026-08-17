import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const useDependencies = () => {
    const context = useContext(AppContext);
    if(!context) {
        throw new Error('useDependencies debe usarse dentro de un AppContextProvider');
    }
    return context;
};