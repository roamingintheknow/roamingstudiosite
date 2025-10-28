import Image from "next/image";

export default function About() {
  return (
    <>
    <div className="bg-wander-white px-4 py-2 pb-18">
      <h1 className="bc-green-text collab-h1 text-center ">

        About Us
      </h1>
      
      <div className="mx-auto flex flex-col md:flex-row items-center gap-12 max-w-5xl px-6 pt-4">
        {/* IMAGE COLUMN */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="overflow-hidden ">
            <Image
              src="/images/home-about.jpg"
              blurDataURL="/images/home-about-blur.jpg"
              alt="Behind the scenes working together"
              width={400}
              height={600}
              placeholder="blur"
              loading="lazy"
              sizes="(max-width: 768px) 70vw, (max-width: 1024px) 40vw, 25vw"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* TEXT COLUMN */}
        <div className="w-full md:w-2/3 text-center">
          <p className="wander-black-text text-sm leading-relaxed mb-6 font-semibold">
            We’re Alia and Shawn, the wife and husband duo behind BC-based Roaming Studio.
          </p>

          <p className="wander-black-text text-sm leading-relaxed mb-6 font-semibold">
            Alia has been a professional photographer for over half her life, since she was 14 years old.
            She received her BFA in Photography and MFA in Documentary Media from Ryerson University (since renamed to Toronto Metropolitan University).
            Primarily working as a portrait photographer, she has photographed for major global brands such as Dove, Apple, and Getty Images.
            She is also a frequent contributor to Canadian publications such as the Globe and Mail and Macleans Magazine.
          </p>

          <p className="wander-black-text text-sm leading-relaxed mb-6 font-semibold">
            Shawn received his BEng in Aerospace Engineering and worked as a software engineer for 5 years.
            While full-time travelling, he discovered his love for photography as well, in particular drone photography.
            His natural inclination for more tech-driven roles leant itself well to the art.
          </p>

          <p className="wander-black-text text-sm leading-relaxed font-semibold">
            In 2022, Shawn and Alia decided to give up their apartment and sell their things to travel the world for a year.
            That one year turned into 3.5 years travelling to over 50 countries. During that time, they grew a travel platform called
            <span className="italic"> Roaming in the Know</span>, to share comprehensive guides to the destinations they visited.
            Their passion for travel photography grew naturally in tandem, and now they are excited to work with tourism, travel,
            and hospitality brands in Canada.
          </p>
        </div>
      </div>
      

    </div>
    <div className="flex flex-col items-center justify-center gap-12 max-w-5xl px-6 mx-auto py-12">
  <p className="wander-black-text font-bold text-lg leading-relaxed text-center">
    Some brands we have worked with:
  </p>
</div>
<div className="grid grid-cols-3 sm:grid-cols-6 gap-8 justify-items-center items-center max-w-5xl w-full mx-auto pb-8">
    <Image
      src="/images/brands/sunshine-coast-tourism-logo.jpg"
      alt="Sunshine Coast Tourism Logo"
      width={80}
      height={40}
      className="h-auto w-20 object-contain"
    />
    <Image
      src="/images/brands/whynotadventures-logo.png"
      alt="Why Not Adventures Logo"
      width={80}
      height={40}
      className="h-auto w-20 object-contain"
    />
    <Image
      src="/images/brands/pan-pacific-whistler-logo.png"
      alt="Pan Pacific Whistler Logo"
      width={80}
      height={80}
      className="h-auto w-24 object-contain"
    />
      <Image
      src="/images/brands/tuktuk-rental-.com-logo.png"
      alt="Tuktuk Rental Logo"
      width={40}
      height={40}
      className="h-auto w-15 object-contain"
    />
    <Image
      src="/images/brands/go-croatia-sail-logo.png"
      alt="Go Croatia Sail Logo"
      width={70}
      height={70}
      className="h-auto w-25 object-contain"
    />
    <Image
      src="/images/brands/egmont-adventure-center-logo.png"
      alt="Egmont Adventure Center Logo"
      width={40}
      height={40}
      className="h-auto w-20 object-contain"
    />
  
  </div>
    </>
  );
}
