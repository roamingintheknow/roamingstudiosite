import Image from 'next/image';
type ImageUrlPair = {
  full: string;
  blur: string;
};
type PhotoGridProps = {
  images: ImageUrlPair[];
};

export default function PhotoGrid({ images }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-wander-brown py-18">
      {images.map((url, index) => (
        <div key={index} className="overflow-hidden shadow-md bg-wander-brown">
          <Image
  src={url.full}
  blurDataURL={url.blur}
  alt={`Photo ${index + 1}`}
  width={600}
  height={800}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  className="object-cover w-full h-auto  shadow-md"
 placeholder="blur"
                loading="lazy"
/>
        </div>
      ))}
    </div>
  );
}
