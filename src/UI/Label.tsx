import React from "react";

const Label = ({ title, htmlFor }: { title: string; htmlFor?: string }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium leading-6 text-white"
    >
      {title}
    </label>
  );
};

export default Label;
