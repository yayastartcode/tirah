function Hero() {
  return (
    <section 
      id="hero"
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hro1.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Tirah Homestay Ternate</h1>
        <p className="text-xl text-white/90">Aman, nyaman, tenang, bersih, asri, dan murah.</p>
      </div>
    </section>
  )
}

export default Hero
