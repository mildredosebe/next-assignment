import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import StarIcon from '@mui/icons-material/Star';
import { TagsIcon } from "../TagsIconProps/index";
import CropPortraitIcon from '@mui/icons-material/CropPortrait';

const bestProducts = [
  {
    img: "/images/hoodie.png",
    name: "The north coat",
    price: "$260",
    oldPrice: "$360",
    rating: 5,
    reviews: 65,
  },
  {
    img: "/images/gucci.jpg",
    name: "Gucci duffle bag",
    price: "$960",
    oldPrice: "$1160",
    rating: 4,
    reviews: 65,
  },
  {
    img: "/images/proof.png",
    name: "RGB liquid CPU Cooler",
    price: "$160",
    oldPrice: "$170",
    rating: 5,
    reviews: 65,
  },
  {
    img: "/images/desk.png",
    name: "Small BookSelf",
    price: "$360",
    oldPrice: "",
    rating: 5,
    reviews: 65,
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <span>
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
          fontSize="small"
        />
      ))}
    </span>
  );
}

export default function BestSellingProducts() {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24 py-10">
        <TagsIcon icon={CropPortraitIcon} text="This month"/>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Best Selling Products</h1>
        <button className="bg-primary text-white font-semibold px-6 py-2 rounded-lg hover:bg-[#c53339] transition-all">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {bestProducts.map((product, idx) => (
          <div key={idx} className="relative bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col items-start group transition-all hover:shadow-lg">
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <FavoriteBorderIcon className="text-gray-700 cursor-pointer" />
              <VisibilityOutlinedIcon className="text-gray-700 cursor-pointer" />
            </div>
            <img
              src={product.img}
              alt={product.name}
              className="w-36 h-36 object-contain mb-4 mx-auto"
            />
            <div className="w-full text-left font-semibold text-base mb-2">{product.name}</div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary font-bold text-base">{product.price}</span>
              {product.oldPrice &&
                <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
              }
            </div>

            <div className="flex items-center gap-2">
              <StarRow rating={product.rating} />
              <span className="text-gray-500 text-sm">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-black rounded-xl flex flex-col md:flex-row items-center justify-between p-8 md:p-12 mb-8">
        <div className="flex-1 text-white">
          <span className="text-green-400 font-semibold mb-3 block text-lg">Categories</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">Enhance Your<br />Music Experience</h2>
          <div className="flex gap-4 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">23</span>
              <span className="text-xs">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">05</span>
              <span className="text-xs">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">59</span>
              <span className="text-xs">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">35</span>
              <span className="text-xs">Seconds</span>
            </div>
          </div>
          <button className="bg-green-400 text-black font-bold px-8 py-3 rounded-lg text-lg shadow hover:bg-green-500 transition-all">
            Buy Now!
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/images/soundspeak.png"
            alt="Speaker"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
}