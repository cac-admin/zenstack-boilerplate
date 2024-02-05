import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Menu from "./components/Menu";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Ethan's Code Uploader",
    description: "Code running application for the QSCC team.",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`font-sans ${inter.variable}`}>
                <TRPCReactProvider>
                    <main className="min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
                        <Menu />
                        <div className="flex flex-col items-center ">
                            {children}
                        </div>
                    </main>
                </TRPCReactProvider>
            </body>
        </html>
    );
}
