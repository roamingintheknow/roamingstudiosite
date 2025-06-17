'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type ImageUrlPair = {
  full: string;
  blur: string;
};

type PortfolioHeaderProps = {
  word: string;
  textBlock: React.ReactNode;
  imageUrl: ImageUrlPair;
  imageAlt?: string;
  horizontalImg: ImageUrlPair;
  isReversed?: boolean;
};

export default function PortfolioHeader({
  word,
  textBlock,
  imageUrl,
  imageAlt = 'Portfolio Image',
  horizontalImg,
  isReversed = false,
}: PortfolioHeaderProps) {

  const ref = useRef<HTMLDivElement>(null);

  const [ready, setReady] = useState(false);

  const resizeText = () => {
    const el = ref.current;
    if (!el) return;
    setReady(false);
    const isVertical = window.innerHeight > window.innerWidth;
    if (isVertical) {
      // Don’t set ready true, just bail out
      return;
    }
   
    const parentWidth = el.parentElement?.offsetWidth ?? window.innerWidth;
    let fontSize = 128;
    el.style.fontSize = `${fontSize}px`;

    while (el.scrollWidth > parentWidth * 0.75 && fontSize > 16) {
      fontSize -= 1;
      el.style.fontSize = `${fontSize}px`;
    }

    setReady(true);
  };

  useEffect(() => {
    resizeText(); // Initial run

    // Debounced resize handler
    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        resizeText();
      }, 200); // Adjust debounce delay if needed
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [word]);

  return (
    <section
  className={`relative w-full flex flex-col md:flex-row bg-wander-white ${
    isReversed ? 'md:flex-row-reverse' : ''
  }`}
    >
      {/* Word at the top center */}
      {/* <h2
  ref={ref}
  style={{ visibility: ready ? 'visible' : 'hidden' }}
  className="absolute top-6 left-1/2 transform -translate-x-1/2  wander-brown-text text-center z-20 portfolio-header-text-lg hidden md:inline-block"
>
  {word}
</h2> */}
<h2
  ref={ref}
  className={`absolute top-6 left-1/2 transform -translate-x-1/2 text-center z-20 portfolio-header-text-lg hidden md:inline-block wander-brown-text transition-opacity duration-300 ${
    ready ? 'opacity-100' : 'opacity-0'
  }`}
  style={{ minHeight: '80px' }} // adjust based on expected height range
>
  {word}
</h2>


{/* Mobile horizontal image (only shown on small screens) */}
<div className="md:hidden w-full relative" style={{padding:'none'}}>
  <Image
    src={horizontalImg.full}
    blurDataURL={horizontalImg.blur}
    alt={imageAlt}
    layout="intrinsic"
    width={1200}
    height={800}
    className="w-full h-auto"
       placeholder="blur"
                loading="lazy"
    
  />
</div>

      {/* Text panel */}
      <div className="flex items-center justify-center text-center w-full md:w-1/2">
  <div className="max-w-xl space-y-6 wander-black-text portfolio-header-text-m [&>p]:mt-0">
    {textBlock}
  </div>
</div>



    

      {/* Image panel */}
      <div className="hidden md:block w-1/2 relative h-full p-0 m-0">
      
        <Image
          src={imageUrl.full}
          blurDataURL={imageUrl.blur}
          alt={imageAlt}
          layout="responsive"
          width={1200}
          height={1800}
          className="object-cover"
            placeholder="blur"
                loading="lazy"
        />
      </div>
    </section>
  );
}
