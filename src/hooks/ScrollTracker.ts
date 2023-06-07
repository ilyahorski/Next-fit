'use client';

import { useEffect } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { SelectedPage } from '@/shared/types';
import { setCurrentPage, setIsTopOfPage } from '@/redux/slice';

const ScrollTracker = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        dispatch(setIsTopOfPage(true));
        dispatch(setCurrentPage(SelectedPage.Home));
      }
      if (window.scrollY !== 0) dispatch(setIsTopOfPage(false));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
};

export default ScrollTracker;
