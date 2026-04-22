import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1C1C1C] text-white px-6 py-4 flex justify-between items-center">

      <Link href="/" className="font-serif text-xl tracking-wide">
        Luminous By Nature
      </Link>

      <div className="flex gap-6 text-sm">
        <Link href="/commissions" className="hover:text-[#D4A017] transition duration-200">Commissions</Link>
        <Link href="/repairs" className="hover:text-[#D4A017] transition duration-200">Repairs</Link>
        <Link href="/workshops" className="hover:text-[#D4A017] transition duration-200">Workshops</Link>
        <Link href="/contact" className="hover:text-[#D4A017] transition duration-200">Contact</Link>
      </div>

    </nav>
  );
}