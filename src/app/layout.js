
import "./globals.css";

export const metadata = {
  title: "Calculadora",
  description: "Calculadora para drywall.",
  icons: "/carton.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
