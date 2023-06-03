import NavBar from './navbar';
import Footer from './footer'
import HomePage from './pages/Home';
import SortPage from './pages/Sort';
import FacesPage from './pages/Faces';
import PersonPage from './pages/Person';
import './App.css';


function App() {

  let Component = <HomePage />

  switch(window.location.pathname) {
    case "/home":
      Component = <HomePage />
      break
    case "/sort":
      Component = <SortPage />
      break
    case "/faces":
      Component = <FacesPage />
      break
    case "/person":
      Component = <PersonPage />
      break
  }

  return (
    <div className="App">
        <div className = "Front-Page">
            <NavBar />
            {Component}
            <Footer />
        </div>
        
        
        
    </div>
  );
}

export default App;
