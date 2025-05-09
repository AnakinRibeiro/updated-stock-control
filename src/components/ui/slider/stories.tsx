import type { Meta, StoryFn } from "@storybook/react";
import { Slider } from ".";
import { Settings } from "react-slick";
import LoginBanner from "@/components/composite/loginBanner";

export default {
  title: "UI/Slider",
  component: Slider,
} satisfies Meta<typeof Slider>;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Default: StoryFn = () => (
  <div className="border-2">
    <Slider settings={settings}>
      <LoginBanner
        key={0}
        title="DASHBOARD"
        img="/Group4.png"
        description="Gain insights into your company’s performance from multiple perspectives and revolutionize your prestressing management."
      />

      <LoginBanner
        key={1}
        title="DASHBOARD"
        img="/Group4.png"
        description="Gain insights into your company’s performance from multiple perspectives and revolutionize your prestressing management."
      />

      <LoginBanner
        key={2}
        title="DASHBOARD"
        img="/Group4.png"
        description="Gain insights into your company’s performance from multiple perspectives and revolutionize your prestressing management."
      />
    </Slider>
  </div>
);
