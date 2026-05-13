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

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="relative bg-[#F5F1E8] rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-2xl overflow-y-auto max-h-[90vh]">

        {/* CLOSE BUTTON */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-5 text-xl text-gray-500 hover:text-black"
        >
          ×
        </button>

        {/* MAILERLITE FORM */}
        <div
          className="ml-embedded"
          data-form="MqRJlj"
        ></div>

      </div>

    </div>

  );

}