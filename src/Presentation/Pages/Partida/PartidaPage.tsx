import { usePartida } from '../../hooks/usePartida';

export function PartidaPage() {
  const { preguntaActual, currentIndex, totalQuestions, score, loading, isFinished, responder } = usePartida();

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl font-bold">Cargando trivia...</div>;
  }

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white">
        <h1 className="text-4xl font-bold mb-4">¡Partida Finalizada!</h1>
        <p className="text-2xl">Puntaje Total: {score}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>Pregunta {currentIndex + 1} de {totalQuestions}</span>
          <span>Puntaje: {score}</span>
        </div>

        <h2 className="text-xl font-semibold mb-6 text-gray-800">
          {preguntaActual?.question}
        </h2>

        <div className="flex flex-col gap-3">
          {preguntaActual?.options.map((option, index) => (
            <button
              key={index}
              onClick={() => responder(option)}
              className="p-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors cursor-pointer"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};