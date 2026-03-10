import { lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import PublicPage from './pages/PublicPage';
import InfoPage from './pages/InfoPage';
import ErrorBoundary from './components/shared/ErrorBoundary';

const AdminPage = lazy(() => import('./pages/AdminPage'));

export default function App() {
  return (
    <ErrorBoundary>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/admin/*" element={
            <Suspense fallback={<div className="min-h-screen bg-warm flex items-center justify-center text-anthracite/50 text-sm">Laden...</div>}>
              <AdminPage />
            </Suspense>
          } />
        </Routes>
      </HashRouter>
    </ErrorBoundary>
  );
}
