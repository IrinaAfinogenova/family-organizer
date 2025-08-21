import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRouter from './Router';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col-reverse md:flex-row h-screen">
        <Navigation />
        <main className="flex-1 flex justify-center w-full p-4 md:ml-56">
          <AppRouter />
        </main>
      </div>
    </Router>
  );
}
