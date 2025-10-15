export const Star = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6"
    >
      <path
        fill={color === "yellow" ? "#FDCC0D" : "black"}
        d="m12 0 3.7 7.9L24 9.2l-6 6.1 1.4 8.7-7.4-4.1L4.6 24 6 15.3 0 9.2l8.3-1.3z"
      ></path>
    </svg>
  );
};

export const Dot = () => {
  return (
    <svg
      width="3"
      height="3"
      aria-hidden="true"
      viewBox="0 0 2 2"
      className="fill-gray-900"
    >
      <circle cx="1" cy="1" r="1"></circle>
    </svg>
  );
};

export const SearchIcon = () => {
  return (
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
  );
};

export const ShoppingCart = () => {
  return (
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
  );
};

export const HamburgerMenu = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.692 12.646h16.616M3.692 5.762h16.616M3.692 19.608h16.616"
        stroke="currentColor"
        strokeWidth="1.2"
      ></path>
    </svg>
  );
};

export const ProfileIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 12.413a4.358 4.358 0 1 0 0-8.715 4.358 4.358 0 0 0 0 8.715zM3.488 20.857c0-3.085 1.594-5.61 5.26-5.61h6.503c3.667 0 5.261 2.525 5.261 5.61"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
};

export const Arrow = ({ style }: { style: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
    >
      <path
        d="M1.875 7.438 12 17.563 22.125 7.438"
        stroke="currentColor"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

export const Arrow2 = ({ style }: { style: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={style}
    >
      <path
        d="M0 12.5h23m-9.2 9.4 9.2-9.4-9.2-9.4"
        stroke="currentColor"
        stroke-width="1.75"
      ></path>
    </svg>
  );
};
