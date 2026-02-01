import { Shield, Leaf, DollarSign, Home } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Aman dan Nyaman',
    description: 'Di Tirah Homestay, kami memastikan penginapan anda aman dan nyaman. Tim kami selalu siap membantu untuk memastikan anda memiliki pengalaman menginap yang menyenangkan.'
  },
  {
    icon: Leaf,
    title: 'Bersih dan Asri',
    description: 'Kami menjaga kebersihan setiap sudut homestay dan lingkungan sekitar yang asri, menjadikan tempat ini ideal untuk beristirahat setelah seharian beraktifitas.'
  },
  {
    icon: DollarSign,
    title: 'Harga Terjangkau',
    description: 'Dengan kualitas yang kami tawarkan, Tirah Homestay tetap memberikan tarif yang terjangkau, cocok untuk semua level tamu.'
  },
  {
    icon: Home,
    title: 'Berasa Tinggal di Rumah Sendiri',
    description: 'Kami mengutamakan kenyamanan tamu, sehingga anda akan merasa seperti tinggal di rumah sendiri, dengan suasana yang hangat dan ramah.'
  }
]

function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl text-center font-bold text-gray-900 mb-2">Mengapa Memilih Kami</h2>
      <p className="text-sm text-gray-500 mb-6 text-center">Keunggulan yang kami tawarkan untuk kenyamanan menginap Anda</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div 
            key={feature.title}
            className="bg-white rounded-lg shadow-sm p-6 flex gap-4 hover:shadow-md transition-shadow"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-gray-700" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
