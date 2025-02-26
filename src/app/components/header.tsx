"use client"

import type React from "react"
import { useState, useEffect } from "react"

const Header = () => {
  const [activeSection, setActiveSection] = useState("")

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
      setActiveSection(targetId)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const navItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Blog", href: "https://medium.com/@kylasbronquillo" },
    { name: "Contact", id: "contact" }
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="py-4">
          <ul className="flex justify-center lg:justify-end space-x-4 lg:space-x-12 flex-wrap text-lg md:text-xl font-hagrid">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.href ? (
                  <a
                    href={item.href}
                    className={`transition-colors ${
                      activeSection === item.id ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    onClick={(e) => item.id && handleScroll(e, item.id)}
                    className={`transition-colors cursor-pointer ${
                      activeSection === item.id ? "text-black" : "text-gray-600 hover:text-black"
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
