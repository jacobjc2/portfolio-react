import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { ExperiencePage } from './pages/Experience/ExperiencePage';
import { ProjectsPage } from './pages/Projects/ProjectsPage';
import { ContactPage } from './pages/Contact/ContactPage';
import { Navbar } from './components/Navbar';
import "./App.css";


function App() {
  return (
    <div>
        <Router>
        <Navbar/>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='experience' element={<ExperiencePage/>}/>
            <Route path='projects' element={<ProjectsPage/>}/>
            <Route path='contact' element={<ContactPage/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
