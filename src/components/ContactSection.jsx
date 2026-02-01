import { MapPin, Phone, Instagram } from 'lucide-react'

function ContactSection() {
  return (
    <section id="contact" className="w-full py-12">
      {/* Google Maps Full Width */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4638928845907!2d127.3523072!3d0.7637090999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x329cb5a2748def69%3A0x8ca9eac58ed7249e!2sTirah%20Homestay%20Ternate!5e0!3m2!1sid!2sid!4v1769953577271!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hubungi Kami</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Address */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Alamat</h3>
              <p className="text-sm text-gray-600">
               Jl.Hadi Abdullah III, RT.05/RW.03, Ngade, Kec. Ternate Sel., Kota Ternate, Maluku Utara 97712
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
              <a href="tel:+6281281120093" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                +62 812-8112-0093
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Instagram className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
              <a 
                href="https://www.instagram.com/tirah.homestayternate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                @tirah.homestayternate
              </a>
            </div>
          </div>

          {/* TikTok */}
          <div className="flex items-start gap-4 bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Tiktok_icon.svg" 
                alt="TikTok" 
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">TikTok</h3>
              <a 
                href="https://www.tiktok.com/@tirah.homestay.te" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                @tirah.homestay.te
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
