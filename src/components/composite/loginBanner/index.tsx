"use client";

import localFont from "next/font/local";
import Image from "next/image";

export type LoginBannerProps = {
  title: string;
  img: string;
  description: string;
};

const coreSans = localFont({
  src: "../../../../public/fonts/CoreSansM65Bold.otf",
  display: "swap",
});

const din = localFont({
  src: "../../../../public/fonts/DINCondensed-Light.ttf",
  display: "swap",
});

const LoginBanner = ({ title, img, description }: LoginBannerProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <Image alt={title} src={img} width={620} height={620} />
        <h1
          className={`${coreSans.className} text-[28px] mt-[25px] w-[50%] text-center text-white`}
        >
          {title}
        </h1>
        <span
          className={`${din.className} text-[22px] mt-[15px] w-[70%] text-center text-white`}
        >
          {description}
        </span>
      </div>
    </div>
  );
};

export default LoginBanner;
