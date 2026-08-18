import { Link } from 'react-router-dom';

export function RegisterPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Intentando registrar usuario...');
    };

    return (
        <div className="flex items-center justify-center min-h-[70vh] animate-fade-in px-4">
            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
                
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
                        Crear Cuenta 🚀
                    </h1>
                    <p className="text-slate-400 mt-2">Sumate a la comunidad y guardá tus récords.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-slate-300 ml-1">Nombre de Usuario</label>
                        <input 
                            type="text" 
                            placeholder="Ej. JugadorPro99"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-slate-300 ml-1">Correo Electrónico</label>
                        <input 
                            type="email" 
                            placeholder="tu@email.com"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-slate-300 ml-1">Contraseña</label>
                        <input 
                            type="password" 
                            placeholder="••••••••"
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                            required
                        />
                    </div>

                    <div className="pt-4">
                        <button 
                            type="submit"
                            className="w-full py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl shadow-lg shadow-teal-500/25 transition-all transform hover:scale-[1.02] active:scale-95"
                        >
                            Registrarme
                        </button>
                    </div>
                </form>

                <p className="text-center text-slate-400 text-sm mt-6">
                    ¿Ya tenés una cuenta?{' '}
                    <Link to="/login" className="text-teal-400 hover:text-teal-300 font-bold hover:underline transition-colors">
                        Iniciá sesión
                    </Link>
                </p>
            </div>
        </div>
    );
}