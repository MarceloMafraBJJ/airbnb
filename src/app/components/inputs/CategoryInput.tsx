"use client";

import { IconType } from "react-icons";

interface Props {
  onClick: (value: string) => void;
  selected?: boolean;
  icon: IconType;
  label: string;
}

const CategoryInput = ({ onClick, selected, icon: Icon, label }: Props) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`
      first-letter: flex cursor-pointer flex-col gap-3 rounded-xl border-2 p-4 transition hover:border-black
      ${selected ? "border-black" : "border-neutral-200"}
      `}
    >
      <Icon size={30} />

      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default CategoryInput;
