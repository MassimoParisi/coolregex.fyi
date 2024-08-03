import { Regex } from "lucide-react";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "coolregex.fyi";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          backgroundColor: "#FEF9C3",
          fontSize: 256,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            textAlign: "center",
            fontWeight: 700,
            width: "100%",
          }}
          //   className="font-mono"
        >
          <Regex
            style={{
              width: "32px",
              height: "32px",
              color: "black",
              border: "2px solid #FFD700",
              borderRadius: "0.375rem",
              padding: "0.125rem",
            }}
          />
          <h1
            style={{
              fontSize: "1.875rem",
              lineHeight: "2.25rem",
            }}
          >
            coolregex.
            <span
              style={{
                textDecoration: "underline",
                textDecorationColor: "#FFD700",
                textDecorationStyle: "wavy",
                textUnderlineOffset: "4px",
              }}
            >
              fyi
            </span>
          </h1>
        </div>
      </div>
    )
  );
}
