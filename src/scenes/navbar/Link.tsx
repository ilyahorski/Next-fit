'use client';

import { SelectedPage } from '@/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { setCurrentPage } from '@/redux/homePageSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  const dispatch = useAppDispatch();
  const selectedPage = useAppSelector((state) => state.currentPage.value);

  return (
    <AnchorLink
      className={`${selectedPage === page ? 'text-secondary-600 dark:text-secondary-500' : ''}
        transition duration-100 text-lg hover:text-secondary-600 dark:hover:text-secondary-500
      `}
      href={`#${page}`}
      onClick={() => dispatch(setCurrentPage(page))}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
