"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavbarPage = () => {
   const pathname= usePathname();
  //  console.log(pathname);
    return (
        <div>
          <main
      
    >
      {/* Navbar */}
      <nav className="max-w-7.5xl mx-auto flex items-center justify-between px-[56px] py-[35px]">
        <div className="flex items-center gap-2 ">
          <Image src="/logo.png" width={200} height={200} alt="logo" className="z-50"></Image>
        </div>
        <ul className="hidden md:flex items-center gap-[15px] text-sm text-white/80">
          <Link href="/"
           className={
            pathname == "/"? 
            "bg-[#00897B] py-[10px] px-[15px] rounded-2xl":"text-white font-medium  py-[10px] px-[15px] rounded-2xl" 
          }
          >Home</Link>
          <Link href="/analyzer" 
          className={
            pathname == "/analyzer"? 
            "bg-[#00897B] py-[10px] px-[15px] rounded-2xl":"text-white font-medium  py-[10px] px-[15px] rounded-2xl" 
          }
          >Analyzer</Link>

          <Link href="/copier" 
           className={
            pathname == "/copier"? 
            "bg-[#00897B] py-[10px] px-[15px] rounded-2xl":"text-white font-medium  py-[10px] px-[15px] rounded-2xl" 
          }
          >Copier</Link>
          <Link href="/compare"
           className={
            pathname == "/compare"? 
            "bg-[#00897B] py-[10px] px-[15px] rounded-2xl":"text-white font-medium  py-[10px] px-[15px] rounded-2xl" 
          }
          >Compare</Link>
          <Link href="/pricing"
           className={
            pathname == "/pricing"? 
            "bg-[#00897B] py-[10px] px-[15px] rounded-2xl":"text-white font-medium  py-[10px] px-[15px] rounded-2xl" 
          }
          >Pricing</Link>
          <Link href="/about"
           className={
            pathname == "/about"? 
            "bg-[#00897B] py-[10px] px-[15px] rounded-2xl":"text-white font-medium  py-[10px] px-[15px] rounded-2xl" 
          }
          >About</Link>
        </ul>
        <div className="flex items-center gap-[10px]">
          <button className="text-sm text-white/80">Login</button>
          <button className="rounded-full bg-white px-[15px] py-[10px] text-sm font-semibold text-black">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
     
    </main>
        </div>
    );
};

export default NavbarPage;