'use client';

import { SelectedPage } from '@/types';
import ActionButton from '@/scenes/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentPage } from '@/redux/homePageSlice';
import Image from 'next/image';
import HomePageText from '@/../public/HomePageText.png';
import HomePageGraphic from '@/../public/HomePageGraphic.jpg';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('Home');

  return (
    <section id={t('Main')} className='gap-16 py-10 md:h-full md:pb-0 bg-primary-100 dark:bg-gray-100'>
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className='mx-auto w-5/6 items-center justify-center md:flex md:h-5/6'
      >
        {/* MAIN HEADER */}
        <div className='z-10 mt-32 w-full'>
          {/* HEADINGS */}
          <motion.div
            className='md:-mt-20'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className='relative'>
              <div
                className='before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-hometext relative'>
                <Image quality={100} alt='home-page-text' src={HomePageText} />
              </div>
            </div>

            <div className='mt-8 text-lg'>
              <p>{t('Welcome')}</p>
              <p>{t('Welcome1')}</p>
              <p>
                <span className='text-violet-700'>
                  {t('Slogan2')}
                </span>
                {t('Slogan')}
                <span className='text-violet-700'>
                  {t('Slogan2')}
                </span>
                {t('Slogan1')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className='md:flex basis-3/5 justify-center hidden md:z-10
              md:ml-40 md:mt-16 md:justify-items-end relative'
        >
          <Image width={500} height={700} quality={100} alt='home-pageGraphic'
                 src={HomePageGraphic} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
