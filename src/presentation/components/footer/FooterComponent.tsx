import { Link } from 'react-router-dom';

export function FooterComponent() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-indigo-950 text-indigo-200 py-6 px-4 border-t border-indigo-900 mt-auto">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                
                <div>
                    <h3 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
                        🧠 <span>Preguntados App</span>
                    </h3>
                    <p className="text-sm text-indigo-300 mt-1">
                        Desarrollado con Arquitectura Limpia, React, TypeScript y Tailwind CSS.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
                    <Link to="https://github.com/nicolasOchoa01" target="_blank" rel="noopener noreferrer   " className="hover:text-white transition-colors">
                        Visitame en GitHub
                    </Link> 
                </div>

                <div className="text-xs text-indigo-400">
                    © {currentYear} — Hecho por Nicolas Ochoa.
                </div>
            </div>
        </footer>
    );
}