import './globals.css'
import Header from "./Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"> 
      <body>
      <Header/>
      {children}
      </body>
    </html>
  )
}
