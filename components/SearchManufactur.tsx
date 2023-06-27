"use client"

import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';

import { SearchManufacturerProps } from '@/types'

const SearchManufactur = ({manufacturer, setManufacturer}: SearchManufacturerProps) => {
  return (
    <div className='search__manufacturer'>
        <Combobox>
           <div className="relative w-full">
              <Combobox.Button className="absolute top-[14px]">
                 <Image src="/car-logo.svg" width={20}  height={20} alt="Car logo" className="ml-4"/>
              </Combobox.Button>
              <Combobox.Input className="search-manufacturer__input" placeholder="Volkswagen" displayValue={(manufacturer:string) => manufacturer} />
           </div>
      </Combobox>
    </div>
  )
}

export default SearchManufactur
