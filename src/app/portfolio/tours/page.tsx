import NavBar from "../../components/navigation/navBar";
import TwoColumnGrid from "../../components/imageLayouts/twoColumnGrid";
import Footer from "../../components/navigation/footer";
import Hero from './hero';

export const metadata = {
  title: "Portfolio | Roaming Studio",
  description: "A collection of photography work Roaming Studio has done for tours in the past.",
};
export default function Hotels() {

  const images = [
        {id: 'Roaming%20Studio/Tours/new%20acdition%202025/Egmont-RoamingStudio-6-web_ce3o4m.jpg', isVertical:true },
    {id: 'Roaming%20Studio/Tours/new%20acdition%202025/Egmont-RoamingStudio-1-web_w85l7n.jpg', isVertical: false },
    {id:'Roaming%20Studio/Tours/new%20acdition%202025/Sechelt-RoamingStudio-6-web_zzwct4.jpg',isVertical:true},
    { id: 'Roaming%20Studio/Tours/DSC00092_qiwanc.jpg', isVertical: false }, 
        { id: 'Roaming%20Studio/Tours/Kazbegi-061323--32_ro3xnn.jpg', isVertical: true }, 
        {id:'Roaming%20Studio/Tours/new%20acdition%202025/Tofino2025-27_ysmasm.jpg',isVertical:false},
    { id: 'Roaming%20Studio/Tours/DSC01205_vq5j4u.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Tours/Vancouver_Island_Overlander_x_Roaming_In_The_Know-_2024-2_ry5suw.jpg', isVertical: false }, 
    {id:'Roaming%20Studio/Tours/new%20acdition%202025/TinHatMountain-RoamingStudio-1-web_yd9g8n.jpg',isVertical:true},
    {id:'Roaming%20Studio/Tours/new%20acdition%202025/Egmont-6_je8cvm.jpg',isVertical:false},



    // { id: 'Roaming%20Studio/Tours/VancouverIsland-23_j77goz.jpg', isVertical: false }, 
    { id: 'Roaming%20Studio/Tours/TukTukRental-RITK-Collaboration-05_idhzfy.jpg', isVertical: true }, 
    // { id: 'Roaming%20Studio/Tours/Wales-072122-42_zyexfz.jpg', isVertical: true }, 
// {id:'Roaming%20Studio/Tours/new%20acdition%202025/DesolationSound-3_dudcnb.jpg',isVertical:false},
{id:'Roaming%20Studio/Tours/new%20acdition%202025/Tofino-73_n6x1ap.jpg',isVertical:false},

{id:'Roaming%20Studio/Tours/new%20acdition%202025/VancouverIsland-54_sdomcj.jpg',isVertical:true},
{id:'Roaming%20Studio/Tours/new%20acdition%202025/VancouverIsland-46_ynaqof.jpg',isVertical:false},
    // { id: 'Roaming%20Studio/Tours/Wales-072122-125_pvbl56.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Tours/Madeira-041023--99_a8zlxz.jpg', isVertical: true }, 
    {id:'Roaming%20Studio/Tours/new%20acdition%202025/Egmont-RoamingStudio-7-web_fwz3vi.jpg',isVertical:false},
    // tinhat hut sunset
        {id:'Roaming%20Studio/Tours/new%20acdition%202025/TinHatMountain-RoamingStudio-2-web_vdnnu4.jpg',isVertical:true},
    { id: 'Roaming%20Studio/Travel/PicoDoAreeiro--50_gmktlu.jpg', isVertical: false },   
    {id:'Roaming%20Studio/Tours/new%20acdition%202025/TinHatMountain-RoamingStudio-3-web_acw78b.jpg',isVertical:true},

    {id:'Roaming%20Studio/Tours/TukTukRental-RITK-Collaboration-27_w7hmpw.jpg',isVertical:false},

        // { id: 'Roaming%20Studio/Tours/KeelomaExpedition-81_lk3jzq.jpg', isVertical: true }, 


// {id:'Roaming%20Studio/Tours/new%20acdition%202025/Tofino-104_vwtigj.jpg',isVertical:false},

  ];
  return (
    <>
    <NavBar/>
    <Hero/>
{/* <PortfolioHeader
  word="TOURS & EXPERIENCES"
  textBlock={
    <>
      <p>
      We&apos;re adventure travellers who say yes to everything - from hiking in the mountains of Pakistan, riding $5 ziplines in Ecuador, to driving a tuk-tuk 1,000 km across Sri Lanka. We live for new experiences - and love photographing them even more.     
      </p>
    </>
  }
  imageUrl={imageUrl}
  horizontalImg={imageUrl}
/> */}
 <div className="px-4 sm:px-6 md:px-12 lg:px-32 xl:px-32 bg-white">
<div className="py-18 px-18 md:px-0 space-y-6 leading-relaxed max-w-3xl mx-auto font-semibold roaming-text-size-3 bc-green-text  text-center">

  <p>
          We&apos;re adventure travellers who say yes to everything - from hiking in the mountains of Pakistan, riding $5 ziplines in Ecuador, to driving a tuk-tuk 1,000 km across Sri Lanka. We live for new experiences - and love photographing them even more.     

  </p>
  </div>
 <TwoColumnGrid images={images}/>


 </div>

<Footer/>
</>
  );
}
