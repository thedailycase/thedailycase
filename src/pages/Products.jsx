import ProductCard from '../components/ProductCard'

const allProducts = [
  // iPhone Cases
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
    name: "Aesthetic Sunset Case",
    phone: "iPhone 14 / 15 Pro",
    price: 499,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=400",
    tag: "🌅 Premium"
  },
  {
    id: 4,
    name: "Cute Pastel Case",
    phone: "iPhone 11 / 12 / 13",
    price: 349,
    originalPrice: 549,
    image: "https://images.unsplash.com/photo-1603313011108-a4b2f6756e97?w=400",
    tag: "🎀 Cute"
  },
  {
    id: 5,
    name: "Minimalist Clear Case",
    phone: "iPhone 13 / 14 / 15",
    price: 299,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400",
    tag: "✨ Minimalist"
  },
  {
    id: 6,
    name: "Rose Gold Glitter Case",
    phone: "iPhone 12 / 13 / 14",
    price: 399,
    originalPrice: 649,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400",
    tag: "💖 Glamorous"
  },
  // Samsung Cases
  {
    id: 7,
    name: "Matte Black Armour Case",
    phone: "Samsung Galaxy S23 / S24",
    price: 349,
    originalPrice: 549,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    tag: "💪 Heavy Duty"
  },
  {
    id: 8,
    name: "Aesthetic Marble Case",
    phone: "Samsung Galaxy A54 / A55",
    price: 299,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400",
    tag: "✨ Trending"
  },
  {
    id: 9,
    name: "Floral Print Case",
    phone: "Samsung Galaxy S22 / S23",
    price: 349,
    originalPrice: 549,
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400",
    tag: "🌸 Girls Special"
  },
  {
    id: 10,
    name: "Carbon Fibre Case",
    phone: "Samsung Galaxy A34 / A54",
    price: 299,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    tag: "🔥 Boys Special"
  },
  {
    id: 11,
    name: "Cute Cartoon Case",
    phone: "Samsung Galaxy M34 / M54",
    price: 249,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    tag: "😍 Fan Favourite"
  },
  {
    id: 12,
    name: "Mirror Rose Gold Case",
    phone: "Samsung Galaxy S21 / S22",
    price: 399,
    originalPrice: 649,
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=400",
    tag: "💖 Premium"
  },
]

function Products() {
  return (
    <div className="min-h-screen" style={{background: '#0a0a0a'}}>

      {/* Header */}
      <div style={{background: '#111', borderBottom: '1px solid #222'}} className="py-12 text-center">
        <h1 style={{fontFamily: 'Playfair Display, serif'}} className="text-4xl font-bold text-white">
          All Phone Covers
        </h1>
        <p className="text-gray-500 mt-2 font-light">Find the perfect cover for your phone!</p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-3 flex-wrap">
          {["All", "For Girls", "For Boys", "iPhone", "Samsung", "Trending", "Premium"].map((filter) => (
            <button
              key={filter}
              style={{background: '#1a1a1a', border: '1px solid #333', color: '#fff'}}
              className="px-4 py-2 rounded-full text-sm hover:border-yellow-400 hover:text-yellow-400 transition-all"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <p className="text-gray-500 mb-6">{allProducts.length} products found</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Products