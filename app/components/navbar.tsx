"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#1C1C1C] text-white px-4 py-4 flex justify-between items-center">

      <Link href="/" className="font-serif text-xl tracking-wide">
        Luminous By Nature
      </Link>

      {/* 🍔 MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl"
      >
        ☰
      </button>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-6 text-sm items-center">

        <Link href="/commissions">Commissions</Link>
        <Link href="/repairs">Repairs</Link>
        <Link href="/workshops">Workshops</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/shop">Collection</Link>
        <Link href="/contact">Contact</Link>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[#1C1C1C] flex flex-col items-center gap-6 py-6 md:hidden z-50">

          <Link href="/commissions" onClick={() => setOpen(false)}>Commissions</Link>
          <Link href="/repairs" onClick={() => setOpen(false)}>Repairs</Link>
          <Link href="/workshops" onClick={() => setOpen(false)}>Workshops</Link>
          <Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
          <Link href="/shop" onClick={() => setOpen(false)}>Collection</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

        </div>
      )}

    </nav>
  );
}