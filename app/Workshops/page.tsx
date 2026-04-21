export default function Workshops() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20 text-center">

      <h1 className="text-4xl font-serif mb-6">Workshops</h1>
      <p className="mb-10">
        Join us for a hands-on stained glass experience.
      </p>

      <div
        dangerouslySetInnerHTML={{
          __html: `
            <div id="classbento-widget"></div>
            <script src="https://classbento.com.au/widget.js"></script>
          `,
        }}
      />

    </main>
  );
}