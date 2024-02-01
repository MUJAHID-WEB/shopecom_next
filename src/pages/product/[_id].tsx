import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { IoMdHeartEmpty } from 'react-icons/io';

const ProductDetails = () => {
    const router = useRouter();
    // console.log(router)
    const [product, setProduct] = useState<any>({})
    const [isLoading, setLoding] = useState(false)

    useEffect(()=>{
        setLoding(true);
        setProduct(router.query);
        setLoding(false);
    }, []);

  

  return (
    <div className='w-full bg-white'> 
        <div className='max-w-contentContainer mx-auto flex items-center py-4'>
            <div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>
                <Image src={product.image} width={500} height={0} alt='productImage' className='w-[80%] transform-origin-top-left cursor-move duration-500'/>
            </div>
            <div className='w-1/3 h-full flex flex-col gap-2'>
                <p className='p-2 text-[#004f9a] text-sm font-semibold border border-gray-400 rounded-md'>
                    500+ bought since yesterday
                </p>
                <div className='px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6'>
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2'>
                            <button className='px-2 py-[1px] text-[#004f9a] text-sm border border-[#004f9a] rounded-sm'>
                                Best Seller
                            </button>
                            <button className='px-2 py-[1px] text-red-600 text-sm border border-red-600  rounded-sm'>
                                Rollback
                            </button>
                        </div>
                        <IoMdHeartEmpty className='text-gray-600 text-2xl' />


                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails