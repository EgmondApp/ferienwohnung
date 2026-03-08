import { HashRouter, Routes, Route } from 'react-router-dom';
import PublicPage from './pages/PublicPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PublicPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </HashRouter>
  );
}
