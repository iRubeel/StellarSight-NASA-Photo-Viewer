import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import ViewJWST from "./components/ViewJWST";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/nasaphoto' element={<NasaPhoto />} />
          <Route path='/viewjwst'  element={<ViewJWST />}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;