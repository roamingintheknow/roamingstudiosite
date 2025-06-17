import Image from 'next/image';
import { getCloudinaryUrl } from '@/app/helpers/cloudinary';

type ImageItem = {
  id: string;
  isVertical: boolean;
};

type TwoColumnGridProps = {
  images: ImageItem[];
};

export default function TwoColumnGrid({ images }: TwoColumnGridProps) {
  const leftColumn: ImageItem[] = [];
  const rightColumn: ImageItem[] = [];

  let leftHeight = 0;
  let rightHeight = 0;

  images.forEach((img) => {
    const estimatedHeight = img.isVertical ? 3 : 2;

    if (leftHeight <= rightHeight) {
      leftColumn.push(img);
      leftHeight += estimatedHeight;
    } else {
      rightColumn.push(img);
      rightHeight += estimatedHeight;
    }
  });

  return (
    <div className="flex gap-6 px-6 py-6 bg-white max-w-5xl mx-auto">
      {[leftColumn, rightColumn].map((column, i) => (
        <div key={i} className="flex flex-col gap-6 w-1/2">
          {column.map((img, j) => {
            const { full, blur } = getCloudinaryUrl(img.id, img.isVertical);

            return (
              <Image
                key={j}
                src={full}
                blurDataURL={blur}
                alt={`Image ${j}`}
                width={img.isVertical ? 750 : 750}
                height={img.isVertical ? 1125 : 500}
                className="object-cover w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
                loading="lazy"
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
