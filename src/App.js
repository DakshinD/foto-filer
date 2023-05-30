import NavBar from './navbar';
import HeroSection from './herosection';
import DescriptionSection from './description';
import PersonalInfoSection from './personalinfo';
import Footer from './footer'
import './App.css';


function App() {
  return (
    <div className="App">
        <div className = "Front-Page">
            <NavBar />
            <HeroSection />
            <DescriptionSection />
            <PersonalInfoSection />
            <Footer />
        </div>
        
        
        
    </div>
  );
}

export default App;
