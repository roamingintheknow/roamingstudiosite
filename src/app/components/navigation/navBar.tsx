'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, Transition, Disclosure } from '@headlessui/react';
import { ChevronDown, Menu as MenuIcon, X } from 'lucide-react';
import { Fragment } from 'react';

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white bg-wander-white">
      {({ open }: { open: boolean }) => (
        <>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            {/* Logo */}
            <div className="text-xl font-bold text-gray-800">
  <Link href="/">
    <div className="flex items-center ">
      <div>
      <Image
        src="https://res.cloudinary.com/dqiq7slio/image/upload/v1749665863/logos/Logo_Option_2_thqex8.png"
        alt="Logo Icon"
        width={32}
        height={32}
        className="h-8 w-10 object-contain"
        priority
      />
  </div>
      <div className="-ml-[8px]">
      <Image
        src="https://res.cloudinary.com/dqiq7slio/image/upload/v1749666288/logos/Name_tkbymj.png"
        alt="Logo Text"
        width={160}
        height={48}
        className="h-12 object-contain"
        priority
      />
      </div>
    </div>
  </Link>
</div>


            {/* Desktop nav */}
            <div className="hidden md:flex gap-4 items-center text-gray-700 font-medium">
            <Link href="/home" className="hover:text-black">HOME</Link>
              <Link href="/about" className="hover:text-black">ABOUT US</Link>
              <Link href="/services" className="hover:text-black">SERVICES</Link>
             
             <div   className='bg-wander-white'>
              <Dropdown 
              label="PORTFOLIO" 
            
              items={[
                { href: '/portfolio/hotels', label: 'Hotels' },
                { href: '/portfolio/tours', label: 'Tours & Experiences' },
                { href: '/portfolio/travel', label: 'Travel' },
              ]} />
              </div>
             <Link href="/contact">
  <button className="cursor-pointer bg-bc-green text-black text-sm px-3 py-1.5 rounded hover:bg-gray-800 transition">
    Contact
  </button>
</Link>
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <Disclosure.Button className="text-gray-800 focus:outline-none">
                {open ? <X size={24} /> : <MenuIcon size={24} />}
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden px-6 pb-4 space-y-2 text-gray-700 font-medium">
          <MobileLink href="/home" label="HOME" />
            <MobileLink href="/about" label="ABOUT US" />
            <MobileLink href="/services" label="SERVICES" />
            <MobileGroup label="PORTFOLIO" items={[
             { href: '/portfolio/hotels', label: 'Hotels' },
             { href: '/portfolio/tours', label: 'Tours & Experiences' },
             { href: '/portfolio/travel', label: 'Travel' },
            ]} />
            <MobileLink href="/contact" label="Contact" isButton />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

function Dropdown({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <Menu as="div" className="relative inline-block text-left bg-wander-white">
      <Menu.Button className="inline-flex items-center hover:text-black focus:outline-none focus:ring-0 focus:border-none">

        {label}
        <ChevronDown size={16} />
      </Menu.Button>
      <Transition as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <Menu.Items className="absolute z-50  w-48 origin-top-left bg-wander-white ">
          <div >
            {items.map((item, i) => (
              <Menu.Item key={i}>
                {({ active }) => (
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 text-sm ${active ? 'bg-bc-green text-white' : 'text-gray-700'}`}
                  >
                    {item.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function MobileLink({ href, label, isButton = false }: { href: string; label: string; isButton?: boolean }) {
  return (
    <Link href={href} className={isButton
      ? 'block bg-black text-white text-center px-4 py-2 rounded-lg'
      : 'block px-2 py-1 hover:text-black'}>
      {label}
    </Link>
  );
}

function MobileGroup({ label, items }: { label: string; items: { href: string; label: string }[] }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <Disclosure.Button className="flex justify-between w-full px-2 py-1 hover:text-black">
            <span>{label}</span>
            <ChevronDown className={`${open ? 'rotate-180' : ''} h-4 w-4 transition-transform`} />
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
