"use client"

import { Info, Moon, Send, Sun, Waves } from 'lucide-react';
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="flex flex-row w-full h-full relative">
        <div className="w-full mt-6 mb-6 ml-6 mr-6 relative overflow-hidden" style={{ borderRadius: '10px' }}>
          weightless
        </div>
      </div>
    </div>
  )
}
