import './ui/global.css';
import { inter } from '@/app/ui/fonts';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} style={{ backgroundColor: "gray" }}>
        <p style={{ color: "yellow" }}>body FRAME: Temporary created this frame so that it is clear where RootLayout exists</p>
        <div style={{ border: "3px dotted red", backgroundColor: "white" }}>{children}</div>
      </body>
    </html>
  );
}
