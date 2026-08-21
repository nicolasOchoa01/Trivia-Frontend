import { Link, useNavigate } from 'react-router-dom';
import { useDependencies } from '../../hooks/useDependencies';
import { useAuth } from '../../hooks/useAuth';

export function AsideComponent() {
    const navigate = useNavigate();
    const { configService } = useDependencies();
    const { logout } = useAuth();

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
        <aside className="hidden md:flex flex-col w-64 bg-slate-800/50 border-r border-slate-700 p-6">
            <div className="mb-8 text-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto flex items-center justify-center text-4xl mb-3 shadow-lg">
                    👤
                </div>
                <h2 className="font-bold text-lg text-white">Jugador Experto</h2>
                <p className="text-sm text-indigo-400">Nivel 5</p>
            </div>

            <nav className="flex flex-col gap-2">
                <Link to="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700/50 transition-colors text-slate-200 hover:text-white font-medium">
                    <span className="text-xl">🏠</span> Inicio
                </Link>
                
                <Link to="/history" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-700/50 transition-colors text-slate-200 hover:text-white font-medium mb-4">
                    <span className="text-xl">📜</span> Historial
                </Link>

                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-2 mb-2 px-3">
                    Jugar Ya
                </div>

                <button 
                    onClick={handleQuickStart}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all shadow-md shadow-indigo-900/50 text-white font-bold text-left transform hover:scale-[1.02] active:scale-95"
                >
                    <span className="text-xl">🚀</span> Rápida (20p)
                </button>

                <button 
                    onClick={handleExpertStart}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-red-400 hover:text-red-300 font-medium text-left transform hover:scale-[1.02] active:scale-95"
                >
                    <span className="text-xl">🔥</span> Experto
                </button>
                <button 
                    onClick={handleEasyStart}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all text-green-400 hover:text-red-300 font-medium text-left transform hover:scale-[1.02] active:scale-95"
                >
                    <span className="text-xl">🙂</span> Fácil
                </button>

                <Link to="/config" className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-900/20 transition-colors text-blue-400 hover:text-emerald-300 font-medium mt-1">
                    <span className="text-xl">⚙️</span> Personalizar
                </Link>
            </nav>
            
            <div className="mt-auto">
                <Link to="/login" onClick={logout} className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors font-medium">
                    <span className="text-xl">🚪</span> Salir
                </Link>
            </div>
        </aside>
    );
}