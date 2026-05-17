function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-pink-400">🎨 TheDailyCase</h2>
            <p className="text-gray-400 mt-2">Trendy phone covers for girls & boys!</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Home</li>
              <li>Products</li>
              <li>Cart</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-3">Contact</h3>
            <p className="text-gray-400">support@thedailycase.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
