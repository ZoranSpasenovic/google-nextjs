import "./globals.css";
import Footer from "@/components/Home/Footer";

export const metadata = {
  title: "Google Clone",
  description: "A Google Chrone Clone for browsing ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
