"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import CustomBtn from "./CustomBtn";
import { updateSearchParams } from "@/utils";


const ShowMore = ({isNext, pageNumber}: ShowMoreProps) => {
   const router = useRouter();

   const handleNavigation = () => {
      const newLimit = (pageNumber + 1) * 10;
      const newPathName = updateSearchParams("limit", `${newLimit}`);
      router.push(newPathName);
   }
  return (
    <div className="flex-center w-full mt-10 gap-5">
        {!isNext && (
           <CustomBtn
              title="Show More"
              btnType="button"
           containerStyles="bg-primary-blue text-white rounded-full"
           handleClick={handleNavigation}/>
      )}
    </div>
  )
}

export default ShowMore
