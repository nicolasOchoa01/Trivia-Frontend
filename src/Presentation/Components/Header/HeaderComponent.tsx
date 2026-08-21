import { Link, useNavigate } from 'react-router-dom';
import { useDependencies } from '../../hooks/useDependencies';

export function HeaderComponent() {
    const navigate = useNavigate();
    const { configService } = useDependencies();

    const handleQuickStart = async () => {
        try {
            const standardConfig = await configService.getStandardConfig();
            navigate('/partida', { state: { config: standardConfig } });
        } catch (error) {
            console.error("Error al cargar la configuración estándar", error);
        }
    };

    return (
        <header className="w-full bg-indigo-950 text-white py-4 px-6 shadow-md border-b border-indigo-900">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                
                <Link to="/" className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                    <span className="text-2xl">🎯</span>
                    <h1 className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        Preguntados App
                    </h1>
                </Link>

                <nav className="hidden sm:flex items-center gap-4 text-sm font-medium">
                    <Link 
                        to="/config" 
                        className="px-4 py-2 text-indigo-200 hover:text-white transition-colors"
                    >
                        ⚙️ Personalizar
                    </Link>
                    <button 
                        onClick={handleQuickStart}
                        className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg shadow-md transition-all font-bold text-white transform hover:scale-105 active:scale-95"
                    >
                        🚀 Partida Rápida
                    </button>
                </nav>

            </div>
        </header>
    );
}