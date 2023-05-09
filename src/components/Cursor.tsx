"use client";

import { ReactNode, memo } from "react";
import styles from "../styles.module.css";

export type CursorProps = {
  /** Enable cursor blinking animation */
  cursorBlinking?: boolean;
  /** Change cursor style */
  cursorStyle?: ReactNode;
  /** Change cursor color */
  cursorColor?: string;
};

const MemoizedCursor = ({
  cursorBlinking = true,
  cursorStyle = "|",
  cursorColor = "inherit",
}: CursorProps): JSX.Element => {
  return (
    <span
      style={{ color: cursorColor }}
      className={`${styles.blinkingCursor} ${cursorBlinking ? styles.blinking : ""}`}>
      {cursorStyle}
    </span>
  );
};

export const Cursor = memo(MemoizedCursor);
