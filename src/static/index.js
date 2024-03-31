import { FaAngleDown } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export const NAVBAR_ITEMS = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Category",
    icon: <FaAngleDown />,
  },
  {
    id: 3,
    title: "Products",
    icon: <FaAngleDown />,
  },
  {
    id: 4,
    title: "Pages",
    icon: <FaAngleDown />,
  },
  {
    id: 5,
    title: "Blog",
    icon: <FaAngleDown />,
  },
  {
    id: 6,
    title: "Elements",
    icon: <FaAngleDown />,
  },
];

export const NAVBAR_OPTIONS = [
  {
    id: 1,
    title: "Account",
    icon: <LuUser />,
  },
  {
    id: 2,
    title: "Wishlist",
    icon: <FaRegHeart />,
  },
  {
    id: 3,
    title: "Cart",
    icon: <RiShoppingCartLine />,
  },
];

export const HERO_ITEMS = [
  {
    id: 1,
    title: "Shopping",
    icon: <IoClose />,
    color: "#3bb77e",
  },
  {
    id: 2,
    title: "Recips",
    icon: <IoClose />,
    color: "#253d4e",
  },
  {
    id: 3,
    title: "Kitchen",
    icon: <IoClose />,
    color: "#3bb77e",
  },
  {
    id: 4,
    title: "News",
    icon: <IoClose />,
    color: "#3bb77e",
  },
  {
    id: 5,
    title: "Food",
    icon: <IoClose />,
    color: "#3bb77e",
  },
];

export const PRODUCT_ITEMS = [
  {
    id: 1,
    title: "All",
    color: "#3bb77e",
  },
  {
    id: 2,
    title: "Milks & Dairies",
    color: "rgba(37, 61, 78, 1)",
  },
  {
    id: 3,
    title: "Coffes & Teas",
    color: "rgba(37, 61, 78, 1)",
  },
  {
    id: 4,
    title: "Pet Foods",
    color: "rgba(37, 61, 78, 1)",
  },
  {
    id: 5,
    title: "Meats",
    color: "rgba(37, 61, 78, 1)",
  },
  {
    id: 6,
    title: "Vegetables",
    color: "rgba(37, 61, 78, 1)",
  },
  {
    id: 7,
    title: "Fruits",
    color: "rgba(37, 61, 78, 1)",
  },
];
