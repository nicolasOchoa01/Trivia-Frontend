export function HeaderComponent() {
    return (
        <header className="w-full bg-indigo-950 text-white py-4 px-6 shadow-md border-b border-indigo-900">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="text-2xl">🎯</span>
                    <h1 className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                        Preguntados App
                    </h1>
                </div>

                <nav className="flex items-center gap-6 text-sm font-medium text-indigo-200">
                    <a href="#" className="hover:text-white transition-colors">Inicio</a>
                    <a href="#" className="hover:text-white transition-colors">Ranking</a>
                    <a href="#" className="hover:text-white transition-colors">Acerca de</a>
                </nav>

            </div>
        </header>
    );
}