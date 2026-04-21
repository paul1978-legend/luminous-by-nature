"use client";

import { useEffect } from "react";

export default function Workshops() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://classbento.com.au/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20 text-center">

      <h1 className="text-4xl font-serif mb-6">Workshops</h1>

      <p className="mb-10 max-w-xl mx-auto">
        Join us for a hands-on stained glass experience. Browse upcoming workshops and book directly below.
      </p>

      <div id="classbento-widget" className="max-w-5xl mx-auto"></div>

    </main>
  );
}