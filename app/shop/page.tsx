export default function Collection() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20">

      <section className="text-center max-w-4xl mx-auto mb-24">

        <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

        <h1 className="text-5xl font-serif mb-6">
          Shop Collection
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          A curated collection of stained glass works,
          gift offerings and limited releases
          is coming soon.
        </p>

      </section>


      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <img
            src="/images/glass1.jpeg"
            className="glow rounded-xl h-72 w-full object-cover mb-6"
            alt=""
          />

          <h3 className="text-2xl font-serif mb-3">
            Original Artworks
          </h3>

          <p className="text-gray-600">
            One-of-a-kind stained glass pieces
            launching soon.
          </p>
        </div>



        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <img
            src="/images/glass2.jpg"
            className="glow rounded-xl h-72 w-full object-cover mb-6"
            alt=""
          />

          <h3 className="text-2xl font-serif mb-3">
            Gift Vouchers
          </h3>

          <p className="text-gray-600">
            Workshop and custom piece gift options
            arriving soon.
          </p>
        </div>



        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <img
            src="/images/glass3.jpg"
            className="glow rounded-xl h-72 w-full object-cover mb-6"
            alt=""
          />

          <h3 className="text-2xl font-serif mb-3">
            Limited Releases
          </h3>

          <p className="text-gray-600">
            Seasonal pieces and collector drops.
          </p>
        </div>

      </section>



      <section className="text-center py-20 bg-[#EFE7D8] rounded-3xl max-w-5xl mx-auto">

        <h2 className="text-4xl font-serif mb-6">
          Want First Access?
        </h2>

        <p className="max-w-xl mx-auto mb-8 text-gray-700">
          Join the newsletter and be first to know
          when the collection opens.
        </p>

        <a
          href="/contact"
          className="btn-primary"
        >
          Enquire About Available Pieces
        </a>

      </section>

    </main>
  );
}