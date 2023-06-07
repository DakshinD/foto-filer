import NavBar from './navbar';
import Footer from './footer'
import HomePage from './pages/Home';
import SortPage from './pages/Sort';
import FacesPage from './pages/Faces';
import PersonPage from './pages/Person';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {




  return (
    <div className="App">
        <div className = "Front-Page">
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/home" element={<HomePage />}/>
              <Route path="/sort" element={<SortPage />}/>
              <Route path="/faces" element={<FacesPage />}/>
              <Route path="/person" element={<PersonPage />}/>
            </Routes>

            <Footer />
        </div>
        
        
        
    </div>
  );
}

export default App;
