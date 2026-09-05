import { Link, useNavigate } from 'react-router-dom';
import { useDependencies } from '../../hooks/useDependencies';
import { useEffect } from 'react';

export function HomePage() {
    const navigate = useNavigate();
    const { configService, userService } = useDependencies();

    useEffect(() => {

        const obtenerConfigs = async () => {
            try {
                await configService.getAllConfigs(userService.getUser().id);
            } catch (error) {
                console.error("Error al cargar las configuraciones:", error);
            } 
        };

        obtenerConfigs();
    }, [configService]);

    const handleQuickStart = async () => {
        try {
            const standardConfig = await configService.getStandardConfig();
            navigate('/partida', { state: { config: standardConfig } });
        } catch (error) {
            console.error("Error al cargar la configuración estándar", error);
        }
    };

    const handleEasyStart = async () => {
        try {
            const easyConfig = await configService.getEasyConfig();
            navigate('/partida', { state: { config: easyConfig } });
        } catch (error) {
            console.error("Error al cargar la configuración fácil", error);
        }
    };

    const handleExpertStart = async () => {
        try {
            const expertConfig = await configService.getExpertConfig();
            navigate('/partida', { state: { config: expertConfig } });
        } catch (error) {
            console.error("Error al cargar la configuración experta", error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[70vh] text-center space-y-12 animate-fade-in px-4">
            <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-sm">
                    Preguntados
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto">
                    ¡Te damos la bienvenida! Demostrá cuánto sabés superando nuestros desafíos.
                </p>
            </div>

            <div className="w-full max-w-lg">
                <button
                    onClick={handleQuickStart}
                    className="w-full group relative p-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/30 transform hover:scale-[1.02] active:scale-95 text-left"
                >
                    <div className="bg-slate-900/40 rounded-[22px] p-6 flex items-center justify-between backdrop-blur-sm">
                        <div>
                            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-1">
                                🚀 Partida Rápida
                            </h2>
                            <p className="text-indigo-200 text-sm">
                                20 preguntas • Aleatorio • 15s por respuesta
                            </p>
                        </div>
                        <div className="text-4xl group-hover:translate-x-2 transition-transform">
                            ▶
                        </div>
                    </div>
                </button>
            </div>

            <div className="w-full  grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button
                    onClick={handleExpertStart}
                    className="p-5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left rounded-2xl transition-all shadow-md transform hover:scale-[1.02] active:scale-95"
                >
                    <h3 className="text-lg font-bold text-red-400 mb-1">🔥 Modo Experto</h3>
                    <p className="text-xs text-slate-400">Sin opciones, solo tu memoria.</p>
                </button>

                <button
                    onClick={handleEasyStart}
                    className="p-5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left rounded-2xl transition-all shadow-md transform hover:scale-[1.02] active:scale-95"
                >
                    <h3 className="text-lg font-bold text-emerald-400 mb-1"> 🙂‍ Modo Facil</h3>
                    <p className="text-xs text-slate-400">Con opciones, para aprender jugando.</p>
                </button>

                <Link
                    to="/config"
                    className="p-5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-left rounded-2xl transition-all shadow-md transform hover:scale-[1.02] active:scale-95 block"
                >
                    <h3 className="text-lg font-bold text-emerald-400 mb-1">⚙️ Personalizar</h3>
                    <p className="text-xs text-slate-400">Elegí categorías y tiempos.</p>
                </Link>
            </div>
            
            <div className="pt-4">
                <Link to="/history" className="text-sm font-medium text-slate-400 hover:text-white transition-colors underline decoration-slate-600 underline-offset-4">
                    Ver mi historial de partidas
                </Link>
            </div>

        </div>
    );
}