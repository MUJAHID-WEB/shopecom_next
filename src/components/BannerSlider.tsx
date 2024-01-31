
import React from 'react'
import Image from 'next/image';

interface Props{
    image: string;
    title: string;
    description: string;
    btntext: string;
    className: string;
}


const BannerSlider = ({image, title, description, btntext, className}:Props) => {
  return (
    <div className='w-full h-[410px] relative'>
          <Image src={image} alt='sliderImgOne' priority width={500} height={0} className='w-full h-full object-cover rounded-lg' />


          <div className='absolute w-60 h-full top-0 left-4 flex flex-col gap-3 text-orange-400' >
            <h1 className='font-bold text-2xl'>
                {title}
            </h1>
            <p className='text-sm leading-5'>
                {description}
            </p>
            <button className='bg-white text-sm text-black font-semibold rounded-full w-24 h-8 border-[1px] border-black'> {btntext} </button>
          </div>
          </div>
  )
}

export default BannerSlider