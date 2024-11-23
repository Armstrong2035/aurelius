export const metadata = {
  title: "Aurelius AI",
  description: "Stoicism coded AI life coach",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F5F5F5" }}>{children}</body>
    </html>
  );
}
