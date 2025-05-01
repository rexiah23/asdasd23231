import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/getUrls';

export function Footer() {
  // Use the utility function instead of manually constructing the URL
  const whatsappUrl = getWhatsAppUrl(`Hi, I'd like to learn about importing a supercar from S. Korea`);
  
  // State for email input
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    try {
      const response = await fetch('/mailing-list/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to subscribe');
      }

      setIsSubmitted(true);
      setEmail('');
      setError('');
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.');
    }
  };

  return (
    <footer className="bg-gray-100 border-t border-navy-200">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company & Offices */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">SG Supercars Inc.</h3>
            <div className="space-y-4">
              {/* Canadian Office */}
              <div className="flex items-start gap-2 text-gray-600">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <p>
                  <span className="font-semibold">Canadian Office: </span>
                  809 9099 Cook Road, Richmond, BC
                </p>
              </div>
              {/* Korean Office */}
              {/* <div className="flex items-start gap-2 text-gray-600">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p><span className="font-semibold">Korean Office: </span>
                    <span className="font-medium tracking-wide border-b border-gray-400">TONG YEONG TRADING COMPANY</span>
                  </p>
                  <p className="text-sm">109-404, ICHON-RO 65-3 YONGSAN-KU, SEOUL</p>
                  <p className="text-xs text-gray-500 mt-1">
                    (Our parent company operating since 1987, specializing in auto exports)
                  </p>
                </div>
              </div> */}
              {/* Description */}
              {/* <p className="text-gray-600">
                Specializing in importing and delivering premium supercars from South Korea to your doorstep.
              </p> */}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2 text-gray-600">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <p>WhatsApp: Brian</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-600 hover:text-navy-700 transition-colors"
                  >
                    +1 437-463-8189
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <div>
                    <p className="text-sm">Sales:</p>
                    <a
                      href="mailto:admin@sgsupercars.ca"
                      className="text-navy-600 hover:text-navy-700 transition-colors"
                    >
                      admin@sgsupercars.ca
                    </a>
                  </div>
                  <div>
                    <p className="text-sm">Vehicle Tracking:</p>
                    <a
                      href="mailto:admin@sgsupercars.ca"
                      className="text-navy-600 hover:text-navy-700 transition-colors"
                    >
                      admin@sgsupercars.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-600">
                <Clock size={20} className="mt-1 flex-shrink-0" />
                <div>
                  <div className="flex justify-between items-center">
                    <span className="mr-4">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="mr-4">Saturday</span>
                    <span className="font-medium">10:00 AM - 3:00 PM PST</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="mr-4">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <p className="text-xs text-gray-500 pt-2 mt-2 border-t border-gray-200">
                    * WhatsApp support available 24/7 for urgent inquiries
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div>
            <p className="text-gray-600 mb-4">
              Be FIRST to receive alerts for new listings.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-900"
                  disabled={isSubmitted}
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                  disabled={isSubmitted}
                >
                  <Send size={16} />
                  <span>Subscribe</span>
                </button>
              </div>
              
              {error && <p className="text-red-500 text-sm">{error}</p>}
              {isSubmitted && (
                <p className="text-green-600 text-sm font-medium">
                  Thank you! You've been added to our mailing list.
                </p>
              )}
              
              <p className="text-xs text-gray-500 mt-2">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
