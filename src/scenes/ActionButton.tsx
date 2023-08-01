'use client';

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/types';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentPage } from '@/redux/homePageSlice';
import { useTranslations } from 'next-intl';

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  const t = useTranslations('Contact Us');

  return (
    <AnchorLink
      className='flex items-center justify-center h-[40px] text-[20px] w-auto rounded-md px-10 py-2
      bg-primary-200 text-gray-20 hover:bg-primary-800 hover:text black
      dark:bg-secondary-500 dark:text black dark:hover:bg-secondary-300 dark:hover:text black'
      onClick={() => dispatch(setCurrentPage(t('Main')))}
      href={`#${t('Main')}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
