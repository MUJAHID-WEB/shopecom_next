import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { StoreProduct } from "@/type";
import { TbReload } from "react-icons/tb";
import { HiMinusSmall } from "react-icons/hi2";
import { MdOutlineAdd } from "react-icons/md";
import FormatPrice from "./FormatPrice";
import { deleteItem, minusQuantity, plusQuantity, resetCart } from "@/redux/shopecomSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.shopecom.productData);

  return (
    <div className="w-full py-10">
      <div className="w-full flex gap-10">
        <div className="w-2/3 flex flex-col gap-5">
          <h1 className="text-2xl font-bold text-black">
            Cart
            <span className="text-lightText font-normal pl-3">
              ( {data.length} items )
            </span>
          </h1>
          {/* pickup details */}
          <div>
            <div className="text-xl font-bold flex items-center gap-2 mb-2">
              <Image
                src="/assets/images/phoneImg.webp"
                width={40}
                height={0}
                alt=""
                className="w-10"
              />
              <p>Pickup and elivery options</p>
            </div>

            <div className="w-full grid grid-cols-3 gap-4 text-xs">
              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                <Image
                  src="/assets/images/ship/ship1.png"
                  width={40}
                  height={0}
                  alt=""
                  className="w-10"
                />
                <p className="font-bold">Shipping</p>
                <p>All items available</p>
              </div>

              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                <Image
                  src="/assets/images/ship/ship2.png"
                  width={40}
                  height={0}
                  alt=""
                  className="w-10"
                />
                <p className="font-bold">Shipping</p>
                <p>All items available</p>
              </div>

              <div className="w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2">
                <Image
                  src="/assets/images/ship/ship3.png"
                  width={40}
                  height={0}
                  alt=""
                  className="w-10"
                />
                <p className="font-bold">Shipping</p>
                <p>All items available</p>
              </div>
            </div>
            {/* cart product */}
            <div className="w-full  p-5 border border-zinc-400 rounded-md flex flex-col gap-4 mt-4">
              <p className="font-semibold text-sm text-zinc-500">
                Sold and shipped by
                <span className="text-black font-semibold">shopeCom.com</span>
              </p>
              <div className="flex gap-2">
                <button className="px-2 py-[1px] text-[#004f9a] text-sm border border-[#004f9a] rounded-sm">
                  Best Seller
                </button>
                <button className="px-2 py-[1px] text-red-600 text-sm border border-red-600 rounded-sm">
                  Rollback
                </button>
              </div>
              {/* Items */}
              <div>
                {data.map((item: StoreProduct) => (
                  <div
                    key={item._id}
                    className="flex items-center justify-between gap-4 border-b border-b-zinc-200 pb4"
                  >
                    <div className="w-3/4 flex flex-row items-center gap-5">
                      <Image
                        className="w-32"
                        width={500}
                        height={500}
                        src={item.image}
                        alt="productImg"
                      />
                      <div className="flex flex-col gap-1.5 my-5">
                        <h2 className="text-base text-zinc-900">
                          {item.title}
                        </h2>
                        <p className="text-sm text-zinc-500">
                          {item.description}
                        </p>
                        <p className="text-sm text-zinc-500">
                          Price: ${item.price}
                        </p>
                        <p className="text-sm text-zinc-500 flex items-center gap-1">
                          <span className="bg-blue rounded-full text-white text-xs w-4 h-4 flex items-center justify-center">
                            <TbReload className="rotate-180" />
                          </span>
                          Free 30-day returns
                        </p>
                        {/* Button */}
                        <div className="flex flex-row items-center gap-5">
                          <button 
                          onClick={()=>dispatch(deleteItem(item._id))}
                          className="text-sm underline underline-offset-2 decoration text-zinc-600 hover:no-underline hover:text-blue">
                            Remove
                          </button>
                          <div className="w-28 h-9 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3">
                            <button
                             onClick={()=>dispatch(minusQuantity({
                                _id: item._id,
                                title: item.title,
                                description: item.description,
                                oldPrice: item.oldPrice,
                                price: item.price,
                                brand: item.brand,
                                image: item.image,
                                quantity: 1,
                                category: item.category,
                             }))}
                             className="text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200">
                              <HiMinusSmall />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                            onClick={()=>dispatch(plusQuantity({
                                _id: item._id,
                                title: item.title,
                                description: item.description,
                                oldPrice: item.oldPrice,
                                price: item.price,
                                brand: item.brand,
                                image: item.image,
                                quantity: 1,
                                category: item.category,
                             }))}
                             className="text-lg w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200">
                              <MdOutlineAdd />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-1/4 text-right flex flex-col items-end gap-1 ">
                      <p className="font-semibold text-xl text-[#2a8703]">
                        <FormatPrice amount={item.price * item.quantity} />
                      </p>
                      <p className="text-sm line-through text-zinc-500">
                        <FormatPrice amount={item.oldPrice * item.quantity} />
                      </p>
                      <div className="flex items-center text-xs gap-2">
                        <p className="bg-green-200 text-[8px] uppercase px-2 py-[1px]">
                          You Save
                        </p>
                        <p className="text-[#2a8703] font-semibold">
                          <FormatPrice
                            amount={
                              item.oldPrice * item.quantity -
                              item.price * item.quantity
                            }
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button 
              onClick={()=>dispatch(resetCart())} 
              className="w-44 bg-red-500 text-white h-10 rounded-full text-base font-semibold hover:bg-red-800 duration-300">
                Reset Cart
              </button>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-1/3 p-4 mt-24 h-[500px] border border-b-zinc-400 rounded-md flex flex-col justify-center gap-4"></div>
      </div>
    </div>
  );
};

export default CartPage;
