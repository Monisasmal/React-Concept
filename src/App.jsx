import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './components/pages/Home';
import Concepts from './components/pages/Concepts';
import Projects from './components/pages/Projects';
import {conceptRoutes} from './routes/conceptRoutes';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/projects" element={<Projects />} />
     {conceptRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))} 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;