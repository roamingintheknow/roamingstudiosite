"use client"
import React, { useState } from 'react';
import NavBar from "../components/navigation/navBar";
import PortfolioHeader from "../components/portfolio/portfolioHeader";
import Footer from "../components/navigation/footer";
import { getCloudinaryUrl } from "@/app/helpers/cloudinary";

export default function Quotte() {
  const BackgroundImgUrl = getCloudinaryUrl('v1749761193/background%20images/contact/Wales-072122-125_gaiuvs.jpg', true)
  const HorizontalBackgroundImgUrl = getCloudinaryUrl('v1749877956/background%20images/services/Wales-072122-130-horizontal_ztfrmt.jpg', false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [] as string[],
    location: "",
  });
  
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
  
    if (target instanceof HTMLInputElement) {
      const { name, value, type, checked } = target;
  
      if (type === "checkbox") {
        setFormData((prev) => {
          const updatedServices = checked
            ? [...prev.services, value]
            : prev.services.filter((s) => s !== value);
          return { ...prev, services: updatedServices };
        });
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    }
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
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
  
      setSent(true);
      setFormData({ name: "", email: "", message: "", services: [], location: "" });
  
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
  word="OUR SERVICES"
  textBlock={

    <div className="w-full bg-wander-white flex justify-center md:pt-18 z-10">
    <div className="pt-16 text-center wander-black-text px-4">
      <div className="bg-wander-green bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-md p-6 shadow-md w-full min-w-[35vw] max-w-[90vw]">
          {/* content here */}
  
            
            {sent ? (
              <p className="roaming-green-text font-semibold wander-brown-text">Thanks for your message!</p>
            ) : (
              
              <form onSubmit={handleSubmit} className="space-y-2 wander-black-text">
                <h2 className="text-xl font-bold mb-4 wander-brown-text">Request a quote</h2>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 wander-black-text"
              />
            
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 wander-black-text"
              />
            <input
    type="text"
    name="location"
    placeholder="Where are you located?"
    value={formData.location}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded-md px-3 py-2 wander-black-text"
  />
              <div className="text-left">
                <label className="block font-semibold mb-2">What type of content are you interested in?</label>
                <div className="grid grid-cols-2 gap-4">
  {["Photography", "Drone Photos", "UGC", "Video"].map((service) => (
    <label key={service} className="flex items-center space-x-2">
      <input
        type="checkbox"
        value={service}
        checked={formData.services.includes(service)}
        onChange={handleCheckboxChange}
        className="accent-[#80947e]"
      />
      <span>{service}</span>
    </label>
  ))}
</div>

              </div>
            
              <label className="block text-left font-semibold mt-4">
                Tell us a bit about your project:
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 wander-black-text"
              />
            
              <button
                type="submit"
                disabled={sending}
                className="cursor-pointer w-full bg-wander-brown text-black rounded-md py-2 font-semibold hover:bg-wander-white"
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </form>
            
           
            )}
          </div>
          
        </div>
    </div>
  </div>
  }
      imageUrl={BackgroundImgUrl}
            horizontalImg={HorizontalBackgroundImgUrl}
            isReversed={true}
          />

   <Footer/>

    </>
  );
}