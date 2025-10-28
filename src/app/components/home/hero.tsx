'use client';
import Image from "next/image";
import Head from "next/head";
import blurData from '@/app/helpers/blurData.json' assert { type: 'json' };
import { useMobile } from "@/app/helpers/hooks";
import {useState, useEffect} from 'react';
// tell TS this is a generic string-keyed object
const blurDataMap = blurData as Record<string, string>;

export default function Hero() {
  const isMobile = useMobile()
const [pixelDensity, setPixelDensity] = useState(1)

  useEffect(() => {
    setPixelDensity(window.devicePixelRatio > 1 ? 2 : 1)
  }, [])
const width = (isMobile ? 800 : 1600) * pixelDensity;
const height = (isMobile ? 1200 : Math.round(1600 / (3 / 1.7))) * pixelDensity;

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
href={isMobile ? "/images/home-hero-mobile.jpg" : "/images/home-hero.jpg"}
          imageSrcSet="/images/home-hero.jpg 1200w, /images/home-hero@2x.jpg 2400w"
          imageSizes="95vw"
        />
      </Head>
    <section className="relative w-full bg-black">
      {/* Transparent header */}
        {/* <Image
          src="/images/home-logo.png"
          alt="Roaming Studio portfolio hero"
          priority
          width={imageSize * 1/20}
          height={imageSize * 1/20}
          sizes="10vw"
          className="object-cover object-center "
        /> */}
  
 

      {/* 3:2 hero image container */}
<div className="relative w-full aspect-[2/3] md:aspect-[3/1.7] overflow-hidden bg-black">
  <Image
    src={ "/images/home-hero.jpg"}
    alt="Roaming Studio portfolio hero"
    priority
    fetchPriority="high"
    quality={90}
 width={width}
            height={height}
            sizes="(max-width: 768px) 95vw, 1600px"

    placeholder="blur"
    blurDataURL={blurDataMap['home-hero.jpg']}
    className="object-cover object-[center_70%] w-full h-full"
  />

  {/* Optional overlay for text readability */}
  <div className="absolute inset-0 bg-black/25" />

  {/* Centered bottom hero text (desktop only) */}
  <div className="hidden md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center md:text-center md:px-4 md:pb-36 text-white z-10">
    <p className="mt-4 max-w-xl text-base md:text-lg italic text-white/90 font-bold">
      Roaming Studio specializes in story-driven content for tourism, hospitality, and destination brands in BC and beyond.
    </p>
  </div>
</div>

    </section>
    </>
  );
}
