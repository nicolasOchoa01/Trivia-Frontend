import { services } from './IAppDependencies';
import { AppContext } from './AppContext';

export const AppContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    return (
        <AppContext.Provider value={services}>
            {children}
        </AppContext.Provider>
    );
};