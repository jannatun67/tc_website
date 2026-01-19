import Image from 'next/image';
import React from 'react';

const TcCompare = () => {
    return (
        <div>
             <section className="max-w-[1200px] mx-auto ">
                  
                 
            
                  {/* Card */}
                  <div className="bg-white  grid grid-cols-1 lg:grid-cols-2 ">
                    
                    {/* LEFT */}
                    <div className="px-7">
                      <p className="text-[11px] tracking-[2px] text-[#0EA5A4] font-semibold mb-4">
                       Tc Compare
                      </p>
            
                      <h3 className="text-[28px] leading-[36px] font-semibold text-[#0F172A] mb-4">
                        Compare brokers,
                        <br />
                        prop firms, and
                        <br />
                        strategies side-by-side
                      </h3>
            
                      <p className="text-[14px] leading-[22px] text-[#475569] mb-6 max-w-md">
                       Quickly find the right trading environment or funding program for your goals. </p>
            
                      <p className="text-[14px] leading-[22px] text-[#475569] mb-8 max-w-md">
                       drawdown limits, refund policies, payouts, and rules — all in one interactive, easy-to-read table.Spend less time researching and more time trading with confidence.
                      </p>
            
                      <div className="flex gap-4">
                        <button className="px-5 py-2.5 text-sm border border-[#CBD5E1] rounded-md text-[#0F172A] hover:bg-[#F1F5F9] transition">
                          Learn More →
                        </button>
                        <button className="border border-dotted border-[#2BAE9A] text-[#2BAE9A] text-sm px-[20px] py-[15px] rounded-md hover:bg-[#2BAE9A] hover:text-white transition">
                      Get Started
                    </button>
                      </div>
                    </div>
            
                    {/* RIGHT */}
                    <div className="relative bg-[#F8FAFC] flex items-center justify-center px-12">
                      
                     <div>
                        <Image src={"/tCCopierSectionImg.png"}
                        width={600}
                        height={500}
                        ></Image>
                     </div>
                    </div>
            
                  </div>
                </section>
        </div>
    );
};

export default TcCompare;