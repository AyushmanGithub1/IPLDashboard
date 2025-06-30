import DashboardContent from './components/DashboardContent';
import { ToastDemo } from './components/ToastNotification';
import { matches } from './components/matches';

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900">
      <DashboardContent matches={matches} />
      <ToastDemo />
    </div>
  );
}
