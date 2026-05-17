import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-pink-500">
          🎨 TheDailyCase
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-pink-500 font-medium">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-pink-500 font-medium">
            Products
          </Link>
          <Link to="/cart" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
            🛒 Cart
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar