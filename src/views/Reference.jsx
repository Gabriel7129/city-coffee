// local imports
import { referenceTitle, referenceSubtitle } from "../data";

import imageOne from "../assets/image-one.jpg";
import imageTwo from "../assets/image-two.jpg";
import imageThree from "../assets/image-three.jpg";

import FadeIn from "../components/FadeIn";

const Reference = () => {
  return (
    <div id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {referenceTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">
          {referenceSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
            <img src={imageOne} alt="coffee" className="h-[400px] w-[700px] rounded " />
            <img src={imageTwo} alt="coffee" className="h-[350px] w-[550px] rounded" />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <div>
            <img src={imageThree} alt="coffee" className="h-[400px] w-[250px]"/>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Reference;
