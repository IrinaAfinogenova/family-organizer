import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRouter from './Router';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <main className="flex flex-row justify-around">
          <AppRouter />
        </main>
        <Navigation />
      </div>
    </Router>
  );
}
