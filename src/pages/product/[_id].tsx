import Products from "@/components/Products";
import { addToCart } from "@/redux/shopecomSlice";
import { Product } from "@/type";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { BsInfoCircle, BsStarFill } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";



const ProductDetails = ({productData}: {productData: Product[]}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  console.log(productData)
  const [product, setProduct] = useState<any>({});
  const [isLoading, setLoding] = useState(false);

  useEffect(() => {
    setLoding(true);
    setProduct(router.query);
    setLoding(false);
  }, []);

  const _id = Number(product._id);

  return (
    <div className="w-full bg-white">
      <div className="max-w-contentContainer mx-auto flex flex-row items-center py-4">
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
                <span className="font-bold px-2">withAffirm</span>
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
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: _id,
                      title: product.title,
                      description: product.description,
                      oldPrice: product.oldPrice,
                      price: product.price,
                      brand: product.brand,
                      image: product.image,
                      quantity: 1,
                      category: product.category,
                    })
                  ) &&
                  toast.success(
                    `${product.title.substring(0, 20)} is added to cart`
                  )
                }
                className="w-32 h-10 bg-blue text-white rounded-full hover:bg-[#004f9a] duration-300"
              >
                Add to cart
              </button>
            </div>

            {/* Deliver Options */}
            <div className="">
              <p className="text-base font-semibold pb-2">
                how do you want your item?
              </p>
              <div className="w-full grid grid-cols-3 gap-4 text-xs">
                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                  <Image
                    src="/assets/images/ship/ship1.png"
                    width={40}
                    height={10}
                    alt="shippingImg"
                    className="w-10"
                  />
                  <p className="">Shipping</p>
                  <p className="">Tomorrow</p>
                  <p className="">Free</p>
                </div>
                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                  <Image
                    src="/assets/images/ship/ship2.png"
                    width={40}
                    height={10}
                    alt="shippingImg"
                    className="w-10"
                  />
                  <p className="">Pickup</p>
                  <p className="">Tomorrow</p>
                  <p className="">Free</p>
                </div>
                <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2">
                  <Image
                    src="/assets/images/ship/ship3.png"
                    width={40}
                    height={10}
                    alt="shippingImg"
                    className="w-10"
                  />
                  <p className="">Delivery</p>
                  <p className="">Tomorrow</p>
                </div>
              </div>

              <p className="font-bold text-xs pt-2">
                Dhaka - 1212, Bangladesh
                <span className="font-normal underline underline-offset-2 ml-1">
                  Change
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
{/* Tabs for description and Reviws */}

      
      {/* Related Products */}
      {/* <div>
      <Products
            productData={productData}
            sectionTitle="Related Products"
          />
      </div> */}

      <Toaster
        reverseOrder={false}
        position="top-center"
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default ProductDetails;
