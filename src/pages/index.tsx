import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import NavbarBottom from "@/components/NavbarBottom";
import Banner from "@/components/Banner";
import Products from "@/components/Products";
import { Product } from "../type";
import TopFooter from "@/components/TopFooter";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

interface Props {
  productData: Product;
}

export default function Home({ productData }: Props) {

  return (
    <>
      <Head>
        <title>ShopeCom</title>
        <meta name="description" content="Developed by Md. Mujahidul Islam" />
        <meta name="viewport" content="width-device-width, initial-scale=1" />

        <link rel="icon" href="/smallLogo.ico" />
      </Head>

      <main className="bg-lightBlue">
      
        <div className="max-w-contentContainer mx-auto bg-white">
          <Banner />
          <Products productData = {productData}/>
        </div>
      </main>
    </>
  );
}

// SSR for data fetching

export const getServerSideProps = async () => {
  const productData = await (
    await fetch("http://localhost:3000/api/productdata")
  ).json();

  return {
    props: { productData },
  };
};
