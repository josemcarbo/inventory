import type { Metadata } from "next"
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";
import App from "./app";

export const metadata: Metadata = {
  title: "Inventory",
  description: "",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <App>
          {children}
        </App>
      </body>
    </html>
  )
}
