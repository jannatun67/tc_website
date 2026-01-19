import Image from 'next/image';
import React from 'react';

const TradersConnect = () => {
    return (
        <div className="min-h-screen bg-[#F7F9FA] flex items-center justify-center">
              <section className="max-w-[1200px] w-full px-6 pt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* LEFT CONTENT */}
      <div>
        <p className="text-[11px] tracking-[2px] text-[#2BAE9A] font-semibold mb-4">
          TRADERS CONNECT
        </p>

        <h1 className="text-[40px] leading-[48px] font-semibold text-[#0F172A] mb-6">
          We designed <br />
          Traders Connect <br />
          to simplify the <br />
          modern trader’s <br />
          world.
        </h1>

        <p className="text-[15px] leading-[24px] text-[#475569] mb-4 max-w-md">
          Instead of juggling multiple platforms, you get one connected
          system — built for control, insight, and smarter decisions.
        </p>

        <p className="text-[15px] leading-[24px] text-[#475569] mb-8 max-w-md">
          Whether you’re copying trades, analyzing performance, or comparing
          brokers, everything happens in one transparent environment.
        </p>

        <button className="border border-dotted border-[#2BAE9A] text-[#2BAE9A] text-sm px-[20px] py-[15px] rounded-md hover:bg-[#2BAE9A] hover:text-white transition">
          Get Started
        </button>
      </div>

      {/* RIGHT DIAGRAM */}
      <div className="relative flex items-center justify-center">
       
        <div className="">
       <Image src={"/tradersImg.png"}
       width={600}
       height={500}
       ></Image>
        </div>

      </div>

    </section>
        </div>
    );
};

export default TradersConnect;