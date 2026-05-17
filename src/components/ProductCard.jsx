function ProductCard({ product }) {
  return (
    <div style={{background: '#1a1a1a', border: '1px solid #222'}} className="rounded-2xl overflow-hidden hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl">
      
      {/* Product Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 style={{fontFamily: 'Playfair Display, serif'}} className="font-semibold text-white text-sm">
          {product.name}
        </h3>
        <p className="text-gray-500 text-xs mt-1 tracking-wide">{product.phone}</p>
        
        <div className="flex justify-between items-center mt-3">
          <span style={{color: '#c9a227'}} className="font-bold text-lg">₹{product.price}</span>
          <span className="text-gray-600 line-through text-sm">₹{product.originalPrice}</span>
        </div>

        <button style={{background: 'linear-gradient(135deg, #c9a227, #f0d060)'}} className="w-full mt-3 text-black font-bold py-2 rounded-full text-sm hover:opacity-90 transition-all">
          Add to Cart 🛒
        </button>
      </div>

    </div>
  )
}

export default ProductCard