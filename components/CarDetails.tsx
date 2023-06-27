"use client";

import {Fragment} from 'react';
import Image from 'next/image';
import {Transition, Dialog} from '@headlessui/react';

import {CarProps} from '@/types';

interface CarDetailsProp  {
 isOpen:boolean;
 closeModal: ()=> void;
 car: CarProps;
}

const CarDetails =({isOpen, closeModal, car}: CarDetailsProps)=>{
   return (
      <>
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child>
               <div className="fixed inset-0 bg-black bg-opacity-25"/>
            </Transition.Child>
         </Dialog>
      </Transition>
      </>
   )
}

export default CarDetails;