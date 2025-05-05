"use client";

import Image from "next/image";

export type LoginBannerProps = {
  title: string;
  img: string;
  description: string;
};

const LoginBanner = ({ title, img, description }: LoginBannerProps) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <Image alt={title} src={img} width={620} height={620} />
        <h1
          className={`font-core-sans text-[28px] mt-[25px] w-[50%] text-center text-white`}
        >
          {title}
        </h1>
        <span
          className={`font-din-light text-[22px] mt-[15px] w-[70%] text-center text-white`}
        >
          {description}
        </span>
      </div>
    </div>
  );
};

export default LoginBanner;
