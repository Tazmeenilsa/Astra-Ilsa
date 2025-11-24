import MainLayout from './layouts/MainLayout'
import BookingCTA from './pages/BookingCTA'
import Footer from './pages/Footer'
import KyLarisGallery from './pages/Gallery'

import HeroSection from './pages/HeroSection'
import KyLarisFeatures from './pages/Ky\'larisSection'
import TravelerReviews from './pages/Reviews'
import TravelPackages from './pages/TravelPackages'
import Voyages from './pages/Voyages'

function App() {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <KyLarisFeatures />
        <Voyages />
        <TravelPackages />
        <TravelerReviews/>
        <KyLarisGallery/>
        <BookingCTA />
        <Footer />
      </MainLayout>

    </>

  )
}

export default App
