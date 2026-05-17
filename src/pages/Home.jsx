import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

const featuredProducts = [
  {
    id: 1,
    name: "Aesthetic Floral Case",
    phone: "iPhone 14/15",
    price: 199,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400"
  },
  {
    id: 2,
    name: "Matte Black Armour Case",
    phone: "Samsung Galaxy S23",
    price: 249,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400"
  },
  {
    id: 3,
    name: "Cute Cartoon Case",
    phone: "Redmi Note 12",
    price: 149,
    originalPrice: 299,
    image: "https://images.unsplash.com/photo-1609252925602-e8f6982d8b20?w=400"
  },
  {
    id: 4,
    name: "Transparent Glitter Case",
    phone: "iPhone 13",
    price: 179,
    originalPrice: 349,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400"
  },
]

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-20 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">🎨 TheDailyCase</h1>
        <p className="text-xl mb-2">Trendy Phone Covers for Girls & Boys!</p>
        <p className="text-lg mb-8 opacity-80">Starting at just ₹149 🔥</p>
        <Link to="/products">
          <button className="bg-white text-pink-500 font-bold px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition-colors">
            Shop Now →
          </button>
        </Link>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["👧 For Girls", "👦 For Boys", "✨ Trending", "🎁 Gifts"].map((cat) => (
            <div key={cat} className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg cursor-pointer hover:bg-pink-50 transition-all">
              <p className="text-lg font-semibold text-gray-700">{cat}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">🔥 Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg hover:bg-pink-600 transition-colors">
              View All Products →
            </button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Home