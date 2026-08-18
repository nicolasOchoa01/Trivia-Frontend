import { Link } from 'react-router-dom';

export function NavComponent() {
    return (
        <nav className="md:hidden flex justify-around items-center bg-slate-800 border-t border-slate-700 p-2 pb-safe">
            <Link to="/" className="flex flex-col items-center p-2 text-slate-400 hover:text-indigo-400 transition-colors">
                <span className="text-2xl mb-1">🏠</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Inicio</span>
            </Link>
            
            {/* Botón central destacado para jugar */}
            <Link to="/config" className="flex flex-col items-center -mt-6">
                <div className="bg-indigo-600 p-4 rounded-full shadow-lg shadow-indigo-900 border-4 border-slate-900 text-white transform hover:scale-105 transition-transform">
                    <span className="text-2xl">🎮</span>
                </div>
            </Link>
            
            <Link to="/history" className="flex flex-col items-center p-2 text-slate-400 hover:text-indigo-400 transition-colors">
                <span className="text-2xl mb-1">📜</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Historial</span>
            </Link>
        </nav>
    );
}