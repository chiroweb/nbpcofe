import type { Metadata } from "next";
import MotionProvider from "@/providers/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "NBP_COFFEE | 완벽한 로스팅의 시작",
  description:
    "커피 로스터기, 제연기, 땅콩버터 머신 등 프리미엄 커피 장비를 설계하고 제작하는 NBP_COFFEE입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className="antialiased"
    >
      <body className="min-h-[100dvh] bg-background text-foreground">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
