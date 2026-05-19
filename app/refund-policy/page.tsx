export const metadata = {
  title: "Refund Policy | Luminous By Nature",
};

export default function RefundPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-[#1C1C1C]">

      <h1 className="text-4xl font-serif mb-10">
        Refund Policy
      </h1>

      <div className="space-y-8 leading-relaxed text-gray-700">

        <div>
          <h2 className="text-2xl font-serif mb-3">
            Workshops
          </h2>

          <p>
            Workshop cancellations may be eligible for rescheduling depending on notice provided and venue conditions.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-3">
            Custom Commissions
          </h2>

          <p>
            Deposits for custom commissions are generally non-refundable once design work has commenced.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-3">
            Damaged Items
          </h2>

          <p>
            If an artwork arrives damaged, please contact us promptly so we can assist with repair or replacement options.
          </p>
        </div>

      </div>

    </main>
  );
}