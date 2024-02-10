import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../type";
import { GoPlus } from "react-icons/go";
import { BsArrowLeft, BsArrowRight, BsStarFill } from "react-icons/bs";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shopecomSlice";
import toast, { Toaster } from "react-hot-toast";
import Slider from "react-slick";

interface Props {
  sectionTitle: string;
  productData: Product[];
}


function SampleNextArrow(props: any) {
  const { onClick } = props;

  return (
    <div
      className="absolute bottom-[50%] left-6 w-12 h-8 border-[1px] shadow-md border-black text-white bg-blue text-xl flex items-center justify-center rounded-md hover:bg-white hover:border-blue hover:text-black cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <BsArrowLeft />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;

  return (
    <div
      className="absolute bottom-[50%] right-6 w-12 h-8 border-[1px] shadow-md border-black text-white bg-blue text-xl flex items-center justify-center rounded-md hover:bg-white hover:border-blue hover:text-black cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <BsArrowRight />
    </div>
  );
}

const Products = ({ productData, sectionTitle }: Props) => {
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 5 products in a row
    slidesToScroll: 1, // Scroll 5 products at a time
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };



  // console.log(productData);
  return (
    <div className="py-6 px-4 w-full">
       <div
          className='container flex justify-between items-center gap-1 pb-6 xl:px-4  px-0'
        >
          <h3 className="w-[calc(100%-120px)] font-medium xl:text-2xl lg:text-xl md:text-xl text-sm capitalize truncate ...">
          {sectionTitle}
          </h3>
          <button className="text-blue-400 w-[100px] font-normal xl:text-2xl lg:text-xl md:text-xl text-s capitalize">
            View All
          </button>
        </div>
        {/* Slider */}
      <Slider {...settings}>
        {productData.map((item: Product, index: number) => (
          
          <div
            key={item._id}
            className='border-[5px] border-white mb-6 group'
          >

         
            <div className="w-full h-[350px] overflow-hidden p-1 border-x-[1px] border-x-gray-200 border-t-[1px] border-t-gray-200">
              <Image
                className="w-full h-full object-contain scale-100 group-hover:scale-105 duration-300"
                width={300}
                height={250}
                src={item.image}
                alt="ItemImage"
              />
            </div>
            {/* Description Start */}
            <div className="px-2 py-4 flex flex-col justify-center border-x-[1px] border-x-gray-200 border-b-[1px] border-b-gray-200">
              <div className="flex justify-between py-2">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
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
                    ) &&
                    toast.success(
                      `${item.title.substring(0, 20)} is added to cart`
                    )
                  }
                  className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] duration-300"
                >
                  <span>
                    <GoPlus />
                  </span>
                  Add
                </button>

                {/* Details */}
                <Link
                  href={{
                    pathname: `product/${item._id}`,
                    query: {
                      _id: item._id,
                      title: item.title,
                      description: item.description,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      brand: item.brand,
                      image: item.image,
                      isNew: item.isNew,
                      category: item.category,
                    },
                  }}
                  as={`product/${item._id}`}
                >
                  <button className="w-20 h-9 bg-white border-[1px] border-black text-black rounded-full flex gap-1 items-center justify-center hover:bg-black hover:text-white duration-300">
                    <span>
                      <GoPlus />
                    </span>
                    Details
                  </button>
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-titleFont text-lg text-green-700 font-semibold">
                  Now ${item.price}
                </p>
                <p className="text-gray-500 line-through decoration-[1px]">
                  ${item.oldPrice}
                </p>
              </div>
              <p className="text-lg font-semibold py-2">
                {item.title.substring(0, 20)}
              </p>
              <p className="text-base text-zinc-500">
                {item.description.substring(0, 50)}...
              </p>

              <div className="flex gap-2 items-center text-sm mt-2">
                <div className="flex flex-row text-yellow text-sm gap-1">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className="text-black">25</p>
              </div>
            </div>
            </div>



        ))}
      </Slider>
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

export default Products;

// const Products = ({ productData }: any) => {
//   const dispatch = useDispatch();

//   // console.log(productData);
//   return (
//     <div className="py-6 px-4 grid grid-cols-4 gap-4">
//       {productData.map((item: Product) => (
//         <div key={item._id} className="border-[1px] border-gray-200 mb-6 group">
//           <div className="w-full h-[350px] overflow-hidden p-1">
//             <Image
//               className="w-full h-full object-contain scale-100 group-hover:scale-105 duration-300"
//               width={300}
//               height={250}
//               src={item.image}
//               alt="ItemImage"
//             />
//           </div>
//           {/* Description Start */}
//           <div className="px-2 py-4 flex flex-col justify-center">
//             <div className="flex justify-between py-2">
//               <button
//                 onClick={() =>
//                  dispatch(
//                     addToCart({
//                       _id: item._id,
//                       title: item.title,
//                       description: item.description,
//                       oldPrice: item.oldPrice,
//                       price: item.price,
//                       brand: item.brand,
//                       image: item.image,
//                       quantity: 1,
//                       category: item.category,
//                     })
//                   ) && toast.success(
//                     `${item.title.substring(0,20)} is added to cart`
//                   )
//                 }
//                 className="w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] duration-300"
//               >
//                 <span>
//                   <GoPlus />
//                 </span>
//                 Add
//               </button>

//               {/* Details */}
//               <Link
//                 href={{
//                   pathname: `product/${item._id}`,
//                   query: {
//                     _id: item._id,
//                     title: item.title,
//                     description: item.description,
//                     oldPrice: item.oldPrice,
//                     price: item.price,
//                     brand: item.brand,
//                     image: item.image,
//                     isNew: item.isNew,
//                     category: item.category,
//                   },
//                 }}
//                 as={`product/${item._id}`}
//               >
//                 <button className="w-20 h-9 bg-white border-[1px] border-black text-black rounded-full flex gap-1 items-center justify-center hover:bg-black hover:text-white duration-300">
//                   <span>
//                     <GoPlus />
//                   </span>
//                   Details
//                 </button>
//               </Link>
//             </div>
//             <div className="flex items-center gap-3">
//               <p className="font-titleFont text-lg text-green-700 font-semibold">
//                 Now ${item.price}
//               </p>
//               <p className="text-gray-500 line-through decoration-[1px]">
//                 ${item.oldPrice}
//               </p>
//             </div>
//             <p className="text-lg font-semibold py-2">
//               {item.title.substring(0, 20)}
//             </p>
//             <p className="text-base text-zinc-500">
//               {item.description.substring(0, 50)}...
//             </p>

//             <div className="flex gap-2 items-center text-sm mt-2">
//               <div className="flex flex-row text-yellow text-sm gap-1">
//                 <BsStarFill />
//                 <BsStarFill />
//                 <BsStarFill />
//                 <BsStarFill />
//                 <BsStarFill />
//               </div>
//               <p className="text-black">25</p>
//             </div>
//           </div>
//         </div>
//       ))}
//       <Toaster
//       reverseOrder={false}
//       position="top-center"
//       toastOptions={{
//         style:{
//           borderRadius: '8px',
//           background: '#333',
//           color: '#fff'
//         }
//       }}
//       />
//     </div>
//   );
// };

// export default Products;
