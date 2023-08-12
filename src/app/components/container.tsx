"use client";
import { PropsWithChildren } from "react";
import { css } from "../../../styled-system/css";

export function Container({ children }: PropsWithChildren): JSX.Element {
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      })}
    >
      {children}
    </div>
  );
}
