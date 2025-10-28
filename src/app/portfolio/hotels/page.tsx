'use client'
import NavBar from "../../components/navigation/navBar";
// import PortfolioHeader from "../../components/portfolio/portfolioHeader";
import Hero from "./hero";
import TwoColumnGrid from "../../components/imageLayouts/twoColumnGrid"
import PhotoGrid from "../../components/imageLayouts/photoGrid";
import Footer from "../../components/navigation/footer";
import { useMobile } from "@/app/helpers/hooks";
import {useState, useEffect} from 'react';
import { getCloudinaryUrlWithBaseSmall} from '@/app/helpers/cloudinary';
// export const metadata = {
//   title: "Portfolio | Roaming Studio",
//   description: "A collection of photography work Roaming Studio has done for hotels in the past.",
// };

export default function Hotels() {
 const isMobile= useMobile()
const images = [

{id:'Roaming%20Studio/Hotels/new%20additions%202025/Tofino2025-20_twvnja.jpg', isVertical:true},
{id:'Roaming%20Studio/Hotels/new%20additions%202025/Tofino2025-22_jylzku.jpg',isVertical:false},
{id:'Roaming%20Studio/Hotels/new%20additions%202025/Sechelt-RoamingStudio-1-web_snb8mf.jpg', isVertical:true},
{id:'Roaming%20Studio/Hotels/new%20additions%202025/Sechelt-11_gpbzzp.jpg', isVertical:false},
{id:'Roaming%20Studio/Hotels/new%20additions%202025/TinCanRanch-RITKcollab-28_eyuze1.jpg',isVertical:true},
{id:'Roaming%20Studio/Hotels/new%20additions%202025/TinCanRanch-RITKcollab-11_pt4cei.jpg', isVertical:false},
{ id: 'Roaming%20Studio/Hotels/PPVCxAliaYoussef-Oct2024--25_svhlkx.jpg', isVertical: true },
    { id: 'Roaming%20Studio/Hotels/PPVCxAliaYoussef-Oct2024--1_ayupmg.jpg', isVertical: true },
  { id: 'Roaming%20Studio/Hotels/PPVCxAliaYoussef-Oct2024--2_vncjfr.jpg', isVertical: false }, 
    { id: 'Roaming%20Studio/Hotels/Youssef-011321-3_brpcdy.jpg', isVertical: false }, 
  { id: 'Roaming%20Studio/Hotels/Youssef-011321-18_zaiwet.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Hotels/Youssef-011321-42_d4yiai.jpg', isVertical: false }, 

    { id: 'Roaming%20Studio/Hotels/DareLisbon-AY-Collaboration-23_zdaxvf.jpg', isVertical: false },
  { id: 'Roaming%20Studio/Hotels/DareLisbon-AY-Collaboration-5_xmtdma.jpg', isVertical: true }, 

    { id: 'Roaming%20Studio/Hotels/CasaOlea-AliaYoussef--35_ruljx4.jpg', isVertical: true },
    { id: 'Roaming%20Studio/Hotels/CasaOlea-AliaYoussef--45_nrf89c.jpg', isVertical: false }, 
    { id: 'Roaming%20Studio/Hotels/CasaOlea-AliaYoussef--30_mfuwft.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Hotels/CasaOlea-AliaYoussef--41_hx720v.jpg', isVertical: false },
    { id: 'Roaming%20Studio/Hotels/Kotor2024-76_ioqytc.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Hotels/CasaOlea-AliaYoussef--40_o0hwpx.jpg', isVertical: false },
    // { id: 'Roaming%20Studio/Hotels/KazbegiCabin-Collab-25_wgfbp8.jpg', isVertical: true }, 
    // { id: 'Roaming%20Studio/Hotels/KazbegiCabin-Collab-40_wk4uh9.jpg', isVertical: false },
    // { id: 'Roaming%20Studio/Hotels/PanPacificMountainside-AliaYoussef-1_llsadi.jpg', isVertical: true }, 
    // { id: 'Roaming%20Studio/Hotels/EcoCabin-Collaboration-2023-2_ogkgas.jpg', isVertical: false },
    // { id: 'Roaming%20Studio/Hotels/KazbegiCabin-Collab-28_evyuqx.jpg', isVertical: true }, 
    // { id: 'Roaming%20Studio/Hotels/DJI_0929_uxjaec.jpg', isVertical: false },

    
  ];

const [gridImages, setGridImages] = useState<string[]>([]);

useEffect(() => {
  let mounted = true;

  const fetchImages = async () => {
    const urls = await Promise.all(
      images.map(async (img) => {
        const { full } = await getCloudinaryUrlWithBaseSmall(img.id, img.isVertical);
        return full; // just the string URL
      })
    );

    if (mounted) setGridImages(urls);
  };

  fetchImages();
  return () => { mounted = false; };
}, []);
  return (
    <>
    <NavBar/>
     <Hero/>
{/* <PortfolioHeader
  word="HOTELS"
  textBlock={
    <>
      <p>
We love to blend our warm lifestyle aesthetic with an architectural eye to create photographs that tell the story of your brand.
</p>

<p>
We’re especially drawn to sustainability-conscious, locally owned hotels, and love crafting visual stories that highlight the thoughtful details, meaningful design, and sense of place that make your property unique.
</p>
    </>
  }
  imageUrl={imageUrl}
  horizontalImg={imageUrl}
/> */}
<div className="py-18 px-18 md:px-0 space-y-6 leading-relaxed max-w-3xl mx-auto font-semibold text-sm text-center">

     <p>
We love to blend our warm lifestyle aesthetic with an architectural eye to create photographs that tell the story of your brand.
</p>

<p>
We’re especially drawn to sustainability-conscious, locally owned hotels, and love crafting visual stories that highlight the thoughtful details, meaningful design, and sense of place that make your property unique.
</p>
</div>
 <div className="px-4 sm:px-6 md:px-12 lg:px-32 xl:px-32 bg-white">

{isMobile ? (
  <PhotoGrid images={gridImages} />
) : (
  <TwoColumnGrid images={images} />
)}



 </div>
 <Footer/>
</>
  );
}
