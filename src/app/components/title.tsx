import { css } from "../../../styled-system/css";

type Props = {
  title: string;
};

export function Title({ title }: Props) {
  return (
    <h2 className={css({ fontSize: "1.5rem", marginBottom: "1rem" })}>
      {title}
    </h2>
  );
}
