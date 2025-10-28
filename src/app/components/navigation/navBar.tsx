'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Menu,  Disclosure } from '@headlessui/react';
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react';
import { Fragment } from 'react';
// import { cloudinaryLoader } from '@/app/helpers/cloudinary';

export default function NavBar() {
  const imageSize = 800;
  return (
    <Disclosure as="nav" className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
      {({ open }: { open: boolean }) => (
        <>
          {/* Header row */}
<div className="w-full flex justify-between items-center py-4 px-6 md:px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div>
                <Image
                          src="/images/home-logo.png"
                          alt="Roaming Studio portfolio hero"
                          priority
                          width={imageSize * 1/14}
                          height={imageSize * 1/14}
                          sizes="12vw"
                          className="object-cover object-center "
                        />
              </div>
              {/* <div className="-ml-[8px]">
                <Image
                  src="https://res.cloudinary.com/dqiq7slio/image/upload/v1749666288/logos/Name_tkbymj.png"
                  alt="Logo Text"
                  width={160}
                  height={48}
                  className="h-12 object-contain"
                  priority
                  loader={cloudinaryLoader}
                />
              </div> */}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-4 items-center font-bold px-6 focus:border-none focus:outline-none focus:ring-0 focus-visible:ring-0">
              <Dropdown
                label="PORTFOLIOS"
                items={[
                  { href: '/portfolio/hotels', label: ' Accommodations' },
                  { href: '/portfolio/tours', label: 'Tours & Experiences' },
                  { href: '/portfolio/travel', label: 'Travel & Lifestyle' },
                ]}
              />
              
              <NavLink href="/services" label="SERVICES" />
              
             <NavLink href="/contact" label="CONTACT" />
              {/* <Link href="/contact">
                <button className="cursor-pointer bg-white text-black text-sm px-3 py-1.5 rounded hover:bg-gray-200 transition">
                  Contact
                </button>
              </Link> */}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <Disclosure.Button className="text-white focus:outline-none">
                {open ? <X size={24} /> : <MenuIcon size={24} />}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden px-6 pb-4 space-y-2 font-medium  text-white">
            <MobileLink href="/home" label="HOME" />
            <MobileLink href="/services" label="SERVICES" />
            <MobileGroup
              label="PORTFOLIO"
              items={[
                { href: '/portfolio/hotels', label: 'Accommodations' },
                { href: '/portfolio/tours', label: 'Tours & Experiences' },
                { href: '/portfolio/travel', label: 'Travel & Lifestyle' },
              ]}
            />
            <MobileLink href="/contact" label="CONTACT"  />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} >
      {label}
    </Link>
  );
}

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        className="
          inline-flex items-center text-white 
          focus:outline-none focus:ring-0 focus-visible:ring-0
          focus:border-none active:border-none hover:border-none
          border-none bg-transparent shadow-none outline-none
        "
        style={{
          WebkitTapHighlightColor: "transparent",
        }}
      >
        {label}
        {/* <ChevronDown size={16} className="ml-1" /> */}
      </Menu.Button>

     
        <Menu.Items
          className="absolute left-0 mt-2 w-48 origin-top-left  text-white  overflow-hidden border:none focus:outline-none  z-50"
        >
          <div>
            {items.map((item, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 text-sm ${
                      active ? "text-bc-green font-semibold underline underline-offset-4" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>

    </Menu>
  );
}

function MobileLink({
  href,
  label,
  isButton = false,
}: {
  href: string;
  label: string;
  isButton?: boolean;
}) {
  return (
    <Link
      href={href}
      className={
        isButton
          ? 'block bg-white text-black text-center px-4 py-2 rounded-lg'
          : 'block px-2 py-1 hover:font-bold'
      }
    >
      {label}
    </Link>
  );
}

function MobileGroup({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <Disclosure.Button className="flex justify-between w-full px-2 py-1  items-center">
            <span>{label}</span>
            <ChevronDown
              className={`${open ? 'rotate-180' : ''} h-4 w-4 transition-transform`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="ml-4 space-y-1">
            {items.map((item, i) => (
              <MobileLink key={i} href={item.href} label={item.label} />
            ))}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
