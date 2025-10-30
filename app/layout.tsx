import cn from "classnames";
import "@/styles/app.sass";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";

const hostGrotesk = localFont({ src: "./fonts/HostGrotesk-Bold.woff2" });

const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-rubik",
});

export const metadata: Metadata = {
    title: "FluxxBoard",
    description: "AI-powered task manager. Capture every idea in 3 seconds. AI organizes them instantly. Turn scattered thoughts into shipped projects.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Description no longer than 155 characters */}
                <meta name="description" content="Fluxxboard" />
                {/* Product Name */}
                <meta name="product-name" content="Fluxxboard" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta name="twitter:title" content="Fluxxboard" />
                <meta
                    name="twitter:description"
                    content="AI-powered task manager. Capture every idea in 3 seconds. Turn scattered thoughts into shipped projects."
                />
                <meta name="twitter:creator" content="@ui8" />
                {/* Twitter Summary card images must be at least 120x120px */}
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/fluxxboard-social-share.png"
                />

                {/* Open Graph data for Facebook */}
                <meta property="og:title" content="Fluxxboard" />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/bento-cards-simplelist"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fluxxboard-social-share.png"
                />
                <meta
                    property="og:description"
                    content="AI-powered task manager. Capture every idea in 3 seconds. Turn scattered thoughts into shipped projects."
                />
                <meta
                    property="og:site_name"
                    content="Fluxxboard"
                />
                <meta property="fb:admins" content="132951670226590" />

                {/* Open Graph data for LinkedIn */}
                <meta property="og:title" content="Fluxxboard" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/bento-cards-simplelist"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fluxxboard-social-share.png"
                />
                <meta
                    property="og:description"
                    content="AI-powered task manager. Capture every idea in 3 seconds. Turn scattered thoughts into shipped projects."
                />

                {/* Open Graph data for Pinterest */}
                <meta property="og:title" content="Fluxxboard" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/bento-cards-simplelist"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fluxxboard-social-share.png"
                />
                <meta
                    property="og:description"
                    content="AI-powered task manager. Capture every idea in 3 seconds. Turn scattered thoughts into shipped projects."
                />
            </head>
            <body className={cn(rubik.className, hostGrotesk.className)}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
