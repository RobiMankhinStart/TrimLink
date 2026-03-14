import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-[85vh]">
      <div className="w-12 h-12 animate-spin  [animation-duration:2s]  border-b-2 border-t-2 border-cyan-800  rounded-full"></div>
    </div>
  );
};

export default Loading;
