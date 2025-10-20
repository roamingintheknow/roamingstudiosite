import NavBar from "../components/navigation/navBar";
import PortfolioHeader from "../components/portfolio/portfolioHeader";
import Footer from "../components/navigation/footer";
import Image from 'next/image';
import { getCloudinaryUrl,cloudinaryLoader } from "../helpers/cloudinary";

export const metadata = {
  title: "About | Roaming Studio",
  description: " We are a media company that creates story-driven content for tourism, hospitality, and destination brands in BC and beyond",
};

export default function About() {

  // const BackgroundImgUrl = getCloudinaryUrl('v1749761159/background%20images/about/CoupleShoot-2024-6_a4x1dp.jpg', true)
  const BackgroundImgUrl = getCloudinaryUrl('v1749761156/background%20images/about/CoupleShoot-2024-29_womqfw.jpg', true)
  const HorizontalImgUrl = getCloudinaryUrl('v1749877627/background%20images/about/CoupleShoot-2024-6-wide_horizontal_ohqx5i.jpg', false)
  const collageUrl = getCloudinaryUrl('v1750034193/background%20images/about/banner-small_fdbc5m.jpg', false)
  
  return (
    <>
    <NavBar/>
    <div>
    <PortfolioHeader
  word="ABOUT US"
  textBlock={
    <>
      <p>

        
        We’re Alia and Shawn - the wife/husband duo behind BC-based Roaming Studio. We are a media company that creates story-driven content for tourism, hospitality, and destination brands in BC and beyond. 
        


      </p>
      <p>
      After 3 years, travelling to 50 countries and over a decade photographing for global publications and brands - we now bring together our two greatest passions: travel and photography.
      </p>
    </>
  }
  imageUrl={BackgroundImgUrl}
  horizontalImg={HorizontalImgUrl}
  isReversed={false}
/>

</div>
<section className="w-full   bg-white">
  <div className="">

  <div className="grid md:grid-cols-1 gap-6 md:gap-10 px-6  py-20 ">
  <div className="flex items-center">
    <div className="about-p wander-black-text">
      <p>
        {/* Drawing on our documentary and editorial roots, we bring a natural, atmospheric aesthetic to every project — telling visual stories that immerse viewers, spark curiosity, and inspire meaningful travel. */}
        Drawing on our documentary and editorial roots, we bring a natural, atmospheric aesthetic to every project — sharing travel in a way that’s authentic, inspiring, and useful.
     
      </p>
    </div>
  </div>

  <div className="flex items-center">
    <div className="about-p wander-black-text">
      <p>
        We’ve partnered with tourism-focused brands in over 15 countries — from tour operators like <strong>Why Not Adventures</strong> and <strong>Go Sail Croatia</strong>, to adventure vehicle companies such as <strong>VI Overlander</strong> and <strong>Tuktukrental.com</strong>, to boutique hotels like <strong>Dare Lisbon</strong> and <strong>NEYA Lisbon</strong>. Our campaigns help bring destinations and their unique experiences to life through story-driven visuals.
      </p>
    </div>
  </div>
  <div className="flex items-center">
    <div className="about-p wander-black-text">
      <p>
      With 10+ years of documentary and editorial photography experience - and three years traveling across 50+ countries - we create emotionally resonant content for tourism boards, boutique hotels, tour operators, and hospitality brands worldwide.
      </p>
    </div>
  </div>


</div>

<div className="w-full">
  <Image
    src={collageUrl.full}
    blurDataURL={collageUrl.blur}
    alt="About collage"
    width={1920}
    height={1080}
    className="w-full h-auto object-cover"
     placeholder="blur" 
  loading="lazy"
  loader={cloudinaryLoader}
  />
</div>


<div className="w-full px-6 pb-10 md:pb-0 md:pt-10">

  <div className="flex flex-col-reverse md:flex-col three-tile-block items-center text-center wander-black-text about-p-lg  ">

    {/* Text */}
    <p className="italic max-w-4xl mx-auto px-6 md:px-48  ">
      We are advocates of sustainable travel and tourism. We love partnering with locally-owned and operated brands who show a commitment to sustainable, ethical, and responsible business practices.
    </p>

    {/* Images */}
    <div className="w-full py-12 px-0 md:px-24">

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 justify-items-center">
        {[
          {
            src: getCloudinaryUrl('v1749764368/Roaming%20Studio/home%20grid/IsleOfSkye-082723--75_pezqfl.jpg', true),
            alt: 'Tourism 1',
          },
          {
            src: getCloudinaryUrl('v1749764355/Roaming%20Studio/home%20grid/Nazare-031723--47_jzgtbq.jpg', true),
            alt: 'Tourism 2',
          },
          {
            src: getCloudinaryUrl('v1749761208/background%20images/services/PicoDoAreeiro--51_x3124h.jpg', true),
            alt: 'Tourism 3',
          },
        ].map(({ src, alt }, idx) => (
          <div
            key={idx}
            className="w-full max-w-xs shadow overflow-hidden flex items-center justify-center bg-white"
          >
            <Image
              src={src.full}
              blurDataURL={src.blur}
              alt={alt}
              width={600}
              height={900}
              placeholder="blur"
                loading="lazy"
                loader={cloudinaryLoader}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</div>



    
  </div>
</section>



{/* <OfferBlock/> */}

<Footer/>
</>
  );
}
