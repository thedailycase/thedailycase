import ProductCard from '../components/ProductCard'

const allProducts = [
  { id: 1, name: "Aesthetic Floral Case", phone: "iPhone 14/15", price: 199, originalPrice: 399, image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400" },
  { id: 2, name: "Matte Black Armour Case", phone: "Samsung Galaxy S23", price: 249, originalPrice: 499, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400" },
  { id: 3, name: "Cute Cartoon Case", phone: "Redmi Note 12", price: 149, originalPrice: 299, image: "https://images.unsplash.com/photo-1609252925602-e8f6982d8b20?w=400" },
  { id: 4, name: "Transparent Glitter Case", phone: "iPhone 13", price: 179, originalPrice: 349, image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400" },
  { id: 5, name: "Gaming Camo Case", phone: "OnePlus Nord", price: 219, originalPrice: 449, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400" },
  { id: 6, name: "Mirror Rose Gold Case", phone: "iPhone 14", price: 299, originalPrice: 599, image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=400" },
  { id: 7, name: "Minimalist White Case", phone: "Redmi Note 13", price: 129, originalPrice: 249, image: "https://images.unsplash.com/photo-1609252925602-e8f6982d8b20?w=400" },
  { id: 8, name: "Neon Green Case", phone: "Samsung Galaxy A54", price: 189, originalPrice: 379, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400" },
]

function Products() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">All Phone Covers</h1>
        <p className="text-gray-500 mt-2">Find the perfect cover for your phone!</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex gap-3 flex-wrap">
          {["All", "For Girls", "For Boys", "iPhone", "Samsung", "Redmi", "OnePlus"].map((filter) => (
            <button key={filter} className="bg-white border border-gray-200 px-4 py-2 rounded-full text-sm hover:bg-pink-500 hover:text-white hover:border-pink-500 transition-all">
              {filter}
            </button>
          ))}
        </div>
      </div>
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