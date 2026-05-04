import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1C1C1C] text-white px-6 py-4 flex justify-between items-center">

      <Link href="/" className="font-serif text-xl tracking-wide">
        Luminous By Nature
      </Link>

      <div className="flex gap-8 text-sm items-center">

        <Link href="/commissions" className="hover:text-[#D4A017]">Commissions</Link>
        <Link href="/repairs" className="hover:text-[#D4A017]">Repairs</Link>
        <Link href="/workshops" className="hover:text-[#D4A017]">Workshops</Link>
        <Link href="/portfolio" className="hover:text-[#D4A017]">Portfolio</Link>
        <Link href="/shop" className="hover:text-[#D4A017]">Collection</Link>
        <Link href="/contact" className="hover:text-[#D4A017]">Contact</Link>

      </div>

    </nav>
  );
}