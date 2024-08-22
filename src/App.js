import { Footer } from "./components/Footer";
import { Gallary } from "./components/Gallary";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Intro />
      <Gallary />
      <Footer />
    </div>
  );
}

export default App;
