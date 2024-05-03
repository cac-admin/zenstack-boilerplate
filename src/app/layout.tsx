import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import Menu from "~/app/components/Menu";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Create T3 App Sample Application",
    description: "This is a sample learning platform created using Create T3 App as a scaffold, with ZenStack for database permission management.",
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
