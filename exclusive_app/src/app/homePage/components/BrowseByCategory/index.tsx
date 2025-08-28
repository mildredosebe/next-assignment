import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import { TagsIcon } from "../TagsIconProps/index";

const categories = [
  { icon: <PhoneIphoneIcon fontSize="large" />, label: "Phones" },
  { icon: <ComputerIcon fontSize="large" />, label: "Computers" },
  { icon: <WatchIcon fontSize="large" />, label: "SmartWatch" },
  { icon: <PhotoCameraIcon fontSize="large" />, label: "Camera" },
  { icon: <HeadphonesIcon fontSize="large" />, label: "HeadPhones" },
  { icon: <SportsEsportsIcon fontSize="large" />, label: "Gaming" },
];

export default function BrowseByCategory() {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-10">
      <div className="mb-2">
        <TagsIcon icon={CropPortraitIcon} text="Categories"/>
      </div>
      <h1 className="text-2xl font-bold mb-8 text-left">Browse by category</h1>
  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 py-8">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center border border-gray-300 rounded-lg w-full h-40 hover:shadow transition-all bg-white px-4"
          >
            <div className="mb-2">{cat.icon}</div>
            <div className="font-medium text-base text-black">{cat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}