

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header style={{ background: "black", color: "white", padding: "10px" }}>
          My App Header
        </header>

        {children}

        <footer style={{ background: "gray", padding: "10px" }}>
          My App Footer
        </footer>
      </body>
    </html>
  );
}