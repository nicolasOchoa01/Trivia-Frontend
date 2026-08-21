import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useEffect, useState } from 'react';

export function LoginPage() {
    const [emailOrName, setEmailOrName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { login, isAuthenticated, loading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading && isAuthenticated) {
            navigate('/', { replace: true });
        }
    }, [isAuthenticated, loading, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(emailOrName, password);
        navigate('/', { replace: true });
    };

    return (
        <div className="flex items-center justify-center min-h-[70vh] animate-fade-in px-4">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                        ¡Hola de nuevo! 👋
                    </h1>
                    <p className="text-slate-400 mt-2">Ingresá a tu cuenta para seguir jugando.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-slate-300 ml-1">Correo Electrónico o nombre</label>
                        <input 
                            type="text"
                            value={emailOrName}
                            onChange={(e) => setEmailOrName(e.target.value)}
                            placeholder="tu@email.com o tu nombre de usuario"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-slate-300 ml-1">Contraseña</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                            required
                        />
                    </div>

                    <div className="pt-2">
                        <button 
                            type="submit"
                            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-[1.02] active:scale-95"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>

                <p className="text-center text-slate-400 text-sm mt-6">
                    ¿No tenés una cuenta?{' '}
                    <Link to="/register" className="text-indigo-400 hover:text-indigo-300 font-bold hover:underline transition-colors">
                        Registrate acá
                    </Link>
                </p>
            </div>
        </div>
    );
}