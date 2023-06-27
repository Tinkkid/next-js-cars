"use client";

import { CustomBtnProps } from "@/types";

const CustomBtn = ({title, containerStyles, hundleClick, btnType}: CustomBtnProps) => {
  return (
    <button disabled={false} type={btnType || "button"} className={`custom-btn ${containerStyles}`}
    onClick={hundleClick}>
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomBtn
