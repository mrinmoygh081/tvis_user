"use client";
import Image from "next/image";
import Logo from "../../public/asset/images/HerosecImg/Logo2.png";
import HeroImg from "../../public/asset/images/HerosecImg/heroImg.jpg";
import HeroImg2 from "../../public/asset/images/HerosecImg/hero2.png";
import profileImg from "../../public/asset/images/HerosecImg/profile.jpg";

const HeroSection = () => {
  return (
    <div className="bg-[#F3EDE5] max-h-[100vh]">
      <div className="min-h-screen lg:h-auto  flex flex-col lg:flex-row justify-center items-center w-full lg:max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
      
      
        <div id="left" className="w-full lg:h-full lg:w-3/5 flex flex-col py-6 sm:py-8 md:py-10 lg:py-0">
          <div className="w-full h-full flex flex-col ">
            <div id="top" className="w-full lg:h-1/4 py-4 lg:py-4 pl-4 sm:pl-6 md:pl-8 lg:pl-14 flex items-center lg:items-start ">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36">
                <Image src={Logo} alt="TVIS Logo" className="w-full h-full object-contain" />
              </div>
            </div>

            <div id="bottom" className="w-full lg:h-3/4 flex flex-col ">
              <div
                id="heading"
                className="lg:h-3/5 w-full border-b border-[#2d4a47]/20 lg:border-b-2 pl-4 sm:pl-6 md:pl-8 lg:pl-14 flex flex-col sm:flex-row pb-1 sm:pb-0 lg:pb-0 pt-4 lg:pt-0"
              >
                {/* Main Heading */}
                <div className="space-y-4 w-full sm:w-4/5 lg:w-4/5 flex flex-col justify-center items-center md:items-start ">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-serif text-[#2d4a47] leading-tight">
                    Transformational <br /> Healing Guided By <br /> Energy & Wisdom
                  </h1>

                  {/* CTA Button */}
                  <button className="inline-block bg-[#e8876d] hover:bg-[#d97560] text-black font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full transition-colors duration-300 text-xs sm:text-sm uppercase tracking-wide w-fit mb-6">
                    Work With Me
                  </button>
                </div>
                {/* right img */}
                <div className="w-full sm:w-1/5 lg:w-1/5 flex items-end justify-start sm:justify-end lg:justify-end mt-4 sm:mt-0 ">
                  {/* HeroImg2 - Small Image */}
                  <div className="w-32 h-32 sm:w-full sm:h-36 lg:w-full lg:h-36 flex-shrink-0 hidden md:block">
                    <Image src={HeroImg2} alt="Healing hands" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div id="images" className="lg:h-2/5 w-full flex flex-col sm:flex-row pl-4 sm:pl-6 md:pl-8 lg:pl-6 pt-6 sm:pt-0 lg:pt-0 gap-6 sm:gap-0">
                <div className="w-full sm:w-4/5 lg:w-4/5 flex flex-col sm:flex-row">
                  <div className="w-full sm:w-3/4 lg:w-3/4 h-full flex justify-center sm:justify-start lg:justify-center items-center py-4 sm:py-0">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-[#2d4a47] font-quahon text-center sm:text-left lg:text-center">
                      Energy Healing <br /> with <span className="font-laluxes text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">Smita Saha</span>
                    </p>
                  </div>
                  <div className="w-full sm:w-1/4 lg:w-1/4 h-full flex justify-center sm:justify-end lg:justify-end items-start">
                    <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44">
                      <Image src={profileImg} alt="Smita Saha Profile" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block lg:block lg:w-1/5"></div>
              </div>
            </div>
          </div>
        </div>



        <div id="right" className="w-full lg:h-full lg:w-2/5 pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-6 sm:pb-8 lg:pb-0">
          <div className="h-full flex flex-col">
            <div id="image" className="lg:h-5/6 w-full flex justify-center lg:justify-start items-end pb-4 sm:pb-6 lg:pb-0">
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none aspect-square sm:aspect-[4/5] lg:aspect-auto lg:h-[550px]">
                <Image src={HeroImg} alt="Mystical energy visualization" className="w-full lg:w-[80%] h-full object-cover pt-0 lg:pt-4 rounded-2xl md:rounded-xl lg:rounded-none" />
              </div>
            </div>

            <div id="text" className="lg:h-1/6 w-full flex items-center justify-center lg:justify-start pt-4 sm:pt-6 lg:pt-0">
              <div className="text-center lg:text-center w-full lg:w-[80%] px-2 lg:px-0">
                <p className="text-xs sm:text-sm text-[#2d4a47] uppercase tracking-widest font-semibold">Energy Healer • Mentor • Soul Coach • Mystic Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
