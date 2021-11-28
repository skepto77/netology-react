import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DriftPage from './pages/DriftPage';
import ForzaPage from './pages/ForzaPage';
import TimeAttackPage from './pages/TimeAttackPage';
import './App.css';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' index element={<HomePage />} />
        <Route path='drift' element={<DriftPage />} />
        <Route path='timeattack' element={<TimeAttackPage />} />
        <Route path='forza' element={<ForzaPage />} />
      </Route>
    </Routes>
  );
}
