import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import { TagsIcon } from "../TagsIconProps/index";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import StarIcon from '@mui/icons-material/Star';

const freshProducts = [
  {
    img: "/images/gamepad-Photoroom.png",
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    oldPrice: "$160",
    discount: "-40%",
    rating: 5,
    reviews: 88,
    addToCart: false,
  },
  {
    img: "/images/gaming-keyboard.jpg",
    name: "AK-900 Wired Keyboard",
    price: "$960",
    oldPrice: "$1160",
    discount: "-35%",
    rating: 4,
    reviews: 75,
    addToCart: true,
  },
  {
    img: "/images/monitor.jpg",
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    oldPrice: "$400",
    discount: "-30%",
    rating: 5,
    reviews: 99,
    addToCart: false,
  },
  {
    img: "/images/table.png",
    name: "S-Series Comfort Chair",
    price: "$375",
    oldPrice: "$400",
    discount: "-25%",
    rating: 5,
    reviews: 99,
    addToCart: false,
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

export default function FreshSales() {
  return (
    <div className="w-full px-4 md:px-12 lg:px-24 pt-10">
      <TagsIcon icon={CropPortraitIcon} text='Todays'/> 

      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Fresh Sales</h1>
        <div className="flex justify-center gap-6 text-center text-black font-bold text-lg mb-2">
          <div>
            <div className="text-2xl">03</div>
            <div className="text-xs font-normal">Days</div>
          </div>
          <div>
            <div className="text-2xl">23</div>
            <div className="text-xs font-normal">Hours</div>
          </div>
          <div>
            <div className="text-2xl">19</div>
            <div className="text-xs font-normal">Minutes</div>
          </div>
          <div>
            <div className="text-2xl">56</div>
            <div className="text-xs font-normal">Seconds</div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
        {freshProducts.map((product, idx) => (
          <div key={idx} className="relative bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col items-center group transition-all hover:shadow-lg">
            <span className="absolute top-4 left-4 bg-[#DB4444] text-white text-xs font-bold px-2 py-1 rounded">{product.discount}</span>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <FavoriteBorderIcon className="text-gray-700 cursor-pointer" />
              <VisibilityOutlinedIcon className="text-gray-700 cursor-pointer" />
            </div>
            <img
              src={product.img}
              alt={product.name}
              className={`w-32 h-32 object-contain mb-4 mx-auto ${idx === 0 ? "block" : ""}`}
              style={idx === 0 ? { marginLeft: "auto", marginRight: "auto", display: "block", maxHeight: "8rem" } : { maxHeight: "8rem" }}
            />
            {product.addToCart &&
              <button className="w-full bg-black text-white py-2 rounded-lg font-semibold mb-4 hover:bg-[#DB4444] transition-all">
                Add To Cart
              </button>
            }
            <div className="w-full text-left font-semibold text-base mb-2">{product.name}</div>
            <div className="flex items-center gap-2 mb-2 w-full">
              <span className="text-[#DB4444] font-bold text-base">{product.price}</span>
              {product.oldPrice &&
                <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
              }
            </div>
            <div className="flex items-center gap-2 w-full">
              <StarRow rating={product.rating} />
              <span className="text-gray-500 text-sm">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 mb-10">
        <button className="bg-[#DB4444] text-white font-bold px-8 py-3 rounded-lg text-lg shadow hover:bg-[#c53339] transition-all">
          View All Products
        </button>
      </div>
    </div>
  );
}