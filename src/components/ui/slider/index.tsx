"use client";

import SlickSlider, { Settings } from "react-slick";
import "./slider.css";

export type SliderSettings = Settings;

export type SliderProps = {
  children: React.ReactNode;
  settings: SliderSettings;
};

export const Slider = ({ children, settings }: SliderProps) => (
  <div>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </div>
);
