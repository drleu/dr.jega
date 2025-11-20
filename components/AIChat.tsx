import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Minimize2, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToAssistant } from '../services/aiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual del Dr. Galindo. ¿En qué puedo ayudarte hoy? Puedo responder dudas sobre consultas, precios y horarios.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue('');
    
    // Add user message
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newHistory);
    setIsLoading(true);

    try {
      // Call Gemini API
      // We pass 'messages' (the history before the current message) because sendMessageToAssistant
      // creates the chat with history and then sends the new message.
      // If we passed 'newHistory', the current message would be in history AND sent as new message.
      const responseText = await sendMessageToAssistant(messages, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, hubo un error de conexión. Por favor intenta más tarde.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-28 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all animate-in slide-in-from-bottom-10 fade-in duration-300 max-h-[600px] h-[500px]">
          
          {/* Header */}
          <div className="bg-slate-900 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-teal-500 p-1.5 rounded-lg">
                 <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">Asistente Virtual</h3>
                <p className="text-xs text-teal-400">Powered by Gemini AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <Minimize2 className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-teal-600 text-white rounded-br-none shadow-md' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                } ${msg.isError ? 'bg-red-50 border-red-200 text-red-600' : ''}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm flex items-center space-x-2">
                  <Loader2 className="w-4 h-4 text-teal-500 animate-spin" />
                  <span className="text-xs text-slate-400">Escribiendo...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Escribe tu consulta..."
                className="flex-1 bg-slate-100 text-slate-800 placeholder-slate-400 border-0 rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all text-sm outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-teal-500/30"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        >
          <MessageSquare className="w-7 h-7 text-white group-hover:text-teal-400 transition-colors" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-teal-500 rounded-full border-2 border-white animate-pulse"></span>
          <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            ¿Tienes dudas? ¡Pregúntame!
          </span>
        </button>
      )}
    </div>
  );
};