function Footer() {
  return (
    <footer style={{background: '#050505', borderTop: '1px solid #222'}} className="text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 style={{fontFamily: 'Playfair Display, serif', color: '#c9a227'}} className="text-2xl font-bold">
              ✦ TheDailyCase
            </h2>
            <p className="text-gray-500 mt-2 font-light">Premium phone covers for girls & boys!</p>
          </div>

          {/* Links */}
          <div>
            <h3 style={{fontFamily: 'Playfair Display, serif'}} className="font-bold text-lg mb-4 text-white">
              Quick Links
            </h3>
            <ul className="text-gray-500 space-y-2 font-light">
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">Home</li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">Products</li>
              <li className="hover:text-yellow-400 cursor-pointer transition-colors">Cart</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{fontFamily: 'Playfair Display, serif'}} className="font-bold text-lg mb-4 text-white">
              Contact Us
            </h3>
            <ul className="text-gray-500 space-y-2 font-light">
              <li>📧 contact@thedailycase.in</li>
              <li>📱 WhatsApp: 9740197628</li>
              <li>📍 Yadgir, Karnataka</li>
            </ul>
          </div>

        </div>

        <div style={{borderTop: '1px solid #222'}} className="text-center text-gray-600 mt-8 pt-6 font-light">
          © 2026 TheDailyCase. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer