import React from "react";
import Nav from "./nav";
import Classes from "./classes";
import Assignments from "./assignments";

const Main = () => {
  return (
    <div className="px-3">
      <div>
        <div className="flex justify-end w-full">
          <Nav />
        </div>
        {/* <div className="h-[400vh]"></div> */}
        <div>
          <Classes />
        </div>
        <div>
          <Assignments />
        </div>
      </div>
    </div>
  );
};

export default Main;
