import React from "react";

const Loading = () => {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex items-center justify-center ">
          <div className="w-16 h-16 border-b-2 border-primary-focus rounded-full animate-spin"></div>
        </div>
      </section>
    </>
  );
};

export default Loading;
