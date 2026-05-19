export const metadata = {
  title: "Terms & Conditions | Luminous By Nature",
};

export default function TermsConditions() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-[#1C1C1C]">

      <h1 className="text-4xl font-serif mb-10">
        Terms & Conditions
      </h1>

      <div className="space-y-8 leading-relaxed text-gray-700">

        <p>
          By using this website, you agree to the following terms and conditions.
        </p>

        <div>
          <h2 className="text-2xl font-serif mb-3">
            Commissions
          </h2>

          <p>
            Custom stained glass commissions are handcrafted artworks.
            Final appearance may vary slightly due to the handmade nature of the process.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-3">
            Workshops
          </h2>

          <p>
            Workshop bookings may be subject to venue changes,
            minimum participant numbers and safety requirements.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-3">
            Intellectual Property
          </h2>

          <p>
            All images, designs and written content remain the intellectual property of Luminous By Nature unless otherwise agreed.
          </p>
        </div>

      </div>

    </main>
  );
}