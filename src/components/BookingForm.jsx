import { useState } from 'react'
import { Calendar, Users, BedDouble, Search } from 'lucide-react'

function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'standar'
  })

  const getToday = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  const getNextDay = (dateStr) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    date.setDate(date.getDate() + 1)
    return date.toISOString().split('T')[0]
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const { checkIn, checkOut, guests, roomType } = formData
    
    const roomTypeLabel = roomType === 'standar' ? 'Standar' : 'Superior'
    const roomCodes = roomType === 'standar' ? 'TH 1, TH 2, TH 3, TH 7, TH 14' : 'TH 5, TH 6, TH 8'
    
    const message = `Halo, saya ingin cek ketersediaan kamar di Tirah Homestay:%0A%0A` +
      `*Tanggal Check-in:* ${checkIn || '[Belum dipilih]'}%0A` +
      `*Tanggal Check-out:* ${checkOut || '[Belum dipilih]'}%0A` +
      `*Jumlah Tamu:* ${guests} orang%0A` +
      `*Tipe Kamar:* ${roomTypeLabel}%0A` +
      `*Kode Kamar Tersedia:* ${roomCodes}%0A%0A` +
      `Apakah kamar tersedia untuk tanggal tersebut? Terima kasih.`
    
    const whatsappUrl = `https://wa.me/6281281120093?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'checkIn') {
      const nextDay = getNextDay(value)
      if (formData.checkOut && formData.checkOut <= value) {
        setFormData(prev => ({ ...prev, checkIn: value, checkOut: '' }))
      } else {
        setFormData(prev => ({ ...prev, checkIn: value }))
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const minCheckOut = getNextDay(formData.checkIn)
  const isCheckOutDisabled = !formData.checkIn

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 text-center">
          Cek Ketersediaan Kamar
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Isi form di bawah untuk mengecek ketersediaan kamar
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Check-in Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Tanggal Check-in
                </span>
              </label>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                min={getToday()}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>
            
            {/* Check-out Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Tanggal Check-out
                </span>
              </label>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={minCheckOut}
                disabled={isCheckOutDisabled}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                required
              />
              {isCheckOutDisabled && (
                <p className="text-xs text-gray-400 mt-1">Pilih tanggal check-in terlebih dahulu</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Number of Guests */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Jumlah Tamu
                </span>
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                required
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num} Orang</option>
                ))}
              </select>
            </div>
            
            {/* Room Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="flex items-center gap-2">
                  <BedDouble className="w-4 h-4" />
                  Tipe Kamar
                </span>
              </label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                required
              >
                <option value="standar">Standar (Rp. 250.000/malam)</option>
                <option value="superior">Superior (Rp. 300.000/malam)</option>
              </select>
            </div>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 mt-6"
          >
            <Search className="w-5 h-5" />
            Cek Ketersediaan via WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default BookingForm
