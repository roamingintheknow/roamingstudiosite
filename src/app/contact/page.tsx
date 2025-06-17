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
  
  return (
    <>
      <NavBar/>

       <PortfolioHeader
            word="CONTACT US"
            textBlock={
              <>
                <div className="w-full  flex items-center justify-center  bg-wander-white">
    <div className="max-w-xl text-center items-center space-y-6 wander-black-text px-8 pt-[1vw]">
      <div className="bg-white rounded-xl p-6 max-w-md w-full relative shadow-md">
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