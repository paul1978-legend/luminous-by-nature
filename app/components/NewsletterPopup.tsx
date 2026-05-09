"use client";

import { useEffect, useState } from "react";

export default function NewsletterPopup() {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const dismissed =
      localStorage.getItem("newsletterDismissed");

    if (!dismissed) {

      const timer = setTimeout(() => {
        setOpen(true);
      }, 12000);

      return () => clearTimeout(timer);

    }

  }, []);

  function closePopup() {
    localStorage.setItem(
      "newsletterDismissed",
      "true"
    );

    setOpen(false);
  }

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6">

      <div className="light-beam bg-[#F5F1E8] rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center relative">

        {/* CLOSE */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-5 text-xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* GOLD LINE */}
        <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

        {/* TITLE */}
        <h2 className="text-3xl font-serif mb-4">
          Join Our Studio Newsletter
        </h2>

        {/* TEXT */}
        <p className="text-gray-700 leading-relaxed mb-8">
          Be first to hear about new works,
          upcoming workshops,
          collector releases and studio inspirations.
        </p>

        {/* MAILERLITE FORM */}
        <div
          className="ml-embedded"
          data-form="MqRJlj"
        ></div>

        {/* FOOTNOTE */}
        <p className="text-xs text-gray-500 mt-6">
          No spam. Just light and occasional magic ✨
        </p>

      </div>

    </div>

  );
}