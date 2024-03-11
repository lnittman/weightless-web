"use client"

import { Info, Moon, Send, Sun, Waves } from 'lucide-react';
import { useEffect, useRef, useState } from "react"

import SplineSection from "@/components/SplineSection";

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const toggleMail = () => {
    // TODO 
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const splineSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    if (splineSectionRef.current) {
      splineSectionRef.current.addEventListener('click', toggleInfo);
    }
  }, [splineSectionRef]);

  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="flex flex-row w-full h-full relative">
        <div className="w-full mt-6 mb-6 ml-6 mr-6 relative overflow-hidden" style={{ borderRadius: '10px' }}>
          <SplineSection ref={splineSectionRef} />

          {!showInfo &&
            <div className={`absolute inset-0 flex justify-center items-center logo-fade-in`}>
              <Waves size={64} style={{ color: 'var(--text-color)' }} />
            </div>
          }

          {showInfo && (
            <div className={`information-placard fade-in ${theme === 'light' ? 'information-placard-light' : 'information-placard-dark'}`}>
            </div>
          )}

          <button onClick={toggleTheme} className="absolute bottom-4 left-4">
            <div className={`transition-opacity`}>
              {theme === 'light' ? <Sun size={40} /> : <Moon size={40} />}
            </div>
          </button>

          <button onClick={toggleInfo} className="absolute bottom-4 left-20">
            <div className={`transition-opacity`}>
              <Info size={40} />
            </div>
          </button>

          <button onClick={toggleMail} className="absolute bottom-4 left-36">
            <div className={`transition-opacity`}>
              <Send size={40} />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
