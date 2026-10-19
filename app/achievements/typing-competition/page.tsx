"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, X, Trophy, Calendar, Target } from "lucide-react";

// Update image filenames here once you add them to your public/ folder
const images = [
  {
    src: "/typing-certificate.jpg",
    alt: "First Position Typing Competition Certificate",
    caption: "Official certificate for securing First Position in the typing competition."
  }
];

export default function TypingCompetition() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 w-full border-b border-gray-800/60 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center">
          <Link 
            href="/#experience" 
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-1"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20">
        {/* Hero / Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs text-purple-500 font-mono tracking-wider">
              <Trophy size={14} className="inline mr-1" />
              Achievement
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            First Position: <span className="text-purple-500">Typing Competition</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl">
            Awarded First Place in a competitive typing test, demonstrating high speed, accuracy, and focus.
          </p>
        </div>

        {/* Meta Data Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <div className="bg-[#111111] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
            <Calendar size={20} className="text-blue-500" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Year</p>
              <p className="text-sm font-medium">2025</p> {/* Update year if needed */}
            </div>
          </div>
          <div className="bg-[#111111] border border-gray-800 rounded-xl p-4 flex items-center gap-3">
            <Target size={20} className="text-blue-500" />
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Result</p>
              <p className="text-sm font-medium">1st Place</p>
            </div>
          </div>
        </div>

        {/* Achievement Overview */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-purple-500">Overview</h2>
          <div className="bg-[#111111] border border-gray-800 rounded-xl p-6 text-gray-300 leading-relaxed text-sm sm:text-base">
            <p>
              Competing against other participants, I secured the first position by maintaining high typing speed while minimizing errors. This achievement highlights my commitment to efficiency and precision in my daily workflow as a developer.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-purple-500">Certificate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <figure key={index} className="group relative cursor-pointer overflow-hidden rounded-xl border border-gray-800 bg-[#111111]">
                <button
                  onClick={() => setSelectedImage(index)}
                  className="w-full h-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset block"
                  aria-label={`View larger image of ${image.caption}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500" 
                    onError={(e) => {
                      // Fallback if image is not found
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                      Click to view
                    </span>
                  </div>
                </button>
                <figcaption className="p-4 text-xs text-gray-400 border-t border-gray-800">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </main>

      {/* Accessible Modal / Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div 
            className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-gray-400 hover:text-white bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close image viewer"
            >
              <X size={24} />
            </button>

            <img 
              src={images[selectedImage].src} 
              alt={images[selectedImage].alt}
              className="max-h-[80vh] w-auto object-contain rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop';
              }}
            />
            
            <p className="mt-4 text-sm text-gray-300 text-center">
              {images[selectedImage].caption}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}