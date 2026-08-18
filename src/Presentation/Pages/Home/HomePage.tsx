import { Link } from 'react-router-dom';

export function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[60vh] text-center space-y-10 animate-fade-in">
            
            <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 drop-shadow-sm">
                    Preguntados
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-xl mx-auto px-4">
                    ¡Poné a prueba tus conocimientos! Configurá tu partida, elegí tus categorías favoritas y demostrá cuánto sabés.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md px-6">
                <Link
                    to="/config"
                    className="flex-1 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold rounded-2xl shadow-lg shadow-indigo-500/30 transition-all transform hover:scale-105 active:scale-95"
                >
                    ▶ ¡Jugar Ahora!
                </Link>
                
                <Link
                    to="/history"
                    className="flex-1 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 text-lg font-bold rounded-2xl shadow-md border border-slate-700 transition-all transform hover:scale-105 active:scale-95"
                >
                    📊 Historial
                </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-4xl px-4">
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <h3 className="text-indigo-400 font-bold mb-2">🎯 100% Aleatorio</h3>
                    <p className="text-sm text-slate-400">Jugá con la ruleta y dejá que el azar elija tu próxima pregunta.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <h3 className="text-purple-400 font-bold mb-2">⏱️ A tu ritmo</h3>
                    <p className="text-sm text-slate-400">Configurá el límite de tiempo que prefieras para un desafío mayor.</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                    <h3 className="text-blue-400 font-bold mb-2">🏆 Modo Experto</h3>
                    <p className="text-sm text-slate-400">Animate a jugar sin ver las opciones de respuesta.</p>
                </div>
            </div>

        </div>
    );
}