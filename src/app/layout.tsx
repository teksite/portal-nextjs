import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import { ThemeProvider } from "@/ui/components/themeProvider";
import Footer from "@/ui/layout/Footer";
import Header from "@/ui/layout/Header";

import "./globals.css";

const vazir = Vazirmatn({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "درگاه خدمات وزارت فرهنگ ",
	description: "درگاه خدمات وزارت فرهنگ",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<ThemeProvider>
			<html lang="fa" dir="rtl">
				<body
					className={`${vazir.className} antialiased bg-slate-50 dark:bg-zinc-950`}
				>
					<Header />
					<main className="min-h-svh">{children}</main>
					<Footer />
				</body>
			</html>
		</ThemeProvider>
	);
}
