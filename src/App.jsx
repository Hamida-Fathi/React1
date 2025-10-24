import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header name="Hamida Fathi" message="Welcome to my developer portfolio!" />
      <Profile 
        photo="/src/assets/hamida.jpg" 
        title="Frontend Developer" 
        bio="I’m originally from Afghanistan, currently studying computer programming  at George Brown College in Toronto, Canada. I’m passionate about coding, software engineering, and creating web applications. I enjoy learning new technologies." 
         
      />
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
