import Image from 'next/image';
import Link from 'next/link';
import { getCloudinaryUrl} from "../../helpers/cloudinary";
export default function LetsCollab() {
  
  const collabImgUrl = getCloudinaryUrl('v1749761132/background%20images/main/Madeira-041623-32_sjreck.jpg', false)
  return (
<div className="flex-container bg-true-white">

<h1 className="bc-green-text collab-h1 text-center ">

        Let&apos;s Work Together
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  <div className="text-column">
  <p className="wander-black-text collab-p text-lg leading-relaxed px-6 mb-6 text-center">
  We work with BC-based tourism, hospitality, and destination brands to create unique content that tells your story.
</p>
{/* <p className="wander-black-text collab-p text-lg leading-relaxed px-6 mb-6 text-center">
  We help your guests feel a connection to your accommodation before they’ve even stepped foot inside.
</p>
<p className="wander-black-text collab-p text-lg leading-relaxed px-6 mb-6 text-center">
  We capture the joy, excitement, and wonder of your experiences - before guests even book.
</p>
<p className="wander-black-text collab-p text-lg leading-relaxed px-6 mb-6 text-center">
  We create photos and videos that evoke emotion and bring your brand to life.
</p> */}
<p className="wander-black-text collab-p text-lg leading-relaxed px-6 mb-6 text-center">
  Every project is custom, so reach out with your idea - we’ll find the best way to make it happen together.
</p>

    <div className="flex justify-center">
      <Link href="/contact">
        <button className="bg-bc-green text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition pointer-cursor">
          Contact
        </button>
      </Link>
    </div>
  </div>
        <div className="overflow-hidden rounded-sm ">
          <Image
            src={collabImgUrl.full}
            blurDataURL={collabImgUrl.blur}
            alt="Behind the scenes working together"
            width={800}
            height={600}
             placeholder="blur"
                loading="lazy"
            sizes="(max-width: 940px) 100vw, (max-width: 1024px) 80vw, 50vw "
            className="w-full h-auto max-h-[70vh] object-contain"
            // loader={cloudinaryLoader}
          />
        </div>

      </div>
    </div>
  )
}
