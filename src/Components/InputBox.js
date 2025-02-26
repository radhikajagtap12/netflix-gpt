import React, { forwardRef } from "react";

const InputBox = forwardRef(({ type, id, name, placeholder }, ref) => {
  return (
    <div className="mb-4">
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full p-3 mt-1 bg-black border border-gray-600 rounded-md 
                                text-white focus:outline-none focus:ring-2 
                                focus:ring-red-600 focus:border-transparent"
      />
    </div>
  );
});

export default InputBox;
