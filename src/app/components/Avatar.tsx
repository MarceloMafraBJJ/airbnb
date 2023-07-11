"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  src: string | null | undefined;
}

const Avatar = ({ src }: Props) => {
  const router = useRouter();

  return (
    <Image
      className="rounded-full"
      src={src || "/placeholder.jpg"}
      height={30}
      width={30}
      alt={"Avatar"}
    />
  );
};

export default Avatar;
