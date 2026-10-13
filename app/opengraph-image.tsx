import { ImageResponse } from "next/og";

// Social share preview (Open Graph / Twitter card)
export const alt = "Hirwa Cyuzuzo Willy | Fullstack & Mobile Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OpengraphImage = () => {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    backgroundColor: "#313133",
                    color: "#ffffff",
                    fontFamily: "monospace",
                }}
            >
                <div style={{ display: "flex", fontSize: 32, color: "#71b3b3" }}>Fullstack & Mobile Developer</div>
                <div style={{ display: "flex", fontSize: 96, fontWeight: 700, marginTop: 16 }}>
                    Hirwa<span style={{ color: "#71b3b3" }}>.</span>
                </div>
                <div style={{ display: "flex", fontSize: 34, color: "rgba(255,255,255,0.8)", marginTop: 24, maxWidth: 900, lineHeight: 1.4 }}>
                    Web and mobile products with Next.js, React Native, Django and Node.js
                </div>
                <div style={{ display: "flex", width: 160, height: 6, backgroundColor: "#71b3b3", marginTop: 48, borderRadius: 3 }} />
            </div>
        ),
        size
    );
};

export default OpengraphImage;
