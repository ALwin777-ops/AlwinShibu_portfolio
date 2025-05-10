import React from "react";

const TabButton = ({ selectTab, active, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`relative group px-4 py-2 text-white font-medium focus:outline-none transition duration-300
        ${active ? "text-blue-400" : "text-white hover:text-blue-300"}
      `}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ease-in-out
          ${active ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </button>
  );
};

export default TabButton;
