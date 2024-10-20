import Image from "next/image";
import React from "react";
import banner from "@/../../public/assets/general/banner.jpg";
const Classes = () => {
  return (
    <div>
      <div>
        <div className="font-semibold text-xl">Classes</div>
        <div className="w-full h-[1px] bg-black mt-2 mb-8"></div>
        <div className="flex gap-9 items-center">
          <div className="flex flex-col gap-2">
            <div className="bg-purple-500 rounded-xl flex items-center justify-center p-3">
              <Image
                src={banner}
                height={1000}
                width={1000}
                className="h-36 w-56 rounded-lg"
                alt="img"
              />
            </div>
            <div className="mx-1">IT Support Course By Google</div>
          </div>
          {/* 2 */}
          <div className="flex flex-col gap-2">
            <div className="bg-purple-500 rounded-xl flex items-center justify-center p-3">
              <Image
                src={banner}
                height={1000}
                width={1000}
                className="h-36 w-56 rounded-lg"
                alt="img"
              />
            </div>
            <div className="mx-1">IT Support Course By Google</div>
          </div>
          {/* 3 */}
          <div className="flex flex-col gap-2">
            <div className="bg-purple-500 rounded-xl flex items-center justify-center p-3">
              <Image
                src={banner}
                height={1000}
                width={1000}
                className="h-36 w-56 rounded-lg"
                alt="img"
              />
            </div>
            <div className="mx-1">IT Support Course By Google</div>
          </div>
          {/* 4 */}
        </div>
      </div>
    </div>
  );
};

export default Classes;
