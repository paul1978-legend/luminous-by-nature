export default function Shop() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20">

      {/* HERO */}
      <section className="text-center max-w-4xl mx-auto mb-24">

        <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

        <h1 className="text-5xl font-serif tracking-wide mb-6">
          Shop the Collection
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Original stained glass artworks, gift vouchers,
          and special studio offerings.
        </p>

      </section>


      {/* PRODUCTS */}
      <section className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* PRODUCT 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">

          <img
            src="/images/glass1.jpeg"
            className="glow rounded-xl h-72 w-full object-cover mb-6"
            alt=""
          />

          <h3 className="text-2xl font-serif mb-3">
            Botanical Panel
          </h3>

          <p className="text-gray-600 mb-4">
            Original handcrafted stained glass artwork.
          </p>

          <p className="text-xl mb-6">
            $495
          </p>

          <a
            href="YOUR_STRIPE_LINK"
            target="_blank"
            className="btn-primary"
          >
            Buy Now
          </a>

        </div>


        {/* PRODUCT 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">

          <img
            src="/images/glass2.jpg"
            className="glow rounded-xl h-72 w-full object-cover mb-6"
            alt=""
          />

          <h3 className="text-2xl font-serif mb-3">
            Sun Catcher Piece
          </h3>

          <p className="text-gray-600 mb-4">
            Limited handcrafted artwork.
          </p>

          <p className="text-xl mb-6">
            $325
          </p>

          <a
            href="YOUR_STRIPE_LINK"
            target="_blank"
            className="btn-primary"
          >
            Buy Now
          </a>

        </div>


        {/* PRODUCT 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 text-center">

          <img
            src="/images/glass3.jpg"
            className="glow rounded-xl h-72 w-full object-cover mb-6"
            alt=""
          />

          <h3 className="text-2xl font-serif mb-3">
            Workshop Gift Voucher
          </h3>

          <p className="text-gray-600 mb-4">
            Give a creative experience.
          </p>

          <p className="text-xl mb-6">
            $220
          </p>

          <a
            href="YOUR_STRIPE_LINK"
            target="_blank"
            className="btn-primary"
          >
            Buy Gift
          </a>

        </div>

      </section>



      {/* COMMISSION DEPOSIT */}
      <section className="py-24 text-center">

        <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

        <h2 className="text-4xl font-serif mb-6">
          Reserve a Commission
        </h2>

        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Secure a custom design consultation
          with a commission deposit.
        </p>

        <a
          href="YOUR_STRIPE_DEPOSIT_LINK"
          className="btn-primary"
        >
          Reserve Your Commission
        </a>

      </section>

    </main>
  );
}