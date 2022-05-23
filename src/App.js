
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';

import Summary from './Pages/Home/Summary';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Shared/Login';
import Navbar from './Pages/Shared/Navbar';
import Notfound from './Pages/Shared/Notfound';

function App() {
  return (
   <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/summary" element={<Summary />} />
       
        <Route path="/footer" element={<Footer />} />
        <Route  path='*' element={<Notfound />}/>
      </Routes>
   </div>
  );
}

export default App;
