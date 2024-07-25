import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sweets from './components/Sweets/Sweets';

function App() {

  return (
    <div id='root'>
      <div className='top'>
        <Navbar />
        <Hero />
      </div>
      <Sweets />
      
    </div>
  )
}

export default App
