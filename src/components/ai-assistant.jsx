import React, { useState } from 'react';
import axios from 'axios';
import './ai-assistant.css';
import Navbar from './navbar';


const AiAssistantPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      return;
    }

    const userMessage = {
      role: 'user',
      content: input,
    };

    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          messages: [...messages, userMessage],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': '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',
          },
        }
      );

      const botReply = response.data.choices[0].message.content;
      const botMessage = {
        role: 'bot',
        content: botReply,
      };

      setMessages([...messages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='ai-assistant-body'>
      <Navbar/>
      <h2>Chatbot</h2>
      <div className="chat-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AiAssistantPage;
