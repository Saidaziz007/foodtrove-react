import { FaAngleDown } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { GiBoxUnpacking } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { GiStorkDelivery } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";

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
    url: "/login",
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

export const ADMIN_ITEMS = [
  {
    id: 1,
    title: "0.1",
    info: "Vendors",
  },
  {
    id: 2,
    title: "23",
    info: "Customers",
  },
  {
    id: 3,
    title: "2",
    info: "Products",
  },
];

export const ADMIN_CARDS = [
  {
    id: 1,
    title: "Product Packing",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: <GiBoxUnpacking />,
  },
  {
    id: 2,
    title: "24X7 Support",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: <MdSupportAgent />,
  },
  {
    id: 3,
    title: "Delivery in 5 Days",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: <GiStorkDelivery />,
  },
  {
    id: 4,
    title: "Payment Secure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: <MdOutlinePayment />,
  },
];
