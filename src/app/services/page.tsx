import NavBar from "../components/navigation/navBar";
import OfferBlock from "../components/about/offerBlock";
import Footer from "../components/navigation/footer";
import Hero from "./hero";
export const metadata = {
  title: "Services | Roaming Studio",
  description: "We offer Phtography, UGC Video, and Drone Content services."
};
export default function Services() {
  // const BackgroundImgUrl = getCloudinaryUrl('v1749761208/background%20images/services/PicoDoAreeiro--51_x3124h.jpg', true)
  // const HorizontalBackgroundImgUrl = getCloudinaryUrl('v1749611581/Roaming%20Studio/Travel/PicoDoAreeiro--50_gmktlu.jpg', false)
  return (
    <>
    <NavBar/>
    <Hero/>

          <div className="max-w-2xl mx-auto px-6 py-12 space-y-6 font-semibold roaming-text-size-3 bc-green-text  text-center">
        <p>
          Roaming Studio is a BC-Based media company that works with tourism, hospitality, and destination brands. We offer photography, UGC video, and drone content to give your story the visuals it deserves.
        </p>

        <p>
          Every project is custom, so reach out with your idea — we’ll find the best way to make it happen together. Roaming Studio specializes in story-driven content for tourism, hospitality, and destination brands in BC and beyond.

        </p>

      </div>

    <OfferBlock/>
    <Footer/>
</>
  );
}
