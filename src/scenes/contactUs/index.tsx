'use client';

import { useForm } from 'react-hook-form';
import { SelectedPage } from '@/types';
import { motion } from 'framer-motion';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentPage } from '@/redux/homePageSlice';
import Image from 'next/image';
import ContactUsPageGraphic from '@/../public/ContactUsPageGraphic.jpg';
import React, { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useTranslations } from 'next-intl';

const ContactUs = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<HTMLDivElement>(null);
  const t = useTranslations('Contact Us');


  useIntersectionObserver(ref, (entries) => {
    if (entries[0].isIntersecting) {
      dispatch(setCurrentPage(t('Main')));
    }
  }, {});

  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 dark:bg-secondary-300
  px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id={t('Main')} className='relative w-full text-8xs bg-gray-50 dark:bg-gray-800 '>
      <Image quality={100} className='w-full z-50' alt='contact-us-page-graphic' src={ContactUsPageGraphic} />
      <div className='flex flex-row l:absolute l:top-20 l:left-10 ml:flex-col mx-auto w-5/6'>
        {/* HEADER */}
        <motion.div
          className='max-w-[1000px] us:absolute us:top-10 us:left-10 us:right-10 l:static'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className='basis-3/5 font-montserrat text-2xl sm:text-5xl text-white font-bold'>
            <span className='text-white'>{t('Title')}</span> {t('Title1')}
          </h1>
          <p ref={ref} className='text-xl sm:text-3xl text-white my-5'>
            {t('Form Description')}
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className='flex max-w-[1000px] mb-2 justify-between gap-8'>
          <motion.div
            className='mt-10 md:mt-0'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target='_blank'
              onSubmit={onSubmit}
              action='https://formsubmit.co/a33cca6641adc1a6ec29a17561f1f590'
              method='POST'
            >
              <input
                className={inputStyles}
                type='text'
                placeholder={t('placeholder')}
                {...register('name', {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className='mt-1 text-primary-500 '>
                  {errors.name.type === 'required' && 'This field is required.'}
                  {errors.name.type === 'maxLength' &&
                    'Max length is 100 char.'}
                </p>
              )}

              <input
                className={inputStyles}
                type='text'
                placeholder={t('placeholder1')}
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className='mt-1 text-primary-500'>
                  {errors.email.type === 'required' &&
                    'This field is required.'}
                  {errors.email.type === 'pattern' && 'Invalid email address.'}
                </p>
              )}

              <textarea
                className={`${inputStyles} min-h-[48px] max-h-40`}
                placeholder={t('placeholder2')}
                rows={4}
                cols={50}
                maxLength={2000}
                {...register('message', {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className='mt-1 text-primary-500'>
                  {errors.message.type === 'required' &&
                    'This field is required.'}
                  {errors.message.type === 'maxLength' &&
                    'Max length is 2000 char.'}
                </p>
              )}

              <button
                type='submit'
                className='mt-5 rounded-lg px-20 py-3 transition duration-100
                      bg-primary-400 text-gray-20 hover:bg-primary-200 hover:text-gray-500
                      dark:bg-secondary-500 dark:text-gray-20 dark:hover:bg-secondary-300 dark:hover:text-gray-500'
              >
                {t('Title2')}
              </button>
            </form>
          </motion.div>

          {/*<motion.div*/}
          {/*  className='relative mt-16 basis-2/5 md:mt-0'*/}
          {/*  initial='hidden'*/}
          {/*  whileInView='visible'*/}
          {/*  viewport={{ once: true, amount: 0.5 }}*/}
          {/*  transition={{ delay: 0.2, duration: 0.5 }}*/}
          {/*  variants={{*/}
          {/*    hidden: { opacity: 0, y: 50 },*/}
          {/*    visible: { opacity: 1, y: 0 },*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <div*/}
          {/*    className='w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext relative'>*/}
          {/*    <Image quality={100} className='w-full' alt='contact-us-page-graphic' src={ContactUsPageGraphic} />*/}
          {/*  </div>*/}
          {/*</motion.div>*/}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
