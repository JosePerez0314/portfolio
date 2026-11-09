import Image from "next/image";
import me from "../public/img/me.jpeg";

export default function Avatar({ size = 32 }: { size?: number }) {
  return (
    <Image
      src={me}
      alt=""
      width={size}
      height={size}
      className="shrink-0 rounded-full border border-line object-cover object-top"
      style={{ width: size, height: size }}
    />
  );
}
