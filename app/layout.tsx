import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Click 3.4 — Tudo ao alcance de um click',
  description: 'Transforme sua visão em realidade com a Click 3.4. Inovação em tecnologia para impulsionar seu negócio em Angola.',
  keywords: 'tecnologia, desenvolvimento web, mobile, Angola, Luanda, software, inovação',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-AO" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light text-dark antialiased">
        {children}
      </body>
    </html>
  )
}
