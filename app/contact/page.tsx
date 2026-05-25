export const metadata = {
  title: "Contact | Luminous By Nature",
  description:
    "Contact Luminous By Nature for stained glass commissions, repairs and workshops.",
};

export default function Contact() {
  return (
    <main className="bg-[#F5F1E8] text-[#1C1C1C] px-6 py-20 text-center">

      <div className="w-12 h-[2px] bg-[#D4A017] mx-auto mb-6"></div>

      <h1 className="text-4xl font-serif mb-6">
        Contact
      </h1>

      <p className="mb-10 max-w-xl mx-auto leading-relaxed">
        Reach out for commissions,
        repairs or workshop enquiries.

        <br /><br />

        Serving Sunshine Coast,
        Brisbane and South East Queensland.
      </p>

      <div className="space-y-4 text-lg">

        <p>
          luminousbynature.com.au@gmail.com
        </p>

        <p>
          0458 899 227
        </p>

        <p>
          Sunshine Coast, Queensland
        </p>

        <p>
          ABN: 11 893 978 849
        </p>

      </div>


      <div className="flex gap-6 justify-center mt-10 text-sm flex-wrap">

  <a
    href="https://www.instagram.com/luminous_bynature/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#D4A017]"
  >
    Instagram
  </a>

  <a
    href="https://www.facebook.com/LuminousByNature"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#D4A017]"
  >
    Facebook
  </a>

  <a
    href="https://www.youtube.com/@luminousbynature9184"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-[#D4A017]"
  >
    YouTube
  </a>

</div>

    </main>
  );
}