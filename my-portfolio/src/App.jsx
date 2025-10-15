
import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
<meta name="google-site-verification" content="beP4S0PQQ9GunJ1ly5M8z5MnnLaVj9FnexIf9Ya5neA" />
function App() {
  

  return (
    <>
       <div className="font-sans bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </>
  )
}

export default App
