import Codigo from './components/Home/Codigo'
import Footer from './components/Home/Footer'
import ModeloZ25 from './components/Home/ModeloZ25'
import Origen from './components/Home/Origen'
import Welcome from './components/Home/Welcome'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <main className=''>
      <Navbar />
      <Welcome />
      <Origen />
      <Codigo />
      <ModeloZ25 />
      <Footer />
    </main>
  )
}

export default App
