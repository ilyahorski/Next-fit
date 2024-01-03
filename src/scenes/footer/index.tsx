'use client';

import Image from 'next/image';
import logo from '@/../public/HomePageText.png';
import logoLight from '../../../public/NEXT FIT (3).png';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Contact Us');

  return (
    <footer className='bg-primary-100 dark:bg-gray-100 py-16'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <Image className='hidden dark:flex' width={150} height={50} quality={100} alt='logo' src={logo} />
          <Image className='flex dark:hidden' width={150} height={50} quality={100} alt='logo' src={logoLight} />
          <p className='my-5'>
            {t('Footer3')}
          </p>
          <p>© Next-fit Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>{t('Footer4')}</h4>
          <p className='my-5'>{t('Footer')}</p>
          <p>{t('Footer1')}</p>
          <p>{t('Footer2')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
