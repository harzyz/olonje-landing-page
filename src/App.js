import Footer from './components/footer.component/footer';
import Hero from './components/hero.component/hero';
import Howitworks from './components/how-it-works/howitworks';
import './index.css';

function App() {
  return (
    <div className='wrapper'>
      <Hero />
      <Howitworks />
      <Footer />
    </div>
  );
}

export default App;
