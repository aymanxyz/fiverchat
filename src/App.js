import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import MobileChat from './components/mobileChat';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Main/>}></Route>
        <Route path='/:userid' element={<Main/>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
