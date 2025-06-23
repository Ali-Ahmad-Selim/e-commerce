import React from 'react'

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto transform rotate-180">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(17 24 39)"/>
        </svg>
      </div>

      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-blue-500 bg-opacity-5 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500 bg-opacity-10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-white bg-opacity-3 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 bg-blue-400 bg-opacity-10 rounded-full animate-bounce delay-500"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-10 transform rotate-45">
          <div className="w-12 h-12 bg-purple-400 bg-opacity-20 animate-spin slow-spin"></div>
        </div>
        <div className="absolute bottom-1/3 left-16 transform -rotate-12">
          <div className="w-8 h-8 bg-blue-400 bg-opacity-20 rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="relative mr-3">
                  <svg className="w-10 h-10 text-blue-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    <circle cx="9" cy="20" r="1"/>
                    <circle cx="20" cy="20" r="1"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-bounce flex items-center justify-center">
                    <span className="text-white text-xs font-bold">+</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Shop
                  </span>
                  <span className="text-white ml-1">Smart</span>
                </h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Experience the future of shopping with our curated collection of premium products. Fast, secure, and loved by thousands.
              </p>
              
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-400 text-xs rounded-full border border-blue-600 border-opacity-30">
                  Fast Delivery
                </span>
                <span className="px-3 py-1 bg-green-600 bg-opacity-20 text-green-400 text-xs rounded-full border border-green-600 border-opacity-30">
                  Secure Payment
                </span>
                <span className="px-3 py-1 bg-purple-600 bg-opacity-20 text-purple-400 text-xs rounded-full border border-purple-600 border-opacity-30">
                  24/7 Support
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'Shop', 'Categories', 'About Us', 'Contact', 'Track Order'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group">
                      <svg className="w-3 h-3 text-blue-400 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 flex items-center">
                <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
                </svg>
                Customer Service
              </h4>
              <ul className="space-y-3">
                {['Help Center', 'Returns & Exchanges', 'Shipping Info', 'Size Guide', 'FAQ', 'Live Chat'].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group">
                      <svg className="w-3 h-3 text-green-400 mr-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 flex items-center">
                <svg className="w-5 h-5 text-purple-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Connect With Us
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@shopmart.com
                </div>
                <div className="flex items-start text-gray-300 text-sm">
                  <svg className="w-4 h-4 text-purple-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  123 Shopping Street,<br />
                  Commerce City, CC 12345
                </div>
              </div>

              {/* Social Media Icons */}
              <div>
                <p className="text-gray-300 text-sm mb-4">Follow us on social media:</p>
                <div className="flex space-x-4">
                  {/* WhatsApp */}
                  <a href="#" className="group relative">
                    <div className="w-10 h-10 bg-green-600 bg-opacity-20 rounded-full flex items-center justify-center border border-green-600 border-opacity-30 hover:bg-green-600 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                                           <svg className="w-5 h-5 text-green-400 group-hover:text-green-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
                      </svg>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a href="#" className="group relative">
                    <div className="w-10 h-10 bg-pink-600 bg-opacity-20 rounded-full flex items-center justify-center border border-pink-600 border-opacity-30 hover:bg-pink-600 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                      <svg className="w-5 h-5 text-pink-400 group-hover:text-pink-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </a>

                  {/* TikTok */}
                  <a href="#" className="group relative">
                    <div className="w-10 h-10 bg-gray-600 bg-opacity-20 rounded-full flex items-center justify-center border border-gray-600 border-opacity-30 hover:bg-gray-600 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                      <svg className="w-5 h-5 text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                      </svg>
                    </div>
                  </a>

                  {/* Facebook */}
                  <a href="#" className="group relative">
                    <div className="w-10 h-10 bg-blue-600 bg-opacity-20 rounded-full flex items-center justify-center border border-blue-600 border-opacity-30 hover:bg-blue-600 hover:bg-opacity-30 transition-all duration-300 hover:scale-110">
                      <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-white font-semibold text-xl mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-400 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Stay Updated with Latest Deals
              </h4>
              <p className="text-gray-300 text-sm mb-6">
                Subscribe to our newsletter and get exclusive offers, new product updates, and shopping tips delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-4 py-3 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  required 
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm text-center lg:text-left">
                <p>&copy; 2024 ShopSmart. All rights reserved.</p>
              </div>
              
              {/* Payment Methods */}
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">We Accept:</span>
                <div className="flex gap-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                  <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                  <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">GP</div>
                </div>
              </div>
              
              {/* Legal Links */}
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slow-spin {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer

