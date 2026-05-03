"use client";

import { useState } from "react";

const images = [
  {
    src: "/images/glass1.jpeg",
    title: "Botanical Panel",
    desc: "Sunshine Coast Residence"
  },
  {
    src: "/images/glass2.jpg",
    title: "Leadlight Restoration",
    desc: "Traditional repair"
  },
  {
    src: "/images/glass3.jpg",
    title: "Sacred Geometry",
    desc: "Custom commission"
  }
];

export default function LightboxGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(false);

  function next() {
    if (index !== null) {
      setIndex((index + 1) % images.length);
      setZoom(false);
    }
  }

  function prev() {
    if (index !== null) {
      setIndex((index - 1 + images.length) % images.length);
      setZoom(false);
    }
  }

  return (
    <>
      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {images.map((img, i) => (
          <div key={i} className="text-center">

            <img
              src={img.src}
              onClick={() => setIndex(i)}
              className="cursor-pointer glow rounded-2xl h-80 w-full object-cover hover:scale-105 transition duration-500"
              alt={img.title}
            />

            <p className="mt-3 text-sm text-gray-600 italic">
              {img.title}
            </p>

          </div>
        ))}

      </div>


      {/* MODAL */}
      {index !== null && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center z-50 px-6">

          {/* CLOSE */}
          <button
            onClick={() => setIndex(null)}
            className="absolute top-6 right-8 text-white text-3xl"
          >
            ✕
          </button>

          {/* LEFT */}
          <button
            onClick={prev}
            className="absolute left-6 text-white text-3xl"
          >
            ←
          </button>

          {/* IMAGE */}
          <img
            src={images[index].src}
            onClick={() => setZoom(!zoom)}
            className={`transition duration-300 rounded-xl ${
              zoom ? "scale-125 cursor-zoom-out" : "max-h-[80vh] max-w-[90vw] cursor-zoom-in"
            }`}
          />

          {/* RIGHT */}
          <button
            onClick={next}
            className="absolute right-6 text-white text-3xl"
          >
            →
          </button>

          {/* CAPTION */}
          <div className="text-center text-white mt-6">
            <h3 className="text-lg">{images[index].title}</h3>
            <p className="text-sm text-gray-300">{images[index].desc}</p>
          </div>

        </div>
      )}
    </>
  );
}