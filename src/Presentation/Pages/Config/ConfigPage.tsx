import { useConfig } from '../../hooks/useConfig';

const CATEGORIES = [
    { id: 'geo', name: 'Geografía', icon: '🌍' },
    { id: 'hist', name: 'Historia', icon: '📜' },
    { id: 'cienc', name: 'Ciencia', icon: '🧪' },
    { id: 'arte', name: 'Arte y Literatura', icon: '🎨' },
    { id: 'dep', name: 'Deportes', icon: '⚽' },
    { id: 'ent', name: 'Entretenimiento', icon: '🎬' },
];

export function ConfigPage() {
    const { config, setConfig, toggleCategory, handleStartGame } = useConfig();

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-10">
            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                    ⚙️ Configurar Partida
                </h1>
                <p className="text-slate-400">Personalizá las reglas de tu juego antes de empezar.</p>
            </div>

            <div className="space-y-6">
                <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <h2 className="text-xl font-bold text-indigo-400 flex items-center gap-2">
                        <span>🎯</span> Selección de Categorías
                    </h2>

                    <div className="grid grid-cols-2 gap-3 p-1 bg-slate-950 rounded-xl border border-slate-800 max-w-md">
                        <button
                            type="button"
                            onClick={() => setConfig({ ...config, random: true })}
                            className={`py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
                                config.random === true
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            🎲 Ruleta Aleatoria
                        </button>
                        <button
                            type="button"
                            onClick={() => setConfig({ ...config, random: false })}
                            className={`py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
                                config.random === false
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'text-slate-400 hover:text-white'
                            }`}
                        >
                            ✋ Manual
                        </button>
                    </div>

                    {config.random === false && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                            {CATEGORIES.map((cat) => {
                                const isSelected = config.category.includes(cat.id);
                                return (
                                    <button
                                        key={cat.id}
                                        type="button"
                                        onClick={() => toggleCategory(cat.id)}
                                        className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${
                                            isSelected
                                                ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-md'
                                                : 'bg-slate-950/50 border-slate-800 text-slate-500 hover:border-slate-700'
                                        }`}
                                    >
                                        <span className="text-2xl">{cat.icon}</span>
                                        <span className="text-sm font-semibold">{cat.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </section>

                <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                    <h2 className="text-xl font-bold text-indigo-400 flex items-center gap-2">
                        <span>📝</span> Modo de Respuestas
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                            type="button"
                            onClick={() => setConfig({ ...config, multipleChoice: true })}
                            className={`p-4 rounded-2xl border text-left transition-all ${
                                config.multipleChoice
                                    ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-md'
                                    : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                            }`}
                        >
                            <span className="text-lg font-bold block mb-1">Option Multiple Choice</span>
                            <span className="text-xs text-slate-400">Elegí la respuesta correcta entre 4 opciones disponibles.</span>
                        </button>

                        <button
                            type="button"
                            onClick={() => setConfig({ ...config, multipleChoice: false })}
                            className={`p-4 rounded-2xl border text-left transition-all ${
                                !config.multipleChoice
                                    ? 'bg-indigo-950/80 border-indigo-500 text-white shadow-md'
                                    : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700'
                            }`}
                        >
                            <span className="text-lg font-bold block mb-1">🔥 Modo Experto</span>
                            <span className="text-xs text-slate-400">Escribí directamente la respuesta sin opciones visibles.</span>
                        </button>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                        <h2 className="text-xl font-bold text-indigo-400 flex items-center gap-2">
                            <span>⏱️</span> Tiempo por Pregunta
                        </h2>
                        <div className="grid grid-cols-4 gap-2">
                            {[10, 15, 30, 0].map((seconds) => (
                                <button
                                    key={seconds}
                                    type="button"
                                    onClick={() => setConfig({ ...config, seconds: seconds, timer: seconds > 0 })}
                                    className={`py-3 rounded-xl border text-center font-bold text-sm transition-all ${
                                        config.seconds === seconds
                                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                    }`}
                                >
                                    {seconds === 0 ? 'Sin límite' : `${seconds}s`}
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                        <h2 className="text-xl font-bold text-indigo-400 flex items-center gap-2">
                            <span>❓</span> Cantidad de Preguntas
                        </h2>
                        <div className="grid grid-cols-4 gap-2">
                            {[5, 10, 15, 20].map((count) => (
                                <button
                                    key={count}
                                    type="button"
                                    onClick={() => setConfig({ ...config, numberQuestions: count })}
                                    className={`py-3 rounded-xl border text-center font-bold text-sm transition-all ${
                                        config.numberQuestions === count
                                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-md'
                                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                                    }`}
                                >
                                    {count}
                                </button>
                            ))}
                        </div>
                    </section>
                </div>
            </div>

            <div className="pt-4 flex justify-center">
                <button
                    type="button"
                    onClick={handleStartGame}
                    className="w-full max-w-md py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-extrabold text-xl rounded-2xl shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-105 active:scale-95 text-center"
                >
                    🚀 Empieza el Desafío
                </button>
            </div>
        </div>
    );
    
}