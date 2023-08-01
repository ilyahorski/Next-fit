'use client';

import { SelectedPage } from '@/types';
import { motion } from 'framer-motion';
import Class from './Class';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentPage } from '@/redux/homePageSlice';
import 'react-multi-carousel/lib/styles.css';
import React, { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useTranslations } from 'next-intl';

const OurClasses = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations('Our Classes');

  useIntersectionObserver(ref, (entries) => {
    if (entries[0].isIntersecting) {
      dispatch(setCurrentPage(t('Main')));
    }
  }, {});

  return (
  <section id={t('Main')} className='w-full bg-primary-100 dark:bg-gray-100 py-40 text-3xs h-fit'>
    <motion.div className='flex flex-col h-fit'>
      <motion.div
          className='flex flex-grow mx-auto w-5/6'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
      >
        <div className='md:w-full'>
          <h1 className='basis-3/5 font-montserrat text-5xs font-bold -mt-20' ref={ref}>{t('Title')}</h1>
          <p className='py-5 text-4xs min-h-[150px] w-full'>
            {t('Overview')}
          </p>
        </div>
      </motion.div>
      <div className='flex'>
        <Class />
      </div>
    </motion.div>
  </section>
  );
};


export default OurClasses;
