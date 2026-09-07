import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { Config } from "../../domain/entities/Config";
import { useDependencies } from "./useDependencies";


export function useConfig() {

    const { configService, userService } = useDependencies();
    const userId = userService.getUser();
    const navigate = useNavigate();
    const [config, setConfig] = useState<Config>({
        id: "",
        name: "",
        timer: false,
        seconds: 0,
        numberQuestions: 0,
        multipleChoice: false,
        random: false,
        category: [],
    });

    const toggleCategory = (category: string) => {
        setConfig((prevConfig) => {
            const exist: boolean = prevConfig.category.includes(category);
            if (exist) {
                if (prevConfig.category.length === 1) {
                    return prevConfig;
                }
                return {
                    ...prevConfig,
                    category: prevConfig.category.filter((id) => id !== category),
                };
            } else {
                return {
                    ...prevConfig,
                    category: [...prevConfig.category, category],
                };
            }
        });
    };

    const handleStartGame = async () => {
        const newConfig = await configService.setConfig(userId.id, config);
        navigate('/partida', { state: { config: newConfig } });
    };

    return {
        config,
        setConfig,
        toggleCategory,
        handleStartGame,
    }
};