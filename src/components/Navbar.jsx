import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{background: '#0a0a0a', borderBottom: '1px solid #222'}} className="sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" style={{fontFamily: 'Playfair Display, serif'}} className="text-2xl font-bold text-white">
          ✦ TheDailyCase
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors font-light tracking-wide">
            Home
          </Link>
          <Link to="/products" className="text-gray-400 hover:text-yellow-400 transition-colors font-light tracking-wide">
            Products
          </Link>
          <Link to="/cart" style={{background: 'linear-gradient(135deg, #c9a227, #f0d060)'}} className="text-black font-bold px-6 py-2 rounded-full hover:opacity-90 transition-all">
            🛒 Cart
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar