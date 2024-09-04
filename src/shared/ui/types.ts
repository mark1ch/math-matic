import type { ReactNode, MouseEvent } from "react";

export interface UIButtonProps {
  children: ReactNode;
  cls?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface UIModalProps {
  children: ReactNode;
  show: boolean;
  slider?: boolean;
  closeModal: () => void;
}

export interface UIHeadingProps {
  head: string;
  number: number;
  title: string;
  cls?: string;
}

export interface UIGuaranteeProps {
  title: string;
  paragraph1: string;
  paragraph2?: string;
  revers?: boolean;
  even?: boolean;
}

export interface UIQuantityProps {
  pre?: string;
  number: number;
  percent?: boolean;
  text: string;
}

export interface UISliderProps {
  img: string[];
}
