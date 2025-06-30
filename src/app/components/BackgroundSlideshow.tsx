'use client'

import React, { useEffect, useRef, useState } from 'react';

const images = [
  '/hitman3.jpg',
  '/kohli1.jpg',
  '/kkr1.jpg',
];

const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.55)', // Strong overlay for readability
  zIndex: 1,
  pointerEvents: 'none',
};

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 0,
  overflow: 'hidden',
};

const imgStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  objectFit: 'cover',
  transition: 'opacity 1.5s ease',
  opacity: 0,
};

export default function BackgroundSlideshow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index]);

  return (
    <div style={containerStyle} aria-hidden="true">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Background"
          style={{
            ...imgStyle,
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1.5s ease',
          }}
          draggable={false}
        />
      ))}
      <div style={overlayStyle} />
    </div>
  );
} 