import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ai-assistant.css';
import Navbar from './navbar';
import { Spinner } from 'react-spinner';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: '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'
});
const openai = new OpenAIApi(configuration);

const AiAssistantPage = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);


  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: input }],
    });

    setResponse(completion.data.choices[0].message.content);
    setLoading(false);
    setInput('');
  }

  // Default questions related to gym and fitness
  const defaultQuestions = [
    "What are some effective workout plans for beginners?",
    "Can you suggest a balanced diet plan for muscle gain?",
    "How many days a week should I work out?",
    "Tell me about some popular gym exercises for weight loss.",
  ];

  const handleDefaultQuestionClick = async (question) => {
    setInput(question);
    // await handleSubmit({ preventDefault: () => { } }); // Trigger the bot's response
  };

  // useEffect(() => {
  //   // Set a random default question when the component mounts
  //   const randomQuestion =
  //     defaultQuestions[Math.floor(Math.random() * defaultQuestions.length)];
  //   setResponse(randomQuestion);
  // }, []);

  return (
    <>
      <Navbar />
      <div className='chat-bot'>
        <form onSubmit={handleSubmit}>
          <input value={input} onChange={handleInputChange} />
          <button type="submit">Send</button>
        </form>
        <div>
          {defaultQuestions.map((question, index) => (
            <div
              key={index}
              className="default-question"
              onClick={() => handleDefaultQuestionClick(question)}
            >
              {question}
            </div>
          ))}
        </div>
        <div className='response'>{loading ? <div className="loading-spinner"></div> : response}</div>

      </div>
    </>
  );
}

export default AiAssistantPage;