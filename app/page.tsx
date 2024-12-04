"use client"
import React, { useState } from 'react';
import { Heart, Play } from 'lucide-react';

const App= () =>{
  const [isHovered, setIsHovered] = useState(false);

  // Replace this URL with your father's picture
  const fatherImageUrl = "imageCadeau.jpg";
  
  // Replace this URL with your video URL when ready
  const videoUrl = "https://youtu.be/jljQurAWah4?si=33ATQpejIx75G5z3";

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${fatherImageUrl})` 
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-slideDown">
            Happy Birthday
            <span className="block text-4xl md:text-5xl mt-2">Dad!</span>
          </h1>
          
          
          <div className="flex items-center justify-center mb-8">
            <Heart className="text-red-500 w-8 h-8 animate-pulse" />
          </div>

          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed">
            To the most amazing father in the world. Thank you for being my hero, my guide, and my inspiration.
          </p>

          <a

            href={videoUrl}
            className={`group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white text-lg font-semibold transition-all duration-300 ${
              isHovered 
                ? 'bg-white text-black shadow-lg scale-105' 
                : 'bg-transparent border-2 border-white'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Play className={`w-6 h-6 ${isHovered ? 'text-black' : 'text-white'}`} />
            click here to receive your speacial gift
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default App;