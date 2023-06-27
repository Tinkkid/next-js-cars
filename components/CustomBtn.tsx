"use client";

import Image from 'next/image';

import { CustomBtnProps } from "@/types";

const CustomBtn = ({title, containerStyles, hundleClick, btnType, textStyles, rightIcon}: CustomBtnProps) => {
  return (
    <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyles}`}
    onClick={hundleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (<div className="relative w-6 h-6">
        <Image src={rightIcon} alt="right icon" fill className="object-contain"/>
      </div>)}
    </button>
  )
}

export default CustomBtn
