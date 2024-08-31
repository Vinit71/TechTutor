import './App.css';
import About from "./components/About.jsx"
import CourseSection from "./components/CourseSection.jsx"
import Footer from "./components/Footer.jsx"
import Hero from './components/Hero.jsx';
import Navbar from "./components/Navbar.jsx"

function App() {
  return(
      <div className="w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <CourseSection />
        <About />
        <Footer />
      </div>
  )
}

export default App
