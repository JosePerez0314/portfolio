import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 16,
        background: "linear-gradient(to bottom right, #06b6d4, #0e7490)", // cyan-500 to cyan-700
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#0f172a", // slate-950
        fontWeight: 700,
        borderRadius: "25%", // Slight rounding for the tiny icon
      }}
    >
      JP
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  );
}
