import './App.css';
import './Project.css'

import { Route, Routes } from 'react-router-dom';
import allProjects from './projectData/projectData'
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage'
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import ProjectDetail from './pages/ProjectDetail'
import Projects from './components/Projects';
import Techstack from './components/Techstack';
import FinanceTracker from './pages/FinanceTracker';  
import Retrosquares from './pages/Retrosquares';
import Pickleball from './pages/Pickleball'

function App() {

  return (
    // <div className="App">
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/project/:projectName" element={<ProjectDetail allProjects={allProjects}/>} />

      <Route path="/financetracker" element={<FinanceTracker/>}/>
      <Route path="/retrosquares" element={<Retrosquares/>}/>
      <Route path="/pickleball" element={<Pickleball/>}/>
      </Routes>
      <Footer />
      </>
    // </div>
  );
}

export default App;
