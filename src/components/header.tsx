import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#18365a] flex justify-between items-center p-4">
      <Link href="/">
        <Image
          src="/images/logo.avif"
          alt="CellRegen Home"
          width={320}
          height={105}
        />
      </Link>
      <button>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.048 17.89a6.923 6.923 0 1 0 0-13.847 6.923 6.923 0 0 0 0 13.847z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          ></path>
          <path
            d="m16 16 4.308 4.308"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeMiterlimit="10"
          ></path>
        </svg>
      </button>
      <button>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.148 11.479c-.101-1.428-.125-2.985-.296-4.57C15.577 4.37 14.372 2.64 12 2.64S8.423 4.37 8.148 6.908c-.171 1.586-.195 3.142-.296 4.57"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeMiterlimit="10"
            strokeLinejoin="bevel"
          ></path>
          <path
            d="M20.701 20.438V8.816H3.3v11.622H20.7z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeMiterlimit="10"
          ></path>
        </svg>
      </button>
      <button>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.692 12.646h16.616M3.692 5.762h16.616M3.692 19.608h16.616"
            stroke="currentColor"
            strokeWidth="1.2"
          ></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
