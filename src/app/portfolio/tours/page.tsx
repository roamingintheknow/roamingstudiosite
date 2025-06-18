import NavBar from "../../components/navigation/navBar";
import PortfolioHeader from "../../components/portfolio/portfolioHeader";
import TwoColumnGrid from "../../components/imageLayouts/twoColumnGrid";
import { getCloudinaryUrl } from "../../helpers/cloudinary";
import Footer from "../../components/navigation/footer";
export const metadata = {
  title: "Portfolio | Roaming Studio",
  description: "A collection of photography work Roaming Studio has done for tours in the past.",
};
export default function Hotels() {

  const imageUrl = getCloudinaryUrl('v1749610036/Roaming%20Studio/Tours/DSC02312-2_kveipk.jpg', true)

  const images = [
    { id: 'Roaming%20Studio/Tours/DSC00092_qiwanc.jpg', isVertical: false }, 
    { id: 'Roaming%20Studio/Tours/DSC01205_vq5j4u.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Tours/Kazbegi-061323--32_ro3xnn.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Tours/Vancouver_Island_Overlander_x_Roaming_In_The_Know-_2024-2_ry5suw.jpg', isVertical: false }, 

    { id: 'Roaming%20Studio/Tours/VancouverIsland-23_j77goz.jpg', isVertical: false }, 
    { id: 'Roaming%20Studio/Tours/TukTukRental-RITK-Collaboration-05_idhzfy.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Tours/Wales-072122-42_zyexfz.jpg', isVertical: true }, 

    { id: 'Roaming%20Studio/Tours/Wales-072122-125_pvbl56.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Tours/Madeira-041023--99_a8zlxz.jpg', isVertical: true }, 


    { id: 'Roaming%20Studio/Tours/TukTukRental-RITK-Collaboration-27_w7hmpw.jpg', isVertical: false }, 
    { id: 'Roaming%20Studio/Tours/VancouverIsland-23_j77goz.jpg', isVertical: false }, 

    { id: 'Roaming%20Studio/Tours/VancouverIsland-59_llywt7.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Tours/KeelomaExpedition-81_lk3jzq.jpg', isVertical: true }, 
    { id: 'Roaming%20Studio/Travel/PicoDoAreeiro--50_gmktlu.jpg', isVertical: false },     
  ];
  return (
    <>
    <NavBar/>
<PortfolioHeader
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
/>
 <div className="px-4 sm:px-6 md:px-12 lg:px-32 xl:px-32 bg-white">
 <TwoColumnGrid images={images}/>


 </div>

<Footer/>
</>
  );
}
