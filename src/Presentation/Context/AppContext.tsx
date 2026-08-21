import { createContext } from "react";
import { type IAppDependencies } from "./IAppDependencies";

export const AppContext = createContext<IAppDependencies | null>(null);