"use client";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function SalesAds() {
  return (
    <div className="
      bg-black text-white
      flex flex-col-reverse items-center justify-between
      gap-2
      md:flex-row md:gap-0
      py-2 md:py-4
      px-4 sm:px-10 lg:px-32
      w-full
    ">
      
      <div className="w-full flex justify-center">
        <h4 className="text-xs sm:text-sm md:text-base font-medium text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline cursor-pointer">Shop now</span>
        </h4>
      </div>
      <div className="flex items-center space-x-1 mb-2 md:mb-0">
        <p className="text-sm">English</p>
        <KeyboardArrowDownIcon fontSize="small"/>
      </div>
    </div>
  );
}

export default SalesAds;