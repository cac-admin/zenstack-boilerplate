import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Menu from "~/app/components/Menu";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "QSCCT Learning Platform",
    description: "The Queen's Student Cluster Competition learning platform is an educational tool for use by members of the Queen's SCC Team. The site includes resources on High Performance Computing, parallel processing, both beginner and advanced Linux usage, and C programming.",
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
                    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
                        <Menu />
                        <div className="flex flex-col items-center">
                            {children}
                        </div>
                    </main>
                </TRPCReactProvider>
            </body>
        </html>
    );
}
