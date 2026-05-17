import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const featuredProducts = [
  {
    id: 1,
    name: "Black Bow Aesthetic Case",
    phone: "iPhone 13 / 14 / 15",
    price: 449,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    tag: "🔥 Bestseller"
  },
  {
    id: 2,
    name: "Floral Garden Case",
    phone: "iPhone 12 / 13 / 14",
    price: 399,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400",
    tag: "🌸 Girls Favourite"
  },
  {
    id: 3,
    name: "Matte Black Armour Case",
    phone: "Samsung Galaxy S23 / S24",
    price: 349,
    originalPrice: 549,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    tag: "💪 Heavy Duty"
  },
  {
    id: 4,
    name: "Aesthetic Marble Case",
    phone: "Samsung Galaxy A54 / A55",
    price: 299,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400",
    tag: "✨ Trending"
  },
]

function Home() {
  return (
    <div className="min-h-screen" style={{background: '#0a0a0a'}}>

      {/* Hero Banner */}
      <div style={{background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'}} className="text-white py-24 text-center px-4">
        <p className="text-yellow-400 tracking-widest text-sm mb-4 uppercase">Premium Collection</p>
        <h1 style={{fontFamily: 'Playfair Display, serif'}} className="text-6xl font-bold mb-4 text-white">
          TheDailyCase
        </h1>
        <p style={{fontFamily: 'Raleway, sans-serif'}} className="text-xl mb-2 text-gray-300 font-light">
          Luxury Phone Covers for Girls & Boys
        </p>
        <p className="text-lg mb-10 text-yellow-400">Starting at just ₹299</p>
        <Link to="/products">
          <button style={{background: 'linear-gradient(135deg, #c9a227, #f0d060)'}} className="text-black font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-all">
            Explore Collection →
          </button>
        </Link>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-3xl font-bold text-center mb-10 text-white">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["👧 For Girls", "👦 For Boys", "✨ Trending", "🎁 Gifts"].map((cat) => (
            <div key={cat} style={{background: '#1a1a1a', border: '1px solid #333'}} className="rounded-2xl p-6 text-center cursor-pointer hover:border-yellow-400 transition-all">
              <p className="text-lg font-semibold text-gray-200">{cat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-3xl font-bold mb-8 text-white">
          🔥 Trending Now
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products">
            <button style={{background: 'linear-gradient(135deg, #c9a227, #f0d060)'}} className="text-black font-bold px-10 py-4 rounded-full text-lg hover:opacity-90 transition-all">
              View All Products →
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home