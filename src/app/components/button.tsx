import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { css } from "../../../styled-system/css";

type BaseButtonProps = {
  type?: HTMLButtonElement["type"];
  disabled?: boolean;
  onClick?: () => void;
};
type Props = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  type = "button",
  disabled = false,
  onClick,
  children,
  ...props
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <button
      className={css({
        display: "inline-block",
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        border: "none",
        borderRadius: "5px",
        color: "white",
        transition: "background-color 0.3s ease",
        cursor: "pointer",
      })}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
