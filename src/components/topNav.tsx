"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Arrow } from "./svgComponents";

const TopNav = () => {
  const scrollRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.3;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
    });
  };

  return (
    <nav className="relative max-w-[50rem] mx-auto hidden lg:block">
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-x-12 -translate-y-1/2  cursor-pointer mr-8"
          aria-label="Scroll left"
        >
          <Arrow style={"rotate-90"} />
        </button>
      )}
      <ul
        ref={scrollRef}
        className="flex items-center gap-6 overflow-x-auto overflow-y-visible scrollbar-none scroll-smooth "
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/collections/all">Products</Link>
        </li>
        <li>
          <Link href="/">Choose Your CellRegen Protocol</Link>
        </li>
        <li>
          <Link href="/research">Scientific Research</Link>
        </li>
        <li>
          <Link href="/health-benefits">Health Benefits & Ingredients</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/faqs">FAQs</Link>
        </li>
        <li>
          <Link href="/track-my-order">Track My Order</Link>
        </li>
        <li>
          <Link href="/contact-us">Contact</Link>
        </li>
      </ul>

      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 cursor-pointer "
          aria-label="Scroll right"
        >
          <Arrow style={"-rotate-90"} />
        </button>
      )}
    </nav>
  );
};

export default TopNav;
