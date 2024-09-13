import type { Metadata } from 'next'
import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import Header from './components/header'
import Footer from './components/footer'
import './styles/globals.scss'

export const metadata: Metadata = {
  title: 'PossibleGames - SCRIMP',
  description: 'Official Website of PossibleGames organization',
}

export default function rootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Header />
        <div className="flex flex-col h-screen">
          <main className="flex flex-col items-center justify-center flex-1">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
