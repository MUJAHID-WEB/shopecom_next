import React from "react";
import Image from "next/image";

export const AdsComponent = ({
    className,
    adsImage,
    adsAlt,
}: {
    className: string;
    adsImage: string;
    adsAlt: string;
}) => {
    return (
        <div
            className={`bg-black-secondary ${className} w-full xl:h-[250px] lg:h-[250px] h-[150px]  flex items-center justify-center relative`}
        >
            <Image
                src={adsImage}
                className="text-[#FFFF] object-cover"
                alt={adsAlt}
                fill={true}
            />
        </div>
    );
};
