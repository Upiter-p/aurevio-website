import { ImageResponse } from "next/og";

export const alt = "AurevioPro - AI agents, lead-generation websites and automation for growing businesses";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 18% 18%, rgba(83, 126, 190, 0.5), transparent 30%), linear-gradient(135deg, #06080d 0%, #0d1420 48%, #101827 100%)",
          color: "white",
          padding: 72,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>AurevioPro</div>
        <div style={{ maxWidth: 900, display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 0.98, letterSpacing: -3 }}>
            AI agents, lead-generation websites and automation
          </div>
          <div style={{ color: "rgba(255,255,255,0.78)", fontSize: 30, lineHeight: 1.35 }}>
            For growing businesses that need clearer enquiries, stronger follow-up and practical digital systems.
          </div>
        </div>
        <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 26 }}>aurevio.pro</div>
      </div>
    ),
    size
  );
}
