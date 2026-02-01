import { Wifi, Clock, BedDouble, Lamp, Briefcase, Bath, Utensils, Shirt, CupSoda, Car, Fish, ShoppingBag } from 'lucide-react'

const facilities = [
  { icon: BedDouble, name: 'Ranjang Springbed' },
  { icon: Lamp, name: 'Nakas' },
  { icon: Briefcase, name: 'Meja Kerja' },
  { icon: Bath, name: 'Toilet Kamar' },
  { icon: Utensils, name: 'Kitchen Set Tiap Kamar' },
  { icon: Shirt, name: 'Lemari Pakaian' },
  { icon: CupSoda, name: 'Mini Cafe' },
  { icon: Car, name: 'Parkiran Luas' },
  { icon: Fish, name: 'Kolam Ikan Estetik' },
  { icon: ShoppingBag, name: 'Layanan Laundry' },
  { icon: ShoppingBag, name: 'Layanan Sewa Motor' }
]

const highlights = [
  { icon: Wifi, label: 'Free WiFi', desc: 'Internet cepat dan stabil di seluruh area' },
  { icon: Clock, label: 'Check in 24 Jam', desc: 'Fleksibel untuk kenyamanan tamu' }
]

function FacilitiesSection() {
  return (
    <section id="facilities" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Fasilitas</h2>
      <p className="text-sm text-gray-500 mb-8 text-center">Berbagai fasilitas lengkap untuk kenyamanan menginap Anda</p>
      
      {/* Highlights */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-center gap-3 bg-blue-50 px-6 py-3 rounded-lg">
            <item.icon className="w-6 h-6 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-900">{item.label}</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Facilities Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {facilities.map((facility, index) => (
          <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
              <facility.icon className="w-5 h-5 text-gray-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">{facility.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FacilitiesSection
