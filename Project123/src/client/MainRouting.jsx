import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound';
import Navbar from './Components/Navagation/Navbar';
import Footer from './Components/Footer/Footer';

function MainRouting() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
        <Footer />
    </div>
  );
}

export default MainRouting;