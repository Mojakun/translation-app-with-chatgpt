import { PropsWithChildren } from "react";
import { css } from "../../../styled-system/css";

type Props = {
  children: React.ReactNode;
};

export function Box({ children }: PropsWithChildren) {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "1rem",
      })}
    >
      {children}
    </div>
  );
}
