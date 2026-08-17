import { createContext } from "react";
import { type AppDependencies } from "./AppDependencies";

export const AppContext = createContext<AppDependencies | null>(null);