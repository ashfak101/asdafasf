
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>}></Route>
          <Route path="/home" element={ <Home/>}>
         
          </Route>
          <Route path=":id" element={ <DetailsPage/>}></Route>
        </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
