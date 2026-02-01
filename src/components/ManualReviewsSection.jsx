import { Star, Quote } from 'lucide-react'

// Copy paste review Google Anda di sini
const googleReviews = [
  {
    id: 1,
    reviewerName: "Azka Azifa",
    rating: 5,
    date: "7 months ago",
    comment: "Ga nyangka dengan harga segini bisa dapet tempat senyaman ini. Pas pertama masuk kamar, lantai bisa kesed gitu ya dan rapiii pemilihan warna juga pas di mata. Worth of money!",
    profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjVjz4gENAecfhS5KoDlCaNDxRsaoPoaPYHrnX0KI_g8wP0dFYit7w=s80-rp-mo-ba4-br100"
  },
  {
    id: 2,
    reviewerName: "Ina Anria",
    rating: 5,
    date: "a year ago",
    comment: "Tempat nya ok, ramah. Saya suka saya suka",
    profileImage: "https://lh3.googleusercontent.com/a/ACg8ocJFwc5zlS-jV6qAFi1mejFtT1KVkYzCsKocsEv9cMheudjegA=s80-rp-mo-br100"
  },
  {
    id: 3,
    reviewerName: "Nurul Widya",
    rating: 5,
    date: "a year ago",
    comment: "Spending 6 days and it was an enjoyable stay. Room is spacious and clean, communal space is cozy and ambience is appealing. Price range is affordable for a room with complete facility — air con, shower, pantry, wardrobe, TV, couch and wifi. Location-wise may be not in the city center area; but very recommended if you would like to have a peaceful stay. Only 7-10 mins drive to the city center, which is not a big issue for me. The receptionist is very helpful. Mini cafe is just perfect addition; not only assortment of snacks and drinks, they still serving indomie for my midnight cravings. Also they provide local gifts of sambal roa from Dapur Halmahera. Surely recommending anyone to stay here.",
    profileImage: "https://lh3.googleusercontent.com/a-/ALV-UjUOf751oexixx6LxgT6mMZ2Nt3ir6YNnhkp6xtZQluxu7_cDzFG=s80-rp-mo-ba3-br100"
  }
]

function ManualReviewsSection() {
  return (
    <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Ulasan Tamu
        </h2>
        <p className="text-sm text-gray-500">
          Lihat apa kata tamu tentang pengalaman menginap di Tirah Homestay
        </p>
      </div>
      
      {/* Google Rating Badge */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <img 
          src="https://featurable.com/images/logos/google-icon.svg" 
          alt="Google" 
          className="w-6 h-6"
        />
        <div className="flex items-center gap-1">
          <span className="font-bold text-gray-900">5.0</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
        </div>
        <span className="text-sm text-gray-500">(3 Reviews)</span>
      </div>
      
      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {googleReviews.map((review) => (
          <div 
            key={review.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-gray-200 mb-4" />
            
            {/* Review Text */}
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              "{review.comment}"
            </p>
            
            {/* Rating Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            {/* Reviewer Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <img 
                src={review.profileImage} 
                alt={review.reviewerName}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900 text-sm">{review.reviewerName}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Google Business Link */}
      <div className="text-center mt-8">
        <a 
          href="https://www.google.com/travel/hotels/s/n9nWt2UjP8RYdTKJ6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <img 
            src="https://featurable.com/images/logos/google-icon.svg" 
            alt="Google" 
            className="w-4 h-4"
          />
          Lihat semua review di Google
        </a>
      </div>
    </section>
  )
}

export default ManualReviewsSection
