import Link from 'next/link';

export default function OfferBlock() {
  return (
    <>
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pb-24 bg-wander-white">
      <h1 className='bc-green-text about-h1'>What We Offer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-2 bg-wander-white">
        <div>
          <h2 className='wander-black-text about-h2 pb-6'>Photography</h2>
          <p  className='wander-black-text offer-p '>We specialize in documentary-style photography that tells the unique story of travel, tourism, and hospitality brands. With over a decade of experience, we create warm, emotive imagery that connects deeply with audiences — whether for social media, your website, or an editorial in a publication.</p>
        </div>
        <div>
          <h2 className='wander-black-text about-h2 pb-6'>UGC</h2>
          <p  className='wander-black-text offer-p '>We specialize in beautiful scroll-stopping vertical video content, focused on gaining views, driving engagement, and telling a visual story. We use the latest iPhone technology, as well as drone technology, to capture high-resolution 16:9 videos that you’ll want to use again and again in your social media marketing. </p>
        </div>
       
      </div>
      <div className="pt-8 flex justify-center">
        <Link href="/quote">
                <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition pointer-cursor">
                  Request a Quote
                </button>
              </Link>
      </div>
    </div>
</>
  )}
