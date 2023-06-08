'use client';

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/types';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentPage } from '@/redux/homePageSlice';

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <AnchorLink
      className='rounded-md px-10 py-2
      bg-primary-400 text-gray-20 hover:bg-primary-200 hover:text-gray-500
      dark:bg-secondary-500 dark:text-gray-20 dark:hover:bg-secondary-300 dark:hover:text-gray-500'
      onClick={() => dispatch(setCurrentPage(SelectedPage.ContactUs))}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
