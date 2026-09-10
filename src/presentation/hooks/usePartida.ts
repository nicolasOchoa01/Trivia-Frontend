import { useEffect, useState } from "react";
import { useDependencies } from "./useDependencies";
import type { IPartidaObserver } from "../../application/interfaces/IPartidaObserver";
import type { IPartidaState } from "../../application/interfaces/IPartidaState";
import type { Config } from "../../domain/entities/Config";
import { useLocation } from "react-router-dom";

export function usePartida() {
    const { partidaService, userService } = useDependencies();
    const location = useLocation();
    const config: Config = location.state.config;
    const [state, setState] = useState<IPartidaState | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    

    useEffect(() => {
        const observer: IPartidaObserver = {
            update: (newState: IPartidaState) => {
                setState({ ...newState });
            }
        };
        partidaService.suscribe(observer);
        partidaService.suscribe(userService);

        const iniciarJuego = async () => {
            try {
                setLoading(true);
                await partidaService.getNewPartida(config);
                partidaService.setDelay(1400);
                partidaService.initPartida();

            } catch (error) {
                console.error("Error al cargar la partida:", error);
            } finally {
                setLoading(false);
            }
        };

        iniciarJuego();

        return () => {
            partidaService.endPartida();
            partidaService.unsubscribe(observer);
            partidaService.unsubscribe(userService);
        }
        
    }, [partidaService]);
    
    const responder = (opcionSeleccionada: string) : string => {
        return partidaService.anwered(opcionSeleccionada);
    };

    

    return {
        preguntaActual: state?.questionActual || null,
        currentIndex: state?.questionIndex ?? 0,
        totalQuestions: state?.partidaActual?.questions.length || 0,
        score: state?.score || 0,
        loading,
        isFinished: state?.finish || false,
        timer: config.timer,
        seconds: config.seconds,
        leftTimeQuestion: state?.leftTimeQuestion || 0,
        responder,
    };
}