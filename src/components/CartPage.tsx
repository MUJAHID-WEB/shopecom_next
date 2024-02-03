import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { StoreProduct } from "@/type";
import { TbReload } from "react-icons/tb";
import { HiMinusSmall } from "react-icons/hi2";
import { MdOutlineAdd } from "react-icons/md";
import FormatPrice from "./FormatPrice";
import {
  deleteItem,
  minusQuantity,
  plusQuantity,
  resetCart,
} from "@/redux/shopecomSlice";
import { IoMdClose } from "react-icons/io";

const CartPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.shopecom.productData);
  const [warningMsg, setWarningMsg] = useState(false);
  //price
  const [totalOldPrice, setTotalOldPrice] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    setWarningMsg(true);

    let oldPrice = 0;
    let savings = 0;
    let amt = 0;
    data.map((item: StoreProduct) => {
      oldPrice += item.oldPrice * item.quantity;
      savings += item.oldPrice - item.price;
      amt += item.price * item.quantity;

      return;
    });
    setTotalOldPrice(oldPrice);
    setTotalSavings(savings);
    setTotalAmt(amt);
  }, [data]);

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
                            onClick={() => dispatch(deleteItem(item._id))}
                            className="text-sm underline underline-offset-2 decoration text-zinc-600 hover:no-underline hover:text-blue"
                          >
                            Remove
                          </button>
                          <div className="w-28 h-9 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3">
                            <button
                              onClick={() =>
                                dispatch(
                                  minusQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    oldPrice: item.oldPrice,
                                    price: item.price,
                                    brand: item.brand,
                                    image: item.image,
                                    quantity: 1,
                                    category: item.category,
                                  })
                                )
                              }
                              className="text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200"
                            >
                              <HiMinusSmall />
                            </button>
                            <span>{item.quantity}</span>
                            <button
                              onClick={() =>
                                dispatch(
                                  plusQuantity({
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    oldPrice: item.oldPrice,
                                    price: item.price,
                                    brand: item.brand,
                                    image: item.image,
                                    quantity: 1,
                                    category: item.category,
                                  })
                                )
                              }
                              className="text-lg w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200"
                            >
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
                onClick={() => dispatch(resetCart())}
                className="w-44 bg-red-500 text-white h-10 rounded-full text-base font-semibold hover:bg-red-800 duration-300"
              >
                Reset Cart
              </button>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="w-1/3 p-4 mt-24 h-[500px] border border-b-zinc-400 rounded-md flex flex-col justify-center items-start gap-4">
          <div className="w-full flex flex-col gap-4 border-b border-b-zinc-200 pb-4">
            <button className="bg-blue hover:bg-hoverBg w-full text-white h-10 rounded-full font-semibold duration-300">
              Continue to checkout
            </button>
            <p className="text-sm text-center text-red-500 -mt-4 font-semibold">
              Please sign in for checkout
            </p>
            {warningMsg && (
              <div className="bg-[#002d58] text-white p-2 rounded-lg flex items-center justify-between gap-4">
                <Image
                  className="w-8"
                  width={32}
                  height={0}
                  src="/assets/images/warning.png"
                  alt="warningMsg"
                />
                <p className="text-sm">
                  Items in your cart have reduced prices. check ut now for extra
                  saving!
                </p>
                <IoMdClose
                  onClick={() => setWarningMsg(false)}
                  className="text-3xl hover:text-red-400 cursor-pointer duration-200"
                />
              </div>
            )}
            <p className="text-sm text-center">
              For the best shopping experience,
              <span className="underline underline-offset-2 decoration-[1px] pl-1">
                Sign In
              </span>
            </p>
          </div>
          {/* checkout price */}
          <div className="w-full flex flex-col gap-4 border-b border-zinc-200 pb-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm flex justify-between">
                <p className="font-semibold">
                  Subtotal
                  <span className="pl-2">( {data.length} items )</span>
                </p>
                <p className="line-through text-zinc-500 text-base">
                  <FormatPrice amount={totalOldPrice} />
                </p>
              </div>

              <div className="text-sm flex justify-between">
                <p className="font-semibold">Savings</p>
                <p className="text-[#2a8703] font-bold bg-green-100 py-1 px-[2px] rounded-lg flex">
                  - <FormatPrice amount={totalSavings} />
                </p>
              </div>

              <div className="text-sm flex justify-between">
                <p className="font-semibold">Total Amount</p>
                <p className="text-zinc-800 font-normal text-base">
                  - <FormatPrice amount={totalAmt} />
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-4 border-b border-zinc-200 pb-4">
            <div className="flex flex-col gap-1">
              <div className="text-sm flex justify-between">
                <p className="">Shipping</p>
                <p className="text-[#2a8703]">Free</p>
              </div>
              <div className="text-sm flex justify-between">
                <p className="font-semibold">Taxes</p> 
                <p className="text-zinc-800">Calculated at checkout</p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <p className="">Estimated total</p>
            <p className="text-zinc-800 font-bold text-lg">
              <FormatPrice amount={totalAmt} />
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CartPage;
