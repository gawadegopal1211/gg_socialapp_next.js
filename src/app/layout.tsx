import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Social App by Gopal G.",
  description: "Implemented a modern social application with a focus on user experience, built with React and Next.js, styled with Tailwind CSS, and incorporating secure authentication through Clerk and data management with Prisma.",
};

const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={nunito.className}>
          <nav className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 fixed z-20">
            <Navbar />
          </nav>
          <main className="bg-[#f0f0ff] pt-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-58 h-[100vh]">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
