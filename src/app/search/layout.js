import WebHeader from "@/components/Web/WebHeader";

export default function RootLayout({ children }) {
  return (
    <>
      <WebHeader />
      {children}
    </>
  );
}
