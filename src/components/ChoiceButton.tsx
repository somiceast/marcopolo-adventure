import React from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export const ChoiceButton: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-xl shadow-md transition-colors duration-300"
    >
      {text}
    </button>
  );
};
