import type { CustomFlowbiteTheme } from 'flowbite-react';
import { theme } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';

const flowbiteTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: twMerge(
        theme.navbar.root.base,
        'border-b border-gray-200 dark:border-gray-700',
        'bg-gray-50',
      ),
      inner: {
        base: twMerge(
          theme.navbar.root.inner.base,
          'mx-0',
          'lg:container lg:mx-auto',
        ),
      },
    },
  },
  table: {
    root: {
      shadow: '',
    },
  },
  // TODO: use twMerge to override theme values
  sidebar: {
    root: {
      base: 'flex relative max-md:fixed left-0 z-20 flex-col flex-shrink-0 h-full min-h-screen border-r border-gray-200 dark:border-gray-700 lg:flex transition-width dark:bg-gray-800',
    },
    item: {
      base: 'flex  items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
    },
    collapse: {
      button:
        'group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
    },
  },
};

export default flowbiteTheme;
