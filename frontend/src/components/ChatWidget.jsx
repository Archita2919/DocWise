import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Chatbot from './Chatbot';

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {open && (
        <div className="fixed bottom-20 right-6 z-40 w-80">
          <Chatbot />
        </div>
      )}
    </>
  );
};

export default ChatWidget;
