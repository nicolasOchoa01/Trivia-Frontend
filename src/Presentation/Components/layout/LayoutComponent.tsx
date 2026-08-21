import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../header/HeaderComponent';
import { FooterComponent } from '../footer/FooterComponent';
import { AsideComponent } from '../aside/AsideComponent';
import { NavComponent } from '../nav/NavComponent';

export function LayoutComponent() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900 text-white">
            <HeaderComponent />
            <div className="flex flex-1 overflow-hidden">
                <AsideComponent />
                <main className="flex-1 overflow-y-auto md:p-8 bg-slate-950/50 shadow-inner">
                    <Outlet />
                </main>
            </div>
            <NavComponent />
            <FooterComponent />
        </div>
    );
}