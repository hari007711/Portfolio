import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import MyWork from "./components/MyWork/myWork";
import NavBar from "./components/NavBar/navBar";
import Skills from "./components/Skills/skills";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <About />
      <Skills />
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
