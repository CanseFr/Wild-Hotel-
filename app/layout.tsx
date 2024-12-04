import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

import "@/app/_styles/globals.css"

export const metadata = {
    title: "The wild hotel",
}


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className="bg-blue-900 text-gray-50 min-h-screen">
        <header>
            <Logo/>
            <Navigation/>
        </header>

        <main>{children}</main>
        <footer>Copyright 2024</footer>
        </body>
        </html>
    )
}






