import React from 'react'

type Props ={
    btnText: string;
}

const BtnPrimary = ({btnText}:Props) => {
  return (
    <button className='w-20 h-7 text-sm font-semibold rounded-full bg-blue text-white hover:bg-[#004f9a] duration-300'>
        {btnText}
    </button>
  )
}

export default BtnPrimary