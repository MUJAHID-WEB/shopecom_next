import React from "react";
import { useRouter } from "next/router";
import { AdsComponent } from "./AdsComponent";

const AdsOne = () => {
  return (
    <section className="container flex xl:flex-row lg:flex-row md:flex-row flex-col gap-4 xl:px-6 px-0 justify-center items-center">
      <AdsComponent
        className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-[100%] aspect-[614/268]"
        adsImage='/assets/images/homepage/banner1.png'
        adsAlt="Cosplay Weapons"
      />

      <AdsComponent
        className="xl:w-[50%] lg:w-[50%] md:w-[50%] w-[100%] aspect-[614/268]"
        adsImage='/assets/images/homepage/banner2.png'
        adsAlt="Cosplay Weapons"
      />
    </section>
  );
};

export default AdsOne;
