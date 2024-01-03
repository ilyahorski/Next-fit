'use client';

import { useEffect, useRef, useState } from 'react';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/scenes/ActionButton';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setMode } from '@/redux/modeSlice';
import Image from 'next/image';
import useOnClickOutside from '@/hooks/ClickOutside';
import logo from '@/../public/HomePageText.png';
import logoLight from '@/../public/NEXT FIT (3).png';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { setCurrentPage, setIsTopOfPage } from '@/redux/homePageSlice';
import { useTranslations } from 'next-intl';
import PopUp from '@/scenes/PopUp';

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isTopOfPage = useAppSelector((state) => state.currentPage.isTop);
  const darkMode = useAppSelector(state => state.mode.theme);
  const isAboveMediumScreens = useMediaQuery('(min-width: 1400px)');
  const navbarBackground = isTopOfPage ?
    'bg-primary-700 drop-shadow dark:bg-primary-800' :
    'bg-secondary-700 drop-shadow dark:bg-secondary-800';
  const flexBetween = 'flex items-center justify-between';
  const colorTheme = darkMode ? 'dark' : '';
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setIsMenuToggled(false));

  const dispatch = useAppDispatch();
  const topRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Pages');

  useIntersectionObserver(
    topRef,
    (entries) => {
      if (entries[0].isIntersecting) {
        dispatch(setIsTopOfPage(true));
        dispatch(setCurrentPage(t('Home')));
      } else {
        dispatch(setIsTopOfPage(false));
      }
    },
    { rootMargin: '0px', threshold: 1.0 },
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');

    if (darkMode) {
      root.classList.add(colorTheme);
    }
  }, [darkMode]);

  return (
    <nav className='max-w-full'>
      <div ref={topRef} className='h-[1px] opacity-0' />
      <div className={`${navbarBackground} ${flexBetween} max-w-full w-full fixed top-0 z-30 h-20 py-4 drop-shadow-lg`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-4 `}>
            {/* LEFT SIDE */}
            <div className='flex w-[150]'>
              <Image width={150} height={50} quality={100}
                     alt='logo'
                     src={darkMode ? logo : logoLight} />
            </div>
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page={t('Home')}
                  />
                  <Link
                    page={t('Benefits')}
                  />
                  <Link
                    page={t('Our Classes')}
                  />
                  <Link
                    page={t('Contact Us')}
                  />
                </div>
                <div className={`${flexBetween} gap-4`}>
                  <div>
                    {darkMode ?
                      <SunIcon
                        onClick={() => dispatch(setMode(!darkMode))}
                        className=' w-8 h-8'
                      /> :
                      <MoonIcon
                        onClick={() => dispatch(setMode(!darkMode))}
                        className=' w-8 h-8'
                      />
                    }
                  </div>
                  <PopUp />
                  <ActionButton>
                    {t('Title2')}
                  </ActionButton>
                </div>
              </div>
            ) : (
              <div className={`${flexBetween} gap-4`}>
                <div>
                  {darkMode ?
                    <SunIcon
                      onClick={() => dispatch(setMode(!darkMode))}
                      className=' w-8 h-8'
                    /> :
                    <MoonIcon
                      onClick={() => dispatch(setMode(!darkMode))}
                      className=' w-8 h-8'
                    />
                  }
                </div>
                <PopUp />
                <button
                  className='rounded-full bg-primary-500 dark:bg-secondary-400 p-2'
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className='h-6 w-6 text-white' />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div
          className='fixed right-0 bottom-0 z-50 h-full w-[300px] bg-primary-50 dark:bg-secondary-400 drop-shadow-xl'
          ref={ref}>
          {/* CLOSE ICON */}
          <div className='flex justify-end py-6 px-14'>
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className='h-8 w-8 text-gray-600 dark:text-zinc-50' />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className='ml-[33%] flex flex-col gap-10 text-2xl'>
            <Link
              page={t('Home')}
            />
            <Link
              page={t('Benefits')}
            />
            <Link
              page={t('Our Classes')}
            />
            <Link
              page={t('Contact Us')}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
