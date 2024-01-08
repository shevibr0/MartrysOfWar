import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="/homePage" element={<HomePage />} ></Route >
        {/* <Route path="*" element={<h1>404</h1>}> </Route> */}
      </Routes>
    </div>
  );
}

export default App;
