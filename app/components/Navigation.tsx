"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: "about", label: "Om" },
    { id: "app", label: "App" },
    { id: "clients", label: "Kunder" },
    { id: "contact", label: "Kontakt" },
  ];

  return (
    <nav className="">
      <div className="flex items-center justify-between p-4 relative z-30">
        <h1 className="text-2xl text-primary-light z-20">Marthe Coaching</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex flex-wrap gap-4 mt-2 sm:mt-0">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-pink-700 hover:text-pink-900 hover:scale-125 hover:cursor-pointer transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger / Close Icon */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-30 p-2 text-primary-light transition-transform hover:scale-110"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "fixed inset-0 z-20 bg-white flex flex-col items-center justify-center space-y-6 transform transition-all duration-500 ease-in-out",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setIsOpen(false)}
            className="text-pink-800 text-2xl hover:text-pink-600 transition hover:scale-125"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
