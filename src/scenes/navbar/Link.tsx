'use client';

import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { setCurrentPage } from '@/redux/slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;

  const dispatch = useAppDispatch();
  const selectedPage = useAppSelector((state) => state.currentPage.value);

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ''}
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => dispatch(setCurrentPage(lowerCasePage))}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
