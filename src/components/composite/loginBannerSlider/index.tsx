"use client";

import {
  ChevronRight as ArrowRight,
  ChevronLeft as ArrowLeft,
} from "lucide-react";

import { Slider, SliderSettings } from "@/components/ui/slider";
import LoginBanner, {
  LoginBannerProps,
} from "@/components/composite/loginBanner";

export type SlickArrowProps = {
  currentSlide?: number;
  slideCount?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
};

const SlickButtonFix = ({
  currentSlide: _currentSlide,
  slideCount: _slideCount,
  children,
  ...props
}: SlickArrowProps) => {
  void _currentSlide;
  void _slideCount;

  return <span {...props}>{children}</span>;
};

const settings: SliderSettings = {
  slidesToShow: 1,
  infinite: true,
  lazyLoad: "ondemand",
  dots: true,
  nextArrow: (
    <SlickButtonFix>
      <ArrowRight size={35} />
    </SlickButtonFix>
  ),
  prevArrow: (
    <SlickButtonFix>
      <ArrowLeft size={35} />
    </SlickButtonFix>
  ),
  autoplay: true,
};

export type LoginBannerSliderProps = {
  items: LoginBannerProps[];
};

const LoginBannerSlider = ({ items }: LoginBannerSliderProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[800px] h-auto">
        <Slider settings={settings}>
          {items.map((item, index) => (
            <LoginBanner key={index} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LoginBannerSlider;
