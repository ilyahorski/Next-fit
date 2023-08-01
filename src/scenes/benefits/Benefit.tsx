'use client';

import { SelectedPage } from '@/types';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { setCurrentPage } from '@/redux/homePageSlice';
import { useAppDispatch } from '@/redux/hooks';

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Benefit = ({ icon, title, description }: Props) => {
  const dispatch = useAppDispatch();

  return (
      <motion.div
          variants={childVariant}
          className='mt-5 h-96 rounded-md border-2 border-gray-100 px-5 py-16 text-center'
      >
        <div className='mb-4 flex justify-center'>
          <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
            {icon}
          </div>
        </div>

        <h4 className='font-bold text-4xs'>{title}</h4>
        <p className='my-3'>{description}</p>
        <AnchorLink
            className='text-sm font-bold text-primary-500 dark:text-primary-700 underline dark:hover:text-secondary-500 hover:text-secondary-500'
            onClick={() => dispatch(setCurrentPage(SelectedPage.ContactUs))}
            href={'/#Contact Us'}
        >
          <p>Learn More</p>
        </AnchorLink>
      </motion.div>
  );
};

export default Benefit;
