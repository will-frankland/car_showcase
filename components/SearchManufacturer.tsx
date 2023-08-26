"use client"

import Image from 'next/image';
import { useState, Fragment } from 'react';

import { Combobox, Transition } from '@headlessui/react'
import { SearchManfacturerProps } from '@/types'

const SearchManufacturer = ({ manufacturer, setManufacturer } : SearchManfacturerProps) => {
  
  const [query, setQuery] = useState('');

  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder='Volkswagen'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}

          >

          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
