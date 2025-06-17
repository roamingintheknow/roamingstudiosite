import NavBar from "../components/navigation/navBar";
import PortfolioHeader from "../components/portfolio/portfolioHeader";
import OfferBlock from "../components/about/offerBlock";
import Footer from "../components/navigation/footer";
import { getCloudinaryUrl } from "../helpers/cloudinary";
export default function Services() {
  const BackgroundImgUrl = getCloudinaryUrl('v1749761208/background%20images/services/PicoDoAreeiro--51_x3124h.jpg', true)
  const HorizontalBackgroundImgUrl = getCloudinaryUrl('v1749611581/Roaming%20Studio/Travel/PicoDoAreeiro--50_gmktlu.jpg', false)
  return (
    <>
    <NavBar/>
    <PortfolioHeader
      word="OUR SERVICES"
      textBlock={
        <>
          <p>
          Roaming Studio specializes in storytelling-driven content for tourism, hospitality, and destination brands in BC and beyond.   
          </p>
        </>
      }
      imageUrl={BackgroundImgUrl}
      horizontalImg={HorizontalBackgroundImgUrl}
    />
    <OfferBlock/>
    <Footer/>
</>
  );
}
