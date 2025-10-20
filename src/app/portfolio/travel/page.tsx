import NavBar from "../../components/navigation/navBar";
import TwoColumnGrid from "../../components/imageLayouts/twoColumnGrid";
import Footer from "../../components/navigation/footer";
import Hero from './hero';
export const metadata = {
  title: "Portfolio | Roaming Studio",
  description: "A collection of photography work Roaming Studio has done for travel brands in the past.",
};

export default function Travel() {
  const images = [
    { id: 'Roaming%20Studio/Travel/WadiRum-031024--96_muckv2.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Madeira-041623-32_sssa1e.jpg', isVertical: false }, 
    { id: 'Roaming%20Studio/Travel/Mdina--12_ocfpz1.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Guatape-040922-8_dnfi6e.jpg', isVertical: false }, 

    { id: 'Roaming%20Studio/Travel/Mdina--18_dujq8p.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Cappadocia-110422-8_bfnmcc.jpg', isVertical: false }, 
    { id: 'Roaming%20Studio/Travel/WadiRum-031024--47_jalsym.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Granada-020221-71_yuqunu.jpg', isVertical: false }, 

    { id: 'Roaming%20Studio/Travel/IsleOfSkye-082723--75_ltkr2a.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/IsleofSkye-082723--67_pdzmw3.jpg', isVertical: false }, 
    { id: 'Roaming%20Studio/Travel/Glencoe-091023--20_chmccn.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Glencoe-091023--23_sshtrg.jpg', isVertical: false }, 


    { id: 'Roaming%20Studio/Travel/Edinburgh-092323--10_ckjgkh.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Edinburgh-092323--13_ms4jmq.jpg', isVertical: false }, 
    { id: 'Roaming%20Studio/Travel/Theth-51_cmcc0b.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Berat-47_ikhq7f.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Cefalu-100823--5_rwnilj.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Kazbegi-061323--3_thzj48.jpg', isVertical: true }, 

    { id: 'Roaming%20Studio/Travel/NorthernIreland-080123--45_ay3l4x.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Mostar-091522--50e_dsmlxb.jpg', isVertical: true },
    { id: 'Roaming%20Studio/Travel/Kyoto-61_ipyoas.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Quindio-042622-56_cq56qy.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/TukTukRental-RITK-Collaboration-10_smpidh.jpg', isVertical: true }, 

    { id: 'Roaming%20Studio/Travel/Huacachina-061922-26e_txfxv8.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/El_Nido-3e_ymrrbs.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Kyoto-2_zfwum9.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Agra-85_waoc3g.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Seoul-9_qpindj.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/Nazare-031723--47_cwxmwp.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel//BuchkonHanokVillage-20_daumet.jpg', isVertical: false }, 
    ];
  return (
    <>
    <NavBar/>
    <Hero/>
    <div className="py-18 space-y-6 leading-relaxed max-w-3xl mx-auto font-semibold text-sm text-center">

       <p>
      Travel and photography are our greatest passions. We love arriving in a new place and noticing the small details -- the moments framed between archways, the way the light shifts throughout the day, and the visual character that makes each destination feel one-of-a-kind.
      </p>

      <p>
We’d love to collaborate with you to tell a visual story about the place you call home — one that captures its essence and invites others to experience it for themselves.
</p>
</div>
{/* <PortfolioHeader
  word="TRAVEL"
  textBlock={
    <>
          <p>
      Travel and photography are our greatest passions. We love arriving in a new place and noticing the small details -- the moments framed between archways, the way the light shifts throughout the day, and the visual character that makes each destination feel one-of-a-kind.
      </p>

      <p>
We’d love to collaborate with you to tell a visual story about the place you call home — one that captures its essence and invites others to experience it for themselves.
</p>
    </>
  }
  imageUrl={imageUrl}
  horizontalImg={imageUrl}
/> */}
 <div className="px-4 sm:px-6 md:px-12 lg:px-32 xl:px-32 bg-white">
 <TwoColumnGrid images={images}/>


 </div>

<Footer/>
</>
  );
}
