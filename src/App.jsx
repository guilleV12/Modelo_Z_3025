import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'

// Lazy load de los componentes
const Welcome = lazy(() => import('./components/Home/Welcome'))
const Origen = lazy(() => import('./components/Home/Origen'))
const Codigo = lazy(() => import('./components/Home/Codigo'))
const ModeloZ25 = lazy(() => import('./components/Home/ModeloZ25'))
const Footer = lazy(() => import('./components/Home/Footer'))

function App() {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<div className="text-center p-4"></div>}>
        <Welcome />
        <Origen />
        <Codigo />
      </Suspense>

      <ModeloZ25 />
      <Footer />
    </main>
  )
}

export default App
