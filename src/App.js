import NavBar from './navbar';
import Footer from './footer'
import HomePage from './pages/Home';
import SortPage from './pages/Sort';
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
