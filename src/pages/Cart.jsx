import { useState } from 'react'

function Cart() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const handlePayment = () => {
    if (!name || !email || !phone || !address) {
      alert('Please fill all details!')
      return
    }

    const options = {
      key: 'rzp_live_SqJTtMKLH8T',
      amount: 29900,
      currency: 'INR',
      name: 'TheDailyCase',
      description: 'Phone Cover Order',
      handler: function (response) {
        alert('Payment Successful! Order placed!')
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      theme: {
        color: '#c9a227',
      },
    }

    const razor = new window.Razorpay(options)
    razor.open()
  }

  return (
    <div className="min-h-screen" style={{background: '#0a0a0a'}}>
      <div style={{background: '#111', borderBottom: '1px solid #222'}} className="py-8 text-center">
        <h1 style={{fontFamily: 'Playfair Display, serif'}} className="text-3xl font-bold text-white">
          Your Cart
        </h1>
      </div>

      <div className="max-w-lg mx-auto px-4 py-12">
        <div style={{background: '#1a1a1a', border: '1px solid #333'}} className="rounded-2xl p-8">
          <h2 style={{fontFamily: 'Playfair Display, serif'}} className="text-xl font-bold text-white mb-6">
            Enter Delivery Details
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{background: '#111', border: '1px solid #333', color: 'white'}}
              className="w-full px-4 py-3 rounded-xl focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{background: '#111', border: '1px solid #333', color: 'white'}}
              className="w-full px-4 py-3 rounded-xl focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{background: '#111', border: '1px solid #333', color: 'white'}}
              className="w-full px-4 py-3 rounded-xl focus:outline-none"
            />
            <textarea
              placeholder="Full Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              rows={3}
              style={{background: '#111', border: '1px solid #333', color: 'white'}}
              className="w-full px-4 py-3 rounded-xl focus:outline-none"
            />
          </div>

          <div style={{borderTop: '1px solid #333'}} className="mt-6 pt-6">
            <div className="flex justify-between text-gray-400 mb-2">
              <span>Product</span>
              <span>₹299</span>
            </div>
            <div className="flex justify-between text-gray-400 mb-2">
              <span>Delivery</span>
              <span className="text-green-400">FREE</span>
            </div>
            <div style={{borderTop: '1px solid #333'}} className="flex justify-between text-white font-bold text-lg mt-4 pt-4">
              <span>Total</span>
              <span style={{color: '#c9a227'}}>₹299</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            style={{background: 'linear-gradient(135deg, #c9a227, #f0d060)'}}
            className="w-full mt-6 text-black font-bold py-4 rounded-full text-lg hover:opacity-90 transition-all"
          >
            Pay Now ₹299
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart