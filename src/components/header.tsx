import Image from "next/image";
import Link from "next/link";
import {
  HamburgerMenu,
  ProfileIcon,
  SearchIcon,
  ShoppingCart,
} from "./svgComponents";
import TopNav from "./topNav";

const Header = () => {
  return (
    <header className=" p-4 sticky top-0 z-50 bg-primaryBg">
      <div className="wrapper flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.avif"
            alt="CellRegen Home"
            width={320}
            height={105}
          />
        </Link>
        <TopNav />
        <div className="flex">
          <button>
            <SearchIcon />
          </button>
          <button className="hidden lg:block">
            <ProfileIcon />
          </button>
          <button>
            <ShoppingCart />
          </button>
          <button className="lg:hidden">
            <HamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
