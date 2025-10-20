import Image from 'next/image';
import {cloudinaryLoader} from '@/app/helpers/cloudinary';
type ImageUrlPair = {
  full: string;
  blur: string;
};

type HomeHeaderProps = {
  word: string;
  textBlock: React.ReactNode;
  imageUrl: ImageUrlPair;
  imageAlt?: string;
};

export default function HomeHeader({
  word,
  textBlock,
  imageUrl,
  imageAlt = 'Home Page Image',
}: HomeHeaderProps) {
  return (
    <section className="relative w-full h-[120vh] flex flex-col md:flex-row">
      {/* Word at the top center */}
      <h2
        className="absolute top-6 left-1/2 transform -translate-x-1/2 font-extrabold wander-brown-text text-center z-20 portfolio-header-text-xlg"
        
      >
        {word}
      </h2>

      {/* Fullscreen background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageUrl.full}
          blurDataURL={imageUrl.blur}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          placeholder="blur" 
          loading="lazy"
          loader={cloudinaryLoader}
        />
      </div>


   




      <div className="hidden md:block w-1/2" />

      <div className="w-full md:w-1/2 bg-black/70 text-white flex items-center justify-center px-6 md:px-12 py-12 z-10 bg-true-white py-20">
  <div className="max-w-xl text-center space-y-6 wander-black-text px-8 md:px-20 lg:px-28 about-p">
    {textBlock}
  </div>
</div>
    </section>
  );
}
