import { useAdmin } from '../hooks/useAdmin';
import LoginGate from '../components/admin/LoginGate';
import AdminLayout from '../components/admin/AdminLayout';

export default function AdminPage() {
  const { isAuthenticated, checking, login, logout } = useAdmin();

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-400 text-sm">Laden...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginGate onLogin={login} />;
  }

  return <AdminLayout onLogout={logout} />;
}
