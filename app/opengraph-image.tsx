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
          background: "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "#111827",
              textAlign: "center",
              margin: 0,
            }}
          >
            Samy Ali
          </h1>
          <p
            style={{
              fontSize: 32,
              color: "#4b5563",
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
