import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script' // <--- Agregamos esto
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Velas Luz del Alma',
  description: 'Domina el arte de crear velas artesanales de lujo desde cero. Curso completo con técnicas profesionales, fórmulas exclusivas y 3 bonos de regalo por solo $12.99 USD.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/Icon_velas.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/Icon_velas.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/Icon_velas.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/Icon_velas.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
        suppressHydrationWarning={true}>
        {children}
        <Analytics />

        {/* --- INICIO META PIXEL --- */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1316755053598827'); 
            fbq('track', 'PageView');
          `}
        </Script>
        {/* --- FIN META PIXEL --- */}

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vv6sel02tw");
          `}
        </Script>

      </body>
    </html>
  )
}