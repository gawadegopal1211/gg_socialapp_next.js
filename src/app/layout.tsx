import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social App by Gopal G.",
  description: "Implemented a modern social application with a focus on user experience, built with React and Next.js, styled with Tailwind CSS, and incorporating secure authentication through Clerk and data management with Prisma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
