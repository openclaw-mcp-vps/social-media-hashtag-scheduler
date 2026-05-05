import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HashScheduler – Schedule Hashtags at Peak Times",
  description: "Analyze hashtag performance by time and day, then automatically schedule posts with your best-performing hashtags."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c7cfff7e-1d66-4a67-96de-3e79e389f57e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
