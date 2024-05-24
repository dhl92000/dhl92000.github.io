import './App.css';

import { Route, Routes } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Projectpage from './pages/ProjectPage'
import Projects from './components/Projects';
import Techstack from './components/Techstack';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/project/:projectName" element={<Projectpage/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
