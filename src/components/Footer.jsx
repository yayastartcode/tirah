import { MapPin, Phone, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      {/* Schema.org Structured Data for LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "Tirah Homestay Ternate",
          "image": "/images/thlg.png",
          "description": "Tirah Homestay Ternate - Aman, nyaman, tenang, bersih, asri, dan murah. Homestay terbaik di Ternate dengan fasilitas lengkap dan harga terjangkau.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ternate",
            "addressRegion": "Maluku Utara",
            "addressCountry": "ID"
          },
          "telephone": "+62-812-3456-7890",
          "url": "https://tirahhomestay.com",
          "priceRange": "Rp. 250.000 - Rp. 300.000",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "3"
          },
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Free WiFi"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "AC"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Kitchen Set"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Parking"
            }
          ]
        })}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/images/thlg.png" 
                alt="Tirah Homestay Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Tirah Homestay Ternate menawarkan pengalaman menginap yang nyaman dengan harga terjangkau. Fasilitas lengkap, lokasi strategis, dan pelayanan ramah.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="text-sm text-gray-400 hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#why-choose-us" className="text-sm text-gray-400 hover:text-white transition-colors">Mengapa Kami</a></li>
              <li><a href="#room-types" className="text-sm text-gray-400 hover:text-white transition-colors">Tipe Kamar</a></li>
              <li><a href="#facilities" className="text-sm text-gray-400 hover:text-white transition-colors">Fasilitas</a></li>
              <li><a href="#gallery" className="text-sm text-gray-400 hover:text-white transition-colors">Galeri</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Jl.Hadi Abdullah III, RT.05/RW.03, Ngade, Kec. Ternate Sel., Kota Ternate, Maluku Utara 97712</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a href="tel:+6281281120093" className="text-sm text-gray-400 hover:text-white transition-colors">
                  +62 812-8112-0093
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/tirah.homestayternate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  @tirah.homestayternate
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              <a 
                href="https://www.instagram.com/tirah.homestayternate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@tirah.homestay.te" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tiktok_icon.svg" 
                  alt="TikTok" 
                  className="w-4 h-4 invert"
                />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">&copy; 2026 Tirah Homestay Ternate. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
