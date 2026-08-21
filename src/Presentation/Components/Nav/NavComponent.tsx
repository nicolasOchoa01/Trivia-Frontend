import { Link, useNavigate } from 'react-router-dom';
import { useDependencies } from '../../hooks/useDependencies';

export function NavComponent() {
    const navigate = useNavigate();
    const { configService } = useDependencies();

    const handleQuickStart = async () => {
        try {
            const standardConfig = await configService.getStandardConfig();
            navigate('/partida', { state: { config: standardConfig } });
        } catch (error) {
            console.error("Error al iniciar partida rápida", error);
        }
    };

    return (
        <nav className="md:hidden flex justify-around items-center bg-slate-800 border-t border-slate-700 p-2 pb-safe">
            <Link to="/" className="flex flex-col items-center p-2 text-slate-400 hover:text-indigo-400 transition-colors">
                <span className="text-2xl mb-1">🏠</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Inicio</span>
            </Link>
            
            <button 
                onClick={handleQuickStart}
                className="flex flex-col items-center -mt-6 group focus:outline-none"
            >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-full shadow-lg shadow-indigo-900/50 border-4 border-slate-900 text-white transform group-hover:scale-105 active:scale-95 transition-all">
                    <span className="text-2xl">🚀</span>
                </div>
            </button>
            
            <Link to="/config" className="flex flex-col items-center p-2 text-slate-400 hover:text-emerald-400 transition-colors">
                <span className="text-2xl mb-1">⚙️</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Config</span>
            </Link>
        </nav>
    );
}