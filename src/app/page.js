'use client'
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'
    }`}>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button 
          onClick={toggleTheme}
          className="fixed right-4 top-4 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>

      <div className="relative flex place-items-center my-16">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Welcome to My Awesome App!
        </h1>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Interactive Counter</h2>
          <div className="text-8xl font-bold mb-8 transition-all duration-300 transform hover:scale-110">
            {count}
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setCount(prev => prev - 1)}
              className="px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-all"
            >
              Decrease
            </button>
            <button 
              onClick={() => setCount(0)}
              className="px-6 py-3 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-all"
            >
              Reset
            </button>
            <button 
              onClick={() => setCount(prev => prev + 1)}
              className="px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all"
            >
              Increase
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Speed', 'Security', 'Scalability'].map((feature, index) => (
            <div 
              key={feature}
              className="p-6 border rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-2">{feature}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
