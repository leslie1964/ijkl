'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Login · {process.env.BANK_NAME}</title>
        <meta name="description" content={`${process.env.BANK_NAME} provides secure banking solutions for personal and business needs.`} />
        
        {/* Basic favicon */}
        <link rel="icon" href="/assets/favicon.png" />
        
        {/* Alternative favicon formats */}
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.png" />
        
        {/* Apple touch icon for iOS devices */}
        <link rel="apple-touch-icon" href="/assets/favicon.png" />
        
        {/* For IE */}
        <link rel="shortcut icon" href="/assets/favicon.png" />
        
        {/* Add cache-busting query param to force reload */}
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}