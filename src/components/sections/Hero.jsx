import { Wavy } from "../ui/Wavy";
import profileImage from "../../assets/p.png";
import sketchyImage from "../../assets/q.png";

export const Hero = () => {
  return (
    <Wavy containerClassName="max-w-7xl mx-auto pb-40" blur="16">
      <div className="flex gap-6 max-w-7xl md:gap-0 md:flex-row flex-col-reverse w-[90vw] mx-auto mt-12">
        <div className="md:w-2/3 md:my-auto h-[30vh] md:h-fit md:pt-12">
          <h1 className="text-5xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-50 from-[40%] via-slate-200 via-[60%] to-slate-400 to-[80%]">
            Ali Tarik Alacam
          </h1>
          <h1 className="text-3xl md:text-4xl pt-2 text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-50 from-[40%] via-slate-200 via-[60%] to-slate-400 to-[80%]">
            Software Developer
          </h1>
        </div>
        <div className="md:w-1/3 mx-auto w-[200px] h-[171px] md:h-[30vh] md:flex md:mt-0">
          <img
            src={profileImage}
            alt="profile image"
            className="md:absolute w-full h-full md:w-[300px] md:h-[245px] rounded-[70px]"
          />
          <img
            src={sketchyImage}
            alt="profile image black and white"
            className="hidden md:block md:absolute w-[300px] h-[245px] grayscale rounded-[70px] transition-opacity duration-500 hover:opacity-0"
          />
        </div>
      </div>
    </Wavy>
  );
};
