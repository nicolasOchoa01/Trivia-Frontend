import { Link } from 'react-router-dom';
import { useDependencies } from '../../hooks/useDependencies';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, useState } from 'react';
import type { History } from '../../../domain/entities/History';



export function HistoryPage() {

    const { historyService } = useDependencies();
    const user = useAuth().user!;

    const [history, setHistory] = useState<History[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
   

    useEffect(() =>{
        const getHistoryUser = async () => {
            try{
                const historyUser = await historyService.getHistoryByName(user.name);
                setHistory(historyUser);
                setLoading(false);
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            catch(error){
                console.error("error al recuperar los historiales");
            }
        };
        getHistoryUser();

    }, [historyService]);


    if (loading) {
        return <div className="flex justify-center items-center h-screen text-xl font-bold">Cargando history...</div>;
    }
    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-10">
            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                    📜 Historial de Partidas
                </h1>
                <p className="text-slate-400">Revisá tu desempeño y superá tus propios récords.</p>
            </div>

            <div className="space-y-4">
                {history!.map((history) => (
                    <div 
                        
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 hover:border-indigo-500/50 transition-colors shadow-sm"
                    >
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="w-12 h-12 bg-indigo-950/80 rounded-full flex items-center justify-center text-2xl border border-indigo-900">
                                🏆
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white">{history.category[0]}</h3>
                                <p className="text-sm text-slate-400">{history.date}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                            <div className="text-center">
                                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Aciertos</p>
                                <p className="text-lg font-bold text-slate-200">{history.questionsCorrect} / {history.questionsTotal}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-indigo-400 uppercase tracking-wider font-semibold">Puntaje</p>
                                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                                    {history.score}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-6 flex justify-center">
                <Link
                    to="/"
                    className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all flex items-center gap-2 transform hover:scale-105 active:scale-95"
                >
                    🏠 Volver al Inicio
                </Link>
            </div>
        </div>
    );
}