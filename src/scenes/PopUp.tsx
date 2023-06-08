'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { setCurrentPage, setLanguagePage } from '@/redux/homePageSlice';
import { SelectedPage } from '@/types';

type Lang = {
  name: string;
  value: string;
};

const language: Lang[] = [
  { name: 'EN', value: 'en' },
  { name: 'PL', value: 'pl' },
  { name: 'RU', value: 'ru' },
];

const PopUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const pathname = usePathname().split('/')[1];
  const lng = pathname === '' ? 'EN' : pathname.toUpperCase();

  const handleClick = (lang: Lang) => (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(setLanguagePage(lang.name));
    router.push(`/${lang.value}`);
  };


  return (
    <div className='w-16.5'>
      <Listbox value={lng}>
        <div className='relative'>
          <Listbox.Button
            className='relative w-full h-10 cursor-default rounded-lg bg-primary-500 dark:bg-secondary-400 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate'>{lng}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {language.map((lang, langIdx) => (
                <Listbox.Option
                  key={langIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-3 pr-4 ${
                      active ? 'bg-gray-400 text-zinc-50' : 'text-gray-900'
                    }`
                  }
                  value={lang}
                >
                  {({ selected }) => (
                    <>
                      <button
                        onClick={handleClick(lang)}
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {lang.name}
                      </button>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );

};

export default PopUp;