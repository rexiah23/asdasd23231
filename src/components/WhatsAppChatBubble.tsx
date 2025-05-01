import React from 'react';
import { MessageCircle } from 'lucide-react';

export function WhatsAppChatBubble() {
  const handleClick = () => {
    // Brian's WhatsApp number
    const phoneNumber = '4374638189';
    const message = 'Hi Brian, I have a question about importing a vehicle.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#22c55e] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
      aria-label="Chat with Brian on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="font-medium">Chat with Brian Now!</span>
    </button>
  );
} 