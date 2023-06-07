'use client';

import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from './types';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentPage } from '@/redux/slice';

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <AnchorLink
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white'
      onClick={() => dispatch(setCurrentPage(SelectedPage.ContactUs))}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
