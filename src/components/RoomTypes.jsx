import { Star } from 'lucide-react'

const rooms = [
  {
    name: 'STANDAR',
    price: 'Rp. 250.000,- / malam',
    rating: 5.0,
    reviews: '124 Reviews',
    image: '/images/std.jpeg',
    specs: ['Luas 4 x 6', 'Springbed 160', '2 bantal 1 guling'],
    count: 5,
    codes: ['TH 1', 'TH 2', 'TH 3', 'TH 7', 'TH 14']
  },
  {
    name: 'SUPERIOR',
    price: 'Rp. 300.000,- / malam',
    rating: 5.0,
    reviews: '89 Reviews',
    image: '/images/superior.jpeg',
    specs: ['Luas 5 x 6', 'Springbed 180', '2 bantal 2 guling', 'Sovabed'],
    count: 3,
    codes: ['TH 5', 'TH 6', 'TH 8']
  }
]

function RoomTypes() {
  return (
    <section id="room-types" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Tipe Kamar</h2>
      <p className="text-sm text-gray-500 mb-6 text-center">Pilih kamar sesuai kebutuhan menginap Anda</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img src={room.image} alt={room.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{room.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{room.count} Kamar Tersedia</p>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-gray-600">{room.rating} ({room.reviews})</span>
              </div>
              <ul className="text-sm text-gray-600 mb-3 space-y-1">
                {room.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
              <div className="mb-3">
                <p className="text-xs text-gray-500 mb-1">Kode Kamar:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {room.codes.map((code, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-xs font-medium text-gray-700 rounded">
                      {code}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-lg font-bold text-gray-900">{room.price}</p>
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-xs text-gray-400 mt-4">*harga belum include breakfast</p>
    </section>
  )
}

export default RoomTypes
