"use client";

import { useState } from "react";

const images = [
  "/images/glass1.jpeg",
  "/images/glass2.jpg",
  "/images/glass3.jpg",
];

export default function LightboxGallery() {
  const [index, setIndex] = useState<number | null>(null);

  function open(i: number) {
    setIndex(i);
  }

  function close() {
    setIndex(null);
  }

  function next() {
    if (index !== null) {
      setIndex((index + 1) % images.length);
    }
  }

  function prev() {
    if (index !== null) {
      setIndex((index - 1 + images.length) % images.length);
    }
  }

  return (
    <>
      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            onClick={() => open(i)}
            className="cursor-pointer glow rounded-2xl h-80 w-full object-cover hover:scale-105 transition duration-500"
            alt="Stained glass artwork"
          />
        ))}

      </div>


      {/* MODAL */}
      {index !== null && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          <button
            onClick={close}
            className="absolute top-6 right-8 text-white text-3xl"
          >
            ✕
          </button>

          <button
            onClick={prev}
            className="absolute left-6 text-white text-3xl"
          >
            ←
          </button>

          <img
            src={images[index]}
            className="max-h-[80vh] max-w-[90vw] rounded-xl"
          />

          <button
            onClick={next}
            className="absolute right-6 text-white text-3xl"
          >
            →
          </button>

        </div>
      )}
    </>
  );
}