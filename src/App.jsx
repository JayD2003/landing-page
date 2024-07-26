import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sweets from './components/Sweets/Sweets';
import Chikkis from './components/Chikkis/Chikkis';
import Snacks from './components/Snacks/Snacks';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <div id='root'>
      <div className='top'>
        <Navbar />
        <Hero />
      </div>
      <Sweets />
      <Chikkis />
      <Snacks />
      <Contact />
    </div>
  )
}

export default App
