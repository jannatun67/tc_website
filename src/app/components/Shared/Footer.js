import Image from 'next/image';
import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="relative bg-[#070B1C] text-gray-300 overflow-hidden">
      {/* Background lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_40%)] pointer-events-none" />

      {/* Top CTA */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 flex flex-col lg:flex-row items-center justify-between gap-6 border-b border-white/10">
        <div className="flex items-start gap-4 max-w-2xl">
          <div className="w-14 h-14 flex items-center justify-center rounded-full ">
           <Image src="/logoIcon.png" 
           width={200}
           height={130}
           ></Image>
          </div>
          <p className="text-lg text-white">
            One connected ecosystem for traders — from copying trades to
            analyzing portfolios.
            <span className="text-gray-400">
              {" "}
              Simplify your trading world with automation, insights, and
              transparency.
            </span>
          </p>
        </div>

        <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:opacity-90 transition">
          Get Started
        </button>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {/* Platform */}
        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2 text-sm">
            <li>TC Copier</li>
            <li>TC Analyzer</li>
            <li>TC Comparison</li>
            <li>Market Tools</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-white font-semibold mb-4">About</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Affiliates</li>
            <li>Case Studies</li>
            <li>Raise a Ticket</li>
            <li>Book a Demo</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-white font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Integration</li>
            <li>Documentation</li>
            <li>e-Guides</li>
            <li>Developer API</li>
            <li>Status Page</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Billing Policy</li>
            <li>Links to External Sites</li>
            <li>Limited Use of User Data</li>
          </ul>
        </div>

        <div className=''>
            <Image src="/system.png" width={100} height={100} alt='System' className='pb-5'></Image>
             <Image src="/appStore.png" width={100} height={100} alt='App Store' className='pb-5'></Image>
              <Image src="/googlePlay.png" width={100} height={100} alt='Google Play'></Image>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 pb-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 ">
          <Image src="/logo.png"
          width={200}
          height={500}
          alt='Footer Logo'
          ></Image>
        </div>
        
        <p className="text-sm text-gray-400">
          © 2020 - 2025 <span className="text-white">TradersConnect</span>
        </p>

        <div className="flex items-center gap-4">
          {[FaFacebookF, FaYoutube, FaInstagram, FaXTwitter].map(
            (Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <Icon />
              </div>
            )
          )}
        </div>
      </div>
    </footer>
    );
};

export default Footer;