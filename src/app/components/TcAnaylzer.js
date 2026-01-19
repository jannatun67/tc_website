import Image from 'next/image';
import React from 'react';

const TcAnaylzer = () => {
    return (
        <div>
             <section className="max-w-[1200px] mx-auto py-[120px]">
                  <div className="bg-white  grid grid-cols-1 lg:grid-cols-2 ">
                    
                    {/* LEFT */}
                    <div className="px-7">
                      <p className="text-[11px] tracking-[2px] text-[#0EA5A4] font-semibold mb-4">
                       Tc anaylzer
                      </p>
            
                      <h3 className="text-[28px] leading-[36px] font-semibold text-[#0F172A] mb-4">
                       Understand your
                       <br />
                       performance
                       <br />
                       across every account
                      </h3>
            
                      <p className="text-[14px] leading-[22px] text-[#475569] mb-6 max-w-md">
                       Connect all your accounts and get a complete picture of your trading results.</p>
            
                      <p className="text-[14px] leading-[22px] text-[#475569] mb-8 max-w-md">
                       View ROI, win rate, and drawdown per account — or see your total portfolio performance at a glance. The built-in Analyzer transforms your raw data into clarity, helping you see what’s working and what’s not.
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
                        <Image src={"/TcanaylzerImg.png"}
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

export default TcAnaylzer;