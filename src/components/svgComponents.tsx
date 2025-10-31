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

export const ShippingCar = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.931 16.842H2.823V5.968h11.613v10.874H8.388"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M6.677 18.935a1.746 1.746 0 1 0 0-3.492 1.746 1.746 0 0 0 0 3.492z"
        stroke="currentColor"
        strokeWidth=".987"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M19.753 16.842h1.895v-6.66L19.25 7.786h-4.814v9.057h1.86"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M19.517 12.887h-2.956V9.852h1.91l1.046 1.046v1.99zM5.291 11.405h5.92M9.543 13.588l2.42-2.183-2.42-2.183M18.042 18.935a1.746 1.746 0 1 0 0-3.492 1.746 1.746 0 0 0 0 3.492z"
        stroke="currentColor"
        strokeWidth=".987"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
};

export const SecureLock = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.215 8.989V6.862a2.215 2.215 0 1 0-4.43 0v2.127"
        stroke="currentColor"
        strokeWidth="1.018"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M16.204 9.07V6.804a4.204 4.204 0 1 0-8.408 0V9.07"
        stroke="currentColor"
        strokeWidth="1.018"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M18.461 9.167H5.54v11.698h12.922V9.167z"
        stroke="currentColor"
        strokeWidth="1.05"
        strokeMiterlimit="10"
        strokeLinecap="round"
      ></path>
      <path
        d="M12.889 18.077v-3.29c.5-.303.837-.846.837-1.473a1.727 1.727 0 1 0-3.454 0c0 .627.337 1.17.837 1.473v3.29h1.78z"
        stroke="currentColor"
        strokeWidth=".966"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
};

export const MoneyIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.985 6.985H2.014v10.029h19.97V6.984z"
        stroke="currentColor"
        strokeWidth=".966"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M20.077 8.771H3.923v6.459h16.154V8.771z"
        stroke="currentColor"
        strokeWidth=".798"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M12 15.229a3.229 3.229 0 1 0 0-6.458 3.229 3.229 0 0 0 0 6.458z"
        stroke="currentColor"
        strokeWidth=".798"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M12.696 10.869c-.139-.118-.346-.296-.672-.296-.326 0-.663.207-.663.616 0 .41.375.564.663.693.289.13.758.282.758.813 0 .465-.349.728-.758.728a1.45 1.45 0 0 1-.806-.268M12.024 9.882v.691M12.024 13.424v.694"
        stroke="currentColor"
        strokeWidth=".704"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M6.507 12.273a.273.273 0 1 0 0-.546.273.273 0 0 0 0 .546zM17.493 12.273a.273.273 0 1 0 0-.546.273.273 0 0 0 0 .546z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth=".766"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
};
