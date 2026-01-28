import React from 'react';


const FeatureCardHome = () => {
    return (
        <div>
             <main className="bg-white py-20">
      <div className="max-w-9xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[16px] font-semibold tracking-widest text-[#00897B] uppercase">
            Smarter trading starts with smarter tools.
          </p>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-textDark leading-tight">
            Every feature in Traders Connect is built to give you
            control, clarity, and measurable results
          </h1>
        </div>
        <section className="py-20">
      <div className="max-w-8xl  mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {/* Card */}
          
           <div className=" border border-gray-300 w-[280px] h-[400px] rounded-2xl bg-white text-black hover:bg-teal-700  hover:text-white p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium ">
    Execution Reliability
      </h3>

      <div>
        <h2 className="text-4xl font-bold text-teal-500">
         99.9%
        </h2>
        <p className="mt-3 text-sm  leading-relaxed">
    Cloud-optimized infrastructure for seamless copier execution and data synchronization.
        </p>
      </div>
    </div>

           <div className=" border border-gray-300 w-[280px] h-[296px] rounded-2xl bg-white p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium text-gray-700">
    Automation Coverage
      </h3>

      <div>
        <h2 className="text-4xl font-bold text-teal-700">
         80%
        </h2>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
     Automate copying, analytics, and alerts — covering 80% of your daily tasks.
        </p>
      </div>
    </div>

          {/* Highlight Card */}
          <div className="border border-gray-300 w-[280px] h-[400px] rounded-2xl bg-white text-black hover:bg-teal-700 p-5 hover:text-white flex flex-col justify-between">
            <h3 className="text-sm font-medium opacity-80">
              Portfolio Visibility
            </h3>

            <div>
              <h2 className="text-5xl font-bold text-lime-300">360°</h2>
              <p className="mt-4 text-sm leading-relaxed opacity-90">
                View performance across 100% of your linked accounts in one place.
              </p>
            </div>
          </div>

           <div className=" border border-gray-300 w-[280px] h-[296px] rounded-2xl bg-white p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium text-gray-700">
    Smart Copier
      </h3>

      <div>
        <h2 className="text-4xl font-bold text-teal-700">
         5 layers
        </h2>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
     Risk-control layers — from equity protection to trading-hour filters.
        </p>
      </div>
    </div>

           <div className=" border border-gray-300 w-[280px] h-[400px] rounded-2xl bg-white text-black hover:bg-teal-700  hover:text-white p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium ">
    Risk & Consistency Metrics
      </h3>

      <div>
        <h2 className="text-4xl font-bold text-teal-500">
         24/7
        </h2>
        <p className="mt-3 text-sm  leading-relaxed">
     Continuous monitoring of performance stability and risk exposure across sessions.
        </p>
      </div>
    </div>

              
          <div className=" border border-gray-300 w-[280px] h-[296px] rounded-2xl bg-white p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium text-gray-700">
       Real-Time Alerts
      </h3>

      <div>
        <h2 className="text-4xl font-bold text-teal-700">
          0 delay
        </h2>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
       Receive instant notifications for drawdowns, trades, and news events.
        </p>
      </div>
    </div>

              
          <div className=" border border-gray-300 w-[280px] h-[400px] rounded-2xl bg-white text-black hover:bg-teal-700  hover:text-white p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium ">
        Analyzer Insights
      </h3>

      <div>
        <h2 className="text-4xl font-bold text-teal-500">
          45%
        </h2>
        <p className="mt-3 text-sm  leading-relaxed">
        Up to 45% improvement in strategy consistency based on data tracking.
        </p>
      </div>
    </div>

          
          <div className=" border border-gray-300 w-[280px] h-[296px] rounded-2xl bg-white p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium text-gray-700">
        Comparison Engine
      </h3>

      <div>
        <h2 className="text-4xl font-bold text-teal-700">
          50+
        </h2>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
         Compare 50+ brokers and prop firms side by side instantly.
        </p>
      </div>
    </div>

          <div className=" border border-gray-300 w-[280px] h-[400px] rounded-2xl bg-white text-black hover:bg-teal-700  hover:text-white p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium ">
        Multi-Account ROI Tracking
      </h3>

      <div>
        <h2 className="text-4xl font-bold text-teal-500">
          Live
        </h2>
        <p className="mt-3 text-sm  leading-relaxed">
         Aggregate your total ROI across all connected accounts — updated in real time.
        </p>
      </div>
    </div>

           <div className=" border border-gray-300 w-[280px] h-[296px] rounded-2xl bg-white p-4 flex flex-col justify-between">
      <h3 className="text-sm font-medium text-gray-700">
        Secure Infrastructure
      </h3>

      <div>
        <h2 className="text-4xl font-bold text-teal-700">
          100%
        </h2>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        Read-only, broker-verified API connections.
        </p>
      </div>
    </div>

        </div>
      </div>
    </section>

        

        {/* Buttons */}
        <div className="mt-14 flex justify-center gap-4">
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

export default FeatureCardHome;

