import ProductCard from '../components/ProductCard'

const allProducts = [
  {
    id: 1,
    name: "Black Bow Aesthetic Case",
    phone: "iPhone 13",
    price: 449,
    originalPrice: 699,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400",
    tag: "🔥 Bestseller"
  },
  {
    id: 2,
    name: "Tom & Jerry Cartoon Case",
    phone: "Samsung Galaxy",
    price: 299,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400",
    tag: "😍 Fan Favourite"
  },
  {
    id: 3,
    name: "Coffee Cartoon 3D Case",
    phone: "Oppo K13 5G",
    price: 349,
    originalPrice: 549,
    image: "https://images.unsplash.com/photo-1609252925602-e8f6982d8b20?w=400",
    tag: "✨ Trending"
  },
  {
    id: 4,
    name: "Coffee 3D Protection Case",
    phone: "Samsung Galaxy M30S",
    price: 349,
    originalPrice: 549,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400",
    tag: "💪 Full Protection"
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
          {["All", "For Girls", "For Boys", "iPhone", "Samsung", "Oppo", "Redmi"].map((filter) => (
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