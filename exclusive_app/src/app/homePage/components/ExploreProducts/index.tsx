import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { TagsIcon } from "../TagsIconProps/index";
import CropPortraitIcon from '@mui/icons-material/CropPortrait';

const products = [
  {
    img: "/images/dogfood.png",
    name: "Breed Dry Dog Food",
    price: "$100",
    rating: 3,
    reviews: 35,
    colors: [],
    isNew: false,
    addToCart: false,
  },
  {
    img: "/images/camera.jpg",
    name: "CANON EOS DSLR Camera",
    price: "$360",
    rating: 4,
    reviews: 95,
    colors: [],
    isNew: false,
    addToCart: true,
  },
  {
    img: "/images/laptop.png",
    name: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: 5,
    reviews: 325,
    colors: [],
    isNew: false,
    addToCart: false,
  },
  {
    img: "/images/products.jpg",
    name: "Curology Product Set",
    price: "$500",
    rating: 4,
    reviews: 145,
    colors: [],
    isNew: false,
    addToCart: false,
  },
  {
    img: "/images/car.jpg",
    name: "Kids Electric Car",
    price: "$960",
    rating: 5,
    reviews: 65,
    colors: ["#db1d54", "#000"],
    isNew: true,
    addToCart: false,
  },
  {
    img: "/images/football-shoes.jpg",
    name: "Jr. Zoom Soccer Cleats",
    price: "$1160",
    rating: 5,
    reviews: 35,
    colors: ["#d4f700", "#000"],
    isNew: false,
    addToCart: false,
  },
  {
    img: "/images/video-game.jpg",
    name: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: 4,
    reviews: 55,
    colors: ["#db1d54", "#000"],
    isNew: true,
    addToCart: false,
  },
  {
    img: "/images/jacket.png",
    name: "Quilted Satin Jacket",
    price: "$660",
    rating: 4,
    reviews: 55,
    colors: ["#004f3b", "#000"],
    isNew: false,
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

export default function ExploreProducts() {
  return (

    <div className="w-full px-4 md:px-12 lg:px-24 py-10">
        <TagsIcon icon={CropPortraitIcon} text="Our Products" className="mb-2.5 pb-6"/>
        <h1 className="text-2xl font-bold">Explore our products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-2">
        {products.map((product, idx) => (
          <div key={idx} className="relative bg-gray-50 rounded-xl shadow-sm p-6 flex flex-col items-start group transition-all hover:shadow-lg">
            {product.isNew && (
              <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-md">NEW</span>
            )}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <FavoriteBorderIcon className="text-gray-700 cursor-pointer" />
              <VisibilityOutlinedIcon className="text-gray-700 cursor-pointer" />
            </div>
            <img
              src={product.img}
              alt={product.name}
              className="w-36 h-36 object-contain mb-4 mx-auto"
            />
            {product.addToCart &&
              <button className="w-full bg-black text-white py-2 rounded-lg font-semibold mb-4 hover:bg-primary transition-all">
                Add To Cart
              </button>
            }
            <div className="w-full text-left font-semibold text-base mb-2">{product.name}</div>
            <div className="w-full text-left">
              <span className="font-bold text-base text-primary  text-[#DB4444]">{product.price}</span>
              <span className="ml-2">
                <StarRow rating={product.rating} />
                <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
              </span>
            </div>
            {product.colors.length > 0 &&
              <div className="mt-3 flex gap-2 justify-start">
                {product.colors.map((color, i) => (
                  <span
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white"
                    style={{ background: color }}
                  ></span>
                ))}
              </div>
            }
          </div>
        ))}
      </div>
     <div className="flex justify-center mt-10">
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#DB4444",
          color: "#fff",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: "1.2rem",
          borderRadius: "0.5rem",
          py: 2,
          px: 6,
          boxShadow: 2,
          '&:hover': {
            backgroundColor: "#c53339",
          },
        }}
      >
        View All Products
      </Button>
    </div>
    </div>
  );
}