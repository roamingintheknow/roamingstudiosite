"use client"
import React, { useState } from 'react';
import Footer from "../components/navigation/footer";
import NavBar from "../components/navigation/navBar";
import Link from 'next/link';
import PortfolioHeader from '../components/portfolio/portfolioHeader';
import { BsInstagram } from "react-icons/bs";
import { getCloudinaryUrl } from "../helpers/cloudinary";

export default function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const BackgroundImgUrl = getCloudinaryUrl('v1749761193/background%20images/contact/Wales-072122-125_gaiuvs.jpg', true)
  const HorizontalBackgroundImgUrl = getCloudinaryUrl('v1749877956/background%20images/services/Wales-072122-130-horizontal_ztfrmt.jpg', false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const { name, email, message } = formData;
  
    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = name.trim() && emailRegex.test(email) && message.trim().length >= 10;
  
    if (!isValid) {
      alert("Please fill out all fields correctly:\n- Valid email\n- Message at least 10 characters");
      return;
    }
  
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
  const [copied, setCopied] = useState("");

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(""), 1500);
  };
  return (
    <>
      <NavBar/>

       <PortfolioHeader
            word="CONTACT US"
            textBlock={
              <>

<div className="w-full flex items-center justify-center bg-wander-white">
  <div className="text-center wander-black-text px-4 pt-[1vw] min-w-[35vw] max-w-[90vw]">
    <div className="bg-white rounded-xl p-6 w-full shadow-md">
        
        <h2 className="text-xl font-bold mb-4 wander-brown-text">Send Us A Message</h2>
        {sent ? (
          <p className="roaming-green-text font-semibold wander-brown-text">Thanks for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 wander-black-text">
            {/* Inputs */}
            <input type="text" name="name" placeholder="Your name" required value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 wander-black-text" />
            <input type="email" name="email" placeholder="Your email" required value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 wander-black-text" />
            <textarea name="message" placeholder="Your message..." required rows={4} value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 wander-black-text" />
            <button type="submit" disabled={sending} className="w-full bg-wander-brown text-black rounded-md py-2 font-semibold hover:bg-wander-white">
              {sending ? "Sending..." : "Send"}
            </button>
          </form>
        )}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
  <h1 className="wander-brown-text text-xl font-semibold text-center md:text-right whitespace-nowrap">
    Connect With Us
  </h1>
  <div className="flex justify-center items-center space-x-4">
    <Link href="https://www.instagram.com/roamingintheknow/" target="_blank" rel="noopener noreferrer">
      <BsInstagram size="1.5em" className="roaming-black-text cursor-pointer" />
    </Link>
  </div>
</div>


<div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
  Prefer to connect directly? We can also be reached here:
</div>
<div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">

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


    </div>
  </div>
              </>
            }
            imageUrl={BackgroundImgUrl}
            horizontalImg={HorizontalBackgroundImgUrl}
            isReversed={true}
          />
 <Footer/>



    </>
  );
}