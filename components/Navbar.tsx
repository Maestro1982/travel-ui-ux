'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { NAV_LINKS } from '@/constants/index';

import menu from '@/public/menu.svg';
import close from '@/public/close.svg';

import Button from './Button';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <Image src='hilink-logo.svg' alt='logo' width={74} height={29} />
      </Link>

      <ul className='hidden h-full gap-12 lg:flex'>
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className='hidden lg:flexCenter'>
        <Button
          type='button'
          title='Login'
          icon='/user.svg'
          variant='btn_dark_green'
        />
      </div>

      {/* Mobile */}
      <div className='lg:hidden flex flex-1 justify-end items-center relative z-40'>
        <Image
          src={isToggled ? close : menu}
          alt='menu'
          width={32}
          height={32}
          // Apply the `invert` class to invert colors when isToggled is true
          className={`inline-block cursor-pointer ${isToggled ? 'invert' : ''}`}
          onClick={() => setIsToggled(!isToggled)}
        />
        <div
          className={`${
            !isToggled ? 'hidden' : 'flex'
          } p-6 bg-black/10 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-50 rounded-lg bg-white`}
        >
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
