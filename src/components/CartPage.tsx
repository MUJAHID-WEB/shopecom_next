import React from 'react'
import { useSelector } from 'react-redux'

const CartPage = () => {
    const data = useSelector((state:any)=>state.shopecom.productData)
  return (
    <div className='w-full py-10'>
        <div className='w-full flex gap-10'>
            <div className='w-2/3 flex flex-col gap-5'>
                <h1 className='text-2xl font-bold text-black'> 
                    Cart
                    <span className='text-lightText font-normal pl-3'>
                       ( {data.length} items )
                    </span>
                </h1>
                {/* pickup details */}
                <div>
                    
                </div>
            </div>
            {/* right side */}
            <div className='w-1/3 p-4 mt-24 h-[500px] border border-b-zinc-400 rounded-md flex flex-col justify-center gap-4'>

            </div>
        </div>
    </div>
  )
}

export default CartPage