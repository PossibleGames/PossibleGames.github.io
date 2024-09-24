import type { Metadata } from 'next'
import React from 'react'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import './styles/globals.scss'

export const metadata: Metadata = {
  title: 'PossibleGames - SCRIMP',
  description: 'Official Website of PossibleGames organization',
}

function Header() {
  const navLinks = [
    { href: 'about', label: 'About' },
    { href: 'contact', label: 'Contact' },
    { href: 'documentation', label: 'Documentation' },
  ]

  return (
    <header className="flex flex-row justify-between items-center p-4">
      <div className="text-xl font-bold">
        <a href="/">PossibleGames</a>
      </div>

      <nav>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="flex flex-row justify-center p-4">
      <p className="text-xs font-bold">&copy; 2021 PossibleGames</p>
    </footer>
  )
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
