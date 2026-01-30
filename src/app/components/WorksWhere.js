import Image from 'next/image';
import React from 'react';

const WorksWhere = () => {
    return (
          <div>
             <main className="bg-white py-20">
      <div className="max-w-9xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[16px] font-semibold tracking-widest text-[#00897B] uppercase">
          WORKS WHERE YOU TRADE.
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-textDark leading-tight">
           Seamless integrations with the platforms and tools
you already use.
          </h1>
        </div>
        
        <div className='flex justify-center items-center'>
            <Image src="/WorksWhere.png"
            width={500}
            height={500}
            alt='Works Where'
            ></Image>
        </div>
        

        {/* Buttons */}
        <div className="mt-24 flex justify-center gap-4">
          <button className="px-5 py-3 rounded-md border border-borderSoft text-sm font-medium">
            Learn More →
          </button>
          <button className="border border-dotted border-[#2BAE9A] text-[#2BAE9A] text-sm px-[20px] py-[15px] rounded-md hover:bg-[#2BAE9A] hover:text-white transition">
                      Get Started
                    </button>
        </div>

      </div>
    </main>
        </div>
    );
};

export default WorksWhere;