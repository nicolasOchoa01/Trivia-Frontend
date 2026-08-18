import { Link } from 'react-router-dom';

export function AsideComponent() {
    return (
        <aside className="hidden md:flex flex-col w-64 bg-slate-800/50 border-r border-slate-700 p-6">
            <div className="mb-10 text-center">
                <div className="w-20 h-20 bg-indigo-600 rounded-full mx-auto flex items-center justify-center text-4xl mb-3 shadow-lg">
                    👤
                </div>
                <h2 className="font-bold text-lg text-white">Jugador Experto</h2>
                <p className="text-sm text-indigo-400">Nivel 5</p>
            </div>

            <nav className="flex flex-col gap-3">
                <Link to="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-600/50 transition-colors text-slate-200 hover:text-white font-medium">
                    <span className="text-xl">🏠</span> Inicio
                </Link>
                <Link to="/config" className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-600/50 transition-colors text-slate-200 hover:text-white font-medium">
                    <span className="text-xl">⚙️</span> Nueva Partida
                </Link>
                <Link to="/history" className="flex items-center gap-3 p-3 rounded-xl hover:bg-indigo-600/50 transition-colors text-slate-200 hover:text-white font-medium">
                    <span className="text-xl">📜</span> Historial
                </Link>
            </nav>
            
            <div className="mt-auto">
                <Link to="/login" className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors font-medium">
                    <span className="text-xl">🚪</span> Salir
                </Link>
            </div>
        </aside>
    );
}