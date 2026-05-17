import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <Link to={`/products/${product.id}`} className="block bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-semibold text-gray-800 text-sm">{product.name}</h3>
          <p className="text-gray-400 text-xs mt-1">{product.phone}</p>
        </Link>

        <div className="flex justify-between items-center mt-3">
          <span className="text-pink-500 font-bold text-lg">₹{product.price}</span>
          <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
        </div>

        <button className="w-full mt-3 bg-pink-500 text-white py-2 rounded-full text-sm hover:bg-pink-600 transition-colors">
          Add to Cart 🛒
        </button>
      </div>
    </div>
  )
}

export default ProductCard
