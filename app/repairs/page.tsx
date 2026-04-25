export default function Repairs() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20">

      <h1 className="text-4xl font-serif text-center mb-10">
        Restoration & Repairs
      </h1>

      <p className="text-center max-w-2xl mx-auto mb-16">
        Bringing damaged or aged stained glass back to life with care, precision, and respect for its original beauty.
      </p>

      {/* BEFORE / AFTER */}
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-20">

        <div>
          <p className="mb-2 text-sm text-gray-500">Before</p>
          <img src="/images/before1.jpg" className="rounded-xl" />
        </div>

        <div>
          <p className="mb-2 text-sm text-gray-500">After</p>
          <img src="/images/after1.jpg" className="rounded-xl" />
        </div>

      </div>

      <div className="text-center">
        <a href="/commissions" className="bg-[#D4A017] px-6 py-3 rounded-xl">
          Request a Repair Quote
        </a>
      </div>

    </main>
  );
}