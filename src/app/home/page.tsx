import PhotoGrid from "../components/imageLayouts/photoGrid";
import NavBar from "../components/navigation/navBar";
// import HomeHeader from "../components/home/homeHeader";
import PortfolioHeader from "../components/portfolio/portfolioHeader";
import LetsCollab from "../components/home/letsCollab";
import Footer from "../components/navigation/footer";
import {getCloudinaryUrl} from "../helpers/cloudinary";
export default function Home() {

  
  // const homeImageUrl =getCloudinaryUrl('Roaming%20Studio/Tours/DSC00092_qiwanc.jpg', false)
  // const homeImageUrl =getCloudinaryUrl('v1749761127/background%20images/main/IsleofSkye-082723--54_ejgbc0.jpg', true)
  // const homeImageUrl =getCloudinaryUrl('v1749761121/background%20images/main/Madeira-VerticalCit_rk64fa.jpg', true)
  const homeImageUrl = getCloudinaryUrl('v1749761120/background%20images/main/Hiriketiya-verticalcut_mwrxbo.jpg', true)
  const horizontalImgUrl = getCloudinaryUrl('v1749761129/background%20images/main/Hiriketiya-64_yosqcp.jpg', false)

  const gridImages = [
    'Roaming%20Studio/home%20grid/Kotor2024-76_duaydq.jpg',
    'Roaming%20Studio/home%20grid/CasaOlea-AliaYoussef--35_pbtblk.jpg',
    'Roaming%20Studio/home%20grid/Berat-47_hsh2jo.jpg',
    'Roaming%20Studio/home%20grid/Agra-85_wol8e1.jpg',
    'Roaming%20Studio/home%20grid/Cotswolds-092823--54_ixb8vq.jpg',
    'Roaming%20Studio/home%20grid/Edinburgh-092323--10_i2eipa.jpg',
    'Roaming%20Studio/home%20grid/KazbegiCabin-Collab-42_nymvdq.jpg',
    'v1749761215/background%20images/services/Youssef-011321-16_uo5rqi.jpg',
    'v1749764361/Roaming%20Studio/home%20grid/Granada-013022-6_mrvwa0.jpg',
    'v1749764335/Roaming%20Studio/home%20grid/Mdina--18_pup4sw.jpg',
    'v1749764325/Roaming%20Studio/home%20grid/CasaOlea-AliaYoussef--30_mpypx1.jpg',
    'v1749764327/Roaming%20Studio/home%20grid/WadiRum-031024--96_xay4t3.jpg',
    'v1749764368/Roaming%20Studio/home%20grid/IsleOfSkye-082723--75_pezqfl.jpg',
    'v1749764363/Roaming%20Studio/home%20grid/El_Nido-3e_vm7dc0.jpg',
    'v1749761212/background%20images/services/Nazare-031723--47_rq0fvn.jpg',
    'v1749764361/Roaming%20Studio/home%20grid/KeelomaExpedition-81_ckpw2c.jpg',
  ].map((path) => getCloudinaryUrl(path, true));
  return (
    <>
    <NavBar/>
    <PortfolioHeader
      word="ROAMING STUDIO"
      textBlock={
        <>
          <p >
          Roaming Studio specializes in story-driven content for tourism, hospitality, and destination brands in BC and beyond.
            </p>
            <p >
          After 3 years, travelling to 50 countries and over a decade photographing for global publications and brands - we now bring together our two greatest passions: travel and photography.

          </p>
        </>
      }
      imageUrl={homeImageUrl}
      horizontalImg={horizontalImgUrl}
      isReversed={true}
    />
   <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 bg-wander-brown">
      <PhotoGrid
     images={gridImages}/>
     </div>

     <LetsCollab/>
<Footer/>
</>
  );
}
