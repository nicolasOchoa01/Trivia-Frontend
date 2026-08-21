import { createContext } from 'react';
import type { IAuth } from './IAuth';

export const AuthContext = createContext<IAuth | null>(null);

