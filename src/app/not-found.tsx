// app/not-found.tsx
import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/navigation/footer';
import NavBar from './components/navigation/navBar';
import {getCloudinaryUrl} from './helpers/cloudinary';
export default function NotFound() {
  const notFoundImageUrl = getCloudinaryUrl('v1749761129/background%20images/main/Hiriketiya-64_yosqcp.jpg',false)
  return (
    <>
      <NavBar />
      <main className="min-h-screen flex flex-col items-center justify-center text-center bg-wander-white px-4 pt-20">
        <Image
          src={notFoundImageUrl.full}
          alt="Lost traveler"
          width={800}
          height={600}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold wander-brown-text mb-4">Oops, this page doesn&apos;t exist.</h1>
        <p className="text-lg wander-black-text mb-6 max-w-xl">
          We couldn&apos;t find the page you&apos;re looking for. Follow any of these links to get back to our site.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-6">
  <Link
    href="/"
    className="bg-bc-green text-white px-6 py-3 rounded-md hover:bg-black transition text-center"
  >
    Home
  </Link>
  <Link
    href="/about"
    className="bg-bc-green text-white px-6 py-3 rounded-md hover:bg-black transition text-center"
  >
    About
  </Link>
  <Link
    href="/contact"
    className="bg-bc-green text-white px-6 py-3 rounded-md hover:bg-black transition text-center"
  >
    Contact
  </Link>
  <Link
    href="/services"
    className="bg-bc-green text-white px-6 py-3 rounded-md hover:bg-black transition text-center"
  >
    Services
  </Link>
</div>

      </main>
      <Footer />
    </>
  );
}
