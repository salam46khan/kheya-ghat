import HomeBanner from "@/components/UI/Banner";
import AboutSec from "@/components/UI/aboutSection";
import ServiceSec from "@/components/UI/serviceSection";

const HomePage = () => {
  return (
    <div >
      <HomeBanner />
      <div className="relative overflow-hidden">
      <div className="pink-bg top-[180px] left-[10%] bg-[#51144a]"></div>
      <div className="pink-bg top-[800px] right-[10%] bg-[#1b1c58]"></div>
      <div className="pink-bg top-[1450px] left-[10%] bg-[#1b1c58]"></div>
        <AboutSec></AboutSec>
        <ServiceSec></ServiceSec>
      </div>
    </div>
  );
};

export default HomePage;