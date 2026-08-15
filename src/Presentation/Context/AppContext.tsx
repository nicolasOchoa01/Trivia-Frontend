import React, { createContext, useContext } from "react";
import { services, type AppDependencies } from "./AppDependencies";


const AppContext = createContext<AppDependencies | null>(null);

export const AppContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <AppContext.Provider value={services}>
            {children}
        </AppContext.Provider>
    );
};

export const useDependencies = () => {
    const context = useContext(AppContext);
    if(!context) {
        throw new Error('useDependencies debe usarse dentro de un AppContextProvider');
    }
    return context;
};