import React from "react";
import macbookPNG from "../../assets/macbook.png";

export const MacbookFrame = ({ imageSource, imageAlt }) => {
  return (
    <div className="mb-48 relative w-[300px] h-[172px] -translate-y-[86px] md:w-[400px] md:h-[230px] md:-translate-y-[115px] md:mt-[120px] lg:w-[550px] lg:h-[316px] lg:-translate-y-[158px] lg:mt-40 xl:w-[700px] xl:h-[402px] xl:-translate-y-[201px] xl:mt-48">
      <img src={macbookPNG} alt="" className="absolute z-10 w-full" />
      <div className="w-[79%] rounded-xl z-20 mx-auto h-[91%]">
        <img
          src={imageSource}
          alt={imageAlt}
          className="w-full h-full rounded-xl z-20"
        />
      </div>
    </div>
  );
};

{
  /* mask */
}
