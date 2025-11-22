import MainLayout from './layouts/MainLayout'

import HeroSection from './pages/HeroSection'
import KyLarisFeatures from './pages/Ky\'larisSection'
import Voyages from './pages/Voyages'

function App() {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <KyLarisFeatures />
        <Voyages />
      </MainLayout>

    </>

  )
}

export default App
