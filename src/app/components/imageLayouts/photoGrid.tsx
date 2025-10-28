import Image from 'next/image';
// import { cloudinaryLoader } from '@/app/helpers/cloudinary';
import blurData from '@/app/helpers/blurData.json' assert { type: 'json' };

// tell TS this is a generic string-keyed object
const blurDataMap = blurData as Record<string, string>;
type PhotoGridProps = {
  images: string[];
};

export default function PhotoGrid({ images }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-true-white pb-18">
      {images.map((url, index) => {
      const imageName = url.split('/').pop()
        return(
    <div key={index} className="overflow-hidden shadow-md bg-true-white aspect-[2/3]">
  <Image
    src={url}
    alt={`Photo ${index + 1}`}
    width={400}   
    height={600}  
    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
    className="object-cover w-full h-full shadow-md"
    placeholder="blur"
    loading="lazy"
     blurDataURL={blurDataMap[imageName|| 'home-grid-1.jpg'] ?? blurDataMap['home-grid-1.jpg'] ?? ''}
 
    // loader={cloudinaryLoader}
  />
</div>
        )
      }
      
  
      )}
    </div>
  );
}
