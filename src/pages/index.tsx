import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import NavbarBottom from "@/components/NavbarBottom";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

    <Head >

      <title>ShopeCom</title>
      <meta name="description" content="Developed by Md. Mujahidul Islam" />
      <meta name="viewport" content="width-device-width, initial-scale=1" />

      <link rel="icon" href="/smallLogo.ico" />
    </Head>

     <main >

    <Navbar />
    
   </main>
    </>
  
  );
}
