import Codigo from './components/Home/Codigo'
import Footer from './components/Home/Footer'
import ModeloZ25 from './components/Home/ModeloZ25'
import Origen from './components/Home/Origen'
import Welcome from './components/Home/Welcome'
import NavbarController from './components/Navbar/Navbar.controller'

function App() {

  return (
    <main className=''>
      <NavbarController />
      <Welcome />
      <Origen />
      <Codigo />
      <ModeloZ25 />
      <Footer />
    </main>
  )
}

export default App
