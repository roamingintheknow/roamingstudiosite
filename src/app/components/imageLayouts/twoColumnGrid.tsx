'use client';
import Image from 'next/image';
import { getCloudinaryUrlWithBaseSmall,cloudinaryLoader } from '@/app/helpers/cloudinary';
import { useState, useEffect } from 'react';
import { useMobile } from "@/app/helpers/hooks";

type FetchedImage = {
  id: string;
  isVertical: boolean;
  full: string;
  blur: string;
};

type ImageItem = {
  id: string;
  isVertical: boolean;
};

type TwoColumnGridProps = {
  images: ImageItem[];
};

export default function TwoColumnGrid({ images }: TwoColumnGridProps) {
 const [leftColumn, setLeftColumn] = useState<FetchedImage[]>([]);
  const [rightColumn, setRightColumn] = useState<FetchedImage[]>([]);
  const isMobile = useMobile();
  useEffect(() => {
    async function fetchImages() {
      const left: FetchedImage[] = [];
      const right: FetchedImage[] = [];

      let leftHeight = 0;
      let rightHeight = 0;

      for (const img of images) {
        const { full, blur } = await getCloudinaryUrlWithBaseSmall(img.id, img.isVertical);
        const fetchedImg = { ...img, full, blur };
        const estimatedHeight = img.isVertical ? 3 : 2;

        if (leftHeight <= rightHeight) {
          left.push(fetchedImg);
          leftHeight += estimatedHeight;
        } else {
          right.push(fetchedImg);
          rightHeight += estimatedHeight;
        }
      }

      setLeftColumn(left);
      setRightColumn(right);
    }

    fetchImages();
  }, [images]);

  return (
    <div className="flex gap-6 px-6 py-6 bg-white max-w-5xl mx-auto">
      {[leftColumn, rightColumn].map((column, i) => (
        <div key={i} className="flex flex-col gap-6 w-1/2">
          {column.map((img, j) => (
<Image
  key={img.id}
  src={img.full}
  blurDataURL={img.blur}
  alt={`Image ${j}`}
  width={isMobile ? 1200 : 2400} 
  height={isMobile 
    ? Math.round((img.isVertical ? 8 : 10) / (img.isVertical ? 10 : 8) * 1200) 
    : Math.round((img.isVertical ? 8 : 10) / (img.isVertical ? 10 : 8) * 2400)
  }
  className="object-cover w-full h-auto"
  sizes="(max-width: 480px) 70vw, (max-width: 756px) 80vw, (max-width: 1024px) 90vw, (max-width: 1536px) 70vw, 75vw"
  placeholder="blur"
  loading="lazy"
  quality={100}
  loader={cloudinaryLoader}
/>



          ))}
        </div>
      ))}
    </div>
  );
}