import './App.css';
import './globals.css'
import './pages/Home.css'
import './Project.css'
import './components/ProjectTile.css'
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';

import FinanceTracker from './pages/FinanceTracker';  
import Retrosquares from './pages/Retrosquares';
import Pickleball from './pages/Pickleball'


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      
      <Route path="/financetracker" element={<FinanceTracker/>}/>
      <Route path="/retrosquares" element={<Retrosquares/>}/>
      <Route path="/pickleball" element={<Pickleball/>}/>
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
