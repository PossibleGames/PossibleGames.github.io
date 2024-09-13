import React from 'react'

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center p-4">
      <div className="text-xl font-bold">
        <a href="/">PossibleGames</a>
      </div>

      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="documentation" className="hover:underline">
              Documentation
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
