'use client';
import Image from "next/image";
import Head from "next/head";
import blurData from '@/app/helpers/blurData.json' assert { type: 'json' };
import { useMobile } from "@/app/helpers/hooks";
// tell TS this is a generic string-keyed object
const blurDataMap = blurData as Record<string, string>;

export default function Hero() {
  const imageSize = 500; // this just sets intrinsic aspect ratio (3:2)
  const isMobile=useMobile()
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/tours/tour-hero.jpg"
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
<div className="relative w-full aspect-[2/3] md:aspect-[3/1.7] overflow-hidden">
  <Image
    src="/images/travel/travel-hero.jpg"
    alt="Roaming Studio travel portfolio hero"
    priority
  fetchPriority="high"
    width={isMobile? imageSize*2:imageSize * 3}
    height={isMobile? imageSize*3:imageSize * 1.7}
     sizes="85vw, 1200px"
    placeholder="blur"
blurDataURL={blurDataMap['travels-hero.jpg'] ?? blurDataMap['home-hero.jpg']}
    className="object-cover object-[center_70%] w-full h-full"
  />

        {/* Optional overlay for text readability */}
        <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-36 text-white z-10">

        <h1 className="true-white-text collab-h1 text-center ">
          Travel & Lifestyle
        </h1>
      </div>

      </div>
    </section>
    </>
  );
}
