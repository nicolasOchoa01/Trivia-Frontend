import { useNavigate } from "react-router-dom";
import { useState } from "react";
import type { Config } from "../../domain/entities/Config";


export function useConfig() {

    const navigate = useNavigate();
    const [config, setConfig] = useState<Config>({
        id: "",
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

    const handleStartGame = () => {
        navigate('/partida', { state: { config } });
    };

    return {
        config,
        setConfig,
        toggleCategory,
        handleStartGame,
    }
};