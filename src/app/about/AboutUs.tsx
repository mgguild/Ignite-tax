import React from "react";
import image from "next/image";


const AboutUs: React.FC = () => {
  return (
    <>
      <section id="about_us" className="bg-[#0D0D0D] text-gray-700 body-font min-h-screen w-screen">
          <div className="flex flex-col items-center justify-center bg-full bg-cover object-cover "
                style={{
                  backgroundImage: "url('/backgrounds/ignite-about.png')",
                  backgroundColor: "#0D0D0D", 
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  minHeight: "100vh", 
                }}
            >
            <h2 className="text-5xl font-normal text-white mb-6 mt-20 sm:mt-0">About</h2>
            <p className="text-center text-white text-xl max-w-3xl mb-16">
              IgniteTaxAI empowers tax professionals and businesses across the Philippines with cutting-edge AI technology. Simplify tax research, client communication, and compliance while boosting productivity and ensuring accuracy.
            </p>
            <div className="flex flex-col md:flex-row gap-12">
              {/* Mission */}
              <div className="bg-[#0b0e15] border border-[#262A33] rounded-none px-10 py-10 w-[350px] shadow-lg">
                <h3 className="text-[#eaff6a] text-2xl font-bold mb-4 text-center">Mission</h3>
                <p className="text-gray-200 text-lg text-center">
                  To simplify tax compliance and enhance productivity for tax professionals and businesses in the Philippines through cutting-edge AI-driven solutions.
                </p>
              </div>
              {/* Vision */}
              <div className="bg-[#0b0e15] border border-[#262A33] rounded-none px-10 py-10 w-[350px] shadow-lg mb-10 mb-20 sm:mb-0">
                <h3 className="text-[#eaff6a] text-2xl font-bold mb-4 text-center">Vision</h3>
                <p className="text-gray-200 text-lg text-center">
                  To become the leading AI-powered platform transforming tax management by making compliance effortless, accurate, and efficient.
                </p>
              </div>
            </div>
            </div>
    </section>
    </>
  );
};

export default AboutUs;
