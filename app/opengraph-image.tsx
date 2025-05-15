import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "Samy Ali - Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to right, #1a1a1a, #2d2d2d)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: "bold",
              color: "#ffffff",
              textAlign: "center",
              margin: 0,
            }}
          >
            Samy Ali
          </h1>
          <p
            style={{
              fontSize: 30,
              color: "#9ca3af",
              textAlign: "center",
              margin: 0,
            }}
          >
            Full-stack Developer
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
