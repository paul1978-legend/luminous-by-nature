export const metadata = {
  title: "Privacy Policy | Luminous By Nature",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-[#1C1C1C]">

      <h1 className="text-4xl font-serif mb-10">
        Privacy Policy
      </h1>

      <div className="space-y-8 leading-relaxed text-gray-700">

        <p>
          Luminous By Nature respects your privacy and is committed to protecting your personal information.
        </p>

        <div>
          <h2 className="text-2xl font-serif mb-3">
            Information We Collect
          </h2>

          <p>
            We may collect information you provide through contact forms,
            newsletter signups, workshop bookings and commission enquiries.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-3">
            How Information Is Used
          </h2>

          <p>
            Your information is used only for communication,
            workshop administration, commission enquiries,
            newsletters and improving our services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-3">
            Third-Party Services
          </h2>

          <p>
            We may use trusted third-party services including Stripe,
            MailerLite, Google Analytics and ClassBento.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-serif mb-3">
            Contact
          </h2>

          <p>
            If you have questions regarding privacy,
            please contact us via our Contact page.
          </p>
        </div>

      </div>

    </main>
  );
}