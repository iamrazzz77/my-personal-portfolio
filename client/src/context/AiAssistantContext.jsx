import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AiAssistantContext = createContext();

const INITIAL_WELCOME_MESSAGE = {
  id: 'welcome-1',
  sender: 'ai',
  text: "Hi! I am Faishal's Professional Portfolio Assistant. Ask me anything about his experience, projects, skills, or logistics technology work.",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  actions: [
    { label: 'View RVM Case Study', url: '/projects/reverse-vending-machine' },
    { label: 'View Resume', url: '/resume' }
  ]
};

export const AiAssistantProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastQuestion, setLastQuestion] = useState('');
  const [messages, setMessages] = useState([INITIAL_WELCOME_MESSAGE]);

  const openAiAssistant = () => setIsOpen(true);
  const closeAiAssistant = () => setIsOpen(false);
  const toggleAiAssistant = () => setIsOpen(prev => !prev);

  const clearChat = () => {
    setMessages([INITIAL_WELCOME_MESSAGE]);
    setLastQuestion('');
  };

  const sendMessage = async (questionText) => {
    if (!questionText || !questionText.trim()) return;

    const userText = questionText.trim();
    setLastQuestion(userText);

    const userMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Calculate current history for context before adding new prompt
    const historyPayload = messages
      .filter(m => m.id !== 'welcome-1' && !m.isError)
      .slice(-6)
      .map(m => ({ sender: m.sender, text: m.text }));

    setMessages(prev => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await axios.post('/api/ai/ask', {
        question: userText,
        history: historyPayload
      });

      if (response.data?.success) {
        const aiMessage = {
          id: Math.random().toString(),
          sender: 'ai',
          text: response.data.answer,
          actions: response.data.actions || [],
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isError: false
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        throw new Error(response.data?.message || 'Error receiving response from AI assistant.');
      }
    } catch (error) {
      console.error('[Portfolio AI Client Error]', error);

      const serverMessage = error.response?.data?.message || error.message || 'I couldn\'t reach the AI service. Please try again.';

      const errorMessage = {
        id: Math.random().toString(),
        sender: 'ai',
        text: serverMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true,
        actions: [
          { label: 'Explore Projects', url: '/projects' },
          { label: 'View Resume', url: '/resume' }
        ]
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const retryLastMessage = () => {
    if (lastQuestion && !loading) {
      // Remove last error message if present
      setMessages(prev => {
        if (prev.length > 0 && prev[prev.length - 1].isError) {
          return prev.slice(0, -1);
        }
        return prev;
      });
      sendMessage(lastQuestion);
    }
  };

  return (
    <AiAssistantContext.Provider value={{
      isOpen,
      openAiAssistant,
      closeAiAssistant,
      toggleAiAssistant,
      messages,
      loading,
      sendMessage,
      clearChat,
      retryLastMessage,
      lastQuestion
    }}>
      {children}
    </AiAssistantContext.Provider>
  );
};

export const useAiAssistant = () => useContext(AiAssistantContext);
