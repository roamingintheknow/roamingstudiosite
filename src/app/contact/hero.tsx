'use client';
import Image from "next/image";
import blurData from '@/app/helpers/blurData.json' assert { type: 'json' };

// tell TS this is a generic string-keyed object
const blurDataMap = blurData as Record<string, string>;

export default function Hero() {

  return (
    <>
  
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
     src="/images/contact/contact-hero.jpg"
     alt="Roaming Studio accomodation portfolio hero"
     priority
     fill
     sizes="(max-width: 768px) 95vw, 1200px"
     placeholder="blur"
     blurDataURL={blurDataMap['home-hero.jpg']}
     className="object-cover object-[center_70%]"
   />
   
        {/* Optional overlay for text readability */}
        <div className="absolute inset-0 bg-black/25" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pb-36 text-white z-10">

        <h1 className="true-white-text collab-h1 text-center ">
          Contact
        </h1>
      </div>

      </div>
    </section>
    </>
  );
}
