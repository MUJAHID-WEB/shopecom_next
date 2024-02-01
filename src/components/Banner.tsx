import React from "react";

import Image from "next/image";
import Slider from "react-slick";
import BannerSlider from "./BannerSlider";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import BtnPrimary from "./BtnPrimary";

function SampleNextArrow(props: any) {
  const { onClick } = props;

  return (
    <div
      className="absolute bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;

  return (
    <div
      className="absolute bottom-12 right-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-blue hover:border-transparent hover:text-white cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]">
      {/* react slick slider */}
      <div className="w-2/3 border-[1px] border-gray-200 rounded-lg h-[410px] shadow-bannerShadow relative">
        <Slider {...settings}>
          <BannerSlider
            image="/assets/images/slider/sliderImgOne.webp"
            title="Spring Fashion in bloom"
            description="Now trends & styles to turn heads anytime, on any budget."
            btntext="Shop Now"
            className=""
          />

          <BannerSlider
            image="/assets/images/slider/sliderImgTwo.webp"
            title="Spring Fashion in bloom"
            description="Now trends & styles to turn heads anytime, on any budget."
            btntext="Shop Now"
            className=""
          />

          <BannerSlider
            image="/assets/images/slider/sliderImgThree.webp"
            title="Spring Fashion in bloom"
            description="Now trends & styles to turn heads anytime, on any budget."
            btntext="Shop Now"
            className=""
          />

          <BannerSlider
            image="/assets/images/slider/sliderImgFour.webp"
            title="Spring Fashion in bloom"
            description="Now trends & styles to turn heads anytime, on any budget."
            btntext="Shop Now"
            className=""
          />

          <BannerSlider
            image="/assets/images/slider/sliderImgFive.webp"
            title="Spring Fashion in bloom"
            description="Now trends & styles to turn heads anytime, on any budget."
            btntext="Shop Now"
            className=""
          />
        </Slider>
      </div>

      {/* Side Banner */}

      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between relative">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black">
            Flash pick of the day
          </h2>
          <p className="text-base text-zinc-600 underline underline-offset-2">
            View all
          </p>
        </div>
        <Image
          src="/assets/images/slider/bannerImg.webp"
          alt="bannerImg"
          
          width={250}
          height={200}
          className="w-full object-cover"
        />

        <BtnPrimary btnText="Options" />
        <p className="text-lg text-black font-semibold">From $199.99</p>
        <p className="text-base text-gray-500 -mt-1">
          TV Stand Cabinet for Livin Room ...
        </p>
      </div>
    </div>
  );
};

export default Banner;
