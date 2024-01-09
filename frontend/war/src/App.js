import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { AppRouter } from './routes/AppRouter';



function App() {
  return (
    <AppRouter />
  );
}

export default App;
