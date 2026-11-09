import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Favicon: the brand orb on the dark background (hex allowed here: no CSS tokens in ImageResponse)
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#191817",
        borderRadius: "25%",
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: "50%",
          background: "radial-gradient(circle at 32% 28%, #F2B49B 0%, #D97757 45%, #8A4A35 100%)",
        }}
      />
    </div>,
    { ...size },
  );
}
