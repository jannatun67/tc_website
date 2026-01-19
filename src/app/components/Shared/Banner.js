import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
              {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-20 text-center">
          <p className="mb-[10px] text-xl tracking-widest text-[#E9FF8C]">
            CONNECT. COPY. ANALYZE. SMARTER.
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Bringing every part of your trading journey
            <br className="hidden md:block" />
            into one intelligent platform.
          </h1>
          <p className="mt-[30px] text-white/80 max-w-3xl mx-auto text-sm md:text-[20px]">
            Connect your trading accounts, mirror proven strategies with precision,
            and track your performance across every account – instantly.
          </p>
        </div>

        {/* Mockups */}
        <div className="relative mt-20 flex justify-center items-end gap-6 px-6">
          <Image src="/bannerImg.png"
          width={1000}
          height={500}
          ></Image>
         
        </div>
      </section>
        </div>
    );
};

export default Banner;