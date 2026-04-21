export default function Navbar() {
  return (
    <nav className="w-full bg-[#1C1C1C] text-white px-6 py-4 flex justify-between items-center">

      <a href="/" className="font-serif text-xl tracking-wide">
        Luminous By Nature
      </a>

      <div className="flex gap-6 text-sm">
        <a href="/commissions" className="hover:text-[#D4A017] transition duration-200">Commissions</a>
        <a href="/repairs" className="hover:text-[#D4A017] transition duration-200">Repairs</a>
        <a href="/workshops" className="hover:text-[#D4A017] transition duration-200">Workshops</a>
        <a href="/contact" className="hover:text-[#D4A017] transition duration-200">Contact</a>
      </div>

    </nav>
  );
}