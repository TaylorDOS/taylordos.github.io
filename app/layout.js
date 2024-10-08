import "./globals.css";
import localFont from 'next/font/local';

const sfpro = localFont({
  src: './fonts/SF-Pro-Display-Regular.otf',
  variable: '--font-sfpro',
})
const sfprobold = localFont({
  src: './fonts/SF-Pro-Display-Bold.otf',
  variable: '--font-sfprobold',
})

export const metadata = {
  title: "Hao Yi's Portfolio Website",
  description: "Hao Yi's portfolio website is created in Next.js using Tailwind.CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sfprobold.variable}`}>
      <head>
        <meta name="google-site-verification" content="9YqE7E_anQFzzFlDlZWg00R6asvYwKL0toFtZ1-U5o0" />
      </head>
      <body className={`${sfpro.className}`}>
        {children}
      </body>
    </html>
  );
}
