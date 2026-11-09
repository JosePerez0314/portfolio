import Image from "next/image";
import me from "../public/img/me.jpeg";

export default function Avatar({ size = 32 }: { size?: number }) {
  return (
    <span
      className="relative block shrink-0 overflow-hidden rounded-full border border-line"
      style={{ width: size, height: size }}
    >
      <Image
        src={me}
        alt=""
        fill
        sizes={`${size}px`}
        className="origin-[68%_2%] scale-[1.25] object-cover object-top"
      />
    </span>
  );
}
