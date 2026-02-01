import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import RoomTypes from './components/RoomTypes'
import BookingForm from './components/BookingForm'
import FacilitiesSection from './components/FacilitiesSection'
import GallerySection from './components/GallerySection'
import ManualReviewsSection from './components/ManualReviewsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import AuthModal from './components/AuthModal'
import Toast from './components/Toast'

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('login')
  const [toast, setToast] = useState({ show: false, message: '' })

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => {
      setToast({ show: false, message: '' })
    }, 3000)
  }

  const openAuthModal = (mode) => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  const closeAuthModal = () => {
    setShowAuthModal(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onOpenAuth={openAuthModal} showToast={showToast} />
      <Hero showToast={showToast} />
      <WhyChooseUs />
      <RoomTypes />
      <BookingForm />
      <FacilitiesSection />
      <GallerySection />
      <ManualReviewsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      
      {showAuthModal && (
        <AuthModal 
          mode={authMode} 
          onClose={closeAuthModal} 
          showToast={showToast}
          onToggleMode={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
        />
      )}
      
      <Toast 
        show={toast.show} 
        message={toast.message} 
      />
    </div>
  )
}

export default App
