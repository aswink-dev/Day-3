import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        
        <Navbar />
        {children}
        <Footer />
      
      </body>
    </html>
  );
}
