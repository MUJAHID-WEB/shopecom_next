import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsInfoCircle, BsStarFill } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";

const ProductDetails = () => {
  const router = useRouter();
  // console.log(router)
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    setProduct(router.query);
    setLoding(false);
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="max-w-contentContainer mx-auto flex items-center py-4">
        <div className="w-2/3 h-full flex items-center justify-center overflow-hidden relative">
          <Image
            src={product.image}
            width={500}
            height={0}
            alt="productImage"
            className="w-[80%] transform-origin-top-left cursor-move duration-500"
          />
        </div>
        <div className="w-1/3 h-full flex flex-col gap-2">
          <p className="p-2 text-[#004f9a] text-sm font-semibold border border-gray-400 rounded-md">
            500+ bought since yesterday
          </p>
          <div className="px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-[#004f9a] text-sm border border-[#004f9a] rounded-sm">
                  Best Seller
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border border-red-600  rounded-sm">
                  Rollback
                </button>
              </div>
              <IoMdHeartEmpty className="text-gray-600 text-2xl" />
            </div>
            {/* Product Info */}
            <div className="flex flex-col gap-1">
              <p className="text-sm underline underline-offset-4">
                {product.brand}
              </p>

              <p className="text-xl font-semibold text-black">
                {product.title}
              </p>
              <p className="text-base to-zinc-500">{product.description}</p>
              <div className="flex gap-2 items-center text-xs mt-2">
                <div className="flex gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className="">25</p>
              </div>

              <div className="flex items-end gap-2">
                <p className="font-semibold text-2xl text-[#2a8703]">
                  Now ${product.price}
                </p>
                <p className="text-sm to-zinc-500 line-through flex items-center gap-1">
                  ${product.oldPrice}
                  <span className="">
                    <BsInfoCircle />
                  </span>
                </p>
              </div>
            </div>
            {/* Online Info */}
            <div className="">
                <p className="">
                    <span className="font-semibold">$18/mo</span>
                    <span className="font-bold">withAffirm</span>
                    <span className="underline underline-offset-2">Learn how</span>
                </p>
                <p className="text-xs to-zinc-500 flex items-center gap-1">
                    Price when purchased online
                    <span className="">
                    <BsInfoCircle />
                  </span>
                </p>
            </div>
            {/* Add to cart */}
            <div className="border-b border-b-zinc-300 pb-4">
                <button className="w-32 h-10 bg-blue text-white rounded-full hover:bg-[#004f9a] duration-300">
                    Add to cart
                </button>
            </div>

            {/* Deliver Options */}
            <div className="">
                <p className="text-base font-semibold">
                    how do you want your item?
                </p>
                <div className="w-full grid grid-cols-3 gap-4 text-xs">
                    <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                        <Image src='' width={0} height={0} alt="shippingImg" className=""/>
                        <p className="">Shipping</p>
                        <p className="">Tomorrow</p>
                        <p className="">Free</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
