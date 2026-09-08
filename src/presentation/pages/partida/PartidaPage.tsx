import { useState } from 'react';
import { usePartida } from '../../hooks/usePartida';

export function PartidaPage() {
  const { 
    preguntaActual, 
    currentIndex, 
    totalQuestions, 
    score, 
    loading, 
    isFinished, 
    leftTimeQuestion, 
    timer,    
    seconds,   
    responder 
  } = usePartida();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [scoreAnimation, setScoreAnimation] = useState<boolean>(false);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl font-bold bg-slate-900 text-white">Cargando trivia...</div>;
  }

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">¡Partida Finalizada! 🏆</h1>
        <p className="text-2xl text-indigo-400 font-semibold">Puntaje Total: {score}</p>
      </div>
    );
  }

const handleAnswerClick = (option: string) => {
    if (showFeedback) return; 

    setSelectedOption(option);
    const correcta = option === preguntaActual?.answer;
    setIsCorrect(correcta);
    setShowFeedback(true);

    responder(option);

    if (correcta) {
      setScoreAnimation(true);
      setTimeout(() => setScoreAnimation(false), 1400);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      setIsCorrect(null);
    }, 1400);
  };

  const porcentajeTiempo = seconds ? (leftTimeQuestion / seconds) * 100 : 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-4 text-white">
      
      {timer && (
        <div className="w-full max-w-xl mb-4">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-400 mb-1">
            <span>⏱️ Tiempo restante</span>
            <span className={`${leftTimeQuestion <= 5 ? 'text-red-400 animate-bounce' : 'text-indigo-400'}`}>
              {leftTimeQuestion}s
            </span>
          </div>

          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700/50 shadow-inner">
            <div 
              className={`h-full transition-all duration-1000 linear ${
                leftTimeQuestion <= 5 ? 'bg-red-500 animate-pulse' : 'bg-indigo-500'
              }`}
              style={{ width: `${porcentajeTiempo}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl w-full max-w-xl">
        
        <div className="flex justify-between items-center text-sm text-slate-400 mb-6">
          <span>Pregunta {currentIndex + 1} de {totalQuestions}</span>
          
          <span className={`font-bold transition-transform duration-300 ${scoreAnimation ? 'text-green-400 scale-125' : 'text-slate-200'}`}>
            Puntaje: {score} {scoreAnimation && <span className="text-xs text-green-400">+10 🎉</span>}
          </span>
        </div>

        <h2 className="text-xl font-semibold mb-6 text-slate-100">
          {preguntaActual?.question}
        </h2>

        <div className="flex flex-col gap-3">
          {preguntaActual?.options.map((option, index) => {
            let buttonStyle = "bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700";

            if (showFeedback) {
              if (option === preguntaActual.answer) {
                buttonStyle = "bg-green-600 text-white border-green-500 shadow-lg shadow-green-900/50 scale-[1.02]";
              } else if (option === selectedOption && !isCorrect) {
                buttonStyle = "bg-red-600 text-white border-red-500 shadow-lg shadow-red-900/50 animate-shake";
              } else {
                buttonStyle = "opacity-50 bg-slate-800 text-slate-400 border-slate-800";
              }
            }

            return (
              <button
                key={index}
                disabled={showFeedback}
                onClick={() => handleAnswerClick(option)}
                className={`p-4 font-medium rounded-xl border transition-all cursor-pointer flex items-center justify-between ${buttonStyle}`}
              >
                <span>{option}</span>
                {showFeedback && option === preguntaActual.answer && <span>✅</span>}
                {showFeedback && option === selectedOption && !isCorrect && <span>❌</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}