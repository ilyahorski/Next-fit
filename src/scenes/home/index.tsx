'use client';

import { SelectedPage } from '@/types';
import ActionButton from '@/scenes/ActionButton';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentPage } from '@/redux/homePageSlice';
import Image from 'next/image';
import HomePageText from '@/../public/bk.png';
import HomePageGraphic from '@/../public/HomePageGraphic.jpg';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('Home');

  return (
    <section id={t('Main')} className='w-full mt-20 content-hometext'>
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className='mx-auto w-full h-32 items-center justify-center md:flex md:h-5/6 border-2 border-red-700'
      >
        {/* MAIN HEADER */}
        <div className='flex z-10 mt-32 h-32'>
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
            <Image className='absolute' fill={true} quality={100} alt='home-page-text' src={HomePageText} />
            {/*<div className='relative'>*/}
            {/*  <div*/}
            {/*    className='flex h-[500] w-[500] relative'>*/}
            {/*    */}
            {/*  </div>*/}
            {/*</div>*/}

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
        
        <div
          className='md:flex basis-3/5 justify-center hidden md:z-10
              md:ml-40 md:mt-16 md:justify-items-end relative'
        >
          {/*<Image width={500} height={700} quality={100} alt='home-pageGraphic'*/}
          {/*       src={HomePageGraphic} />*/}
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
