import React from "react";
import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#06091A] pt-48 pb-10 mt-40">
 
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-5xl">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-3xl">
          <div className="bg-amber-50 rounded-2xl py-12 px-6 text-center shadow-xl flex flex-col items-center">
            <h2 className="text-3xl font-bold text-black mb-2">Subscribe to our Newsletter</h2>
            <p className="text-gray-500 mb-8">Get the latest updates and news right in your inbox!</p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 border rounded-xl outline-none focus:ring-2 ring-yellow-400"
              />
              <button className="bg-linear-to-r from-pink-400 to-yellow-500 text-black font-bold px-8 py-3 rounded-xl hover:opacity-90 transition cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">

        <div className="flex justify-center mb-16">
          <img src={footerLogo} alt="Cricket Logo" className="h-32" />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-16">

          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">About Us</h3>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              We are a passionate team dedicated to providing the best services to our customers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Quick Links</h3>
            <ul className="text-gray-400 space-y-2 list-disc list-inside">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Subscribe</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex overflow-hidden rounded-xl">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 bg-white text-black outline-none"
              />
              <button className="bg-linear-to-r from-pink-400 to-yellow-500 px-4 py-3 text-black font-bold cursor-pointer hover:opacity-90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-gray-500 text-sm">
          <p>©2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;