import { Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage } from '../pages/register/RegisterPage'
import { LoginPage } from '../pages/login/LoginPage';
import { PartidaPage } from '../pages/partida/PartidaPage';
import { ConfigPage } from '../pages/config/ConfigPage';
import { HomePage } from '../pages/home/HomePage';
import { HistoryPage } from '../pages/history/HistoryPage';

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/config" element={<ConfigPage />} />
            <Route path="/partida" element={<PartidaPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};