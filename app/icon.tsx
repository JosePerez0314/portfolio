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
        background: "linear-gradient(to bottom right, #D97757, #B85C3E)", // orange-500 to orange-700
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#1A1918", // [#1A1918]
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
