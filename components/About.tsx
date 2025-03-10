'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className='bg-[#D72327] min-h-screen md:min-h-[70vh] relative flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8'
    >
      {/* Male image - left side */}
      <div 
        className={`absolute hidden md:block left-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out ${
          isVisible ? 'translate-x-10 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <Image 
          src='/male.svg' 
          width={120} 
          height={120} 
          alt='male illustration'
          className="max-w-full h-auto w-20 md:w-32 lg:w-40"
        />
      </div>
      
      {/* Center text content */}
      <div 
        className={`text-center w-full max-w-4xl mx-auto z-10 transition-all duration-1000 ease-out px-4 sm:px-6 lg:px-8 ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'
        }`}
      >
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-12 text-white'>
          About The Festival
        </h1>
        <p className='text-white text-base sm:text-lg md:text-xl lg:text-2xl text-justify'>
          The Puri Literary Festival 2025 celebrates the harmony of tradition and modernity, 
          inspired by the sacred symbolism of the Konark Sun Temple and Lord Jagannath&apos;s Ratha. 
          Rooted in Puri&apos;s rich spiritual and cultural legacy, the festival fosters global dialogue 
          through literature, art, and heritage. With grassroots outreach across Odisha, it aims to 
          inspire the youth, preserve traditions, and shape a visionary future for India&apos;s cultural 
          and intellectual growth.
        </p>
      </div>
      
      {/* Female image - right side */}
      <div 
        className={`absolute hidden md:block right-0 top-1/2 transform -translate-y-1/2 transition-all duration-1000 ease-out ${
          isVisible ? '-translate-x-10 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <Image 
          src='/female.svg' 
          width={120} 
          height={120} 
          alt='female illustration'
          className="max-w-full h-auto w-20 md:w-32 lg:w-40"
        />
      </div>

      {/* Mobile Illustrations */}
      <div className='md:hidden flex justify-between w-full absolute bottom-0'>
        <Image 
          src='/male.svg' 
          width={80} 
          height={80} 
          alt='male illustration'
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        />
        <Image 
          src='/female.svg' 
          width={80} 
          height={80} 
          alt='female illustration'
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        />
      </div>

      {/* Bottom border image */}
      <div className='w-full absolute bottom-0 left-0'>
        <Image 
          src='/about-border.svg' 
          width={400} 
          height={300} 
          className='w-full' 
          alt='border decoration'
        />
      </div>
    </div>
  );
};

export default About;