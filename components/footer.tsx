import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 text-sm tracking-wide mb-5 mt-10 flex flex-col items-center text-center">
      <p className="">сделано в качестве тренировки по использованию nextjs и tailwind</p>
      <Link href="https://t.me/keitsuare" target="_blank" className="flex flex-row items-center gap-2 hover:text-dark">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-telegram"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
        </svg>
        <p>по всем вопросам</p>
      </Link>
    </footer>
  );
};

export default Footer;
