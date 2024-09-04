import React from "react";

const Spinner = ({ done }: { done: boolean }) => {
  return (
    <div
      className="fixed inset-0 w-full h-full top-0 left-0 bg-black bg-opacity-50 z-[99999999999] flex justify-center items-cente"
      id="loadingOverlay"
      style={{ display: done ? "none" : "flex" }}
    >
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
