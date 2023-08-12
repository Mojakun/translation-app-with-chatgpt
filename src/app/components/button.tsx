import { PropsWithChildren } from "react";
import { css } from "../../../styled-system/css";

type Props = {
  disabled?: boolean;
  onClick: () => void;
};
export function Button({
  disabled = false,
  onClick,
  children,
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
    >
      {children}
    </button>
  );
}
