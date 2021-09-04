import * as React from "react";
import "./index.css";

export interface TumblerProps {
    type: string;
    text: string;
    disabled?: boolean;
    func?: () => void;
    loading?: boolean;
  };

export const Tumbler = ({type, text, disabled, func, loading}: TumblerProps) => {
  return (
    <div>
      <button
        className={type}
        disabled={disabled}
        onClick={func}
      >
        {text}
      </button>
    </div>
  );
};
