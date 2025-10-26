// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'CS2 Skin Market Tracker',
  description: 'Portfolio project',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
