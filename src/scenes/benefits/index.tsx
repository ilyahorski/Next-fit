'use client';

import ActionButton from '@/scenes/ActionButton';
import { BenefitType, SelectedPage } from '@/types';
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import Benefit from './Benefit';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentPage } from '@/redux/homePageSlice';
import Image from 'next/image';
import BenefitsPageGraphic from '@/../public/image6.jpg';
import React, { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useTranslations } from 'next-intl';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className='h-6 w-6' />,
    title: 'Cutting-edge Equipment',
    description: 'Cutting-edge Equipment Benefits',
  },
  {
    icon: <UserGroupIcon className='h-6 w-6' />,
    title: 'Professional Trainers',
    description: 'Professional Trainers Benefits',
  },
  {
    icon: <AcademicCapIcon className='h-6 w-6' />,
    title: 'Wide Variety of Classes',
    description: 'Wide Variety of Classes Benefits',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits: React.FC = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations('Benefits');

  useIntersectionObserver(ref, (entries) => {
    if (entries[0].isIntersecting) {
      dispatch(setCurrentPage(t('Main')));
    }
  }, {});

  return (
    <section id={t('Main')} className='min-h-full w-full py-20 bg-gray-50 dark:bg-gray-800'>
      <div className='mx-auto w-5/6'>
        {/* HEADER */}
        <motion.div
          className='mt-5 items-center justify-around gap-4 md:flex'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={t(benefit.title)}
              description={t(benefit.description)}
            />
          ))}
        </motion.div>

        <motion.div
          className='md:my-5 md:w-3/5'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {t('Title')}
          <h1 className='basis-3/5 font-montserrat text-3xl font-bold'></h1>
          <p className='my-5 text-sm' ref={ref}>
            {t('Community Benefits')}
          </p>
        </motion.div>
        {/* BENEFITS */}

        {/* GRAPHICS AND DESCRIPTION */}
        <div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex relative'>
          {/* GRAPHIC */}
          <Image quality={100} width={550} height={450} className='mx-auto pb-10' alt='benefits-page-graphic'
                 src={BenefitsPageGraphic} />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className='relative'>
              <div className='before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves'>
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <h1 className='basis-3/5 font-montserrat text-3xl font-bold'>
                    {t('Title1')}
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className='my-5'>
                {t('Flexible Timings Benefits')}
              </p>
              {/*<p className='mb-5'>*/}
              {/*  {t('')}*/}
              {/*</p>*/}
            </motion.div>

            {/* BUTTON */}
            <div className='relative mt-16'>
              <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
                <ActionButton>
                  {t('Title2')}
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
