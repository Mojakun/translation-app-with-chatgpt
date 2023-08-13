import React, { TextareaHTMLAttributes } from "react";
import { css } from "../../../styled-system/css";

type BaseProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

type Props = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ placeholder, value, onChange, ...props }: Props) {
  return (
    <textarea
      className={css({
        width: "100%",
        padding: "0.5rem",
        marginBottom: "1rem",
        border: "1px solid #ccc",
      })}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
