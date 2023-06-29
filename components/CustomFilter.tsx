'use client';

import { useState, Fragment } from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Listbox, Transition } from '@headlessui/react';
import { CustomFilterProps } from '@/types';

const CustomFilter = ({title, year}:CustomFilterProps) => {
  const [selected, setSelected] = useState();
  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
      onChange={(e)=>setSelected(e)}>
        <div className="w-fir z-10 relative">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
            alt="chevron up down"/>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
