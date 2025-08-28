import { TagsIcon } from "../TagsIconProps/index";
import CropPortraitOutlinedIcon from '@mui/icons-material/CropPortraitOutlined';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import BeenhereIcon from '@mui/icons-material/Beenhere';

export default function NewArrivals() {
  return (
    <div className="w-full px-16 py-10">
      <TagsIcon icon={CropPortraitOutlinedIcon} text="Featured" />
      <h1 className="font-bold text-2xl mt-4 mb-8 text-primary">New Arrival</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative rounded-xl overflow-hidden bg-black h-72 md:h-96 lg:h-[600px]">
          <img src="/images/speakers.png" alt="PlayStation 5" className="w-full h-full object-contain p-4" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="font-bold text-xl mb-2">PlayStation 5</h2>
            <p className="mb-4 text-base">Black and White version of the PS5 coming out on sale.</p>
            <a href="#" className="font-semibold underline">Shop Now</a>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-6 h-full">
          <div className="relative rounded-xl overflow-hidden bg-black h-69 md:h-106 lg:h-[305px]">
            <img src="/images/girl.jpg" alt="Women&apos;s Collections" className="w-full h-full object-contain p-4" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="font-bold text-xl mb-2">Women&apos;s Collections</h2>
              <p className="mb-4 text-base">Featured woman collections that give you another vibe.</p>
              <a href="#" className="font-semibold underline">Shop Now</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 h-full">
            <div className="relative rounded-xl overflow-hidden bg-black h-48 md:h-64 lg:h-[265px]">
              <img src="/images/another-speakers-Photoroom.png" alt="Speakers" className="w-full h-full object-contain p-4" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="font-bold text-xl mb-2">Speakers</h2>
                <p className="mb-4 text-base">Amazon wireless speakers</p>
                <a href="#" className="font-semibold underline">Shop Now</a>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden bg-black h-48 md:h-64 lg:h-[265px]">
              <img src="/images/perfume-Photoroom.png" alt="Perfume" className="w-full h-full object-contain p-4" />
              <div className="absolute bottom-6 left-6 text-white">
                <h2 className="font-bold text-xl mb-2">Perfume</h2>
                <p className="mb-4 text-base">GUCCI INTENSE OUD EDP</p>
                <a href="#" className="font-semibold underline">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 py-12 w-full">
        <div className="flex flex-col items-center text-center w-full lg:w-1/3">
          <span className="flex items-center justify-center mb-4">
            <span className="rounded-full bg-gray-300 flex items-center justify-center w-24 h-24">
              <span className="rounded-full bg-black flex items-center justify-center w-16 h-16">
                <FireTruckIcon className="text-white" style={{ fontSize: '2.5rem' }} />
              </span>
            </span>
          </span>
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">FREE AND FAST DELIVERY</h1>
          <p className="text-base md:text-lg text-black">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center text-center w-full lg:w-1/3">
          <span className="flex items-center justify-center mb-4">
            <span className="rounded-full bg-gray-300 flex items-center justify-center w-24 h-24">
              <span className="rounded-full bg-black flex items-center justify-center w-16 h-16">
                <HeadsetMicIcon className="text-white" style={{ fontSize: '2.5rem' }} />
              </span>
            </span>
          </span>
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">24/7 CUSTOMER SERVICE</h1>
          <p className="text-base md:text-lg text-black">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center text-center w-full lg:w-1/3">
          <span className="flex items-center justify-center mb-4">
            <span className="rounded-full bg-gray-300 flex items-center justify-center w-24 h-24">
              <span className="rounded-full bg-black flex items-center justify-center w-16 h-16">
                <BeenhereIcon className="text-white" style={{ fontSize: '2.5rem' }} />
              </span>
            </span>
          </span>
          <h1 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">MONEY BACK GUARANTEE</h1>
          <p className="text-base md:text-lg text-black">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}