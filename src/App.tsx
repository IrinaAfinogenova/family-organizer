import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { hiddenNavRoutes } from '@/constants/routing';
import AppRouter from '@/Router';
import '@/App.css';

export default function App() {
  const location = useLocation();
  const hideNav = hiddenNavRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col-reverse md:flex-row h-screen">
      {!hideNav && <Navigation />}
      <main className="flex-1 flex justify-center w-full p-4 md:ml-56">
        <AppRouter />
      </main>
    </div>
  );
}
