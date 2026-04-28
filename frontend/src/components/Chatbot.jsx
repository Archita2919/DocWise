import React, { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Chatbot = () => {
  const { backendUrl } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setChat((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch(`${backendUrl}/api/chat/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const aiMessage = {
        sender: 'bot',
        text: res.ok ? (data.reply || 'No response from AI.') : (data.error || 'Chat request failed.'),
      };
      setChat((prev) => [...prev, aiMessage]);
    } catch (error) {
      setChat((prev) => [...prev, { sender: 'bot', text: 'Could not reach chat service.' }]);
    } finally {
      setInput('');
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="h-[400px] overflow-y-auto bg-gray-100 p-4 rounded shadow mb-4">
        {chat.map((msg, index) => (
          <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && <div className="text-gray-500 italic">AI is typing...</div>}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded px-3 py-2"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
