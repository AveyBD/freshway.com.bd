import logo from './logo.svg';
import './App.css';
import Nav from './Components/Header/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
