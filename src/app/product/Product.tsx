import React from 'react';
import image from "next/image";
const Product: React.FC = () => {
    return (
      <section id="product" className="min-h-screen bg-[#0D0D0D] flex flex-col items-center pt-12 pb-20">
        <h2 className="text-5xl font-normal text-white mb-4 pt-16">Product</h2>
        <p className="text-center text-white text-lg max-w-2xl mb-10">
          IgniteTaxAI is an AI-powered assistant designed to streamline tax research, client communication, and compliance for tax professionals and businesses.
        </p>
        <div className="w-full max-w-5xl">
          <h3 className="text-[#eaff6a] text-xl font-normal mb-6">Key Features:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-200 rounded-xl p-6 flex flex-col items-center transition hover:bg-[#DDF45B] hover:shadow-2xl ">
              <div className="bg-[#1a2b1a] rounded-md p-3 mb-4 flex items-center justify-center">
                <img src="/logo/icon-3.png" alt="Tax Research" className="w-18 h-16" />
              </div>
              <div className="text-lg font-medium text-gray-900 mb-2 text-center">Tax Research Automation:</div>
              <div className="text-gray-700 text-center text-base">
                Instantly access Philippine tax laws, rulings, and updates.
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-200 rounded-xl p-6 flex flex-col items-center transition hover:bg-[#DDF45B] hover:shadow-2xl ">
              <div className="bg-[#A9BA43] rounded-md p-3 mb-4 flex items-center justify-center">
                <img src="/logo/icon-4.png" alt="Automate Computations" className="w-18 h-16" />
              </div>
              <div className="text-lg font-medium text-gray-900 mb-2 text-center">Automate tax computations:</div>
              <div className="text-gray-700 text-center text-base">
                Quickly and accurately calculate corporate, individual, and VAT tax obligations.
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-200 rounded-xl p-6 flex flex-col items-center transition hover:bg-[#DDF45B] hover:shadow-2xl ">
              <div className="bg-[#ffe94d] rounded-md p-3 mb-4 flex items-center justify-center">
                <img src="/logo/icon-5.png" alt="Real-time Guidance" className="w-18 h-16" />
              </div>
              <div className="text-lg font-medium text-gray-900 mb-2 text-center">Real-time tax guidance:</div>
              <div className="text-gray-700 text-center text-base">
                Obtain instant clarifications on tax regulations, updates, and compliance requirements.
              </div>
            </div>
            {/* Feature 4 */}
            <div className="bg-gray-200 rounded-xl p-6 flex flex-col items-center transition hover:bg-[#DDF45B] hover:shadow-2xl ">
              <div className="bg-[#558723] rounded-md p-3 mb-4 flex items-center justify-center">
                <img src="/logo/icon-9.png" alt="Client Communication" className="w-18 h-16" />
              </div>
              <div className="text-lg font-medium text-gray-900 mb-2 text-center">Client Communication:</div>
              <div className="text-gray-700 text-center text-base">
                Automate responses to common client queries and generate professional emails.
              </div>
            </div>
            {/* Feature 5 */}
            <div className="bg-gray-200 rounded-xl p-6 flex flex-col items-center transition hover:bg-[#DDF45B] hover:shadow-2xl ">
              <div className="bg-[#232545] rounded-md p-3 mb-4 flex items-center justify-center">
                <img src="/logo/icon-1.png" alt="Compliance and Planning" className="w-18 h-16" />
              </div>
              <div className="text-lg font-medium text-gray-900 mb-2 text-center">Compliance and Planning:</div>
              <div className="text-gray-700 text-center text-base">
                Ensure adherence to Philippine tax regulations and optimize tax strategies.
              </div>
            </div>
            {/* Feature 6 */}
            <div className="bg-gray-200 rounded-xl p-6 flex flex-col items-center transition hover:bg-[#DDF45B] hover:shadow-2xl ">
              <div className="bg-[#ffe94d] rounded-md p-3 mb-4 flex items-center justify-center">
                <img src="/logo/icon-2.png" alt="Document Management" className="w-18 h-16" />
              </div>
              <div className="text-lg font-medium text-gray-900 mb-2 text-center">Document Management:</div>
              <div className="text-gray-700 text-center text-base">
                Securely upload and analyze tax documents with AI-driven insights.
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Product;