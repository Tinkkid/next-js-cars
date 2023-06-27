import { MouseEventHandler } from "react";

export interface CustomBtnProps {
   title: string;
   containerStyles?: string;
   hundleClick?: MouseEventHandler<HTMLButtonElement>;
   btnType?: "button" | "submit";

}