export default function Workshops() {
  return (
    <main className="min-h-screen bg-[#F5F1E8] text-[#1C1C1C] p-10">
      <h1 className="text-4xl font-serif mb-6 text-center">Workshops</h1>

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