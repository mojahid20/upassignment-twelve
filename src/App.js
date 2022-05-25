
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Addservie from './Pages/Addservice/Addservie';
import Checkout from './Pages/Checkout/Checkout';
import Appiontment from './Pages/Dashbord/Appiontment';
import Blogs from './Pages/Dashbord/Blogs';
import Dashbord from './Pages/Dashbord/Dashbord';
import Myreview from './Pages/Dashbord/Myreview';
import Home from './Pages/Home/Home';
import PartsDatiles from './Pages/Home/PartsDatiles';

import Summary from './Pages/Home/Summary';
import Mannage from './Pages/Mannage/Mannage';
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
        <Route path='/part/:partsId'element={<PartsDatiles />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path='/checkout/:partsId' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/Addservice' element={
          <RequireAuth>
            <Addservie />
          </RequireAuth>
        } />
        <Route path='/Mannage' element={
          <RequireAuth>
            <Mannage />
          </RequireAuth>
        } />
        <Route path='/Dashbord' element={
          <RequireAuth>
            <Dashbord />
          </RequireAuth>
        } >
        <Route index element={<Appiontment />}></Route>
        <Route path='review' element={<Myreview />}></Route>
        </Route>
       
       
        <Route path="/footer" element={<Footer />} />
        <Route  path='*' element={<Notfound />}/>
      </Routes>
   </div>
  );
}

export default App;
