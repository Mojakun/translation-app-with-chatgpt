import React, { forwardRef } from "react";
import { TextareaHTMLAttributes } from "react";
import { css } from "../../../styled-system/css";

type BaseProps = {
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

type Props = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ name, placeholder, onChange, ...props }, ref) => {
    return (
      <textarea
        className={css({
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
          border: "1px solid #ccc",
        })}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        ref={ref}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export { TextArea };
