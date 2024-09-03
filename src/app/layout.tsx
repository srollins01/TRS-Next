import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { AOSInit } from './aos'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

const inter = Inter({ subsets: ["latin"] });
config.autoAddCss = false
library.add(fab, fas, far)

export const metadata: Metadata = {
  title: "Tokyo RPG Society",
  description: "Tokyo's #1 community for tabletop RPGs",
  icons: {
    icon: '/trs-icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
