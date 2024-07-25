import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sweets from './components/Sweets/Sweets';
import Chikkis from './components/Chikkis/Chikkis';

function App() {

  return (
    <div id='root'>
      <div className='top'>
        <Navbar />
        <Hero />
      </div>
      <Sweets />
      <Chikkis />
    </div>
  )
}

export default App
