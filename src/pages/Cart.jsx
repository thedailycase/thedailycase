function Cart() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white shadow-sm py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Empty Cart */}
        <div className="text-center py-20">
          <p className="text-6xl mb-4">🛒</p>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty!</h2>
          <p className="text-gray-400 mb-8">Add some awesome phone covers to your cart!</p>
          <a href="/products">
            <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg hover:bg-pink-600 transition-colors">
              Shop Now →
            </button>
          </a>
        </div>

      </div>

    </div>
  )
}

export default Cart