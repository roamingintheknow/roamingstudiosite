'use client';
import { useState,useEffect } from "react";
import Image from "next/image";
import { getCloudinaryUrlWithBaseIcon,cloudinaryLoader } from "@/app/helpers/cloudinary";

function SimpleContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
  
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
  
      setTimeout(() => {

        setSent(false);
      }, 2000);
    } catch (error) {
      console.error("❌ Error sending message:", error);
    } finally {
      setSending(false);
    }

  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg max-w-md w-full mx-auto mb-6">
      <h2 className="text-xl font-bold mb-4 bc-green-text text-center">Send Us A Message</h2>

      {sent ? (
        <p className="text-green-600 font-semibold text-center">Thanks for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 wander-black-text">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
          <textarea
            name="message"
            placeholder="Your message..."
            required
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="cursor-pointer w-full bg-bc-green true-white-text rounded-md py-2 font-semibold hover:bg-true-white transition"
          >
            {sending ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
  );
}

export default function Footer() {
  const [copied, setCopied] = useState("");
  const [iconImages, setIconImages] = useState<{ full: string; blur: string; href: string; alt: string }[]>([]);
  const instaIcons = [
          {
            href: "https://www.instagram.com/p/DFvUjKSIrDq/?img_index=1",
            id: "v1750114324/Roaming%20Studio/ig%20posts/Itinerary_vmfzzr.jpg",
            alt: "Insta post 1",
          },
          {
            href: "https://www.instagram.com/p/DHMGNstIAz2/?img_index=1",
            id: "v1750114323/Roaming%20Studio/ig%20posts/SriLankaItinerary_ga4bys.jpg",
            alt: "Insta post 2",
          },
          {
            href: "https://www.instagram.com/p/DFDQm4tJePr/?img_index=1",
            id: "v1750114321/Roaming%20Studio/ig%20posts/JapanItinerary_i9avfo.jpg",
            alt: "Insta post 3",
          },
          {
            href: "https://www.instagram.com/p/DG8buOiIBDq/?img_index=1",
            id: "v1750114320/Roaming%20Studio/ig%20posts/Train_Carousel_qmdmrq.jpg",
            alt: "Insta post 4",
          },
          {
            href: "https://www.instagram.com/p/DKpL3sCuW0w/?img_index=1",
            id: "v1750114321/Roaming%20Studio/ig%20posts/cityedition_csuyw6.jpg",
            alt: "Insta post 5",
          },
          {
            href: "https://www.instagram.com/p/DFQXDUIP86S/?img_index=1",
            id: "v1750114320/Roaming%20Studio/ig%20posts/Wheretovisit_xhnnd9.jpg",
            alt: "Insta post 6",
          },
        ]
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1500);
  };
  useEffect(() => {
  async function fetchIcons() {
    const imgs = await Promise.all(
      instaIcons.map(async ({ id, href, alt }) => {
        const { full, blur } = await getCloudinaryUrlWithBaseIcon(id, true);
        return { full, blur, href, alt };
      })
    );
    setIconImages(imgs);
  }

  fetchIcons();
}, []); // ✅ only run once

  //   useEffect(() => {
  //   async function fetchIcons() {
  //     const imgs = await Promise.all(
  //       instaIcons.map(async ({ id, href, alt }) => {
  //         const { full, blur } = await getCloudinaryUrlWithBaseIcon(id, true);
  //         return { full, blur, href, alt };
  //       })
  //     );
  //     setIconImages(imgs);
  //   }
  //   fetchIcons();
  // });


  return (
<footer className="bg-wander-brown text-white px-6 sm:px-12 md:px-24 lg:px-32 py-8">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">

    {/* Left block spans 3/4 */}
    <div className="md:col-span-3 flex flex-col gap-12">

      {/* 3 columns inside left block */}
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-8 wander-black-text">
        {/* Contact */}
        <div>
  <h3 className="text-lg font-semibold mb-4">Contact</h3>
  <ul className="space-y-2">
    {["roamingintheknow@gmail.com", "+1 604 966 1828"].map((text) => (
      <li key={text} className="relative">
        <p
          onClick={() => handleCopy(text)}
          className="wander-black-text leading-relaxed cursor-pointer hover:underline inline-block"
        >
          {text}
        </p>
        {copied === text && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-bc-green wander-black-text text-xs px-2 py-1 rounded shadow z-10">
            Copied!
          </div>
        )}
      </li>
    ))}
  </ul>
</div>


        {/* Navigate */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigate</h3>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:text-white">Home</a></li>
            <li><a href="https://www.roamingintheknow.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Blog</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><a href="https://instagram.com/roamingintheknow" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Instagram 6-grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-fit mx-auto">
            {iconImages.map(({ full, blur, href, alt }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <Image
                  src={full}
                  alt={alt}
                  width={150}
                  height={200}
                  placeholder="blur"
                  blurDataURL={blur}
                  className="rounded-md"
                  loading="lazy"
                  loader={cloudinaryLoader}
                />
              </a>
            ))}
          </div>
    </div>

    {/* Right block (1/4) — Contact Form */}
    <div>
      <SimpleContactForm />
    </div>
  </div>

  <div className="mt-12 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} Roaming In The Know. All rights reserved.
  </div>
</footer>


  
  )
}



