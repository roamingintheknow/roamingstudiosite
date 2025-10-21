import PhotoGrid from "../components/imageLayouts/photoGrid";
import NavBar from "../components/navigation/navBar";
// import PortfolioHeader from "../components/portfolio/portfolioHeader";
import Hero  from "../components/home/hero";
// import LetsCollab from "../components/home/letsCollab";
import About from "../components/home/about";
import Footer from "../components/navigation/footer";

export const metadata = {
  title: "Roaming Studio",
  description: "Roaming Studio specializes in story-driven content for tourism, hospitality, and destination brands in BC and beyond.",
};

export default async function Home() {

  
  // const homeImageUrl = await getCloudinaryUrlWithBaseHero('v1749761120/background%20images/main/Hiriketiya-verticalcut_mwrxbo.jpg', true)
  // const horizontalImgUrl = await getCloudinaryUrlWithBaseHero('v1749761129/background%20images/main/Hiriketiya-64_yosqcp.jpg', false)

  const gridImagePaths = [
    "/images/home-grid-1.jpg",
    "/images/home-grid-2.jpg",
    "/images/home-grid-3.jpg",
    "/images/home-grid-4.jpg",
   "/images/home-grid-5.jpg",
    "/images/home-grid-6.jpg",
    "/images/home-grid-7.jpg",
    "/images/home-grid-8.jpg",
     "/images/home-grid-9.jpg",
    "/images/home-grid-10.jpg",
    "/images/home-grid-11.jpg",
    "/images/home-grid-12.jpg",
 "/images/home-grid-13.jpg",
    "/images/home-grid-14.jpg",
    "/images/home-grid-15.jpg",
    "/images/home-grid-16.jpg",
  ];

  // const gridImages = await Promise.all(
  //   gridImagePaths.map((path) => getCloudinaryUrlWithBaseSmall(path, true))
  // );

  return (
    <>
    <Hero/>
    <NavBar/>
    {/* <PortfolioHeader
      word="ROAMING STUDIO"
      textBlock={
        <>
          <p >
          Roaming Studio specializes in story-driven content for tourism, hospitality, and destination brands in BC and beyond.
            </p>
            <p >
          After 3 years spent travelling to 50 countries and over a decade spent photographing for global publications and brands - we now bring together our two greatest passions: travel and photography.

          </p>
         <p>
  We’re available for commissioned photo campaigns, UGC social media projects, and also offer image licensing. 
</p>
<p>  Every collaboration is fully customized to your brand and the story you’re trying to tell. So get in touch and let’s chat about how we can work together!
</p>

        </>
      }
      imageUrl={homeImageUrl}
      horizontalImg={horizontalImgUrl}
      isReversed={true}
    /> */}
<div className="py-18 px-6 md:px-0 space-y-6 leading-relaxed max-w-3xl mx-auto font-semibold text-sm text-center">
<p className="block md:hidden">
  Roaming Studio specializes in story-driven content for tourism, hospitality, and destination brands in BC and beyond.
</p>

    <p>
After a decade of photographing for global brands and publications, and three years traveling across 50+ countries, we’ve combined our greatest passions: travel and photography.
</p>
    <p>
Rooted in documentary and editorial storytelling, we create natural atmospheric visuals that bring destinations to life. Our campaigns for tourism boards, boutique hotels, and adventure brands across 15+ countries share travel in a way that feels authentic, inspiring, and real.
</p>
</div>
   <div className="px-4 sm:px-12 md:px-12 lg:px-24 xl:px-32 bg-true-white">
      <PhotoGrid
     images={gridImagePaths}/>
     </div>

     {/* <LetsCollab/> */}
     <About/>
<Footer/>
</>
  );
}
