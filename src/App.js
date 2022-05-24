
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import PartsDatiles from './Pages/Home/PartsDatiles';

import Summary from './Pages/Home/Summary';
import Footer from './Pages/Shared/Footer';
import Login from './Pages/Shared/Login';
import Navbar from './Pages/Shared/Navbar';
import Notfound from './Pages/Shared/Notfound';
import RequireAuth from './Pages/Shared/RequireAuth';
import SignUp from './Pages/Shared/SignUp';

function App() {
  return (
   <div>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/summary" element={<Summary />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/part/:partsId'element={<PartsDatiles />} />
       
        <Route path="/footer" element={<Footer />} />
        <Route  path='*' element={<Notfound />}/>
      </Routes>
   </div>
  );
}

export default App;
